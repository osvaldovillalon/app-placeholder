import { getData } from '../services/api.js';

export async function usuariosPage() {
  try {
    const usuarios = await getData('https://jsonplaceholder.typicode.com/users');
    let filas = '';
    for (let u of usuarios) {
      filas += `
        <tr>
          <td>${u.id}</td>
          <td>${u.name}</td>
          <td>${u.username}</td>
          <td>${u.email}</td>
          <td>${u.address.city}</td>
          <td>${u.company.name}</td>
        </tr>
      `;
    }
    return `
      <h2>Lista de Usuarios</h2>
      <table border="1" cellpadding="5" cellspacing="0" style="width:100%; border-collapse: collapse;">
        <thead style="background-color:#ccc;">
          <tr><th>ID</th><th>Nombre</th><th>Usuario</th><th>Email</th><th>Ciudad</th><th>Compañía</th></tr>
        </thead>
        <tbody>${filas}</tbody>
      </table>
    `;
  } catch (error) {
    return `<p style="color:red;">Error: ${error.message}</p>`;
  }
}