//VARIAVEIS GLOBAIS
const tabela = document.querySelector('#tabela');
const btnReset = document.querySelector('#reset');
const audio = document.querySelectorAll('audio');
let player = 1;
//let testeEmpate=0;
let textoTurno =document.createElement('p');
textoTurno.id ='textoDoturno';
document.body.appendChild(textoTurno);
const play1 =document.createElement('img');
play1.setAttribute('src','../assets/img/player-goku.png');
play1.id ='joga1';
document.body.appendChild(play1);
const play2 =document.createElement('img');
play2.setAttribute('src','../assets/img/player-vegeta.png');
play2.id ='joga2';
document.body.appendChild(play2);

//VARIAVEIS GLOBAIS


//FUNÇÕES
const turnoJogador =() =>{
    if( play2.style.display==='block'){
       
    play1.style.display='block'
    play2.style.display='none';
   
    textoTurno.innerHTML =("Turno do jogador um")
     document.getElementById ('textoDoturno').style.color = '#e76a24'; 
}else{
    play1.style.display='none'
    play2.style.display='block'
    textoTurno.innerHTML =("Turno do jogador dois")
    document.getElementById ('textoDoturno').style.color = '#1f2c4f'; 
}
}
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
            console.log('vitoriaJogador1')
            // vitoriaJogador1();
            return true;
        }else if(countTwo == 4){
            console.log('vitoriaJogador2')
            // vitoriaJogador2();
            return true
        }
    }
}
const codigoJogador = (jogador) =>{
    if(jogador == 'jogador1'){
        return 1;
    }else if(jogador == 'jogador2'){
        return 2;
    }
    else {
        return 0;
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
const percorrerLinha = (mapa,linha) =>{
    let arrMult = []
    let aux = 0;
            for(let q = 0; q < 4; q++){
                arrMult[q] = [];
                if(q === 0){
                    for(let k = 0; k < 6; k++){
                        
                    arrMult[q].push(mapa[k][k+linha]) //mapa [k]linha [k]coluna
                    }
                }
                if(q === 1){
                    for(let k = 0; k < 6; k++){
                        arrMult[q].push(mapa[k+1][k+linha])
                    }
                }
                if (q === 2){
                    for(let k = 0; k < 5; k++){
                        arrMult[q].push(mapa[k+2][k+linha])
                    }
                }
                if (q === 3){
                    for(let k = 0; k < 4; k++){
                        arrMult[q].push(mapa[k+3][k+linha])
                    }
                }    
            }
            let vitoria = undefined;
            for(let i=0;i<arrMult.length;i++){
                vitoria = checaVencedorDiagonais(arrMult[i])
                if(vitoria==true){
                    i=arrMult.length;
                }
            }
    return vitoria;
}
const checaDiagonalEsquerda = () =>{
    let vitoria = undefined;
    let mapa = mapear();
        mapa.reverse();
       for(let i=0;i<mapa.length-3;i++){
        vitoria = percorrerLinha(mapa,i);
        if(vitoria==true){
            i=mapa.length-3;
        }
       }
    return vitoria
}
const checaDiagonalDireita = () => {
    let vitoria = undefined;
    let mapa = mapear();
       for(let i=0;i<mapa.length-3;i++){
            vitoria = percorrerLinha(mapa,i); 
            if(vitoria==true){
                i=mapa.length-3;
            }
       }
       return vitoria      
}
//condição de empate
const testaEmpate = (evt) =>{
let contador =0;
    for(let linha=0;linha<6;linha++){
        for(let coluna=0;coluna<7;coluna++){
            let teste = document.querySelector(`[data-coluna='${coluna}'][data-celula='${linha}']`)
            if(teste.firstChild===null){
                contador =0;
            }else if(teste.firstChild!==null){  
                contador++
            }
        }
        if(contador===42){
            empate();       
        }
    }
}

const empateJogadores =() =>{
    console.log("empate")
    audio[0].pause()
    audio[3].play()
    audio[3].volume = 0.1;
    audio[3].currentTime = 2
    setTimeout(() => {
        audio[3].volume = 0.4;
    }, 1700);
}

//buscar elemento linha
const buscarElementlinha = (evt) =>{
    let contadorJogador1=0;
    let contadorJogador2=0;
    for(let linha=0;linha<6;linha++){
        contadorJogador2=0;
        contadorJogador1=0;
        for(let coluna=0;coluna<7;coluna++){
         let teste = document.querySelector(`[data-coluna='${coluna}'][data-celula='${linha}']`)
         if(teste.firstChild===null){
        contadorJogador2=0;
        contadorJogador1=0;
         }else if(teste.firstChild!==null){ 

         let  valores= teste.firstChild.classList[1];
            if(valores=='jogador1'){
            contadorJogador1++;
            contadorJogador2=0;
            }else if(valores=='jogador2'){
                contadorJogador2++;
                contadorJogador1=0;
            }
            if(contadorJogador1===4){
                console.log("jogador1 ganhou")
                return true
            }else if(contadorJogador2===4){
                console.log("jogador2 ganhou")
                return true
            }
            }
        }
    }  
}

//busca os elementos por coluna
const buscarElementColuna = (evt)=>{
    let vitoria = undefined;
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
                               
                   vitoria = elementoColunatest(jogadores[coluna])
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
        return true
    }else
    if(contador2===4){
        console.log("jogador2 venceu")
        return true
    }
}
//fim da busca dos elementos por coluna

const vitoriaJogador1 = () => {
    audio[0].pause()
    audio[1].play()
    audio[2].play()
    audio[2].volume = 0.1;
    setTimeout(() => {
        audio[2].volume = 0.4;
    }, 1700);
    const divVitoria = document.querySelector('#vitoriaJogador2')
    divVitoria.classList.remove('hidden')
}
const vitoriaJogador2 = () => {
    audio[0].pause()
    audio[1].play()
    audio[2].play()
    audio[2].volume = 0.1;
    setTimeout(() => {
        audio[2].volume = 0.4;
    }, 1700);
    let divPai = document.querySelector('.container-vitoria');
        divPai.classList.remove('hidden');
    const divVitoria = document.querySelector('#vitoriaJogador2');
    divVitoria.classList.remove('hidden');
}
const empate = () =>{
    let divPai = document.querySelector('.container-vitoria');
        divPai.classList.remove('hidden');
    let divEmpate = document.querySelector('#empate');
        divEmpate.classList.remove('hidden');
}
const colunaCheia = () =>{
    let busca = document.getElementById('tabela');
        navigator.vibrate(200);
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
    let vitoria = undefined;
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
  
    vitoria = buscarElementlinha(evt);
    if(vitoria == undefined){
        vitoria = buscarElementColuna(evt);       
    }
     if(vitoria == undefined ){
        vitoria = checaDiagonalDireita();
    }
    if(vitoria == undefined ){
        vitoria = checaDiagonalEsquerda();
    }
    if(vitoria == undefined ){
        vitoria = testaEmpate();
    }
    console.log(vitoria)
    turnoJogador();
}
const bemVindo = () =>{

    let buttonJogar = document.querySelector('.btn__jogar');
    let busca = document.querySelector('#conteudo__regras');
    let buscaBody = document.getElementsByTagName('body')[0];
        buscaBody.classList.add('esconder');
        buttonJogar.addEventListener('click',function(){
            buttonJogar.firstChild.classList.remove('voar')
            buttonJogar.firstChild.classList.add('nuvemPartiu')
            music()
            buscaBody.classList.add('fade');
            setTimeout(function(){
                buscaBody.classList.remove('esconder');
                busca.classList.add('hidden');
                buscaBody.classList.add('fadeIn');  
            play1.style.display='block'
            textoTurno.innerHTML= "Turno do jogador um" 
            },1000);
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
            novaCelula.dataset.coluna = `${coluna}`
            novaCelula.dataset.celula = `${celula}`
            novaColuna.appendChild(novaCelula);          
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
    play1.style.display ='block';
    play2.style.display ='none';
}
const alternarAnimacaoNuvem = () =>{
    let query = document.querySelector('.button__iniciar ');
        query.classList.remove('nuvemChegada');
        query.classList.add('voar');
} 
setTimeout(()=>{alternarAnimacaoNuvem()},2000 );
const music = () => {
    audio[0].play()
    audio[0].volume = 0.1;
}
//FUNÇÕES
criacaoTabela();
bemVindo();
