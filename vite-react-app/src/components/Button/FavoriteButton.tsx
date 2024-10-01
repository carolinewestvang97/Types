export interface ButtonProps{
    onClick: () => void;
}
`const onClick = () => alert("Clicked")`

export const FavoriteButton: React.FC<ButtonProps> = ({onClick}) => {
    return(
        <>
        <button onClick={onClick}>Click me</button>
        </>
    )
}