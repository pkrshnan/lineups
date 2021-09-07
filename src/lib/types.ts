export interface Ability {
  id: number,
  name: string,
  description: string,
  has_lineups: boolean
}

export interface Agent {
  id: number,
  name: string,
  description: string,
  role: string,
  abilities: Ability[]
}

export interface Lineup {
  id: number
  location: string,
  description: string,
  author: string,
  link: string,
  map: string,
  ability: string
}
