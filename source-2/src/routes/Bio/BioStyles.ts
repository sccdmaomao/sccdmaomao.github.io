import styled from '@emotion/styled'

export const StyledPagePanel = styled('div')({
    width: '100vw',
    height: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 50px'
})

export const StyledPortrait = styled('img')({
    maxWidth: '100%',
    height: '70vh',
    borderRadius: '50px'
})

export const StyledTextContainer = styled('div')({
    display: 'flex',
    marginLeft: '20px',
    padding: '40px',
    height: '70vh',
    width: '100%',
    borderRadius: '20px',
    backgroundColor: 'white'
})

export const StyledTextWrapper = styled('div')({
    width: '100%'
})

export const CircleWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '-70px'
})
export const Circle = styled('div')({
    width: '60px',
    height: '60px',
    background: '#b3d7ff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    h4: {
        margin: '0'
    }
})
