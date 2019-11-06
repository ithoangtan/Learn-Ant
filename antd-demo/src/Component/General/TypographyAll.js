import React, { Component } from "react";
import { Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

class TypographyAll extends Component {
   state = {
      str: "This is an editable text."
   };

   onChange = str => {
      this.setState({ str });
   };
   render() {
      return (
         <div>
            <Title level={2}>h2. Antd </Title>
            <br />
            <Text type="warning">Warning Antd </Text>
            <br />
            <Text type="danger">DangerAntd </Text>
            <br />
            <Text disabled>disabled Antd </Text>
            <br />
            <Text mark>mark Antd </Text>
            <br />
            <Text code>code Antd </Text>
            <br />
            <Text underline>underline Antd </Text>
            <br />
            <Text delete>delete Antd </Text>
            <br />
            <Text strong>strong Antd</Text>
            <Paragraph editable={{ onChange: this.onChange }}>
               {this.state.str}
            </Paragraph>
            <Paragraph copyable>This is a copyable text.</Paragraph>
            <Paragraph copyable={{ text: "Hello, Ant Design!" }}>
               Replace copy text. (text copied: Hello, Ant Design!)
            </Paragraph>
         </div>
      );
   }
}
export default TypographyAll;
