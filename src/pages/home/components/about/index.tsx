const About = () => {
  return (
    <section>
      <h2>{aboutUs.title}</h2>
      <p>{aboutUs.intro}</p>
    </section>
  );
};

export default About;
const aboutUs = {
  title: "About Us",
  intro:
    "At Asrnova, we believe that real innovation starts with code. In a world driven by technology, businesses and startups need more than just a website—they need robust, scalable digital solutions that solve real problems. That’s why we don’t just build software; we engineer experiences that make a lasting impact.",

  sections: [
    {
      heading: "Why We Exist",
      content:
        "We started Asrnova to bridge the gap between vision and execution. Too many great ideas fail due to a lack of technical expertise. Our mission is to empower startups, educators, and businesses with custom-built software that is scalable, efficient, and future-proof.",
    },
    {
      heading: "How We Do It",
      content:
        "Our process is built on strategy, creativity, and cutting-edge technology. Every line of code is written with purpose, every feature designed for impact. We follow agile methodologies, ensuring flexibility and innovation at every step. Whether it’s an MVP, a SaaS platform, or a learning management system, we build with growth in mind.",
    },
    {
      heading: "What We Do",
      content:
        "From full-stack web applications to mobile app development, we specialize in building **custom** digital products. Our expertise includes startup MVPs, scalable SaaS solutions, learning management systems (LMS), admin dashboards, and business automation tools. We don’t work with templates or drag-and-drop solutions—only real, high-performance software.",
    },
  ],

  closing:
    "At Asrnova, we don’t just write code—we create technology that shapes the future.",
};


