import { FunctionComponent, MouseEventHandler } from "react"
import { usePagination } from "../hooks/usePagination"

interface Props {
  onPageChange: CallableFunction
  currentPage: number
  count: number
}

interface PaginationItemProps {
  eventListener: MouseEventHandler<HTMLLIElement>
  value: string
  divider: boolean
  classname: string
}

const PaginationItem: FunctionComponent<PaginationItemProps> = ({
  eventListener,
  value,
  divider,
  classname,
}) => {
  return divider ? (
    <li>{value}</li>
  ) : (
    <li className={classname} onClick={eventListener}>
      <p>{value}</p>
    </li>
  )
}

const Pagination: FunctionComponent<Props> = (props) => {
  const { currentPage, onPageChange, count } = props
  const paginationRange = usePagination(currentPage, count)

  if (!paginationRange) return

  if (currentPage === 0 || paginationRange.length < 2) {
    return
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  return (
    <ul className="flex gap-5 w-full justify-center items-center">
      <li>
        <button
          className="text-white border-solid border-2 rounded-full p-3 flex justify-center items-center h-8 w-8 hover:bg-violet-300 hover:text-white transition-colors disabled:hover:bg-transparent disabled:text-gray-400"
          disabled={currentPage == 1}
          onClick={onPrevious}
        >
          {"<"}
        </button>
      </li>
      {paginationRange?.map((pageNumber) => {
        return (
          <PaginationItem
            classname={`border-solid text-white border-2 rounded-full p-3 cursor-pointer flex justify-center items-center h-8 w-8 hover:bg-violet-300 transition-colors ${
              pageNumber === currentPage
                ? "bg-custom-blue-100 text-white hover:bg-violet-600 scale-105"
                : ""
            }`}
            divider={pageNumber === "..."}
            eventListener={() => {
              onPageChange(pageNumber)
            }}
            value={pageNumber as string}
          />
        )
      })}
      <li onClick={onNext}>
        <button
          disabled={currentPage === count}
          onClick={onNext}
          className="text-white border-solid border-2 rounded-full p-3 flex justify-center items-center h-8 w-8 hover:bg-violet-300 hover:text-white transition-colors disabled:hover:bg-transparent disabled:text-gray-400"
        >
          {">"}
        </button>
      </li>
    </ul>
  )
}

export default Pagination
