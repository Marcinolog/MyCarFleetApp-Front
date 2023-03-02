import React, {useEffect, useState} from "react";
import axios from "axios";

export const DelegationsTableComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/delegations/all-delegations')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <table className='table-wrapper'>
                <thead>
                <tr>
                    <th>Service location</th>
                    <th>Servicers</th>
                    <th>Car plate number</th>
                    <th>Start date</th>
                    <th>End date</th>
                </tr>
                </thead>
                <tbody>
                {data.map((d: any) => (
                    <tr key={d.id}>
                        <td>{d.serviceLocation}</td>
                        <td>{d.servicers}</td>
                        <td>{d.carPlateNumber}</td>
                        <td>{d.dateOfStart}</td>
                        <td>{d.dateOfEnd}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
};