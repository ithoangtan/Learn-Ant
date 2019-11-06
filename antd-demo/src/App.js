import React, { Component } from "react";
import { Button } from "antd";
import "./App.css";

import "antd/dist/antd.less";

import TypographyAll from "./Component/General/TypographyAll";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Button</Button>
                <TypographyAll></TypographyAll>
            </div>
        );
    }
}

export default App;
