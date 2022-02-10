export const countChars = (stringToFind: string, string: string): number => {
    let count = 0;
    string.split('').forEach(char => {
        if (char === stringToFind) {
            count ++
        }
    })
    return count
}