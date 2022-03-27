const read = require('readline-sync')
//--------------------------------------------------------------------------------------------------
valido=true
let filaG = []
let filaC = []
let VacinadosG = []
let VacinadosC = []
//--------------------------------------------------------------------------------------------------
console.clear()
while(valido==true){
    console.log('1- Cadastrar pessoa na fila da vacina contra a gripe\t\t2- Cadastrar pessoa na fila da vacina contra a COVID')
    console.log('3- Chamar pessoa da fila para aplicar vacina contra a gripe\t4- Chamar pessoa da fila para aplicar vacina contra a COVID')
    console.log('5- Mostrar pessoas na fila da vacina contra a gripe\t\t6- Mostrar pessoas na fila da vacina contra a COVID')
    console.log('7- Mostrar lista de vacinados da gripe pela data\t\t8- Mostrar lista de vacinados da COVID pela data')
    console.log('9- Sair do programa')
    opc=read.question('Escolha uma opcao: ')
    opc=parseInt(opc)
    switch (opc)
    {
        case 1:
            cadastrarG()
            break;
        case 2:
            cadastrarC()
            break;
        case 3:
            chamarG()
            break;
        case 4:
            chamarC()
            break;
        case 5:
            mostrarG()
            break;
        case 6:
            mostrarC()
            break;
        case 7: 
            mostrarVacinadosG()
            break;
        case 8:
            mostrarVacinadosC()
            break;
        
        case 9:
            end()
            break;
        

        default:
            console.clear()
            console.log('opção invalida')
            continuar()
    }
}
//-------------------------------------------inicio de funçoes-------------------------------------------
function cadastrarG(){
    console.clear()
    nome = read.question('Digite o seu nome: ')
    idade = read.question('Digite a sua idade: ')
    email = read.question('Digite o seu email: ')
    data = read.question('Digite a data da vacinacao(DIA/MES/ANO): ')
    a = {
        name: nome,
        age: idade,
        Email: email,
        Data: data
    }
    filaG.push(a)
    console.clear()
    console.log('Cadastro efetuado com sucesso')
    continuar()
}

function cadastrarC(){
    console.clear()
    nome = read.question('Digite o seu nome: ')
    idade = read.question('Digite a sua idade: ')
    email = read.question('Digite o seu email: ')
    data = read.question('Digite a data da vacinacao(DIA/MES/ANO): ')
    a = {
        name: nome,
        age: idade,
        Email: email,
        Data: data
    }
    filaC.push(a)
    console.clear()
    console.log('Cadastro efetuado com sucesso')
    continuar()
}
function chamarG(){
    tam=filaG.length
    if(tam<1){
        console.clear()
        console.log('Fila vazia')
        continuar()
    } else{
        console.clear()
        s=filaG.shift()
        VacinadosG.push(s)
        console.log(s.name,'por favor, comparecer para a aplicação da vacina da gripe')
        continuar()
    }
}
function chamarC(){
    tam=filaC.length
    if(tam<1){
        console.clear()
        console.log('Fila vazia')
        continuar()
    } else{
        console.clear()
        r=filaC.shift()
        VacinadosC.push(r)
        console.log(r.name,'por favor, comparecer para a aplicação da vacina da COVID')
        continuar()
    }
}

function mostrarG(){
    console.clear()
    console.log('Lista de todas os nomes cadastrados na fila da vacinação da gripe')
    console.log(filaG)
    continuar()
}

function mostrarC(){
    console.clear()
    console.log('Lista de todas os nomes cadastrados na fila da vacinação da COVID')
    console.log(filaC)
    continuar()
}

function end(){
    valido=false
    console.clear()
    console.log('Programa finalizado com sucesso')
}

function mostrarVacinadosG(){
    console.clear()
    data = read.question('Qual e a data desejada?(DIA/MES/ANO)')

    console.log(VacinadosG.filter(VacinadosG =>(VacinadosG.Data == data)))
    continuar()
}

function mostrarVacinadosC(){
    console.clear()
    data = read.question('Qual e a data desejada?(DIA/MES/ANO)')

    console.log(VacinadosC.filter(VacinadosC =>(VacinadosC.Data == data)))
    continuar()
}

//-----------------------------------------finalização de funçoes-------------------------------------------

//-------------------------------------------continuar------------------------------------------------

function continuar(){
    read.question('Aperte enter para continuar: ')
    console.clear()
}