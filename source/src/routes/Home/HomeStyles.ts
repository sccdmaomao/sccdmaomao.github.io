import styled from '@emotion/styled'
import CollapsibleCard from 'components/CollapsibleCard'

export const StyledCard = styled(CollapsibleCard)({
  marginBottom: '20px',
  '& button': {
    ':hover': {
      backgroundColor: 'inherit !important'
    },
    '& :first-child': {
      position: 'relative',
      top: '-5px'
    }
  }
})
