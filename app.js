//Variable to get div with root id
const rootDiv = document.getElementById("root")

const headerMain = document.querySelector("#h2")
//Function to render home page 
const home = (pArray) => {

  let innerHtml = pArray.map(array => {
    return `
        <div id="chart-container">
            <canvas id="class-a" width="400" height="400"></canvas>
        </div>
        `
  }).join("")

  return innerHtml
}

rootDiv.innerHTML = home(mainData)


//Variable to get home link 
const homeLink = document.getElementById("home")

//Event listener for home link
homeLink.addEventListener("click", (e) => {
  e.preventDefault()
  rootDiv.innerHTML = home(mainData)
  headerMain.innerHTML = "All Reports"
})


//Variables to get nav links for A, B, C classes 
const Aclass = document.getElementById("classA")
const Bclass = document.getElementById("classB")
const Cclass = document.getElementById("classC")

//Event listener for nav link A
Aclass.addEventListener("click", (e) => {
  e.preventDefault()
  const classItem = mainData.filter(element => {
    return element.className === "Class A"
  })

  rootDiv.innerHTML = linkFunction(classItem)

})
//Event listener for nav link B
Bclass.addEventListener("click", (e) => {
  e.preventDefault()
  const classItem = mainData.filter(element => {
    return element.className === "Class B"
  })

  rootDiv.innerHTML = linkFunction(classItem)

})
//Event listener for nav link C
Cclass.addEventListener("click", (e) => {
  e.preventDefault()
  const classItem = mainData.filter(element => {
    return element.className === "Class C"
  })

  rootDiv.innerHTML = linkFunction(classItem)

})



//Function to render Classes 
const linkFunction = (pArray) => {
  headerMain.innerHTML = pArray[0].className
  let innerHtml = pArray[0].students.map(student => {
    return `
          <div class="card me-2 w-25" style="width: 18rem">
            <div class="card-body p-0">
              <div class="p-1 pt-2 bg-primary">
                <p class="card-title ms-4 text-white">${student.studentName} (${student.subject.length !== 1 ? (student.subject.length + " Lessons") : (student.subject.length + " Lesson")})</p>
              </div>
              <ul class="list-group list-group-flush">
              ${student.subject.map(subject => {
      return `    <li 
                  class="list-group-item border-0 w-100"
                  > 
                    ${subject.subjectName}
                      <span class="er-span-margin">
                      ${subject.grade}
                      </span> 
                  </li>
                `
    }).join("")}
              </ul>
            </div>
          </div>
        `
  }).join("")

  let innerHtml2 = `
            <h2 class="mt-5">Class Avarages</h2>
            <hr />
            <div class="d-flex justify-content-between w-75">
              <p>Matematik<span class="badge bg-secondary">${avarageGrade("Matematik", pArray[0])}</span></p>
              <p>Fizik<span class="badge bg-secondary">${avarageGrade("Fizik", pArray[0])}</span></p>
              <p>Kimya<span class="badge bg-secondary">${avarageGrade("Kimya", pArray[0])}</span></p>
              <p>Geometri<span class="badge bg-secondary">${avarageGrade("Geometri", pArray[0])}</span></p>
            </div>`

  return `<div class="d-flex"> ${innerHtml} </div> ${innerHtml2} `
}

//function to find avarage of a certain subject in a class 
const avarageGrade = (pram, array) => {
  let avarage = (array.students.map((student) => {
    return student.subject
      .filter(subject => {
        return subject.subjectName === pram
      }).reduce((acc, subject, index, array) => {
        return acc += subject.grade
      }, 0)
  })).reduce((acc, grade, index, array) => {
    array = array.filter(element => element !== 0)
    return acc += (grade / array.length)
  }, 0)
  return Math.round(avarage)

}
