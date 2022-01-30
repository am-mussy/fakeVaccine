import styled from "@emotion/styled";
import GreenScreanSVG from './GreenScreanSVG'
import img from './img.svg'
const GreenScreanWrapper = styled.div({

})

const GreenSVG = styled.div({
    width: 349,
    height: 171,
    borderRadius: 17,
    backgroundColor: "green",
    backgroundImage: `url(${img})`,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    marginTop: 27,
})

const TextWrapper = styled.div({
    margin: '0 auto',
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 700,
    gap: 21,
    fontSize: 20
})

const SpanWrapper = styled.div({
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: 16,
    padding: '6px 32px',
    fontWeight: 600,
    fontSize: 14,
})

const GreenScrean = () => 
<GreenScreanWrapper>
    <GreenSVG>
        <TextWrapper>
            <div>Сертификат COVID-19</div>
            <SpanWrapper>Действителен</SpanWrapper>
            <div>№ 1000 2872 6912 2077</div>
        </TextWrapper>   
    </GreenSVG>
</GreenScreanWrapper>

export default GreenScrean