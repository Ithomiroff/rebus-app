const getMocks = () => {
  const DATA_COUNT = 12;
  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }
  const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
  return  {
    labels: labels,
    datasets: [
      {
        label: 'Cubic interpolation (monotone)',
        data: datapoints,
        borderColor: '#2098FF',
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.4
      }, {
        label: 'Cubic interpolation',
        data: datapoints,
        borderColor: '#F8CC3D',
        fill: false,
        tension: 0.4
      },
    ]
  };
};

export {
  getMocks
}