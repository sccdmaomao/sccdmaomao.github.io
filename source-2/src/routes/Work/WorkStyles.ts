import styled from '@emotion/styled'

export const StyledPagePanel = styled('div')({
    width: '100vw',
    height: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 50px'
})

export const StyledImg = styled('img')({
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#b3d7ff'
})

export const ContentWrapper = styled('div')({
    backgroundColor: 'white',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    padding: '40px',
    height: '70vh',
    width: '100%'
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
