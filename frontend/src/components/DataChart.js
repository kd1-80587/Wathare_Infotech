
import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { CategoryScale, TimeScale, LinearScale, BarElement, Title } from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import the date adapter

Chart.register(CategoryScale, TimeScale, LinearScale, BarElement, Title, ...registerables);

function DataChart({ data }) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current && chartRef.current.chartInstance) {
            chartRef.current.chartInstance.destroy(); // Check if chartRef.current.chartInstance exists
        }
    }, [data]);

    // Process data to generate chart data
    const chartData = {
        labels: data.map(item => item.ts), // Assuming ts is the timestamp field
        datasets: [{
            label: 'Sample Values',
            data: data.map(item => item.machine_status === 1 ? 1 : 0), // Map machine_status to 1 or 0
            backgroundColor: data.map(item => item.machine_status === 1 ? 'green' : 'yellow'), // Set colors based on machine_status
            borderColor: 'rgba(255, 99, 132, 1)', // Default color
            borderWidth: 1
        }]        
    };

    console.log('Chart data:', chartData); // Log the chart data

    return (
        <div>
            <h2>Data Chart</h2>
            <Bar
                ref={chartRef}
                data={chartData}
                options={{
                    scales: {
                        x: {
                            type: 'time', // Use 'time' for time scale
                            time: {
                                parser: 'yyyy-MM-dd HH:mm:ss', // Specify the timestamp format
                                unit: 'hour', // Adjust based on filtering
                                displayFormats: {
                                    hour: 'yyyy-MM-dd HH:mm' // Format for hour scale
                                }
                            }
                        },
                        y: {
                            // Optionally configure the y-axis scale here
                        }
                    }
                }}
            />
        </div>
    );
}

export default DataChart;