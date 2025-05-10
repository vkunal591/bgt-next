import Image from "next/image";
import HeroSection from "./components/common/HeroSection";
import { getBanners, getBlogData } from "@/utils/server";
import InfoImageSection from "./components/common/InfoImageSection";
import SectionWithCards from "./components/common/SectionWithCards";
import DiscoverSection from "./components/DiscoverSection";
import SectionWithCardsSlider from "./components/common/SectionWithCardsSlider";
import InfoBannerSection from "./components/common/InfoBannerSection";
import Faqs from "./components/common/Faqs";
import TrustedPartners from "./components/common/TruestedPartners";
import FeatrurePoints from "./components/FeaturePoints";
import ContactUs from "./components/ContactUs";


const cardsData = [
  {
    id: 1,
    image: "/assets/images/banners/banner1.jpg",
    subtitle: "2 April, 2025",
    title: "Contrary to popular belief, Lorem Ipsum is not simply random text. Latin literature from 45 BC, making ....",
    description: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",

  },
  {
    id: 2,
    image: "/assets/images/banners/banner1.jpg",
    subtitle: "2 April, 2025",
    title: "Contrary to popular belief, Lorem Ipsum is not simply random text. Latin literature from 45 BC, making ....",
    description: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",

  },
  {
    id: 3,
    image: "/assets/images/banners/banner1.jpg",
    subtitle: "2 April, 2025",
    title: "Contrary to popular belief, Lorem Ipsum is not simply random text. Latin literature from 45 BC, making ....",
    description: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",

  },
  {
    id: 4,
    image: "/assets/images/banners/banner1.jpg",
    subtitle: "2 April, 2025",
    title: "Contrary to popular belief, Lorem Ipsum is not simply random text. Latin literature from 45 BC, making ....",
    description: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
  },
];






