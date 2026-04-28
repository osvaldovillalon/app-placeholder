import { getData } from '../services/api.js';

export async function todosPage() {
  try {
    const todos = await getData('https://jsonplaceholder.typicode.com/todos?_limit=10');
    let filas = '';
    for (let t of todos) {
      let estadoTexto = '';
      if (t.completed) {
        estadoTexto = 'Completado';
      } else {
        estadoTexto = 'Pendiente';
      }
      filas += `
        <tr>
          <td>${t.id}</td>
          <td>${t.title}</td>
          <td>${estadoTexto}</td>
        </tr>
      `;
    }
    return `
      <h2>Lista de Tareas</h2>
      <table border="1" cellpadding="5" cellspacing="0" style="width:100%; border-collapse: collapse;">
        <thead style="background-color:#ccc;">
          <tr><th>ID</th><th>Título</th><th>Estado</th></tr>
        </thead>
        <tbody>${filas}</tbody>
      </table>
    `;
  } catch (error) {
    return `<p style="color:red;">Error: ${error.message}</p>`;
  }
}