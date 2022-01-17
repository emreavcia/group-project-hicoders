//Nav items container
const navLinkCreate = (array) => {
    const NavContent = `
<a
    class="nav-link text-white"
    aria-current="page"
    href="#"
    id="home"
    >Home</a
    >

    ${array.map(classes => {
        return `
            <a class="nav-link active text-white" href="" id=${classes.id}
            >${classes.className}</a
          >
            `
    }
    )}
`
    navItemContainer.innerHTML = NavContent

}

navLinkCreate(mainData)



//Variable to get home link 
const homeLink = document.getElementById("home")
//Variables to get nav links for A, B, C classes 
const classA = document.getElementById("classA")
const classB = document.getElementById("classB")
const classC = document.getElementById("classC")

//Event listener for home link
homeLink.addEventListener("click", (e) => {
    e.preventDefault()
    rootDiv.innerHTML = home(mainData)
    headerMain.innerHTML = "All Reports"
})

//function to direct links to render codes using event listener

const linkDirectorFunction = (classVariable, className) => {
    classVariable.addEventListener("click", (e) => {
        e.preventDefault()
        const classItem = mainData.filter(element => {
            return element.className === className
        })

        rootDiv.innerHTML = linkFunction(classItem)

    })

}

//Event listener for nav link A
linkDirectorFunction(classA, "Class A")
//Event listener for nav link A
linkDirectorFunction(classB, "Class B")
//Event listener for nav link A
linkDirectorFunction(classC, "Class C")
