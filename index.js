let proyektSwiper = new Swiper(".projectSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
   // pagination: {
      //el: ".swiper-pagination",
      //clickable: true,
  //  },

    navigation: {
        nextEl: ".sonra",
        prevEl: ".evvel",
      },
    
  });

// API Application Programming Interface



//fetch axios

// function salamla() {

// }

// const salamla = function() {

// }
// // anonim funksiya adsiz funksiya
// menimButton.addEventListener('click', function(){

// // })

// this

// // call apply bind

// // ox funksiya (arrow function)
// menimButton.addEventListener('click', async () => {

// })

// salamla() //invoke


// Hoisting
//const ve let hoisting qaydalarini hece sayir
window.addEventListener("DOMContentLoaded", getMelumatlariGetir) //undefined

// function getMelumatlariGetir() {

// }
 // function expression
async function getMelumatlariGetir() {
const unvan = "https://newsapi.org/v2/everything?q=tesla&from=2024-05-01&sortBy=publishedAt&apiKey=c760fdbd29104b09a425931afdad15b6"

try {
  // console.log(await fetch(unvan))
  const gelenCavab =  await fetch(unvan)
  // console.log(gelenCavab.json())
  const melumatlar = await gelenCavab.json()

  const meqaleler = melumatlar.articles

  console.log(meqaleler)

  for(let i=0; i<meqaleler.length; i++) {
    console.log(meqaleler[i])
  }

}

catch(err) {

}
}

