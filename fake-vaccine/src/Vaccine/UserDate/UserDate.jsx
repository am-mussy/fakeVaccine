import styled from "@emotion/styled";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";


const UserDateWrapper = styled.div({
    marginTop: 24
})

const TextWrapper = styled.div({
    margin: '0 auto',
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    color: '#0b1f33',
    textAlign: 'center',
    fontWeight: 500,
    gap: 6,
    fontSize: 16
})

const getUrlUserDate = () => {
    
    const url = window.location.search.substring(1)
    if (url === '') return null

    const urlRaw = url.split('&')
    let userDateObj = {}
    
    urlRaw.map((value, index) => {
        let valueRaw = value.split('=')
        if(valueRaw[1][0].charCodeAt() > 122){
            userDateObj[valueRaw[0]] = encodeURI(valueRaw[1])
        } else {
            userDateObj[valueRaw[0]] = valueRaw[1]
        }
        
        
    })

    return userDateObj
}

const  UserDate = () =>{
    const userDate = useSelector(state => state.userDate)
    const dispatch = useDispatch()
    const userDateFromURL = getUrlUserDate()
    if(!userDate.name){
        dispatch({type:"SET_USER_DATE", payloader: userDateFromURL})
    }
    
    return (
        <UserDateWrapper>
            <TextWrapper>
                <span>{decodeURI(userDate.name)} {decodeURI(userDate.lastName)} {decodeURI(userDate.surname)}</span>
                <span>Дата рождения:{userDate.birthday}</span>
                <span>Паспорт: {userDate.seria} {userDate.number}</span>
            </TextWrapper>
        </UserDateWrapper>
    )
}

export default UserDate