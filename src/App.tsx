import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import data from './data/cards.json';

type CardData = {
  title: string;
  items: string[];
  tags: string[];
};

function App() {

  const [filter, setFilter] = useState<string>('');
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    // Simula fetch si viniera de una API
    setCards(data);
  }, []);

  const filteredCards = cards.filter(card =>
    card.tags.some(tag => tag.toLowerCase().includes(filter))
  );

  return (
    <>
      <h1 className='test'>My Handler</h1>

      <input
        type="text"
        placeholder="Buscar por tag..."
        value={filter}
        onChange={(e) => setFilter(e.target.value.toLowerCase())}
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full md:w-1/2"
      />

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCards.map((card, index) => (
          <Card key={index} title={card.title} items={card.items} tags={card.tags}/>
        ))}
      </div>

    </>
  )
}

export default App
