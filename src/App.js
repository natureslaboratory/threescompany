import React from 'react';
import Collaborator from './components/Collaborator';
import collaboratorData from './CollaboratorData';


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
                />
            )
        })
        return (
            <React.Fragment>
                <div class="c-threes-table__banner">
                    <h3 class="c-section__title">Current Collaborators</h3>
                    <form class="c-threes-table__search-form">
                        <label htmlFor="search" class="c-threes-table__search-label">Search</label>
                        <input type="search" class="c-threes-table__search-box" id="search" onChange={this.handleChange} value={this.state.search} />
                    </form>
                </div>
                <div class="c-threes-table__table">
                    <div class="c-threes-table__heading">
                    </div>
                    <div class="c-threes-table__heading">
                        Economic
                    </div>
                    <div class="c-threes-table__heading">
                        Social
                    </div>
                    <div class="c-threes-table__heading">
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