import { forwardRef } from "react";

export default forwardRef(({ error, label, id, ...rest}, ref) => {
  return (
    <div className="inputContainer">
      <label className="headline label" htmlFor={id}>{label}</label>
      <input ref={ref} {...rest}/>
      <span className="error">{error ? <p>{error.message}</p> : null}</span>
    </div>
  );
});
