//CODE TO INSERT MAIN HEADING

export const mainHeadingHandler = (pArray) => {

    let result = pArray.map(group => {

        return `
            ${group.className}-(${group.students.length === 1 ?
                group.students.length + " student" :
                group.students.length + " students"})
                                                
                   `
    })

    return result
}