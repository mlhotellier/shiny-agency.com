import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '../../utils/context'
import Home from './'

describe('The Home component', () => {
  it('should render title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', {
        level: 2,
        text: 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents',
      })
    ).toBeTruthy()
    //screen.debug()
  })
})
