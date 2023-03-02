import { fireEvent } from '@testing-library/react';
import { describe, it } from 'vitest';
import { renderProvider } from '../RenderProvider';
import { SignupForm } from '../../components/auth/SignupForm';

describe('signUp form', () => {
  it('component renders with children', () => {
    const { getByTestId, getAllByText } = renderProvider(<SignupForm />);
    expect(getByTestId('signUp-form')).toBeInTheDocument();
    expect(getByTestId('name-field')).toBeInTheDocument();
    expect(getByTestId('email-field')).toBeInTheDocument();
    expect(getByTestId('password-field')).toBeInTheDocument();
    expect(getAllByText('auth.signUp')[1]).toBeInTheDocument();
    expect(getAllByText('auth.signUp')[1]).toBeDisabled();
  });

  it('signUp form works correctly', () => {
    const { getByTestId, getAllByText } = renderProvider(<SignupForm />);

    const nameField = getByTestId('name-field') as HTMLInputElement;
    const emailField = getByTestId('email-field') as HTMLInputElement;
    const passwordField = getByTestId('password-field') as HTMLInputElement;
    const button = getAllByText('auth.signUp')[1];

    expect(nameField.value).toBe('');
    expect(emailField.value).toBe('');
    expect(passwordField.value).toBe('');
    expect(button).toBeDisabled();
  });

  it('submit button disabled if only name provided', () => {
    const { getByTestId, getAllByText } = renderProvider(<SignupForm />);

    const nameField = getByTestId('name-field') as HTMLInputElement;
    const button = getAllByText('auth.signUp')[1];

    fireEvent.change(nameField, { target: { value: 'name' } });
    expect(button).toBeDisabled();
  });

  it('submit button disabled if only email provided', () => {
    const { getByTestId, getAllByText } = renderProvider(<SignupForm />);

    const emailField = getByTestId('email-field') as HTMLInputElement;
    const button = getAllByText('auth.signUp')[1];

    fireEvent.change(emailField, { target: { value: 'email@mail.com' } });
    expect(button).toBeDisabled();
  });

  it('submit button disabled if only password provided', () => {
    const { getByTestId, getAllByText } = renderProvider(<SignupForm />);

    const passwordField = getByTestId('password-field') as HTMLInputElement;
    const button = getAllByText('auth.signUp')[1];

    fireEvent.change(passwordField, { target: { value: 'Password123!' } });
    expect(button).toBeDisabled();
  });

  it('name, email and password fields work correctly', () => {
    const { getByTestId } = renderProvider(<SignupForm />);

    const nameField = getByTestId('name-field') as HTMLInputElement;
    const emailField = getByTestId('email-field') as HTMLInputElement;
    const passwordField = getByTestId('password-field') as HTMLInputElement;

    fireEvent.change(nameField, { target: { value: 'name' } });
    fireEvent.change(emailField, { target: { value: 'email@mail.com' } });
    fireEvent.change(passwordField, { target: { value: 'Password123!' } });

    expect(nameField.value).toBe('name');
    expect(emailField.value).toBe('email@mail.com');
    expect(passwordField.value).toBe('Password123!');
  });
});
