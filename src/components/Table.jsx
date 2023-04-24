import React from 'react';
import {BsFillTrashFill,BsFillPencilFill} from 'react-icons/bs';
import './Table.css';

export const Table = ({ rows, deleteRow, editRow }) =>{
    return <div className="table">
        <table className="table-wrapper">
            <thead>
                <tr>
                    <th>Page</th>
                    <th className="expand">Decription</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
            { 
                rows.map((row ,idx) => {
                    const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);
                    
                    return <tr key={idx}>
                        <td>{row.page}</td>
                        <td className="expand" >{row.description}</td>
                        <td>
                        <span className={`label label-${row.status}`}>
                        {statusText}{/* */}
                        </span>
                    </td>
                    <td>
                        <span className="actions">
                            <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(idx)}/>
                            <BsFillPencilFill onClick={() => editRow(idx)}/>
                        </span>
                    </td>
                    </tr>
                })
            }

            </tbody>

        </table>

    </div>;
};