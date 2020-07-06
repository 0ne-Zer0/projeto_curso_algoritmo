/*

Var
// Seção de Declarações das variáveis 

   sairLoop: caractere
   valor1, valor2: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   repita
   
      escreva("Digite o Primeiro Valor: ")
      leia(valor1)
      escreva("Digite o Segundo Valor: ")
      leia(valor2)
      escreval("Resultado: ", valor1 + valor2)
      escreval("Deseja sair? s/n ")
      leia(sairLoop)
      
   ate sairLoop <> "n"


Fimalgoritmo

*/


function acaoBotao() {
    
    var sairLoop, valor1, valor2, resultado;
     
    do {
        valor1 = prompt("Digite o Primeiro Valor: ")
        valor2 = prompt("Digite o Segundo Valor: ")
        resultado = parseInt(valor1) + parseInt(valor2) 
        alert("Resultado: " + resultado)
        sairLoop = prompt("Deseja sair? s/n ")   
    } while (sairLoop == "n");

}