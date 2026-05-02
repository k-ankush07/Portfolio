import { useEffect, useState } from "react";

export function useGithubData(username) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        {
          user(login: "${username}") {
            name
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
          }
        }
        `,
      }),
    })
      .then(res => res.json())
      .then(res => setData(res.data.user));
  }, [username]);

  return data;
}