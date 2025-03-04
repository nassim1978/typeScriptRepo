import { useLayoutEffect } from "react";
import Modal from "../components/Modal";
function loanForm() {
  const formprops = (p) => {
    const { nombre, apellido, telefono, correo, direccion } = p;
  };
  return (
    <div>
      <h2>HTML Forms</h2>
      <div style={{ paddingLeft: "1%" }}>
        <form
          style={{
            display: "flex",
            borderRadius: "10px",
            flexDirection: "colum",

            maxWidth: "300px",
            paddingTop: "1%",
            paddingBottom: "1%",

            backgroundColor: "#FFA07A",
            borderStyle: "none",
          }}
        >
          <table
            style={{
              position: "center",
            }}
          >
            <dt>
              <lable>NOMBRE:</lable>
              <input
                style={{
                  borderStyle: "none",
                  borderRadius: "10px",
                }}
              ></input>
            </dt>
            <dt>
              <p></p>
            </dt>
            <dt>
              <lable>APELLIDO:</lable>
              <input
                style={{
                  borderStyle: "none",
                  borderRadius: "10px",
                }}
              ></input>
            </dt>
            <dt>
              <p></p>
            </dt>
            <dt>
              <lable>TELEFONO:</lable>
              <input
                style={{
                  borderStyle: "none",
                  borderRadius: "10px",
                }}
              ></input>
            </dt>
            <dt>
              <p></p>
            </dt>
            <dt>
              <lable>CORREO:</lable>
              <input
                style={{
                  borderStyle: "none",
                  borderRadius: "10px",
                }}
              ></input>
            </dt>
            <dt>
              <p></p>
            </dt>
            <dt>
              <lable>DIRECCION:</lable>
              <input
                style={{
                  borderStyle: "none",
                  borderRadius: "10px",
                }}
              ></input>
            </dt>
            <dt>
              <p></p>
            </dt>
            <dt>
              <lable>eres Trabajador?</lable>
              <input
                style={{
                  borderStyle: "none",
                  borderRadius: "10px",
                }}
                type="checkBox"
              ></input>
            </dt>
            <dt>
              <p></p>
            </dt>
            <dt>
              <lable>selecciona uno:</lable>
              <select
                style={{
                  borderStyle: "none",
                  borderRadius: "10px",
                }}
              >
                <option>100-200</option>
                <option>201-300</option>
                <option>301-400</option>
                <option>401-500</option>
              </select>
            </dt>
            <dt>
              <p></p>
            </dt>
            <dt>
              <button
                style={{
                  paddingTop: "2%",
                  paddingBottom: "2%",
                  position: "center",
                  lineHeight: "2",
                  borderStyle: "none",
                  borderRadius: "10px",
                  backgroundColor: "#E9967A",
                  background: "rgb(228, 142, 81)",
                }}
              >
                <b>Guardar</b>
              </button>
            </dt>
          </table>
        </form>
      </div>
    </div>
  );
}
export default loanForm;
