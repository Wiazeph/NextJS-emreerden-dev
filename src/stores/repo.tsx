import { create } from 'zustand'

interface RepoStore {
  repo: [] | null
  setRepo: (repo: []) => void
}

export const useRepoStore = create<RepoStore>((set) => ({
  repo: null,
  setRepo: (repo) => set({ repo }),
}))
