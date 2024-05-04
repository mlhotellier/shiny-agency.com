import Card from '../../components/Card'
import styled from 'styled-components'
import { Loader } from '../../utils/styles/Atoms'
import { useFetch, useTheme } from '../../utils/hooks'

const FreelancesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 91px;
  margin-bottom: 276px;
`
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
`

const FreelancesTitle = styled.div`
  font-family: Trebuchet MS;
  text-align: center;
  & h1 {
    font-size: 30px;
    font-weight: 700;
    line-height: 39.75px;
    color: ${({ theme }) => (theme === 'light' ? '#2F2E41' : '#fff')};
    margin-bottom: 52px;
  }
  & p {
    font-size: 20px;
    font-weight: 700;
    line-height: 26.5px;
    color: ${({ theme }) => (theme === 'light' ? '#8186a0' : '#fff')};
  }
`

const CardsContainer = styled.div`
  margin-top: 97px;
  display: grid;
  gap: 52px 70px;
  grid-template-columns: repeat(2, 1fr);
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto;
`

function Freelances() {
  const { theme } = useTheme()
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  )
  const freelancersList = data?.freelancersList

  if (error) {
    return <ErrorContainer>Oups il y a eu un problème</ErrorContainer>
  }

  return (
    <FreelancesContainer>
      <FreelancesTitle theme={theme}>
        <h1>Trouvez votre prestataire</h1>
        <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
      </FreelancesTitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </FreelancesContainer>
  )
}

export default Freelances
