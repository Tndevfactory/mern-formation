import React from "react";

import { Button, Checkbox, Form, Input, Card, Col, Row } from "antd";

const sendBackend = (values) => {
  console.log("send backend");
  console.log("Success:", values);

  // call backend pour verifier l'authenticité
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5rem",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        style={{
          maxWidth: 800,
          backgroundColor: "transparent",
          border: "solid 1px #000",
          borderRadius: "8px",
          padding: "1rem",
          marginTop: "1rem",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={sendBackend}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2
          style={{
            color: "#555",
            backgroundColor: "transparent",
            textAlign: "center",
          }}
        >
          Inscription
        </h2>
        <Form.Item
          label=" email"
          name="email"
          rules={[
            {
              required: true,
              message: "Veuillez entrer votre email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mot de passe"
          name="password"
          rules={[
            {
              required: true,
              message: "Veuillez entrer votre mot de passe!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Veuillez confirmer votre mot de passe!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          style={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
