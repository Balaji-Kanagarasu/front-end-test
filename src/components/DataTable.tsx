"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table, TableContainer, Tbody, Td, Th, TRow } from "./Table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer className="rounded-md border">
      <Table>
        <Tbody>
          {getHeaderGroups().map((headerGroup) => (
            <TRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                );
              })}
            </TRow>
          ))}
          {getRowModel().rows?.length ? (
            getRowModel().rows.map((row) => (
              <TRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </TRow>
            ))
          ) : (
            <TRow>
              <Td colSpan={columns.length} className="h-24 text-center">
                No results.
              </Td>
            </TRow>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
