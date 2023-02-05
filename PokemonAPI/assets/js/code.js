function UrlPokemon(pokemonUrl = "https://pokeapi.co/api/v2/pokemon") {
    let ApiPkemon = fetch(pokemonUrl)
    ApiPkemon.then(convierte => convierte.json())
        .then(infoApi => {
            document.querySelector("#caja").innerHTML = ""
            for (const Pokemon of infoApi.results) {
                console.log(Pokemon)
                fetch(Pokemon.url)
                    .then(con => con.json())
                    .then(elpokemon => {
                        for (const Estadisticas of elpokemon.stats) {
                            document.querySelector("#caja").innerHTML += `
                            <div class="card">
                            <div class="imgpokemon border-bottom w-100"  style="background:url(${elpokemon.sprites.other.dream_world.front_default})">  </div>
                            <div class="card-body">
                            <h5 class="card-title">${Pokemon.name}</h5>
                            <p class="card-text"> </p>
                            <p class="card-text">${elpokemon.stats["0"].stat.name} ${elpokemon.stats["0"].base_stat} </p>
                            <p class="card-text">${elpokemon.stats["1"].stat.name} ${elpokemon.stats["1"].base_stat} </p>
                            <p class="card-text">${elpokemon.stats["2"].stat.name} ${elpokemon.stats["2"].base_stat} </p>
                            <p class="card-text">${elpokemon.stats["3"].stat.name} ${elpokemon.stats["3"].base_stat} </p>
                            </div>
                            </div>`

                            
                     
                            
                          return
                        }
                    
                    })
                    
                }
                
                armar_boton_paginacion(infoApi.next, infoApi.previous)
            })
            
        }


function armar_boton_paginacion(url_next, url_previous) {
   
    let disabledBotonNext = (url_next == null) ? "disabled" : "";
    let disabledBotonPrev = (url_previous == null) ? "disabled" : "";
    document.querySelector("#botonesPages").innerHTML = `
    <button class="btn btn-dark fs-2" ${disabledBotonPrev} onclick="UrlPokemon('${url_previous}')">Anterior</button>
    <button class="btn btn-dark fs-2" ${disabledBotonNext} onclick="UrlPokemon('${url_next}')">Siguiente</button>
    `
    
}

UrlPokemon()


