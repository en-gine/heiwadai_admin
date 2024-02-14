import { CouponStatus } from "@/api/v1/shared/Coupon_pb"

export const getCouponStatusName = (status: number): string => {
  switch (status) {
    case CouponStatus.COUPON_DRAFT:
      return "下書き"
    case CouponStatus.COUPON_SAVED:
      return "保存済"
    case CouponStatus.COUPON_ISSUED:
      return "発行済"
    default:
      return "不明"
  }
}
