import '../Component style/Modal.css'
const Modal = props =>{

    return(
   <div className={`modal_wrapper ${props.isOpened ? 'open' : 'close' }`} style={{ ...props.style}}>
       <div className='modal_body'>
           <div className='modal_close' onClick={props.onModalClose}>&#8592;</div>
               <p>{props.title}</p>
               {props.children}


       </div>
   </div>

    );


}
export default Modal