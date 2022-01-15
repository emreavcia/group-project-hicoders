//Variable to get div with root id
const rootDiv = document.getElementById("root")

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


//Event listener for home link
const homeLink = document.getElementById("home")
homeLink.addEventListener("click", (e) => {
  e.preventDefault()
  rootDiv.innerHTML = home(mainData)
})


//Variables to get nav links for A, B, C classes 
const Aclass = document.getElementById("classA")
const Bclass = document.getElementById("classB")
const Cclass = document.getElementById("classC")


//Event listener for nav link A
Aclass.addEventListener("click", (e) => {
  e.preventDefault()
  rootDiv.innerHTML = linkFunction(mainData)
})
//Event listener for nav link B
Bclass.addEventListener("click", (e) => {
  e.preventDefault()
  rootDiv.innerHTML = linkFunction(mainData)
})
//Event listener for nav link C
Cclass.addEventListener("click", (e) => {
  e.preventDefault()
  rootDiv.innerHTML = linkFunction(mainData)
})



//Function to render Classes 
const linkFunction = (pArray) => {
  let innerHtml2 = `
    <h2 class="mt-5">Class Avarages</h2>
    <hr />
    <div class="d-flex justify-content-between w-75">
      <p>Matematik<span class="badge bg-secondary">80</span></p>
      <p>Matematik<span class="badge bg-secondary">80</span></p>
      <p>Matematik<span class="badge bg-secondary">80</span></p>
      <p>Matematik<span class="badge bg-secondary">80</span></p>
    </div>`
  let innerHtml = pArray.map(array => {
    return `
          <div class="card me-2" style="width: 18rem">
            <div class="card-body p-0">
              <div class="p-1 pt-2 bg-primary">
                <p class="card-title ms-4 text-white">Card title</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item border-0 w-100">
                  An item <span class="er-span-margin">80</span>
                </li>
                <li class="list-group-item border-0">
                  A second <span>80</span>
                </li>
                <li class="list-group-item border-0">
                  A third <span>80</span>
                </li>
                <li class="list-group-item border-0">
                  A third <span>80</span>
                </li>
              </ul>
            </div>
          </div>
        `
  }).join("")

  return `<div class="d-flex"> ${innerHtml} </div> ${innerHtml2} `
}