import React, {useEffect, useState} from "react";
import axios from "axios";

export const DamagesTableComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/damages/all-damages')
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
                    <th>Car plate number</th>
                    <th>Damage description</th>
                    <th>Incident date</th>
                    <th>Incident place</th>
                    <th>Drivers surname</th>
                </tr>
                </thead>
                <tbody>
                {data.map((d: any) => (
                    <tr key={d.id}>
                        <td>{d.carPlateNumber}</td>
                        <td>{d.damageDescription}</td>
                        <td>{d.dateOfIncident}</td>
                        <td>{d.placeOfIncident}</td>
                        <td>{d.driversSurname}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
};