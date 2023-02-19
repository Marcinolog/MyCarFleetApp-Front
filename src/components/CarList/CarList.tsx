import React, {useEffect, useState} from "react";
import {CarTableComponent} from "../CatTable/CarTable";

enum ComponentType {
    CarList
}

export const CarListComponent = () => {
    const [showComponent, setShowComponent] = useState<ComponentType | null>(null);

    const handleButtonClick = (componentType: ComponentType) => {
        setShowComponent(componentType);
    };

    return (
        <>
             <CarTableComponent/>
        </>

    );
};