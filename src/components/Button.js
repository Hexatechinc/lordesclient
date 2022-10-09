

const Button = ({isPrimary, btnname, className}) => {
    
    return isPrimary ? (
        // style this as a primary button
        <button className={`w-48 h-10 rounded-lg bg-rose-500 text-white text-xl ${className}`}>{btnname}</button>
    ):(
        //style this as a secondary button
        <button>{btnname}</button>
    )
}

export default Button
