//mock vieja: https://69f018fd112e1b968e252e01.mockapi.io/api/v1/Productos
export const url = "http://localhost:3000/api/productos";
export const urlLogin = "http://localhost:3000/api/auth/login";
export const urlFavorite = `http://localhost:3000/api/favoritos`;

export async function getFavoriteId(idUsuario, idProducto) {
  const urlfavorite = `http://localhost:3000/api/favoritos/checker/${idUsuario}/${idProducto}`;
  const response = await fetch(urlfavorite);
  if (!response.ok) {
    throw new Error("Error en la petición");
  }
  const data = await response.json();
  return data.id ?? -1;
}
export async function setFavorite(idUsuario, idProducto) {
  const fetchUrl = new URL(urlFavorite);
  const response = await fetch(fetchUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: idUsuario, productId: idProducto }),
  });
  if (!response.ok) {
    throw new Error("Error en la petición");
  }
  const data = await response.json();
  return data;
}
export async function deleteFavorite(idUsuario, idProducto) {
  const fetchUrl = new URL(urlFavorite);
  const response = await fetch(fetchUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: idUsuario, productId: idProducto }),
  });
  if (!response.ok) {
    throw new Error("Error en la petición");
  }
  const data = await response.json();
  return data;
}
export async function verificarLogin(email, password) {
  const fetchUrl = new URL(urlLogin);
  const response = await fetch(fetchUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error("Error en la petición");
  }

  const data = await response.json();
  return data.id ?? -1;
}
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
    method: "GET",
    headers: { "content-type": "application/json" },
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
