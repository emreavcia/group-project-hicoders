let card=document.querySelector("#carde")

function classArender(array){
  card.innerHTML=array[0].students.map(item=>{
    return `
    <div class="card d-flex flex-column col-3 me-2" style="width: 18rem;">
    <div class="bg-primary m-0">
        <p class="text-white m-1 p-2">${item.studentName}</p>
    </div>
    ${item.subject.map(subject=>{
      return `
      <div class="d-flex flex-row justify-content-between mt-1 mb-1 me-3 ms-3">
                <p>${subject.subjectName}</p><span>${subject.grade}</span>
            </div>
      
      `
    }).join("") }
    </div>
    `
  }).join("")
}
classArender(mainData)