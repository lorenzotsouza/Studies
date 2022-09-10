/*
∞ Crie um algoritmo que transforme as notas do sistema ∞
∞ numérico para sistema de notas em caracteres tipo A, B, C, D, E e F. ∞
• de 90 para cima - A
• entre 80 - 89   - B
• entre 70 - 79   - C
• entre 60 - 69   - D
• entre 59 - 50   - E
• menor que 49    - F
*/

function getScore() {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreE = score >= 50 && score <= 59
    let scoreF = score < 49 && score <= 0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreE) {
        scoreFinal = "E"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }
    return scoreFinal
}

console.log(getScore (109))
console.log(getScore (-29))
console.log(getScore (30))
console.log(getScore (67))
console.log(getScore (84))
console.log(getScore (99))