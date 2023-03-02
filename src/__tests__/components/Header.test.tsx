import { describe, it } from 'vitest';
import { renderProvider } from '../RenderProvider';
import { Header } from '../../components/header/Header';

describe('header', () => {
  it('component renders with children', () => {
    const { getByTestId, getAllByRole } = renderProvider(<Header />);
    expect(getByTestId('header')).toBeInTheDocument();
    expect(getAllByRole('button')).not.toBeNull();
    expect(getByTestId('search')).toBeInTheDocument();
  });
});
