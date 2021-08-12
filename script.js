//VARIAVEIS GLOBAIS
const tabela = document.querySelector('#tabela')
const btnReset = document.querySelector('#reset')
let player = 1;

//VARIAVEIS GLOBAIS


//buscar elemento linha
const buscarElementlinha = (evt) =>{
    let contadorJogador1=0;
    let contadorJogador2=0;
    for(let linha=0;linha<6;linha++){

        for(let coluna=0;coluna<7;coluna++){

         let teste = document.querySelector(`[data-coluna='${coluna}'][data-celula='${linha}']`)
         
         if(teste.firstChild===null){
          contadorJogador2=0;
          contadorJogador1=0;
         }else if(teste.firstChild!==null){  
         let  valores= teste.firstChild.classList[1];
            if(valores=='jogador1'){
            contadorJogador1++;
            console.log("jogador 1: "+contadorJogador1)
            contadorJogador2=0;                
            }else if(valores=='jogador2'){
                contadorJogador2++;
                console.log("jogador2 :"+contadorJogador2)
                contadorJogador1-=contadorJogador1;
            }
            if(contadorJogador1===4){
                console.log("jogador1 ganhou")
            }else if(contadorJogador2===4){
                console.log("jogador2 ganhou")
            }
        
        }
    }
}
}
//busca os elementos por coluna

const buscarElementColuna = (evt)=>{
    
    let pai = evt.currentTarget.parentElement;
    let elements = [...pai.childNodes];
    let jogadores=[];
    for( let coluna=0; coluna<elements.length; coluna++){
        let arrColuna = elements[coluna];
        let filhos = arrColuna.childNodes;
        jogadores[coluna]=[]
        for(let linha = 0;linha<filhos.length;linha++){
            let status = filhos[linha].children[0]; //null ou elemento
                if (status !== undefined){    
                    jogadores[coluna].unshift(status.classList[1])
                               
                    elementoColunatest(jogadores[coluna])
                }
               
                } 
        }
    }

const elementoColunatest =(jogador)=>{

let contador1=0;
let contador2=0;

    for(let contador=0;contador<jogador.length;contador++) 
    
    if(jogador[contador]=='jogador1'){
        contador1++;
        
        contador2=0;
    }else if(jogador[contador]=="jogador2"){
        contador2++
        contador1=0;                       
    }
    if(contador1===4){
            console.log("jogador1 venceu!")
    }else
    if(contador2===4){
        console.log("jogador2 venceu")

}
}
//fim da busca dos elementos por coluna
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
    status = criarDisco(destino,player);
    if(status == true){
        player++;
    }
    buscarElementlinha(evt)
    buscarElementColuna(evt);
}

const criacaoTabela = () =>{ 
    for(let coluna = 0; coluna < 7; coluna++){
            let novaColuna = document.createElement('div')
            novaColuna.classList.add(`colunas`)
            novaColuna.id = (`coluna${coluna}`)
            tabela.appendChild(novaColuna);
            novaColuna.dataset.coluna = `${coluna}`;
            novaColuna.addEventListener('click', (evt) =>colocarDisco(evt));
        for(let celula = 0; celula < 6; celula++){
            let novaCelula = document.createElement('div')
            novaCelula.classList.add('celulas')
            novaCelula.dataset.coluna = `${coluna}`
            novaCelula.dataset.celula = `${celula}`
            novaColuna.appendChild(novaCelula)
           
        }
    }
    btnReset.addEventListener('click',reset)
}
const reset = () => {
    const resetAll = document.querySelectorAll('.disco');
    player = 1;
    resetAll.forEach(element => {
        element.remove()
    });
}

criacaoTabela()
//FUNÇÕES



