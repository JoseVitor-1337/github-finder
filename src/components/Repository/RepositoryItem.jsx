import React from 'react'
import PropTypes from 'prop-types'

const RepositoryItem = (props) => {
    return (
        <div className="card">
            <h3>
                <a href={props.repos.html_url}>{props.repos.name}</a>
            </h3>
        </div>
    )
}

RepositoryItem.propTypes = {
    repos: PropTypes.object.isRequired,
}

export default RepositoryItem
