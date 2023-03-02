import { describe, it } from 'vitest';
import { renderProvider } from '../RenderProvider';
import { MainPage } from '../../components/pages/MainPage';

describe('main page', () => {
  it('component renders with children', () => {
    const { getByTestId } = renderProvider(<MainPage />);
    expect(getByTestId('main-page')).toBeInTheDocument();
    expect(getByTestId('last-added-items')).toBeInTheDocument();
    expect(getByTestId('largest-collections')).toBeInTheDocument();
    expect(getByTestId('tags-cloud')).toBeInTheDocument();
  });
});
