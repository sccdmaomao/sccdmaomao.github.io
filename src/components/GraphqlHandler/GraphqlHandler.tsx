import React from 'react'
import { Redirect } from 'react-router-dom'
const queryHandler = (Component, withData) => {
  const ComponentWithData = withData(({ loading, error, ...rest }) => {
    if (loading) {
      return <div>Loading</div>
    }
    if (error) {
      if (error.networkError.statusCode === 401) {
        return (
          <Redirect
            to={{
              pathname: '/login'
            }}
          />
        )
      }
      return <h1>Error</h1>
    }
    return <Component {...rest} />
  })
  return ComponentWithData
}

export default queryHandler
