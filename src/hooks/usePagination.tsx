import { useMemo } from "react"

export function usePagination(currentPage: number, totalCount: number) {
  debugger // eslint-disable-line no-debugger
  const pagintionRange = useMemo(() => {
    const pageRange = makeRange(1, totalCount)

    if (totalCount < 8) return pageRange

    if (currentPage < 5) {
      return [...pageRange.slice(0, 5), "...", totalCount]
    }

    if (currentPage < totalCount - 3) {
      return [
        1,
        "...",
        ...pageRange.slice(currentPage - 2, currentPage + 1),
        "...",
        totalCount,
      ]
    } else {
      return [1, "...", ...pageRange.slice(totalCount - 5, totalCount)]
    }

    return pageRange
  }, [currentPage, totalCount])

  return pagintionRange
}

function makeRange(start: number, end: number): Array<number> {
  const length = end + start - 1
  return Array.from({ length }, (_, idx) => idx + start)
}
