//sweetscroll

document.addEventListener('DOMContentLoaded', () => {
  const scroller = new SweetScroll({
    horizontal: true,


  });
}, false);


// Api stuff
// Our variables
// let urlAdvertising = "https://newsapi.org/v2/everything?q=advertising&language=en&sortBy=relevancy&pageSize=10&apiKey=e3ce35f448344649a84499d591b27761"
let currentPageAdvertising = 1
let fetchNewsAdvertising = () => {
  let urlAdvertising = `https://newsapi.org/v2/everything?q=advertising&language=en&sortBy=relevancy&pageSize=10&page=${currentPageAdvertising}&apiKey=e3ce35f448344649a84499d591b27761`
  let receivedNewsAdvertising = (newsDataAdvertising) => {
    document.querySelector(".articleAdvertisingText").innerHTML =''

    newsDataAdvertising.articles.forEach((article) => {

      // Here we create and add html elements to our html file
      document.querySelector(".articleAdvertisingText").innerHTML +=
        `<div class="news">
          <a href="${article.url}"><img src="${article.urlToImage}" alt=""></a>
          <a href="${article.url}">  <h3>${article.title}</h3></a>
          <h4>${article.author} ${moment(article.publishedAt).format('MMMM Do YYYY, h:mm a')}</h4>
          <p>${article.description}</p>
        </div>`

    })
    //reset scroll to top
    document.querySelector(".articleAdvertising").scrollTop = 0;
  }

  fetch(urlAdvertising)
    .then(response => response.json())
    .then(receivedNewsAdvertising)

}

fetchNewsAdvertising()

let readMoreClickAdvertising = () => {
  currentPageAdvertising += 1
  fetchNewsAdvertising()
}
//Trigger next page
document.querySelector(".buttonMoreAdvertising").onclick = readMoreClickAdvertising

//Marketing
  // let urlMarketing = "https://newsapi.org/v2/everything?q=marketing&language=en&sortBy=relevancy&pageSize=10&apiKey=e3ce35f448344649a84499d591b27761"
  let currentPageMarketing = 1
  let fetchNewsMarketing = () => {
    let urlMarketing = `https://newsapi.org/v2/everything?q=marketing&language=en&sortBy=relevancy&pageSize=10&page=${currentPageMarketing}&apiKey=e3ce35f448344649a84499d591b27761`
    let receivedNewsMarketing = (newsDataMarketing) => {
      document.querySelector(".articleMarketingText").innerHTML =''

      newsDataMarketing.articles.forEach((article) => {

        // Here we create and add html elements to our html file
        document.querySelector(".articleMarketingText").innerHTML +=
          `<div class="news">
            <a href="${article.url}"><img src="${article.urlToImage}" alt=""></a>
            <a href="${article.url}">  <h3>${article.title}</h3></a>
            <h4>${article.author} ${moment(article.publishedAt).format('MMMM Do YYYY, h:mm a')}</h4>
            <p>${article.description}</p>
          </div>`

      })
      //reset scroll to top
      document.querySelector(".articleMarketing").scrollTop = 0;
    }

    fetch(urlMarketing)
      .then(response => response.json())
      .then(receivedNewsMarketing)

  }

  fetchNewsMarketing()

  let readMoreClickMarketing = () => {
    currentPageMarketing += 1
    fetchNewsMarketing()
  }
  //Trigger next page
  document.querySelector(".buttonMoreMarketing").onclick = readMoreClickMarketing



//FAANG

//  let urlFaang = "https://newsapi.org/v2/everything?language=en&q=facebook%20OR%20amazon%20OR%20apple%20OR%20netflix%20OR%20google%20&sortBy=relevancy&pageSize=10&apiKey=e3ce35f448344649a84499d591b27761"

  let currentPageFaang = 1
  let fetchNewsFaang = () => {
    let urlFaang = `https://newsapi.org/v2/everything?language=en&q=facebook%20OR%20amazon%20OR%20apple%20OR%20netflix%20OR%20google%20&sortBy=relevancy&pageSize=10&page=${currentPageFaang}&apiKey=e3ce35f448344649a84499d591b27761`
    let receivedNewsFaang = (newsDataFaang) => {
      document.querySelector(".articleFaangText").innerHTML =''

      newsDataFaang.articles.forEach((article) => {

        // Here we create and add html elements to our html file
        document.querySelector(".articleFaangText").innerHTML +=
          `<div class="news">
            <a href="${article.url}"><img src="${article.urlToImage}" alt=""></a>
            <a href="${article.url}">  <h3>${article.title}</h3></a>
            <h4>${article.author} ${moment(article.publishedAt).format('MMMM Do YYYY, h:mm a')}</h4>
            <p>${article.description}</p>
          </div>`

      })
      //reset scroll to top
      document.querySelector(".articleFaang").scrollTop = 0;
    }

    fetch(urlFaang)
      .then(response => response.json())
      .then(receivedNewsFaang)

  }

  fetchNewsFaang()

  let readMoreClickFaang = () => {
    currentPageFaang += 1
    fetchNewsFaang()
  }
  //Trigger next page
  document.querySelector(".buttonMoreFaang").onclick = readMoreClickFaang


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
