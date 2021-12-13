import {useState} from "react";
import '../Component style/Left_bar.css'
import Modal from "./Modal";
function Left_bar() {
    const [modal, setModal] = useState({
        modal1:false,
        modal2:false
    })
    return(
        <div className='Left_bar'>

            <div className='Container_left-button'>
                <Modal
                    title={'Монитор 1'}
                    isOpened = {modal.modal1}
                    onModalClose={() => setModal({...modal, modal1:false})}>
                    <div className='camera_monitor1'>

                    </div>
                </Modal>
                <Modal
                    title={'Заголовок 2'}
                    isOpened = {modal.modal2}
                    onModalClose={() => setModal({...modal, modal2:false})}
                >
                    <p>
                        <br/>На данный момент мы просто
                        <br/>
                        <br/>импортируем все необходимые
                        <br/>
                        <br/>нам ресурсы, инициализируем
                        <br/>
                        <br/>поле ввода и сообщение об ошибке
                        <br/>
                        <br/>и установим значение для этого
                        <br/>
                        <br/>сообщения, если элемент управления
                        <br/>
                        <br/>недействителен, если он должен быть
                        <br/>
                        <br/>проверен и если сделать его активным.

                    </p>


                </Modal>
                <button className='monitors' onClick={()=>setModal({...modal, modal1:true})}>Монитор 1</button>
                <button className='monitors' onClick={()=>setModal({...modal, modal2:true})}>Монитор 2</button>






            </div>
        </div>
    );

}
export default Left_bar