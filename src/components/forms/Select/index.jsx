import { forwardRef } from "react";

export default forwardRef(({ label, id, children, ...rest}, ref) => {
  return (
    <div className="selectContainer">
      <label className="headline label" htmlFor={id}>{label}</label>
      <select ref={ref} {...rest}>
        {children}
      </select>
    </div>
  );
});
