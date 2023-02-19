import React, {useState} from "react";
import {AddNewCarComponent} from "../AddNewCar/AddNewCar";
import {AddDelegationComponent} from "../AddDelegation/AddDelegation";
import {AddPrivateUseComponent} from "../AddPrivateUse/AddPrivateUse";
import {AddReportDamageComponent} from "../AddReportDamage/AddReportDamage";

enum ComponentType {
    AddNewCar,
    AddNewDelegation,
    AddPrivateUse,
    AddReportDamage,
}

export const ShowAddComponents = () => {
    const [showComponent, setShowComponent] = useState<ComponentType | null>(null);

    const handleButtonClick = (componentType: ComponentType) => {
        setShowComponent(componentType);
    };

    return (
        <>
            {showComponent === ComponentType.AddNewCar && <AddNewCarComponent/>}
            {showComponent === ComponentType.AddNewDelegation && <AddDelegationComponent/>}
            {showComponent === ComponentType.AddPrivateUse && <AddPrivateUseComponent/>}
            {showComponent === ComponentType.AddReportDamage && <AddReportDamageComponent/>}
        </>
    );
};