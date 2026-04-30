export const url = "https://69f018fd112e1b968e252e01.mockapi.io/api/v1/Productos";

export async function getProducts(searchQuery = "") {
  let fetchUrl = url;

   // Si hay una búsqueda, le agregamos el filtro de MockAPI a la URL
  if (searchQuery) {
    fetchUrl = `${url}?name=${searchQuery}`; 
  }

  const response = await fetch(fetchUrl);

  // Si MockAPI no encuentra coincidencias, devuelve 404. En ese caso devuelve un array vacío
  if (response.status === 404 && searchQuery) {
    return [];
  }

  if (!response.ok) {
    throw new Error(`Error de HTTP: ${response.status}`);
  }

  return response.json();
}