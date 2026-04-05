const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    status.textContent = 'Por favor completa todos los campos.';
    status.style.color = '#fca5a5';
    return;
  }

  status.textContent = 'Gracias, tu mensaje ha sido enviado. Nos pondremos en contacto pronto.';
  status.style.color = '#86efac';
  form.reset();
});
