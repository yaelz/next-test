import React from "react";
import Modal from 'react-modal';

Modal.setAppElement('#my_app_container');

const MovieEntry = ({movie}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
            <div style={{width: '200px', paddingRight: '15px', margin: 'auto', textAlign: 'center', verticalAlign: 'center'}}>
                <img src={movie.image}/>
                <div style={{font: 'normal normal normal 24px/30px Georgia', textTransform: 'titlecase', textAlign: 'start'}} key={`title${movie.id}`}>{`${movie.title} (${movie.released})`}</div>
                <div style={{font: 'normal normal normal 24px/30px Arial', textAlign: 'start'}}>{`${movie.rating}`}</div>
                <button style={{border: '1px solid #000000', borderRadius: '100px', opacity: 1, font: 'normal normal normal 16px/20px Georgia', width: '100%', marginTop: '19px', backgroundColor: 'transparent', textAlign: 'left', padding: '6px 12px'}} onClick={openModal}>Read more</button>
            </div>
        </>
    )
}

export default MovieEntry;