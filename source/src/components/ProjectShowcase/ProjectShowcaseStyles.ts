import { Tag } from '@blueprintjs/core'
import styled from '@emotion/styled'

export const PreviewImage = styled('img')`
  width: 200px;
  height: 200px;
  border: 1px #cddce8 solid;
  padding: 5px;
  border-radius: 10px;
  margin: 10px 0;

  &:hover {
    cursor: pointer;
  }
`

export const TagsWrapper = styled('div')`
  margin-left: 5px;
`

export const StyledTag = styled(Tag)`
  margin: 10px 10px 0 0;
`
