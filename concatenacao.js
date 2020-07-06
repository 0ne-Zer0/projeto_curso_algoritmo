/*

Var
// Seção de Declarações das variáveis 

   nome: caractere
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   escreval("Digite o Nome: ")
   leia(nome)
   escreval("Digite o Número: ")
   leia(numero)
   
   escreval(nome,  " : ", numero)

Fimalgoritmo

*/

var nome, numero;

nome = prompt("Digite o Nome: ")
numero = prompt("Digite o Número: ")

document.getElementById("paragrafo").innerText = nome + " : " + numero