function checkEmail() {
    let email = document.querySelector('#emailField').value;
    if (!email.includes('@')) alert('Нет символа @');
    else if (!email.includes('.')) alert('Нет символа .');
    else alert('Успешно!');
}

const arrow = document.querySelector('.arrow-up');

window.addEventListener('scroll', function () {
    if (pageYOffset >= 200) {
        arrow.style.display = 'inline';
    }
});

const games = [
    {
        path: './img/game4.png',
        id: 1,
        description: '...',
        likes: 0
    }, {
        path: './img/game3.png',
        id: 2,
        description: '...',
        likes: 0
    }, {
        path: './img/game2.png',
        id: 3,
        description: '...',
        likes: 0
    }, {
        path: './img/game1.png',
        id: 4,
        description: '...',
        likes: 0
    },
];

const gamesContainer = document.querySelector('.games');

function renderGames() {
    games.forEach((game) => {
        gamesContainer.insertAdjacentHTML('afterbegin', '<div class="block">\n' +
            '                <img class="game-card" src="' + game.path + '" alt="">\n' +
            '                <div class="description">\n' +
            '                    <p>' + game.description + '</p>\n' +
            '                </div>\n' +
            '                <span id="likes-' + game.id + '"><img src="img/fire.svg" alt=""> <p id="likes-par' + game.id + '"> ' + game.likes + '</p>likes</span>\n' +
            '            </div>');
    })
}

renderGames();
games.forEach((game) => {
    const likes = document.querySelector('#likes-' + game.id);
    const likesPar = document.querySelector('#likes-par' + game.id);
    likes.addEventListener('click', (likeElem) => {
        game.likes += 1;
        likesPar.innerHTML = game.likes;
        console.log(game.likes);
    })
})

const gameCards = document.querySelectorAll('.game-card');
const description = document.querySelectorAll('.description');

gameCards.forEach((card, i) => {
    card.addEventListener('click', () => {
        description[i].classList.toggle('active');
    })
})

cards = [
    {
        path: './img/project1.png',
        id: 0
    },
    {
        path: './img/project2.png',
        id: 1
    },
    {
        path: './img/project3.png',
        id: 2
    },
    {
        path: './img/project4.png',
        id:3
    },
    {
        path: './img/project5.png',
        id: 4
    },
    {
        path: './img/project6.png',
        id: 5
    },
    {
        path: './img/project7.png',
        id: 6
    },
    {
        path: './img/project8.png',
        id: 7
    },
    {
        path: './img/project9.png',
        id: 8
    },
    {
        path: './img/project10.png',
        id: 9
    },
    {
        path: './img/project11.png',
        id: 10
    },
    {
        path: './img/project12.png',
        id: 11
    },

];

    const cardsContainer = document.querySelector('.images');
    const viewMoreButton = document.querySelector('.view-more');
    let lastCardIndex = 2;
    function renderCards() {
        for(let i = 0; i <= lastCardIndex; i++) {
            cardsContainer.insertAdjacentHTML('beforeend', '<img src="'+ cards[i].path +'" alt="">')
        }
    }

    renderCards();
console.log(lastCardIndex);

    viewMoreButton.addEventListener('click', () => {

        const cardInputValue = 3;
        cardsContainer.innerHTML = '';

        lastCardIndex += cardInputValue;

        if ((lastCardIndex + cardInputValue) >= cards.length) {
            viewMoreButton.innerHTML = 'collapse'
        }

        if (lastCardIndex >= cards.length) {
            cardsContainer.innerHTML = '';
            lastCardIndex = 2;
            viewMoreButton.innerHTML = 'view more'
        }

        renderCards()
    })

    const dateSelector = document.querySelector('.date');
    const date = new Date().getFullYear();
    dateSelector.textContent = date;




























