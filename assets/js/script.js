async function novaFrase() {
    const api = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await api.json();
    const frase = document.querySelector("#frase");;

    frase.innerText = data.value;
}

const btnFrase = document.querySelector("#btnFrase");

btnFrase.addEventListener("click", () => {
    novaFrase()
})