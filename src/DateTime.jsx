import { useState } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date().toLocaleString())

	setInterval(() => {
		setDateTime(new Date().toLocaleString())
	}, 1000)

  return (
    <div>
      <p>{dateTime}</p>
    </div>
  )
}

export default DateTime
