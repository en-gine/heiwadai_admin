import * as crypto from "crypto"
import { NextRequest, NextResponse } from "next/server"

const ENCRYPT_KEY = process.env.ENCRYPT_KEY || ""
const ALGORITHM = "aes-256-cbc"

export const POST = async (req: NextRequest) => {
  const { plainText } = await req.json()
  const iv = crypto.randomBytes(16) // ランダムなIVを生成
  const key = Buffer.from(ENCRYPT_KEY, "utf8")
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv)
  let encrypted = cipher.update(plainText, "utf8", "base64")
  encrypted += cipher.final("base64")
  const encryptedText = `${iv.toString("base64")}:${encrypted}`
  return NextResponse.json({ encryptedText })
}
