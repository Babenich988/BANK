const men = document.getElementById('men');
const women = document.getElementById('women');

function animateStatues() {
  const scrollY = window.scrollY;

  men.style.transform = `translateX(-${scrollY * 0.1}px)`;
  women.style.transform = `translateX(${scrollY * 0.1}px) translateY(15%)`;

  requestAnimationFrame(animateStatues);
}

animateStatues();
