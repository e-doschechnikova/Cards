import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {loginReducer} from "../../n2_features/f1-auth/a1-login/login-reducer";
import {registerReducer} from "../../n2_features/f1-auth/a2-register/register-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
// @ts-ignore
window.store = store;

///----------- types -----------\\\
export type AppRootStateType = ReturnType<typeof rootReducer>
type AppDispatchType = ThunkDispatch<AppRootStateType, void, AnyAction>