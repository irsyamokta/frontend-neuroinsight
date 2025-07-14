import Chart from "react-apexcharts";

const ConfusionMatrix = () => {
    const labels = ["Glioma", "Meningioma", "Pituitary", "No Tumor"];
    const matrix = [
        [293, 6, 0, 1],
        [1, 293, 9, 3],
        [0, 0, 405, 0],
        [4, 2, 1, 293],
    ];

    const series = labels.map((label, rowIndex) => ({
        name: label,
        data: matrix[rowIndex].map((value, colIndex) => ({
            x: labels[colIndex],
            y: value,
        })),
    })).reverse();

    return (
        <div className="w-full mt-6 rounded-xl p-4">
            <Chart
                type="heatmap"
                height={350}
                width="100%"
                series={series}
                options={{
                    chart: {
                        type: "heatmap",
                        toolbar: { show: false },
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
                            }
                        },
                    },
                    dataLabels: {
                        enabled: true,
                        style: {
                            colors: ["#000"],
                        },
                    },
                    xaxis: {
                        categories: labels,
                        labels: {
                            style: {
                                fontSize: "12px",
                            },
                        },
                    },
                    yaxis: {
                        labels: {
                            style: {
                                fontSize: "12px",
                            },
                        },
                    },
                    legend: {
                        position: "bottom",
                        horizontalAlign: "center",
                        fontSize: "14px",
                        offsetY: 40
                    },
                }}
            />
        </div>
    );
};

export default ConfusionMatrix;