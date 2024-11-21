"use client";

import React from 'react';

export default function ProfileContext() {
    return (
        <>
            <div style={{ display: 'flex', height: '100vh' }}>
                <div style={{ flex: 1, backgroundColor: 'lightblue' }}>
                    {/* Content for the first div */}
                </div>
                <div className="second-div" style={{ flex: 1, backgroundColor: 'lightgreen' }}>
                    {/* Content for the second div */}
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 1200px) {
                    .second-div {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}