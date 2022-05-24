```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
    let salarioFixo = 2000
    let salarioPorCarro = (valorTotalVendas/qtdeCarrosVendidos*5/100 * qtdeCarrosVendidos)
    let cemReais = qtdeCarrosVendidos*100
    
    let valorFinal = salarioFixo + salarioPorCarro + cemReais
   
  let convertido = parseInt(valorFinal)
    return convertido```
    