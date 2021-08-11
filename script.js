//VARIAVEIS GLOBAIS
const tabela = document.querySelector('#tabela')
const btnReset = document.querySelector('#reset')
let player = 1;
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
            /* novaCelula.addEventListener('click', (evt) =>{
                
                console.log(evt.target)
                 })*/
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

const testeDeVitoria = (jogadorTurno) =>{

    let celula0Coluna0 = document.querySelector(`[data-coluna="0"][ data-celula="0"]`);
let celula1Coluna0 = document.querySelector(`[data-coluna="0"][ data-celula="1"]`);
let celula2Coluna0 = document.querySelector(`[data-coluna="0"][ data-celula="2"]`);
let celula3Coluna0 = document.querySelector(`[data-coluna="0"][ data-celula="3"]`);
let celula4Coluna0 = document.querySelector(`[data-coluna="0"][ data-celula="4"]`);
let celula5Coluna0 = document.querySelector(`[data-coluna="0"][ data-celula="5"]`);


let celula0Coluna1 = document.querySelector(`[data-coluna="1"][ data-celula="0"]`);
let celula1Coluna1 = document.querySelector(`[data-coluna="1"][ data-celula="1"]`);
let celula2Coluna1 = document.querySelector(`[data-coluna="1"][ data-celula="2"]`);
let celula3Coluna1 = document.querySelector(`[data-coluna="1"][ data-celula="3"]`);
let celula4Coluna1 = document.querySelector(`[data-coluna="1"][ data-celula="4"]`);
let celula5Coluna1 = document.querySelector(`[data-coluna="1"][ data-celula="5"]`);

let celula0Coluna2 = document.querySelector(`[data-coluna="2"][ data-celula="0"]`);
let celula1Coluna2 = document.querySelector(`[data-coluna="2"][ data-celula="1"]`);
let celula2Coluna2 = document.querySelector(`[data-coluna="2"][ data-celula="2"]`);
let celula3Coluna2 = document.querySelector(`[data-coluna="2"][ data-celula="3"]`);
let celula4Coluna2 = document.querySelector(`[data-coluna="2"][ data-celula="4"]`);
let celula5Coluna2 = document.querySelector(`[data-coluna="2"][ data-celula="5"]`);

let celula0Coluna3 = document.querySelector(`[data-coluna="3"][ data-celula="0"]`);
let celula1Coluna3 = document.querySelector(`[data-coluna="3"][ data-celula="1"]`);
let celula2Coluna3 = document.querySelector(`[data-coluna="3"][ data-celula="2"]`);
let celula3Coluna3 = document.querySelector(`[data-coluna="3"][ data-celula="3"]`);
let celula4Coluna3 = document.querySelector(`[data-coluna="3"][ data-celula="4"]`);
let celula5Coluna3 = document.querySelector(`[data-coluna="3"][ data-celula="5"]`);

let celula0Coluna4 = document.querySelector(`[data-coluna="4"][ data-celula="0"]`);
let celula1Coluna4 = document.querySelector(`[data-coluna="4"][ data-celula="1"]`);
let celula2Coluna4 = document.querySelector(`[data-coluna="4"][ data-celula="2"]`);
let celula3Coluna4 = document.querySelector(`[data-coluna="4"][ data-celula="3"]`);
let celula4Coluna4 = document.querySelector(`[data-coluna="4"][ data-celula="4"]`);
let celula5Coluna4 = document.querySelector(`[data-coluna="4"][ data-celula="5"]`);

let celula0Coluna5 = document.querySelector(`[data-coluna="5"][ data-celula="0"]`);
let celula1Coluna5 = document.querySelector(`[data-coluna="5"][ data-celula="1"]`);
let celula2Coluna5 = document.querySelector(`[data-coluna="5"][ data-celula="2"]`);
let celula3Coluna5 = document.querySelector(`[data-coluna="5"][ data-celula="3"]`);
let celula4Coluna5 = document.querySelector(`[data-coluna="5"][ data-celula="4"]`);
let celula5Coluna5 = document.querySelector(`[data-coluna="5"][ data-celula="5"]`);

let celula0Coluna6 = document.querySelector(`[data-coluna="6"][ data-celula="0"]`);
let celula1Coluna6 = document.querySelector(`[data-coluna="6"][ data-celula="1"]`);
let celula2Coluna6 = document.querySelector(`[data-coluna="6"][ data-celula="2"]`);
let celula3Coluna6 = document.querySelector(`[data-coluna="6"][ data-celula="3"]`);
let celula4Coluna6 = document.querySelector(`[data-coluna="6"][ data-celula="4"]`);
let celula5Coluna6 = document.querySelector(`[data-coluna="6"][ data-celula="5"]`);



if(   
      // da linha 0 da coluna 0 ate a coluna 3
      celula0Coluna0.lastElementChild.classList[1]===jogadorTurno
    &&celula0Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula0Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula0Coluna3.lastElementChild.classList[1]===jogadorTurno 
    // da linha 0 ate linha 3 coluna 0
    ||celula0Coluna0.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna0.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna0.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna0.lastElementChild.classList[1]===jogadorTurno
    // diagonal da linha 0 coluna 0 ate coluna3
    ||celula0Coluna0.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna3.lastElementChild.classList[1]===jogadorTurno){
    console.log("1");
    //apartir da posição linha0xcoluna0
}else 
 if(  celula0Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna1.lastElementChild.classList[1]===jogadorTurno
    ||celula0Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna4.lastElementChild.classList[1]===jogadorTurno){
//apartir da posição linha0xcoluna1
console.log("2");
}else 
if(
      celula0Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna2.lastElementChild.classList[1]===jogadorTurno         
    &&celula2Coluna2.lastElementChild.classList[1]===jogadorTurno         
    &&celula3Coluna2.lastElementChild.classList[1]===jogadorTurno         
    ||celula0Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna4.lastElementChild.classList[1]===jogadorTurno){
//apartir da posição linha0xcoluna2
console.log("3")
}else
 if(
      celula0Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula0Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula0Coluna5.lastElementChild.classList[1]===jogadorTurno
    &&celula0Coluna6.lastElementChild.classList[1]===jogadorTurno
    ||celula0Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna3.lastElementChild.classList[1]===jogadorTurno
    ||celula0Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna4.lastElementChild.classList[1]===jogadorTurno
    ||celula0Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna5.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna6.lastElementChild.classList[1]===jogadorTurno
        ){
            console.log("4")
//apartir da posição linha0xcoluna3
}else 
if(
      celula0Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna4.lastElementChild.classList[1]===jogadorTurno
    ||celula0Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna0.lastElementChild.classList[1]===jogadorTurno
    ){
    console.log("5")
//apartir da posição linha0xcoluna4
}else 
 if(
      celula0Coluna5.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna5.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna5.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna5.lastElementChild.classList[1]===jogadorTurno
    ||celula0Coluna5.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna2.lastElementChild.classList[1]===jogadorTurno
    ){//apartir da posição linha0xcoluna5
        console.log("6")
}else
 if(
      celula0Coluna6.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna6.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna6.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna6.lastElementChild.classList[1]===jogadorTurno
    ||celula0Coluna6.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna5.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna3.lastElementChild.classList[1]===jogadorTurno
    ){
        console.log("7")
//apartir da posição linha0xcoluna6
}else
 if(
      celula1Coluna0.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna3.lastElementChild.classList[1]===jogadorTurno
    ||celula1Coluna0.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna4.lastElementChild.classList[1]===jogadorTurno
    ){
        console.log("8")
//apartir da posição linha1xcoluna0
}else
 if(
      celula1Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna4.lastElementChild.classList[1]===jogadorTurno
    ){
    console.log("9")
//apartir da posição linha1xcoluna1
}else
 if(
      celula1Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna5.lastElementChild.classList[1]===jogadorTurno
    ){
    console.log("10")
//apartir da posição linha1xcoluna2
}else
 if(
      celula1Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna5.lastElementChild.classList[1]===jogadorTurno
    &&celula1Coluna6.lastElementChild.classList[1]===jogadorTurno
    ||celula1Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna0.lastElementChild.classList[1]===jogadorTurno
    ||celula1Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna5.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna6.lastElementChild.classList[1]===jogadorTurno
    ){
        console.log("11")
//apartir da posição linha1xcoluna3
}else
 if( 
      //apartir da posição linha1xcoluna4
      celula1Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna1.lastElementChild.classList[1]===jogadorTurno
        //apartir da linha1 coluna5
    ||celula1Coluna5.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna2.lastElementChild.classList[1]===jogadorTurno
        //apartirda linha 1 coluna 6
    ||celula1Coluna6.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna5.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna3.lastElementChild.classList[1]===jogadorTurno
    ){
        console.log("12");
   
}else
 if(
    //apartir da linha 2 coluna 0 ate coluna 3
      celula2Coluna0.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna3.lastElementChild.classList[1]===jogadorTurno
    //apartir da 2 ate linha 5 coluna 0
    ||celula2Coluna0.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna0.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna0.lastElementChild.classList[1]===jogadorTurno
    &&celula5Coluna0.lastElementChild.classList[1]===jogadorTurno
    
    ||celula2Coluna0.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula5Coluna3.lastElementChild.classList[1]===jogadorTurno
    ){
        console.log("13")
}else
 if(
   //apartir da qui linha 2 ate linha 5 coluna 1 
      celula2Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula5Coluna1.lastElementChild.classList[1]===jogadorTurno
    //linha 2 coluna 1 ate linha 5 ate coluna 4 
    ||celula2Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula5Coluna4.lastElementChild.classList[1]===jogadorTurno
){
    console.log('14')
}else 
if(
    //apartir da qui linha 2 ate a 5 coluna 2
      celula2Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula5Coluna2.lastElementChild.classList[1]===jogadorTurno
    //apartir da qui da linha 2 ate a linha 5 da coluna
    ||celula2Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula5Coluna5.lastElementChild.classList[1]===jogadorTurno
    ){
    console.log('15')
//apartir da posição linha2xcoluna2
}else 
if(
    //apartir linha 2 coluna 3 ate coluna 6 
      celula2Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna4.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna5.lastElementChild.classList[1]===jogadorTurno
    &&celula2Coluna6.lastElementChild.classList[1]===jogadorTurno
    //apartir da linha 2 ate a 5 coluna 3 ate coluna 0 diagonal esquerda pra direita
    ||celula2Coluna3.lastElementChild.classList[1]===jogadorTurno
    &&celula3Coluna2.lastElementChild.classList[1]===jogadorTurno
    &&celula4Coluna1.lastElementChild.classList[1]===jogadorTurno
    &&celula5Coluna0.lastElementChild.classList[1]===jogadorTurno
    //parei aqui
    //||celula3Coluna6.lastElementChild.classList[1]===jogadorTurno
    //&&celula3Coluna6.lastElementChild.classList[1]===jogadorTurno
    //&&celula3Coluna6.lastElementChild.classList[1]===jogadorTurno
    //&&celula3Coluna6.lastElementChild.classList[1]===jogadorTurno
    ){
  //apartir da posição linha2xcoluna3  
}

//apartir da posição linha2xcoluna4
//apartir da posição linha2xcoluna5
//apartir da posição linha2xcoluna6

//apartir da posição linha3xcoluna0
//apartir da posição linha3xcoluna1
//apartir da posição linha3xcoluna2
//apartir da posição linha3xcoluna3
//apartir da posição linha3xcoluna4
//apartir da posição linha3xcoluna5
//apartir da posição linha3xcoluna6

//apartir da posição linha4xcoluna0
//apartir da posição linha4xcoluna1
//apartir da posição linha4xcoluna2
//apartir da posição linha4xcoluna3
//apartir da posição linha4xcoluna4
//apartir da posição linha4xcoluna5
//apartir da posição linha4xcoluna6

//apartir da posição linha5xcoluna0
//apartir da posição linha5xcoluna1
//apartir da posição linha5xcoluna2
//apartir da posição linha5xcoluna3
//apartir da posição linha5xcoluna4
//apartir da posição linha5xcoluna5
//apartir da posição linha5xcoluna6

//apartir da posição linha1xcoluna0
//apartir da posição linha1xcoluna1
//apartir da posição linha1xcoluna2
//apartir da posição linha1xcoluna3
//apartir da posição linha1xcoluna4
//apartir da posição linha1xcoluna5
//apartir da posição linha1xcoluna6

}

bemVindo();
criacaoTabela();
//FUNÇÕES
