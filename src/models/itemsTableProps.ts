import { Dispatch, SetStateAction, MouseEvent } from 'react';
import { IItem } from '../store/slices/itemSlice/itemModel';

interface ItemsTableProps {
  itemsToRender: IItem[];
}

interface ItemsTableBodyProps {
  itemsToRender: IItem[];
  page: number;
  rowsPerPage: number;
  emptyRows: number;
}

interface ItemsTableEmptyRowsProps {
  emptyRows: number;
}

interface ItemsTableRowProps {
  item: IItem;
}

interface ItemsTableFooterProps {
  itemsToRender: IItem[];
  page: number;
  rowsPerPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
}

interface ItemsTablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

export type {
  ItemsTableProps,
  ItemsTableBodyProps,
  ItemsTableEmptyRowsProps,
  ItemsTableRowProps,
  ItemsTableFooterProps,
  ItemsTablePaginationActionsProps,
};
