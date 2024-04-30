import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/styles/color'
import DefaultPicture from '../../assets/profile.png'
import { useTheme } from '../../utils/hooks'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) =>
    theme === 'light' ? `${colors.backgroundLight}` : '#4F4C6B'};
  font-family: Trebuchet MS;
  border-radius: 30px;
  width: 339px;
  height: 334px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px
      ${({ theme }) => (theme === 'light' ? '#e2e3e9' : '#5d5a78')};
  }
`

const CardLabel = styled.span`
  color: ${({ theme }) => (theme === 'light' ? '#5843e4' : '#fff')};
  font-size: 22px;
  font-weight: 400;
  margin-top: 29px;
  padding: 0 24px;
  line-height: 25.54px;
  text-align: center;
  height: 27px;
`

const CardImage = styled.img`
  height: 148px;
  width: 148px;
  margin: 30.79px auto 32.27px;
  border-radius: 50%;
`

const CardName = styled.span`
  margin: 0 auto;
  width: 210.21px;
  height: 28.14px;
  font-size: 25px;
  font-weight: 400;
  line-height: 29.03px;
  text-align: center;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
`

function Card({ label, title, picture }) {
  const { theme } = useTheme()
  return (
    <CardWrapper theme={theme}>
      <CardLabel theme={theme}>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardName theme={theme}>{title}</CardName>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: '',
  label: '',
  picture: DefaultPicture,
}

export default Card
