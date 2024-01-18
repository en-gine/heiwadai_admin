import { Button } from "@/components/ui/button"
import { PageResponse } from "@/types/Page"

export type Props = PageResponse & {
  onPageClick: (page: number) => void
}
export const Pagination = ({
  CurrentPage,
  TotalPage,
  TotalCount,
  onPageClick
}: Props) => (
  <>
    {!!TotalCount && <div className="text-right">総数:{TotalCount}件</div>}
    <div>
      {[...Array(TotalPage)].map((_, i) => {
        const page = i + 1
        const isCurrent = page === CurrentPage
        return isCurrent ? (
          <Button
            variant="outline"
            size="sm"
            key={page}
            className="pointer-events-none"
          >
            {page}
          </Button>
        ) : (
          <Button
            variant="outline"
            onClick={() => onPageClick(page)}
            size="sm"
            key={page}
          >
            {page}
          </Button>
        )
      })}
    </div>
  </>
)
