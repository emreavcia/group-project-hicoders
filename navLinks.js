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
