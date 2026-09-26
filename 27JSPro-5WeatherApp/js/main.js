import { getWeatherByCoords, getFlagUrl, getWeatherData } from "./api.js";
import { uiElement, setLoader, renderWeatherData, renderRecentChips, renderError, renderCityList, updateThemeIcon, updateUnitToggle, clearError } from "./ui.js";


const THEME = "theme1"
const RECENT = "recent1"
const UNITS = "units1"

const body = document.body


const STATE = {
    theme: localStorage.getItem(THEME) || 'dark',
    recent: JSON.parse(localStorage.getItem(RECENT) ||  '[]'),
    units: localStorage.getItem(UNITS) || 'metric'
}


document.addEventListener("DOMContentLoaded",()=>{

    handleGoeSearch()
    renderCityList()

    body.setAttribute("data-theme", STATE.theme)
    updateThemeIcon(STATE.theme)

    renderRecentChips(STATE.recent, (city)=>{
        uiElement.searchInput.value = city
        handleSearch(city)
    })

    updateUnitToggle(STATE.units)
})

const handleGoeSearch = () =>{
    window.navigator.geolocation.getCurrentPosition(
        async(position)=>{

            const {latitude, longitude} = position.coords
            //set loader
            setLoader(true)

            const data = await getWeatherByCoords(latitude, longitude, STATE.units)

            setLoader(false)
            const flagUrl = getFlagUrl(data.sys.country)

            renderWeatherData(data, flagUrl, STATE.units)
            //set loader
            pushRecent(data.name)
        },
        () => {
            renderError("failed to locate user")
        }
    )
}

const pushRecent = (city) => {

    const updated = [city,...STATE.recent.filter((c)=> c.toLowerCase () !== city.toLowerCase())].slice(0,6)

    STATE.recent = updated

    renderRecentChips(STATE.recent,(city)=>{
        uiElement.searchInput.value = city
        //handle sarch by city name
        handleSearch(city)
    })

    persist()
}

const handleSearch = async (city) => {

    const name = city.trim()

    if (!name) {
        //render error
        renderError("name is mandatory")

        return
    }

    //clear error 
    clearError()

    setLoader(true)

    try {
        
        const data = await getWeatherData(city, STATE.units)

        if (data.cod == "404") {

            //render error
            renderError("city not found")

            return
        }

        const flagUrl = getFlagUrl(data.sys.country)

        pushRecent(name)

        renderWeatherData(data,flagUrl, STATE.units)
    } catch (error) {
        //render error
        renderError(error.message || "not found city")
    } finally{

        setLoader(false)
    }
}

const persist = () =>{
    localStorage.setItem(THEME,STATE.theme)
    localStorage.setItem(RECENT,JSON.stringify(STATE.recent))
    localStorage.setItem(UNITS,STATE.units)
}


uiElement.themeBtn.addEventListener("click",()=>{
    STATE.theme = STATE.theme === "light" ? "dark": "light"
    body.setAttribute("data-theme", STATE.theme)
    persist()
    updateThemeIcon(STATE.theme)
})

uiElement.unitToggle.querySelectorAll("button").forEach((btn)=>{
    btn.addEventListener("click", async() =>{
        const nextUnits = btn.value

        if (STATE.units === nextUnits) {
            return
        }

        STATE.units = nextUnits

        persist()

        updateUnitToggle(nextUnits)
        handleSearch(STATE.recent[0])
    })
})

uiElement.searchForm.addEventListener("submit",(e) =>{
    e.preventDefault()

    const city = uiElement.searchInput.value
    handleSearch(city)
})