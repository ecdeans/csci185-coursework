const url = "https://www.dnd5eapi.co/api/spells/acid-arrow"

async function getData() {
    const data = await fetch(url).then(response => response.json());
    console.log(data);

}

getData();


function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getSpells(term);
    getClass(term);
    // getFeatures(term)
    getMonsters(term);
    if (ev) {
        ev.preventDefault();
    }
}

const baseURL = "https://www.dnd5eapi.co/api/";

async function getClass (term) {
    let classEndpoint = baseURL;
    classEndpoint += "classes/" + term;
    term = term.replaceAll(" ", "-");
    console.log(classEndpoint);

    const classData = await fetch(classEndpoint).then(response => response.json());

    const classCard = `
    <section id="class-result">
    <div>
        <header>
            <h2>${classData.name}</h2>
            <p>Hit Dice: 1d${classData.hit_die}</p>
        </header>

        <div>
            <p>Each character begins with a few starting proficiencies based off of their class. These range from skills to weapons and saving throws.</p>
            <h6>Skill Proficiencies:</h6>
                <p>${classData.proficiency_choices[0].desc}</p>
            <h6>Weapon and Tool Proficiencies:</h6>
                <p>${classData.proficiencies[0].name}, ${classData.proficiencies[1].name}, ${classData.proficiencies[2].name}, ${classData.proficiencies[3].name}</p>
            <h6>Saving Throw Proficiencies:</h6>
                <p>${classData.saving_throws[0].name}, ${classData.saving_throws[1].name}</p>
        </div>

        <div>
            <p>For more information on ${classData.index}s, check out this <a href="https://www.dndbeyond.com/classes/${classData.index}">link</a>.<p> 
        </div>


    </div>
    </section>

    </div>
    </section>`

    document.querySelector('.class-result').innerHTML = classCard;

}



async function getMonsters (term) {
    let monEndpoint = baseURL;
    term = term.replaceAll(" ", "-");
    monEndpoint += "monsters/" + term;
    console.log(monEndpoint);

    const monsterData = await fetch(monEndpoint).then(response => response.json());

    externalLink = term;

    const monsterCard = `
    <section id="spell-result">
    <div>
        <p>Here are some of the rudimentary stats for a ${monsterData.name}. Looking at things like armor class and hit point total can help determine whether this creature would make a difficult encounter for players.<p>
        <header>
        <h2>${monsterData.name}</h2>
        <p>Hit Points: ${monsterData.hit_points} </br> Hit Dice: ${monsterData.hit_dice} </br> Armor Class: ${monsterData.armor_class}</p>
        </header>

        <p>For more information on ${monsterData.name}s, check out this <a href="https://www.dndbeyond.com/monsters/16762-${externalLink}">link</a>.<p> 

    </div>
    </section>`

    document.querySelector('.monster-result').innerHTML = monsterCard;
}




async function getSpells (term) {
    let spellEndpoint = baseURL;
    term = term.replaceAll(" ", "-");
    spellEndpoint += "spells/" + term;
    console.log(spellEndpoint);

    const spellData = await fetch(spellEndpoint).then(response => response.json());

    let higherLevels = spellData.higher_level

    let higherLevel = " ";

    if (higherLevels.length > 0) {
        higherLevel = higherLevels[0];
    }

    const spellCard = `
    <section id="spell-result">
    <div>
        <header>
        <h2>${spellData.name}</h2>
        <p>Range: ${spellData.range} </br> Casting Time: ${spellData.casting_time}</p>
        </header>

        <div>
            <p>${spellData.desc[0]}</p>
            <p>${higherLevel}</p>
        </div>
    </div>
    </section>`

    document.querySelector('.spell-result').innerHTML = spellCard;
    
}


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}