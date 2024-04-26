import Card from '../../components/Card'
import styled from 'styled-components'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'UX Designer',
  },
  {
    name: 'Alexandra Dupont',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Devops',
  },
  {
    name: 'Lauren Ipsum',
    jobTitle: 'UX Designer',
  },
]

const FreelancesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 91px;
  margin-bottom: 276px;
`

const FreelancesTitle = styled.div`
  font-family: Trebuchet MS;
  text-align: center;
  & h1 {
    font-size: 30px;
    font-weight: 700;
    line-height: 39.75px;
    color: #2f2e41;
    margin-bottom: 52px;
  }
  & p {
    font-size: 20px;
    font-weight: 700;
    line-height: 26.5px;
    color: #8186a0;
  }
`

const CardsContainer = styled.div`
  margin-top: 97px;
  display: grid;
  gap: 52px 70px;
  grid-template-columns: repeat(2, 1fr);
`

function Freelances() {
  return (
    <FreelancesContainer>
      <FreelancesTitle>
        <h1>Trouvez votre prestataire</h1>
        <p>Chez Shiny nous réunissons les meilleurs profils pour vous.</p>
      </FreelancesTitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </FreelancesContainer>
  )
}

export default Freelances
