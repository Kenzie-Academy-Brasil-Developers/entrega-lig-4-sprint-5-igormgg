//VARIAVEIS GLOBAIS
const tabela = document.querySelector('#tabela')
let player = 1;
let vitoria
let validador123 = true
//VARIAVEIS GLOBAIS

//FUNÇÕES

const vitoriaJogador1 = () => {
    const divVitoria = document.querySelector('#vitoriaJogador1')
    divVitoria.classList.remove('hidden')
}

const vitoriaJogador2 = () => {
    const divVitoria = document.querySelector('#vitoriaJogador2')
    divVitoria.classList.remove('hidden')
}
const criarDisco = (destino,player) =>{
    let disco = document.createElement('div');
        disco.classList.add('disco') 
        player%2 !== 0? disco.classList.add('jogador1') : disco.classList.add('jogador2');
        destino.appendChild(disco);
        teste()
        return true;
}
const colocarDisco = (evt) =>{

    let status = false;
    let destino = '';
    let arr = [...evt.currentTarget.childNodes];
        arr = arr.reverse();
       for(let i=0;i<arr.length;i++){
        if(arr[i].lastElementChild == null){
            destino = arr[i];

            i=arr.length;
        }
       }
    vitoria = destino
    status = criarDisco(destino,player);
    if(status == true){
        player++;
    }else{
        alert('error: Recarregue a pagina');//depois mudar para um modal
    }
}

const criacaoTabela = () =>{ 
    for(let coluna = 0; coluna < 7; coluna++){
            let novaColuna = document.createElement('div')
            novaColuna.classList.add(`colunas`)
            novaColuna.id = (`coluna${coluna+1}`)
            tabela.appendChild(novaColuna);
            novaColuna.addEventListener('click', (evt) =>colocarDisco(evt));
        for(let celula = 0; celula < 6; celula++){
            let novaCelula = document.createElement('div')
            novaCelula.classList.add('celulas')
            novaCelula.dataset.coluna = `${coluna}`
            novaCelula.dataset.celula = `${celula}`
            // novaCelula.addEventListener('click', (evt) =>{ os events podem ser adicionados aqui para a celula descomente para ver no console.
            //     console.log(evt.target)
            // })
            novaColuna.appendChild(novaCelula)
            
        }
    }
}

const teste = () => {
    let coluna = vitoria.dataset.coluna
    let celula = vitoria.dataset.celula
    let convColuna = Number(coluna)
    let convCelula = Number(celula)
   
    testeColuna(convColuna,convCelula)
    testeLinha(convColuna,convCelula)
    testeVerticalDireito(convColuna,convCelula)
    testeVerticalEsquerdo(convColuna,convCelula)
}
const testeColuna = (coluna,celula) => {
    
    if(celula <= 2){
        validacaoVitoria(coluna,coluna,coluna,coluna,celula,celula+1,celula+2,celula+3)

    }    
}

