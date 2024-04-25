import { useParams, Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const previousQuestion = parseFloat(questionNumber) - 1
  const nextQuestion = parseFloat(questionNumber) + 1

  if (nextQuestion)
    return (
      <div>
        <h1>Questionnaire 🧮</h1>
        {questionNumber <= 10 && questionNumber >= 1 ? (
          <h2>Question {questionNumber}</h2>
        ) : null}
        {questionNumber > 1 && questionNumber <= 10 ? (
          <Link to={`/survey/${previousQuestion}`}>Précédent</Link>
        ) : null}
        {questionNumber < 10 && questionNumber >= 1 ? (
          <Link to={`/survey/${nextQuestion}`}>Suivant</Link>
        ) : null}
        {questionNumber > 9 && questionNumber <= 10 ? (
          <Link to={`/results`}>Résultats</Link>
        ) : null}
      </div>
    )
}
export default Survey
