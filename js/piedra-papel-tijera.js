function playRockScissorsPaper () {
    const choices = ["PIEDRA", "PAPEL", "TIJERA"]
    let usersChoice = prompt(`Escribe PIEDRA, PAPEL o TIJERA`).toUpperCase().trim()
    let myChoice = choices[Math.floor(Math.random() * 3)]
    if (usersChoice === myChoice) {
            alert(`Yo elegí ${myChoice}, hemos empatado`)
    } else {
        if (usersChoice === "PIEDRA") {
            if (myChoice === "PAPEL") {
                alert(`Yo elegí ${myChoice}, te he ganado`)
            } else {
                alert(`Yo elegí ${myChoice}, has ganado`)
            }
        } else if (usersChoice === "PAPEL") {
            if (myChoice === "TIJERA") {
                alert(`Yo elegí ${myChoice}, te he ganado`)
            } else {
                alert(`Yo elegí ${myChoice}, has ganado`)
            }
        } else if (usersChoice === "TIJERA") {
            if (myChoice === "PIEDRA") {
                alert(`Yo elegí ${myChoice}, te he ganado`)
            } else {
                alert(`Yo elegí ${myChoice}, has ganado`)
            }
        }
    }
    let keepPlayingChoice = confirm("¿Quieres jugar de nuevo?")
    if (keepPlayingChoice) {
        playRockScissorsPaper()
    } else {
        alert(`Vuelve pronto! Eres un digno oponente!`)
    }
}

playRockScissorsPaper()