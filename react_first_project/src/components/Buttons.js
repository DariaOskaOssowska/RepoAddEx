export const Button = ({handleClick, text}) => (
    <button type="button" onClick={() => handleClick()}>{text}</button>
)