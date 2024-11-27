import { useEffect, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../redux/hook";
import { testimonialThunk } from "../../redux/actions/Testimonial";
import { TestimonialCard } from "../../components/cards/TestimonialCard";

const dummyTestimonial = {
  full_name: "John Doe",
  comment:
    "This is a dummy testimonial to show how it would look in the app.",
  rating: "5",
  user_img: "https://via.placeholder.com/150",
  user_phone: "+1 234 567 890",
};

export const Testimonial = () => {
  const dispatch = useStoreDispatch();
  const { user, pagination } = useStoreSelector(
    (state) => state.testimonial
  );

  const [currentPage, setCurrentPage] = useState(pagination.currentPage);

  useEffect(() => {
    const testimonialPage = 1;
    dispatch(testimonialThunk({ currentPage, testimonialPage }));
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
