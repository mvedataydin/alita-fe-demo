import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import AppHeader from '../components/Header';

const { Content } = Layout;

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout className="min-h-screen">
      <AppHeader />
      <Content className="p-4 mt-16">{children}</Content>
    </Layout>
  );
};

export default MainLayout;
