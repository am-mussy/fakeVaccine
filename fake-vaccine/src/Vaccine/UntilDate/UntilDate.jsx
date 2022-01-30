import styled from "@emotion/styled";
import date from './date.svg'
const UntilDateWrapper = styled.div({
    display: 'flex',
    flexDirection: 'row',
    gap: 14,
    justifyContent: 'center',
    margin: '0 auto',
    width: 300,
    marginTop: 17,
    paddingBottom: 18,
    borderBottom: 'solid 1px rgb(193,193,193)',
})

const UntilDate = () => 
<UntilDateWrapper>
    <img src={date} alt="" />
    <span>Действует до 02.12.2022</span>
</UntilDateWrapper>

export default UntilDate