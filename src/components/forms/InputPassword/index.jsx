import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styles from "./style.module.scss";

export default forwardRef(({ error, label, ...rest }, ref) => {
  const [isHidden, setHidden] = useState(true);

  return (
    <div className="inputContainer">
      <label className="headline label" htmlFor="password">{label}</label>

      <div className={styles.inputContainer}>
        <input
          className={styles.inputPassword}
          type={isHidden ? "password" : "text"}
          ref={ref}
          {...rest}
        />

        <button type="button" onClick={() => setHidden(!isHidden)}> {isHidden ?
          <MdVisibility className={styles.iconHidden} size={20} /> :
          <MdVisibilityOff className={styles.iconHidden} size={20} />}
        </button>
      </div>

      <span className="error">{error ? <p>{error.message}</p> : null}</span>
    </div>
  );
});
