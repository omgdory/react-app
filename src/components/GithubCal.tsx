"use client";

import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";

const GithubCal = () => {
  const { theme } = useTheme();

  return (
    <>
      <div>
        <GitHubCalendar
          username="omgdory"
          colorScheme={theme === "dark" ? "dark" : "light"}
          showWeekdayLabels
          hideColorLegend
        />
      </div>
    </>
  );
};

export default GithubCal;
