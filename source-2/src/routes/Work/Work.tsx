import Experiences from 'components/Experiences'
import React from 'react'
import {
    CircleWrapper,
    ContentWrapper,
    StyledImg,
    StyledPagePanel,
    StyledTextWrapper
} from './WorkStyles'

const Work = () => {
    return (
        <StyledPagePanel>
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
