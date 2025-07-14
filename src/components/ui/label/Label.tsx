import React from "react";
import clsx from "clsx";

type LabelProps = {
    label: string;
    icon?: React.ReactNode;
    size?: "sm" | "md";
    onClick?: () => void;
    className?: string;
};

const Label: React.FC<LabelProps> = ({
    label,
    size = "sm",
    icon = <div className="w-6 h-0.5 bg-primary"></div>, // strip default
    onClick,
    className = "",
}) => {
    const sizes: Record<NonNullable<LabelProps["size"]>, string> = {
        sm: "text-sm px-5 h-[40px]",
        md: "text-sm px-4 h-[48px]",
    };

    return (
        <button
            onClick={onClick}
            className={clsx(
                sizes[size],
                "inline-flex justify-center items-center gap-2 rounded-full bg-blue-50 text-primary font-medium",
                className
            )}
        >
            <span>{icon}</span>
            <span>{label}</span>
        </button>
    );
};

export default Label;
