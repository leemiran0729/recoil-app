import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "../App";

export const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
      Echo: {text}
    </div>
  );
};
