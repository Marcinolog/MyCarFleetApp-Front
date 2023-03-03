import React, {useState} from "react";
import axios from "axios";


export const AddReportDamageComponent = () => {
    const [formData, setFormData] = useState({
        damageDescription: '',
        dateOfIncident: '',
        placeOfIncident: '',
        driversSurname: '',
        carPlateNumber: ''
    });

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/damages/add-damage', formData);
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
        <div className='add-form-wrapper'>
            <h2>Add damage report</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Damage description<br/>
                    <textarea name="damageDescription" value={formData.damageDescription} onChange={handleChange}/><br/>
                </label>
                <label>
                    Date of incident <br/>
                    <input type="date" name="dateOfIncident" value={formData.dateOfIncident}
                           onChange={handleChange}/><br/>
                </label>
                <label>
                    Place fo incident<br/>
                    <textarea name="placeOfIncident" value={formData.placeOfIncident} onChange={handleChange}/><br/>
                </label>
                <label>
                    Driver surname<br/>
                    <input type="text" name="driversSurname" value={formData.driversSurname}
                           onChange={handleChange}/><br/>
                </label>
                <label>
                    Car plate number<br/>
                    <input type="text" name="carPlateNumber" value={formData.carPlateNumber}
                           onChange={handleChange}/><br/>
                </label>
                <button className="submitBtn" type="submit" onClick={handleChange}>Add new damage report</button>
            </form>
        </div>
    )
};