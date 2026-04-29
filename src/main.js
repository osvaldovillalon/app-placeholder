import { homePage } from './pages/home.js';
import { postsPage } from './pages/posts.js';
import { todosPage } from './pages/todos.js';
import { usuariosPage } from './pages/usuarios.js';
import { aboutPage } from './pages/about.js';

const app = document.querySelector('#app');

async function loadPage(pageName) {
  console.log("Cargando:", pageName);
  app.innerHTML = '<div>Cargando...</div>';

  try {
    let contenido = "";
    if (pageName === "home") {
      contenido = homePage();
    } else if (pageName === "posts") {
      contenido = await postsPage();
    } else if (pageName === "todos") {
      contenido = await todosPage();
    } else if (pageName === "usuarios") {
      contenido = await usuariosPage();
    } else if (pageName === "about") {
      contenido = aboutPage();
    } else {
      contenido = homePage();
    }
    app.innerHTML = contenido;
  } catch (error) {
    console.error(error);
    app.innerHTML = `<div>Error: ${error.message}</div>`;
  }
}

const enlaces = document.querySelectorAll('nav a');
for (let i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener('click', (e) => {
    e.preventDefault();
    const pagina = enlaces[i].getAttribute('data-page');
    loadPage(pagina);
  });
}

loadPage('home');