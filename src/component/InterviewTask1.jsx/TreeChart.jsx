import React, { useEffect } from "react";

const TreeChart = () => {
  useEffect(() => {
    const loadGoogleCharts = () => {
      if (window.google && window.google.visualization && window.google.visualization.GeoChart) {
        drawChart();
      } else {
        const script = document.createElement("script");
        script.src = "https://www.gstatic.com/charts/loader.js";
        script.onload = () => {
          window.google.charts.load("current", { packages: ["geochart"] });
          window.google.charts.setOnLoadCallback(drawChart);
        };
        document.body.appendChild(script);
      }
    };

    const drawChart = () => {
      const data = window.google.visualization.arrayToDataTable([
        ["State", "Population (millions)"],
        ["West Bengal", 91.3],
        ["Punjab", 27.7],
        ["Haryana", 25.5],
        ["Tamil Nadu", 72.2],
        ["Gujarat", 60.4],
        ["Jharkhand", 33.0],
        ["Bihar", 104.0],
        ["Nagaland", 2.0],
        ["Rajasthan", 69.0],
        ["Maharashtra", 112.3],
        ["Jammu and Kashmir", 1.5],
        // Add other states as needed
      ]);

      const options = {
        region: "IN", // India
        displayMode: "regions",
        resolution: "provinces",
        colorAxis: { colors: ["#e0f2f1", "#26a69a", "#004d40"] },
        backgroundColor: "#81d4fa",
        datalessRegionColor: "#f8bbd0",
        defaultColor: "#f5f5f5",
        title: "Population of Indian States",
      };

      const chart = new window.google.visualization.GeoChart(document.getElementById("india_population_geochart"));
      chart.draw(data, options);
    };

    loadGoogleCharts();
  }, []);

  return <div id="india_population_geochart" style={{ width: "100%", height: "500px" }}></div>;
};

export default TreeChart;
