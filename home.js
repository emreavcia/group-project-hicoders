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