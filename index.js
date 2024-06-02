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

// 1 Iyun tarixinde kecirilen movzular

const blogDivi = document.getElementById("bloglar")
console.log(blogDivi) //


async function getMelumatlariGetir() {
const unvan = "https://jsonplaceholder.typicode.com/posts"

try {
  // console.log(await fetch(unvan))
  const gelenCavab =  await fetch(unvan)
  // console.log(gelenCavab.json())
  const melumatlar =  await gelenCavab.json()

  console.log(melumatlar)

  // asynchronous wait

  // console.log(melumatlar.status)


  // console.log(meqaleler)



  for(let i=0; i<melumatlar.length; i++) {
    // console.log(meqaleler[i])
    blogDivi.innerHTML += `<div class="blog">
<span><span id="date">April 16, 2021</span> <span id="time">6 mins</span></span>
    <h2>${melumatlar[i].title}</h2>
    <a href="" class="text-white">Read the article <img src="./assets/images/blogs/white-arrow.svg" alt=""></a>
  </div>
  `

  }

  melumatlar.forEach(function(birMelumat){
    blogDivi.innerHTML += `<div class="blog">
    <span><span id="date">April 16, 2021</span> <span id="time">6 mins</span></span>
        <h2>${birMelumat.title}</h2>
        <a href="" class="text-white">Read the article <img src="./assets/images/blogs/white-arrow.svg" alt=""></a>
      </div>
      `
  })

}

catch(e) {

  // {message: "Uncaught typeerror"}
  console.log(e.message)
}


}


function getPosts() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(cavab => {
        if (cavab.ok) {
          return response.json();
        } else {
          reject(new Error('Şəbəkə səhvi baş verdi.'));
        }
      })
      .then(melumatlar => resolve(melumatlar))
      .catch(error => reject(error));
  });
}




