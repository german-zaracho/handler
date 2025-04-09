interface CardProps {
    title: string;
    items: string[];
};

const Card: React.FC<CardProps> = ({ title, items }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                {items.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
            </ul>
        </div>
    );
};

export default Card;