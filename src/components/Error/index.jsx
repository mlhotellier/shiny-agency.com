import ErrorIllustration from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/styles/color'

const ErrorContainer = styled.div`
  background-color: ${colors.backgroundLight};
  margin-top: 54px;
  margin-left: 63px;
  margin-right: 63px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ErrorMainTitle = styled.h1`
  margin-top: 49px;
  height: 49px;
`

const ErrorImg = styled.img`
  width: 875px;
  height: 476px;
  margin-top: 25px;
  margin-bottom: 88px;
`

const ErrorSecondTitle = styled.h2`
  height:954px;
  margin-bottom364px;
`

function Error() {
  return (
    <ErrorContainer>
      <ErrorMainTitle>Oups...</ErrorMainTitle>
      <ErrorImg
        src={ErrorIllustration}
        alt="Erreur 404 illustration"
        width={875}
      />
      <ErrorSecondTitle>Il semblerait qu’il y ait un problème</ErrorSecondTitle>
    </ErrorContainer>
  )
}

export default Error
