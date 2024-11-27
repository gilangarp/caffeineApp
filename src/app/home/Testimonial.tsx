import { TestimonialCard } from "../../components/cards/TestimonialCard";
import { UseHome } from "./UseHome";

export const Testimonial = () => {
  const {
    user,
    currentPageTesti,
    handlePageChange,
    pagination,
    dummyTestimonial,
  } = UseHome();

  return (
    <main>
      {user && user.length > 0 ? (
        user.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            totalPages={pagination.totalPages}
            currentPage={currentPageTesti}
            onPageChange={handlePageChange}
            testimonial={testimonial}
          />
        ))
      ) : (
        <TestimonialCard
          key="dummy"
          totalPages={pagination.totalPages}
          currentPage={currentPageTesti}
          onPageChange={handlePageChange}
          testimonial={dummyTestimonial}
        />
      )}
    </main>
  );
};
