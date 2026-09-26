import { defaultIcon, homeIcon, jobIcon, parkIcon, visitIcon } from "./ui.js"

const VISIT = "visit"
const HOME = "home"
const JOB = "job"
const PARK = "park"
const UNKNOWN = "unkown"


export const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
}

export const getStatus = (status) => {
    switch (status) {
        case VISIT:
            return VISIT
        case HOME:
            return HOME
        case JOB:
            return JOB
        case PARK:
            return PARK
        default:
            return UNKNOWN;
    }
}

export const getNoteIcon = (status) => {
    switch (status) {
        case VISIT:
            return visitIcon
        case HOME:
            return homeIcon
        case JOB:
            return jobIcon
        case PARK:
            return parkIcon
        default:
            return defaultIcon;
    }
}