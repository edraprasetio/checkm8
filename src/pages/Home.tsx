import { useRef, useState } from 'react'
import { Card } from '../components/atoms/card'
import { Id, Task } from '../types'
import { H2, H6 } from '../styles/typography'
import TaskInput, { StyledButton } from '../components/atoms/taskInput'

import styled from '@emotion/styled'
import { ClearButton } from '../components/atoms/button'
import { Checkbox } from '../components/atoms/checkbox'
import { TrashIcon } from '../assets/icons/TrashIcon'

const HomeBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #e9ecf2;
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    align-items: center;
`

const TaskItem = styled.p`
    display: flex;
    height: 32px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const CheckContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`

const EditInput = styled.input`
    border: solid 2px transparent;
    border-radius: 32px;
    font-family: Inter-Regular;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    line-height: 1.6;
    &:focus {
        outline: none;
    }
`

const DeleteButton = (props: any) => {
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
                <TrashIcon />
            </StyledButton>
        </div>
    )
}

export const Home = () => {
    const [editMode, setEditMode] = useState<Id | null>(null)
    const [mouseIsOver, setMouseIsOver] = useState<Id | null>(null)
    const [newTaskContent, setNewTaskContent] = useState<string>('')
    const [tasks, setTasks] = useState<Task[]>([])

    function createTask() {
        if (newTaskContent.trim() === '') return

        const newTask: Task = {
            id: generateId(),
            content: newTaskContent,
        }

        setTasks([...tasks, newTask])
        setNewTaskContent('')
    }

    function deleteTask(id: Id) {
        const newTasks = tasks.filter((task) => task.id !== id)
        setTasks(newTasks)
    }

    function generateId() {
        return Math.floor(Math.random() * 10001)
    }

    function updateTask(id: Id, content: string) {
        const newTasks = tasks.map((task) => {
            if (task.id !== id) return task
            return { ...task, content }
        })

        if (content === '') {
            deleteTask(id)
        }

        setTasks(newTasks)
    }

    const isChecked = useRef(false)

    return (
        <div style={{ backgroundColor: '#e9ecf2' }}>
            <HomeBackground>
                <Card>
                    <div style={{ display: 'flex', marginTop: '16px', justifyContent: 'center' }}>
                        <H2>CheckM8</H2>
                    </div>
                    <ul>
                        {tasks.map((task) => (
                            <TaskItem key={task.id} onMouseEnter={() => setMouseIsOver(task.id)} onMouseLeave={() => setMouseIsOver(null)}>
                                <CheckContainer>
                                    <Checkbox onClick={(value: boolean) => (isChecked.current = value)} />
                                    <H6 onClick={() => setEditMode(task.id)}>
                                        {editMode !== task.id && task.content}
                                        {editMode === task.id && (
                                            <EditInput
                                                value={task.content}
                                                onChange={(e) => {
                                                    updateTask(task.id, e.target.value)
                                                }}
                                                autoFocus
                                                onBlur={() => {
                                                    setEditMode(null)
                                                }}
                                                onKeyDown={(e) => {
                                                    if (e.key !== 'Enter') return
                                                    setEditMode(null)
                                                }}
                                            />
                                        )}
                                    </H6>
                                </CheckContainer>
                                {mouseIsOver === task.id && (
                                    <DeleteButton onClick={() => deleteTask(task.id)} />
                                    // <ClearButton onClick={() => deleteTask(task.id)}>
                                    //     <H6>Delete</H6>
                                    // </ClearButton>
                                )}
                            </TaskItem>
                        ))}
                    </ul>
                </Card>
            </HomeBackground>
            <TaskInput newTaskContent={newTaskContent} onInputChange={(e) => setNewTaskContent(e.target.value)} onAddTask={createTask} />
        </div>
    )
}
