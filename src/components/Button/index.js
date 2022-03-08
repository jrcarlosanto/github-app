import React from "react";
import * as S from "./styled";

const Button = ({type, onClick, text}) => {

  return (
      <S.Wrapper type={type} onClick={onClick}>
        <span>{text}</span>
      </S.Wrapper>
  );
};

export default Button;