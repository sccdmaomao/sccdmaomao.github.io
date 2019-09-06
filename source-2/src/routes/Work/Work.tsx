import Experiences from 'components/Experiences'
import { PageSections } from 'components/Nav/Nav'
import React from 'react'
import {
    CircleWrapper,
    ContentWrapper,
    StyledPagePanel,
    StyledTextWrapper
} from 'routes/RouteCommonStyles'
import { StyledImg } from './WorkStyles'

const Work = () => {
    return (
        <StyledPagePanel id={PageSections.WORK}>
            <ContentWrapper>
                <StyledTextWrapper>
                    <CircleWrapper>
                        <StyledImg src="src/assets/work.png" />
                    </CircleWrapper>
                    <Experiences />
                </StyledTextWrapper>
            </ContentWrapper>
        </StyledPagePanel>
    )
}

export default Work
