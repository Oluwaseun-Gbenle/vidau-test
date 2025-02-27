import GenerateMarketing from "@/components/generate-marketing";
import Hero from "@/components/hero";
import HowToCreateURL from "@/components/how-to-create-url";
import NavBar from "@/components/navbar";
import NeedsMet from "@/components/needs-met";
import TransformProduct from "@/components/transform-product";
import TryItNow from "@/components/try-it-now";
import WhyChooseUs from "@/components/why-choose-us";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthenticReviews from "@/components/authentic-reviews";
import TrustedBy from "@/components/trusted-by";
import FAQ from "@/components/FAQ";
import OtherFeatures from "@/components/other-features";
import LearnMore from "@/components/learn-more";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="2xl:max-w-[1440px] mx-auto">
      <NavBar /> 
      <Hero />
      <TryItNow />
      <WhyChooseUs />
      <HowToCreateURL />
      <GenerateMarketing />
      <NeedsMet />
      <TransformProduct />
      <AuthenticReviews />
      <TrustedBy/>
      <FAQ />
      <OtherFeatures/>
      <LearnMore/>
      <Footer/>
    </div>
  );
}
