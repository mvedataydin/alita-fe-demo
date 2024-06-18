import React from 'react';
import { Card as AntdCard, Button } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';

interface CardProps {
  image: string;
  title: string;
  description: string;
  demoLink: string;
  repoLink: string;
}

const { Meta } = AntdCard;

const Card: React.FC<CardProps> = ({ image, title, description, demoLink, repoLink }) => {
  const handleClick = () => {
    console.log(`You clicked on ${title}`);
  };

  return (
    <AntdCard
      hoverable
      onClick={handleClick}
      cover={<img alt={title} src={image} />}
      className="max-w-xs m-4 transition-transform transform hover:-translate-y-2"
    >
      <Meta title={title} description={description} />
      <div className="mt-4 flex justify-between">
        <Button type="primary" icon={<LinkOutlined />} href={demoLink} target="_blank">
          Demo
        </Button>
        <Button type="default" icon={<GithubOutlined />} href={repoLink} target="_blank">
          GitHub
        </Button>
      </div>
    </AntdCard>
  );
};

export default Card;
