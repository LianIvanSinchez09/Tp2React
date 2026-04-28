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
  );
};
