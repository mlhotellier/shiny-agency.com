import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/color'
import darkLogo from '../../assets/dark-logo.png'
import lightLogo from '../../assets/light-logo.png'
import { useTheme } from '../../utils/hooks'

const StyledLink = styled(Link)`
  color: ${({ theme }) => (theme === 'light' ? '#8186a0' : '#fff')};
  text-decoration: none;
  font-size: 18px;
  margin-right: 35px;
  &:hover {
    color: ${colors.primary};
  }
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${
      colors.primary
    };padding: 10px 20px;
    &:hover {
      cursor: pointer;
      color:white;
      background-color: ${colors.secondary};
      box-shadow: 2px 2px 10px ${
        props.theme === 'light' ? '#e2e3e9' : '#5d5a78'
      };
    }`};
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 62px 0px 33px;
`

function Header() {
  const { theme } = useTheme()
  const logo = theme === 'light' ? darkLogo : lightLogo
  return (
    <Navigation>
      <img src={logo} height={70} alt="logo shiny agency" />
      <div>
        <StyledLink to="/" theme={theme}>
          Accueil
        </StyledLink>
        <StyledLink to="/freelances" theme={theme}>
          Profils
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink theme={theme}>
          Faire le test
        </StyledLink>
      </div>
    </Navigation>
  )
}

export default Header
