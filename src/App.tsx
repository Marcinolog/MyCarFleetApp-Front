import React, {useEffect, useState} from 'react';
import './App.css';
import {AddNewCarComponent} from "./components/AddNewCar/AddNewCar";
import {AddDelegationComponent} from "./components/AddDelegation/AddDelegation";
import {AddPrivateUseComponent} from "./components/AddPrivateUse/AddPrivateUse";
import {AddReportDamageComponent} from "./components/AddReportDamage/AddReportDamage";


// export function App() {
//     const [showYourCarComponent, setShowYourCarComponent] = useState(false);
//     const [showDelegationsComponent, setShowDelegationsComponent] = useState(false);
//     const [showPrivateUseComponent, setShowPrivateUseComponent] = useState(false);
//     const [showReportDamageComponent, setShowReportDamageComponent] = useState(false);
//
//     const handleYourCarComponentClick = () => {
//         setShowYourCarComponent(true);
//         setShowDelegationsComponent(false);
//         setShowPrivateUseComponent(false);
//         setShowReportDamageComponent(false);
//     };
//     const handleDelegationsComponentClick = () => {
//         setShowYourCarComponent(false);
//         setShowDelegationsComponent(true);
//         setShowPrivateUseComponent(false);
//         setShowReportDamageComponent(false);
//     };
//     const handlePrivateUseComponentClick = () => {
//         setShowYourCarComponent(false);
//         setShowDelegationsComponent(false);
//         setShowPrivateUseComponent(true);
//         setShowReportDamageComponent(false);
//     };
//     const handleReportDamageComponentClick = () => {
//         setShowYourCarComponent(false);
//         setShowDelegationsComponent(false);
//         setShowPrivateUseComponent(false);
//         setShowReportDamageComponent(true);
//     };
//
//     return (
//         <>
//             <header>
//                 <h1>Welcome to MyCarFleet</h1>
//                     <div className={'btn-container'}>
//                         <button>Cars List</button>
//                         <button>AddDelegation list</button>
//                         <button>Private use list</button>
//                         <button>Damages list</button>
//                     </div>
//                     <div className={'btn-container'}>
//                         <button onClick={handleYourCarComponentClick}>Add new car</button>
//                         <button onClick={handleDelegationsComponentClick}>Add new delegation</button>
//                         <button onClick={handlePrivateUseComponentClick}>Add new private use</button>
//                         <button onClick={handleReportDamageComponentClick}>Report damage</button>
//                     </div>
//             </header>
//             {showYourCarComponent && <YourCarComponent/>}
//             {showDelegationsComponent && <DelegationsComponent/>}
//             {showPrivateUseComponent && <PrivateUseComponent/>}
//             {showReportDamageComponent && <ReportDamageComponent/>}
//         </>
//     )
// };

enum ComponentType {
    AddNewCar,
    AddNewDelegation,
    AddPrivateUse,
    AddReportDamage,
}

export const App = () => {
    const [showComponent, setShowComponent] = useState<ComponentType | null>(null);

    const handleButtonClick = (componentType: ComponentType) => {
        setShowComponent(componentType);
    };

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/car-info/cars")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])


    return (
        <>
            <header>
                <h1>Welcome to MyCarFleet</h1>
                <div className={'btn-container'}>
                    <button onClick={() => handleButtonClick(ComponentType.AddNewCar)}>Add new car</button>
                    <button onClick={() => handleButtonClick(ComponentType.AddNewDelegation)}>Add new delegation
                    </button>
                    <button onClick={() => handleButtonClick(ComponentType.AddPrivateUse)}>Add new private use</button>
                    <button onClick={() => handleButtonClick(ComponentType.AddReportDamage)}>Report damage</button>
                </div>
                <div className={'btn-container'}>
                    {/*<button onClick={() => handleButtonClick(ComponentType.YourCar)}>Cars List</button>*/}
                    {/*<button onClick={() => handleButtonClick(ComponentType.Delegations)}>Delegations list</button>*/}
                    {/*<button onClick={() => handleButtonClick(ComponentType.PrivateUse)}>Private use list</button>*/}
                    {/*<button onClick={() => handleButtonClick(ComponentType.ReportDamage)}>Damage list</button>*/}
                </div>

            </header>
            {showComponent === ComponentType.AddNewCar && <AddNewCarComponent/>}
            {showComponent === ComponentType.AddNewDelegation && <AddDelegationComponent/>}
            {showComponent === ComponentType.AddPrivateUse && <AddPrivateUseComponent/>}
            {showComponent === ComponentType.AddReportDamage && <AddReportDamageComponent/>}
            <div>
                {data.map((d: any) => (
                    <div key={d.id}>{d.plateNumber}</div>
                ))}
            </div>
            <div>
                {data.map((d: any) => (
                    <div key={d.id}>{d.brand}</div>
                ))}
            </div>
            <div>
                {data.map((d: any) => (
                    <div key={d.id}>{d.model}</div>
                ))}
            </div>
            <div>
                {data.map((d: any) => (
                    <div key={d.id}>{d.productionYear}</div>
                ))}
            </div>
            <div>
                {data.map((d: any) => (
                    <div key={d.id}>{d.engine}</div>
                ))}
            </div>
        </>
    );
};











