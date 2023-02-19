import React, {useEffect, useState} from "react";

export const CarTableComponent = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/car-info/cars")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    return (
        <>
            <div>
                {data.map((d: any) => (
                    <div key={d.id}>{d.plateNumber}</div>
                ))}
            </div>
            <div>
                {data.map((d: any) => (
                    <div key={d.id}>{d.brand}</div>
                ))}
            </div>
            <div>
                {data.map((d: any) => (
                    <div key={d.id}>{d.model}</div>
                ))}
            </div>
            <div>
                {data.map((d: any) => (
                    <div key={d.id}>{d.productionYear}</div>
                ))}
            </div>
            <div>
                {data.map((d: any) => (
                    <div key={d.id}>{d.engine}</div>
                ))}
            </div>
        </>
    )
}