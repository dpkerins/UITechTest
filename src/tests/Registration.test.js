import { render, screen } from '@testing-library/react';
import Registration from '../components/Registration';

test('renders Registration header', () => {
  render(<Registration />);
  const registrationHeader = screen.getByText("Registration");
  expect(registrationHeader).toBeInTheDocument();
});

test('renders Registration form', () => {
  render(<Registration />);
  const emailField = screen.queryByLabelText("Email address");
  const name = screen.queryByLabelText("Name");
  const surname = screen.queryByLabelText("Surname");
  const password = screen.queryByLabelText("Password");
  const passwordConfirmation = screen.queryByLabelText("Confirm Password");
  const submitButton = screen.queryByText("Submit");

  expect(emailField).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(surname).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(passwordConfirmation).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});


