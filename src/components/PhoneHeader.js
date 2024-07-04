import React from 'react';

export default function PhoneHeader(data) {
    const title = data.title;
    return (
        <div className="fixed top-0 left-0 right-0 bg-white border-t border-gray-200 z-10 p-3">
            <div className="flex flex-wrap w-full">
                <div className="w-1/2 text-3xl font-bold">
                    {title}
                </div>
                <div className="w-1/2">
                    
                </div>
            </div>
        </div>
    );
}