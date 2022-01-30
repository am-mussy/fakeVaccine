import Header from "./Header/Header"
import styled from "@emotion/styled"
import GreenScrean from "./GreenScrean/GreenScrean"
import UntilDate from './UntilDate/UntilDate'
import UserDate from './UserDate/UserDate'

const VaccineWrapper = styled.div(
    {
        display: "flex",
        flexDirection: "column",
        width: 349,
        margin: '0 auto',
        marginTop: 56,
        height: 554
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

const Vaccine = () => 
    <VaccineWrapper>
        <Header/>
        <GreenScrean/>
        <UntilDate/>
        <UserDate/>
        <CloseButton href={'https://www.gosuslugi.ru/'}>Закрыть</CloseButton>
    </VaccineWrapper>

export default Vaccine