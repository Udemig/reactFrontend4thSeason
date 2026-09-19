//access elements
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById('next')
const repeatButton = document.getElementById('repeat')
const shuffleButton = document.getElementById('shuffle')
const audio = document.getElementById('audio')
const songImage = document.getElementById('song-image')
const songName = document.getElementById('song-name')
const songArtist = document.getElementById('song-artist')
const pauseButton = document.getElementById('pause')
const playButton = document.getElementById('play')
const playListButton = document.getElementById('playlist')


const maxDuration = document.getElementById('max-duration')
const currentTimeRef = document.getElementById('current-time')

const progressBar = document.getElementById('progress-bar')
const playListContainer = document.getElementById('playlist-container')
const closeButton = document.getElementById('close-button')
const playListSongs = document.getElementById('playlist-songs')

const currentProgress = document.getElementById('current-progress')

let index

let loop = true


const songsList = [
    {
        name: "Gelo Ew Ki Bu",
        link: "assets/gelo-ew-ki-bu.mp3",
        artist: "Aram Tigran",
        image: "assets/aram-tigran.jpeg"
    },
    {
        name: "Gitme Kal",
        link: "assets/yara-bere-icindeyim.mp3",
        artist: "Hira-i Zerdust",
        image: "assets/hirai.jpeg"
    },
    {
        name: "Aramam",
        link: "assets/aramam.mp3",
        artist: "Ibrahim Tatlises",
        image: "assets/ibrahim-tatlises.jpeg"
    },
    {
        name: "Ax Eman",
        link: "assets/ax-eman.mp3",
        artist: "Rewsan Celiker",
        image: "assets/rewsan-celiker.jpeg"
    },
    {
        name: "Dinle",
        link: "assets/dinle.mp3",
        artist: "Mahsun Kirmizigul",
        image: "assets/mahsun.jpeg"
    }
]

const setSong = (arrayIndex) => {

    let { name, link, artist, image } = songsList[arrayIndex]

    audio.src = link
    songImage.innerHTML = name
    songArtist.innerHTML = artist
    songImage.src = image


    audio.onloadeddata = () => {
        maxDuration.innerHTML = timeFormatter(audio.duration)
    }

    playAudio()

    playListContainer.classList.add("hide")

}


const playAudio = () => {
    audio.play()

    playButton.classList.add("hide")
    pauseButton.classList.remove("hide")
}

const pauseAudio = () => {
    audio.pause()

    playButton.classList.remove("hide")
    pauseButton.classList.add("hide")
}

const nextSong = () => {

    if (loop) {
        if (index == (songsList.length - 1)) {
            index = 0
        } else {
            index = index + 1
        }
    } else {
        let randIndex = Math.floor(Math.random() * songsList.length)
        index = randIndex
    }

    audio.onloadeddata = () => {
        maxDuration.innerHTML = timeFormatter(audio.duration)
    }

    setSong(index)
}


const previousSong = () => {
    if (index > 0) {
        index = index - 1
    } else {
        index = songsList.length - 1
    }

    setSong(index)
}

const timeFormatter = (timeInput) => {
    let minute = Math.floor(timeInput / 60)
    minute = minute < 10 ? "0" + minute : minute
    let second = Math.floor(timeInput % 60)
    second = second < 10 ? "0" + second : second
    return `${minute}:${second}`
}

audio.addEventListener("timeupdate", () => {
    currentTimeRef.innerText = timeFormatter(audio.currentTime)

    let value = (audio.currentTime / audio.duration.toFixed(3)) * 100 + "%"
    currentProgress.style.width = value

})

progressBar.addEventListener("click", (event) => {

    let coordStart = progressBar.getBoundingClientRect().left

    let coordEnd = event.clientX

    let progress = (coordEnd - coordStart) / progressBar.offsetWidth

    currentProgress.style.width = progress * 100 + "%"
    audio.currentTime = progress * audio.duration

    playAudio()
})


const initializePlayList = () => {
    for (const i in songsList) {

        playListContainer.innerHTML +=
            `<li class="playlistSong"
            onclick="setSong(${i})">
                <div class="playlist-image-container">
                    <img src="${songsList[i].image}" />
                </div>
                <div class="playlist-song-details">
                    <span id="playlist-song-name">
                        ${songsList[i].name}
                    </span>
                    <span id="playlist-song-artist-album">
                        ${songsList[i].artist}
                    </span>
                </div>
            </li> `
    }
}

playButton.addEventListener("click", playAudio)

pauseButton.addEventListener("click", pauseAudio)

nextButton.addEventListener("click", nextSong)

prevButton.addEventListener("click", previousSong)


closeButton.addEventListener("click",()=>{
    playListContainer.classList.add("hide")
})

playListButton.addEventListener("click", () => {
    console.log("playListContainer ")
    playListContainer.classList.remove("hide")
})

shuffleButton.addEventListener("click", () => {
    if (shuffleButton.classList.contains("active")) {
        shuffleButton.classList.remove("active")
        loop = true
    } else {
        shuffleButton.classList.add("active")
        loop = false
    }
})

repeatButton.addEventListener("click", () => {
    if (repeatButton.classList.contains("active")) {
        repeatButton.classList.remove("active")
        loop = false
    } else {
        repeatButton.classList.add("active")
        loop = true
    }
})

window.onload = () => {
    index = 0
    setSong(index)
    pauseAudio()
    initializePlayList()
}