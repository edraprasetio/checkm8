import styled from '@emotion/styled'
import React from 'react'
import { PlusIcon } from '../../assets/icons/PlusIcon'

const StickyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: sticky;
    bottom: 0;
    z-index: 10;
`
const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgb(255, 255, 255);
    padding: 64px 64px;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    justify-content: center;
    gap: 16px;
    box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, 0.8);
`

const StyledInput = styled.input`
    border: solid 2px rgb(143, 143, 143);
    border-radius: 32px;
    padding: 8px 24px;
    font-family: Inter-Regular;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.6;
    &:focus {
        border: solid 2px rgb(70, 130, 180);
        outline: none;
    }
`

export const StyledButton = styled.div`
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    border-radius: 32px;
    margin-right: 8px;
    border: solid 2px rgb(143, 143, 143);
    &:hover {
        background-color: rgb(219, 219, 219);
    }
    &:active {
        background-color: rgb(180, 180, 180);
    }
`

interface Props {
    newTaskContent: string
    onAddTask: () => void
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AddButton = (props: any) => {
    return (
        <div>
            <StyledButton
                onClick={props.onClick}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <PlusIcon />
            </StyledButton>
        </div>
    )
}

export default function TaskInput({ newTaskContent, onAddTask, onInputChange }: Props) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onAddTask()
        }
    }

    return (
        <StickyContainer>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <MainContainer>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <StyledInput type='text' placeholder='Add a new task...' value={newTaskContent} onChange={onInputChange} onKeyDown={handleKeyDown} />
                        <AddButton onClick={onAddTask} />
                    </div>
                </MainContainer>
            </div>
        </StickyContainer>
    )
}
