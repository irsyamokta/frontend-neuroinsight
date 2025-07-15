import Chart from "react-apexcharts";

type PieChartProps = {
    labels: string[];
    series: number[];
    colors?: string[];
    height?: number;
};

const PieChart = ({ labels, series, colors, height = 350 }: PieChartProps) => {
    return (
        <Chart
            options={{
                labels,
                colors,
                legend: {
                    position: "bottom",
                    horizontalAlign: "center",
                    floating: false,
                    fontSize: "12px",
                    itemMargin: {
                        horizontal: 5,
                        vertical: 4,
                    },
                },
            }}
            series={series}
            type="pie"
            height={height}
            className="w-xl"
        />
    );
};

export default PieChart;