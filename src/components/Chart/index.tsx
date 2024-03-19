import React, { useCallback, useEffect, useRef } from "react";
import { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js";

import { Chart as ChartJS } from 'chart.js/auto';
import './chart.scss';
import { Questions } from "../../config/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  questions: Questions[];
};

const COUNT = 12;

const getRandomColor = () => { //generates random colours and puts them in string
  const colors = [];
  for (let i = 0; i < 3; i++) {
    let letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let x = 0; x < 6; x++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colors.push(color);
  }
  return colors;
};

const ChartLine = ({ questions }: Props) => {

  const refChart = useRef<Chart | null>(null);
  const refPrev = useRef<number>(0);


  useEffect(() => {
    if (!refChart.current) {
      return;
    }

    if (questions.length > refPrev.current) {
      refChart.current.data.labels = new Array(COUNT).fill('').map((item, i) => i + 1);
      const item = questions[questions.length - 1];
      refChart.current.data.datasets.push({
        label: item.label,
        data: new Array(COUNT).fill('').map((item, i) => Math.floor(Math.random() * (300 - 50) ) + 50),
        fill: false,
        tension: 0.4,
        cubicInterpolationMode: 'monotone',
        borderColor: getRandomColor(),
      });
    } else {
      const data = refChart.current.data.datasets.filter((item) => questions.some((q) => q.label !== item.label));
      refChart.current.data.datasets = data;
    }

    refPrev.current = questions.length;
    refChart.current?.update();
  }, [questions]);

  const initRef = useCallback((ref: HTMLCanvasElement | null) => {
    if (ref) {
      refChart.current = new Chart(ref, {
        type: 'line',
        // @ts-ignore
        data: [],
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
              }
            },
            title: {
              display: false,
            },
          },
          interaction: {
            intersect: false,
          },
          scales: {
            x: {
              grid: {
                color: 'rgba(73, 73, 73, 0.5)',
              },
              display: true,
              title: {
                display: true
              }
            },
            y: {
              grid: {
                color: 'rgba(73, 73, 73, 0.5)',
              },
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