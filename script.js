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



/*Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const team=[
    {teamName: "Milan", score: 0, soccerFouls: 0,},
    {teamName: "Juventus", score: 0, soccerFouls: 0,},
    {teamName: "Inter", score: 0, soccerFouls: 0,},
    {teamName: "Venezia FC", score: 0, soccerFouls: 0,},
]
team["score"]= Math.random()*10
//console.log(team[0])
for(let teamScore of team){
    if(teamScore.score ===0){
        teamScore.score = Math.floor(Math.random()*10) 
    }
}

console.log(team)
for(let teamFouls of team){
    if(teamFouls.soccerFouls===0){
        teamFouls.soccerFouls=Math.floor(Math.random()*10) 
    }
}
console.log(team)
