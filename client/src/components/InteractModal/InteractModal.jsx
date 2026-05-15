import "./InteractModal.css"
import AddModal from "../AddModal/AddModal"

const InteractModal = ({ handleClose, isOpen }) => {
	return (
		<div className='modal-overlay' onClick={handleClose}>
			<div className='modal-window' onClick={e => e.stopPropagation()}>
				{isOpen === "add" ? <AddModal handleClose={handleClose} /> : "false"}
			</div>
		</div>
	)
}

export default InteractModal
