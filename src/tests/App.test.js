import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Registration page', () => {
  render(<App />);
  const registrationHeader = screen.getByText("Registration");
  expect(registrationHeader).toBeInTheDocument();
});
