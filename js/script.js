const inputField = document.getElementById("input-field")
const resultField = document.getElementById("output-field")
const formulaField = document.getElementById("formula-field")
const btnConvert = document.getElementById("btn-convert")
const btnReset = document.getElementById("btn-reset")
const btnReverse = document.getElementById("btn-reverse")
const inputLabel = document.getElementById("input-label")
const outputLabel = document.getElementById("output-label")

let isReverse = false
const intRegex = /^[+-.,eE\d]+$/

const convert = () => {
  try {
    if (intRegex.test(inputField.value)) {
      if (!isReverse) {
        resultField.value = (inputField.value * 9 / 5) + 32
        formulaField.value = `(${inputField.value})°C  * (9/5) + 32 = ${resultField.value}°F`
      } else {
      resultField.value = (inputField.value - 32) * 5 / 9
      formulaField.value = `(${inputField.value}°F - 32) * 5/9 = ${resultField.value}°C`
      }      
    } else {
      throw new SyntaxError("Hanya Menerima Input Angka!")
    }
  } 
  catch (error) {
  alert("konversi gagal : " + error.message)
  }
}

const reverse= () => {
  try {
    isReverse = !isReverse
    let temp = inputLabel.innerText
    inputLabel.innerText = outputLabel.innerText
    outputLabel.innerText = temp 
    inputField.value = resultField.value
    if (resultField.value) {
      convert()
    }
  }
  catch (error) {
    alert("Reverse Gagal : " + error.message)
  }
}

const reset= () => {
  try {
    inputField.value= null
    resultField.value = ""
    formulaField = ""
  }
  catch (error) {
    alert("Reset Berhasil : " )
  }
}