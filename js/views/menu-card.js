import { Button } from "../components/button.js"
import { FooterButtons } from "../components/footer-buttons.js"
import { Main } from "./main.js"

export class MenuCard {
  constructor() {
    this.init()
  }

  init() {
    this.element = document.createElement('div')
    this.element.className = 'main'
    this.h1 = document.createElement('h1')
    this.h1.textContent = 'Insira seu cartão de transporte'
    this.numberCard = document.createElement('p')
    this.numberCard.className = 'number-card'
    this.menu = document.createElement('div')
    this.menu.className = 'menu-card'
    this.footerButtons = new FooterButtons('footer-buttons')
    this.buttonBack = new Button('Voltar', 'button-back')
    this.footerButtons.addChildren(this.buttonBack.element)
    this.menu.appendChild(this.addInsertCard())
    this.element.appendChild(this.h1)
    this.element.appendChild(this.numberCard)
    this.element.appendChild(this.menu)
    this.element.appendChild(this.footerButtons.element)
  }

  listenerButtonBack() {
    const main = document.querySelector('.main')
    main.replaceWith(new Main().element)
  }

  addInsertCard() {
    this.buttonBack.addListener(this.listenerButtonBack)
    this.insertCard = document.createElement('div')
    this.insertCard.className = 'insert-card'
    const span = document.createElement('span')
    this.insertCard.appendChild(span)
    this.insertCard.addEventListener('click', () => this.addRechargeType())
    return this.insertCard
  }

  addRechargeType() {
    this.menu.removeChild(this.insertCard)
    this.h1.textContent = 'Selecione o tipo de recarga'
    this.numberCard.textContent = 'Cartão 14.07.00000692-1'
    this.buttonBack.removeListener(this.listenerButtonBack)
    this.buttonBack.addListener(() => {
      this.h1.textContent = 'Insira seu cartão de transporte'
      this.numberCard.textContent = ''
      this.menu.appendChild(this.insertCard)
      this.buttonBack.addListener(this.listenerButtonBack)
    })
  }
}