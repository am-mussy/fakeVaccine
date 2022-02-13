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

const userSimblToStar = (str, param) => {

    
    if(str){
        let newStr = ''
    switch (param) {
        case 's':
            
            newStr = str[0] + str[1];

            for(let i = 2; i <= str.length; i++)
            {   
                
                newStr += '*'
               
            }
        
            return newStr

        case 'n':
            newStr = '***';

            for(let i = 3; i < str.length; i++)
            {
                newStr += str[i]
            }
        
            return newStr
            
    
        default:
            newStr = str[0];

            for(let i = 0; i < str.length; i++)
            {
                newStr += '*'
            }
        
            return newStr
            
    }
    }
    

   
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
                <span>{userSimblToStar(decodeURI(userDate.name))} {userSimblToStar(decodeURI(userDate.lastName))} {userSimblToStar(decodeURI(userDate.surname))}</span>
                <span>Дата рождения:{userDate.birthday}</span>
                <span>Паспорт: {userSimblToStar(userDate.seria, 's')} {userSimblToStar(userDate.number, 'n')}</span>
            </TextWrapper>
        </UserDateWrapper>
    )
}

export default UserDate

// 