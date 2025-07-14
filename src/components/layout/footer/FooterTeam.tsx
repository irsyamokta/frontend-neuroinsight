import React from "react";
import TeamMemberCard from "./components/TeamMemberCard";
import Image1 from "../../../assets/member/member-1.png";
import Image2 from "../../../assets/member/member-2.png";
import Image3 from "../../../assets/member/member-3.png";

const members: string[] = [
    "Irsyam Okta Pratama Riyadi",
    "Muhammad Agam Nasywaan",
    "Diva Dita Nara",
];

const roles: string[] = ["Leader", "Member", "Member"];

const images: string[] = [
    Image1,
    Image2,
    Image3
]

const FooterTeam: React.FC = () => {
    return (
        <section className="w-full px-4 py-12 text-center text-white">
            <p className="mb-4">Introduce Our Team</p>
            <h2 className="text-2xl md:text-2xl font-semibold mb-10">
                TungTungTung Sahur Team
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-0 justify-items-center">
                {members.map((name, index) => (
                    <div
                        key={name}
                        className={`${members.length % 2 !== 0 && index === members.length - 1
                                ? 'col-span-2 justify-self-center md:col-span-1 md:justify-self-auto'
                                : ''
                            }`}
                    >
                        <TeamMemberCard key={name} name={name} role={roles[members.indexOf(name)]} image={images[members.indexOf(name)]} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FooterTeam;