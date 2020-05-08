const classA = [
  {
    name: "Mayk",
    grade: 1.8,
  },
  {
    name: "Diego",
    grade: 10,
  },
  {
    name: "Fulano",
    grade: 2,
  },
  {
    name: "Mais um student",
    grade: 10,
  },
];

const classB = [
  {
    name: "Cleiton",
    grade: 9.8,
  },
  {
    name: "Robson",
    grade: 10,
  },
  {
    name: "Ciclano",
    grade: 0,
  },
  {
    name: "Novo student",
    grade: 5,
  },
];

function calculateAverage(students) {
  let suma = 0;
  for (let i = 0; i < students.length; i++) {
    suma = suma + students[i].grade;
  }
  const average = suma / students.length;
  return average;
}

function sendMessage(average, turma) {
  if (average > 5) {
    console.log(`${turma} average: ${average}. Congrats`);
  } else {
    console.log(`${turma} average: ${average}. Is not good.`);
  }
}

function markAsFlunked(student) {
  student.flunked = false;
  if (student.grade < 5) {
    student.flunked = true;
  }
}

function sendMessageflunked(student) {
  if (student.flunked) {
    console.log(`O student ${student.name} is flunked!`);
  }
}

function studentsflunkeds(students) {
  for (let student of students) {
    markAsFlunked(student);
    sendMessageflunked(student);
  }
}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

studentsflunkeds(classA);
studentsflunkeds(classB);

sendMessage(average1, "classA");
sendMessage(average2, "classB");
