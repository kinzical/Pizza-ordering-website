import { Tabs } from 'antd';
import React from 'react';
import './Admin.css'
import AddUser from '../Users/AddUser/AddUser'
import GetAllUser from '../Users/GetAllUser/GetAllUser'

export const Admin = () => {

    const { TabPane } = Tabs;

    return(
        <div>
            <nav className="navbar navbar-light bg-light admin-page">
            <form className="container-fluid justify-content-start">
                <button className="btn btn-outline-success me-2 tab-1" type="button">Users</button>
                <button className="btn btn-outline-success me-2 tab-2" type="button">Posts</button>
            </form>
            </nav>
            <AddUser />
            <GetAllUser />
        </div>
    )
}