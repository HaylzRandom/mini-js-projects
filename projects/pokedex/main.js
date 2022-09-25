const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
const colors = {
	fire: 'rgba(240,128,48,0.8)',
	grass: 'rgba(120,200,80,0.8)',
	electric: 'rgba(248,208,48,0.8)',
	water: 'rgba(104,144,240,0.8)',
	ground: 'rgba(224,192,104,0.8)',
	rock: 'rgba(184,160,56,0.8)',
	fairy: 'rgba(240,182,188,0.8)',
	poison: 'rgba(160,64,160,0.8)',
	bug: 'rgba(168,184,32,0.8)',
	dragon: 'rgba(112,56,248,0.8)',
	psychic: 'rgba(248,88,136,0.8)',
	flying: 'rgba(168,144,240,0.8)',
	fighting: 'rgba(192,48,40,0.8)',
	normal: 'rgba(168,168,120,0.8)',
};

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemon_count; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const data = await res.json();

	createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

	const pokeId = pokemon.id.toString().padStart(3, '0');

	const poke_types = pokemon.types.map((type) => type.type.name);
	const type = main_types.find((type) => poke_types.indexOf(type) > -1);
	const pokeType = type[0].toUpperCase() + type.slice(1);

	const color = colors[type];

	pokemonEl.style.backgroundColor = color;

	const pokemonInnerHTML = `
                <div class="img-container">
					<img
						src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"
						alt="${pokeName}"
					/>
                </div>
				<div class="info">
					<span class="number">#${pokeId}</span>
					<h3 class="name">${pokeName}</h3>
					<small class="type">Type: <span>${pokeType}</span></small>
				</div>
    `;

	pokemonEl.innerHTML = pokemonInnerHTML;

	poke_container.appendChild(pokemonEl);
};

fetchPokemons();
