import { H4 } from '@blueprintjs/core'
import React from 'react'
import {
    Circle,
    CircleWrapper,
    StyledPagePanel,
    StyledPortrait,
    StyledTextContainer,
    StyledTextWrapper
} from './BioStyles'

const Bio = () => {
    return (
        <StyledPagePanel>
            <StyledPortrait src="src/assets/portrait.jpg" />
            <StyledTextContainer>
                <StyledTextWrapper>
                    <CircleWrapper>
                        <Circle>
                            <H4>Who</H4>
                        </Circle>
                    </CircleWrapper>
                </StyledTextWrapper>
            </StyledTextContainer>
        </StyledPagePanel>
    )
}

export default Bio
