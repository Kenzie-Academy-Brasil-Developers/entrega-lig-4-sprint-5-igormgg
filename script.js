//VARIAVEIS GLOBAIS
const tabela = document.querySelector('#tabela')
const btnReset = document.querySelector('#reset')
let player = 1;
//VARIAVEIS GLOBAIS

//FUNÇÕES

// VITORIA

const checaVencedorDiagonais = (arrDiagonal) =>{
    let vencedor = 0;
    let countOne = 0;
    let countTwo = 0;
    for(let i=0; i<arrDiagonal.length;i++){
        if(arrDiagonal[i] == 1){
            countTwo= 0;
            countOne++;
        } else if(arrDiagonal[i] == 2){
            countOne = 0;
            countTwo++;
        }
        if(countOne == 4){
            return console.log('jogador1 venceu');
        }else if(countTwo == 4){
            return console.log('jogador2 venceu');
        }
    }
}

const codigoJogador = (jogador) =>{
    if(jogador == 'jogador1'){
        return 1;
    }else if(jogador == 'jogador2'){
        return 2;
    }
}
const mapear = () =>{
    let busca = document.querySelector('#tabela')
    let arrTabela = busca.childNodes;
    let newArr = [];
    for(let i=0;i<arrTabela.length;i++){
        let arr = arrTabela[i].childNodes;
        newArr [i] =[]
        for(let j=0;j<arr.length;j++){
            let filho =arr[j].firstChild;
            if(filho !== null){
                newArr[i][j] = codigoJogador(filho.classList[1])
            }
            if(filho == null){
                newArr[i][j]=0;
            }
        }
    }
    newArr = newArr.map( (arr)=>arr.reverse() );
    return newArr;
}

const percorrer = (mapa,arr) =>{
    let arrTeste = [];
    let count = 0;
    let count2=0;
    console.log(mapa)
    for(let item=1;item<arr.length-2;item++){
        // count = count2;
        arrTeste[item]=[]
        for(let i=0;i<mapa.length;i++){
            arrTeste[item].push(mapa[i][count]);
            count++;
        }
      count=item;
        // console.log(arrTeste)
        
    }
    return arrTeste
    // console.log(arrTeste);
    // return arrTeste
    // console.log(arr)
    // checaVencedorDiagonais(arrTeste);
    // return arrTeste;
    // return arrTeste
}

const checaDiagonalDireita = (newCodigoJogadores) => {
   let mapa = mapear()
   console.log(mapa)
//    let contador = mapa.length-3;
//    let count = 0;
   let arrDiagonalDireita = [];
        for(let i=0;i<6;i++){
            let arr = mapa[i];
            let arrFinal = percorrer(mapa,arr)
            console.log(arrFinal);
        }
}

const buscarElement = (evt)=>{
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
                jogadores[coluna].unshift(status.classList[1]);
                elementoColunaTest(jogadores[coluna]);
               
            }
        }
       
    }
    // checaHorizontal(jogadores)
   let  newCodigoJogadores =  codigoJogador(jogadores);
        // console.log(newCodigoJogadores)
        checaDiagonalDireita();
        // checaDiagonalEsquerda(newCodigoJogadores);

}
const elementoColunaTest =(jogador)=>{
let contadorJogador1=0;
let contadorJogador2=0;
    for(let contador=0;contador<jogador.length;contador++)
        if(jogador[contador]=='jogador1'){
            contadorJogador1++;
            contadorJogador2=0;
    }else if(jogador[contador]=="jogador2"){
        contadorJogador2++
        contadorJogador1=0;
    }
    if(contadorJogador1===4){
        console.log("jogador1 venceu!")
    }else if(contadorJogador2===4){
        console.log("jogador2 venceu")
    }
}

// VITORIA

const vitoriaJogador1 = () => {
    const divVitoria = document.querySelector('#vitoriaJogador1')
    divVitoria.classList.remove('hidden')
}
const vitoriaJogador2 = () => {
    const divVitoria = document.querySelector('#vitoriaJogador2')
    divVitoria.classList.remove('hidden')
}
const colunaCheia = () =>{
    let busca = document.getElementById('tabela');
        navigator.vibrate(200);//teste em mobiles
        busca.classList.add('vibracao');
        setTimeout(function(){
            busca.classList.remove('vibracao');
        },200);
}
const criarDisco = (destino,player) =>{
    let disco = document.createElement('div');
        disco.classList.add('disco');
        player%2 !== 0? disco.classList.add('jogador1') : disco.classList.add('jogador2');
        destino.appendChild(disco);
        return true;
}

const colocarDisco = (evt) =>{
    let status = false;
    let destino = '';
    let primeiraCelula = evt.currentTarget.firstElementChild;
    let arr = [...evt.currentTarget.childNodes];
  
        arr = arr.reverse();
        if(primeiraCelula.firstElementChild !== null){
            colunaCheia();
            return false;
        }
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
        buscarElement(evt);
}
const bemVindo = () =>{
    let buttonJogar = document.querySelector('.btn__jogar');
    let busca = document.querySelector('#conteudo__regras');
    let buscaBody = document.getElementsByTagName('body')[0];
        buscaBody.classList.add('esconder');
        buttonJogar.addEventListener('click',function(){
            buscaBody.classList.add('fade');
            setTimeout(function(){
                buscaBody.classList.remove('esconder');
                busca.classList.add('hidden');
                buscaBody.classList.add('fadeIn');    
            },500);
        } );
}
const jogada = (evt) =>{
    colocarDisco(evt);
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

bemVindo();
criacaoTabela();



//FUNÇÕES

