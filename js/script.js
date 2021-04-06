// GOAL: stampare a schermo il contenuto
// di una variabile dentro un h1
//
// BONUS: utilizzare un data come nome
// del file immagine in un tag img


function init(){

  new Vue({

    el: '#app',
    data: {
      'msg': 'Questo testo è scritto con Vue JS..',
      'img': "img/pergamena.jpg",
      'scrivi': '',
    },
    // quello che ho fatto sopra con 'scrivi:' si può fare anche
    // con una funzione, per ativare funzioni si usa methods:
    methods: {
      scriviConFunzione: function(){
        return this.scrivi;
      }
    }
  });
}

$(document).ready(init);
