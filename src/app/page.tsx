import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import TryItNow from "@/components/try-it-now";
import WhyChooseUs from "@/components/why-choose-us";
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <TryItNow/>
      <WhyChooseUs/>
    </Fragment>
  );
}
