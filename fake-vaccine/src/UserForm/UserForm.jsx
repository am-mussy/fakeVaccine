import styled from "@emotion/styled";

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

const UserForm = () => 
<UserFormWrapper>
    
        <InputWrapper>
            <span>Фамилия</span>
            <input type="text" />
        </InputWrapper>
        <InputWrapper>
            <span>Имя</span>
            <input type="text" />
        </InputWrapper>
        <InputWrapper>
            <span>Отчество</span>
            <input type="text" />
        </InputWrapper>
        <InputWrapper>
            <span>Дата рождения</span>
            <input type="text" />
        </InputWrapper>
        <InputWrapper>
            <span>Номер</span>
            <input type="text" />
        </InputWrapper>
        <InputWrapper>
            <span>Серия</span>
            <input type="text" />
        </InputWrapper>
        <InputWrapper>
            <button>Сгенерировать QR</button>
        </InputWrapper>
        
</UserFormWrapper>

export default UserForm