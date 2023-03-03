import { NextPage } from "next";
import React from "react";
import Header from "../components/Header";
import { TableColumn } from "react-data-table-component/dist/src/DataTable/types";
import dynamic from "next/dynamic";

const DataTable = dynamic(() => import("react-data-table-component"), {
  ssr: false,
});

type Row = {
  name: string;
  id: string;
  group: string;
  stock: number;
};

const columns: TableColumn<Row>[] = [
  {
    name: "Medicine Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Medicine ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Medicine Group",
    selector: (row) => row.group,
    sortable: true,
  },
  {
    name: "Stock",
    selector: (row) => row.stock,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row) => (
      <p className="cursor-pointer hover:underline">View full Detail</p>
    ),
  },
];

const data: Row[] = [
  {
    group: "Generic Medicine",
    id: "D06ID23245456",
    name: "Augmentin 625 Duo Tabler",
    stock: 35000,
  },
  {
    group: "Generic Medicine",
    id: "D06ID43454323",
    name: "Ibuprofen 400mg Tablet",
    stock: 50000,
  },
  {
    group: "Generic Medicine",
    id: "D06ID54324567",
    name: "Paracetamol 500mg Tablet",
    stock: 70000,
  },
  {
    group: "Generic Medicine",
    id: "D06ID78765432",
    name: "Amoxicillin 500mg Capsule",
    stock: 25000,
  },
  {
    group: "Vitamins",
    id: "V12ID12345678",
    name: "Vitamin C 500mg Tablet",
    stock: 90000,
  },
  {
    group: "Vitamins",
    id: "V12ID23456789",
    name: "Vitamin B Complex Capsule",
    stock: 35000,
  },
  {
    group: "Vitamins",
    id: "V12ID34567890",
    name: "Calcium with Vitamin D Tablet",
    stock: 60000,
  },
  {
    group: "Pain Relief",
    id: "P34ID12345678",
    name: "Aspirin 325mg Tablet",
    stock: 40000,
  },
  {
    group: "Pain Relief",
    id: "P34ID23456789",
    name: "Naproxen 500mg Tablet",
    stock: 20000,
  },
  {
    group: "Pain Relief",
    id: "P34ID34567890",
    name: "Diclofenac 50mg Tablet",
    stock: 30000,
  },
];

const Inventory: NextPage = () => {
  return (
    <div>
      <Header title="Inventory" />
      <div className="my-4">
        <DataTable
          columns={columns as any}
          data={data}
          pagination
          paginationPerPage={7}
          paginationRowsPerPageOptions={[7, 10, 15, 20]}
        />
      </div>
    </div>
  );
};

export default Inventory;
