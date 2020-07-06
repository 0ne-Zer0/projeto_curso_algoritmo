/*

Var
// Seção de Declarações das variáveis 

   nome: caractere
   idade, limite, contador: inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   escreva("Digite a Quantidade de Vezes que sera Verificada a Idade: ")
   leia(limite)
   contador := 0
   
   enquanto contador < limite faca
      escreva("Digite o Nome da Pessoa: ")
      leia(nome)
      escreva("Digite a Idade do ", nome, ": ")
      leia(idade)
      se idade > 18 entao
         escreval(nome, " É Maior de Idade!")
      senao
         escreval(nome, " É Menor de Idade!")
      fimse
      
      contador := contador + 1
      
      fimenquanto

Fimalgoritmo

*/

function acaoBotao() {

    var nome, idade, limite, contador
     
    limite = prompt("Digite a Quantidade de Vezes que sera Verificada a Idade: ")
    contador = 0

    while(contador < limite){

        nome = prompt("Digite o Nome da Pessoa: ")
        idade = prompt("Digite a Idade do " + nome + ": ")
        
        if (idade >= 18)
            alert(nome + " - Maior de Idade!")
        else
           alert(nome + " - Menor de Idade!")
        
        contador++
    }
}