export type AsJSON<T> = T extends number | boolean | string | null
  ? T
  : T extends Array<infer U>
  ? AsJSONArray<U>
  : T extends object
  ? AsJSONObject<T>
  : string

type AsJSONArray<U> = U extends number | boolean | string | null
  ? U[]
  : U extends Array<infer V>
  ? AsJSONArray<V>[]
  : U extends object
  ? AsJSONObject<U>[]
  : string[]

type AsJSONObject<T> = {
  [P in keyof T]: AsJSON<T[P]>
}
