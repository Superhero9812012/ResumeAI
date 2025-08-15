import React from 'react';

const Loader = () => {
    return (
        <div className="typing-indicator">
            <div className="typing-circle" />
            <div className="typing-circle" />
            <div className="typing-circle" />
            <div className="typing-shadow" />
            <div className="typing-shadow" />
            <div className="typing-shadow" />
        </div>
    );
}


export default Loader;
