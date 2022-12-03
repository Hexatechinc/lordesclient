

const Button = ({isPrimary, btnname, className}) => {
    
    return isPrimary ? (
        // style this as a primary button
        <button className="">{btnname}</button>
    ):(
        //style this as a secondary button
        <button className="">{btnname}</button>
    )
}

export default Button
