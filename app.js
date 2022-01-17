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
              <p>Geometri<span class="badge bg-secondary">${avarageGrade("Geometri", pArray[0])}</span></p
            </div>`

  return `<div class="d-flex"> ${innerHtml} </div> ${innerHtml2} `
}

//function to find avarage of a certain subject in a class 
const avarageGrade = (param, array) => {
  let avarage =
    array.students.map(student => { return student.subject })
      .map(subject => {
        return subject.
          filter(subject => {
            return subject.subjectName === param
          })
      }).filter(subject => subject.length !== 0)
      .map(subject => subject[0].grade)
      .reduce((acc, grade, index, array) => {
        return acc += (grade / array.length)
      }, 0)
  return Math.round(avarage)
}


