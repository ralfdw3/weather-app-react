import "./List.css";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ListPageBody from "../../components/ListPage/ListPageBody";
import Pagination from "../../components/ListPage/Pagination";
import PageFooter from "../../components/PageFooter";

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="list-container">
      <div>
        <PageHeader />
      </div>

      <div>
        <ListPageBody />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>

      <div>
        <PageFooter />
      </div>
    </div>
  );
};

export default List;
