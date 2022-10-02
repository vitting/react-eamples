/**
 * https://emotion.sh/docs/styled
 */

import styled from "@emotion/styled";

export const SimpleBox = styled.div`
  width: 200px;
  height: 300px;
  background-color: green;
  color: white;

  &:hover {
    background-color: red;
  }
`;
