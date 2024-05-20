import "./Delivery.css";
import video from "../../img/delivery.mp4";

function Delivery() {
  return (
    <section className="Delivery">
      <div className="Delivery flex justify-between">
        <div className="container">
          <div className="Delivery_video">
            <video width="100%" height="auto" controls autoPlay muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className=" p-5 flex flex-col justify-center ">
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
