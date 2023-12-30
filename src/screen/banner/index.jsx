import imgBanner from "../../assets/banner.png";
import Button from "../../components/button";

const Banner = () => {
  return (
    <div className="bg-[#e3edf681] mt-4">
      <div className="container grid md:grid-cols-2 py-8 gap-3">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            <p>
              Starting at <span className="font-bold">$999.00</span>
            </p>
            <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl">
              The best note book collection 2023
            </h1>
            <h3 className="text-2xl font-['Oregano',cursive]">
              Exclusive offer <span className="text-red-600">-10%</span> off
              this week
            </h3>
            <Button title="Shop Now" />
          </div>
        </div>
        <div>
          <img className="ml-auto" src={imgBanner} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
