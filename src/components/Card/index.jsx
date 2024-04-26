import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/styles/color'
import DefaultPicture from '../../assets/profile.png'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${colors.backgroundLight};
  font-family: Trebuchet MS;
  border-radius: 30px;
  width: 339px;
  height: 334px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

const CardLabel = styled.span`
  color: #5843e4;
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
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardName>{title}</CardName>
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
