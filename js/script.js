
window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.shop__sticker'),
          popup = document.querySelector('.modal'),
          closeButton = popup.querySelector('.modal__close');
        
    button.addEventListener('click', () => {
      popup.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  
    popup.addEventListener('click', (e) => {
      if (e.target == closeButton) {
        popup.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  
  });