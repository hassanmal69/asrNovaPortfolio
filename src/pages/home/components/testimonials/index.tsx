import Testimonial from "@assets/testimonial.svg";
import Mudaris from "@assets/mudaris.png";
import "./testimonials.css";
import { Heading } from "@components/heading";
const Testimonials = () => {
  return (
    <section className="testimonials-section w-[100%] max-sm:w-full ">
      <Heading title="Testimonial" />

      <main className="testimonial-cards-wrapper">
        <img src={Mudaris} alt="img" />

        <div className="testimoinal-card">
          <p>
            Working with Asrnova has been an exceptional experience. Their
            professionalism, dedication, and attention to detail are unmatched.
            From start to finish, the team demonstrated a deep understanding of
            our needs and delivered outstanding results. Their communication was
            always clear, timely, and solution-driven. We are extremely happy
            with their services and highly recommend Asrnova to anyone looking
            for a reliable and highly professional partner.
          </p>
          <img src={Testimonial} alt="img" />
          <h4 className="azonix text-[#00F5A0]">CEO — Mudaris Academy</h4>
        </div>
      </main>
    </section>
  );
};

export default Testimonials;
