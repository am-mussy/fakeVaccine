import styled from "@emotion/styled";
import QRCode from "react-qr-code";
import { useSelector, useDispatch } from "react-redux";

let QRWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    textAlign: 'center',

})

const QR = () =>{
        
        const qrValue = useSelector(state => state.qr)
        
            console.log(qrValue)
        
        const dispatch = useDispatch()
        const setQrValue = () => {
             dispatch({type:"setQR", payloader:"KRISTINKU-PAUKANA OBAZHAYU"})
            
        }
    return(
        <QRWrapper>
            <QRCode value={qrValue} />
            <button onClick={setQrValue} >X</button>
        </QRWrapper>
    )}


export default QR