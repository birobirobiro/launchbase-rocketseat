// Criar um programa que calcula a média
// Das notas entre os alunos e envia
// mensagem do cálculo da média

const alunosDaTurmaA = [
  {
    nome: "Mayk",
    nota: 1.8,
  },
  {
    nome: "Diego",
    nota: 10,
  },
  {
    nome: "Funano",
    nota: 2,
  },
];

const alunosDaTurmaB = [
  {
    nome: "Cleiton",
    nota: 9.8,
  },
  {
    nome: "Robson",
    nota: 10,
  },
  {
    nome: "Ciclano",
    nota: 0,
  },
];

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
}

const media1 = calculaMedia(alunosDaTurmaA);
const media2 = calculaMedia(alunosDaTurmaB);

function enviaMensagem(media, turma) {
  if (media > 5) {
    console.log(`A media turma ${turma} foi de ${media}. Parabéns`);
  } else {
    console.log(`A média da turma ${turma} é menor que 5`);
  }
}

enviaMensagem(media1, "turmaA");
enviaMensagem(media2, "turmaB");
