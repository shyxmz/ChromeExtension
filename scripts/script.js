const factElement = document.getElementById('factElement');
const newFactBtn = document.getElementById('newFactBtn');

function getFact() {
    factElement.classList.add('loading');
    
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
        .then(data => data.json())
        .then(factData => {
            const factText = factData.text;
            factElement.innerHTML = factText;
            factElement.classList.remove('loading');
        })
        .catch(error => {
            factElement.innerHTML = "Oops! Couldn't load a fact. Try again!";
            factElement.classList.remove('loading');
        });
}

// Load initial fact
getFact();

// Add click event listener to button
newFactBtn.addEventListener('click', getFact);