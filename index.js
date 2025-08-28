let colorPicker = document.getElementById("color-picker") // input
let colorChoices = document.getElementById("color-choices") // select
const colorPalette = document.getElementById("color-palette")
const btnEl = document.getElementById("btn-el") // submit

btnEl.addEventListener("click", () => {
    let chosenColor = colorPicker.value
    let noHex = chosenColor.slice(1)

    fetch(`https://www.thecolorapi.com/scheme?hex=${noHex}&mode=${colorChoices.value}&count=5`)
    .then(response => response.json())
    .then(data => displayColors(data))
})

function displayColors(data){
    let html = ""
    data.colors.forEach (color => {
          html += `
            <div class="color-section">
              <div class="color-column" style="background-color: ${color.hex.value}"></div>
              <p class="hex-box">${color.hex.value}</p>
            </div>`
    })
    colorPalette.innerHTML = html
}
