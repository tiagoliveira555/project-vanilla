export class Button {
  constructor(text, className) {
    this.element = document.createElement('button')
    this.element.className = className
    this.element.textContent = text
  }

  addListener(fn) {
    this.element.addEventListener('click', fn)
  }
}