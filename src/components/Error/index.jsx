import ErrorIllustration from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/styles/color'
import { useTheme } from '../../utils/hooks'

const ErrorContainer = styled.div`
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : '#4F4C6B'};
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
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
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
  color:${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
`

function Error() {
  const { theme } = useTheme()
  return (
    <ErrorContainer theme={theme}>
      <ErrorMainTitle theme={theme}>Oups...</ErrorMainTitle>
      <ErrorImg
        src={ErrorIllustration}
        alt="Erreur 404 illustration"
        width={875}
      />
      <ErrorSecondTitle theme={theme}>
        Il semblerait qu’il y ait un problème
      </ErrorSecondTitle>
    </ErrorContainer>
  )
}

export default Error
