import { CreateTodo } from './CrateTodo'
import { type TodoTitle } from '../types'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>todo
        <img style={{ width: '60px', height: 'auto' }} src="https://en.wikipedia.org/wiki/TypeScript#/media/File:Typescript.svg" />
      </h1>
    <CreateTodo saveTodo={onAddTodo}/>
    </header>
  )
}
