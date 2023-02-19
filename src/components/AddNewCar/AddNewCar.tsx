import React from "react";

export const AddNewCarComponent = () => {
    return (
        <div className="form-wrapper">
            <h2>Add new car</h2>
            <form action="/car-info/add-car" method="post">
                <label>
                    Plate number<br/>
                    <input type="text" name="plateNumber"/><br/>
                </label>
                <label>
                    Brand<br/>
                    <input type="text" name="brand"/><br/>
                </label>
                <label>
                    Model<br/>
                    <input type="text" name="model"/><br/>
                </label>
                <label>
                    Year of production<br/>
                    <input type="number" name="productionYear"/><br/>
                </label>
                <label>
                    Engine<br/>
                    <input type="text" name="engine"/><br/>
                </label>
                <button className="submitBtn" type="submit">Save new car</button>
            </form>
        </div>
    )
}