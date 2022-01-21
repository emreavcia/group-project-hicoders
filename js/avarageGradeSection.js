//Avarage grade section
export const avarageGradeSectionHandler = (pArray, SUBJECTS, avarageGrade) => {

        let result = pArray.map(group => {

                return `
                <h2 class="mt-5">Class Avarages</h2>
                <hr />
                <div class="d-flex justify-content-between w-75">

    ${SUBJECTS.map(subject => {
                        return `
    <p class="fw-bold">${subject}<span class="badge bg-success d-inline-block rounded-0 ms-lg-2">${avarageGrade(subject, group)}</span></p>
                        `
                }).join("")}
                </div>                            
               `
        })

        return result
}