interface CardProps {
    title: string;
    items: string[];
    tags: string[];
};

const Card: React.FC<CardProps> = ({ title, items, tags }) => {
    return (
        <div className="group bg-white hover:bg-[#FFC229] rounded-[30px] shadow-[inset_0_-12px_6px_#ADCFFF] hover:shadow-[inset_0_-6px_8px_#FF6314] font-medium tracking-[-0.24px] px-5 py-4 m-[10px] flex flex-col">
            <h2 className="text-xl font-bold mb-2 text-black group-hover:text-[#C80036]">{title}</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 text-left group-hover:text-black">
                {items.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
            </ul>
            <ul className="list-disc list-inside space-y-1 text-sm text-white text-left group-hover:text-black flex flex-row mt-auto self-end">
                {tags.map((tag, index) => (
                    <li key={index} className="list-none m-[10px] p-[6px] rounded-[7px] bg-[#006ba6] group-hover:bg-white group-hover:shadow-[inset_0_-5px_6px_#ADCFFF]"> {tag}</li>
                ))}
            </ul>

        </div>
    );
};

export default Card;