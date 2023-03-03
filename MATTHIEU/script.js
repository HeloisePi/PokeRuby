const refreshCards = function() {
    document.querySelector('.cards-container').innerHTML = '';
    document.querySelector('.input-wrapper').classList.add('loading');

    const searchString = document.querySelector('input[name="pokemon-name"]').value;
    fetch(`https://api.pokemontcg.io/v1/cards?name=${encodeURI(searchString)}`)
        .then(response => response.json())
        .then(result => {
            document.querySelector('.input-wrapper').classList.remove('loading');

            result.cards.forEach((card, i) => {
                const cardElement = document.createElement('a');
                cardElement.classList.add('card', 'flipped');
                cardElement.innerHTML = `
                    <div class="effect">
                        <img class="side front" src="${card.imageUrl}">
                        <div class="glow"></div>
                    </div>
                    <div class="side back"></div>
                `;
                document.querySelector('.cards-container').appendChild(cardElement);

                setTimeout(function() {
                    cardElement.classList.remove('flipped');
                }, 50 * i);
            });
        });
};

let refreshTimeout;
document.querySelector('input[name="pokemon-name"]').addEventListener('keydown', function() {
    clearTimeout(refreshTimeout);
    refreshTimeout = setTimeout(refreshCards, 500);
});