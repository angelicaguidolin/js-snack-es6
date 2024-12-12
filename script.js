//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const bike=[

{
    bikeName : "Java Scatto",
    weight : 5000,
},

{
    bikeName: "Guerciotti Monza",
    weight: 3400,
},
    

{
    bikeName: "Specialized Atheos",
    weight: 7000,
},
   
{
    bikeName : "Pinarello New Dogma",
    weight: 6000,
},
    

{
    bikeName: "Cannondale SuperSix EVO",
    weight: 6700,

},
]
let bikelight= bike[0];
for(let i=0; i < bike.length;i++){
    if(bike[i].weight< bikelight.weight){
        bikelight= bike[i]
    }
}
console.log(bikelight)

