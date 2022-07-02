import React from "react";
import moment from "moment";
import { useForm } from "../hooks/useForm";
import { FormProps, FormState } from "../interfaces";


const initialState: FormState = {
    day: "",
    month: "",
    year: ""
}

export function Form({ inputClassName, setCurrentDate }: FormProps) {
    const { values, handleChange, reset } = useForm<FormState>(initialState);
    const { day, month, year } = values;
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validteFileds()) {
            setCurrentDate(moment().year(parseInt(year)).month(parseInt(month) - 1).date(parseInt(day)).format());
            return;
        }
        console.log("invalid")
    }
    const validteFileds = () => {
        if (year.trim().length !== 4) {
            return false;
        }
        if (month.trim().length !== 2) {
            return false;
        }
        if (day.trim().length !== 2) {
            return false;
        }
        return true;
    }
    return (
        <form
            onSubmit={(e) => onSubmit(e)}
        >
            <input
                type="number"
                className={inputClassName}
                name="year"
                value={year}
                onChange={handleChange}
                placeholder="YYYY"
                minLength={4}
                maxLength={4}
            />
            <input
                type="number"
                className={inputClassName}
                name="month"
                value={month}
                onChange={handleChange}
                placeholder="MM"
            />
            <input
                type="number"
                className={inputClassName}
                name="day"
                value={day}
                onChange={handleChange}
                placeholder="DD"
            />
            <input
                type="submit"
                className={inputClassName}

            />
        </form>
    );
}