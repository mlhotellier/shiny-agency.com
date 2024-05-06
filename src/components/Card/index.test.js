import Card from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('The Card component', () => {
  it('should render without crashing', () => {
    render(
      <ThemeProvider>
        <Card />
      </ThemeProvider>
    )
  })
  it('should Card makes good use of the title and picture you pass to him as props.', () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/john-doe.png"
        />
      </ThemeProvider>
    )
    const resultPictureUrl = 'http://localhost/john-doe.png'
    const elementImg = screen.getByRole('img')
    const resultTitle = ' Harry Potter '
    const elementTitle = screen.getByText(/Harry/i)

    expect(elementImg.src).toBe(resultPictureUrl)
    expect(elementTitle.textContent).toBe(resultTitle)
  })
  it('should render title which is favorite', () => {
    render(
      <ThemeProvider>
        <Card title="Harry Potter" label="Name" picture="/john-doe.png" />
      </ThemeProvider>
    )
    const elementTitle = screen.getByText(/Harry/i)
    // eslint-disable-next-line testing-library/no-node-access
    const cardElement = elementTitle.closest('div')
    const resultTitle = '⭐️ Harry Potter ⭐️'
    fireEvent.click(cardElement)
    expect(elementTitle.textContent).toBe(resultTitle)
  })
})
