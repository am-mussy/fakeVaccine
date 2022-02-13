import styled from "@emotion/styled";
import spinner from './cat-unscreen.gif'


const DIV = styled.div({
    minWidth: 1000,
    minHeight: 1000,
    backgroundColor: 'white',
    position: 'absolute'
})

const DIV_MY = styled.div({
    position: 'absolute',
    zIndex: 99,
    left: 400
})



const Loader = () =>{
  
    return(
        <>  
            <DIV_MY>
                <img src={spinner} alt="" srcset="" />
            </DIV_MY>
            <DIV></DIV>
            
        </>
    )
}

export default Loader