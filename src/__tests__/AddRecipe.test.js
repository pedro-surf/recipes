import { render } from '@testing-library/react'

import { AddRecipe } from '../components';

const { getByText } = render(<AddRecipe />);

test('Add Recipe renders ok', () => {
  expect(getByText(/Send your own recipe/i)).toBeInTheDocument()
})