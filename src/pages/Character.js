import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async() => {
    const id = getHash();
    const character = await getData(id);
    const view = `
    <div class="Characters-inner">
    <article class="Character-card">
    <img src="${character.image}" alt="${character.name}">
    <h2>Name</h2>
    <article class="Character-card">
    <h3>Episodes:${character.episode.length}</h3>
    <h3>Status:${character.status}</h3>
    <h3>Gender:${character.gender}</h3>
    <h3>Origin:${character.origin.name}</h3>
    <h3>Last Location:${character.location.name}</h3>
    </article>
    </div>
    `;
    return view;
};

export default Character;