export interface Education {
  name: string
  degree: string
  field: string
  date: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
  credentialUrl?: string
}

export interface Language {
  name: string
  proficiency: string
}
