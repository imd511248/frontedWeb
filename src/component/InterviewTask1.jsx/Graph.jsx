import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = () => {
  // Convert population strings to numbers (in millions) and temperature to numbers
  const processData = (data) => {
    return data.map((item) => {
      let populationInMillions;
      if (item.population.includes("Crore")) {
        populationInMillions = parseFloat(item.population.replace(" Crore", "")) * 10;
      } else if (item.population.includes("Lac")) {
        populationInMillions = parseFloat(item.population.replace(" Lac", "")) / 100;
      }
      const temperature = parseFloat(item.temperature.replace("°C", ""));
      return { ...item, population: populationInMillions, temperature };
    });
  };

  const data = processData([
    { city: "West_Bengal", state: "West_Bengal", population: "9.13 Crores", temperature: "15°C" },
    { city: "Punjab", state: "Punjab", population: "2.77 Crore", temperature: "19°C" },
    { city: "Haryana", state: "Haryana", population: "2.55 Crore", temperature: "12°C" },
    { city: "Tamil Nadu", state: "Tamil_Nadu", population: "7.22 Crore", temperature: "18°C" },
    { city: "Gujrat", state: "Gujrat", population: "6.04 Crore", temperature: "14°C" },
    { city: "jharkhand", state: "jharkhand", population: "3.30 Crore", temperature: "18°C" },
    { city: "Bihar", state: "Bihar", population: "10.40 Crore", temperature: "11°C" },
    { city: "Nagaland", state: "Nagaland", population: "20 Lac", temperature: "13°C" },
    { city: "Rajasthan", state: "Rajasthan", population: "6.90 Crore", temperature: "19°C" },
    { city: "Maharastra", state: "Maharastra", population: "11.23 Crore", temperature: "12°C" },
    { city: "Jammu", state: "Jammu", population: "15 Lac", temperature: "11°C" },
  ]);

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: "Population vs. Temperature Line Graph",
    },
    axisX: {
      title: "City",
      interval: 1,
    },
    axisY: {
      title: "Population (in millions)",
      includeZero: true,
      prefix: "",
      suffix: "M",
    },
    axisY2: {
      title: "Temperature (°C)",
      includeZero: true,
      prefix: "",
      suffix: "°C",
    },
    data: [
      {
        type: "line",
        name: "Population",
        showInLegend: true,
        axisYType: "primary",
        toolTipContent: "<b>{name}</b>: {y}M",
        dataPoints: data.map((item, index) => ({
          y: item.population,
          label: item.city,
          name: item.city,
        })),
      },
      {
        type: "line",
        name: "Temperature",
        showInLegend: true,
        axisYType: "secondary",
        toolTipContent: "<b>{name}</b>: {y}°C",
        dataPoints: data.map((item, index) => ({
          y: item.temperature,
          label: item.city,
          name: item.city,
        })),
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Graph;
