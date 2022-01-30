import styled from '@emotion/styled'
import gossvg from './gosuslugi.svg'
import rus from './rus.ico'

const HeaderWrapper = styled.div(
    {
        width: 349,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 113,
        
    }
)

const ImgWrapper = styled.img({
    height: 20,
    width: 20,
})

const LanguageWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    gap: 9

})

const Header = () => 
    <HeaderWrapper>
        <div>
            <a href="https://www.gosuslugi.ru/"><img src={gossvg} alt="" /></a>
        </div>
        <LanguageWrapper>
            <ImgWrapper src={rus} alt="" />
            <span>RUS</span>
        </LanguageWrapper>
    </HeaderWrapper>

export default Header