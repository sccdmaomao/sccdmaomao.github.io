import { Text } from '@blueprintjs/core'
import moment from 'moment'
import React from 'react'
import timelines from 'texts/Experiences'
import {
    StyledDescText,
    StyledExtraText,
    StyledListItem,
    StyledTitleText,
    StyledUl,
    TitleWrapper
} from './ExperiencesStyles'

const Experiences = () => {
    return (
        <StyledUl>
            {timelines.map((timeline, index) => (
                <StyledListItem key={`timeline-${index}`}>
                    <TitleWrapper>
                        <StyledTitleText>{timeline.title}</StyledTitleText>
                        <Text>
                            {` ${timeline.dateRange[0].format('MMM YYYY')} - ${
                                timeline.dateRange[1].diff(
                                    moment(),
                                    'months'
                                ) === 0
                                    ? 'Present'
                                    : timeline.dateRange[1].format('MMM YYYY')
                            } (${timeline.dateRange[1].diff(
                                timeline.dateRange[0],
                                'months'
                            )} months)`}
                        </Text>
                    </TitleWrapper>
                    <StyledExtraText>{timeline.company}</StyledExtraText>
                    {timeline.desc.map((text, i) => (
                        <StyledDescText key={`experience-${i}`}>
                            {text}
                        </StyledDescText>
                    ))}
                </StyledListItem>
            ))}
        </StyledUl>
    )
}

export default Experiences
