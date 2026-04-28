import { getData } from '../services/api.js';

export async function postsPage() {
  try {
    const posts = await getData('https://jsonplaceholder.typicode.com/posts?_limit=10');
    let filas = '';
    for (let p of posts) {
      filas += `
        <tr>
          <td>${p.id}</td>
          <td><strong>${p.title}</strong></td>
          <td>${p.body.substring(0, 100)}...</td>
        </tr>
      `;
    }
    return `
      <h2>Lista de Posts</h2>
      <table border="1" cellpadding="5" cellspacing="0" style="width:100%; border-collapse: collapse;">
        <thead style="background-color:#ccc;">
          <tr><th>ID</th><th>Título</th><th>Cuerpo</th></tr>
        </thead>
        <tbody>${filas}</tbody>
      </table>
    `;
  } catch (error) {
    return `<p style="color:red;">Error: ${error.message}</p>`;
  }
}