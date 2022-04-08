import React from "react";


interface FormProps {
    onSubmit: (e: React.FormEvent) => void
    inputClassName: string,
}

export function Form({ onSubmit, inputClassName }: FormProps) {
    return (
        <form
            onSubmit={(e) => onSubmit(e)}
        >
            <input
                type="number"
                className={inputClassName}
            />
            <input
                type="number"
                className={inputClassName}
            />
            <input
                type="number"
                className={inputClassName}
            />
            <input
                type="submit"
                className={inputClassName}
            />
        </form>
    );
}