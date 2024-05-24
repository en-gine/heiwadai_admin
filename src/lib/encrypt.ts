export const encrypt = async (plainText: string) => {
  const response = await fetch("/api/encrypt", {
    method: "POST",
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ plainText })
  })
  const data = await response.json()
  return data.encryptedText
}
