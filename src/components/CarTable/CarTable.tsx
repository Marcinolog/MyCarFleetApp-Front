import React, {useEffect, useState} from "react";
import './CarTable.css'
import axios from "axios";

export const CarTableComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/cars/all-cars')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <table className='car-list-wrapper'>
                <thead>
                <tr>
                    <th>Plate Number</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Production Year</th>
                    <th>Engine</th>
                </tr>
                </thead>
                <tbody>
                {data.map((d: any) => (
                    <tr key={d.id}>
                        <td>{d.plateNumber}</td>
                        <td>{d.brand}</td>
                        <td>{d.model}</td>
                        <td>{d.productionYear}</td>
                        <td>{d.engine}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    )
};