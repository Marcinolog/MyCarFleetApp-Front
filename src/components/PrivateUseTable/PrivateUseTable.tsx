import React, {useEffect, useState} from "react";
import './PrivateUseTable.css'
import axios from "axios";

export const PrivateUseTableComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/private-uses/all-private-use')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <table className='private-use-list-wrapper'>
                <thead>
                <tr>
                    <th>Surname</th>
                    <th>Car plate number</th>
                    <th>Borrow date</th>
                    <th>Return date</th>
                </tr>
                </thead>
                <tbody>
                {data.map((d: any) => (
                    <tr key={d.id}>
                        <td>{d.surname}</td>
                        <td>{d.carPlateNumber}</td>
                        <td>{d.dateOfBorrow}</td>
                        <td>{d.dateOfReturn}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    )
};