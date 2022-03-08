import React from "react";
import * as S from "./styled"

const Link = ({href, text}) => {
    return(
        <S.WrapperLink href={href} target="_blank" rel="noreferrer">
              {text}
            </S.WrapperLink>
    );
}

export default Link;