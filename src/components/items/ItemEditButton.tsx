import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { ItemForm } from './itemForm/ItemForm';
import { selectAuth, useAppSelector } from '../../store/selectors';
import { IItem } from '../../store/slices/itemSlice/itemModel';

const ItemEditButton: FC<{ itemData: IItem }> = ({ itemData }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { id } = useParams();
  const { currentUser } = useAppSelector(selectAuth);

  return (
    <>
      <IconButton
        sx={{ display: currentUser.id === itemData.ownerId ? 'inline-flex' : 'none' }}
        color="primary"
        onClick={() => setOpen(true)}
      >
        <BorderColorIcon />
      </IconButton>
      <Dialog
        transitionDuration={400}
        open={open}
        keepMounted
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDialog-paper': {
            maxWidth: '350px',
          },
        }}
      >
        <DialogTitle>{'Item edit form'}</DialogTitle>
        <DialogContent>
          <ItemForm
            value="Edit item"
            itemId={itemData.id as string}
            collectionId={id as string}
            setOpen={setOpen}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export { ItemEditButton };
