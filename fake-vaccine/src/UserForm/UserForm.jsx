import styled from "@emotion/styled";
import {useDispatch,useSelector} from 'react-redux'
import { useState } from 'react';
import {Link } from "react-router-dom";

const UserFormWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    margin: '0 auto',
    alignItems: 'center'
})

const InputWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    height: 50,
    width: 200,
})

const UserForm = () => {
    const dispatch = useDispatch()
    let userDate = useSelector(state => state.userDate)
    const setUserDate = () => {
        const userDate = {
            name: name1,
            lastName: name2,
            surname: name3,
            birthday: date,
            number: number,
            seria: seria
            
        }
        dispatch({type:"SET_USER_DATE", payload: userDate})
        
    }
    const [name1, setName1] = useState('')
    const [name2, setName2] = useState('')
    const [name3, setName3] = useState('')
    const [date, setDate] = useState('')
    const [number, setNumber] = useState('')
    const [seria, setSeria] = useState('')
    
    console.log(name1,name2,name3,date,number,seria)
    console.log(userDate)

    return(
        <UserFormWrapper>
           
            <InputWrapper>
                <span>Фамилия</span>
                <input type="text" onInput={e => setName1(e.target.value)}/>
            </InputWrapper>
            <InputWrapper>
                <span>Имя</span>
                <input type="text" onInput={e => setName2(e.target.value)}/>
            </InputWrapper>
            <InputWrapper>
                <span>Отчество</span>
                <input type="text" onInput={e => setName3(e.target.value)}/>
            </InputWrapper>
            <InputWrapper>
                <span>Дата рождения</span>
                <input type="text" onInput={e => setDate(e.target.value)}/>
            </InputWrapper>
            <InputWrapper>
                <span>Номер</span>
                <input type="text" onInput={e => setNumber(e.target.value)}/>
            </InputWrapper>
            <InputWrapper>
                <span>Серия</span>
                <input type="text" onInput={e => setSeria(e.target.value)}/>
            </InputWrapper>
            <InputWrapper>
                <Link to='/qr'>
                    <button onClick={setUserDate}>Сгенерировать QR</button>
                </Link>
            </InputWrapper>       
        </UserFormWrapper>
)}



export default UserForm