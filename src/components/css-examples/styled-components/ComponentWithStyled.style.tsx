/**
 * https://emotion.sh/docs/styled
 */

import styled from "@emotion/styled";
import ComponentStylesWithEmotion from "./ComponentWithStyled";
import "../../../styles/variables.css";
export const ReactBox = styled(ComponentStylesWithEmotion)`
  width: 400px;
  height: 500px;
  background-color: blue;
  color: white;

  &:hover {
    background-color: var(--bgcolor2);
    color: inherit;
  }
`;
