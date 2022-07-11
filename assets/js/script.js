/*
passo a passo

1 - criar card temporada ok
2 - listar card ok
3 - criar card temporada selecionada ok
4 - adicionar um evento para adicionar a temporada à fila ok
5 - listar as temporadas selecionadas ok
6 - remover a temporada selecionada
7 - fazer os filtros
*/

const container = document.querySelector(".main-vitrine")

const playlistContainer = document.querySelector("#playlist-container")

let temporadasSelecionadas = []

// 1 - criar card temporada

function cardPrincipal(temporadas) {
    const article = document.createElement("article")
    article.classList.add("main-card")

    const mainCardTop = document.createElement("div")
    mainCardTop.classList.add("main-card-top")

    const h2 = document.createElement("h2")
    h2.innerText = temporadas.nome

    const span = document.createElement("span")
    span.innerText = temporadas.temporada

    const mainCardBottom = document.createElement("div")
    mainCardBottom.classList.add("main-card-bottom")

    const p = document.createElement("p")
    p.innerText = temporadas.sinopse

    const button = document.createElement("button")
    button.innerText = "Adicionar à fila"
    button.id = temporadas.id
    button.type = "button"

    mainCardTop.append(h2, span)
    mainCardBottom.append(p, button)
    article.append(mainCardTop, mainCardBottom)

    return article

}

// 2 - listar card

function listarTemporadas() {
    for (let i = 0; i < temporadas.length; i++) {
        let card = cardPrincipal(temporadas[i])
        container.appendChild(card)
    }
}

listarTemporadas()

// 3 - criar card temporada selecionada

function cardTemporadaSelecionada(temporadas) {
    const li = document.createElement("li")

    const imgTemporada = document.createElement("img")
    imgTemporada.src = temporadas.imagemIcone
    imgTemporada.alt = temporadas.nome

    const playlistCenter = document.createElement("div")
    playlistCenter.classList.add("playlist-li-center")

    playlistCenter.insertAdjacentHTML("afterbegin", `
        <div>
            <h4>${temporadas.nome}</h4>
            <span>${temporadas.temporada}</span>
        </div>
        <div class="playlist-li-center-playButton">
            <img src="./assets/img/play-icon.png" alt="icone-play">
            <span>Assistir agora</span>
        </div>
    `)

    const playlistEnd = document.createElement("div")
    playlistEnd.classList.add("playlist-li-end")

    const button = document.createElement("button")
    button.id = temporadas.id

    playlistEnd.appendChild(button)
    li.append(imgTemporada, playlistCenter, playlistEnd)

    return li

}

// 4 - adicionar um evento para adicionar a temporada à fila

container.addEventListener("click", selecionarTemporada)

function selecionarTemporada(event) {
    const elementoHTML = event.target

    if (elementoHTML.tagName == "BUTTON") {
        const idTemporada = elementoHTML.id

        const temporadaEncontrada = temporadas.find((temporadas) => temporadas.id == idTemporada)

        temporadasSelecionadas.push(temporadaEncontrada)

        listarTemporadasSelecionadas()

    }
}

// 5 - listar as temporadas selecionadas

function listarTemporadasSelecionadas() {
    playlistContainer.innerHTML = ""
    for (let i = 0; i < temporadasSelecionadas.length; i++) {
        const card = cardTemporadaSelecionada(temporadasSelecionadas[i])
        playlistContainer.appendChild(card)
    }
}

// 6 - remover a temporada selecionada

playlistContainer.addEventListener("click", function(event) {
    const elementoHTML = event.target

    if (elementoHTML.tagName == "BUTTON") {
        elementoHTML.closest("li").remove()

        //capturar o id do button em uma variável
        //usar o find para encontrar a temporada que tem a mesma id do button
        //usar o indexOf para encontrar o índice daquela temporada no array temporadasSelecionadas
        //remover a temporada com o splice
    }


})

// 7 - fazer os filtros
// 8 - ajustar o css