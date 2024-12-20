import styled from '@emotion/styled'

const BaseButton = styled.button`
    padding: 0px 24px;
    border-radius: 36px;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    line-height: 29.26px;
    transition: border-color 0.3s ease;
`

export const ClearButton = styled(BaseButton)`
    border: 3px solid rgba(0, 0, 0, 0);
    background-color: transparent;
    color: black;
    &:hover {
        border-color: black;
    }
    &:active {
        color: white;
        background-color: black;
    }
`

export const TrashButton = styled(BaseButton)`
    background-color: transparent;
    border-radius: 4px;
    padding: 4px;
    border: 3px solid transparent;
    color: grey;
    &:hover {
        background-color: #3e3f63;
        border: 3px solid #3e3f63;
        color: white;
    }
    &:active {
        background-color: #6882a8;
        border: 3px solid #4a5d78;
    }
`

export const TaskButton = styled(TrashButton)`
    margin-bottom: 8px;
    margin-left: 8px;
    width: 160px;
    color: white;
    &:hover {
        background-color: #595a80;
        border: 3px solid #595a80;
        color: white;
    }
    &:active {
        background-color: #6882a8;
        border: 3px solid #4a5d78;
    }
`
