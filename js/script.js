// const quote = document.getElementById('quote');
// const author = document.getElementById('author')

// const nextBtn = document.querySelector('.next')

// const api_url = "https://api.quotable.io/random";

// async function getQuote(url){
//     let response = await fetch(url);
//     let data = await response.json();
//     // console.log(data);

//     quote.innerHTML = data.content;
//     author.innerHTML = data.author;

//     SaveData();
// }


// nextBtn.addEventListener('click',()=>{
//     getQuote(api_url);
// });


// function SaveData() {
//     localStorage.setItem('Data', quote.innerHTML)
//     localStorage.setItem('Data', author.innerHTML)
// }


// function getData() {
//     localStorage.getItem('Data')
// }

// getData();





const quote = document.getElementById('quote');
const author = document.getElementById('author');
const nextBtn = document.querySelector('.next');
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();

        quote.innerHTML = data.content;
        author.innerHTML = data.author;

        // Save data to local storage
        saveData();
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

nextBtn.addEventListener('click', () => {
    getQuote(api_url);
});

function saveData() {
    localStorage.setItem('QuoteData', quote.innerHTML);
    localStorage.setItem('AuthorData', author.innerHTML);
}

function getData() {
    // Retrieve data from local storage
    const savedQuote = localStorage.getItem('QuoteData');
    const savedAuthor = localStorage.getItem('AuthorData');

    // Display data
    if (savedQuote && savedAuthor) {
        quote.innerHTML = savedQuote;
        author.innerHTML = savedAuthor;
    }
}

// Display initial quote from local storage
getData();
