import './index.scss'
import IconRemove from '../../assets/icon-remove.svg'

function Tablet({ text, onClick, removeIcon }) {
  return (
    <button
      type="button"
      className={`Tablet${removeIcon ? ' Tablet--remove-icon' : ''}`}
      onClick={onClick}
    >
      {text}
      {removeIcon && (
        <div className="Tablet__icon">
          <img src={IconRemove} alt="" />
        </div>
      )}
    </button>
  )
}

export default Tablet
