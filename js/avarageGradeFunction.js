//Function to find the avarage of a certain subject in a class 
export const avarageGrade = (param, array) => {
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