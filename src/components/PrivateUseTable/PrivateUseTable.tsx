import React, {useEffect, useState} from "react";
import './PrivateUseTable.css'

export const PrivateUseTableComponent = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/private-use/all-private-use")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    return (
        <>
            <table className='private-use-list-wrapper'>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Surname</th>
                    <th>carId</th>
                    <th>Borrow date</th>
                    <th>Return date</th>
                </tr>
                </thead>
                <tbody>
                {data.map((d: any) => (
                    <tr key={d.id}>
                        <td>{d.id}</td>
                        <td>{d.surname}</td>
                        <td>{d.carId}</td>
                        <td>{d.dateOfBorrow}</td>
                        <td>{d.dateOfReturn}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    )
}