import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import data from './data/cards.json';

type CardData = {
  title: string;
  items: string[];
};

function App() {

  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    // Simula fetch si viniera de una API
    setCards(data);
  }, []);

  return (
    <>
      <h1 className='test'>My Handler</h1>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} items={card.items} />
      ))}
    </div>

    </>
  )
}

export default App
