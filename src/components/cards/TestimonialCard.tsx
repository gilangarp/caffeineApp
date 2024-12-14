import { ITestimonialBody } from "../../redux/types/TestimonialType";
import { PagePaginationArrows } from "../pagination/PagePaginationArrows";
import { Rating } from "../rating/Rating";

interface ITestimonialCardProps {
  testimonial: ITestimonialBody;
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const TestimonialCard = ({
  testimonial,
  currentPage,
  onPageChange,
  totalPages,
}: ITestimonialCardProps) => {
  return (
    <div className="min-h-[50vh] gap-10 font-jakarta lg:min-h-[50vh] grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 bg-gradient-to-r pl-5 md:pr-10 pr-5 md:pl-10 lg:pl-20 lg:pr-20 py-5 lg:py-10">

      <div className="flex items-center justify-center">
        <img
          className="w-full h-[261px] md:h-[332px] object-cover object-top"
          src={testimonial.profile_image || "default-image-url"}
          alt={testimonial.full_name}
        />
      </div>

      <div className="grid">
        <p className="text-white font-normal flex items-center">TESTIMONIAL</p>
        <div className="flex items-center gap-3">
          <div className="bg-primary w-2 h-12"></div>
          <h1 className="text-heading_mobile lg:text-heading_desktop text-white">
            {testimonial.full_name}
          </h1>
        </div>
        <p className="text-base capitalize font-normal flex items-center text-primary">
          {testimonial.role}
        </p>
        <p className="text-white text-base font-normal">
          {testimonial.comment}
        </p>
        <Rating rating={Number(testimonial.rating)} />
        {/* Pagination Controls */}
        <div className="flex gap-2 mt-2">
          <PagePaginationArrows
            pages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>

    </div>
  );
};
