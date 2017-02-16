import React from 'react';
import EstateList from '../components/EstatesList'

export default function Estates(props) {
    const {data} = props;
    return (
        <div>
            <h1>Estates app</h1>
            <EstateList estates={data} />
        </div>
    )
}