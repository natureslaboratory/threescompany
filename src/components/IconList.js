import React from 'react';
import Icon from './Icon';
import collaboratorData from '../CollaboratorData';

export default class IconList extends React.Component {
    render() {
        let collaborators = collaboratorData.map(cb => {
            return (
                <Icon
                    name={cb.name}
                    logo={cb.logo}
                    key={cb.name}
                />
            )
        })
        return (
            <React.Fragment>
                <h3>
                    Our Collaborators
                </h3>
                <div className="c-companies">
                    {collaborators}
                </div>
            </React.Fragment>
        )
    }
}

