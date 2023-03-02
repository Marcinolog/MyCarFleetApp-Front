import React, {useState} from "react";
import './HeaderComponent.css'
import {AddNewCarComponent} from "../AddNewCar/AddNewCar";
import {AddDelegationComponent} from "../AddDelegation/AddDelegation";
import {AddPrivateUseComponent} from "../AddPrivateUse/AddPrivateUse";
import {AddReportDamageComponent} from "../AddReportDamage/AddReportDamage";
import {CarTableComponent} from "../CarTable/CarTable";
import {DelegationsTableComponent} from "../DelegationsTable/DelegationsTable";
import {PrivateUseTableComponent} from "../PrivateUseTable/PrivateUseTable";
import {DamagesTableComponent} from "../DamagesTable/DamagesTable";


enum ComponentType {
    AddNewCar,
    AddNewDelegation,
    AddPrivateUse,
    AddReportDamage,
    CarList,
    DelegationsList,
    PrivateUseList,
    DamagesList
};

export const HeaderComponent = () => {
    const [showComponent, setShowComponent] = useState<ComponentType | null>(null);

    const handleButtonClick = (componentType: ComponentType) => {
        setShowComponent(componentType);
    };

    return (
        <>
            <header>
                <h1>MyCarFleet</h1>
                <div className={'btn-container'}>
                    <button onClick={() => handleButtonClick(ComponentType.CarList)}>Cars List</button>
                    <button onClick={() => handleButtonClick(ComponentType.DelegationsList)}>Delegations list</button>
                    <button onClick={() => handleButtonClick(ComponentType.PrivateUseList)}>Private use list</button>
                    <button onClick={() => handleButtonClick(ComponentType.DamagesList)}>Damage list</button>
                </div>
                <div className={'btn-container'}>
                    <button onClick={() => handleButtonClick(ComponentType.AddNewCar)}>Add new car</button>
                    <button onClick={() => handleButtonClick(ComponentType.AddNewDelegation)}>Add new delegation
                    </button>
                    <button onClick={() => handleButtonClick(ComponentType.AddPrivateUse)}>Add new private use</button>
                    <button onClick={() => handleButtonClick(ComponentType.AddReportDamage)}>Report damage</button>
                </div>
            </header>
            {showComponent === ComponentType.AddNewCar && <AddNewCarComponent/>}
            {showComponent === ComponentType.AddNewDelegation && <AddDelegationComponent/>}
            {showComponent === ComponentType.AddPrivateUse && <AddPrivateUseComponent/>}
            {showComponent === ComponentType.AddReportDamage && <AddReportDamageComponent/>}
            {showComponent === ComponentType.CarList && <CarTableComponent/>}
            {showComponent === ComponentType.DelegationsList && <DelegationsTableComponent/>}
            {showComponent === ComponentType.PrivateUseList && <PrivateUseTableComponent/>}
            {showComponent === ComponentType.DamagesList && <DamagesTableComponent/>}
        </>
    )
};

