import { loginFailure,loginStart, loginSuccess } from "./userSlice";
import { infoRequests } from "../CleanMethods";

export const login = async (dispatch,user)=>{
dispatch(loginStart());
try{
const res = await infoRequests.post("/auth/login", user)

    dispatch(loginSuccess(res.data));

}catch(err){
dispatch(loginFailure());
}
};