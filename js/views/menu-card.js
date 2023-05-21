export class MenuCard {
  constructor() {
    this.element = document.createElement('div')
    this.element.className = 'main'
    const h1 = document.createElement('h1')
    h1.textContent = 'Insira seu cartão de transporte'
    const div = document.createElement('div')
    div.className = 'menu-card'
    this.element.appendChild(h1)
    this.element.appendChild(div)
  }
}