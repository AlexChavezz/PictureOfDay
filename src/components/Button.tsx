

interface ButtonProps {
    value: string,
    onClick: () => void 
    className: string, 
    disabled?: boolean
}

export const Button = ({ value, onClick, className, disabled = false }: ButtonProps) => {
    return (
        <button
            className={ !disabled? className : "disabled-style" }
            onClick={ onClick }
            disabled={disabled}
        >
            { value }
        </button>
    );
}
