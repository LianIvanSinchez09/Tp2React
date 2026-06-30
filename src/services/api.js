const BASE_URL = "http://localhost:3000";

// const BASE_URL = "https://tp4-react.vercel.app";
export const url = `${BASE_URL}/api/productos`;
export const urlLogin = `${BASE_URL}/api/auth/login`;
export const urlRegister = `${BASE_URL}/api/auth/register`;
export const urlFavorite = `${BASE_URL}/api/favoritos`;

export async function getIdUser(accessToken) {
  const urlId = `${BASE_URL}/api/auth/me`;
  const response = await fetch(urlId, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error("Error en la petición");
  }
  const data = await response.json();
  return data.id;
}

export async function getFavoriteTodos(accessToken) {
  const idUsuario = await getIdUser(accessToken)
  const urlfavorite = `${BASE_URL}/api/favoritos`;
    const response = await fetch(urlfavorite, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error("Error en la petición");
  }
  const data = await response.json();
  return data ?? null;
}

export async function registerUser(email, password) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const fetchUrl = new URL(urlRegister);
  const response = await fetch(fetchUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  
  if (!emailRegex.test(email)) {
    throw new Error("El formato del email no es válido");
  }
  if (response.status === 400) {
    throw new Error("El email ya está registrado");
  }

  if (!response.ok) {
    throw new Error("Error en la petición");
  }

  const data = await response.json();
  // { id, email }
  console.log(data);

  return data;
}

//ACAAAA
export async function getFavoriteId(accessToken, idProducto) {
  const urlfavorite = `${BASE_URL}/api/favoritos/checker/${idProducto}`;
  const response = await fetch(urlfavorite, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  
  if (!response.ok) {
    throw new Error("Error en la petición");
  }
  const data = await response.json();
  return data.id ?? -1;
}

export async function logout(accessToken) {
  const urlId = `${BASE_URL}/api/auth/logout`;
  const response = await fetch(urlId, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error("Error en la petición");
  }
  const data = await response.json();
  return data.message;
}


export async function setFavorite(accessToken, idProducto) {
  const idUsuario = await getIdUser(accessToken)
  const fetchUrl = new URL(urlFavorite);
  const response = await fetch(fetchUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
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
  return data.accessToken ?? -1;
}

export async function getProducts(searchQuery = "", page = 1, limit) {
  const fetchUrl = new URL(url);

  fetchUrl.searchParams.append("page", page);
  fetchUrl.searchParams.append("limit", limit);

  // Si hay una búsqueda, le agregamos el filtro de MockAPI a la URL
  // la searchQuery va a ser por el nombre del producto
  if (searchQuery) {
    fetchUrl.searchParams.append("name", searchQuery);
  }

  // aca se une todo automáticamente (ej: https://.../Productos?page=1&limit=6&name=muñeca)
  const response = await fetch(fetchUrl.toString(), {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  // Si no encuentra coincidencias o se pasa de página, devuelve array vacio
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