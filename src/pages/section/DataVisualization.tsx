import React, { useState } from "react";
import Label from "../../components/ui/label/Label";
import TabToggle from "../../components/ui/toggle/TabToggle";
import StatisticCard from "../../components/ui/card/StatisticCard";
import PerformanceCard from "../../components/ui/card/PerformanceCard";

const DataVisualization: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Statistik Dataset");
    return (
        <section id="visualisasi-data" className="w-full py-12">
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Label label="Visualisasi Data" />
                    <h2 className="text-2xl md:text-5xl font-semibold mb-4 mt-4">
                        Statistik dan Performa
                    </h2>
                    <p className="text-sm text-center sm:text-base  leading-relaxed text-gray-700">
                        Menampilkan ringkasan dataset dan metrik evaluasi model untuk <br /> memahami kualitas sistem klasifikasi.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 gap-10 items-center">
                    <TabToggle
                        tabs={["Statistik Dataset", "Performa Model"]}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />

                    {/* Konten di bawah toggle */}
                    {activeTab === "Statistik Dataset" && (
                        <StatisticCard />
                    )}

                    {activeTab === "Performa Model" && (
                        <PerformanceCard />
                    )}
                </div>
            </div>
        </section>
    );
};

export default DataVisualization;