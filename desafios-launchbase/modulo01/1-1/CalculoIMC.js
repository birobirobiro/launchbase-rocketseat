//peso / (altura * altura);

const nome = "Bianca";
const peso = 84;
const altura = 1.65;
const sexo = "F";
const imc = peso / (altura * altura);

console.log(`Seu IMC é de: ${imc}`);

if (imc >= 30) {
  console.log(
    `${nome}, Você está acima do peso! Precisa fazer alguma atividade física`
  );
} else {
  console.log(`${nome}, Parabéns! Você não está acima do peso, se cuide.`);
}
