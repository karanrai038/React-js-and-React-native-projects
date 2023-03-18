import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero h-[90vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse pl-20">
        <img
          src="https://www.shutterstock.com/image-vector/professional-business-woman-sitting-desk-260nw-1920145217.jpg"
          className=" rounded-lg shadow-2xl h-88 w-108 image-cover"
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to IBS Bank!</h1>
          <p className="py-6 text-lg">
            We are here to help you with your banking needs.We provide you with
            a wide range of services to help you manage your money. We are here
            to help you with your banking needs.We provide you with a wide range
            of services to help you manage your money.
          </p>
          <Link to="/detail" className="btn btn-primary btn-wide">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
