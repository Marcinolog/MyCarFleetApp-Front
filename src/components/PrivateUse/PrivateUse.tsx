import React from "react";


export const PrivateUseComponent = () => {
    return (
        <div className="form-wrapper">
            <h2>Add new private use</h2>
            <form action="/private-use" method="post"/>
                <label>
                    Worker name<br/>
                    <input type="text" name="surname"/><br/>
                </label>
                <label>
                    Car ID<br/>
                    <input type="text" name="carId"/><br/>
                </label>
                <label>
                    Borrow date<br/>
                    <input type="datetime-local" name="dateOfBorrow"/><br/>
                </label>
                <label>
                    Return date<br/>
                    <input type="datetime-local" name="dateOfReturn"/><br/>
                </label>

                <button className="submitBtn" type="submit">Zapisz wypożyczenie prywatne w bazie danych</button>
        </div>
    )
}