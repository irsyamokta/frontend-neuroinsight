
import Chart from "react-apexcharts";

const ConfusionMatrix = () => {
    const labels = ["Glioma", "Meningioma", "No Tumor", "Pituitary"];
    const matrix = [
        [292, 8, 0, 0],
        [0, 299, 5, 2],
        [0, 0, 405, 0],
        [0, 1, 0, 299],
    ];

    const yAxisMap = ["4", "3", "2", "1"];

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
        <div className="w-full flex flex-col items-center justify-center -mt-6 xl:-mt-4 rounded-xl">
            <Chart
                type="heatmap"
                height={300}
                width="130%"
                series={series}
                options={{
                    chart: {
                        type: "heatmap",
                        toolbar: { show: false },
                        offsetX: -15,
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
            <div className="sm:mt-2 text-xs text-gray-700 text-center">
                <p>
                    <strong>1</strong>: Glioma &nbsp;|&nbsp;
                    <strong>2</strong>: Meningioma &nbsp;|&nbsp;
                    <strong>3</strong>: No Tumor &nbsp;|&nbsp;
                    <strong>4</strong>: Pituitary
                </p>
            </div>
        </div>
    );
};

export default ConfusionMatrix;
