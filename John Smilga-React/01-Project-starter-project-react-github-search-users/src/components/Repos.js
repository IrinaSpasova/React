import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  //console.log(repos);

  let languages = repos.reduce((total, item) => {
    // 04:40 https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/21054962#overview :
    //console.log(item);
    const { language, stargazers_count } = item;
    if (!language) return total;
    //test: total['random']=30;
    if (!total[language]) {
      // test: total[language]=1;
      total[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      };
    } else {
      // test total[language] = total[language] + 1;

      // overwriting value: 11:45  https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/21054962#overview
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    //console.log(language);

    //always should return in reduce:
    return total;
  }, {});
  //console.log(languages);

  // we want to show only 5 languages most used by user:
  // languages = Object.values(languages).sort((a, b) => {
  //   return b.value - a.value; -this will return highest value first
  // }).slice(0, 5); -this will return top 5
  //console.log(languages);

  //most popular languages:
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value; //this will return highest value first
    })
    .slice(0, 5);
  //console.log(mostUsed);

  //most stars per language:
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);
  // console.log(mostPopular);

  // stars, forks
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );
  //console.log(stars);
  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();
  //console.log(stars);

  // not needed after dynamic data:
  // const chartData = [
  //   {
  //     label: "HTML",
  //     value: "13",
  //   },
  //   {
  //     label: "Css",
  //     value: "25",
  //   },
  //   {
  //     label: "JS",
  //     value: "60",
  //   },
  // ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        {/* <ExampleChart data={chartData}/> */}
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        <Doughnut2D data={mostPopular} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  /* Responsive: */
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
