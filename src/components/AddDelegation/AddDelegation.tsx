import React from "react";

export const AddDelegationComponent = () => {
    return (
        <div className='form-wrapper'>
            <h2>Add delegation</h2>
            <form action="/delegations/add-delegation" method="post"/>
            <label>
                Delegation place<br/>
                <input type="text" name="serviceLocation"/><br/>
            </label>
            <label>
                Servicers <br/>
                <input type="text" name="servicers"/><br/>
            </label>
            <label>
                Car ID<br/>
                <input type="text" name="carId"/><br/>
            </label>
            <label>
                Delegation start date<br/>
                <input type="date" name="dateOfStart"/><br/>
            </label>
            <label>
                Delegation end date<br/>
                <input type="date" name="dateOfStart"/><br/>
            </label>
            <button className="submitBtn" type="submit">Add delegation</button>
        </div>
    )
}







