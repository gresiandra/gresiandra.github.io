const input = document.querySelector('.inputs input')
const button = document.querySelector('.inputs button')
// console.log(input)

button.addEventListener('click', (e) => {
    if (input.value === "") {
        input.style.border = '1px solid red'
    }
    else{
        input.style.border = '1px solid hsla(0, 36%, 70%, 1)'
    }
})