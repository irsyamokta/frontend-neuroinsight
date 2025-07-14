import { useState, useRef, useEffect } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface DropdownProps {
    text: string;
    link: string;
}

const Dropdown = ({ text, link }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <div
                className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                onClick={() => setOpen(!open)}
                onMouseDown={(e) => e.preventDefault()}
            >
                <HiOutlineDotsVertical className="w-5 h-5 text-gray-600" />
            </div>

            {open && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-25 divide-y divide-gray-100 rounded-md shadow-sm z-50">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        {text}
                    </a>
                </div>
            )}
        </div>
    );
};

export default Dropdown;