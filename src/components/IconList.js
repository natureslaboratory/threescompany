import React from 'react';
import Icon from './Icon';
import collaboratorData from '../CollaboratorData';

export default class IconList extends React.Component {
    render() {
        let collaborators = collaboratorData.map(cb => {
            const linkToCollaborators = (cb.cultural && cb.social && cb.economic) ? true : false;
            console.log(linkToCollaborators, cb.website);
            return (
                <Icon
                    name={cb.name}
                    logo={cb.logo}
                    key={cb.name}
                    link={!linkToCollaborators ? cb.website : null}
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

