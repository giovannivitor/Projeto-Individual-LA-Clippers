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
}


function PassarTime(select) {
    var valor = select.value
    document.getElementById(Time).style.color = "white"

    var nometime9 = selectTime9.getAttribute("data-nome-time");
    var nometime10 = selectTime10.getAttribute("data-nome-time");
    var nometime11 = selectTime11.getAttribute("data-nome-time")
    var nometime12 = selectTime12.getAttribute("data-nome-time");

    // Retangulo1

    if (valor == 4 && nometime9 == "Mavericks") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime9" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime9}">
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
    if (valor == 4 && nometime9 == "Nuggets") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(255, 198, 39,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/denver-nuggets-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime9" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime9}">
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
    if (valor == 4 && nometime9 == "Rockets") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(206,17,65,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/houston-rockets-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime9" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime9}">
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
    if (valor == 4 && nometime9 == "Clippers") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(29,66,148,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/los-angeles-clippers-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime9" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime9}">
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
    if (valor == 4 && nometime9 == "Lakers") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(85, 37, 130,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/los-angeles-lakers-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime9" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime9}">
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
    if (valor == 4 && nometime9 == "Timberwolves") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(35, 97, 146,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/minnesota-timberwolves-logo.png')"
        retangulo13.innerHTML = `
    <select id="selectTime9" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime9}">
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
    if (valor == 4 && nometime9 == "Warriors") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(29, 66, 138,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/nba-golden-state-warriors-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime9" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime9}">
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
    if (valor == 4 && nometime9 == "Grizzlies") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(93, 118, 169,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/nba-memphis-grizzlies-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime9" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime9}">
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


    // Retangulo2

    if (valor == 4 && nometime10 == "Mavericks") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime10" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime10}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time10.innerHTML}
`
        selectTime9.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime10 == "Nuggets") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(255, 198, 39,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/denver-nuggets-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime10" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime10}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time10.innerHTML}
`
        selectTime9.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime10 == "Rockets") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(206,17,65,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/houston-rockets-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime10" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime10}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time10.innerHTML}
`
        selectTime9.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime10 == "Clippers") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(29,66,148,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/los-angeles-clippers-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime10" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime10}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time10.innerHTML}
`
        selectTime9.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime10 == "Lakers") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(85, 37, 130,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/los-angeles-lakers-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime10" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime10}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time10.innerHTML}
`
        selectTime9.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime10 == "Timberwolves") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(35, 97, 146,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/minnesota-timberwolves-logo.png')"
        retangulo13.innerHTML = `
    <select id="selectTime10" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime10}">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    ${time10.innerHTML}
`
        selectTime9.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime10 == "Warriors") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(29, 66, 138,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/nba-golden-state-warriors-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime10" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime10}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time10.innerHTML}
    `
        selectTime9.innerHTML = `
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    `
    }
    if (valor == 4 && nometime10 == "Grizzlies") {
        retangulo13.style.background = "linear-gradient(90deg, rgba(93, 118, 169,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/nba-memphis-grizzlies-logo.png')"
        retangulo13.innerHTML = `
        <select id="selectTime10" onchange="PegarTimeCampeao(this)" name="select"  data-nome="${nometime10}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time10.innerHTML}
    `
        selectTime9.innerHTML = `
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    `
    }

    // Retangulo3

    if (valor == 4 && nometime11 == "Mavericks") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime11" onchange="PegarTimeCampeao(this)" name="select"  data-nome="${nometime11}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time11.innerHTML}
`
        selectTime12.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime11 == "Nuggets") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(255, 198, 39,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/denver-nuggets-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime11" onchange="PegarTimeCampeao(this)" name="select"  data-nome="${nometime11}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time11.innerHTML}
`
        selectTime12.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime11 == "Rockets") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(206,17,65,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/houston-rockets-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime11" onchange="PegarTimeCampeao(this)" name="select"  data-nome="${nometime11}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time11.innerHTML}
`
        selectTime12.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime11 == "Clippers") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(29,66,148,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/los-angeles-clippers-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime11" onchange="PegarTimeCampeao(this)" name="select"  data-nome="${nometime11}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time11.innerHTML}
`
        selectTime12.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime11 == "Lakers") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(85, 37, 130,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/los-angeles-lakers-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime11" onchange="PegarTimeCampeao(this)" name="select"  data-nome="${nometime11}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time11.innerHTML}
`
        selectTime12.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime11 == "Timberwolves") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(35, 97, 146,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/minnesota-timberwolves-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime11" onchange="PegarTimeCampeao(this)" name="select"  data-nome="${nometime11}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time11.innerHTML}
`
        selectTime12.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime11 == "Warriors") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(29, 66, 138,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/nba-golden-state-warriors-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime11" onchange="PegarTimeCampeao(this)" name="select"  data-nome="${nometime11}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time11.innerHTML}
`
        selectTime12.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime11 == "Grizzlies") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(93, 118, 169,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/nba-memphis-grizzlies-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime11" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime11}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time11.innerHTML}
`
        selectTime12.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    // Retangulo4

    if (valor == 4 && nometime12 == "Mavericks") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(0, 83, 188,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/dallas-mavericks-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime12" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime12}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time12.innerHTML}
`
        selectTime11.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime12 == "Nuggets") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(255, 198, 39,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/denver-nuggets-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime12" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime12}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time12.innerHTML}
`
        selectTime11.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime12 == "Rockets") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(206,17,65,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/houston-rockets-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime12" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime12}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time12.innerHTML}
`
        selectTime11.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime12 == "Clippers") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(29,66,148,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/los-angeles-clippers-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime12" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime12}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time12.innerHTML}
`
        selectTime11.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime12 == "Lakers") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(85, 37, 130,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/los-angeles-lakers-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime12" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime12}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time12.innerHTML}
`
        selectTime11.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime12 == "Timberwolves") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(35, 97, 146,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/minnesota-timberwolves-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime12" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime12}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time12.innerHTML}
`
        selectTime11.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime12 == "Warriors") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(29, 66, 138,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/nba-golden-state-warriors-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime12" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime12}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time12.innerHTML}
`
        selectTime11.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
    if (valor == 4 && nometime12 == "Grizzlies") {
        retangulo14.style.background = "linear-gradient(90deg, rgba(93, 118, 169,0.9) 0%, rgba(0,0,0,0.5) 100%), url('assets/Previsões/nba-memphis-grizzlies-logo.png')"
        retangulo14.innerHTML = `
        <select id="selectTime12" onchange="PegarTimeCampeao(this)" name="select" data-nome="${nometime12}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        ${time12.innerHTML}
`
        selectTime11.innerHTML = `
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
`
    }
}
var nomeTimeCampeao = "";
function PegarTimeCampeao(time) {
    var nomeTime = time.getAttribute("data-nome")
    if (time.value == 4) {
        nomeTimeCampeao = nomeTime
        fetch(`/previsoes/SalvarTimeCampeao/${1}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeTimeServer: nomeTime
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    cardErro.style.display = "block";
                }
                else {

                }

            })
        }
    }





