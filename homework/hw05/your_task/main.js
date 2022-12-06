const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
    // console.log(`
    //     get tracks from spotify based on the search term
    //     "${term}" and load them into the #tracks section 
    //     of the DOM...`);
}

async function getAlbums (term) {
    // console.log(`
    //     get albums from spotify based on the search term
    //     "${term}" and load them into the #albums section 
    //     of the DOM...`);
}

// async function getArtist (term) {
//     console.log(`
//         get artists from spotify based on the search term
//         "${term}" and load the first artist into the #artist section 
//         of the DOM...`);
// };

async function getArtist (term) {
    let artistEndpoint = baseURL + "?";
    artistEndpoint += "q=" + term + "&type=artist";
    console.log(artistEndpoint);

    const artistData = await fetch(artistEndpoint).then(response => response.json());
    

    document.querySelector('#artist-section h1').innerHTML = artistData[0].name;

    // console.log(artistData);
    // console.log(artistData[0].name);
    // console.log(artistData[0].image_url);
    // const artistImage = '<img src="' + artistData[0].image_url + '">'
    // document.querySelector('#artist').innerHTML += artistImage;
    // const html = `<img src="${artistData[0].image_url}" />`;

    const artistCard = `
    <section class="artist-card" id="${artistData[0].id}">
                            <div>
                                <img src="${artistData[0].image_url}">
                                <h2>${artistData[0].name} (${artistData[0].popularity})</h2>
                                <div class="footer">
                                    <a href="${artistData[0].spotify_url}" target="_blank">
                                        View on Spotify
                                    </a>
                                </div>
                            </div>
                        </section>
    ` 

    document.querySelector('#artist').innerHTML = artistCard;

}

async function getTracks (term) {
    let tracksEndpoint = baseURL + "?";
    tracksEndpoint += "q=" + term + "&type=track";
    console.log(tracksEndpoint);

    const tracksData = await fetch(tracksEndpoint).then(response => response.json());
}

document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}