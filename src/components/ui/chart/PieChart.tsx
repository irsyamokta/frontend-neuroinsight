import Chart from "react-apexcharts";

type PieChartProps = {
    labels: string[];
    series: number[];
    colors?: string[];
    height?: number;
};

const PieChart = ({ labels, series, colors, height = 400 }: PieChartProps) => {
    return (
        <Chart
            options={{
                labels,
                colors,
                legend: {
                    position: "bottom",
                    horizontalAlign: "center",
                    floating: false,
                    fontSize: "14px",
                    offsetY: -3,
                    itemMargin: {
                        horizontal: 5,
                        vertical: 4,
                    },
                },
            }}
            series={series}
            type="pie"
            width="100%"
            height={height}
        />
    );
};

export default PieChart;