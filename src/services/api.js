export const url = "https://69f018fd112e1b968e252e01.mockapi.io/api/v1/Productos";

export async function getProducts() {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error de HTTP: ${response.status}`);
  }

  return response.json();
}