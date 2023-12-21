import Link from "next/link"

import { Button } from "@/components/ui/button"
import { PageResponse } from "@/types/Page"

export const Pagination = ({
  CurrentPage,
  TotalPage,
  TotalCount
}: PageResponse) => (
  <>
    {TotalCount && <div className="text-right">総数:{TotalCount}件</div>}
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
          <Link href={`./${page}`} key={page}>
            <Button variant="outline" size="sm" key={page}>
              {page}
            </Button>
          </Link>
        )
      })}
    </div>
  </>
)
