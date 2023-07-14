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

// Stampo su console (per ogni membro del team) info di nome, ruolo e stringa foto
for (let key in teamMembers) {
  
  console.log(key); // ottengo l'indice della chiave dell'object
  console.log(teamMembers[key]); // ottengo il valore della chiave dell'object
}