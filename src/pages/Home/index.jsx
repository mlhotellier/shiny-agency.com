import HomeIllustration from '../../assets/home-illustration.svg'
import styled from 'styled-components'
import colors from '../../utils/styles/color'
import { Link } from 'react-router-dom'

const HomeContent = styled.div`
  display: flex;
  height: 824px;
  align-items: center;
  background-color: ${colors.backgroundLight};
  margin: 100px 62px 0 65px;
`

const TextContent = styled.div`
  width: 50%;
  padding-left: 91px;
  & h1 {
    font-size: 50px;
    line-height: 80.25px;
    padding-left: 7px;
    padding-right: 10px;
  }
  & button {
    color: white;
    border-radius: 30px;
    background-color: ${colors.primary};
    padding: 9px 68px;
    border: 0px;
    margin-top: 55px;
    font-family: Comfortaa, sans-serif;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
  }
`

const ImageContent = styled.div`
  width: 50%;
  padding: 139px 77px 179px 45px;
`

function Home() {
  return (
    <HomeContent>
      <TextContent>
        <h1>
          Repérez vos besoins,
          <br />
          on s’occupe du reste,
          <br />
          avec les meilleurs talents
        </h1>
        <Link to="/survey/1">
          <button>Faire le test</button>
        </Link>
      </TextContent>
      <ImageContent>
        <img
          src={HomeIllustration}
          alt="illustration de cv"
          width="541"
          height="506"
        />
      </ImageContent>
    </HomeContent>
  )
}

export default Home
