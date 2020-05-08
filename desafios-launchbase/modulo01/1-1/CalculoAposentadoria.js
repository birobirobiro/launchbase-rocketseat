const nome = "João";
const sexo = "M";
const idade = 76;
const contribuicao = 20;
const aposentadoria = idade + contribuicao;

console.log(`Seu tempo de aposentadoria é de: ${aposentadoria} anos.`);

if (
  (sexo == "F" && aposentadoria >= 85) ||
  (sexo == "M" && aposentadoria >= 95)
) {
  console.log(`Boa ${nome}, você pode se aposentar!`);
} else {
  console.log(
    `${nome}, infelizmente terá que aguardar mais um tempo para se aposentar.`
  );
}
