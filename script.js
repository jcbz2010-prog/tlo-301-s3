const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const projectsGrid = document.getElementById('projectsGrid');

const projects = [
  {
    title: 'Lanzamiento e-commerce',
    summary: 'Tienda online optimizada para convertir tráfico en ventas.',
    details: 'Incluye catálogo de productos, pasarela de pago y versión móvil perfectamente adaptada. Incrementamos la velocidad de carga en 45%.',
  },
  {
    title: 'Rediseño de marca',
    summary: 'Nueva identidad visual para una startup de tecnología.',
    details: 'Se entregaron logotipos, paleta cromática y guías de uso que refuerzan la confianza y posicionan la marca en un mercado competitivo.',
  },
  {
    title: 'Campaña de marketing digital',
    summary: 'Estrategia de contenido y anuncios para captar leads cualificados.',
    details: 'La campaña combinó anuncios en redes, email marketing y landing pages con una tasa de conversión superior al 18%.',
  },
];

function renderProjects() {
  if (!projectsGrid) return;

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'card';

    const title = document.createElement('h3');
    title.textContent = project.title;

    const summary = document.createElement('p');
    summary.textContent = project.summary;

    const details = document.createElement('p');
    details.className = 'project-detail';
    details.textContent = project.details;

    const toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.className = 'button secondary project-toggle';
    toggleButton.textContent = 'Ver más';

    toggleButton.addEventListener('click', () => {
      const isOpen = details.classList.toggle('active');
      toggleButton.textContent = isOpen ? 'Ver menos' : 'Ver más';
    });

    card.append(title, summary, details, toggleButton);
    projectsGrid.appendChild(card);
  });
}

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

renderProjects();
