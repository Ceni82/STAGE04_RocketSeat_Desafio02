/*

Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, 
cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada 
aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

 (DICA: para quebrar a linha no alert() usar '\n')
 */

const students = [
    {
       name: "João",
       note1: 4,
       note2: 10,
      
    },
    {
        name: "Carla",
        note1: 2.2,
        note2: 9.1,
    },
    {
        name: "Sofia",
        note1: 10,
        note2: 10,
      
    },
    {
        name: "Bernardo",
        note1: 8.5,
        note2: 7,
      
    },
  ]

  function calcMedia(note1, note2) {
    return (note1 + note2) /2
    
  }

    function media(note1, note2) {
        if ((note1 + note2) /2 >= 7){
            return ('Parabéns quiriiidu! Tu foi aprovado!')
        }

        if ((note1 + note2) /2 == 10){
            return('APAVOROU!!! APROVADAÇO')
        }

        else{
            return('Deu ruim... bem ruim! REPROVADO!')
        }
    }


  function msgStudents(student){ 
    return `
    O Estudante ${student.name} tem a média: ${calcMedia(student.note1, student.note2)}
    ${media(student.note1, student.note2)}
    `
    

   
}

  


for (let student of students){
    let msgFinal = msgStudents(student)

    alert( msgFinal)
    
}




/*
function calcmedia (note1, note2) {
    const media = (note1 + note2) / 2
    return media

}

//let mediafinal = calcmedia (students[0].note1, students[0].note2)

 // alert(`- O Estudante ${students[0].name} ficou com a média ${(students[0].note1 + students[0].note2) / 2 .toFixed(2)} `)

  alert(`- O Estudante ${students[0].name} ficou com a média ${mediafinal} `)*/




