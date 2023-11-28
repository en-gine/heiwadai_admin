import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export enum Prefecture {
  Hokkaido,
  Aomori,
  Iwate,
  Miyagi,
  Akita,
  Yamagata,
  Fukushima,
  Ibaraki,
  Tochigi,
  Gunma,
  Saitama,
  Chiba,
  Tokyo,
  Kanagawa,
  Niigata,
  Toyama,
  Ishikawa,
  Fukui,
  Yamanashi,
  Nagano,
  Gifu,
  Shizuoka,
  Aichi,
  Mie,
  Shiga,
  Kyoto,
  Osaka,
  Hyogo,
  Nara,
  Wakayama,
  Tottori,
  Shimane,
  Okayama,
  Hiroshima,
  Yamaguchi,
  Tokushima,
  Kagawa,
  Ehime,
  Kochi,
  Fukuoka,
  Saga,
  Nagasaki,
  Kumamoto,
  Oita,
  Miyazaki,
  Kagoshima,
  Okinawa,
}

export const SelectPref = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="都道府県" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="overflow-y-auto max-h-[25rem]">
          <SelectGroup>
            <SelectLabel>北海道</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Hokkaido)}>
              {getPrefName(Prefecture.Hokkaido)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>東北</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Aomori)}>
              {getPrefName(Prefecture.Aomori)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Iwate)}>
              {getPrefName(Prefecture.Iwate)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Miyagi)}>
              {getPrefName(Prefecture.Miyagi)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Akita)}>
              {getPrefName(Prefecture.Akita)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Akita)}>
              {getPrefName(Prefecture.Akita)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Yamagata)}>
              {getPrefName(Prefecture.Yamagata)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Fukushima)}>
              {getPrefName(Prefecture.Fukushima)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>関東</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Ibaraki)}>
              {getPrefName(Prefecture.Ibaraki)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Tochigi)}>
              {getPrefName(Prefecture.Tochigi)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Gunma)}>
              {getPrefName(Prefecture.Gunma)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Saitama)}>
              {getPrefName(Prefecture.Saitama)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Chiba)}>
              {getPrefName(Prefecture.Chiba)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Tokyo)}>
              {getPrefName(Prefecture.Tokyo)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Kanagawa)}>
              {getPrefName(Prefecture.Kanagawa)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>中部</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Niigata)}>
              {getPrefName(Prefecture.Niigata)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Toyama)}>
              {getPrefName(Prefecture.Toyama)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Ishikawa)}>
              {getPrefName(Prefecture.Ishikawa)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Fukui)}>
              {getPrefName(Prefecture.Fukui)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Yamanashi)}>
              {getPrefName(Prefecture.Yamanashi)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Nagano)}>
              {getPrefName(Prefecture.Nagano)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Gifu)}>
              {getPrefName(Prefecture.Gifu)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Shizuoka)}>
              {getPrefName(Prefecture.Shizuoka)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Aichi)}>
              {getPrefName(Prefecture.Aichi)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>近畿</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Mie)}>
              {getPrefName(Prefecture.Mie)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Shiga)}>
              {getPrefName(Prefecture.Shiga)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Kyoto)}>
              {getPrefName(Prefecture.Kyoto)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Osaka)}>
              {getPrefName(Prefecture.Osaka)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Hyogo)}>
              {getPrefName(Prefecture.Hyogo)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Nara)}>
              {getPrefName(Prefecture.Nara)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Wakayama)}>
              {getPrefName(Prefecture.Wakayama)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>中国</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Tottori)}>
              {getPrefName(Prefecture.Tottori)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Shimane)}>
              {getPrefName(Prefecture.Shimane)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Okayama)}>
              {getPrefName(Prefecture.Okayama)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Hiroshima)}>
              {getPrefName(Prefecture.Hiroshima)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Yamaguchi)}>
              {getPrefName(Prefecture.Yamaguchi)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>四国</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Tokushima)}>
              {getPrefName(Prefecture.Tokushima)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Kagawa)}>
              {getPrefName(Prefecture.Kagawa)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Ehime)}>
              {getPrefName(Prefecture.Ehime)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Kochi)}>
              {getPrefName(Prefecture.Kochi)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>九州・沖縄</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Fukuoka)}>
              {getPrefName(Prefecture.Fukuoka)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Saga)}>
              {getPrefName(Prefecture.Saga)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Nagasaki)}>
              {getPrefName(Prefecture.Nagasaki)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Kumamoto)}>
              {getPrefName(Prefecture.Kumamoto)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Oita)}>
              {getPrefName(Prefecture.Oita)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Miyazaki)}>
              {getPrefName(Prefecture.Miyazaki)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Kagoshima)}>
              {getPrefName(Prefecture.Kagoshima)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Okinawa)}>
              {getPrefName(Prefecture.Okinawa)}
            </SelectItem>
          </SelectGroup>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

function getPrefName(p: Prefecture): string {
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
  }
}
