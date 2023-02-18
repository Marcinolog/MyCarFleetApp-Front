import React from "react";

export const DelegationsComponent = () => {


    return (
        <div className='form-wrapper'>
            <h2>Add delegation</h2>
            <form action="/delegations/" method="post"/>
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

            <button className="submitBtn" type="submit">Zapisz wyjazd serwisowy w bazie danych</button>
        </div>
    )
}







