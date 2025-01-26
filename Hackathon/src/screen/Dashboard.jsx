import React from "react";
import { Layout, Menu, Card, Button } from "antd";
import { DashboardOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      <Sider className="bg-gray-900" breakpoint="lg" collapsedWidth="80">
        <div className="text-white text-center py-4 text-lg font-bold">
          My Dashboard
        </div>
        <Menu theme="dark" mode="inline" className="bg-gray-900">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Layout */}
      <Layout>
        {/* Header */}
        <Header className="bg-white shadow-md px-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text
          -white">Dashboard</h1>
          <Button type="primary">Log Out</Button>
        </Header>

        {/* Content */}
        <Content className="p-6 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Cards */}
            <Card title="Total Users" bordered={false} className="shadow-md">
              <p className="text-2xl font-bold">1200</p>
            </Card>
            <Card title="Active Users" bordered={false} className="shadow-md">
              <p className="text-2xl font-bold">890</p>
            </Card>
            <Card title="New Signups" bordered={false} className="shadow-md">
              <p className="text-2xl font-bold">56</p>
            </Card>
          </div>

          {/* Charts or Quick Actions */}
          <div className="mt-8">
            <Card title="Quick Actions" className="shadow-md">
              <Button type="primary" className="mr-4">
                Add User
              </Button>
              <Button>Generate Report</Button>
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
