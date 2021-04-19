import React from 'react';


const Collaborator = props => {

    let trimmedWebsite = "";
    let http = /http:\/\//;
    let https = /https:\/\//;

    if (https.test(props.website)) {
        trimmedWebsite = props.website.split(https)[1];
    } else if (http.test(props.website)) {
        trimmedWebsite = props.website.split(http)[1];
    }

    if (trimmedWebsite[trimmedWebsite.length - 1] == "/") {
        trimmedWebsite = trimmedWebsite.slice(0, trimmedWebsite.length - 1);
    }

    let phone;
    if (props.phone) {
        phone = <React.Fragment>
                    <p class="c-threes-table__phone c-threes-table__detail"><i class="fas fa-phone-square-alt c-threes-table__icon" aria-hidden="true"></i></p>
                    <p class="c-threes-table__phone c-threes-table__detail">
                        {props.phone}
                    </p>
                </React.Fragment>
    }

    let email;
    if (props.email) {
        email = <React.Fragment>
                    <p class="c-threes-table__phone c-threes-table__detail"><i class="fas fa-envelope c-threes-table__icon" aria-hidden="true"></i></p>
                    <p class="c-threes-table__email c-threes-table__detail">
                        {props.email}
                    </p>
                </React.Fragment>
    }

    let website;
    if (props.website) {
        website = <React.Fragment>
                    <p class="c-threes-table__phone c-threes-table__detail"><i class="fas fa-globe c-threes-table__icon" aria-hidden="true"></i></p>
                    <a href={props.website}>
                        <p class="c-threes-table__website c-threes-table__detail">{trimmedWebsite}</p>
                    </a>
                </React.Fragment>
    }

    

    return (
        <React.Fragment>
            <div class="c-threes-table__company">
                <a href="#herbal-apothecary" name="herbal-apothecary" class="c-threes-table__company-name-link">
                    <h4 class="c-threes-table__company-name">
                        {props.name}
                    </h4>
                </a>
                <div class="c-threes-table__company-info">
                    <img class="c-threes-table__logo" src={props.logo} alt="Herbal Apothecary" />
                    <div class="c-threes-table__company-details">
                        {email}
                        {website}
                        {phone}
                    </div>
                </div>
            </div>
            <div class="c-threes-table__cell">
                <h4 class="c-threes-table__cell-mobile-title">Economic</h4>
                {props.economic}
            </div>
            <div class="c-threes-table__cell">
                <h4 class="c-threes-table__cell-mobile-title">Social</h4>
                {props.social}
            </div>
            <div class="c-threes-table__cell">
                <h4 class="c-threes-table__cell-mobile-title">Cultural/Spiritual</h4>
                {props.cultural}
            </div>
        </React.Fragment>
    )
}

export default Collaborator;