import type { SelectProps } from "@radix-ui/react-select"

import { Prefecture } from "@/api/v1/shared/Prefecture_pb"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

export const SelectPref = (props: SelectProps) => (
  <Select {...props}>
    <SelectTrigger>
      <SelectValue placeholder="都道府県" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup className="overflow-y-auto max-h-[25rem]">
        <SelectGroup>
          <SelectLabel>九州・沖縄</SelectLabel>
          <SelectItem value={Prefecture.Fukuoka.toString()}>
            {getPrefName(Prefecture.Fukuoka)}
          </SelectItem>
          <SelectItem value={Prefecture.Saga.toString()}>
            {getPrefName(Prefecture.Saga)}
          </SelectItem>
          <SelectItem value={Prefecture.Nagasaki.toString()}>
            {getPrefName(Prefecture.Nagasaki)}
          </SelectItem>
          <SelectItem value={Prefecture.Kumamoto.toString()}>
            {getPrefName(Prefecture.Kumamoto)}
          </SelectItem>
          <SelectItem value={Prefecture.Oita.toString()}>
            {getPrefName(Prefecture.Oita)}
          </SelectItem>
          <SelectItem value={Prefecture.Miyazaki.toString()}>
            {getPrefName(Prefecture.Miyazaki)}
          </SelectItem>
          <SelectItem value={Prefecture.Kagoshima.toString()}>
            {getPrefName(Prefecture.Kagoshima)}
          </SelectItem>
          <SelectItem value={Prefecture.Okinawa.toString()}>
            {getPrefName(Prefecture.Okinawa)}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>北海道</SelectLabel>
          <SelectItem value={Prefecture.Hokkaido.toString()}>
            {getPrefName(Prefecture.Hokkaido)}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>東北</SelectLabel>
          <SelectItem value={Prefecture.Aomori.toString()}>
            {getPrefName(Prefecture.Aomori)}
          </SelectItem>
          <SelectItem value={Prefecture.Iwate.toString()}>
            {getPrefName(Prefecture.Iwate)}
          </SelectItem>
          <SelectItem value={Prefecture.Miyagi.toString()}>
            {getPrefName(Prefecture.Miyagi)}
          </SelectItem>
          <SelectItem value={Prefecture.Akita.toString()}>
            {getPrefName(Prefecture.Akita)}
          </SelectItem>
          <SelectItem value={Prefecture.Yamagata.toString()}>
            {getPrefName(Prefecture.Yamagata)}
          </SelectItem>
          <SelectItem value={Prefecture.Fukushima.toString()}>
            {getPrefName(Prefecture.Fukushima)}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>関東</SelectLabel>
          <SelectItem value={Prefecture.Ibaraki.toString()}>
            {getPrefName(Prefecture.Ibaraki)}
          </SelectItem>
          <SelectItem value={Prefecture.Tochigi.toString()}>
            {getPrefName(Prefecture.Tochigi)}
          </SelectItem>
          <SelectItem value={Prefecture.Gunma.toString()}>
            {getPrefName(Prefecture.Gunma)}
          </SelectItem>
          <SelectItem value={Prefecture.Saitama.toString()}>
            {getPrefName(Prefecture.Saitama)}
          </SelectItem>
          <SelectItem value={Prefecture.Chiba.toString()}>
            {getPrefName(Prefecture.Chiba)}
          </SelectItem>
          <SelectItem value={Prefecture.Tokyo.toString()}>
            {getPrefName(Prefecture.Tokyo)}
          </SelectItem>
          <SelectItem value={Prefecture.Kanagawa.toString()}>
            {getPrefName(Prefecture.Kanagawa)}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>中部</SelectLabel>
          <SelectItem value={Prefecture.Niigata.toString()}>
            {getPrefName(Prefecture.Niigata)}
          </SelectItem>
          <SelectItem value={Prefecture.Toyama.toString()}>
            {getPrefName(Prefecture.Toyama)}
          </SelectItem>
          <SelectItem value={Prefecture.Ishikawa.toString()}>
            {getPrefName(Prefecture.Ishikawa)}
          </SelectItem>
          <SelectItem value={Prefecture.Fukui.toString()}>
            {getPrefName(Prefecture.Fukui)}
          </SelectItem>
          <SelectItem value={Prefecture.Yamanashi.toString()}>
            {getPrefName(Prefecture.Yamanashi)}
          </SelectItem>
          <SelectItem value={Prefecture.Nagano.toString()}>
            {getPrefName(Prefecture.Nagano)}
          </SelectItem>
          <SelectItem value={Prefecture.Gifu.toString()}>
            {getPrefName(Prefecture.Gifu)}
          </SelectItem>
          <SelectItem value={Prefecture.Shizuoka.toString()}>
            {getPrefName(Prefecture.Shizuoka)}
          </SelectItem>
          <SelectItem value={Prefecture.Aichi.toString()}>
            {getPrefName(Prefecture.Aichi)}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>近畿</SelectLabel>
          <SelectItem value={Prefecture.Mie.toString()}>
            {getPrefName(Prefecture.Mie)}
          </SelectItem>
          <SelectItem value={Prefecture.Shiga.toString()}>
            {getPrefName(Prefecture.Shiga)}
          </SelectItem>
          <SelectItem value={Prefecture.Kyoto.toString()}>
            {getPrefName(Prefecture.Kyoto)}
          </SelectItem>
          <SelectItem value={Prefecture.Osaka.toString()}>
            {getPrefName(Prefecture.Osaka)}
          </SelectItem>
          <SelectItem value={Prefecture.Hyogo.toString()}>
            {getPrefName(Prefecture.Hyogo)}
          </SelectItem>
          <SelectItem value={Prefecture.Nara.toString()}>
            {getPrefName(Prefecture.Nara)}
          </SelectItem>
          <SelectItem value={Prefecture.Wakayama.toString()}>
            {getPrefName(Prefecture.Wakayama)}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>中国</SelectLabel>
          <SelectItem value={Prefecture.Tottori.toString()}>
            {getPrefName(Prefecture.Tottori)}
          </SelectItem>
          <SelectItem value={Prefecture.Shimane.toString()}>
            {getPrefName(Prefecture.Shimane)}
          </SelectItem>
          <SelectItem value={Prefecture.Okayama.toString()}>
            {getPrefName(Prefecture.Okayama)}
          </SelectItem>
          <SelectItem value={Prefecture.Hiroshima.toString()}>
            {getPrefName(Prefecture.Hiroshima)}
          </SelectItem>
          <SelectItem value={Prefecture.Yamaguchi.toString()}>
            {getPrefName(Prefecture.Yamaguchi)}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>四国</SelectLabel>
          <SelectItem value={Prefecture.Tokushima.toString()}>
            {getPrefName(Prefecture.Tokushima)}
          </SelectItem>
          <SelectItem value={Prefecture.Kagawa.toString()}>
            {getPrefName(Prefecture.Kagawa)}
          </SelectItem>
          <SelectItem value={Prefecture.Ehime.toString()}>
            {getPrefName(Prefecture.Ehime)}
          </SelectItem>
          <SelectItem value={Prefecture.Kochi.toString()}>
            {getPrefName(Prefecture.Kochi)}
          </SelectItem>
        </SelectGroup>
      </SelectGroup>
    </SelectContent>
  </Select>
)

