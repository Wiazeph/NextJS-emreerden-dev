'use client';

import React, { useState, useEffect } from 'react';
//
import axios from 'axios';
//
import type { Repo } from '@/types/repo';
//
import PageHeaderComponent from '@/components/page-header';
import PortfolioListComponent from '@/components/portfolio-list';

type Props = {};

const ProjectsPageComponent = (props: Props) => {
  const [repos, setRepos] = useState<Repo[]>([]);

  const getRepoData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/Wiazeph/repos`
      );

      const data = response.data.filter((repo: Repo) =>
        repo.topics.includes('project')
      );

      const updatedRepos = data
        .map((repo: Repo) => ({
          url: repo.html_url,
          live: repo.homepage,
          name: repo.name,
          desc: repo.description,
          stars: repo.stargazers_count,
          topics: repo.topics,
          img: `https://github.com/Wiazeph/${repo.name}/blob/main/thumbnail/${repo.name}.png?raw=true`,
        }))
        .sort(
          (a: { stars: number }, b: { stars: number }) => b.stars - a.stars
        );

      setRepos(updatedRepos);
    } catch (error) {
      console.error('Error fetching repository data:', error);
    }
  };

  useEffect(() => {
    getRepoData();
  }, []);

  return (
    <main className="Projects Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="projects"
          pageDescription="My projects I have done and are useable"
        />

        {repos.length > 0 && <PortfolioListComponent repoName={repos} />}
      </div>
    </main>
  );
};

export default ProjectsPageComponent;
