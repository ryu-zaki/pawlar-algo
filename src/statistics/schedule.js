import { toTimeString } from '../utils'

function scheduleFormat(mins) {
    const m = mins % 60;
    const hr = Math.floor(mins / 60);
    const sched = `${hr.toString().padStart("2", "0")}:${m.toString().padStart('2', "0")}`;

    return sched;
}

function setTime(minutes) {
    const tensDigit = minutes % 10; 
    
    let mins = 0;
    if (tensDigit >= 5) {
        mins = Math.ceil(minutes / 10) * 10;
    } else {
        mins = Math.floor(minutes / 10) * 10;
    }
    
    return mins;
}

function getOffset(minutes, halfWidth) {
    const lowExtreme = minutes - halfWidth;
    const highExtreme = minutes + halfWidth;
    
    //return `${scheduleFormat(lowExtreme)}-${scheduleFormat(highExtreme)}`;
    return `${toTimeString(lowExtreme)}-${toTimeString(highExtreme)}`
}

export { setTime, scheduleFormat, getOffset };