import {RETRIVE_TUTORIALS} from "./types";

import TutorialsServices from "../services/TutorialServices";

export const retrieveTutorials = () => async (dispatch) =>{
    try {
        const res = await TutorialsServices.getAll();
        dispatch({
            type: RETRIVE_TUTORIALS,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
};