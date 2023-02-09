import { FC } from 'react';
import { Button, TextField } from '@mui/material';
import { textareaScrollbarStyles } from '../../../constants/componentsStyles';
import { ItemCommentsFormProps } from '../../../models/itemFormProps';

const ItemCommentsForm: FC<ItemCommentsFormProps> = (props) => {
  const { comment, setComment, postComment } = props;

  return (
    <>
      <TextField
        fullWidth
        label="Comment"
        multiline
        rows={2}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={textareaScrollbarStyles}
      />
      <Button
        type="button"
        fullWidth
        color="success"
        variant="contained"
        disabled={!comment}
        onClick={postComment}
      >
        Post
      </Button>
    </>
  );
};

export { ItemCommentsForm };
