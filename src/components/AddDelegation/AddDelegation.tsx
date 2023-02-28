// import React from "react";
//
// export const AddDelegationComponent = () => {
//
//     return (
//         <div className='form-wrapper'>
//             <h2>Add delegation</h2>
//             <form action="/delegations/add-delegation" method="post"/>
//             <label>
//                 Delegation place<br/>
//                 <input type="text" name="serviceLocation"/><br/>
//             </label>
//             <label>
//                 Servicers <br/>
//                 <input type="text" name="servicers"/><br/>
//             </label>
//             <label>
//                 Car ID<br/>
//                 <input type="text" name="carId"/><br/>
//             </label>
//             <label>
//                 Delegation start date<br/>
//                 <input type="date" name="dateOfStart"/><br/>
//             </label>
//             <label>
//                 Delegation end date<br/>
//                 <input type="date" name="dateOfStart"/><br/>
//             </label>
//             <button className="submitBtn" type="submit">Add delegation</button>
//         </div>
//     )
// }
//

import React, { useState } from "react";
import axios from "axios";

export const AddDelegationComponent = () => {
    const [formData, setFormData] = useState({
        serviceLocation: '',
        servicers: '',
        carId: '',
        dateOfStart: '',
        dateOfEnd: ''
    });

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/car-info/add-car', formData);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event: any) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    };

    return (
        <div className='form-wrapper'>
            <h2>Add delegation</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Delegation place<br/>
                    <input type="text" name="serviceLocation" value={formData.serviceLocation} onChange={handleChange} /><br/>
                </label>
                <label>
                    Servicers <br/>
                    <input type="text" name="servicers" value={formData.servicers} onChange={handleChange} /><br/>
                </label>
                <label>
                    Car ID<br/>
                    <input type="text" name="carId" value={formData.carId} onChange={handleChange} /><br/>
                </label>
                <label>
                    Delegation start date<br/>
                    <input type="date" name="dateOfStart" value={formData.dateOfStart} onChange={handleChange} /><br/>
                </label>
                <label>
                    Delegation end date<br/>
                    <input type="date" name="dateOfEnd" value={formData.dateOfEnd} onChange={handleChange} /><br/>
                </label>
                <button className="submitBtn" type="submit" onClick={handleChange}>Add delegation</button>
            </form>
        </div>
    )
};





