import * as css from "@emotion/react";
import styled from "@emotion/styled";

// Define styles for the table
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const Thead = styled.thead`
  background-color: #333; /* Black background for header */
  color: white; /* White text color for header */
`;

const Tbody = styled.tbody`
  background-color: white; /* White background for body */
`;

const Th = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
`;

// Define a style for alternate row colors
const TRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: #f9f9f9; /* Light gray background for odd rows */
  }
  &:nth-of-type(even) {
    background-color: #ffffff; /* White background for even rows */
  }
`;

const TableContainer = styled.div`
  padding: 10px;
  overflow-x: auto; /* To handle overflow on smaller screens */
  background-color: #f4f4f4; /* Light gray background for the container */
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export { Table, Thead, Tbody, Th, Td, TRow, TableContainer };
