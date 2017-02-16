import React from 'react';

export default function Property(props) {
    const {property} = props;
    return (
        <tr>
            <td>{property.propertyType.name}</td>
            <td>{property.price}</td>
            <td>{property.builtYear}</td>
            <td>{property.totalNumberOfRooms}</td>
            <td>{property.zipCode.zipCodeId}, {property.zipCode.name}</td>
            <td>
                <span>Details</span>
            </td>
        </tr>
    )
}