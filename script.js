let men = document.getElementById('men');
let women = document.getElementById('women');

window.addEventListener('scroll', () =>{
  let value = window.scrollY;
  
  men.style.left= value * -0.85 + 'px';
  women.style.left= value * 1.30 + 'px';
})
