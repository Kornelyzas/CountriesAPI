const salysElm = document.querySelector('.main');
const btnSearch = document.querySelector('.btnSearch');
const searchInput = document.querySelector('.sInput');
const filterBtn = document.querySelector('.filterBtn');
const regFilter = document.querySelectorAll('a');

gautiSalis();

async function gautiSalis() {
    const atsakymas = await fetch("https://restcountries.eu/rest/v2/all");
    const salys = await atsakymas.json();
    displaySalys(salys);
    console.log(salys);
}

function displaySalys(salys) {

    salys.forEach(salis => {
        
    
    const salisElm = document.createElement('div');
    salisElm.classList.add('card');

    salisElm.innerHTML = `

    <div class="card bg-transparent" style="width: 18rem;">
            <div class="flag">
                <img src="${salis.flag}" class="card-img-top" alt="..."/>
            </div>   
                <div class="card-body">
                    <h5 class="card-title">${salis.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Capital:</b> ${salis.capital}</li>
                    <li class="list-group-item"><b>Population:</b> ${salis.population}</li>
                    <li class="list-group-item region"><b>Region:</b> ${salis.region}</li>
                    <li class="list-group-item"><b>Subregion:</b> ${salis.subregion}</li>
                    <li class="list-group-item"><b>Timezone:</b> ${salis.timezones}</li>
                </ul>
          </div>
       </div>
       `

    salysElm.appendChild(salisElm);
    });
}



searchInput.addEventListener('input', e => {
    const { value } = e.target;
    console.log(value);
    const saliesPavad = document.querySelectorAll('.card-title');

    saliesPavad.forEach(pavadinimas => {
        console.log(pavadinimas.innerText);
        if (pavadinimas.innerText.toLowerCase().includes(value.toLowerCase())) {
            pavadinimas.parentElement.parentElement.parentElement.style.display = 'block';
        } else {
            pavadinimas.parentElement.parentElement.parentElement.style.display = 'none';
        }
    });
});

regFilter.forEach(filter => {
    filter.addEventListener('click', () => {
        const saliesRegionas = document.querySelectorAll('.region');

    saliesRegionas.forEach(regionas => {
        if (regionas.innerText.toLowerCase().includes(filter.innerText.toLowerCase())) {
            regionas.parentElement.parentElement.parentElement.style.display = 'block';
        } else {
            regionas.parentElement.parentElement.parentElement.style.display = 'none';
        }
    });
        console.log(filter.innerText);
    });
});