import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/color'
import { Loader } from '../../utils/styles/Atoms'
import { SurveyContext } from '../../utils/context'
import { useFetch, useTheme } from '../../utils/hooks'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
`

const QuestionContent = styled.span`
  margin: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto;
`

const SurveyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme === 'light' ? `${colors.backgroundLight}` : '#4F4C6B'};
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.$isSelected
      ? `0px 0px 0px 2px ${colors.primary} 
  inset`
      : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function Survey() {
  const { theme } = useTheme()
  const { questionNumber } = useParams()
  const previousQuestion = parseFloat(questionNumber) - 1
  const nextQuestion = parseFloat(questionNumber) + 1
  const { answers, saveAnswers } = useContext(SurveyContext)
  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
  const { surveyData } = data

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

  if (error) {
    return <ErrorContainer>Oups il y a eu un problème</ErrorContainer>
  }

  return (
    <SurveyContainer>
      {questionNumber <= 6 && questionNumber >= 1 ? (
        <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>
      ) : null}
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <SurveyWrapper>
          <QuestionContent theme={theme}>
            {surveyData && surveyData[questionNumber]}
          </QuestionContent>
          <ReplyWrapper>
            <ReplyBox
              theme={theme}
              onClick={() => saveReply(true)}
              $isSelected={answers[questionNumber] === true}
            >
              Oui
            </ReplyBox>
            <ReplyBox
              theme={theme}
              onClick={() => saveReply(false)}
              $isSelected={answers[questionNumber] === false}
            >
              Non
            </ReplyBox>
          </ReplyWrapper>
        </SurveyWrapper>
      )}
      <LinkWrapper theme={theme}>
        {!isLoading && questionNumber > 1 && questionNumber <= 6 ? (
          <Link to={`/survey/${previousQuestion}`}>Précédent</Link>
        ) : null}
        {!isLoading && questionNumber < 6 && questionNumber >= 1 ? (
          <Link to={`/survey/${nextQuestion}`}>Suivant</Link>
        ) : null}
        {!isLoading && questionNumber > 5 && questionNumber <= 6 ? (
          <Link to={`/results`}>Résultats</Link>
        ) : null}
      </LinkWrapper>
    </SurveyContainer>
  )
}
export default Survey
