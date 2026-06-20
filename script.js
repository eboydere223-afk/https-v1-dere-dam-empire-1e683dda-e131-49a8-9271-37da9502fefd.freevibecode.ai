// Simple interactive enhancements
console.log('Dere Dam Website Loaded');

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  if(btn){
    btn.addEventListener('click', () => {
      alert('Welcome to Dere Dam Portfolio 🚀');
    });
  }
});