const Home = async () => {
  const { data } = await getBanners('/home') // Placeholder for actual data fetching
  const blogData = await getBlogData() // Placeholder for actual data fetching
  return (
    <div className="bg-gray-100">
      <HeroSection
        title={data?.title ?? "Unleash Innovation"}
        description={data?.description ?? "Tailored software solutions for every business need."}
        bgImage={data?.fileUrl ?? "/assets/images/banners/bannerhome.png"}
        alignment="center"
        position="center"
        buttonText="Explore More"
        buttonLink={data?.link ?? "/about-us"}
      />


      <InfoImageSection
        subtitle=""
        title="About us"
        description="BGT Ventures General Trading LLC is a distinguished distributor of cutting-edge security surveillance equipment, IT hardware, and video telematics solutions, catering to Dubai and the broader MENA region. Since our inception in 2011, we have been committed to supplying premium-quality products that enhance security, optimize efficiency, and elevate operational performance for businesses and high-security sectors. Our deep industry expertise and unwavering commitment to technological innovation position us as a trusted partner for resellers, integrators, and enterprises seeking state-of-the-art security and IT solutions."
        buttonText="Get Started"
        buttonLink="/about-us"
        imageSrc="/assets/images/content/about.jpg"
        layout="flex-col-reverse md:flex-row"
        bgColor="bg-transparent"
        textColor="text-dark-primary"
        buttonColor="bg-primary"
        buttonTextColor="text-white"
      />

      {/* What We Do Section */}
      <SectionWithCards
        headingProps={{
          subtitle: "",
          title: "What we do",
          description: "In addition to our comprehensive product distribution, BGT Ventures offers a range of professional services to support security and IT infrastructure. We provide SIRA approvals for compliance with regulatory requirements, as well as Etisalat and DU approvals for seamless telecommunications integration. Our expertise extends to structured cabling solutions, ensuring efficient and high-performance network connectivity. We also specialize in public address systems, LED video walls for dynamic visual solutions, and telephony solutions to enhance business communication.",
          buttonText: "",
          buttonLink: "/services",
          layout: "flex-col",
          descriptionClass: "text-gray-600",
          textColor: "text-gray-800",
          buttonColor: "bg-primary",
          buttonTextColor: "text-white",
          align: "left",
          width: "",
        }}
        cards={[
          {
            id: 1,
            image: "/assets/images/content/pr1.png",
            subtitle: "Surveillance",
            title: "Security surveillance equipment",
            description:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
            buttonText: "Learn More",
            buttonLink: "/about-us",


          },
          {
            id: 2,
            image: "/assets/images/content/pr3.png",
            subtitle: "Hardware",
            title: "Distribution of IT Hardware Parts",
            description:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
            buttonText: "Explore",
            buttonLink: "/",

          },
          {
            id: 3,
            image: "/assets/images/banners/banner1.jpg",
            subtitle: "Telematics",
            title: "Video Telematics Solution",
            description:
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
            buttonText: "Discover",
            buttonLink: "/",

          },
        ]}
        gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        sectionPadding="p-4 lg:p-16 lg:py-12 max-w-7xl m-auto"
        gap="gap-10"
        cardClass="p-0  bg-transparent rounded-none shadow-none"
        imageClass="rounded-none mb-0 w-full h-48 object-cover"
        cardContetntClass="p-4 rounded-none shadow-none bg-transparent"
        showImage={true}
        showTitle={true}
        showSubtitle={true}
        showDescription={true}
        showButton={false}
      />

      {/* Product Category */}
      <SectionWithCards
        headingProps={{
          subtitle: "",
          title: "Products Category",
          description: "BGT Ventures General Trading LLC is a distinguished distributor of cutting-edge security surveillance equipment, IT hardware, and video telematics solutions, catering to Dubai and the broader MENA region. Since our inception in 2011, we have been committed to supplying premium-quality products that enhance security, optimize efficiency, and elevate operational performance for businesses and high-security sectors. Our deep industry expertise and unwavering commitment to technological innovation position us as a trusted partner for resellers, integrators, and enterprises seeking state-of-the-art security and IT solutions.",
          buttonText: "",
          buttonLink: "/services",
          layout: "flex-col",
          descriptionClass: "text-gray-600",
          textColor: "text-gray-800",
          buttonColor: "bg-primary",
          buttonTextColor: "text-white",
          align: "left",
          width: "",
        }}
        cards={[
          {
            id: 1,
            image: "/assets/images/content/security.png",
            title: "Security Products",
            description:
              "It is a long established fact that a reader will be distracted by the readable content.",
            buttonText: "Explore More",
            buttonLink: "/security-products",


          },
          {
            id: 2,
            image: "/assets/images/content/itproduct.png",

            title: "IT Products",
            description:
              "It is a long established fact that a reader will be distracted by the readable content.",
            buttonText: "Explore More",
            buttonLink: "/it-products",

          },
          {
            id: 3,
            image: "/assets/images/content/elv.png",
            title: "ELV Services",
            description:
              "It is a long established fact that a reader will be distracted by the readable content.",
            buttonText: "Explore More",
            buttonLink: "/elv-services",

          },
        ]}
        gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        sectionPadding="p-4 lg:p-16 lg:py-12 max-w-7xl m-auto "
        gap="gap-10"
        cardClass="p-0  bg-transparent rounded-none shadow-none"
        imageClass="rounded-none mb-0 w-full h-48 object-cover"
        cardContetntClass="p-4 rounded-none shadow-none bg-transparent"
        showImage={true}
        showTitle={true}
        showSubtitle={true}
        showDescription={true}
        showButton={true}
      />


      {/* Discover Section */}
      <DiscoverSection
        headingProps={{
          subtitle: "",
          title: "Discover",
          description: "In addition to our comprehensive product distribution, BGT Ventures offers a range of professional services to support security and IT infrastructure. We provide SIRA approvals for compliance with regulatory requirements, as well as Etisalat and DU approvals for seamless telecommunications integration. Our expertise extends to structured cabling solutions, ensuring efficient and high-performance network connectivity. We also specialize in public address systems, LED video walls for dynamic visual solutions, and telephony solutions to enhance business communication.",
          buttonText: "",
          buttonLink: "/security-products",
          layout: "flex-col mb-8",
          descriptionClass: "text-gray-600",
          textColor: "text-gray-800",
          buttonColor: "bg-primary",
          buttonTextColor: "text-white",
          align: "left",
          width: "",

        }}
      />


      <SectionWithCardsSlider
        sectionPadding="p-4 lg:p-16 lg:py-12 max-w-7xl m-auto"
        headingProps={{
          title: "What’s Latest at BGT",
          align: "left",
          buttonText: "See All",
          buttonLink: "/blogs",
          layout: "w-full",
          buttonVariant: "outline",
          buttonColor: "bg-white",
          buttonTextColor: "text-white",

        }}
        cards={blogData}
        cardClass="p-0  bg-transparent rounded-none shadow-none"
        imageClass="rounded-none mb-0 w-full h-48 object-cover"
        cardContetntClass="py-4 rounded-none shadow-none bg-transparent"
        titleClass="line-clamp-2 text-lg font-semibold mb-2"
        swiperSlidesPerView={1}
        swiperBreakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      />


      <InfoBannerSection
        subtitle="You’re Being Watched,"
        title="IP Camera Active"
        description="Real-time video feed is recorded and stored securely."
        buttonText="Explore More"
        buttonLink="/it-products"
        imageSrc="/assets/images/banners/banner5.png"
        contentPosition="center-right"
        subTitleClass='text-4xl text-white font-bold tracking-wide'
        titleColor="text-white text-3xl font-medium italic"
        textColor="text-gray-100"
        buttonColor="bg-white"
        buttonTextColor="text-black"
        overlayLayer='bg-black/10'
        className='mb-20 h-full min-h-[500px] bg-transparent !py-0'
        descClass="text-gray-100"
      />
      <Faqs
        pageUrl="/home"
        sectionPadding="p-4 lg:p-16 lg:py-12 max-w-7xl m-auto"
        headingProps={{
          title: "Most Asked Question",
          description: "In addition to our comprehensive product distribution, BGT Ventures offers a range of professional services to support security and IT infrastructure. We provide SIRA approvals for compliance with regulatory requirements, as well as Etisalat and DU approvals for seamless telecommunications integration. Our expertise extends to ",
          align: "left",
          layout: "w-full",
          buttonVariant: "outline",
          buttonColor: "bg-white",
          buttonTextColor: "text-white",

        }}
      />

      <TrustedPartners sectionPadding="py-4 lg:py-16"
        headingProps={{
          title: "We are trusted By",
          description: "In addition to our comprehensive product distribution, BGT Ventures offers a range of professional services to support security and IT infrastructure. We provide SIRA approvals for compliance with regulatory requirements, as well as Etisalat and DU approvals for seamless telecommunications integration. Our expertise extends to ",
          align: "left",
          layout: "w-full",
          buttonVariant: "outline",
          buttonColor: "bg-white",
          buttonTextColor: "text-white",

        }}
        />

      <FeatrurePoints
        sectionPadding="p-4 lg:p-16 lg:py-12 max-w-7xl m-auto"
      />


      <ContactUs
        sectionPadding="p-4 lg:p-16 lg:py-12 max-w-7xl m-auto"
      />

    </div>
  );
}



export default Home

export const revalidate = 1;
