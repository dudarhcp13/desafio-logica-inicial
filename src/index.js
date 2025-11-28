let nomeDoHeroi = "Morgana"
let xp = 10000
let nivelHeroi

if(xp < 1000){
    nivelHeroi = "Ferro"
}else if(xp >= 1001 && xp <= 2000){
    nivelHeroi = "Bronze"
}else if(xp >= 2001 && xp <= 5000){
    nivelHeroi = "Prata"
}else if(xp >= 5001 && xp <= 7000){
    nivelHeroi = "Ouro"
}else if(xp >= 7001 && xp <= 8000){
    nivelHeroi = "Platina"
}else if(xp >= 8001 && xp <= 9000){
    nivelHeroi = "Ascendente"
}else if(xp >= 9001 && xp <= 10000){
    nivelHeroi = "Imortal"
}else xp >= 10001;{
    nivelHeroi = "Radiante"
}

console.log("O nível do seu Herói " + nomeDoHeroi + " é o nível " + nivelHeroi)
