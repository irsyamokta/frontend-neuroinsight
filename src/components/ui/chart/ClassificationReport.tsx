import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ClassificationReport = () => {
    const classes = ["glioma", "meningioma", "notumor", "pituitary"];

    const precision = [0.98, 0.97, 0.98, 0.99];
    const recall = [0.98, 0.96, 1.00, 0.98];
    const f1 = [0.98, 0.97, 0.99, 0.98];
    const support = [300, 306, 405, 300];

    const metrics = ["Precision", "Recall", "F1-Score", "Support"];
    const matrix = [precision, recall, f1, support];

    const [offsetX, setOffsetX] = useState(-5);
    const yAxisMap = ["1", "2", "3", "4"];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setOffsetX(-38);
            }  else {
                setOffsetX(-40);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


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
                width="110%"
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

export default ClassificationReport;