console.log("Seja bem-vindo(a) ao Desafio Nível de Herói.")
console.log("Identificando usuário...")

let nomeUsuario = "Danilo"

console.log("Olá, " + nomeUsuario + "! Vamos ver em qual nível você esta? ")

let estrelas = 100;
let nivel = "nível"
/*
let nivelFerro = "Ferro"
let nivelBronze = "Bronze"
let nivelPrata = "Prata"
let nivelOuro = "Ouro"
let nivelPlatina = "Platina"
let nivelAscendente = "Ascendente"
let nivelImortal = "Imortal"
let nivelRadiante = "Radiante"
*/

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

else if (estrelas >= 10001) {
    nivel = "Radiante"
}

console.log(nomeUsuario + ", você tem " + estrelas + " estrelas e está no nível " + nivel + ".")









