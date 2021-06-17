import React from "react";
import { table, headerCell, tableWrapper } from "./Table.module.css";

const Table = ({ children }) => {
  return (
    <div className={tableWrapper}>
      <table className={table}>
        <thead>
          <tr>
            <th className={headerCell}>USERNAME</th>
            <th className={headerCell}>FIRST NAME</th>
            <th className={headerCell}>LAST NAME</th>
            <th className={headerCell}>EMAIL</th>
            <th className={headerCell}>TYPE</th>
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
};

export default Table;
