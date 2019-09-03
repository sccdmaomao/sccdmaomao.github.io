import { Text } from '@blueprintjs/core'
import styled from '@emotion/styled'

export const StyledListItem = styled('li')`
    margin-bottom: 20px;
`
export const TitleWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
`

export const StyledTitleText = styled(Text)`
    font-weight: bold;
`

export const StyledDescText = styled(Text)``

export const StyledExtraText = styled(Text)`
    color: #5c7080;
`

export const StyledUl = styled('ul')({
  position: 'relative',
  top: '-50px',
  padding: '0',
  margin: '0',
  listStyle: 'square'
})
