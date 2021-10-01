//========================================== banco de dados


let dadosParalelo = [];
let dadosSerie = [];
let dadosTotal = [];
// ================================================================================  Adicionando inputs no html do PARALELO
const AddListaParalelo = () => { 

    let quantidadeParalelo = document.getElementById('quantidadeParalelo').value
        dadosParalelo.push(quantidadeParalelo)

    let telaParalelo;

        if(quantidadeParalelo == '') {
             alert('Preencha o campo!')
        }else{

        for(i = 0; i < dadosParalelo.length; i++){ 

            telaParalelo = document.createElement('label')
            telaParalelo.innerHTML =  `

             <li class="estiloResultado"><span>R</span><p>${i+1}</p>${dadosParalelo[i]}</li>
            
            `;
        }

        document.getElementById('listaTelaParalelo').appendChild(telaParalelo)
        document.getElementById('quantidadeParalelo').value = ''

    }

    FecharParalelo();
    FecharSerie();
}
   
    // -----------------------------------------  BOTAO DE CALCULAR O PARALELO
    let base = 1;
    let ResultadoDaDivisao = 0;
    let ResultadoDosDados = 0;
    let totalDaSomaParalelo = 0;
    let verificarParalelo;

    const CalcularParalelo = () => { 

           if(dadosParalelo == ''){
                  alert('Adicione os valores dos resistores!')
           }else{

         for(let i = 0; i < dadosParalelo.length; i++) { 

         ResultadoDosDados  =  base / dadosParalelo[i];

         ResultadoDaDivisao = ResultadoDaDivisao + ResultadoDosDados;
        }
     
        totalDaSomaParalelo = base / ResultadoDaDivisao;

        
        document.getElementById('totalSomaParalelo').innerHTML = totalDaSomaParalelo.toFixed(2);
        document.getElementById('listaTelaParalelo').innerHTML = '';
        } 

        
        dadosParalelo = [];
        
    }
    


// =================================================================================  Adicionando inputs no html da SÉRIE




const AddListaSerie = () => { 

    let quantidadeSerie = document.getElementById('quantidadeSerie').value
        dadosSerie.push(quantidadeSerie)

    let talaSerie;


        if(quantidadeSerie == '') { 
            alert('Preencha o campo!')
        }else { 

            for(i = 0; i < dadosSerie.length; i++){ 

                talaSerie = document.createElement('label')
                talaSerie.innerHTML =  `

                <li class="estiloResultado"><span>R</span><p>${i+1}</p>${dadosSerie[i]}</li>
                
                `;
             }

     document.getElementById('listaInputSerie').appendChild(talaSerie)
     document.getElementById('quantidadeSerie').value = '';
 
    }

    FecharParalelo();
    FecharSerie();
}
       // -----------------------------------------  BOTAO DE CALCULAR A SERIE


    let ResultadoDaSoma = 0;
    
    const CalcularSerie = () => { 

        
       if(dadosSerie == ''){ 
              alert('Adicione os valores dos resistores!')
       }else { 

        for(let i = 0; i < dadosSerie.length; i++) { 

            ResultadoDaSoma = Number(ResultadoDaSoma) + Number(dadosSerie[i])
        }
    
        
        document.getElementById('totalSomaSerie').innerHTML = ResultadoDaSoma.toFixed(2);
        document.getElementById('listaInputSerie').innerHTML = '';
        
      } 

      dadosSerie = [];

    }

    
// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO TOTAL DOS CALCULOS OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

let totalAmbos = 0;

const CalcularParaleloEserie = () => { 

   if(totalDaSomaParalelo == '' || ResultadoDaSoma == '') { 
    alert('Calcule os valores primeiro para depois somar os resultados!')
   }else{

   const valorTotalDoParalelo = document.getElementById('totalSomaParalelo').value = totalDaSomaParalelo
   const valorTotalDaSerie = document.getElementById('totalSomaSerie').value = ResultadoDaSoma

   totalAmbos = Number(valorTotalDoParalelo) + Number(valorTotalDaSerie)

   
   document.getElementById('CorpoTotal').innerHTML = totalAmbos.toFixed(2);

    const ativarContainer = document.querySelector('.container-da-Resposta-total')
          ativarContainer.classList.add('ativar-container-ResTOTAL')

          document.getElementById('totalSomaParalelo').innerHTML = '';
          document.getElementById('totalSomaSerie').innerHTML = '';

         
    }
    
}


