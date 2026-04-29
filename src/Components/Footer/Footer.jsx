<<<<<<< HEAD
export const Footer = () => {
  const integrantes = [
    "Lian Ivan Sinchez",
    "Lucas San Segundo",
    "Joaquin Ignacio Castillo"
  ];

  return (
    <footer className="bg-gray-900 text-gray-100 py-6">
      <div className="container mx-auto px-6">
        <h1 className="text-2xl font-bold mb-2">Trabajo práctico 2</h1>
        <h2 className="text-xl font-semibold mb-4">Integrantes:</h2>
        <div className="flex flex-col gap-2">
          {integrantes.map((e) => (
            <p
              key={e}
              className="text-lg bg-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-700 transition"
            >
              {e}
            </p>
          ))}
        </div>
      </div>
    </footer>
=======
export const Footer = ({ integrantes }) => {
  return (
    <div className="container p-10">
      <h1 className="text-xl">Trabajo practico 2</h1>
      <h2 className="text-xl">Integrantes:</h2>
      <div className="flex flex-col">
        {integrantes.map((e) => (
          <h3 className="lg" key={e}>
            {e}
          </h3>
        ))}
      </div>
    </div>
>>>>>>> Rama-de-Naxo
  );
};
