import { data, SUBJECTS } from './data.js'
import { home } from './home.js'
import { root, mainHeader } from './variables.js'
import { renderClass } from './classes.js'
import { handleNavbar } from './navbar.js'
import { mainHeading } from './variables.js'
import { handleCanvas } from './canvas.js'



mainHeader.innerHTML = handleNavbar(data)
const navLink = document.querySelectorAll(".nav-link:not(.home)")
renderClass(navLink, data, mainHeading, root, SUBJECTS)
home(data, root, SUBJECTS)
handleCanvas()





