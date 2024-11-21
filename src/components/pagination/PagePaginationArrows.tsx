import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface PagePaginationProps {
    pages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  }
  
  export const PagePaginationArrows = ({
    pages,
    currentPage,
    onPageChange,
  }: PagePaginationProps) => {
    if (pages <= 1) {
      return null;
    }
  
    return (
      <div className="grid grid-cols-1 gap-3 justify-center mt-8">
        <div className="flex gap-5">
          <button
            className={`flex justify-center items-center rounded-full w-10 h-10 ${
              currentPage > 1 ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}>
            <KeyboardArrowLeftIcon/>
          </button>
  
          <button
            className={`flex justify-center items-center rounded-full w-10 h-10 ${
              currentPage < pages ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === pages}>
            <KeyboardArrowRightIcon/>
          </button>
        </div>
        {/* Dots Indicator */}
        <div className="flex gap-2 px-2">
          {Array.from({ length: pages }).map((_, index) => (
            <div
              key={index}
              className={`w-3 ${
                currentPage === index + 1 ? "h-1 w-4 rounded-3xl bg-primary" : "h-[5px] w-[5px] rounded-full bg-gray-300"
              }`}
              onClick={() => onPageChange(index + 1)}
            />
          ))}
        </div>
      </div>
    );
  };
  