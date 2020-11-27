import { render } from '@testing-library/react'

import  { About } from '../components';

const { getByText } = render(<About />)

test('Renders about page content and my Github user.', () => {
  expect(getByText(`@pedro-surf`)).toBeInTheDocument()
  expect(getByText(`Nov, 2020`)).toBeInTheDocument()
})