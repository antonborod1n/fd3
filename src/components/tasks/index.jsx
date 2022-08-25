import './style.css'

export const Tasks = () => {
  return (
    <ul className="tasks">
      <li className="task">Task 1
        <div>
          <button className='btn__del'>Delete</button>
          <button className='btn__imp'>!</button>
        </div>
      </li>
      <li className="task">Task 2
        <div>
          <button className='btn__del'>Delete</button>
          <button className='btn__imp'>!</button>
        </div>
      </li>
      <li className="task">Task 3
        <div>
          <button className='btn__del'>Delete</button>
          <button className='btn__imp'>!</button>
        </div>
      </li>
    </ul>
  )
}