import React, { Component } from "react";

import DatePicker from "antd/es/date-picker"; // for js
import "antd/es/date-picker/style/css"; // for css

export default class DatePickerManually extends Component {
  render() {
    return (
      <div>
        <DatePicker />
      </div>
    );
  }
}
