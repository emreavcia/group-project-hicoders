//Function to render home page 
const home = (pArray) => {

    let innerHtml = pArray.map(classes => {

        return `
          <div id="${classes.id}-chart ">
              <canvas id="class-a" width="400" height="400"></canvas>
          </div>
          `
    }).join("")

    return innerHtml
}

rootDiv.innerHTML = home(mainData)