import { FC } from 'react';
import { Button, TextField } from '@mui/material';
import { ItemCommentsFormProps } from '../../../models/itemFormProps';
import { useTranslation } from 'react-i18next';

const ItemCommentsForm: FC<ItemCommentsFormProps> = (props) => {
  const { comment, setComment, postComment } = props;
  const { t } = useTranslation();

  return (
    <>
      <TextField
        fullWidth
        label={t('items.commentLabel')}
        multiline
        rows={2}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={{ '& .MuiInputBase-root': { py: 1 } }}
      />
      <Button
        type="button"
        fullWidth
        variant="contained"
        disabled={!comment}
        onClick={postComment}
      >
        {t('items.commentButton')}
      </Button>
    </>
  );
};

export { ItemCommentsForm };
