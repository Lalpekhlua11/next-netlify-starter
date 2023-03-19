






const loadingScreen = document.querySelector(".loading")

const gameScreen = document.querySelector(".content")

const loadingBar = document.querySelector(".loading .loading-bar")

const loadingProg = document.querySelector(".loading .loading-bar .prog")

const loadingText = document.querySelector(".loading .loading-text")

const loadingTime = 270

const loadingtxts = ["Loading", "Loading..", "loading Ressources..", "Loading files..", "Loading finishing..", "Loading complete.."]

function load() {

    let step = loadingTime / loadingtxts.length

    let i = 0

    let interval = setInterval(() => {

        loadingProg.style.width = `${i * 100 / loadingtxts.length}%`

        loadingText.innerText = loadingtxts[i]

        i++

        if (i >= loadingtxts.length) {

            clearInterval(interval)

            loadingProg.style.width = `100%`

            setTimeout(() => {

                loadingScreen.style.opacity = 0

                gameScreen.style.display = "block"

                gameScreen.style.opacity = 0

                setTimeout(() => {

                    gameScreen.style.opacity = 1

                    loadingScreen.style.display = "none"

                }, 300)

            }, step)

        }

    }, step)

}

load() 

