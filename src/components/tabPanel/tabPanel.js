import React, {Fragment} from 'react';
import { Tabs } from "antd";
const { TabPane } = Tabs;
export default function TabPanel () {
    return (
        <Fragment >
             <Tabs centered={true} defaultActiveKey="2">
          <TabPane tab={<span>Tab 1</span>} key="1">
            Tab 1
          </TabPane>
          <TabPane tab={<span>Tab 2</span>} key="2">
            Tab 2
          </TabPane>
        </Tabs>
        </Fragment>
    )
}