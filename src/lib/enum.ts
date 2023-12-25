import { MailMagazineStatus } from "@/api/v1/admin/MailMagazine_pb"

export const getMailMagazineStatusName = (status: number): string => {
  switch (status) {
    case MailMagazineStatus.MailMagazineDraft:
      return "下書き"
    case MailMagazineStatus.MailMagazineSaved:
      return "保存済み"
    case MailMagazineStatus.MailMagazineSentCompleted:
      return "送信完了"
    case MailMagazineStatus.MailMagazineSentUnCompleted:
      return "送信未完了"
    default:
      return "不明"
  }
}
