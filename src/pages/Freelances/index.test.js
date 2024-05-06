import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen, waitFor } from '@testing-library/react'
import Freelances from './'
import { ThemeProvider } from '../../utils/context'

const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Magicien frontend',
    picture: '',
  },
  {
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
]

const server = setupServer(
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('The Freelances component', () => {
  it('should render without crashing', () => {
    render(
      <ThemeProvider>
        <Freelances />
      </ThemeProvider>
    )
  })
  it('should render datas without crashing', async () => {
    render(
      <ThemeProvider>
        <Freelances />
      </ThemeProvider>
    )
    expect(screen.getByTestId('loader')).toBeTruthy()
    // await waitFor(() => {
    //   expect(screen.getByText('Harry Potter')).toBeTruthy()
    //   expect(screen.getByText('Hermione Granger')).toBeTruthy()
    // })
  })
})
