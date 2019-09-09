import { H4 } from '@blueprintjs/core'
import { PageSections } from 'components/Nav/Nav'
import React from 'react'
import Typing from 'react-typing-animation'
import {
    CircleWrapper,
    SectionWrapper,
    StyledPagePanel,
    StyledTextWrapper,
    TextContentWrapper
} from 'routes/RouteCommonStyles'
import { bodyText } from 'texts/Biography'
import { Circle, StyledPortrait } from './BioStyles'

const Bio = () => {
    return (
        <StyledPagePanel id={PageSections.BIO}>
            <SectionWrapper>
                <StyledPortrait src="src/assets/portrait.jpg" />
                <TextContentWrapper>
                    <StyledTextWrapper>
                        <CircleWrapper>
                            <Circle>
                                <H4>Who</H4>
                            </Circle>
                        </CircleWrapper>
                        <Typing speed={10}>
                            <span>{bodyText}</span>
                        </Typing>
                    </StyledTextWrapper>
                </TextContentWrapper>
            </SectionWrapper>
        </StyledPagePanel>
    )
}

export default Bio
