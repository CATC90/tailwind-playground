import React from "react";
import { Row } from "../row";
import { Search } from "../search";
import { TableBody } from "../table-body";
import { TableHeader } from "../table-header";
import { TableWrapper } from "../table-wrapper";

export const Table = ({ tableData }) => {
  const { columns, data, hasAvatar, hasActions } = tableData;
  return (
    <TableWrapper>
      <TableHeader>
        <Search />
      </TableHeader>
      <TableBody
        columns={columns}
        hasActions={hasActions}
        hasAvatar={hasAvatar}
      >
        {data.map((rowData) => (
          <Row rowData={rowData} />
        ))}
      </TableBody>
    </TableWrapper>
  );
};
