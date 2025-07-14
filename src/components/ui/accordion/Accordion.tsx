import type { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

type AccordionItemProps = {
    id: string;
    title: string;
    description: string;
    icon?: ReactNode;
    isActive: boolean;
    onClick: () => void;
};

const AccordionItem = ({
    id,
    title,
    description,
    icon,
    isActive,
    onClick,
}: AccordionItemProps) => {
    return (
        <div
            id={id}
            onClick={onClick}
            className="border border-gray-400 rounded-xl px-4 py-5 bg-white cursor-pointer transition"
        >
            <div className="flex justify-between items-center gap-3">
                {/* Left: Icon + Text */}
                <div className="flex flex-col gap-3 items-start">
                    <div className="flex-shrink-0 text-primary text-xl">{icon}</div>

                    <div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        {isActive && (
                            <p className="text-sm sm:text-base text-gray-700 mt-1">{description}</p>
                        )}
                    </div>
                </div>

                {/* Right: Arrow */}
                <div className="flex-shrink-0 text-xl">
                    <FiChevronDown
                        className={`transition-transform duration-200 ${isActive ? "rotate-180" : ""
                            }`}
                    />
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
