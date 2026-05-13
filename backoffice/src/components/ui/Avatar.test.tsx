import { render, screen } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('renders initials', () => {
    render(<Avatar initials="CM" />)
    expect(screen.getByText('CM')).toBeInTheDocument()
  })
})
