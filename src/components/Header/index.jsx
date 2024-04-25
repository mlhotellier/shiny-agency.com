import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/color'
import logo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  margin-right: 35px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};padding: 10px 20px`};
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 62px 0px 33px;
`

function Header() {
  return (
    <Navigation>
      <img src={logo} height={70} alt="logo shiny agency" />
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </Navigation>
  )
}

export default Header
