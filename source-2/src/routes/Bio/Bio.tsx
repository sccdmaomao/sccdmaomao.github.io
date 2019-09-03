import { H4 } from '@blueprintjs/core'
import React from 'react'
import {
    CircleWrapper,
    ContentWrapper,
    StyledPagePanel,
    StyledTextWrapper
} from 'routes/RouteCommonStyles'
import { Circle, StyledPortrait } from './BioStyles'

const Bio = () => {
    return (
        <StyledPagePanel>
            <StyledPortrait src="src/assets/portrait.jpg" />
            <ContentWrapper>
                <StyledTextWrapper>
                    <CircleWrapper>
                        <Circle>
                            <H4>Who</H4>
                        </Circle>
                    </CircleWrapper>
                </StyledTextWrapper>
            </ContentWrapper>
        </StyledPagePanel>
    )
}

export default Bio
