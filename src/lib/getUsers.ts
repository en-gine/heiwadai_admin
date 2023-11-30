import { Prefecture } from "@/components/parts/prefecture"

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
  CheckInAt: string
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
    CheckInAt: "2023/9/20",
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
    CheckInAt: "2023/9/20",
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
    mail: "ken99@yahoo.com",
    acceptMail: true,
    CheckInAt: "2023/9/20",
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
    mail: "ken99@yahoo.com",
    acceptMail: true,
    CheckInAt: "2023/9/20",
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
    CheckInAt: "2023/9/20",
  },
]

export const getUsers = (): User[] => {
  return data
}

export const getSingleUser = (id:User['id']): User | undefined => {
  return data.find((user) => user.id === id)
}