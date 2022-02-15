import styled from "@emotion/styled";
import QRCode from "react-qr-code";
import React, { useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    exportComponentAsJPEG,
    exportComponentAsPDF,
    exportComponentAsPNG
  } from "react-component-export-image";

const QRWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    textAlign: 'center',
    marginTop: 100
})

const QRCodeStyled = styled(QRCode)({
    
    '@media(max-width: 400px)': {
        transform: 'scale(0.5)',
        marginTop: '0 !important'
      },
})

const urlForQRgenerator = (userDate) => {
    let url = `${window.location.origin}/vaccine?`
    let key
    for(key in userDate){
        url+=key
        url+='='
        url+=userDate[key]
        url+='&'
    }
    url = url.slice(0,-1)

    return url
}

const QRcodePrint = React.forwardRef(({value}, ref) => (
    <div ref={ref}>
        <QRCodeStyled value={value} />
    </div> 
));

const QR = () =>{
    const componentRef = useRef();
    const userDate = useSelector(state => state.userDateUrl)
    
    return(
        <QRWrapper>
            <QRcodePrint ref={componentRef} value={urlForQRgenerator(userDate)}/>
            <button onClick={() => exportComponentAsPNG(componentRef)}>
            SAVE 
            </button>
        </QRWrapper>
    )
}


export default QR


