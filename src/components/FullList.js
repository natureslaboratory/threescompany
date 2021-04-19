import React from 'react';
import Collaborator from './Collaborator';
import collaboratorData from '../CollaboratorData';


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({search: e.target.value});
    }

    render() {
        let filteredCollaborators = collaboratorData.filter(d => {
            let values = Object.values(d);
            let contains = false;
            values.forEach(value => {
                if (value.includes(this.state.search)) {
                    contains = true;
                }
            })

            if (!this.state.search || contains) {
                return true;
            }

            return false;
        }).sort((a, b) => {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        })
        let collaborators = filteredCollaborators.map(cb => {
            return (
                <Collaborator
                    name={cb.name}
                    logo={cb.logo}
                    email={cb.email}
                    phone={cb.phone}
                    website={cb.website}
                    economic={cb.economic}
                    social={cb.social}
                    cultural={cb.cultural}
                    key={cb.name}
                />
            )
        })
        return (
            <React.Fragment>
                <div className="c-threes-table__banner">
                    <h3 className="c-section__title">Current Collaborators</h3>
                    <form className="c-threes-table__search-form">
                        <label htmlFor="search" className="c-threes-table__search-label">Search</label>
                        <input type="search" className="c-threes-table__search-box" id="search" onChange={this.handleChange} value={this.state.search} />
                    </form>
                </div>
                <div className="c-threes-table__table">
                    <div className="c-threes-table__heading">
                    </div>
                    <div className="c-threes-table__heading">
                        Economic
                    </div>
                    <div className="c-threes-table__heading">
                        Social
                    </div>
                    <div className="c-threes-table__heading">
                        Cultural/Spiritual
                    </div>
                    <React.Fragment>
                        {collaborators}
                    </React.Fragment>
                </div>
            </React.Fragment>
        )
    }
}