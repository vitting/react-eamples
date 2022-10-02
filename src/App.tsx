import { useState } from "react";
import "./App.css";
import "./styles/common.css";
import Button from "@mui/material/Button";
import ComponentStyledWithCssModule from "./components/css-examples/css-modules-scoped-css/ComponentStyledWithCssModule";
import ComponentStyledWithCss from "./components/css-examples/plan-css-import/ComponentStyledWithCss";
import ComponentStylesWithDynamicUseCss from "./components/css-examples/use-css-from-react-use-hooks/ComponentStylesWithDynamicUseCss";
import { SimpleBox } from "./components/css-examples/styled-components/SimpleBoxWithStyled.style";
import { ReactBox } from "./components/css-examples/styled-components/ComponentWithStyled.style";
import {
  Grid,
  Grid2,
} from "./components/css-examples/styled-components/GridWithStyledAndProps.style";

function App() {
  const [count, setCount] = useState(0);

  const handleTest = (value: number) => {
    console.log(value);
  };

  return (
    <div>
      <ComponentStyledWithCssModule></ComponentStyledWithCssModule>
      <ComponentStyledWithCss></ComponentStyledWithCss>
      <ComponentStylesWithDynamicUseCss></ComponentStylesWithDynamicUseCss>
      <SimpleBox>I'm a simple div created with styled</SimpleBox>
      <ReactBox></ReactBox>
      <Grid numberOfColumns={5}>
        <div>Col1</div>
        <div>Col2</div>
        <div>Col3</div>
        <div>Col4</div>
        <div>Col5</div>
      </Grid>
      <Grid2 numberOfColumns={3}>
        <div>Col1</div>
        <div>Col2</div>
        <div>Col3</div>
      </Grid2>
    </div>
  );
}

export default App;
