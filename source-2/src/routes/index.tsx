import { Divider } from '@blueprintjs/core'
import styled from '@emotion/styled'
import React from 'react'
import Bio from './Bio'
import Contact from './Contact'

const PaddedDiv = styled('div')({
    paddingTop: '50px'
})

const StyledDivider = styled(Divider)({})

const RoutesWrapper: React.FunctionComponent<{}> = () => {
    return (
        <PaddedDiv>
            <Bio />
            <StyledDivider />
            <Contact />
        </PaddedDiv>
    )
}

export default RoutesWrapper
