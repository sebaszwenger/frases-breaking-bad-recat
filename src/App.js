import React, { useState, useEffect } from "react";
import Frase from "./components/Frase";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 305px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 1rem 3rem;
  margin-top: 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.5s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  //State de frases
  const [frase, setfrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    setfrase(frase[0]);
  };

  //cargar una frase
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>;
    </Contenedor>
  );
}

export default App;
