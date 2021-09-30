let button = document.createElement('button')
button.textContent = 'Click me!'
document.body.append(button)
button.addEventListener('click', function() {
console.log('I was clicked!')
})
