import React from "react";
import "./App.scss";
import {Main} from "./common/Main";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import {store} from "../m2_bll/store";


const App = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <HashRouter>
                    <Main/>
                </HashRouter>
            </Provider>
        </div>
    );
}

export default App;
