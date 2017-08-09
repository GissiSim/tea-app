export interface Event {
  name: string
  description: string
  type: string
  $key: string
  $exists: () => boolean
}
