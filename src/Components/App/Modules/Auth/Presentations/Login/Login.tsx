import { Button } from "antd"
import Checkbox from "antd/lib/checkbox"
import Form from "antd/lib/form"
import Input from "antd/lib/input"
import React from "react"
import { Link } from "react-router-dom"
import '../Login/Login.css'

export const Login = () => {
    return (
        <div className="login-page">
            <div className="app-icon"></div>
            <div className="login-container">
            <h1>Login or Sign Up</h1>
                <Form>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please enter email",
                            },
                        ]}
                    >
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please enter password",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    {/* <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember Me</Checkbox>
                    </Form.Item> */}
                    <Form.Item>
                        <Link to={'forgot-password'} className="pull-right">Forgot Password?</Link>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                    <p>Don't have an account?<Link to={'login'}>Login</Link></p>
                </Form>
            </div>
        </div>
    )
}