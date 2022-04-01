// Picture of day
export interface Data {
    title: string,
    url: string,
    explanation: string,
    copyright: string,
}


export type Themes = "dark" | "light";

/*
    -> Context
*/ 

export interface ThemeContextInterface {
    theme: Themes,
    setTheme: React.Dispatch<React.SetStateAction<Themes>> 
}