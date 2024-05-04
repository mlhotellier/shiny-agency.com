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
        <Card title="John Doe" label="Name" picture="/john-doe.png" />
      </ThemeProvider>
    )
    const resultPictureUrl = 'http://localhost/john-doe.png'
    const elementImg = screen.getByRole('img')
    const resultTitle = ' John Doe '
    const elementTitle = screen.getByText(/John/i)

    expect(elementImg.src).toBe(resultPictureUrl)
    expect(elementTitle.textContent).toBe(resultTitle)
  })
  it('should render title which is favorite', () => {
    render(
      <ThemeProvider>
        <Card title="John Doe" label="Name" picture="/john-doe.png" />
      </ThemeProvider>
    )
    const elementTitle = screen.getByText(/John/i)
    // eslint-disable-next-line testing-library/no-node-access
    const cardElement = elementTitle.closest('div')
    const resultTitle = '⭐️ John Doe ⭐️'
    fireEvent.click(cardElement)
    expect(elementTitle.textContent).toBe(resultTitle)
  })
})
