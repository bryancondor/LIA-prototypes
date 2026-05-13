import { render, screen } from '@testing-library/react'
import { Bubble } from './Bubble'

describe('Bubble', () => {
  it('renders message text', () => {
    render(<Bubble direction="incoming" time="10:00">Hello Mariana</Bubble>)
    expect(screen.getByText('Hello Mariana')).toBeInTheDocument()
  })

  it('renders time', () => {
    render(<Bubble direction="incoming" time="10:00">Hello</Bubble>)
    expect(screen.getByText('10:00')).toBeInTheDocument()
  })
})
