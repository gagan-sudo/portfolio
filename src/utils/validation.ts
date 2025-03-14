
export const isValidInput = (input: string) => {
    if (input === " " || input === ".") {
        return false
    }

    return true
}

export const isValidEmail = (input: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(input)
}

export const maxLength = (input: string, length: number) => {
    if (input.length > length) {
        return false
    }
    return true
}