import React, { FC } from 'react';
import Table from '@mui/material/Table';
import { MRT_TableHead } from '../head/MRT_TableHead';
import { Memo_MRT_TableBody, MRT_TableBody } from '../body/MRT_TableBody';
import { MRT_TableFooter } from '../footer/MRT_TableFooter';
import { MRT_TableInstance } from '..';

interface Props {
  table: MRT_TableInstance;
}

export const MRT_Table: FC<Props> = ({ table }) => {
  const {
    getState,
    options: {
      enableColumnResizing,
      enableRowVirtualization,
      enableStickyHeader,
      enableTableFooter,
      enableTableHead,
      memoMode,
      muiTableProps,
    },
  } = table;
  const { isFullScreen } = getState();

  const tableProps =
    muiTableProps instanceof Function
      ? muiTableProps({ table })
      : muiTableProps;

  return (
    <Table
      stickyHeader={
        enableStickyHeader || enableRowVirtualization || isFullScreen
      }
      {...tableProps}
      sx={(theme) => ({
        tableLayout:
          enableColumnResizing || enableRowVirtualization ? 'fixed' : 'auto',
        ...(tableProps?.sx instanceof Function
          ? tableProps.sx(theme)
          : (tableProps?.sx as any)),
      })}
    >
      {enableTableHead && <MRT_TableHead table={table} />}
      {memoMode === 'table-body' ? (
        <Memo_MRT_TableBody table={table} />
      ) : (
        <MRT_TableBody table={table} />
      )}
      {enableTableFooter && <MRT_TableFooter table={table} />}
    </Table>
  );
};
