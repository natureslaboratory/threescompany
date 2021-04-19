import React from 'react';
import {formatNameForLink} from '../helperFunctions';

const Icon = props => {
    return (
        <a href={`/collaborators#${formatNameForLink(props.name)}`} className="c-company__logo-wrapper">
            <img className="c-company__logo" src={props.logo} alt="Jack Barber" />
        </a>
    )
}

export default Icon;