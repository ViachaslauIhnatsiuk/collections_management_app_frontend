import { fireEvent } from '@testing-library/react';
import { describe, it } from 'vitest';
import { renderProvider } from '../RenderProvider';
import { SigninForm } from '../../components/auth/SigninForm';

describe('signIn form', () => {
  it('component renders with children', () => {
    const { getByTestId, getAllByText } = renderProvider(<SigninForm />);
    expect(getByTestId('signIn-form')).toBeInTheDocument();
    expect(getByTestId('email-field')).toBeInTheDocument();
    expect(getByTestId('password-field')).toBeInTheDocument();
    expect(getAllByText('auth.signIn')[1]).toBeInTheDocument();
    expect(getAllByText('auth.signIn')[1]).toBeDisabled();
  });

  it('signIn form works correctly', () => {
    const { getByTestId, getAllByText } = renderProvider(<SigninForm />);

    const emailField = getByTestId('email-field') as HTMLInputElement;
    const passwordField = getByTestId('password-field') as HTMLInputElement;
    const button = getAllByText('auth.signIn')[1];

    expect(emailField.value).toBe('');
    expect(passwordField.value).toBe('');
    expect(button).toBeDisabled();
  });

  it('submit button disabled if only email provided', () => {
    const { getByTestId, getAllByText } = renderProvider(<SigninForm />);

    const emailField = getByTestId('email-field') as HTMLInputElement;
    const button = getAllByText('auth.signIn')[1];

    fireEvent.change(emailField, { target: { value: 'email@mail.com' } });
    expect(button).toBeDisabled();
  });

  it('submit button disabled if only password provided', () => {
    const { getByTestId, getAllByText } = renderProvider(<SigninForm />);

    const passwordField = getByTestId('password-field') as HTMLInputElement;
    const button = getAllByText('auth.signIn')[1];

    fireEvent.change(passwordField, { target: { value: 'Password123!' } });
    expect(button).toBeDisabled();
  });

  it('both email and password fields work correctly', () => {
    const { getByTestId } = renderProvider(<SigninForm />);

    const emailField = getByTestId('email-field') as HTMLInputElement;
    const passwordField = getByTestId('password-field') as HTMLInputElement;

    fireEvent.change(emailField, { target: { value: 'email@mail.com' } });
    fireEvent.change(passwordField, { target: { value: 'Password123!' } });

    expect(emailField.value).toBe('email@mail.com');
    expect(passwordField.value).toBe('Password123!');
  });
});
