// Muestra un valor real o, si falta, una marca visible "pendiente de validación".
const Pendiente = ({ valor, children }) =>
  valor ? <>{valor}</> : <span className="pendiente">{children} (pendiente)</span>;

export default Pendiente;
