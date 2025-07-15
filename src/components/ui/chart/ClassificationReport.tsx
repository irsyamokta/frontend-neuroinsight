import Chart from "react-apexcharts";

const ClassificationReport = () => {
    const classes = ["glioma", "meningioma", "notumor", "pituitary"];

    const precision = [0.98, 0.97, 0.98, 0.99];
    const recall = [0.98, 0.96, 1.00, 0.98];
    const f1 = [0.98, 0.97, 0.99, 0.98];
    const support = [300, 306, 405, 300];

    const metrics = ["Precision", "Recall", "F1-Score", "Support"];
    const matrix = [precision, recall, f1, support];

    const series = classes.map((className, classIndex) => ({
        name: className, 
        data: metrics.map((metric, metricIndex) => ({
            x: metric,
            y: matrix[metricIndex][classIndex],
        })),
    }));

    return (
        <div className="w-full mt-6 rounded-xl">
            <Chart
                type="heatmap"
                height={300}
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
                                    {
                                        from: 0,
                                        to: 1000,
                                        color: "#4d94ff",
                                    },
                                ],
                            },
                        },
                    },
                    dataLabels: {
                        enabled: true,
                        style: {
                            colors: ["#000"],
                            fontSize: "12px",
                            fontWeight: "regular",
                        },
                    },
                    xaxis: {
                        categories: metrics,
                        title: {
                            style: { fontSize: "14px", fontWeight: "bold" },
                        },
                        labels: {
                            style: { fontSize: "12px" },
                        },
                    },
                    yaxis: {
                        labels: {
                            style: { fontSize: "12px" },
                        },
                    },
                    legend: {
                        show: false,
                    },
                }}
            />
        </div>
    );
};

export default ClassificationReport;