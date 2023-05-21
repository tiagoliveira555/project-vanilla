class Main {
  constructor() {
    this.element = document.createElement('div')
    this.element.className = 'main'
    this.menuInitial()
  }

  menuInitial() {
    const h1 = document.createElement('h1')
    h1.textContent = 'Seja bem vindo!'
    const h2 = document.createElement('h2')
    h2.textContent = 'Insira seu cartão ou selecione seu produto!'

    this.element.appendChild(h1)
    this.element.appendChild(h2)
    this.element.appendChild(this.createButtonsMenu())
    this.element.appendChild(this.createLogoMenu())
  }

  menuCard() {
    const newElement = document.createElement('div')
    newElement.className = 'main'
    const menuCard = new MenuCard()
    newElement.appendChild(menuCard.element)
    this.element.replaceWith(newElement)
  }

  menuQr() {
    const newElement = document.createElement('div')
    newElement.className = 'main'
    const menuQr = new MenuQr()
    newElement.appendChild(menuQr.element)
    this.element.replaceWith(newElement)
  }

  menuBilhete() {
    const newElement = document.createElement('div')
    newElement.className = 'main'
    const menuBilhete = new MenuBilhete()
    newElement.appendChild(menuBilhete.element)
    this.element.replaceWith(newElement)
  }

  createButtonsMenu() {
    const buttonsMenu = document.createElement('div')
    buttonsMenu.className = 'buttons-menu'
    buttonsMenu.appendChild(this.buttonCartao())
    buttonsMenu.appendChild(this.buttonQrCode())
    buttonsMenu.appendChild(this.buttonBilhete())
    return buttonsMenu
  }

  buttonCartao() {
    const buttonCartao = document.createElement('button')
    buttonCartao.className = 'button-cartao'
    const buttonCartaoSpan = document.createElement('span')
    buttonCartao.appendChild(buttonCartaoSpan)
    buttonCartao.addEventListener('click', () => {
      this.menuCard()
    })
    return buttonCartao
  }

  buttonQrCode() {
    const buttonQrCode = document.createElement('button')
    buttonQrCode.className = 'button-qrcode'
    const buttonQrCodeSpan1 = document.createElement('span')
    const buttonQrCodeSpan2 = document.createElement('span')
    buttonQrCode.appendChild(buttonQrCodeSpan1)
    buttonQrCode.appendChild(buttonQrCodeSpan2)
    buttonQrCode.addEventListener('click', () => {
      this.menuQr()
    })
    return buttonQrCode
  }

  buttonBilhete() {
    const buttonBilhete = document.createElement('button')
    buttonBilhete.className = 'button-bilhete'
    const buttonBilheteSpan = document.createElement('span')
    buttonBilhete.appendChild(buttonBilheteSpan)
    buttonBilhete.addEventListener('click', () => {
      this.menuBilhete()
    })
    return buttonBilhete
  }

  createLogoMenu() {
    const logoMenu = document.createElement('div')
    logoMenu.className = 'logo-menu'
    const p = document.createElement('p')
    p.textContent = 'Central de atendimento ao cliente (75) 99817-2278'
    const imgLogo = document.createElement('img')
    imgLogo.src = '../img/img1.png'
    imgLogo.alt = 'Logo Menu'
    logoMenu.appendChild(p)
    logoMenu.appendChild(imgLogo)
    return logoMenu
  }
}