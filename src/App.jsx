import {useState} from 'react';

import React from "react";
import './App.css'
import {Table} from './components/Table';
import {Modal} from './components/Modal';

function App() {

    const [modalOpen, setModalOpen] = useState(false);

    const [rows, setRows] = useState([
        {page: "Page 1", description: "This is the first page", status: "live"},
        {page: "Page 2", description: "This is the second page", status: "draft"},
        {page: "Page 3", description: "This is the third page", status: "error"},
    ])

    const [rowToEdit, setRowToEdit] = useState(null)

    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex))
    }

    const handleEditRow = (idx) => {
        setRowToEdit(idx)
        setModalOpen(true)
    }

    const handleSubmit = (newRow) => {
        rowToEdit === null 
        ? setRows([...rows, newRow]) 
        : setRows(rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow

            return newRow
        }))
    };

    return <div className="App">
        <Table rows = {rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
        <button className="btn" onClick={() => setModalOpen(true)}>Add</button>
        {modalOpen &&<Modal closeModal={() => {setModalOpen(false);   setRowToEdit(null);}}   onSubmit={handleSubmit}   defaultValue={rowToEdit !==null && rows[rowToEdit]}/>
        }
    </div>;
}

export default App;

