import Header from "./Header/Header"
import styled from "@emotion/styled"
import GreenScrean from "./GreenScrean/GreenScrean"
import UntilDate from './UntilDate/UntilDate'
import UserDate from './UserDate/UserDate'
import Loader from "../Loader/Loader"
import { useEffect, useState } from "react"

const VaccineWrapper = styled.div(
    {
        display: "flex",
        flexDirection: "column",
        width: 349,
        margin: '0 auto',
        marginTop: 56,
        height: 554,

        '@media(max-width: 700px)': {
            transform: 'scale(0.7)',
            marginTop: '0 !important'
          },
    }
)

const CloseButton = styled.a({
    display: 'block',
    border: '2px solid #0d4cd3',
    borderRadius: 8,
    padding: '14px 0',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#0d4cd3',
    marginTop: 40,
    backgroundColor: '#ffffff'

})

let mount = false

const Vaccine = () => {

    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 3000);
        
    })

    return(
        <VaccineWrapper>
        {isLoading ? <Loader/> : 
        <>
            <Header/>
            <GreenScrean/>
            <UntilDate/>
            <UserDate/>
            <CloseButton href={'https://www.gosuslugi.ru/'}>Закрыть</CloseButton>
        </>}
        
        
        
    </VaccineWrapper>
    )
}
    

export default Vaccine