const testeLinha = (coluna,celula) =>{
    
    if(coluna === 0){
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula,celula,celula)
    }
    if(coluna === 1){
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula,celula,celula,celula )
            validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula,celula,celula )
    }
    if(coluna === 2){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula,celula,celula,celula)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula,celula,celula,celula)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula,celula,celula)

    }
    if(coluna === 3){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula,celula,celula,celula)
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula,celula,celula,celula)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula,celula,celula,celula)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula,celula,celula)
    }
    if(coluna === 4){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna-0,celula,celula,celula,celula)
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula,celula,celula,celula)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula,celula,celula,celula)

    }
    if(coluna === 5){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna-0,celula,celula,celula,celula)
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula,celula,celula,celula)
    }
    if(coluna === 6){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna-0,celula,celula,celula,celula)

    }
         
}
const testeVerticalDireito = (coluna,celula) => {

    //cod para diagonal iniciada na coluna 0 celula 3
    if(coluna === 0 && celula === 3){
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 1 && celula === 2){
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
    }
    if(coluna === 2 && celula === 1){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
    }
    if(coluna === 3 && celula === 0){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    //cod para diagonal iniciada na coluna 0 celula 3
//------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------

    //cod para diagonal iniciada na coluna 0 celula 4
    if(coluna === 0 && celula === 4){
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 1 && celula === 3){
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 2 && celula === 2){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)

    }
    if(coluna === 3 && celula === 1){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)

    }
    if(coluna === 4 && celula === 0){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    //cod para diagonal iniciada na coluna 0 celula 4

//------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------

    //cod para diagonal iniciada na coluna 0 celula 5
    if(coluna === 0 && celula === 5){
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 1 && celula === 4){
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 2 && celula === 3){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)

    }
    if(coluna === 3 && celula === 2){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    if(coluna === 4 && celula === 1){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)

    }
    if(coluna === 5 && celula === 0){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    //cod para diagonal iniciada na coluna 0 celula 5


    //cod para diagonal iniciada na coluna 1 celula 5
    if(coluna === 1 && celula === 5){
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 2 && celula === 4){
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 3 && celula === 3){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)

    }
    if(coluna === 4 && celula === 2){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    if(coluna === 5 && celula === 1){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)

    }
    if(coluna === 6 && celula === 0){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    //cod para diagonal iniciada na coluna 1 celula 5

//------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------

    //cod para diagonal iniciada na coluna 2 celula 0
    if(coluna === 2 && celula === 5){
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 3 && celula === 4){
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 4 && celula === 3){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)

    }
    if(coluna === 5 && celula === 2){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)

    }
    if(coluna === 6 && celula === 1){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    //cod para diagonal iniciada na coluna 2 celula 0

//------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------

    //cod para diagonal iniciada na coluna 3 celula 0
    if(coluna === 3 && celula === 5){
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 4 && celula === 4){
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
    }
    if(coluna === 5 && celula === 3){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
    }
    if(coluna === 6 && celula === 2){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    //cod para diagonal iniciada na coluna 3 celula 0



}

const testeVerticalEsquerdo = (coluna,celula) => {

    //cod para diagonal iniciada na coluna 0 celula 3
    if(coluna === 0 && celula === 3){
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 1 && celula === 2){
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
    }
    if(coluna === 2 && celula === 1){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
    }
    if(coluna === 3 && celula === 0){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    //cod para diagonal iniciada na coluna 0 celula 3
//------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------

    //cod para diagonal iniciada na coluna 0 celula 4
    if(coluna === 0 && celula === 4){
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 1 && celula === 3){
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 2 && celula === 2){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)

    }
    if(coluna === 3 && celula === 1){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)

    }
    if(coluna === 4 && celula === 0){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    //cod para diagonal iniciada na coluna 0 celula 4

//------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------

    //cod para diagonal iniciada na coluna 0 celula 5
    if(coluna === 0 && celula === 5){
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 1 && celula === 4){
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 2 && celula === 3){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)

    }
    if(coluna === 3 && celula === 2){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    if(coluna === 4 && celula === 1){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)

    }
    if(coluna === 5 && celula === 0){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    //cod para diagonal iniciada na coluna 0 celula 5


    //cod para diagonal iniciada na coluna 1 celula 5
    if(coluna === 1 && celula === 5){
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 2 && celula === 4){
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 3 && celula === 3){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)

    }
    if(coluna === 4 && celula === 2){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    if(coluna === 5 && celula === 1){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)

    }
    if(coluna === 6 && celula === 0){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    //cod para diagonal iniciada na coluna 1 celula 5

//------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------

    //cod para diagonal iniciada na coluna 2 celula 0
    if(coluna === 2 && celula === 5){
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 3 && celula === 4){
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 4 && celula === 3){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)

    }
    if(coluna === 5 && celula === 2){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)

    }
    if(coluna === 6 && celula === 1){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    //cod para diagonal iniciada na coluna 2 celula 0

//------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------

    //cod para diagonal iniciada na coluna 3 celula 0
    if(coluna === 3 && celula === 5){
        validacaoVitoria(coluna,coluna+1,coluna+2,coluna+3,celula,celula-1,celula-2,celula-3)
    }
    if(coluna === 4 && celula === 4){
        validacaoVitoria(coluna-1,coluna,coluna+1,coluna+2,celula+1,celula,celula-1,celula-2)
    }
    if(coluna === 5 && celula === 3){
        validacaoVitoria(coluna-2,coluna-1,coluna,coluna+1,celula+2,celula+1,celula,celula-1)
    }
    if(coluna === 6 && celula === 2){
        validacaoVitoria(coluna-3,coluna-2,coluna-1,coluna,celula+3,celula+2,celula+1,celula)
    }
    //cod para diagonal iniciada na coluna 3 celula 0



}


const validacaoVitoria = (coluna1,coluna2,coluna3,coluna4,celula1,celula2,celula3,celula4) =>{
    let element1 = document.querySelector(`[data-coluna='${coluna1}'][data-celula='${celula1}']`).lastElementChild
    let element2 = document.querySelector(`[data-coluna='${coluna2}'][data-celula='${celula2}']`).lastElementChild
    let element3 = document.querySelector(`[data-coluna='${coluna3}'][data-celula='${celula3}']`).lastElementChild
    let element4 = document.querySelector(`[data-coluna='${coluna4}'][data-celula='${celula4}']`).lastElementChild

    let elemento = [element1,element2,element3,element4]

    if(elemento[0] !== null && elemento[1] !== null && elemento[2] !== null &&  elemento[3] !== null){
           
       
        if(elemento[0].classList[1] === 'jogador1' && elemento[1].classList[1] === 'jogador1' && elemento[2].classList[1] === 'jogador1' && elemento[3].classList[1] === 'jogador1'){
            console.log('vitoria jogador 1')
        }
        if(elemento[0].classList[1] === 'jogador2' && elemento[1].classList[1] === 'jogador2' && elemento[2].classList[1] === 'jogador2' && elemento[3].classList[1] === 'jogador2'){
            console.log('vitoria jogador 2')
        }
    }
   
}
criacaoTabela()
//FUNÇÕES