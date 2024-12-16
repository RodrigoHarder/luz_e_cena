interface TextoProps{
    children: string
    className?: string
}

const Texto = ({children, className}: TextoProps) =>{
    return(
        <p className={className}>{children}</p>
    )
}

export default Texto;