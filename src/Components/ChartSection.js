import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Pie2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Pie2D, FusionTheme);

const ChartSection = ({ username }) => {
  const [languagesData, setLanguagesData] = useState([]);
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchRepoData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch data for user: ${username}`);
        }
        const repos = await response.json();

        // Process languages
        const languagesMap = {};
        repos.forEach((repo) => {
          const { language } = repo;
          if (language) {
            languagesMap[language] = (languagesMap[language] || 0) + 1;
          }
        });

        const processedLanguages = Object.keys(languagesMap).map((key) => ({
          name: key,
          value: languagesMap[key],
          label: key, // For FusionCharts
        }));

        // Process repositories
        const processedRepoData = repos
          .map((repo) => ({
            name: repo.name,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            label: repo.name, // For FusionCharts
            value: repo.forks_count, // For FusionCharts
          }))
          .sort((a, b) => b.forks - a.forks)
          .slice(0, 5); // Top 5 most forked

        setLanguagesData(processedLanguages);
        setRepoData(processedRepoData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRepoData();
  }, [username]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384"];

  if (loading) return <p  className='text-center text-white'>Loading charts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {/* Recharts Pie Chart */}
      <div className="w-[400px] bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-center font-semibold">Languages (Recharts)</h3>
        <PieChart width={300} height={300}>
          <Pie
            data={languagesData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {languagesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      {/* Recharts Bar Chart */}
      <div className="w-[400px] bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-center font-semibold">Most Forked Repos (Recharts)</h3>
        <BarChart width={300} height={300} data={repoData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="stars" fill="#8884d8" />
          <Bar dataKey="forks" fill="#82ca9d" />
        </BarChart>
      </div>

      {/* FusionCharts Doughnut */}
      <div className="w-[400px] bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-center font-semibold">Stars Per Language (FusionCharts)</h3>
        <ReactFC
          type="doughnut2d"
          width="100%"
          height="300"
          dataFormat="json"
          dataSource={{
            chart: {
              caption: "Stars Per Language",
              theme: "fusion",
              decimals: 1,
              pieRadius: "45%",
            },
            data: languagesData,
          }}
        />
      </div>

      {/* FusionCharts Bar Chart */}
      <div className="w-[400px] bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-center font-semibold">Most Forked Repos (FusionCharts)</h3>
        <ReactFC
          type="bar2d"
          width="100%"
          height="300"
          dataFormat="json"
          dataSource={{
            chart: {
              caption: "Most Forked Repositories",
              xAxisName: "Repos",
              yAxisName: "Forks",
              theme: "fusion",
            },
            data: repoData,
          }}
        />
      </div>
    </div>
  );
};

export default ChartSection;
