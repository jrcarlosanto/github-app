import React from "react";
import * as S from "./styled";

const Input = ({type, placeholder, onChange}) => {
  return (
        <S.Wrapper
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
  );
};

export default Input;