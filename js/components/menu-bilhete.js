class MenuBilhete {
  constructor() {
    this.element = document.createElement('div')
    this.element.className = 'main'
    const h1 = document.createElement('h1')
    h1.textContent = 'Selecione o tipo de recarga'
    const div = document.createElement('div')
    div.className = 'menu-bilhete'
    this.element.appendChild(h1)
    this.element.appendChild(div)
  }
}