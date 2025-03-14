const themeChangement = document.getElementById('theme-changement');
// Ajouter un écouteur d'événement pour le clic sur le bouton
themeChangement.addEventListener('click', () => {
    // Basculer la classe 'dark-theme' sur l'élément body
    // Cela permet de changer le thème de la page
    document.body.classList.toggle('dark-theme');
});


// Sélection de l'image dans le document
let img = document.getElementById("image");

// Changer l'image au survol de la souris
img.addEventListener("mouseover", function() {
    img.src = "https://www.shutterstock.com/image-photo/cute-ginger-cat-stylish-sunglasses-600nw-2400244319.jpg"; style="width:50%;max-width:600px;" // Nouvelle image au survol
});

// Remettre l'image initiale quand la souris quitte
img.addEventListener("mouseout", function() {
    img.src = "data:image/jpeg;base64,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";  // Image d'origine
});
function entreePrenom() 
{
    prenom = document.getElementById("name").value;
    document.getElementById("bonjour").innerHTML ="Bienvenue   " + prenom;
    document.getElementById("form_contact").style.display =      "none";
    //On montre les questions
    document.getElementById("quizze").style.display =           "block";

} 

function calculePoints() {
    //Bonnes réponses : de la question 1
    var bonneReponse1 = "q1r2";
    //Initialesation des variables des texte
    var bonneReponse2=   "q2r2"
    var bonneReponse3=   "q3r1"
    var bonneReponse4=   "q4r2"
    var bonneReponse5=   "q5r3"
    var texte1, texte2, texte3;
    // Initialesation des points
    points = 0;
    //vérifie si la bonne réponce est cochée
    if (document.getElementById(bonneReponse1).checked == true) {
      //Message pour une mauvaise réponse
      texte1 = "<p class='bien'>Bonne réponse à la question 1</p>";
      //Retire des points pour une mauvaise réponse
      points = points + 4;
    } else {
      texte1 = "<p class='bad'>Mauvaise réponse à la question 1</p>";
      points = points - 2;
    }
    if (document.getElementById(bonneReponse2).checked == true) {
      //Message pour une mauvaise réponse
      texte2 = "<p class='bien'>Bonne réponse à la question 2</p>";
      //Retire des points pour une mauvaise réponse
      points = points + 4;
    } else {
      texte2 = "<p class='bad'>Mauvaise réponse à la question 2</p>";
      points = points - 2;
    }
    if (document.getElementById(bonneReponse3).checked == true) {
      //Message pour une mauvaise réponse
      texte3 = "<p class='bien'>Bonne réponse à la question 3</p>";
      //Retire des points pour une mauvaise réponse
      points = points + 4;
    } else {
      texte3 = "<p class='bad'>Mauvaise réponse à la question 3</p>";
      points = points - 2;
    }
    if (document.getElementById(bonneReponse4).checked == true) {
      //Message pour une mauvaise réponse
      texte4 = "<p class='bien'>Bonne réponse à la question 4</p>";
      //Retire des points pour une mauvaise réponse
      points = points + 4;
    } else {
      texte4 = "<p class='bad'>Mauvaise réponse à la question 4</p>";
      points = points - 2;
    }
    if (document.getElementById(bonneReponse5).checked == true) {
      //Message pour une mauvaise réponse
      texte5 = "<p class='bien'>Bonne réponse à la question 5</p>";
      //Retire des points pour une mauvaise réponse
      points = points + 4;
    } else {
      texte5 = "<p class='bad'>Mauvaise réponse à la question 5</p>";
      points = points - 2;
    }
    //Construction du texte final avec le total des points
    textePoints = "<h2>Total: " + points + " points</h1>";
    //Affiche le texte final dans l'élément avec l'identifiant'correcction'
    document.getElementById("correction").innerHTML = texte1 + texte2 + texte3 + texte4 + texte5 +  textePoints;
    if(points >= 15){
        document.getElementById("appreciation").innerHTML = "Exellent!!";

    } else{
        document.getElementById("appreciation").innerHTML = "peux mieux faire";
    }
}
// trouver sur github Barre de progression de lecture 
window.addEventListener('scroll', () => {
  const progressBar = document.getElementById('progression-barre');
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progressHeight = (window.scrollY / totalHeight) * 100;
  progressBar.style.width = progressHeight + '%';
});