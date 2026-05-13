import { render, screen, fireEvent } from '@testing-library/react'
import { Tabs } from './Tabs'

const tabs = [{ label: 'All', count: 14 }, { label: 'Taken', count: 11 }]

describe('Tabs', () => {
  it('renders all tab labels', () => {
    render(<Tabs tabs={tabs} activeIndex={0} onChange={() => {}} />)
    expect(screen.getByText(/All/)).toBeInTheDocument()
    expect(screen.getByText(/Taken/)).toBeInTheDocument()
  })

  it('calls onChange with correct index on click', () => {
    const onChange = vi.fn()
    render(<Tabs tabs={tabs} activeIndex={0} onChange={onChange} />)
    fireEvent.click(screen.getByText(/Taken/))
    expect(onChange).toHaveBeenCalledWith(1)
  })
})
