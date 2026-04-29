// la carpeta de services la utilizamos para almacenar los datos que obtenemos de afuera o son de LS
// ej: Hacer peticiones HTTP (fetch), consumir APIs, etc

export const getLocalStorage = (key) => {
  return localStorage.getItem(key); // devuelve string directamente
};
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
} 