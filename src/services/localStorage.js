// la carpeta de services la utilizamos para almacenar los datos que obtenemos de afuera o son de LS
// ej: Hacer peticiones HTTP (fetch), consumir APIs, etc

export const getLocalStorage = (key) => {
  const item = localStorage.getItem(key); // devuelve string directamente
  if (!item) return null;
  try{
    return JSON.parse(item);
  }
  catch{
    return item;
  }
};
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
} 