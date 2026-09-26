import { ui, personIcon } from "./ui.js";
import { formatDate, getStatus, getNoteIcon } from "./helpers.js";

const DB_NOTE = "notes2"

const STATE = {
    map: null,
    layer: null,
    clickedCoords: null,
    notes: JSON.parse(localStorage.getItem(DB_NOTE) || '[]')
}

window.navigator.geolocation.getCurrentPosition(
    (e) => loadMap([e.coords.latitude, e.coords.longitude]),
    () => loadMap([59.4173444, 17.8278059])
)

function loadMap(position) {

    STATE.map = L.map("map", { zoomControl: false }).setView(position, 11)

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
    }).addTo(STATE.map);

    L.control.zoom({ position: "bottomright" }).addTo(STATE.map);

    STATE.layer = L.layerGroup().addTo(STATE.map);

    const marker = L.marker(position, { icon: personIcon }).addTo(STATE.map)

    marker.bindPopup("<b> I'm here </b>")

    STATE.map.on("click", onMapClick)

    
    renderNoteCards(STATE.notes)
    renderMarker(STATE.notes)
    

}


function onMapClick(e) {

    STATE.clickedCoords = [e.latlng.lat, e.latlng.lng]

    ui.aside.classList.add("add")

    ui.asideTitle.textContent = "New Note"
}

ui.form.addEventListener("submit", (e) => {
    e.preventDefault()

    const title = e.target[0].value
    const date = e.target[1].value
    const status = e.target[2].value

    if (!title || !date || !status) {
        return alert('Fields can not be empty')
    }

    const newNote = {
        id: new Date().getTime(),
        title,
        date,
        status,
        coords: STATE.clickedCoords
    }

    STATE.notes.push(newNote)

    localStorage.setItem(DB_NOTE, JSON.stringify(STATE.notes))

    ui.aside.classList.remove("add")
    ui.asideTitle.textContent = "Notes"

    //render note card  render marker

    renderNoteCards(STATE.notes)
    renderMarker(STATE.notes)

    ui.form.reset()
})

function renderNoteCards(notes) {

    const notesHtml = notes
        .map(
            (note) => `
        <li>
          <div>
            <h3>${note.title}</h3>
            <p>${formatDate(note.date)}</p>
            <p class="status">${getStatus(note.status)}</p>
          </div>
          <div class="icons">
            <i data-id="${note.id}" id="fly-btn" class="bi bi-airplane-fill"></i>
            <i data-id="${note.id}" id="trash-btn" class="bi bi-trash"></i>
          </div>
        </li> `
        )
        .join(" ")

    ui.noteList.innerHTML = notesHtml

    document.querySelectorAll("#trash-btn").forEach((btn) => {
        const id = +btn.dataset.id
        btn.addEventListener("click", () => deleteNote(id))
    })

    document.querySelectorAll("#fly-btn").forEach((btn) => {
        const id = +btn.dataset.id
        btn.addEventListener("click", () => flyToNote(id))
    })
        
}

const flyToNote = (id) => {

    const note = STATE.notes.find((note) => note.id === id)
    STATE.map.flyTo(note.coords, 15)
}

const deleteNote = (id) => {


    if (!confirm("are u sure that u wanna delete it")) {
        return
    }

    STATE.notes = STATE.notes.filter((note) => note.id != id)

    localStorage.setItem(DB_NOTE, JSON.stringify(STATE.notes))

    renderNoteCards(STATE.notes)
   /renderMarker(STATE.notes)
}

function renderMarker(notes) {
    STATE.layer.clearLayers()

    notes.forEach((note) => {
        const icon = getNoteIcon(note.status)
        const marker = L.marker(note.coords, { icon }).addTo(STATE.layer);
        marker.bindPopup(`<p class="popup">${note.title}<p>`)

    })

}

ui.cancelButton.addEventListener("click",()=>{
    ui.aside.classList.remove("add")
    ui.asideTitle.textContent = "Notes"
})