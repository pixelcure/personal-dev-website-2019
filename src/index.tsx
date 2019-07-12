import * as React from "react";
import { render } from "react-dom";
import styled from 'styled-components'

import "./styles.css";

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid red;
`

function App() {
  return (
    <Button href='#'>Testing</Button>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
