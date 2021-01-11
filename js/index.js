async function buscar(){
    const lista = document.getElementById("habilidades");
    const oldiHTML = lista.innerHTML;
    lista.innerHTML = ``;

    const tipos = document.getElementById("tipo");
    const oldHTML = tipos.innerHTML;
    tipos.innerHTML = ` `

    const pokemon = document.getElementById("pokemon").value; 
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const json = await data.json();
    document.getElementById("nombre").innerText = json.name
    document.getElementById("foto").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${json.id}.png`
    
    console.log(json);
    
    json.abilities.forEach(element => {
        const lista = document.getElementById("habilidades");
        const oldHTML = lista.innerHTML;
        lista.innerHTML = `${oldHTML} <li class="info-habilidad">Habilidad: ${element.ability.name}</li>`;
    });
    json.types.forEach(element => {
        const tipos = document.getElementById("tipo");
        const oldHTML = tipos.innerHTML;
        tipos.innerHTML = `${oldHTML} <li class="info-tipo">Tipo: ${element.type.name}</li>`
    });
    
}