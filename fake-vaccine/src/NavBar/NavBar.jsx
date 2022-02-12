import styled from "@emotion/styled";
import QRCode from "react-qr-code";
import { useSelector, useDispatch } from "react-redux";
import {Link } from "react-router-dom";

let NavBarWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    textAlign: 'center',

})

const NavBar = () =>{
  
    return(
        <NavBarWrapper>
            <Link to='/qr'>qr</Link>
            <Link to='/userform'>userform</Link>
            <Link to='/vaccine'>vaccine</Link>
        </NavBarWrapper>
    )
}

export default NavBar