import React from 'react'
import PropTypes from 'prop-types'
import RepositoryItem from './RepositoryItem'

const Repository = (props) => {
    return props.repos.map ( repos => <RepositoryItem repos={repos} key={repos.id} />)
}

Repository.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default Repository
