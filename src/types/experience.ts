export interface Experience {
  name: string
  icon: string
  path: string
  date: string
  position: string
  projects?: Project[]
}

export interface Project {
  name: string
  path: string
  description: string
  whatIDid?: string[]
  stack?: string[]
}