// eslint-disable-next-line complexity
export const getPrefName = (p: Prefecture) => {
  switch (p) {
    case Prefecture.Hokkaido:
      return "北海道"
    case Prefecture.Aomori:
      return "青森県"
    case Prefecture.Iwate:
      return "岩手県"
    case Prefecture.Miyagi:
      return "宮城県"
    case Prefecture.Akita:
      return "秋田県"
    case Prefecture.Yamagata:
      return "山形県"
    case Prefecture.Fukushima:
      return "福島県"
    case Prefecture.Ibaraki:
      return "茨城県"
    case Prefecture.Tochigi:
      return "栃木県"
    case Prefecture.Gunma:
      return "群馬県"
    case Prefecture.Saitama:
      return "埼玉県"
    case Prefecture.Chiba:
      return "千葉県"
    case Prefecture.Tokyo:
      return "東京都"
    case Prefecture.Kanagawa:
      return "神奈川県"
    case Prefecture.Niigata:
      return "新潟県"
    case Prefecture.Toyama:
      return "富山県"
    case Prefecture.Ishikawa:
      return "石川県"
    case Prefecture.Fukui:
      return "福井県"
    case Prefecture.Yamanashi:
      return "山梨県"
    case Prefecture.Nagano:
      return "長野県"
    case Prefecture.Gifu:
      return "岐阜県"
    case Prefecture.Shizuoka:
      return "静岡県"
    case Prefecture.Aichi:
      return "愛知県"
    case Prefecture.Mie:
      return "三重県"
    case Prefecture.Shiga:
      return "滋賀県"
    case Prefecture.Kyoto:
      return "京都府"
    case Prefecture.Osaka:
      return "大阪府"
    case Prefecture.Hyogo:
      return "兵庫県"
    case Prefecture.Nara:
      return "奈良県"
    case Prefecture.Wakayama:
      return "和歌山県"
    case Prefecture.Tottori:
      return "鳥取県"
    case Prefecture.Shimane:
      return "島根県"
    case Prefecture.Okayama:
      return "岡山県"
    case Prefecture.Hiroshima:
      return "広島県"
    case Prefecture.Yamaguchi:
      return "山口県"
    case Prefecture.Tokushima:
      return "徳島県"
    case Prefecture.Kagawa:
      return "香川県"
    case Prefecture.Ehime:
      return "愛媛県"
    case Prefecture.Kochi:
      return "高知県"
    case Prefecture.Fukuoka:
      return "福岡県"
    case Prefecture.Saga:
      return "佐賀県"
    case Prefecture.Nagasaki:
      return "長崎県"
    case Prefecture.Kumamoto:
      return "熊本県"
    case Prefecture.Oita:
      return "大分県"
    case Prefecture.Miyazaki:
      return "宮崎県"
    case Prefecture.Kagoshima:
      return "鹿児島県"
    case Prefecture.Okinawa:
      return "沖縄県"
    case Prefecture.Unspecified:
      return "未指定"
    default:
      return ""
  }
}
