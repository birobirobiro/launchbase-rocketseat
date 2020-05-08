/** OPERADORES RELACIONAIS
 *
 * >    Maior
 * <    Menor
 * >=   Maior igual a
 * <=   Menor igual a
 * ==   Igual a
 * ===  Igual e do mesmo tipo
 * !=   Diferente de
 * !==  Diferente, inclusive o tipo
 */

//DESAFIO 1
//Verificar se é maior igual a 18 anos.
//Se sim, deixar entrar, se não bloquear a entrada

// const idade = 17;

if (idade >= 18) {
  console.log("Deixe entrar");
} else {
  console.log("Bloquear a entrada");
}

// //Se tiver 17 anos
if (idade === 17) {
  console.log("Volte quando tiver 18");
}

/**
 * OPERADORES LÓGICOS
 * && - "E" As duas condições devem ser verdadeiras para que a condição final seja verdadeira.
 * || - "OU" Uma das condições deve ser verdadeira para que a condição final seja verdadeira.
 * !  - "NÃO" Nega uma condição
 */

const idade = 18;

if (!(idade >= 18) || idade === 17) {
  console.log("Bloquear a entrada");
} else {
  console.log("Deixe entrar");
}

/* ====================================
  OPERADORES ARITMÉTICOS

  * Multiplcação
  / Divisão
  % Resto da divisão
  + Adição
  - Subtração
 ==================================== */

console.log(2 * 2); //4
console.log(2 / 2); //1
console.log(2 % 1.5); //0.5
console.log(2 + 2); //4
console.log(2 - 2); //10
