import React, {useState} from "react";
import axios from "axios";


export const AddPrivateUseComponent = () => {
    const [formData, setFormData] = useState({
        surname: '',
        carPlateNumber: '',
        dateOfBorrow: '',
        dateOfReturn: ''
    });

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/private-uses/add-private-use', formData);
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
            <h2>Add private use</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Worker name<br/>
                    <input type="text" name="surname" value={formData.surname} onChange={handleChange}/><br/>
                </label>
                <label>
                    Car plate number<br/>
                    <input type="text" name="carPlateNumber" value={formData.carPlateNumber}
                           onChange={handleChange}/><br/>
                </label>
                <label>
                    Date of borrow<br/>
                    <input type="date" name="dateOfBorrow" value={formData.dateOfBorrow} onChange={handleChange}/><br/>
                </label>
                <label>
                    Date of return<br/>
                    <input type="date" name="dateOfReturn" value={formData.dateOfReturn} onChange={handleChange}/><br/>
                </label>
                <button className="submitBtn" type="submit" onClick={handleChange}>Add new private use</button>
            </form>
        </div>
    )
};