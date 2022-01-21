// function to get an element
export const getElement = (pAttribute) => {
    return document.querySelector(pAttribute)
}

export const root = getElement("#root")
export const mainHeader = getElement("#mainHeader")
export const mainHeading = getElement("#main-heading")
