import { PageSections } from 'components/Nav/Nav'
import React from 'react'
import { StyledPagePanel } from 'routes/RouteCommonStyles'
import { StyledContactWrapper, StyledSocialIcons } from './ContactStyles'

const Contact: React.FC = () => {
    return (
        <StyledPagePanel id={PageSections.CONTACT}>
            <StyledContactWrapper>
                <div>
                    <StyledSocialIcons
                        className="fab fa-github-square"
                        href={'https://github.com/sccdmaomao'}
                        target="_blank"
                    />
                    <StyledSocialIcons
                        className="fab fa-linkedin"
                        href={'https://www.linkedin.com/in/guohao-yan/'}
                        target="_blank"
                    />
                </div>
            </StyledContactWrapper>
        </StyledPagePanel>
    )
}

export default Contact
