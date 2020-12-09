import { Tabs } from 'antd';
import React from 'react';
import './Admin.css'
import AddUser from '../Users/AddUser/AddUser'
import { Route, Switch } from 'react-router-dom';

export const Admin = () => {

    const { TabPane } = Tabs;

    return(
        <div>
            <Switch>
            {/* <Route exact path={["/", "/tutorials"]} component={TutorialsList} /> */}
            <Route exact path="/add" component={AddUser} />
            {/* <Route path="/tutorials/:id" component={Tutorial} /> */}
            </Switch>
            <nav className="navbar navbar-light bg-light admin-page">
            <form className="container-fluid justify-content-start">
                <button className="btn btn-outline-success me-2 tab-1" type="button">Users</button>
                <button className="btn btn-outline-success me-2 tab-2" type="button">Posts</button>
            </form>
            </nav>
            <AddUser />
        </div>
    )
}