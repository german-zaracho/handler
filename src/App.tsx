import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import data from './data/cards.json';

type CardData = {
  title: string;
  items: string[];
  tags: string[];
};

const CARDS_PER_PAGE = 6;

function App() {

  const [filter, setFilter] = useState<string>('');
  const [cards, setCards] = useState<CardData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    // Simula fetch si viniera de una API
    setCards(data);
  }, []);

  // Cuando cambia el filtro, reiniciamos la página a 1
  useEffect(() => {
    setCurrentPage(1);
    setShowAll(false); // esta línea hace que vuelva la paginación
  }, [filter]);

  // Filtro
  const filteredCards = cards.filter(card =>
    card.tags.some(tag => tag.toLowerCase().includes(filter))
  );

  // Paginación
  const totalPages = Math.ceil(filteredCards.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const visibleCards = showAll ? filteredCards : filteredCards.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleShowAll = () => setShowAll(true);

  return (
    <>
      <h1 className='test'>My Handler</h1>

      <input
        type="text"
        placeholder="Buscar por tag..."
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value.toLowerCase());
        }}
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full md:w-1/2"
      />

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleCards.map((card, index) => (
          <Card key={index} title={card.title} items={card.items} tags={card.tags} />
        ))}
      </div>

      {/* Controles de paginación  */}
      {!showAll && filteredCards.length > CARDS_PER_PAGE && (
        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Anterior
            </button>

            {/* 🔢 Números de página */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`px-3 py-1 rounded 
            ${pageNum === currentPage
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-black hover:bg-gray-300'}`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>

          {/* Ver todas */}
          <button
            onClick={handleShowAll}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Ver todas las tarjetas
          </button>
        </div>
      )}

    </>
  )
}

export default App
