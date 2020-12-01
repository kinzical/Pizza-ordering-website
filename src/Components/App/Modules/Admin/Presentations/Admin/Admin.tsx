import { Tabs } from 'antd';
import React from 'react';
import './Admin.css'

export const Admin = () => {

    const { TabPane } = Tabs;

    return(
        <div className="admin-page">
            <Tabs defaultActiveKey="1" size="large" tabPosition="top" >
                <TabPane tab="Tab 1" key="1">
                    Content of tab 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of tab 2
                </TabPane>
          </Tabs>
        </div>
    )
}