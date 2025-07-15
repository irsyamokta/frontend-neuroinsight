
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ConfusionMatrix = () => {
    const labels = ["Glioma", "Meningioma", "Pituitary", "No Tumor"];
    const matrix = [
        [293, 6, 0, 1],
        [1, 293, 9, 3],
        [0, 0, 405, 0],
        [4, 2, 1, 293],
    ];

    const yAxisMap = ["4", "3", "2", "1"];
    const [offsetX, setOffsetX] = useState(-5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 375) {
                setOffsetX(-48);
            } else if (window.innerWidth <= 1280) {
                setOffsetX(-51);
            } else {
                setOffsetX(-55);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const series = labels
        .map((label, rowIndex) => ({
            name: label,
            data: matrix[rowIndex].map((value, colIndex) => ({
                x: labels[colIndex],
                y: value,
            })),
        }))
        .reverse();

    return (
        <div className="w-full mt-6 rounded-xl px-1 2xl:px-4">
            <Chart
                type="heatmap"
                height={300}
                width="120%"
                series={series}
                options={{
                    chart: {
                        type: "heatmap",
                        toolbar: { show: false },
                        offsetX: offsetX,
                    },
                    plotOptions: {
                        heatmap: {
                            shadeIntensity: 0.5,
                            colorScale: {
                                ranges: [
                                    { from: 0, to: 100, name: "Low", color: "#8cbff5" },
                                    { from: 101, to: 300, name: "Medium", color: "#2777b8" },
                                    { from: 301, to: 500, name: "High", color: "#095fe3" },
                                ],
                            },
                        },
                    },
                    dataLabels: {
                        enabled: true,
                        style: { colors: ["#000"], fontWeight: "regular" },
                    },
                    xaxis: {
                        categories: labels,
                        labels: {
                            rotate: -45,
                            style: { fontSize: "11px" },
                        },
                    },
                    yaxis: {
                        axisBorder: { show: false },
                        axisTicks: { show: false },
                        labels: {
                            offsetX: -1,
                            formatter: ((_: any, index: number) =>
                                index !== undefined ? yAxisMap[index] : "") as unknown as (
                                    value: string | number
                                ) => string,
                            style: { fontSize: "12px" },
                        },
                    },
                    legend: {
                        show: false,
                    },
                }}
            />
            {/* Legend manual */}
            <div className="sm:mt-3 text-xs sm:text-sm text-gray-700 text-center">
                <p>
                    <strong>1</strong>: Glioma &nbsp;|&nbsp;
                    <strong>2</strong>: Meningioma &nbsp;|&nbsp;
                    <strong>3</strong>: Pituitary &nbsp;|&nbsp;
                    <strong>4</strong>: No Tumor
                </p>
            </div>
        </div>
    );
};

export default ConfusionMatrix;
