import { Prefecture } from "@/api/v1/shared/Prefecture_pb"

export type User = {
  id: string
  firstName: string
  lastName: string
  firstNameKana: string
  lastNameKana: string
  companyName: string
  birthDate: string
  zipCode: string
  prefecture: Prefecture
  city: string
  address: string
  tel: string
  mail: string
  acceptMail: boolean
  checkInAt: string
  internalMessage?: string
}

const data: User[] = [
  {
    id: "m5gr84i9",
    firstName: "m5gr",
    lastName: "84i9",
    firstNameKana: "m5gr",
    lastNameKana: "84i9",
    companyName: "string",
    birthDate: "string",
    zipCode: "string",
    prefecture: Prefecture.Fukuoka,
    city: "string",
    address: "string",
    tel: "string",
    mail: "ken99@yahoo.com",
    acceptMail: true,
    checkInAt: "2023/9/20"
  },
  {
    id: "3u1reuv4",
    firstName: "3u1reuv4",
    lastName: "84i9",
    firstNameKana: "m5gr",
    lastNameKana: "84i9",
    companyName: "string",
    birthDate: "string",
    zipCode: "string",
    prefecture: Prefecture.Fukuoka,
    city: "string",
    address: "string",
    tel: "string",
    mail: "ken99@yahoo.com",
    acceptMail: true,
    checkInAt: "2023/9/20"
  },
  {
    id: "derv1ws0",
    firstName: "derv1ws0",
    lastName: "84i9",
    firstNameKana: "m5gr",
    lastNameKana: "84i9",
    companyName: "string",
    birthDate: "string",
    zipCode: "string",
    prefecture: Prefecture.Fukuoka,
    city: "string",
    address: "string",
    tel: "string",
    mail: "rrr33ken99@yahoo.com",
    acceptMail: false,
    checkInAt: "2023/9/20"
  },
  {
    id: "5kma53ae",
    firstName: "5kma53ae",
    lastName: "84i9",
    firstNameKana: "m5gr",
    lastNameKana: "84i9",
    companyName: "string",
    birthDate: "string",
    zipCode: "string",
    prefecture: Prefecture.Fukuoka,
    city: "string",
    address: "string",
    tel: "string",
    mail: "a22ken99@yahoo.com",
    acceptMail: true,
    checkInAt: "2023/9/20"
  },
  {
    id: "bhqecj4p",
    firstName: "bhqecj4p",
    lastName: "84i9",
    firstNameKana: "m5gr",
    lastNameKana: "84i9",
    companyName: "string",
    birthDate: "string",
    zipCode: "string",
    prefecture: Prefecture.Fukuoka,
    city: "string",
    address: "string",
    tel: "string",
    mail: "ken99@yahoo.com",
    acceptMail: true,
    checkInAt: "2023/9/20"
  }
]

export const getUsers = (): User[] => data

export const getSingleUser = (id: User["id"]): User =>
  data.find((user) => user.id === id)!
