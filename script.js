function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //  if(html.classList.contains('light')){
  //  html.classList.remove('light')
  //} else{
  //  html.classList.add('light')
  //}

  // pegar a tag IMG
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, add a imagem light
    img.setAttribute("src", "./assets/assets/Gato day.png")
    img.setAttribute("alt", "Felipe Potrick Relaxando")
  } else {
    // se tiver dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/gato night.png")
    img.setAttribute("alt", "Felipe Potrick estudando programação")
  }
}
