import { avarageGrade } from "./avarageGradeFunction.js"
export const home = (pArray, root, SUBJECTS) => {

    root.innerHTML = `
    <div class="row mb-5">
    ${pArray.map(classes => {

        return `
            <div class="col-6 ">
            <div class="m-auto w-50">
            <p class="lh-1">Toplam ogrenci: ${classes.students.length}</p>
            ${SUBJECTS.map(subject => {
            return `
                        <p class="lh-1"> ${subject} ortalamasi: ${avarageGrade(subject, classes)} </p>
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


