import { Button } from "../components/button.js"
import { Main } from "./main.js"

export class MenuCard {
  constructor() {
    this.init()
  }

  init() {
    this.element = document.createElement('div')
    this.element.className = 'main'
    const h1 = document.createElement('h1')
    h1.textContent = 'Insira seu cartão de transporte'
    const div = document.createElement('div')
    div.className = 'menu-card'
    div.appendChild(this.addInsertCard())
    this.element.appendChild(h1)
    this.element.appendChild(div)
    this.element.appendChild(this.createButtonBack())
  }

  addInsertCard() {
    const insertCard = document.createElement('div')
    insertCard.className = 'insert-card'
    const span = document.createElement('span')
    insertCard.appendChild(span)
    return insertCard
  }

  createButtonBack() {
    const divButtons = document.createElement('div')
    divButtons.className = 'buttons'
    const buttonBack = new Button('Voltar', 'button-back')
    divButtons.appendChild(buttonBack.element)
    buttonBack.addListener(() => this.element.replaceWith(new Main().element))
    return divButtons
  }
}