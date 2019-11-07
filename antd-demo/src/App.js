import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import "./App.css";

import "antd/dist/antd.less";

import TypographyAll from "./Component/General/TypographyAll";
import UploadImages from "./Component/DataEntry/Upload";

class App extends Component {
   render() {
      return (
         <div className="App">
            <Row gutter={[8, 8]} type="flex" justify="center" align="top">
               <Col sm={4} md={12} >
                  <Button type="primary">Button</Button>
               </Col>
               <Col  sm={4} md={12} >
                  <TypographyAll></TypographyAll>
               </Col>
            </Row>
            <Row gutter={[8, 8]} type="flex" justify="center" align="top">
               <Col sm={6} md={12}>
                  <UploadImages></UploadImages>
               </Col>
            </Row>
         </div>
      );
   }
}

export default App;
