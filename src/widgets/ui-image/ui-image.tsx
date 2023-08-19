const Image = ({
    image,
    className,
    altName
} : {
    image: any
    className: string
    altName?: string
}) => {
    return <img src={image} className={className} alt={altName} />
}

export default Image