import { render, screen } from '@testing-library/react';
import Welcome from '../components/Welcome';

test('renders Welcome header', () => {
  render(<Welcome />);
  const welcomeHeader = screen.getByText("Welcome");
  expect(welcomeHeader).toBeInTheDocument();
});


