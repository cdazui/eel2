import React from "react"
import { Menu } from 'antd';
const { SubMenu } = Menu;

export default (config) => {
    return config.map((item) => {
        if (item.children) {
            return (
                <SubMenu
                    key={item.key}
                    title={
                        <span>
                            <item.icon />
                            <span>{item.text}</span>
                        </span>
                    }
                >
                    {
                        item.children.map((child)=>(
                            <Menu.Item key={child.key}>{child.text}</Menu.Item>
                        ))
                    }
                    

                </SubMenu>
            )
        } else {
            return (
                <Menu.Item key={item.key}>
                    <item.icon />
                    <span>{item.text}</span>
                </Menu.Item>
            )
        }
    })
}