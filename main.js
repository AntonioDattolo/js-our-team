///***********************ARRAY DI OGGETTI */
////MILESTONE 0
let team =[
{ 
    nome : "Wayne Barnett" ,
    ruolo : "Founder & CEO" ,
    foto : "wayne-barnett-founder-ceo.jpg" ,
},
{ 
    nome : "Angela Caroll" ,
    ruolo : "Chief Editor" ,
    foto : "angela-caroll-chief-editor.jpg" ,
},
{ 
    nome : "Walter Gordon" ,
    ruolo : "Office Manager" ,
    foto : "walter-gordon-office-manager.jpg" ,
},
{ 
    nome : "Angela Lopez" ,
    ruolo : "Social Media Manager" ,
    foto : "angela-lopez-social-media-manager.jpg" ,
},
{ 
    nome : "Scott Estrada" ,
    ruolo : "Developer" ,
    foto : "scott-estrada-developer.jpg" ,
},
{ 
    nome : "Barbara Ramos" ,
    ruolo : "Graphic Designer" ,
    foto : "barbara-ramos-graphic-designer.jpg" ,
}
]
////// MILESTONE 1
// for(let key in team){
//     console.log("Nome: " + team[key].nome )
//     console.log("Ruolo: " + team[key].ruolo)
// }
///// MILESTONE 2
let btn = document.getElementById("team")
let testo = document.getElementById("testo")
btn.addEventListener("click", function(){
    for (x = 0; x <= team.length -1; x++){
        z = team[x]
        console.log(  z.nome);
        let card = document.createElement("div");
        card.classList.add("card-body" , "rounded-3" , "p-2", "m-2" ,"col-3", "bg-primary")
        testo.append(card)
        card.innerHTML =`<h5 class="card-title">Nome: ${z.nome}</h5> <br> <p class="card-text">Ruolo : ${z.ruolo} </p> <img class="rounded-4 size" src="./img/${z.foto}">`;  
    }
})