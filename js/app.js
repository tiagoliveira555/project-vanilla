import { Main } from './components/main.js'
import { Footer } from './components/footer.js'

const app = document.querySelector('#app')

const main = new Main()
const footer = new Footer()

app.appendChild(main.element)
app.appendChild(footer.element)