"use client";

import React from 'react';

export default function ProfileContext() {
    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-red-400 p-4">
                <h2>Get to know me</h2>
                <h2>Your Rentereer link</h2>
                
            </div>
            <div className="flex-1 bg-green-500 p-4 hidden xl:block">
                {/* Content for the second div */}
            </div>
        </div>
    );
}
