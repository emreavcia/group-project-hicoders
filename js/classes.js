//Click event listener for a specific class
import { avarageGrade } from "./avarageGradeFunction.js"
import { avarageGradeSectionHandler } from "./avarageGradeSection.js"
import { classCardSection } from "./classCardSection.js"
import { mainHeadingHandler } from "./mainHeading.js"


export const renderClass = (navLink, data, mainHeading, root, SUBJECTS) => {

    //Click event handler for nav link except for Home
    const eventHandler = (e) => {

        //Prevent default settings for clicked nav link 
        e.preventDefault()

        //Assign clicked link's id to id 
        const id = e.target.id

        // get required class to render
        const relatedClass = data.filter(group => group.id == id)

        //render mainHeading function
        mainHeading.innerHTML = mainHeadingHandler(relatedClass)

        //render mainHeading function
        root.innerHTML = `<div class="d-flex m-auto flex-wrap"> ${classCardSection(relatedClass)}</div> ${avarageGradeSectionHandler(relatedClass, SUBJECTS, avarageGrade)} `
    }

    //NavLink Click Handler 
    navLink.forEach(navLink => {
        navLink.addEventListener("click", eventHandler)
    })
}

