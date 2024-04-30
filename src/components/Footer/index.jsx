import styled from 'styled-components'
import colors from '../../utils/styles/color'
import { useTheme } from '../../utils/hooks'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 40px auto;
  color: ${({ theme }) => (theme === 'light' ? `${colors.secondary}` : '#fff')};
`

function Footer() {
  const { theme, toggleTheme } = useTheme()
  return (
    <FooterContainer>
      <NightModeButton theme={theme} onClick={() => toggleTheme()}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer
