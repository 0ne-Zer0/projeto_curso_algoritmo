/*

Var
// Seção de Declarações das variáveis

   valor1, valor2, resultado: real
   operacao: caractere


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...

   //escreva("------- CALCULADORA -------")

   escreva("Digite o primeiro Valor: " )
   leia(valor1)
   escreva("Digite a Operação: ")
   leia(operacao)
   escreva("Digite o segundo Valor: ")
   leia(valor2)

   escolha operacao
           caso "+"
           resultado := valor1 + valor2
           caso "-"
           resultado := valor1 - valor2
           caso "*"
           resultado := valor1 * valor2
           caso "/"
           resultado := valor1 / valor2
   fimescolha
   
   escreva("Resultado: ", resultado)



Fimalgoritmo

*/


function acaoBotao() {    
    
    var valor1, valor2, resultado, operacao

    valor1 = prompt("Digite o Primeiro Valor: ")
    operacao = prompt("Digite a Operacao: ")
    valor2 = prompt("Digite o Segundo Valor: ")
    
    switch (operacao) {
        case "+":
            resultado = parseInt(valor1) + parseInt(valor2)
            break;
        case "-":
            resultado = parseInt(valor1) - parseInt(valor2)
            break;
        case "*":
            resultado = parseInt(valor1) * parseInt(valor2)
            break;
        case "/":
            resultado = parseInt(valor1) / parseInt(valor2)
            break;
    }
    
    alert("Resultado: " + resultado)
    
}