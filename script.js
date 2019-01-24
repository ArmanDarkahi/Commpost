
let articlesAdvertisingArray = [
  {
    image: "https://static.adweek.com/adweek.com-prod/wp-content/uploads/2019/01/bk-hamberders-content-2019.png",
    link: "https://www.adweek.com/brand-marketing/burger-king-trolls-president-trump-plus-how-more-brands-are-responding-to-the-government-shutdown/",
    headline: "Burger King Trolls President Trump, Plus How More Brands Are Responding to the Government Shutdown",
    details: "By Katie Richards | 16 hours ago",
    body: "Sportswear companies are cleaning up national parks",

  },
  {
    image: "https://static.adweek.com/adweek.com-prod/wp-content/uploads/2019/01/bud-light-ingredients-hed-2-2019.jpg",
    link: "https://www.adweek.com/creativity/for-bud-light-even-announcing-ingredient-and-nutrition-labels-is-a-regal-affair/",
    headline: "For Bud Light, Even Announcing Ingredient and Nutrition Labels Is a Regal Affair",
    details: "By Katie Richards | 5 days ago",
    body: "By royal decree, the brewer takes the lead on voluntary disclosure",

  }
]


articlesAdvertisingArray.forEach(article =>{
  let articlesAdvertisingArray = document.querySelector(".articleAdvertising")

  articlesAdvertisingArray.innerHTML += `
    <h2>${article.image}</h2>
    <h3>${article.headline}</h3>
    <p>${article.body}</p>
  `

  console.log(article.image)
  console.log(article.subtitle)

})
