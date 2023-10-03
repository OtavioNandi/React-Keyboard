import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Keyboard from './Keyboard/Keyboard'

const TextArea = () => {
	const [visibility, setVisibility] = useState(false)
	const [text, setText] = useState('')
	const [paragraph, setParagraph] = useState('')

	useEffect(() => {
		setText(visibility === true ? 'Hide' : 'Reveal')
	}, [visibility])

	const handleOnChange = e => {
		if(e.keyCode === 13 && e.shiftKey === false) {
			e.preventDefault();
			setParagraph(paragraph + (` ${e.target.value}`))
			e.target.value = ''
		}
	}

	return (
		<div className={styles.container}>
			{visibility && (
				<>
					{paragraph.length > 0 ? <p>You said:</p> : <p>Say something...</p>}
					<p className={styles.paragraph}>{paragraph}</p>
					<div className={styles.textButton}>
						<textarea onKeyDown={(e) => handleOnChange(e)} autoFocus></textarea>
						<button onClick={() => setParagraph('')}>Clear</button>
					</div>
				</>
			)}
			<button className={`${styles.botao}`} onClick={() => setVisibility(!visibility)}>{text}</button>
			{visibility && (
				<>
					<br />
					<Keyboard />
				</>
			)}
		</div>
	)
}

export default TextArea
