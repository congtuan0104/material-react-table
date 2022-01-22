import React, { FC } from 'react';
import { IconButton, TableCell } from '@mui/material';
import { Row } from 'react-table';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMaterialReactTable } from '../useMaterialReactTable';

interface Props {
  row: Row;
}

export const MRT_ExpandButton: FC<Props> = ({ row }) => {
  const { localization } = useMaterialReactTable();

  return (
    <TableCell
      size="small"
      {...row.getToggleRowExpandedProps()}
      style={{
        padding: '0.5rem',
        paddingRight: '0',
        paddingLeft: `${row.depth + 0.5}rem`,
        width: '3rem',
        maxWidth: '3rem',
      }}
    >
      <IconButton
        aria-label={localization?.expandButtonTitle}
        title={localization?.expandButtonTitle}
      >
        <ExpandMoreIcon
          fontSize="small"
          style={{
            transform: row.isExpanded ? 'rotate(-180deg)' : 'rotate(0)',
            transition: 'transform 0.2s',
          }}
        />
      </IconButton>
    </TableCell>
  );
};