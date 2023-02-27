import { FC } from 'react';
import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CollectionViewButton: FC<{ id: string }> = ({ id }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <Link to={`${pathname}/${id}`} style={{ textDecoration: 'none' }}>
      <Button size="small" sx={{ fontSize: 12 }} variant="contained">
        {t('collections.viewCollection')}
      </Button>
    </Link>
  );
};

export { CollectionViewButton };
