type InfoCardProps = {
    title: string;
    description?: string;
    content?: React.ReactNode;
};

const InfoCard = ({ title, description, content }: InfoCardProps) => {
    return (
        <div className="rounded-xl flex flex-col py-4">
            <div className="bg-gray-100 rounded-xl aspect-[3/4] md:aspect-[0.9] mb-4 flex items-center justify-center overflow-hidden">
                {content ? content : <span className="text-gray-400 text-sm">No Content</span>}
            </div>
            <h3 className="text-base font-semibold mb-1">{title}</h3>
            {description && <p className="text-sm text-gray-700">{description}</p>}
        </div>
    );
};

export default InfoCard;