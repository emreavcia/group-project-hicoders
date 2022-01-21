//CODE TO INJECT CLASSES PAGE TO SHOW CARDS FOR EACH STUDENT IN A CERTAIN CLASS       

export const classCardSection = (pArray) => {

    let result = pArray.map(group => {

        return `
                    ${group.students.map(student => {
            return `
                            <div class="card col-3  m-3" style="width: 18rem">
                                <div class="card-body p-0">
                                    <div class="p-1 pt-2 bg-primary">
                                        <p class="card-title ms-4 text-white">
                            
                    ${student.studentName} (${student.subject.length !== 1 ?
                    (student.subject.length + " Lessons") :
                    (student.subject.length + " Lesson")})
                                                                      
                                        </p>
                                    </div>
                                    
                            <ul class="list-group list-group-flush">
                            ${student.subject.map(subject => {
                        return `    <li 
                                            class="list-group-item border-0 w-100 d-flex justify-content-between"
                                            > 
                                            ${subject.subjectName + ":"}
                                                <span class="">
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
            }
                   `
    })

    return result
}