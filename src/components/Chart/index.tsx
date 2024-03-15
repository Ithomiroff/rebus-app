import React, { useCallback } from "react";
import { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js";

import { Chart as ChartJS } from 'chart.js/auto';
import { getMocks } from "./mock-chart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
const ChartLine = () => {

  const initRef = useCallback((ref: HTMLCanvasElement | null) => {
    if (ref) {
      new Chart(ref, {
        type: 'line',
        // @ts-ignore
        data: getMocks(),
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Line Chart - Cubic interpolation mode'
            },
          },
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'Value'
              },
              suggestedMin: -10,
              suggestedMax: 200
            }
          }
        },
      });
    }
  }, []);

  return (
    <div className="chart">
      <div className="chart-card">
        <canvas ref={initRef}></canvas>
      </div>
    </div>
  );
};

export default ChartLine;