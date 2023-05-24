import "./List.css";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ListPageBody from "../../components/ListPage/ListPageBody";
import PageFooter from "../../components/PageFooter";

const List = () => {
  return (
    <div className="list-container">
      <div>
        <PageHeader />
      </div>

      <div>
        <ListPageBody />
      </div>

      <div>
        <PageFooter />
      </div>
    </div>
  );
};

export default List;
