export const url = "https://69f018fd112e1b968e252e01.mockapi.io/api/v1/Productos";

export async function getProducts(id) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error de HTTP: ${response.status}`);
  }

  const data = await response.json(); 

  if (id) {
    return data.filter((item) => item.id === id);
  }

  return data;
}