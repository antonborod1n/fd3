import './style.css'

export const AddTask = () => {
    return (
        <div className="add__task">
          <input className="input__task" type="text" placeholder='add new'/>
          <button className="add__btn">Add</button>
        </div>
    )
}