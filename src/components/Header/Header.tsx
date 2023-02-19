import React, {useState} from "react";
import './Header.css'
import {AddNewCarComponent} from "../AddNewCar/AddNewCar";
import {AddDelegationComponent} from "../AddDelegation/AddDelegation";
import {AddPrivateUseComponent} from "../AddPrivateUse/AddPrivateUse";
import {AddReportDamageComponent} from "../AddReportDamage/AddReportDamage";
import {CarListComponent} from "../CarList/CarList";

enum ComponentType {
    AddNewCar,
    AddNewDelegation,
    AddPrivateUse,
    AddReportDamage,
    CarList
}

export const Header = () => {
    const [showComponent, setShowComponent] = useState<ComponentType | null>(null);

    const handleButtonClick = (componentType: ComponentType) => {
        setShowComponent(componentType);
    };
    return (
        <>
        <header>
            <h1>Welcome to MyCarFleet</h1>
            <div className={'btn-container'}>
                <button onClick={() => handleButtonClick(ComponentType.CarList)}>Cars List</button>
                {/*<button onClick={() => handleButtonClick(ComponentType.Delegations)}>Delegations list</button>*/}
                {/*<button onClick={() => handleButtonClick(ComponentType.PrivateUse)}>Private use list</button>*/}
                {/*<button onClick={() => handleButtonClick(ComponentType.ReportDamage)}>Damage list</button>*/}
            </div>
            <div className={'btn-container'}>
                <button onClick={() => handleButtonClick(ComponentType.AddNewCar)}>Add new car</button>
                <button onClick={() => handleButtonClick(ComponentType.AddNewDelegation)}>Add new delegation</button>
                <button onClick={() => handleButtonClick(ComponentType.AddPrivateUse)}>Add new private use</button>
                <button onClick={() => handleButtonClick(ComponentType.AddReportDamage)}>Report damage</button>
            </div>

        </header>
            {showComponent === ComponentType.CarList && <CarListComponent/>}
            {showComponent === ComponentType.AddNewCar && <AddNewCarComponent/>}
            {showComponent === ComponentType.AddNewDelegation && <AddDelegationComponent/>}
            {showComponent === ComponentType.AddPrivateUse && <AddPrivateUseComponent/>}
            {showComponent === ComponentType.AddReportDamage && <AddReportDamageComponent/>}
        </>

    )

}
