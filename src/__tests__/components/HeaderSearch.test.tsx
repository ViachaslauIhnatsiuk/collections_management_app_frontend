import { fireEvent, within } from '@testing-library/react';
import { renderProvider } from '../RenderProvider';
import { HeaderSearch } from '../../components/header/headerComponents/HeaderSearch';

describe('header search', () => {
  it('component renders', () => {
    const { getByTestId } = renderProvider(<HeaderSearch />);
    expect(getByTestId('header-search')).toBeInTheDocument();
  });

  it('header search works', () => {
    const { getByTestId } = renderProvider(<HeaderSearch />);

    const headerSearch = getByTestId('header-search');
    const searchValue = 'collection';
    const input: HTMLInputElement = within(getByTestId('header-search')).getByRole(
      'combobox',
    );

    headerSearch.focus();
    fireEvent.change(input, { target: { value: 'collection' } });

    expect(input.value).toEqual(searchValue);
  });

  it('header search initial value doesn`t exist', () => {
    const { getByTestId } = renderProvider(<HeaderSearch />);
    const input: HTMLInputElement = within(getByTestId('header-search')).getByRole(
      'combobox',
    );

    expect(input.value).toBeFalsy();
  });
});
