import { Button } from "antd"
import Checkbox from "antd/lib/checkbox"
import Form from "antd/lib/form"
import Input from "antd/lib/input"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import '../Login/Login.css'
import { User } from '../../../Shared/Models/interfaces/User'

export const Login = () => {
    const [users, setUsers] = useState<User[]>([])
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">  
                <div className="fadeIn first">
                    <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
                </div>
                
                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>
        
                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
    )
}