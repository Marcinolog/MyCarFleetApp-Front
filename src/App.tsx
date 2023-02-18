import React, {useState} from 'react';
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
                <button className="your-cars" onClick={handleYourCarComponentClick}>Add new car</button>
                <button className="delegations" onClick={handleDelegationsComponentClick}>Add new delegation</button>
                <button className="private-use" onClick={handlePrivateUseComponentClick}>Add new private use</button>
                <button className="report-damage" onClick={handleReportDamageComponentClick}>Report damage</button>
            </header>
            {showYourCarComponent && <YourCarComponent/>}
            {showDelegationsComponent && <DelegationsComponent/>}
            {showPrivateUseComponent && <PrivateUseComponent/>}
            {showReportDamageComponent && <ReportDamageComponent/>}
        </>
    )
};


