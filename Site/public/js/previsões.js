var Time = "";
var idTime = ''

function criarModal(botao) {
    idTime = botao.getAttribute("data-id")
    Time = botao.id;
    background.style.display = "block"
    modal.style.display = "block"
}




function SelecionarTime(imagem) {
    var select = `selectTime${idTime}`;
    var nome = imagem.getAttribute("data-nome")
    background.style.display = "none"
    modal.style.display = "none"
    document.getElementById(Time).innerHTML = nome
    document.getElementById(Time).style.color = "white"
    document.getElementById(select).setAttribute('data-nome-time', nome)

    if (nome == "Mavericks") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
    }
    else if (nome == "Nuggets") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(255, 198, 39,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/denver-nuggets-logo.png')"
    }
    else if (nome == "Rockets") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(206,17,65,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/houston-rockets-logo.png')"
    }
    else if (nome == "Clippers") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(29,66,148,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/los-angeles-clippers-logo.png')"
    }
    else if (nome == "Lakers") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(85, 37, 130,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/los-angeles-lakers-logo.png')"
    }
    else if (nome == "Timberwolves") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(35, 97, 146,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/minnesota-timberwolves-logo.png')"
    }
    else if (nome == "Warriors") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(29, 66, 138,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/nba-golden-state-warriors-logo.png')"
    }
    else if (nome == "Grizzlies") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(93, 118, 169,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/nba-memphis-grizzlies-logo.png')"
    }
    else if (nome == "Kings") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(91,43,130,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/nba-sacramento-kings-logo.png')"
    }
    else if (nome == "Pelicans") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(225, 58, 62,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/new-orleans-pelicans-logo.png')"
    }
    else if (nome == "Thunder") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(239, 59, 36,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/oklahoma-city-thunder-logo.png')"
    }
    else if (nome == "Suns") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(229, 95, 32,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/phoenix-suns-logo.png')"
    }
    else if (nome == "Trail Blazers") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(6, 25, 34,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/portland-trail-blazers-logo.png')"
    }
    else if (nome == "Spurs") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(6, 25, 34,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/san-antonio-spurs-logo.png')"
    }
    else if (nome == "Jazz") {
        document.getElementById(Time).style.background = "linear-gradient(90deg, rgba(0, 43, 92,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/utah-jazz-logo.png')"
    }
}


function PassarTime(select) {
    var valor = select.value
    document.getElementById(Time).style.color = "white"

    
    var nometime2 = selectTime2.getAttribute("data-nome-time");
    var nometime3 = selectTime3.getAttribute("data-nome-time");
    var nometime4 = selectTime4.getAttribute("data-nome-time");
    var nometime5 = selectTime5.getAttribute("data-nome-time");
    var nometime6 = selectTime6.getAttribute("data-nome-time");
    var nometime7 = selectTime7.getAttribute("data-nome-time");
    var nometime8 = selectTime8.getAttribute("data-nome-time");
    var nometime9 = selectTime9.getAttribute("data-nome-time");
    var nometime10 = selectTime10.getAttribute("data-nome-time");
    // var nometime11 = selectTime11.getAttribute("data-nome-time")
    // var nometime12 = selectTime12.getAttribute("data-nome-time")
    // var nometime13 = selectTime13.getAttribute("data-nome-time")
    // var nometime14 = selectTime14.getAttribute("data-nome-time")
    // var nometime15 = selectTime15.getAttribute("data-nome-time")
    if(selectTime1){
        var nometime1 = selectTime1.getAttribute("data-nome-time");
    }

    if (valor == 4 && nometime1 == "Mavericks") {
        retangulo9.setAttribute("data-nome-time","Mavericks")
        retangulo9.style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
        retangulo9.innerHTML = `
        <select id="selectTime9" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time1.innerHTML}
`
        selectTime2.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }

    if (valor == 4 && nometime1 == "Nuggets") {
        retangulo9.style.background = "linear-gradient(90deg, rgba(255, 198, 39,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/denver-nuggets-logo.png')"
        retangulo9.innerHTML = `
        <select id="selectTime1" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time1.innerHTML}
`
        selectTime2.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime1 == "Rockets") {
        retangulo9.style.background = "linear-gradient(90deg, rgba(206,17,65,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/houston-rockets-logo.png')"
        retangulo9.innerHTML = `
        <select id="selectTime1" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time1.innerHTML}
`
        selectTime2.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime1 == "Clippers") {
        retangulo9.style.background = "linear-gradient(90deg, rgba(29,66,148,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/los-angeles-clippers-logo.png')"
        retangulo9.innerHTML = `
        <select id="selectTime1" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time1.innerHTML}
`
        selectTime2.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime1 == "Lakers") {
        retangulo9.style.background = "linear-gradient(90deg, rgba(85, 37, 130,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/los-angeles-lakers-logo.png')"
        retangulo9.innerHTML = `
        <select id="selectTime1" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time1.innerHTML}
`
        selectTime2.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    // Retangulo2
    if (valor == 4 && nometime2 == "Mavericks") {
        retangulo9.style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
        retangulo9.innerHTML = `
        <select id="selectTime2" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time2.innerHTML}
`
        selectTime1.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }

    if (valor == 4 && nometime2 == "Nuggets") {
        retangulo9.style.background = "linear-gradient(90deg, rgba(255, 198, 39,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/denver-nuggets-logo.png')"
        retangulo9.innerHTML = `
        <select id="selectTime2" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time2.innerHTML}
`
        selectTime1.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }

    // Retangulo3
    if (valor == 4 && nometime3 == "Mavericks") {
        retangulo10.style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
        retangulo10.innerHTML = `
        <select id="selectTime3" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time3.innerHTML}
`
        selectTime4.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime3 == "Nuggets") {
        retangulo10.style.background = "linear-gradient(90deg, rgba(255, 198, 39,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/denver-nuggets-logo.png')"
        retangulo10.innerHTML = `
        <select id="selectTime3" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time3.innerHTML}
`
        selectTime4.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }

    // Retangulo4
    if (valor == 4 && nometime4 == "Mavericks") {
        retangulo10.style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
        retangulo10.innerHTML = `
        <select id="selectTime4" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time4.innerHTML}
`
        selectTime3.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    // Retangulo5
    if (valor == 4 && nometime5 == "Mavericks") {
        retangulo11.style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
        retangulo11.innerHTML = `
        <select id="selectTime5" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time5.innerHTML}
`
        selectTime6.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }

    // Retangulo6
    if (valor == 4 && nometime6 == "Mavericks") {
        retangulo11.style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
        retangulo11.innerHTML = `
        <select id="selectTime6" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time6.innerHTML}
`
        selectTime7.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    // Retangulo7
    if (valor == 4 && nometime7 == "Mavericks") {
        retangulo12.style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
        retangulo12.innerHTML = `
        <select id="selectTime7" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time7.innerHTML}
`
        selectTime8.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    // Retangulo8
    if (valor == 4 && nometime8 == "Mavericks") {
        retangulo12.style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
        retangulo12.innerHTML = `
        <select id="selectTime8" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time8.innerHTML}
`
        selectTime7.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    // Retangulo9
    if(selectTime9 == 4){
        var nometime9 = selectTime9.getAttribute("data-nome-time");
    }
    if (valor == 4 && nometime9 == "Mavericks") {
        retangulo9.setAttribute("data-nome-time","Mavericks")
        retangulo13.style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime13" onchange="PassarTime(this)" name="select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time9.innerHTML}
`
        selectTime10.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
}