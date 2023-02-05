// function SelecionNumero() {
//     let NumeroUsusario = document.querySelector('#Numero').value
//     let resultado = document.querySelector('#resulatado')
//     resultado.innerHTML = ""
//      while(NumeroUsusario != 1){
//         if (NumeroUsusario % 2 == 0) {
//             NumeroUsusario = NumeroUsusario / 2;
//             resultado.innerHTML += NumeroUsusario +'-->'
//         } else if (NumeroUsusario % 2 == 1) {
    
//             NumeroUsusario = (NumeroUsusario * 3) + 1
//             resultado.innerHTML += NumeroUsusario +  '-->'
//         }
    
//      }
      
     
  

// }

let urlAPI = "https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number"
 let pant = document.querySelector('#informacion')

let peticion = fetch(urlAPI)
peticion.then(res => res.json())
            .then((informacion) => {
               informacion.data.forEach(element => { 
                pant.innerHTML+= `
            
               <div class="col ">
                   <div class="card ">
                  
                       <div class="card-body">
                           <h2 class="card-title">${element.title}</h2>
                           <p class="card-text">${element.main_reference_number}</p>
                           <p class="card-text">${element.date_display}</p>
                           <p class="card-text">${element.artist_display}</p>
                           <p class="card-text">${element.id}</p>
                           </div>
                   </div>
               </div>
               
               `

                
               });
              
            })