import styles from "../styles/Testimonial.module.scss";
import Container from "./Container";
import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import SectionTop from "./SectionTop";
import TestimonialButtonGroup from "./TestimonialButtonGroup";
import Carousel from "react-multi-carousel";
import Rating from "./Rating";

const reviews = [
  {
    id: 1,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: "/testimonial/avatar1.png",
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 4,
  },
  {
    id: 2,
    title: "Design Quality & performance",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: "/testimonial/avatar2.png",
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 5,
  },
  {
    id: 3,
    title: "Layout and organized layers",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: "/testimonial/avatar3.png",
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 5,
  },
  {
    id: 4,
    title: "Modern look & trending design",
    description:
      "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
    avatar: "/testimonial/avatar4.png",
    name: "Denny Hilguston",
    designation: "@denny.hil",
    review: 4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <TestimonialButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};

export default function Testimonial() {
  return (
    <section className={styles.testimonial}>
      <Container>
        <SectionTop>
          <div className={styles.head}>
            <SectionSubTitle text="TESTIMONIAL" />
            <SectionTitle text="Meet Client Satisfaction" />
          </div>
        </SectionTop>
      </Container>

      <div className={styles.carouselWrapper}>
        <Carousel {...carouselParams}>
          {reviews.map((review) => (
            <div className={styles.reviewCard} key={review.id}>
              <Rating rating={review.review} />
              <h3 className={styles.title}> {review.title} </h3>
              <p className={styles.description}> {review.description} </p>
              <div className={styles.card_footer}>
                <div className={styles.image}>
                  <img src={review.avatar} alt="client image" />
                </div>
                <div className={styles.reviewer_info}>
                  <h4> {review.name} </h4>
                  <p> {review.designation} </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
