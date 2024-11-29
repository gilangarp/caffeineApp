import { TestimonialCard } from "../../components/cards/TestimonialCard";
import { UseTesimonial } from "./UseTesimonial";

export const Testimonial = () => {
  const { user, currentPage, handlePageChange, pagination, dummyTestimonial } =
    UseTesimonial();

  return (
    <main>
      {user && user.length > 0 ? (
        user.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            totalPages={pagination.totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            testimonial={testimonial}
          />
        ))
      ) : (
        <TestimonialCard
          key="dummy"
          totalPages={pagination.totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          testimonial={dummyTestimonial}
        />
      )}
    </main>
  );
};
