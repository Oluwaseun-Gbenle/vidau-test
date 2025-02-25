import GenerateMarketing from "@/components/generate-marketing";
import Hero from "@/components/hero";
import HowToCreateURL from "@/components/how-to-create-url";
import NavBar from "@/components/navbar";
import NeedsMet from "@/components/needs-met";
import TransformProduct from "@/components/transform-product";
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
      <HowToCreateURL/>
      <GenerateMarketing/>
      <NeedsMet/>
      <TransformProduct/>
    </Fragment>
  );
}
