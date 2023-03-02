import { describe, it } from 'vitest';
import { renderProvider } from '../RenderProvider';
import { LastAddedItem } from '../../components/main/LastAddedItem';

const mockItem = {
  _id: 'id',
  title: 'Item',
  tags: [],
  collectionId: 'collectionId',
  ownerId: 'ownerId',
  likes: [],
  comments: [],
  createdAt: '2023-02-28T09:17:49.867Z',
  updatedAt: '2023-03-01T14:29:25.018Z',
};

describe('last added item', () => {
  it('component renders with right values', () => {
    const { getByTestId } = renderProvider(
      <LastAddedItem key={mockItem._id} item={mockItem} />,
    );
    expect(getByTestId('last-added-item')).toBeInTheDocument();
    expect(getByTestId('last-added-item-title')).toHaveTextContent('Item');
    expect(getByTestId('last-added-item-created')).toHaveTextContent(
      'Added: Feb 28, 12:17 PM',
    );
  });
});
