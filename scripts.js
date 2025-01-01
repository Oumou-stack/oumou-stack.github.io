  document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars');
  
    if (!starsContainer) {
      console.error('Le conteneur .stars est introuvable');
      return;
    }
  
    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      const size = Math.random() * 10 + 10; // Taille entre 10px et 20px
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
  
      starsContainer.appendChild(star);
  
      setTimeout(() => {
        star.remove();
      }, 10000); // Durée de vie : 10 secondes
    }
  
    // Crée plus d'étoiles en réduisant l'intervalle
    setInterval(createStar, 100); // Une étoile toutes les 100ms
  });

// Afficher ou masquer la flèche selon la position de la page
window.addEventListener('scroll', () => {
  const scrollTopButton = document.getElementById('scrollTop');
  if (window.scrollY > 300) { // Afficher la flèche après 300px
    scrollTopButton.classList.add('show');
  } else {
    scrollTopButton.classList.remove('show');
  }
});

// Faire défiler vers le haut lorsque la flèche est cliquée
document.getElementById('scrollTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Défilement fluide
  });
});
