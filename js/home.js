import { avarageGrade } from "./avarageGradeFunction.js"
export const home = (pArray, root, SUBJECTS) => {

    root.innerHTML = `
    <div class="row ">
    ${pArray.map(classes => {

        return `
            <div class="col-sm-12 col-md-6 mb-5 mt-3">
            <div class="m-auto w-50">
            <p style="line-height: 30%">Toplam ogrenci sayisi: ${classes.students.length}</p>
            ${SUBJECTS.map(subject => {
            return `
                        <p style="line-height: 30%"> ${subject} ortalamasi: ${avarageGrade(subject, classes)} </p>
                    `
        }).join("")
            }            
            </div>
                <canvas id="${classes.id}-canvas" height="30vh" width="30vw"></canvas>  
            <p class="text-primary text-uppercase text-center">REPORT OF ${classes.className}</p> 
           </div> 
            `
    }).join("")
        }
            
    </div>
    `
}


