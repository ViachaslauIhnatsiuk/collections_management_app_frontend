import { describe, it } from 'vitest';
import { renderProvider } from '../RenderProvider';
import { ItemCard } from '../../components/items/itemCard/ItemCard';

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

describe('item card', () => {
  it('component renders with right values', () => {
    const { getByTestId } = renderProvider(
      <ItemCard key={mockItem._id} item={mockItem} />,
    );
    expect(getByTestId('item-card')).toBeInTheDocument();
    expect(getByTestId('item-card-title')).toHaveTextContent('Item');
  });
});
