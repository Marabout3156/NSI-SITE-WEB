// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner le bouton de changement de thème par son ID
    const themeToggle = document.getElementById('theme-toggle');
    
    // Ajouter un écouteur d'événement pour le clic sur le bouton
    themeToggle.addEventListener('click', () => {
        // Basculer la classe 'dark-theme' sur l'élément body
        // Cela permet de changer le thème de la page
        document.body.classList.toggle('dark-theme');
    });
});

