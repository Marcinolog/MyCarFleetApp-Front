import React from "react";


export const ReportDamageComponent = () => {
    return (
        <div className="form-wrapper">
            <h2>Add new damage report</h2>
            <form action="/private-use" method="post"/>
            <label>
                Damage<br/>
                <input type="text" name="surname"/><br/>
            </label>
            <label>
                Id samochodu<br/>
                <input type="text" name="carId"/><br/>
            </label>
            <label>
                Date<br/>
                <input type="datetime-local" name="dateOfBorrow"/><br/>
            </label>


            <button className="submitBtn" type="submit">Save damage report</button>
        </div>
    )
}