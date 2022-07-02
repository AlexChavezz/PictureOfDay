// Picture of day
export interface Data {
    title: string,
    url: string,
    explanation: string,
    copyright: string,
}


export type Themes = "dark" | "light";

/*
    FORM
*/

export interface FormProps {
    inputClassName: string,
    setCurrentDate: React.Dispatch<React.SetStateAction<string>>
}

export interface FormState {
    year: string,
    month: string,
    day: string
}


/*
    -> Context
*/ 

export interface ThemeContextInterface {
    theme: Themes,
    setTheme: React.Dispatch<React.SetStateAction<Themes>> 
}