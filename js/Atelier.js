'use strict';

var sectionContact = window.document.getElementById('section_contact');
var conteneurJeu = window.document.getElementById('conteneur_jeu');
var sectionCV = window.document.getElementById('section_cv');
var sectionJeu = window.document.getElementById('section_jeu');
var imageCv = window.document.getElementById('img');
var jouer = window.document.getElementById('Jouer');
var youWin = window.document.querySelector('.Winning')
var youLose = window.document.querySelector('.Losing')

// tableau de position des voitures
var allCar = []
var collision = function(){
    allCar = [voiture.style,voiture2.style,voiture3.style,voiture4.style,voiture5.style,voiture6.style]
    
    allCar.forEach( (item) => {
        let posChienLeft = parseFloat(chien.style.left);
        // le chien bouge par rapport au bottom.
        let posChienBottom = parseFloat(chien.style.bottom);
        let itemLeft = parseFloat(item.left);
        let itemBottom = parseFloat(item.bottom)
        if(itemBottom == posChienBottom &&
            posChienLeft < itemLeft + 100 &&
            posChienLeft +50 > itemLeft){
        console.log('collision ok');
        // S'il y a collision, on arrete le SetInterval et on affiche la div Losing 
        window.clearInterval(idSetInterval);
        youLose.innerHTML = '<span style="opacity: 1">VOUS AVEZ PERDU !</span><br><a href= "#" id= "reessayer" style="opacity: 1">Reessayer</a>';
        youLose.style.display = 'flex';
        sectionJeu.append(youLose);
     }
    });
    
}

/*************** Gestion des pages ***********************************************/

meContacter.onclick = function(){
    conteneurJeu.style.display = 'none';
    sectionCV.style.display = 'none';
    sectionContact.style.display = 'block';
}

monCV.onclick = function(){
    conteneurJeu.style.display = 'none';
    sectionCV.style.display = 'flex';
    sectionContact.style.display = 'none';
}

reessayer.onclick = function() {
    location.reload();
}

recommencer.onclick = function() {
    location.reload();
}

var pdf = document.createElement('p');

    imageCv.onmouseover = function () {
    imageCv.style.opacity = '0.2';
    pdf.innerText ='Ouvrir le PDF';
    pdf.style.border = '1px solid #B80F0A';
    pdf.style['border-radius'] = '55px';
    pdf.style.color= '#B80F0A';
    pdf.style['text-decoration'] = 'none';
    pdf.style.display= 'flex';
    pdf.style.position = 'absolute';
    pdf.style['justify-content'] = 'center';
    pdf.style['flex-direction'] = 'column';
    pdf.style['text-align'] = 'center';
    pdf.style.width = '110px';
    pdf.style.height = '110px';
    pdf.style.margin = 'auto';
    pdf.style.top = '74%';
    pdf.style.letterSpacing = '1px';
    sectionCV.append(pdf);
}

imageCv.onmouseleave = function () {
    imageCv.style.opacity = '1';
    sectionCV.removeChild(pdf);
}

imageCv.onclick = function(){
    open('img/CV.pdf')
}

/********************************************************************* Affectation du chien au DOM ***************************************************/

const chien = document.querySelector('.chien');
var bottom = 0;
var left = 0;
chien.style.left = '0px';

function enHaut() {
    
    if (bottom < sectionJeu.offsetHeight - 52){
        bottom = bottom + 50
        chien.style.bottom = bottom + 'px'

        if(bottom >= 350){
            // Si le chien arrive sur le trottoir opposé au départ, on arrete le SetInterval et on affiche la div Winning
            setTimeout(function(){
                window.clearInterval(idSetInterval);
                youWin.style.display = 'flex';
                youWin.innerHTML = '<span style="opacity: 1"> VOUS AVEZ GAGNÉ !</span><br><a target= "_blank" href="img/CV.pdf" style="opacity: 1">Mon CV</a>';
                sectionJeu.append(youWin);

            }, 500)
        }
    }
};

function enBas() {
    if (bottom > 0){
        bottom = bottom - 50
        chien.style.bottom = bottom + 'px'
    }
    
};

function aGauche() {
    if (left > 0) {
        left = left - 25
        chien.style.left = left + 'px'
    }   
};

function aDroite () {
    if (left < sectionJeu.offsetWidth - 80){
        left = left + 25
        chien.style.left = left + 'px'
    } 
};

// Assignation aux touches clavier

function deplaceChien(e){
    console.log(e.key);
    if (e.key == 'ArrowUp'){
        enHaut();
    }
    if (e.key == 'ArrowDown'){
        enBas();
        
    }
    if (e.key == 'ArrowLeft'){
        aGauche();
        
    }
    if (e.key == 'ArrowRight'){
        aDroite();
        
    }
};

document.addEventListener('keydown', deplaceChien);

// /************************************************* Creation des voitures ***************************************************/

var voiture = window.document.createElement('div');
var voiture2 = window.document.createElement('div');
var voiture3 = window.document.createElement('div');
var voiture4 = window.document.createElement('div');
var voiture5 = window.document.createElement('div');
var voiture6 = window.document.createElement('div');


voiture.style.backgroundColor = '#304A6E';
voiture.style.border = '1px solid black';
voiture.style.height = '50px';
voiture.style.width = '100px';
voiture.style.position = 'absolute';
voiture.style.bottom = '300px'; // reaffectation du style des voitures par bottom plutot que top.
voiture.style.boxSizing = 'border-box';
voiture.style.left = '0px';

