//sweetscroll

document.addEventListener('DOMContentLoaded', () => {
  const scroller = new SweetScroll({
    horizontal: true,


  });
}, false);


// Api stuff
// Our variables
let urlAdvertising = "https://newsapi.org/v2/everything?q=advertising&language=en&sortBy=relevancy&pageSize=10&apiKey=e3ce35f448344649a84499d591b27761"


// Our main function which handles the news items and adds them to the DOM
let receivedNewsAdvertising = (newsDataAdvertising) => {

  // newsData is the entire response from the API.
  // newsData.articles is an array of objects representing each article.
  // For each article object from the API, we create a new div in HTML.
  newsDataAdvertising.articles.forEach((article) => {

    // Here we create and add html elements to our html file
    document.querySelector(".articleAdvertising").innerHTML +=
      `<div class="news">
        <a href="${article.url}"><img src="${article.urlToImage}" alt=""></a>
        <a href="${article.url}">  <h3>${article.title}</h3></a>
        <h4>${article.author} ${moment(article.publishedAt).format('MMMM Do YYYY, h:mm a')}</h4>
        <p>${article.description}</p>
      </div>`

  })
}


// Fetch is a built in function in JavaScript, it gets the data from the API and transforms it into JavaScript objects – JSON data.
// These lines call the API, makes sure we get the response as JSON, and finally passes the result to the function we defined above, receivedNews.
fetch(urlAdvertising)
  .then(response => response.json())
  .then(receivedNewsAdvertising)

//Marketing
  let urlMarketing = "https://newsapi.org/v2/everything?q=marketing&language=en&sortBy=relevancy&pageSize=10&apiKey=e3ce35f448344649a84499d591b27761"

  let receivedNewsMarketing = (newsDataMarketing) => {

    newsDataMarketing.articles.forEach((article) => {

      // Here we create and add html elements to our html file
      document.querySelector(".articleMarketing").innerHTML +=
        `<div class="news">
          <a href="${article.url}"><img src="${article.urlToImage}" alt=""></a>
          <a href="${article.url}">  <h3>${article.title}</h3></a>
          <h4>${article.author} ${moment(article.publishedAt).format('MMMM Do YYYY, h:mm a')}</h4>
          <p>${article.description}</p>
        </div>`

    })
  }


  fetch(urlMarketing)
    .then(response => response.json())
    .then(receivedNewsMarketing)



//FAANG

  let urlFaang = "https://newsapi.org/v2/everything?language=en&q=facebook%20OR%20amazon%20OR%20apple%20OR%20netflix%20OR%20google%20&sortBy=relevancy&pageSize=10&apiKey=e3ce35f448344649a84499d591b27761"
  let receivedNewsFaang = (newsDataFaang) => {

    newsDataFaang.articles.forEach((article) => {

      // Here we create and add html elements to our html file
      document.querySelector(".articleFaang").innerHTML +=
        `<div class="news">
          <a href="${article.url}"><img src="${article.urlToImage}" alt=""></a>
          <a href="${article.url}">  <h3>${article.title}</h3></a>
          <h4>${article.author} ${moment(article.publishedAt).format('MMMM Do YYYY, h:mm a')}</h4>
          <p>${article.description}</p>
        </div>`

    })
  }


  fetch(urlFaang)
    .then(response => response.json())
    .then(receivedNewsFaang)


    //Stocks
    let currentPageStocks = 1

    let fetchNewsStocks = () => {
      // let urlStocks = `https://newsapi.org/v2/everything?q=stocks&language=en&sources=cnbc&sortBy=relevancy&pageSize=10&page=${currentPageStocks}&apiKey=e3ce35f448344649a84499d591b27761"`

      let urlStocks = `https://newsapi.org/v2/everything?q=stocks&language=en&sources=cnbc&sortBy=relevancy&pageSize=10&page=${currentPageStocks}&apiKey=e3ce35f448344649a84499d591b27761`
      let receivedNewsStocks = (newsDataStocks) => {
        document.querySelector(".articleStockText").innerHTML =''

        newsDataStocks.articles.forEach((article) => {

          // Here we create and add html elements to our html file
          document.querySelector(".articleStockText").innerHTML +=
            `<div class="news">
              <a href="${article.url}"><img src="${article.urlToImage}" alt=""></a>
              <a href="${article.url}">  <h3>${article.title}</h3></a>
              <h4>${article.author} ${moment(article.publishedAt).format('MMMM Do YYYY, h:mm a')}</h4>
              <p>${article.description}</p>
            </div>`

        })
        //reset scroll to top
        document.querySelector(".articleStock").scrollTop = 0;

      }


      fetch(urlStocks)
        .then(response => response.json())
        .then(receivedNewsStocks)

    }

    fetchNewsStocks()

    let readMoreClick = () => {
      console.log(1)
      currentPageStocks += 1
      fetchNewsStocks()
    }
    //Trigger next page
    document.querySelector(".buttonMoreStocks").onclick = readMoreClick
