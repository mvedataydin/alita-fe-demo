import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useLocation, useNavigate } from 'react-router-dom';

const mockCards = [
  {
    id: '1',
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Todo List App',
    description: 'Description of Project 1',
    demoLink: 'https://demo1.com',
    repoLink: 'https://github.com/repo1',
  },
  {
    id: '2',
    image: 'https://picsum.photos/200/300?random=2',
    title: 'React Todo App',
    description: 'Description of Project 2',
    demoLink: 'https://demo2.com',
    repoLink: 'https://github.com/repo2',
  },
  {
    id: '3',
    image: 'https://picsum.photos/200/300?random=3',
    title: 'Weather App',
    description: 'Description of Project 3',
    demoLink: 'https://demo3.com',
    repoLink: 'https://github.com/repo3',
  },
  {
    id: '4',
    image: 'https://picsum.photos/200/300?random=4',
    title: 'My Personal Website',
    description: 'Description of Project 4',
    demoLink: 'https://demo4.com',
    repoLink: 'https://github.com/repo4',
  },
  {
    id: '5',
    image: 'https://picsum.photos/200/300?random=5',
    title: 'Ecommerce Web App',
    description: 'Description of Project 5',
    demoLink: 'https://demo5.com',
    repoLink: 'https://github.com/repo5',
  },
];

const CardList: React.FC = () => {
  const [cards, setCards] = useState(mockCards);
  const [searchTerm, setSearchTerm] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialSearchTerm = params.get('search') || '';
    setSearchTerm(initialSearchTerm);

    filterCards(initialSearchTerm);
  }, [location.search]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    const params = new URLSearchParams(location.search);
    if (searchValue) {
      params.set('search', searchValue);
    } else {
      params.delete('search');
    }

    navigate(`?${params.toString()}`, { replace: true });

    filterCards(searchValue);
  };

  const filterCards = (searchTerm: string) => {
    const filteredCards = mockCards.filter((card) => card.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setCards(filteredCards);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <div className="flex">
        <div>Search query:</div>
        <div
          id="searchInputText"
          className="w-full text-center my-4"
        >{searchTerm}</div>
      </div>

      <div className="flex flex-wrap justify-center">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            demoLink={card.demoLink}
            repoLink={card.repoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
