import React, {useState} from "react";
import axios from "axios";


export const AddNewCarComponent = () => {
    const [formData, setFormData] = useState({
        carId: '',
        plateNumber: '',
        brand: '',
        model: '',
        productionYear: '',
        engine: ''
    });

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/cars/add-car', formData);
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

    }

    return (
        <div className='form-wrapper'>
            <h2>Add new car</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Plate number<br/>
                    <input type="text" name="plateNumber" value={formData.plateNumber} onChange={handleChange}/><br/>
                </label>
                <label>
                    Brand <br/>
                    <input type="text" name="brand" value={formData.brand} onChange={handleChange}/><br/>
                </label>
                <label>
                    Model<br/>
                    <input type="text" name="model" value={formData.model} onChange={handleChange}/><br/>
                </label>
                <label>
                    Production year<br/>
                    <input type="text" name="productionYear" value={formData.productionYear} onChange={handleChange}/><br/>
                </label>
                <label>
                    Engine<br/>
                    <input type="text" name="engine" value={formData.engine} onChange={handleChange}/><br/>
                </label>
                <button className="submitBtn" type="submit" onClick={handleChange}>Add new car</button>
            </form>
        </div>
    )
}




