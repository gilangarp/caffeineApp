import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PaginationNumbers({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  
  const renderPaginationNumber = (pageNumber: number) => (
    <button
      key={pageNumber}
      onClick={() => onPageChange(pageNumber)}
      className={`px-5 py-2 rounded-full transition-opacity duration-200 hover:opacity-80 ${
        pageNumber === currentPage
          ? "bg-primary text-white font-bold"
          : "bg-[#E8E8E8] text-black"
      }`}>
      {pageNumber}
    </button>
  );

  const pageNumbers: JSX.Element[] = [];
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, startPage + 3);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(renderPaginationNumber(i));
  }

  return (
    <div className="flex justify-center gap-4">
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-3 bg-primary text-white rounded-full mr-2 transition-opacity duration-200 hover:opacity-80">
          <KeyboardArrowLeftIcon />
        </button>
      )}

      {pageNumbers}

      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-3 bg-primary text-white rounded-full transition-opacity duration-200 hover:opacity-80">
          <KeyboardArrowRightIcon />
        </button>
      )}
    </div>
  );
}
