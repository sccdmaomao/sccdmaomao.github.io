import styled from '@emotion/styled'
import { heartbeat } from 'animation'

export const StyledContactWrapper = styled('div')({
    width: '100%',
    height: '70vh',
    padding: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

export const StyledSocialIcons = styled('a')({
    fontSize: '5rem',
    margin: '10px',
    color: 'white',
    ':hover': {
        cursor: 'pointer',
        color: '#E8E8E8',
        animation: `${heartbeat} 1.5s ease-in-out infinite both`
    }
})
