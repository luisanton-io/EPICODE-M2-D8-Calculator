// Abbiamo bisogno di stabilire come la nostra calcolatrice effettuerà le operazioni.

// Il flusso è il seguente

let operator1 = 0

let operation

let operator2 = 0

// display: querySelector - getElementById
const display = document.querySelector("#display")

window.onload = function () {

    const numberButtons = document.querySelectorAll("button:not(.operation)")

    // console.log(numberButtons)
    // for (let i = 0; i < numberButtons.length; i++) {
    //     const button = numberButtons[i]; 
    // }

    for (const button of numberButtons) {

        button.addEventListener("click", function (event) {

            console.log(event.target.innerText)

            if (!operation) {
                // 1 - L'utente seleziona il primo operatore, 
                // cliccando i numeri che lo compongono

                // innerText è sempre una stringa.
                // Andare a sommare l'operator1 con il contenuto
                // del bottone non andrà a fare la somma aritmetica.
                operator1 += event.target.innerText
                // Questo però è un problema con lo zero in testa
                operator1 = parseInt(operator1)

                display.innerHTML = operator1
            } else {
                // 3 - L'utente seleziona il secondo operatore, come il primo
                operator2 += event.target.innerText
                operator2 = parseInt(operator2)

                display.innerHTML = operator2
            }

        })

    }

    const operationButtons = document.querySelectorAll("button.operation")

    for (const button of operationButtons) {
        button.addEventListener("click", function (event) {

            let result;

            if (event.target.innerText === "=") {

                // Calcoliamo il risultato utilizzando:
                // operator 1, operation, operator 2

                // se la nostra operazione è +, andiamo a calcolare
                // operator1 + operator2

                // se la nostra operazione è -, andiamo a calcolare
                // operator1 - operator2

                //.... switch statement:

                switch (operation) {
                    case "+":
                        result = operator1 + operator2
                        break
                    case "-":
                        result = operator1 - operator2
                        break
                    case "×":
                        result = operator1 * operator2
                        break
                    case "/":
                        result = operator1 / operator2
                        break
                    default:
                        alert("Something went wrong...")
                        break
                }

                display.innerHTML = result
                operator1 = result

            } else if (event.target.innerText === "C") { // reset
                operator1 = 0
                operation = undefined
                operator2 = 0

                display.innerHTML = 0
            } else {
                // 2 - L'utente seleziona l'operazione, cliccando il bottone corrispondente
                // Andiamo ad assegnare l'operazione alla nostra variabile
                operation = event.target.innerText
            }

        })
    }


}

function log() {
    console.log({
        operator1, operation, operator2
    })
}


// 4 - L'utente a questo punto potrebbe
// a. cliccare su uguale
// b. aggiungere un'altra operazione


// Se l'utente clicca su uguale, mostriamo il risultato delle operazioni
// altrimenti calcoliamo il risultato parziale e lo memorizziamo come operatore 1


