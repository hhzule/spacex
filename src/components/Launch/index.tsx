import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql';
import Launch from './Launch';


const LaunchContainer = () => {

const {data, error, loading} = useLaunchesQuery();

if(loading){
    return <div>Embrace yourself</div>
}

if(error || !data){
    return <div>Oopsss, there was an error</div>
}
    return (
        <div>
            <Launch data={data} />
        </div>
    )
}

export default LaunchContainer
