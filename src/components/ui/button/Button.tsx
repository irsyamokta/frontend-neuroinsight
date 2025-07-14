import React from "react";
import clsx from "clsx";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "outline" | "disabled";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    loading?: boolean;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    loading = false,
    className = "",
}) => {
    const baseStyles =
        "rounded-[8px] focus:outline-none focus:ring transition-all duration-200 cursor-pointer";

    const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
        primary: "bg-primary text-white hover:bg-blue-400",
        secondary: "bg-secondary text-white hover:bg-blue-300",
        outline: "border border-primary text-primary hover:bg-gray-100",
        disabled: "bg-gray-600 text-white cursor-not-allowed",
    };

    const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-base px-5 py-3.5",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={clsx(
                baseStyles,
                variants[variant],
                sizes[size],
                className,
                (disabled || loading) && "opacity-50 cursor-not-allowed"
            )}
        >
            {loading ? "Loading..." : children}
        </button>
    );
};

export default Button;
