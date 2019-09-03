import styled from '@emotion/styled'
import React from 'react'
import Bio from './Bio'
import Contact from './Contact'
import Work from './Work'

const PaddedDiv = styled('div')({
    paddingTop: '50px'
})

const RoutesWrapper: React.FunctionComponent<{}> = () => {
    return (
        <PaddedDiv>
            <Bio />
            <Work />
            <Contact />
        </PaddedDiv>
    )
}

export default RoutesWrapper
