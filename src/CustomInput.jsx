import { useState } from "react";

function CustomInput() {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <h3>{value}</h3>
    </>
  );
}

export default CustomInput;
