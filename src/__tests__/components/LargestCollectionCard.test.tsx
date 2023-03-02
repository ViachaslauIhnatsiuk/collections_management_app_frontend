import { describe, it } from 'vitest';
import { renderProvider } from '../RenderProvider';
import { LargestCollectionCard } from '../../components/main/LargestCollectionCard';

const mockCollection = {
  _id: 'id',
  title: 'Collection',
  description: 'About collection',
  topic: 'Topic',
  ownerId: 'ownerId',
  itemExtraFields: [],
};

describe('largest collection card', () => {
  it('component renders with right values', () => {
    const { getByTestId } = renderProvider(
      <LargestCollectionCard key={mockCollection._id} {...mockCollection} />,
    );
    expect(getByTestId('largest-card')).toBeInTheDocument();
    expect(getByTestId('largest-card-title')).toHaveTextContent('Collection');
    expect(getByTestId('largest-card-topic')).toHaveTextContent('Topic');
  });
});
