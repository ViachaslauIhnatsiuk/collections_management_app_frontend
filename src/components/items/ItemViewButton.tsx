import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTranslation } from 'react-i18next';

const ItemViewButton: FC<{ itemId: string }> = ({ itemId }) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <Link to={`${pathname}/items/${itemId}`} style={{ textDecoration: 'none' }}>
      <Tooltip title={t('tooltips.viewItem')}>
        <IconButton color="primary">
          <VisibilityIcon />
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export { ItemViewButton };
