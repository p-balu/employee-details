import * as types from "./actionTypes"
export function createProfileData(profileData) {
    return { type: types.CREATE_PROFILEDATA, profileData }
}