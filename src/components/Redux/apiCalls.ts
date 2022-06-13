import { loginFailure,loginSuccess,loginStart} from "./userRedux";
import { publicRequest } from "../../reqMethods";

export const login = async (dispatch:any, user:any) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("auth/login", user);
        dispatch(loginSuccess(res.data));
        console.log(res.data)
    } catch (err) {
        dispatch(loginFailure());
    }
};