



function checaNumeroPrimo(n) {
    let divisores = 0
    
    for (let i = 1; i <= n; i++)
    if (n % i == 0) {
    divisores++;
    }
    
    if (divisores == 2){
    return 'É primo';
    } else {
    return 'Não é primo';
    }
    }

checaNumeroPrimo()






