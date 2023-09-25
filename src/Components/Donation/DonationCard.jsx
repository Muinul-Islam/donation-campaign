import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationCard = ({ donatedCard }) => {
  const {
    id,
    price,
    category,
    title,
    picture,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
  } = donatedCard;

  const bgStyle = {
    backgroundColor: card_bg_color || "transparent",
  };
  const categoryStyle = {
    backgroundColor: category_bg_color || "transparent",
  };
  const titleStyle = {
    color: text_button_bg_color,
  };
  const btnStyle = {
    backgroundColor: text_button_bg_color,
  };

  return (
    <div>
      <div className="card card-side shadow-xl" style={bgStyle}>
        <figure>
          <img className="h-full" src={picture} alt="card" />
        </figure>
        <div className="card-body">
          <div className=" w-20 text-center rounded-lg" style={categoryStyle}>
            <p className="" style={titleStyle}>
              {category}
            </p>
          </div>
          <h2 className="card-title">{title}</h2>
          <p className="font-semibold" style={titleStyle}>
            ${price}
          </p>
          <Link
            to={`/category/${id}`}
            className="card-actions w-32 rounded-lg"
            style={btnStyle}
          >
            <button className="px-4 text-white py-2  rounded-md">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
