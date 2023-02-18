import React, {useEffect, useState} from 'react';
import './App.css';
import {YourCarComponent} from "./components/YourCars/YourCars";
import {DelegationsComponent} from "./components/Delegations/Delegations";
import {PrivateUseComponent} from "./components/PrivateUse/PrivateUse";
import {ReportDamageComponent} from "./components/ReportDamage/ReportDamage";


export function App() {
    const [showYourCarComponent, setShowYourCarComponent] = useState(false);
    const [showDelegationsComponent, setShowDelegationsComponent] = useState(false);
    const [showPrivateUseComponent, setShowPrivateUseComponent] = useState(false);
    const [showReportDamageComponent, setShowReportDamageComponent] = useState(false);

    const handleYourCarComponentClick = () => {
        setShowYourCarComponent(true);
        setShowDelegationsComponent(false);
        setShowPrivateUseComponent(false);
        setShowReportDamageComponent(false);
    };
    const handleDelegationsComponentClick = () => {
        setShowYourCarComponent(false);
        setShowDelegationsComponent(true);
        setShowPrivateUseComponent(false);
        setShowReportDamageComponent(false);
    };
    const handlePrivateUseComponentClick = () => {
        setShowYourCarComponent(false);
        setShowDelegationsComponent(false);
        setShowPrivateUseComponent(true);
        setShowReportDamageComponent(false);
    };
    const handleReportDamageComponentClick = () => {
        setShowYourCarComponent(false);
        setShowDelegationsComponent(false);
        setShowPrivateUseComponent(false);
        setShowReportDamageComponent(true);
    };

    return (
        <>
            <header>
                <h1>Welcome to MyCarFleet</h1>
                    <div className={'btn-container'}>
                        <button>Cars List</button>
                        <button>Delegations list</button>
                        <button>Private use list</button>
                        <button>Damages list</button>
                    </div>
                    <div className={'btn-container'}>
                        <button onClick={handleYourCarComponentClick}>Add new car</button>
                        <button onClick={handleDelegationsComponentClick}>Add new delegation</button>
                        <button onClick={handlePrivateUseComponentClick}>Add new private use</button>
                        <button onClick={handleReportDamageComponentClick}>Report damage</button>
                    </div>
            </header>
            {showYourCarComponent && <YourCarComponent/>}
            {showDelegationsComponent && <DelegationsComponent/>}
            {showPrivateUseComponent && <PrivateUseComponent/>}
            {showReportDamageComponent && <ReportDamageComponent/>}
        </>
    )
};


