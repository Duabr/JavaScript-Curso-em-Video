// Exemplo com uma imagem
var img = document.createElement('img')

// Setando id
img.setAttribute('id', 'fotoPessoa')

// atribuindo um source
img.setAttribute('src', 'fotoPessoa.png')


// Colocando a imagem em uma tag imaginária
var div = document.querySelector('div#teste')
div.appendChild(img)