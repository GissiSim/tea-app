export interface User {
  uid: string
  name: string
  picture: string
  email: string
  $key: string
  $exists: () => boolean
}
