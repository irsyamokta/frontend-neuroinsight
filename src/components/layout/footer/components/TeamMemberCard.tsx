import React from "react";

interface TeamMemberCardProps {
    name: string;
    role: string;
    image?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, image }) => {
    return (
        <div className="rounded-xl w-full flex flex-col justify-center items-center sm:px-10">
            <img src={image} className="w-32 lg:w-full aspect-square object-cover bg-gray-300 rounded-lg mb-4" />
            <p className="text-sm text-gray-300">{role}</p>
            <p className="text-md font-semibold text-center">{name}</p>
        </div>
    );
};

export default TeamMemberCard;