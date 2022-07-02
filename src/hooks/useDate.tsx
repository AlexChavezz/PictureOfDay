import { useState } from 'react';
import moment from 'moment';

export const useDate = () => {
    const [currentDate, setCurrentDate] = useState<string>(moment().format());
    // // -> Get before day 
    function getBefore() {
        setCurrentDate(moment(currentDate).subtract(1, 'day').format());
    }
    // -> Get after day
    function getAfter() {
        setCurrentDate(moment(currentDate).add(1, 'day').format());
    }
    return {
        currentDate, setCurrentDate, getBefore, getAfter,
    }
}
