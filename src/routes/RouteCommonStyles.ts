import styled from '@emotion/styled'

export const StyledPagePanel = styled('div')({
    width: '100vw',
    height: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center'
})

export const SectionWrapper = styled('div')({
    display: 'flex',
    width: '100%',
    margin: '0 10%'
})

export const TextContentWrapper = styled('div')({
    backgroundColor: 'white',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    padding: '40px',
    height: '70vh',
    width: '100%',
    minWidth: '400px'
})

export const CircleWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '-70px'
})

export const StyledTextWrapper = styled('div')({
    width: '100%'
})
