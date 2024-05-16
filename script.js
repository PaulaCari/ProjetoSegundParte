// Select the buttons
const buttons = document.querySelectorAll('.btn');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Obrigado pelo seu interesse! Em breve entraremos em contato para te direcionar ao chatbot.');
  });
});