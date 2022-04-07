import React from "react";
// import qs from "querystring";
import { Form, Input, Button } from "antd";
import axios from "axios";

const Index = () => {
  const onFinish = (values) => {
    const options = {
      method: "POST",
      headers: {
        "X-App-Version": "v0.1",
        "content-type": "application/json",
      },
      withCredentials: true,
      data: values,
      url: "http://localhost:8090/form",
    };
    axios(options)
      .then((res) => {
        console.log(res.headers["x-list-version"]);
        console.log(res.headers);
        return res.data;
      })

      .then((res) => console.log(res))
      .catch((e) => console.error(e));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Index;
