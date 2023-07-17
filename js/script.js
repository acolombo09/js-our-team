"use strict"
/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare 
i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, 
ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
*/

// creo l'array di oggetti con le informazioni fornite
const teamMembers = [
  {
    firstName: "Wayne",
    lastName: "Barnett",
    role: "Founder & CEO",
    profilePic: "wayne-barnett-founder-ceo.jpg",
  },
  {
    firstName: "Angela",
    lastName: "Caroll",
    role: "Chief Editor",
    profilePic: "angela-caroll-chief-editor.jpg",
  },
  {
    firstName: "Walter",
    lastName: "Gordon",
    role: "Office Manage",
    profilePic: "walter-gordon-office-manager.jpg",
  },
  {
    firstName: "Angela",
    lastName: "Lopez",
    role: "Social Media Manager",
    profilePic: "angela-lopez-social-media-manager.jpg",
  },
  {
    firstName: "Scott",
    lastName: "Estrada",
    role: "Developer",
    profilePic: "scott-estrada-developer.jpg",
  },
  {
    firstName: "Barbara",
    lastName: "Ramos",
    role: "Graphic Designer",
    profilePic: "scott-estrada-developer.jpg",
  },
];

let teamInfoContainer = document.querySelector('#team-info');

// Stampo su console (per ogni membro del team) info di nome, ruolo e stringa foto
// PER OGNI membro del team, stampo le info 
// Creo schede per ogni membro del team usando il ciclo for-in
for (let i in teamMembers) {
  let member = teamMembers[i];

  console.log("Name: " + member.firstName + " " + member.lastName);
  console.log("Role: " + member.role);
  console.log("Profile Pic: " + member.profilePic);
  console.log("----------------------------------");

  // Creo una scheda per il membro del team
  let cardHTML =
    '<div class="card">' +
    '<img class="card-img-top" src="img/' +
    member.profilePic +
    '">' +
    '<div class="card-body">' +
    "<h5 class='card-title'>" +
    member.firstName +
    " " +
    member.lastName +
    "</h5>" +
    "<p class='card-text'>" +
    member.role +
    "</p>" +
    "</div>" +
    "</div>";

  // Aggiungo la scheda al contenitore del team sul DOM
  teamInfoContainer.innerHTML += cardHTML;
}
