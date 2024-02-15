/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import "./CajaGrande1.css";
import { Frutas } from "./Frutas";
import { frutas, titulo } from "./util/Const";

export const CajaGrande1 = ({children}) => {
  const frutaHijos = () => frutas.map((fruta) =><Frutas fruta={fruta} />);

  return (
    <section>
      <div className="caja-grande1">
      <h1>Soy un Padre</h1>
      <div>
      {children}
      </div>
        <h2 >Caja Grande 1</h2>
        <h3>{titulo}</h3>
        <ul>{frutaHijos()}</ul>
      </div>
    </section>
  );
};
