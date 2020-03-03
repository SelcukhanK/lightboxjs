const alleInformatie = document.querySelectorAll('.info');
const alleDuimen     = document.querySelectorAll('.duim');

let alleInhoud = [];

for(let i=o; i<alleInformatie.length; i++) {
    alleInhoud.push(alleInformatie[i]);
    alleInformatie[i].remove();
}

function maakModaal(num) {
    console.log(alleInhoud[num]);
    let modaal = document.createElement('div');
    modaal.className = 'modaal';

    let modaalContainer = document.createElement('div');
    modaalContainer.className = 'modaal-container';
    modaalContainer.innerHTML = alleInhoud[num].innerHTML;
    modaal.append(modaalContainer);
    document.body.append(modaal);
}

for(let i=0; i<alleDuimen.length; i++) {
    alleDuimen[i].addEventListener('click', function() {
        maakModaal(i)
    })
}

