import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders children text', () => {
    render(<Badge variant="success">Taken</Badge>)
    expect(screen.getByText('Taken')).toBeInTheDocument()
  })

  it('renders a dot for non-neutral variants', () => {
    const { container } = render(<Badge variant="success">Taken</Badge>)
    expect(container.querySelector('.rounded-full.bg-success')).toBeInTheDocument()
  })

  it('does not render a dot for neutral variant', () => {
    const { container } = render(<Badge variant="neutral">Scheduled</Badge>)
    expect(container.querySelector('.bg-success')).not.toBeInTheDocument()
  })
})
