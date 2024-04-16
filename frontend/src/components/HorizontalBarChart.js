import React from "react";
import { Bar } from "react-chartjs-2";

const HorizontalBarChart = ({ data }) => {
    // Group data by hour and count the occurrences of machine_status
    

    const chartData = {
        labels: data.map((_, index) => index), // Assuming you want consecutive numerical labels
        datasets: [
          {
            label: "Machine Status",
            backgroundColor: data.map(item => item.machine_status === 1 ? 'green' : 'yellow'),
            data: Array(data.length).fill(1), // All bars have a height of 1
          },
        ],
      };
    
    // Generate summary
    const numZeros = data.filter(value => value.machine_status === 0).length;
    const numOnes = data.filter(value => value.machine_status === 1).length;

    return (
        <div>
            <h2>Machine Status</h2>
            <Bar
  data={chartData}
  options={{
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          fontSize: 10, // Adjust font size for x-axis labels
          maxRotation: 90, // Rotate x-axis labels for better readability
          minRotation: 90, // Rotate x-axis labels for better readability
          autoSkip: false, // Disable automatic skipping of labels
        },
        barThickness: 15, // Adjust the width of the bars
        categoryPercentage: 0.8, // Adjust space between bars
        barPercentage: 0.8, // Adjust width of bars relative to available space
        gridLines: {
          display: false // Hide grid lines on the x-axis
        }
      }],
      yAxes: [{
        ticks: {
          display: false, // Hide y-axis labels
        },
        gridLines: {
          display: false // Hide grid lines on the y-axis
        }
      }]
    },
    legend: {
      display: false
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5
      }
    },
    height: 200, // Adjust chart height
  }}
/>
            <h2>Summary</h2>
            <table className="border border-stripped">
                <thead>
                    <tr>
                        <th>Statistic</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Number of 0s</td>
                        <td>{numZeros}</td>
                    </tr>
                    <tr>
                        <td>Number of 1s</td>
                        <td>{numOnes}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default HorizontalBarChart;
