import { useEffect, useState } from 'react';
import './App.css';
import TextArea from './components';
// import DateTime from './DateTime';

function App() {
	const [comments, setComments] = useState([])

	useEffect(() => {
		fetch('http://localhost:5000/comments', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		})
		.then((resp) => resp.json())
		.then((data) => {
			setComments(data)
		})
		.catch((err) => console.log(err))
	}, [])

	return (
		<div className="App">
			<header className="App-header">
				{comments.length > 0 && comments.map((comment) => (
					<p key={comment.id}>{comment.text}</p>
				))}
				<TextArea />
				{/* <DateTime /> */}
			</header>
		</div>
	)
}

export default App;
