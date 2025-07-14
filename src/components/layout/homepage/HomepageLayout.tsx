import React from "react";

type HomePageLayoutProps = {
    children: React.ReactNode;
};

const HomePageLayout = ({ children }: HomePageLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col text-gray-900">
            <main className="flex-1 px-4 lg:px-10 mx-auto w-full">
                {children}
            </main>
        </div>
    );
};

export default HomePageLayout;
