'use client'

import React, { useState, useEffect } from 'react'
//
import axios from 'axios'
//
import PageHeaderComponent from '@/components/pages/page-header'
import PortfolioListComponent from '../portfolio-list'
//
import type { Repo } from '@/types/repo'
//
import { Skeleton } from '@/components/ui/skeleton'

type Props = {}

const StudiesPageComponent = (props: Props) => {
  const [repos, setRepos] = useState<Repo[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getRepoData = async () => {
    try {
      setIsLoading(true)

      const response = await axios.get(
        `https://api.github.com/users/Wiazeph/repos`
      )

      const data = response.data.filter((repo: Repo) =>
        repo.topics.includes('study')
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
    <main className="Studies Page">
      <div className="Page-Content">
        <PageHeaderComponent
          pageTitle="studies."
          pageDescription="My simple studies and what I applied while learning"
        />

        {isLoading ? (
          <div className="Main-Card-List">
            {[...Array(4)].map((_, index) => (
              <Skeleton key={index} className="Main-Card-Skeleton" />
            ))}
          </div>
        ) : (
          <PortfolioListComponent repoName={repos} />
        )}
      </div>
    </main>
  )
}

export default StudiesPageComponent
