import React from 'react';

export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button style={{ backgroundColor: 'blue', color: 'white' }}>{children} </button>
    )
}