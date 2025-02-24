import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <NavBar />
      <Hero />
    </Fragment>
  );
}
