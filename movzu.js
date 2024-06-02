const telebeler = ["Rufet", "Agarehim", "Azad"]

// console.log(telebeler[0])


// for(let i=0; i<telebeler.length; i++) {
//     console.log(telebeler[i])
// }

// Higher Order Function 

//bir funksiya parametr olaraq funksiya alirsa hemin funksiyaya HOF deyirler
//icindeki funksiyaya ise callback funksiya
telebeler.forEach(function(birTelebe){
console.log(birTelebe)
})