


const soma = (valor1, valor2) => {

    return valor1 + valor2
   
}


const multiplica = (valor1, valor2) => {

    return valor1 * valor2
   
}



const dividi = (valor1, valor2) => {

    return valor1 > valor2 ? valor1 / valor2 : valor2 / valor1
   
}

const subtrai = (valor1, valor2) => {

    return valor1 > valor2 ? valor1 - valor2 : valor2 - valor1
   
}

module.exports = {soma, multiplica, dividi, subtrai}