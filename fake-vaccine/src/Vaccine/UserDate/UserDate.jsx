import styled from "@emotion/styled";

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

const  UserDate = () =>
 <UserDateWrapper>
    <TextWrapper>
        <span>О****** К******* П*******</span>
        <span>Дата рождения: 07.11.1987</span>
        <span>Паспорт: 42** ***724</span>
    </TextWrapper>
 </UserDateWrapper>

export default UserDate