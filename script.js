//VARIAVEIS GLOBAIS
const tabela = document.querySelector('#tabela')
//VARIAVEIS GLOBAIS

//FUNÇÕES
const criacaoTabela = () =>{
    for(let coluna = 0; coluna < 7; coluna++){
            let novaColuna = document.createElement('div')
            novaColuna.classList.add(`colunas`)
            novaColuna.id = (`coluna${coluna+1}`)
            // novaColuna.addEventListener('click', (evt) =>{ os events podem ser adicionados aqui para a coluna descomente para ver no console.
            //     console.log(evt.currentTarget)
            // })
            tabela.appendChild(novaColuna);
            
        for(let celula = 0; celula < 6; celula++){
            let novaCelula = document.createElement('div')
            novaCelula.classList.add('celulas')
            novaCelula.dataset.coluna = `${coluna}`
            novaCelula.dataset.celula= `${celula}`
            // novaCelula.addEventListener('click', (evt) =>{ os events podem ser adicionados aqui para a celula descomente para ver no console.
            //     console.log(evt.target)
            // })
            novaColuna.appendChild(novaCelula)
            
        }
    }
}

criacaoTabela()
//FUNÇÕES
