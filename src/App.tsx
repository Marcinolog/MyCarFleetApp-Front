import React, {useEffect, useState} from 'react';
import './App.css';

import {Header} from "./components/Header/Header";
import {ShowAddComponents} from "./components/ShowAddComponents/ShowAddComponents";
import {CarListComponent} from "./components/CarList/CarList";


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



export const App = () => {

    return (
        <>
            <Header/>
            <ShowAddComponents/>
        </>
    );
};











