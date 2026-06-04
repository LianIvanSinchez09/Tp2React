export const url = "http://localhost:3000/api/productos";


export async function getProducts(searchQuery = "", page = 1, limit) {
  
  const fetchUrl = new URL(url);

  fetchUrl.searchParams.append("page", page);
  fetchUrl.searchParams.append("limit", limit);

  // Si hay una búsqueda, le agregamos el filtro de MockAPI a la URL
  //la searchQuery va a ser por el nombre del producto
  if (searchQuery) {
    fetchUrl.searchParams.append("name", searchQuery); 
  }

  //aca se une todo automáticamente (ej: https://.../Productos?page=1&limit=6&name=muñeca)
  const response = await fetch(fetchUrl.toString(), {
    method: 'GET',
    headers: {'content-type':'application/json'}
  });

  // Si MockAPI no encuentra coincidencias o se pasa de página, devuelve string vacio
  if (response.status === 404) {
    return [];
  }

  if (!response.ok) {
    throw new Error(`Error de HTTP: ${response.status}`);
  }

  return response.json();
}

export async function getDetails(id) {
  const fetchUrl = id ? `${url}/${id}` : url;

  const response = await fetch(fetchUrl);

  if (!response.ok) {
    throw new Error(`Error de HTTP: ${response.status}`);
  }

  const data = await response.json(); 

  return data;
}
