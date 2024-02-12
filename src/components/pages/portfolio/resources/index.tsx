'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PageHeaderComponent from '@/components/pages/page-header'
import PortfolioListComponent from '../portfolio-list'
import PortfolioSkeletonComponent from '@/components/ui/skeleton'
import type { Repo } from '@/types/repo'

type Props = {}

const ResourcesPageComponent = (props: Props) => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getRepoData = async () => {
    try {
      setIsLoading(true)

      const response = await axios.get(
        `https://api.github.com/users/Wiazeph/repos`
      )

      const data = response.data.filter((repo: Repo) =>
        repo.topics.includes('resource')
      )

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
        .sort((a: { stars: number }, b: { stars: number }) => b.stars - a.stars)

      setRepos(updatedRepos)

      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)

      console.error('Error fetching repository data:', error)
    }
  }

  useEffect(() => {
    getRepoData()
  }, [])

  return (
    <main className="Resources Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="resources."
          pageDescription="My projects with resources on many subjects"
        />

        {isLoading ? (
          <PortfolioSkeletonComponent />
        ) : (
          <PortfolioListComponent repoName={repos} />
        )}
      </div>
    </main>
  )
}

export default ResourcesPageComponent
