import "./Delivery.css";
import video from "../../img/delivery.mp4";

function Delivery() {
  return (
    <section className="Delivery p-10">
      <h1 className="text-5xl font-bold mb-20 flex justify-center text-[#f92e9e]">
        {" "}
        Worldwide Shipping
      </h1>
      <div className="Delivery  justify-between flex">
        <div className="Delivery_video mt-15 flex justify-center items-center">
          <video
            width="50%"
            height="auto"
            controls
            autoPlay
            muted
            className=" shadow-2xl rounded-lg border-[#c0c0c0] border-none "
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className=" p-5 flex flex-col justify-center text-center ">
            <p className="text-gray-800 flex justify-center mb-4 text-[20px]">
              We offer a wide range of shipping options to suit your needs. No
              matter where you are, we can deliver your order anywhere in the
              world.
            </p>
            <p className="text-gray-800 mb-4 flex justify-center text-[20px]">
              We work with reliable delivery partners to ensure your order
              arrived on time and safely.
            </p>
            <p className="text-gray-800 flex justify-center text-[20px]">
              Contact us today to learn more about shipping options and cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery;
