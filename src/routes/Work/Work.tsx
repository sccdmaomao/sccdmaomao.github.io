import Experiences from 'components/Experiences'
import { PageSections } from 'components/Nav/Nav'
import React from 'react'
import {
    CircleWrapper,
    SectionWrapper,
    StyledPagePanel,
    StyledTextWrapper,
    TextContentWrapper
} from 'routes/RouteCommonStyles'
import { StyledImg } from './WorkStyles'

const Work: React.FC = () => {
    return (
        <StyledPagePanel id={PageSections.WORK}>
            <SectionWrapper>
                <TextContentWrapper>
                    <StyledTextWrapper>
                        <CircleWrapper>
                            <StyledImg src="src/assets/work.png" />
                        </CircleWrapper>
                        <Experiences />
                    </StyledTextWrapper>
                </TextContentWrapper>
            </SectionWrapper>
        </StyledPagePanel>
    )
}

export default Work
