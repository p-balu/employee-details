import * as types from "../actions/actionTypes";
export default function profileDataReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_PROFILEDATA:
            return [...state, { ...action.profileData }];
        default:
            return state;
    }
}