

let chave = "cce02950d7c116bc0ddbb8101308f750"

function colocarNaTela (dados) {
    console.log(dados)
    document.querySelector (".cidade").innerHTML = "Tempo em " + dados.name /* Inner HTML é para inserir alguma coisa no HTML */
    document.querySelector (".tempi").innerHTML = "Atual " + Math.floor (dados.main.temp) + "°C" /*Math.floor é matemática, e serve pra arredondar, o Math tem que ter letra maiucula */
    document.querySelector (".descricao").innerHTML = dados.weather[0].description
    document.querySelector (".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector (".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector (".tempmi").innerHTML = "Temp Mínima " + Math.floor (dados.main.temp_min) + "°C"
    document.querySelector (".tempma").innerHTML = "Temp Máxima " + Math.floor (dados.main.temp_max) + "°C"
}

async function buscarCidade (cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric").then( resposta => resposta.json())

    colocarNaTela (dados)
}

function cliqueinobotao() {
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade (cidade)
}
  