import {  LISTEN_TO_CURRENT_USER_PROFILE, LISTEN_TO_SELECTED_USER_PROFILE, LISTEN_TO_USER_EVENTS } from "../profileConstants";

export function listenToCurrentUserProfile(profile){
    return{
        type: LISTEN_TO_CURRENT_USER_PROFILE,
        payload: profile
    }
}


export function listenToSelectedUserProfile(profile){
    return{
        type: LISTEN_TO_SELECTED_USER_PROFILE,
        payload: profile
    }
}

export function listentoUserEvents(events){
    return{
        type: LISTEN_TO_USER_EVENTS,
        payload: events
    }
}

/* to Get Menu */


