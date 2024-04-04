console.clear() // Limpar o console

console.log("-------------------------------------------\n")
console.log("Seja bem-vindo(a) ao Desafio Nível de Herói.\n")
console.log("-------------------------------------------\n")

console.log("Identificando usuário...\n")

let nomeUsuario = "Danilo"

console.log("Olá, " + nomeUsuario + "! Vamos ver em qual nível você esta? \n")

let estrelas = 5800

if (estrelas <= 1000) {
    nivel = "Ferro"
} 

else if (estrelas >= 1001 && estrelas <= 2000) {
    nivel = "Bronze"
} 

else if (estrelas >= 2001 && estrelas <= 5000) {
    nivel = "Prata"
}

else if (estrelas >= 5001 && estrelas <= 7000) {
    nivel = "Ouro"
}

else if (estrelas >= 7001 && estrelas <= 8000) {
    nivel = "Platina"
}

else if (estrelas >= 8001 && estrelas <= 9000) {
    nivel = "Ascendente"
}

else if (estrelas >= 9001 && estrelas <= 10000) {
    nivel = "Imortal"
}

else {
    nivel = "Radiante"
}

console.log("Parabéns, " + nomeUsuario + "! Você tem " + estrelas + " estrelas e está no nível " + nivel + ".\n")

console.log("-------------------------------------------")
console.log("Nome: " + nomeUsuario)
console.log("Estrelas: " + estrelas)
console.log("Nível: " + nivel)
console.log("-------------------------------------------\n")









