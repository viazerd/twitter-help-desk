import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
const ButtonSetUp = ({ brandGroup, btnClassName, prefix }) => {
    return (
        brandGroup.map(brand =>
            <button className={btnClassName}><Link to="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={[`${prefix}`, brand]} /></Link></button>
        )
    )
}
export default ButtonSetUp;