voiture2.style.backgroundColor = '#304A6E';
voiture2.style.border = '1px solid black';
voiture2.style.height = '50px';
voiture2.style.width = '100px';
voiture2.style.position = 'absolute';
voiture2.style.bottom = '250px';
voiture2.style.boxSizing = 'border-box';
voiture2.style.left = '0px';

voiture3.style.backgroundColor = '#304A6E';
voiture3.style.border = '1px solid black';
voiture3.style.height = '50px';
voiture3.style.width = '100px';
voiture3.style.position = 'absolute';
voiture3.style.bottom = '200px';
voiture3.style.boxSizing = 'border-box';
voiture3.style.left = '0px';

voiture4.style.backgroundColor = '#304A6E';
voiture4.style.border = '1px solid black';
voiture4.style.height = '50px';
voiture4.style.width = '100px';
voiture4.style.position = 'absolute';
voiture4.style.bottom = '150px';
voiture4.style.boxSizing = 'border-box';
voiture4.style.left = '0px';

voiture5.style.backgroundColor = '#304A6E';
voiture5.style.border = '1px solid black';
voiture5.style.height = '50px';
voiture5.style.width = '100px';
voiture5.style.position = 'absolute';
voiture5.style.bottom = '100px';
voiture5.style.boxSizing = 'border-box';
voiture5.style.left = '0px';

voiture6.style.backgroundColor = '#304A6E';
voiture6.style.border = '1px solid black';
voiture6.style.height = '50px';
voiture6.style.width = '100px';
voiture6.style.position = 'absolute';
voiture6.style.bottom = '50px';
voiture6.style.boxSizing = 'border-box';
voiture6.style.left = '0px';

sectionJeu.append(voiture,voiture2,voiture3,voiture4,voiture5,voiture6);
var versLaDroite = true;
var versLaDroite2 = true;
var versLaDroite3 = true;
var versLaDroite4 = true;
var versLaDroite5 = true;
var versLaDroite6 = true;
var idSetInterval;
var animationDemarre = false;

// Animation des voitures

jouer.addEventListener('click', function (evt){
    if(!animationDemarre){
        console.log('Démarrage du setInterval !');
        idSetInterval = window.setInterval(function() {
       
        var mouvementADroite = parseFloat(voiture.style.left);
        var mouvementADroite2 = parseFloat(voiture2.style.left);
        var mouvementADroite3 = parseFloat(voiture3.style.left);
        var mouvementADroite4 = parseFloat(voiture4.style.left);
        var mouvementADroite5 = parseFloat(voiture5.style.left);
        var mouvementADroite6 = parseFloat(voiture6.style.left);
        
        if (versLaDroite) {
            mouvementADroite = mouvementADroite + 10;
        } else {
            mouvementADroite = mouvementADroite - 10;
        }

        if (versLaDroite2) {
            mouvementADroite2 = mouvementADroite2 + 8;
        } else {
            mouvementADroite2 = mouvementADroite2 - 8;
        }

        if (versLaDroite3) {
            mouvementADroite3 = mouvementADroite3 + 1;
        } else {
            mouvementADroite3 = mouvementADroite3 - 1;
        }

        if (versLaDroite4) {
            mouvementADroite4 = mouvementADroite4 + 5;
        } else {
            mouvementADroite4 = mouvementADroite4 - 5;
        }

        if (versLaDroite5) {
            mouvementADroite5 = mouvementADroite5 + 12;
        } else {
            mouvementADroite5 = mouvementADroite5 - 12;
        }

        if (versLaDroite6) {
            mouvementADroite6 = mouvementADroite6 + 3;
        } else {
            mouvementADroite6 = mouvementADroite6 - 3;
        }


        if (mouvementADroite <= 0) {
            versLaDroite = true;
        } else {
            if (mouvementADroite >= sectionJeu.offsetWidth - 110) {
                versLaDroite = false;
            }
        }

        if (mouvementADroite2 <= 0) {
            versLaDroite2 = true;
        } else {
            if (mouvementADroite2 >= sectionJeu.offsetWidth - 110) {
                versLaDroite2 = false;
            }
        }

        if (mouvementADroite3 <= 0) {
            versLaDroite3 = true;
        } else {
            if (mouvementADroite3 >= sectionJeu.offsetWidth - 110) {
                versLaDroite3 = false;
            }
        }

        if (mouvementADroite4 <= 0) {
            versLaDroite4 = true;
        } else {
            if (mouvementADroite4 >= sectionJeu.offsetWidth - 110) {
                versLaDroite4 = false;
            }
        }

        if (mouvementADroite5 <= 0) {
            versLaDroite5 = true;
        } else {
            if (mouvementADroite5 >= sectionJeu.offsetWidth - 110) {
                versLaDroite5 = false;
            }
        }

        if (mouvementADroite6 <= 0) {
            versLaDroite6 = true;
        } else {
            if (mouvementADroite6 >= sectionJeu.offsetWidth - 110) {
                versLaDroite6 = false;
            }
        }

        voiture.style.left = mouvementADroite + 'px';
        voiture2.style.left = mouvementADroite2 + 'px';
        voiture3.style.left = mouvementADroite3 + 'px';
        voiture4.style.left = mouvementADroite4 + 'px';
        voiture5.style.left = mouvementADroite5 + 'px';
        voiture6.style.left = mouvementADroite6 + 'px';
        // On check si une collision a lieu dès que les voitures avancent
        collision();

    }, 35);

    animationDemarre = true;
    } 

});