// ######################################################### LIMPAR 


const Limpar = () => { 

       totalDaSomaParalelo = 0;
       ResultadoDaDivisao = 0;
       ResultadoDaSoma = 0;

        dadosParalelo = [];
        dadosSerie = [];

    document.getElementById('quantidadeParalelo').value = ''
    document.getElementById('quantidadeSerie').value = '';
    document.getElementById('listaTelaParalelo').innerHTML = '';
    document.getElementById('listaInputSerie').innerHTML = '';
    document.getElementById('totalSomaParalelo').innerHTML = '';
    document.getElementById('totalSomaSerie').innerHTML = '';
    document.getElementById('CorpoTotal').innerHTML = '';
    const ativarContainer = document.querySelector('.container-da-Resposta-total')
          ativarContainer.classList.remove('ativar-container-ResTOTAL')
      
}


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ATIVAR INFORMAÇÃO

let infoParalelo
let infoSerie

const InfoParalelo = () => { 
    
        infoParalelo = document.querySelector('.container-formula-paralelo')
        infoParalelo.classList.toggle('ativar-formula-paralelo')

        infoSerie = document.querySelector('.container-formula-serie')
        infoSerie.classList.remove('ativar-formula-serie')
}

const FecharParalelo = () => { 
    InfoParalelo()

        infoParalelo = document.querySelector('.container-formula-paralelo')
        infoParalelo.classList.remove('ativar-formula-paralelo')
}

const InfoSerie = () => {  
        infoSerie = document.querySelector('.container-formula-serie')
        infoSerie.classList.toggle('ativar-formula-serie')

        infoParalelo = document.querySelector('.container-formula-paralelo')
        infoParalelo.classList.remove('ativar-formula-paralelo')
}

const FecharSerie = () => { 
    InfoSerie()

        infoSerie = document.querySelector('.container-formula-serie')
        infoSerie.classList.remove('ativar-formula-serie')
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ---- SALVAR NA NUVEM

// -------------------------------------- SALVAR PARALELO
let nuvemParalelo = [];


const SalvarParalelo = () => { 
     
    nuvemParalelo.push(totalDaSomaParalelo.toFixed(2))

    if(document.getElementById('totalSomaParalelo').innerHTML == 0) { 
       
        alert('Não á valor para ser salvo.')

    }else{

    let mostrarNuvemParalelo;
     

    for(i = 0; i < nuvemParalelo.length; i++){ 

        mostrarNuvemParalelo = document.createElement('ul')
        mostrarNuvemParalelo.innerHTML =  `

         <li>${nuvemParalelo[i]}</li>
        
        `;
    }

    document.getElementById('mostrandoParalelo').appendChild(mostrarNuvemParalelo)

  }

}



// -------------------------------------- SALVAR SERIE 

let nuvemSerie = [];

const SalvarSerie = () => { 
     
    nuvemSerie.push(ResultadoDaSoma.toFixed(2))

    if(document.getElementById('totalSomaSerie').innerHTML == 0) { 

        alert('Não á valor para ser salvo.')

    }else{

     let mostrarNuvemSerie;

        for(i = 0; i < nuvemSerie.length; i++){ 

            mostrarNuvemSerie = document.createElement('ul')
            mostrarNuvemSerie.innerHTML =  `

            <li>${nuvemSerie[i]}</li>
            
            `;
        }

    document.getElementById('mostrandoSerie').appendChild(mostrarNuvemSerie)

    }
}


// -------------------------------------- SALVAR TOTAL

let nuvemTotal = [];

const SalvarTotal = () => { 

    nuvemTotal.push(totalAmbos.toFixed(2))

     let mostrarNuvemTotal;

    for(i = 0; i < nuvemTotal.length; i++){ 

        mostrarNuvemTotal = document.createElement('ul')
        mostrarNuvemTotal.innerHTML =  `

         <li>${nuvemTotal[i]}</li>
        
        `;
    }

    document.getElementById('mostrandoTotal').appendChild(mostrarNuvemTotal)

}





// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% EXCLUIR DA NUVEM


const removerItem = () => { 
   
    document.getElementById('mostrandoParalelo').innerHTML = ''
    document.getElementById('mostrandoTotal').innerHTML = ''
    document.getElementById('mostrandoSerie').innerHTML = ''
 
}
