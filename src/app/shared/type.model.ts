export interface Type {
  id: number
  name: string
  bio: string
  $key: string
  $exists: () => boolean
}
