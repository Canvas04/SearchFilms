import React from 'react';
import { Tabs } from "antd";
const { TabPane } = Tabs;
export default function TabPanel () {
    return (
        < >
             <Tabs centered={true} defaultActiveKey="1">
          <TabPane tab={<span>Tab 1</span>} key="1">
            
          </TabPane>
          <TabPane tab={<span>Tab 2</span>} key="2">
            
          </TabPane>
        </Tabs>
        </>
    )
}