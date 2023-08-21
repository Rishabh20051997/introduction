const AnchorLink = ({
    link = '',
    target = '_blank',
    children = null,
    className = ''
}: {
    link: string
    target?: '_blank' | '_top' | '_self' | '_parent',
    className?: string
    children?: ReactNode
}) => {
    return <a href={link} target={target} className={className}>
        {children}
    </a>
}

export default AnchorLink