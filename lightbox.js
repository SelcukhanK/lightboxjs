const alleInformatie = document.querySelectorAll('.info');
const alleDuimen     = document.querySelectorAll('.duim');

let alleInhoud = [];

for(let i=0; i<alleInformatie.length; i++) {
    alleInhoud.push(alleInformatie[i]);
    alleInformatie[i].remove();
}

function verwijderModaal() {
    document.getElementById('modaal').remove();
}



function maakModaal(num) {
    console.log(alleInhoud[num]);
    let modaal = document.createElement('div');
    modaal.className = 'modaal';
    modaal.id = 'modaal';
    modaal.addEventListener('click', verwijderModaal);
    // sluitknop maken
    let sltknp = document.createElement('i');
    sltknp.className = 'fas fa-times-circle sluit-knop';
    sltknp.addEventListener('click', verwijderModaal);
    let modaalContainer = document.createElement('div');
    modaalContainer.className = 'modaal-container';
    modaalContainer.innerHTML = alleInhoud[num].innerHTML;
    modaalContainer.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    modaalContainer.prepend(sltknp);
    modaal.append(modaalContainer);
    document.body.append(modaal);
}

for(let i=0; i<alleDuimen.length; i++) {
    alleDuimen[i].addEventListener('click', function() {
        maakModaal(i)
    })
}
