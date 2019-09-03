import React from 'react'
import { StyledPagePanel } from 'routes/RouteCommonStyles'
import { StyledContactWrapper } from './ContactStyles'

const Contact = () => {
    return (
        <StyledPagePanel>
            <StyledContactWrapper>
                <div>
                    Connect
                    <i className="fab fa-github-square" />
                    <i className="fab fa-linkedin" />
                </div>
            </StyledContactWrapper>
        </StyledPagePanel>
    )
}

export default Contact
