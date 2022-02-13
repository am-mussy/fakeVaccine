import styled from "@emotion/styled";
import QRCode from "react-qr-code";
import { useSelector, useDispatch } from "react-redux";

const QRWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    textAlign: 'center',
    marginTop: 250,

})

const QRCodeStyled = styled(QRCode)({
    transform: 'scale(2)'
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


const QR = () =>{

    const userDate = useSelector(state => state.userDateUrl)
    

    return(
        <QRWrapper>
            <QRCodeStyled value={urlForQRgenerator(userDate)} />
        </QRWrapper>
    )}


export default QR