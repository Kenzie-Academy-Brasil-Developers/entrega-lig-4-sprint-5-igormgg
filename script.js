//VARIAVEIS GLOBAIS
const tabela = document.querySelector('#tabela')
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
const colunaCheia = () =>{
    let query = document.getElementById('tabela');
        query.classList.add('cheio');
        navigator.vibrate(200);//teste em mobiles
        setTimeout(function(){
            query.classList.remove('cheio')
        },500);
        
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
    let primeiraCelula = evt.currentTarget.firstElementChild;
    let arr = [...evt.currentTarget.childNodes];
        arr = arr.reverse();
        if(primeiraCelula.firstElementChild !== null){
            colunaCheia();
            return false
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
}
const jogada = (evt) =>{
     colocarDisco(evt);
}
const criacaoTabela = () =>{ 
    for(let coluna = 0; coluna < 7; coluna++){
            let novaColuna = document.createElement('div')
            novaColuna.classList.add(`colunas`)
            novaColuna.id = (`coluna${coluna+1}`)
            tabela.appendChild(novaColuna);
            novaColuna.addEventListener('click', (evt) =>jogada(evt));
        for(let celula = 0; celula < 6; celula++){
            let novaCelula = document.createElement('div')
            novaCelula.classList.add('celulas')
            novaCelula.dataset.coluna = `${coluna}`
            // novaCelula.addEventListener('click', (evt) =>{ os events podem ser adicionados aqui para a celula descomente para ver no console.
            //     console.log(evt.target)
            // })
            novaColuna.appendChild(novaCelula)   
        }
    }
}


criacaoTabela()
//FUNÇÕES