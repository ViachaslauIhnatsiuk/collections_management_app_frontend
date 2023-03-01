import { useTranslation } from 'react-i18next';
import { emailValidation, passwordValidation } from '../constants/formValidation';

const useValidation = () => {
  const { t } = useTranslation();

  const nameRegister = {
    required: t('validation.emptyFieldReport'),
    minLength: {
      value: 3,
      message: t('validation.minNameLengthReport'),
    },
    maxLength: {
      value: 15,
      message: t('validation.maxNameLengthReport'),
    },
  };

  const emailRegister = {
    required: t('validation.emptyFieldReport'),
    pattern: {
      value: emailValidation,
      message: t('validation.invalidEmailReport'),
    },
  };

  const passwordRegister = {
    required: t('validation.emptyFieldReport'),
    minLength: {
      value: 8,
      message: t('validation.minPasswordLengthReport'),
    },
    pattern: {
      value: passwordValidation,
      message: t('validation.invalidPasswordReport'),
    },
  };
  return { nameRegister, emailRegister, passwordRegister };
};

export { useValidation };
