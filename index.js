console.log("Seja bem-vindo(a) ao Desafio Nível de Herói.")
console.log("Identificando usuário...")

let nomeUsuario = "Danilo"

console.log("Olá, " + nomeUsuario + "! Vamos ver em qual nível você esta? ")

let estrelas = 22100;

let nivelFerro = "Ferro"
let nivelBronze = "Bronze"
let nivelPrata = "Prata"
let nivelOuro = "Ouro"
let nivelPlatina = "Platina"
let nivelAscendente = "Ascendente"
let nivelImortal = "Imortal"
let nivelRadiante = "Radiante"


if (estrelas <= 1000) {
    console.log(nomeUsuario + ", você tem " + estrelas + " estrelas e está no nível " + nivelFerro + ".")
} 

else if (estrelas >= 1001 && estrelas <= 2000) {
    console.log(nomeUsuario + ", você tem " + estrelas + " estrelas e está no nível " + nivelBronze + ".")
} 

else if (estrelas >= 2001 && estrelas <= 5000) {
    console.log(nomeUsuario + ", você tem " + estrelas + " estrelas e está no nível " + nivelPrata + ".")
}

else if (estrelas >= 5001 && estrelas <= 7000) {
    console.log(nomeUsuario + ", você tem " + estrelas + " estrelas e está no nível " + nivelOuro + ".")
}

else if (estrelas >= 7001 && estrelas <= 8000) {
    console.log(nomeUsuario + ", você tem " + estrelas + " estrelas e está no nível " + nivelPlatina + ".")
}

else if (estrelas >= 8001 && estrelas <= 9000) {
    console.log(nomeUsuario + ", você tem " + estrelas + " estrelas e está no nível " + nivelAscendente + ".")
}

else if (estrelas >= 9001 && estrelas <= 10000) {
    console.log(nomeUsuario + ", você tem " + estrelas + " estrelas e está no nível " + nivelImortal + ".")
}

else if (estrelas >= 10001) {
    console.log(nomeUsuario + ", você tem " + estrelas + " estrelas e está no nível " + nivelRadiante + ".")
}











