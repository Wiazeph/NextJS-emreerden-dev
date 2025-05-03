export interface WhatIUse {
  name: string
  path:
    | string
    | {
        website?: string
        firefox?: string
        chrome?: string
      }
  browser?: ('Firefox' | 'Chrome')[]
}
