import React, {useEffect, useState} from "react";
import './DelegationsTable.css'

export const DelegationsTableComponent = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/delegations/all-delegations")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    return (
        <>
            <table className='delegations-list-wrapper'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Servicers</th>
                    <th>carId</th>
                    <th>Service location</th>
                    <th>Start date</th>
                    <th>End date</th>
                </tr>
                </thead>
                <tbody>
                {data.map((d: any) => (
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.servicers}</td>
                        <td>{d.carId}</td>
                        <td>{d.serviceLocation}</td>
                        <td>{d.dateOfStart}</td>
                        <td>{d.dateOfEnd}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    )
}