import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

interface MenuItem {
  key: string;
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'about', label: 'About', path: '/about' },
  { key: 'career', label: 'Career', path: '/career' },
];

const AppHeader: React.FC = () => {
  return (
    <Header className="fixed w-full z-10 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-black">
          <Link to="/">My Website</Link>
        </div>
        <div className="container mx-auto ml-auto px-6 sm:px-12 lg:px-16">
          <Menu mode="horizontal" theme="light" className="justify-items-end">
            {menuItems.map((item) => (
              <Menu.Item key={item.key}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
