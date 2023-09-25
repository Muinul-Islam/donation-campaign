import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const [cardDetail, setCardDetail] = useState([]);

  const { id } = useParams();
  const cardDetails = useLoaderData();
  console.log(id);

  useEffect(() => {
    const detail = cardDetails?.find((card) => card.id === parseInt(id));

    setCardDetail(detail);
  }, [cardDetails, id]);

  console.log(cardDetail);
  const { picture, description, title, price, text_button_bg_color } =
    cardDetail;

  const titleStyle = {
    backgroundColor: text_button_bg_color,
  };

  const handleDonateBtn = () => {
    const addDonation = [];
  };

  return (
    <div className="w-3/5 mx-auto">
      <div className="mt-8 relative">
        <img
          className="w-full mx-auto flex justify-center items-center"
          src={picture}
          alt=""
        />
        <div className="absolute bottom-0 left-0 w-full">
          <div className="relative bg-gray-800 opacity-50 h-14 flex justify-start items-center p-4"></div>
          <button
            onClick={handleDonateBtn}
            className="absolute top-2 ml-3 text-white p-2 rounded-md"
            style={titleStyle}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold my-4">{title}</h1>
      <p className="mb-4">{description}</p>
    </div>
  );
};

export default CardDetails;
