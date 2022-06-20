import './Main.css'
import Todos from '../features/todos/Todos'
import Alert from '../features/alert/Alert'
import Form from '../features/form/Form'
import { useSelector } from 'react-redux'
import { selectMessage } from '../features/alert/alertSlice'
const Main = () => {
	const alertMessage = useSelector(selectMessage)
	return (
		<div className="todo">
			<div className="todoContainer">
				{alertMessage ? <Alert /> : ''}
				<h1 className="todoTitle">grocery bud</h1>
				<Form />
				<Todos />
			</div>
		</div>
	)
}
export default Main
