/**
 *
 * @author  NNTruong / nhuttruong6496@gmail.com
 */
import React from 'react';
// import { Box, Text } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import './index.css';
export default function Index({ pageSize, total, onPageChange, ...props }) {
  const handlePageClick = ({ selected }) => {
    onPageChange(selected);
  };
  let pageCount =
    Number.parseInt(total / pageSize) - total / pageSize === 0
      ? Number.parseInt(total / pageSize)
      : Number.parseInt(total / pageSize) + 1;
  return total === 0 ? null : (
    <ReactPaginate
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={pageSize}
      pageCount={pageCount}
      className="pagination"
      activeClassName="active"
      {...props}
    />
  );
}
