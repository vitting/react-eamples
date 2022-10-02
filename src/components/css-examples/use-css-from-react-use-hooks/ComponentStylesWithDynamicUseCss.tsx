/**
 * https://github.com/streamich/react-use/blob/master/docs/useCss.md
 */

import { useState } from "react";
import { useCss } from "react-use";

function ComponentStylesWithDynamicUseCss() {
  const [colorToUse, setColorToUse] = useState("green");
  const className1 = useCss({
    "background-color": "green",
    color: "black",
  });

  const className2 = useCss({
    "background-color": "blue",
    color: "white",
  });

  const className3 = useCss({
    "background-color": colorToUse,
    color: "white",
  });

  const [classToUse, setClassToUse] = useState(className1);

  return (
    <div>
      <div className={classToUse}>ComponentStylesWithDynamicUseCss</div>
      <button onClick={() => setClassToUse(className2)}>
        Change color to blue
      </button>

      <div className={className3}>ComponentStylesWithDynamicUseCss</div>
      <button onClick={() => setColorToUse("red")}>Change color to red</button>
    </div>
  );
}

export default ComponentStylesWithDynamicUseCss;
