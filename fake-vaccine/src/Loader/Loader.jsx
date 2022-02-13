import styled from "@emotion/styled";
import spinner from './cat-unscreen.gif'

const Wrapper = styled.div({
    margin: '0 auto',
})

const Loader = () =>{
  
    return(
        <>  
            <Wrapper>
                <img src={spinner} alt="" srcset="" />
            </Wrapper>
           
            
        </>
    )
}

export default Loader