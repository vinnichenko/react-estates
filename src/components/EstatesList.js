import React from 'react';
import Property from '../components/Property';

export default function EstatesList(props) {
    const {estates} = props;
    const estateElements = estates.map(
        property => <Property key = {property.propertyId} property = {property} />);
    return (
        <div>
            <h2>Estates list</h2>
            <table>
                <thead>
                    <tr>
                        <th>Property type</th>
                        <th>Price</th>
                        <th>Built year</th>
                        <th>Number of rooms</th>
                        <th>Zip code</th>
                        <th>Get details</th>
                    </tr>
                </thead>
                <tbody>
                    {estateElements}
                </tbody>
            </table>
        </div>
    )
}