import React from 'react';
import {formatNameForLink} from '../helperFunctions';

const Icon = props => {
    console.log(props);
    return (
        <a href={props.link ? props.link : `/collaborators#${formatNameForLink(props.name)}`} className="c-company__logo-wrapper">
            <img className="c-company__logo" src={props.logo} alt="Jack Barber" />
        </a>
    )
}

export default Icon;