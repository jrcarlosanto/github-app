import React from "react";
import * as S from "./styled";
import Link from "../Link";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>full name:</S.WrapperFullName>
      <Link 
        href={"https://github.com/".concat(linkToRepo)}
        text={fullName}
      />
    </S.Wrapper>
  );
};

export default RepositoryItem;