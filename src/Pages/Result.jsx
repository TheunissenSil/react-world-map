import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import WorldApi from '../components/Search/WorldApi';

const Result = () => {
    const location = useLocation();
    const country = new URLSearchParams(location.search).get('country');

    return (
        <div>
            <WorldApi country={country} />
        </div>
    );
}

export default Result;