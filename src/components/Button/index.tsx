import {ButtonStyled} from "./style";
import {ReactNode} from "react";

interface Button {
    deleted?: boolean,
    children: ReactNode,
    onClick: () => void
}

const Button = ({deleted ,children, onClick}:Button) => {
    return (
        <ButtonStyled isDeleted={deleted} onClick={onClick}>
            {children}
        </ButtonStyled>
    )
}

export default Button