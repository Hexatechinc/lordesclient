import {useState} from 'react'

const Modal = ({children, visible}) => {
    const [isVisible, setIsVisible] = useState(false)

    return(
        <div>
            {children}
        </div>
    )
}


export default Modal