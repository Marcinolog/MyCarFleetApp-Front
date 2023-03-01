import React, {useEffect, useState} from "react";
import './DamagesTable.css'

export const DamagesTableComponent = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/damages/all-damages")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    return (
        <>
            <table className='delegations-list-wrapper'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Car Id</th>
                    <th>Damage description</th>
                    <th>Incident date</th>
                    <th>Incident place</th>
                    <th>Drivers surname</th>

                </tr>
                </thead>
                <tbody>
                {data.map((d: any) => (
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.carId}</td>
                        <td>{d.damageDescription}</td>
                        <td>{d.dateOfIncident}</td>
                        <td>{d.placeOfIncident}</td>
                        <td>{d.driverSurname}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    )
}