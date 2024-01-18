var contador=0;

function buscar(){

    var entrada = document.getElementById("entrada").value.toLowerCase();

    if(entrada.length < 1){         //se o campo de input está vázio, chama o contador
        entrada = contador;         //entrada = numero que está o contador (1,2,3...)
                                    //com o campo de input vazio, vai buscar por numero na URL
    }

    var url = "https://pokeapi.co/api/v2/pokemon/"+entrada+"";

    fetch(url)
    .then(response => response.json())
    .then(data => { 

        var tela = document.getElementById("tela");
        tela.innerHTML = 
        '<h2>'+ data.name +'</h2>'

        +' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+data.id+'.gif" > '
        +' <img class="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/'+data.id+'.gif" > '

        
        // +' <img class="pokemon" src="'+ data.sprites.front_default +'" > '
        // +' <img class="pokemon" src="'+ data.sprites.back_default +'" > '
        +' <p> Id: '+ data.id +'</p> '
        +' <p> Tipo: '+ data.types.map(type => type.type.name) +'</p>'
        +' <p> Habilidades: ' + data.abilities.map(ability => ability.ability.name) + '</p>'

        contador = data.id;                              //atualiza o contador para o id do pokemon
        document.getElementById("entrada").value="";     //limpa o input de entrada
        
    }).catch(error => { 

        var tela = document.getElementById("tela");
        tela.innerHTML = '<p> Pokemon não encontrado! </p>' + error;
     })


}


function proximo(){
    contador = contador + 1;
    buscar();

 }

 function anterior(){
    contador = contador - 1;
    buscar();

 }


