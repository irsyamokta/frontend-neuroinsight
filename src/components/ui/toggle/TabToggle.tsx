import React from "react";
import clsx from "clsx";

type TabToggleProps = {
    activeTab: string;
    onTabChange: (tab: string) => void;
    tabs: string[];
};

const TabToggle: React.FC<TabToggleProps> = ({
    activeTab,
    onTabChange,
    tabs,
}) => {
    const activeIndex = tabs.findIndex((tab) => tab === activeTab);

    return (
        <div className="relative flex bg-gray-200 rounded-full overflow-hidden w-full max-w-sm mx-auto">
            {/* Sliding pill */}
            <span
                className="absolute top-0 bottom-0 w-1/2 bg-primary rounded-full transition-transform duration-300"
                style={{ transform: `translateX(${activeIndex * 100}%)` }}
            />

            {tabs.map((tab) => {
                const isActive = tab === activeTab;
                return (
                    <button
                        key={tab}
                        onClick={() => onTabChange(tab)}
                        className={clsx(
                            "relative z-10 flex-1 text-sm font-medium py-4 px-4 rounded-full transition-colors duration-200 text-center whitespace-pre-line cursor-pointer",
                            isActive ? "text-white" : "text-gray-600"
                        )}
                    >
                        {tab}
                    </button>
                );
            })}
        </div>
    );
};

export default TabToggle;
