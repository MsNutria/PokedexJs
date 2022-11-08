const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    })

    if (data) {
        console.log(data);

        //Nombre pokemón
        let pokeNombre = data.name;
        nombrePokemon(pokeNombre);

        //Imagen pokemón
        let pokeImg = data.sprites.front_default;

        //Habilidades pokemón
        let pokeInfo = data.abilities;
        pokeImage(pokeImg);
        pokeData(pokeInfo);
        console.log(pokeImg);

        //id Pokemón
        let pokeNumero = data.id;
        idPokemon(pokeNumero);
    }
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const nombrePokemon = (url) => {
    const pokeNombre = document.getElementById("pokeNombre");
    pokeNombre.innerHTML = url;
}

const idPokemon = (url) => {
    const pokeNum = document.getElementById('pokeId');
    pokeNum.innerHTML = "#"+ url;
}

const pokeData = (abilities) => {
    const pokeAbilities= document.getElementById("abilities");
    const abilitiesName= abilities.map(item => item.ability.name);
    //console.log('abilities full', abilities);
    //console.log('abilities Names', abilitiesName);
    pokeAbilities.innerHTML = abilitiesName;
}

