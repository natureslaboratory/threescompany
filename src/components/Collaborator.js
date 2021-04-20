import React from 'react';
import {trimURL, formatNameForLink} from '../helperFunctions';

const Collaborator = props => {

    let trimmedWebsite = trimURL(props.website);

    let phone;
    if (props.phone) {
        phone = <React.Fragment>
                    <p className="c-threes-table__phone c-threes-table__detail"><i className="fas fa-phone-square-alt c-threes-table__icon" aria-hidden="true"></i></p>
                    <p className="c-threes-table__phone c-threes-table__detail">
                        {props.phone}
                    </p>
                </React.Fragment>
    }

    let email;
    if (props.email) {
        email = <React.Fragment>
                    <p className="c-threes-table__phone c-threes-table__detail"><i className="fas fa-envelope c-threes-table__icon" aria-hidden="true"></i></p>
                    <p className="c-threes-table__email c-threes-table__detail">
                        {props.email}
                    </p>
                </React.Fragment>
    }

    let website;
    if (props.website) {
        website = <React.Fragment>
                    <p className="c-threes-table__phone c-threes-table__detail"><i className="fas fa-globe c-threes-table__icon" aria-hidden="true"></i></p>
                    <a href={props.website}>
                        <p className="c-threes-table__website c-threes-table__detail">{trimmedWebsite}</p>
                    </a>
                </React.Fragment>
    }

    let formattedName = formatNameForLink(props.name);

    return (
        <div class="c-threes-table__row">
            <div className="c-threes-table__company">
                <a href={`#${formattedName}`} name={formattedName} className="c-threes-table__company-name-link">
                    <h3 className="c-threes-table__company-name">
                        {props.name}
                    </h3>
                </a>
                <div className="c-threes-table__company-info">
                    <div className="c-threes-table__company-details">
                        {website}
                        {email}
                        {phone}
                    </div>
                    <img className="c-threes-table__logo" src={props.logo} alt="Herbal Apothecary" />
                </div>
            </div>
            <div className="c-threes-table__cell">
                <h4 className="c-threes-table__cell-mobile-title">Economic/Environmental</h4>
                {props.economic}
            </div>
            <div className="c-threes-table__cell">
                <h4 className="c-threes-table__cell-mobile-title">Social/Community</h4>
                {props.social}
            </div>
            <div className="c-threes-table__cell">
                <h4 className="c-threes-table__cell-mobile-title">Cultural/Spiritual</h4>
                {props.cultural}
            </div>
        </div>
    )
}

export default Collaborator;