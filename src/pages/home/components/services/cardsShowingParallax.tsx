"use client";
import { ParallaxScrollSecond } from "./parallax-scroll-2";



export function ParallaxScrollSecondDemo({ services }: any) {
  const images = services.map((service: { title: String; description: String; }) => ({
    title: service.title,
    description: service.description,
    img: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
  }));

  return <ParallaxScrollSecond images={images} />;
}
