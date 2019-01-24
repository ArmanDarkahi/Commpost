// Our variables
let url = "https://newsapi.org/v2/everything?q=advertising&language=en&sortBy=relevancy&pageSize=10&apiKey=e3ce35f448344649a84499d591b27761"


// Our main function which handles the news items and adds them to the DOM
let receivedNews = (newsData) => {

  // newsData is the entire response from the API.
  // newsData.articles is an array of objects representing each article.
  // For each article object from the API, we create a new div in HTML.
  newsData.articles.forEach((article) => {
console.log(article)
    // Here we create and add html elements to our html file
    document.querySelector(".allNews").innerHTML +=

      `<div class="news">
        <h2>${article.title}</h2>
        <img src="${article.urlToImage}" />
        <p>${article.source.name}</p>
      </div>`

  })
}


// Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
// These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
fetch(url)
  .then(response => response.json())
  .then(receivedNews)
