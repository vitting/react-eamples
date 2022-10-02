/**
 * https://github.com/css-modules/css-modules
 */

import styles from "./ComponentStyledWithCssModule.module.css";
import common from "../../../styles/common.module.css";

function ComponentStyledWithCssModule() {
  return (
    <>
      <div className={styles.outlineDiv}>
        ComponentA using css modules for local scoped css
      </div>
      <div className={`${styles.outlineDiv} ${common.padding_left_10}`}>
        ComponentA Using more css modules styles
      </div>
    </>
  );
}

export default ComponentStyledWithCssModule;
