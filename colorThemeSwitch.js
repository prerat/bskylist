let lightMode = localStorage.getItem('lightMode'); 
const lightModeToggle = document.querySelector('.toggle');

const enableLightMode = () => {
  document.body.classList.add('lightmode');
  document.querySelector('.txt').textContent = "Light Mode";
  localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => {
  document.body.classList.remove('lightmode');
  document.querySelector('.txt').textContent = "Dark Mode";
  localStorage.setItem('lightMode', null);
}
 
if (lightMode === 'enabled') {
  enableLightMode();
}

lightModeToggle.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode'); 
  
  if (lightMode !== 'enabled') {
    enableLightMode();
  } else {  
    disableLightMode(); 
  }
});

// adds a class .lightmode to body, so the color variales in it override the color variables inside *
// changes text between Dark Mode - Light Mode