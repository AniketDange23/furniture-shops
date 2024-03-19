// TestimonialCarousel.js
import React, { useState } from "react";
import "./TestimonialCarousel.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const testimonials = [
  // {
  //   avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder URL
  //   description: "Donecvitae odio quis nisl dapibus  Aenean rutrum metus in libero scelerisque cursus.  est ac felis",
  //   position: "CTO, ",
  //   username: "John Doe",
  //   company: "Acme Technologies"
  // },
  {
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder URL
    description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.   ",
    position: "CEO ,",
    username: "Jane Smith",
    company: "TechSolutions Inc."
  },
  {
    avatar: "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder URL
    description:
      "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.",
    position: "Marketing Manager,",
    username: "Alice Johnson",
    company: "Global Solutions Ltd."
  },
  {
    avatar: "https://images.unsplash.com/photo-1521252659862-eec69941b071?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder URL
    description:
      "Exceptional support team! They went above and beyond to assist us.",
    position: "Operations Director,",
    username: "Bob Williams",
    company: "Innovative Solutions LLC"
  },
];


const TestimonialCarousel = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const goToPreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="testimonial">
      <h1>Testimonials</h1>
      <div className="testimonial-carousel">
        <div className="testimonial">
          <p className="description">"{currentTestimonial.description}"</p>
          <img
            className="avatar"
            src={currentTestimonial.avatar}
            alt="Avatar"
          />
          <p className="username">{currentTestimonial.username}</p>

          <p className="position">{currentTestimonial.position} {currentTestimonial.company}</p>
        </div>
        <button className="prev" onClick={goToPreviousTestimonial}>
          <IoIosArrowBack />
        </button>
        <button className="next" onClick={goToNextTestimonial}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
