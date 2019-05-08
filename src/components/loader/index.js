import React from "react";

const Dashboard = () => {
    return (
        <div className="loader d-flex justify-content-center align-items-center">
            <svg className="lds-blocks" width="70px"  height="70px"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <rect x="19" y="19" width="20" height="20" fill="#010101">
                    <animate attributeName="fill" values="#fc0100;#010101;#010101" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0s" calcMode="discrete"></animate>
                </rect>
                <rect x="40" y="19" width="20" height="20" fill="#010101">
                    <animate attributeName="fill" values="#fc0100;#010101;#010101" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.125s" calcMode="discrete"></animate>
                </rect>
                <rect x="61" y="19" width="20" height="20" fill="#010101">
                    <animate attributeName="fill" values="#fc0100;#010101;#010101" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.25s" calcMode="discrete"></animate>
                </rect>
                <rect x="19" y="40" width="20" height="20" fill="#010101">
                    <animate attributeName="fill" values="#fc0100;#010101;#010101" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.875s" calcMode="discrete"></animate>
                </rect>
                <rect x="61" y="40" width="20" height="20" fill="#010101">
                    <animate attributeName="fill" values="#fc0100;#010101;#010101" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.375s" calcMode="discrete"></animate>
                </rect>
                <rect x="19" y="61" width="20" height="20" fill="#010101">
                    <animate attributeName="fill" values="#fc0100;#010101;#010101" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.75s" calcMode="discrete"></animate>
                </rect>
                <rect x="40" y="61" width="20" height="20" fill="#010101">
                    <animate attributeName="fill" values="#fc0100;#010101;#010101" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.625s" calcMode="discrete"></animate>
                </rect>
                <rect x="61" y="61" width="20" height="20" fill="#010101">
                    <animate attributeName="fill" values="#fc0100;#010101;#010101" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.5s" calcMode="discrete"></animate>
                </rect>
            </svg>
        </div>
    );  
}

export default Dashboard;