//
// let showAlert = () => {
//   alert("Alex är seg")
// }
//
// let hideDiv = () => {
//   document.querySelector(".showDiv").classList.toggle("hideDiv");
//
// }
//
// let gömTest = () => {
//   document.querySelector('.showDiv').classList.add("hideDiv")
//
// }
//
//
// document.querySelector('.button').onclick=showAlert
// document.querySelector('.hideButton').onclick=hideDiv
//
// document.querySelector(".hideButton").onmouseover = gömTest


// let name = "Arman"
// let lastname = "Darkahi"
// let fullName = name + " " + lastname
//
// let babbel ="     masssa    vitt    aha ha ha       "
//
// let siffra1=1
// let siffra2=2
//
// console.log(siffra1+siffra2)
//
// document.querySelector(".showDiv").innerHTML = (fullName.toUpperCase())
// document.querySelector(".showDiv").innerHTML = (fullName.repeat(3999))


let clickCount = 0

let incrementCount = () => {
  clickCount += 1
  document.querySelector(".output").innerHTML = clickCount

}

document.querySelector(".myButton").onclick = incrementCount

let fruits = [ "apple", "orange", "lemon"]

  console.log(fruits[2])

fruits.forEach (fruitName => {
  console.log(fruitName)
})


let newsTitles = ["Hotet mot handbollens framtid i Stockholm", "jo, placebo funkar – även när man vet att det är fejk", "Vilken version av dig umgås dina vänner med i kväll?"]

newsTitles.forEach (nyheter => {
  console.log(nyheter)

})


let articlesDiv = document.querySelector(".demo")

newsTitles.push("arman test")

newsTitles.forEach(title => {

  articlesDiv.innerHTML += `<h2>${title}</h2>`




})
