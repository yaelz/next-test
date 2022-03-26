import React from "react";
import Modal from "react-modal";
import DOMPurify from 'dompurify';

Modal.setAppElement('#my_app_container');

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

const MovieModal = ({movie, modalIsOpen, closeModal}) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div style={{display: 'flex', flexDirection: 'row', maxWidth: '900px'}}>
                <img style={{width: '400px', height: '600px'}} src={movie.image}/>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '140px', width: '400px'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{font: 'normal normal bold 36px/42px Arial', textTransform: 'uppercase', width: '300px'}}>{movie.title}</div>
                        <div style={{font: 'normal normal normal 24px/30px Georgia'}}>{movie.runtime}</div>
                        <div style={{font: 'normal normal normal 24px/30px Georgia'}}>{`${movie.rating}/10`}</div>
                        <div style={{font: 'normal normal normal 24px/30px Georgia', width: '300px'}} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(movie.synopsis)}}></div>
                    </div>
                    <div>
                        <button style={{border: '1px solid #000000', borderRadius: '100px', opacity: 1, font: 'normal normal normal 16px/20px Georgia', width: '260px', marginTop: '19px', backgroundColor: 'transparent', textAlign: 'right', padding: '6px 12px'}} onClick={closeModal}>Back to list</button>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default MovieModal;