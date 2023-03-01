import React, {useEffect, useState} from "react";
import './CarTable.css'

export const CarTableComponent = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/car-info/all-cars")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

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
}