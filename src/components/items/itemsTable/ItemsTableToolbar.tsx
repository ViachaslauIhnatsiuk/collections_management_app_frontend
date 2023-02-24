import { FC, useMemo } from 'react';
import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import { useCollections } from '../../../hooks/useCollections';

const ItemsTableToolbar: FC = () => {
  const { getCollectionById } = useCollections();
  const { id } = useParams();

  const collectionName = useMemo(() => {
    const currentCollection = getCollectionById(id as string);
    return currentCollection.title;
  }, [id]);

  return (
    <GridToolbarContainer>
      <GridToolbarExport
        csvOptions={{ fileName: collectionName, delimiter: ';' }}
        printOptions={{ disableToolbarButton: true }}
      />
    </GridToolbarContainer>
  );
};

export { ItemsTableToolbar };
