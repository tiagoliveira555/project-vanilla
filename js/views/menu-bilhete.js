import { Button } from "../components/button.js"
import { Main } from "./main.js"

export class MenuBilhete {
  constructor() {
    this.element = document.createElement('div')
    this.element.className = 'main'
    const h1 = document.createElement('h1')
    h1.textContent = 'Selecione o tipo de recarga'
    const div = document.createElement('div')
    div.className = 'menu-bilhete'
    const divButtons = document.createElement('div')
    divButtons.className = 'buttons'
    const buttonBack = new Button('Voltar', 'button-back')
    divButtons.appendChild(buttonBack.element)
    this.element.appendChild(h1)
    this.element.appendChild(div)
    this.element.appendChild(divButtons)
    buttonBack.addListener(() => this.element.replaceWith(new Main().element))
  }
}