import * as React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import * as API from '../services/launches';

export function LaunchDetails() {
    const [launch, setLaunch] = useState({});
    const {launchId}= useParams();

    useEffect(()=> {
        API.getLaunchByFlightNumber(launchId)
            .then(setLaunch)
            .catch(console.log)
    },[launchId]);
    return(
        <div>
            <pre>{JSON.stringify(launch)}</pre>
        </div>
    )
}

//Api: {JSON.stringify(launch)}