/* 
escreval("Digite o Nome do Aluno: ")
leia(nome)
escreval("Digite a Nota 1 do Aluno: ")
leia(nota1)
escreval("Digite a Nota 2 do Aluno: ")
leia(nota2)

media := (nota1 + nota2) /2

se media >= 5 entao
   escreval("APROVADO! ", nome)
senao
   escreval("REPROVADO ", nome)
fimse

*/

var nome, nota1, nota2;

nome = prompt("Digite o Nome do Aluno: ")
nota1 = prompt("Digite a Nota 1 do Aluno: ")
nota2 = prompt("Digite a Nota 2 do Aluno: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if(media >= 5)
    alert("APROVADO! " + nome)

else
    alert("REPROVADO " + nome)