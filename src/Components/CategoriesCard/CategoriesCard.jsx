/* eslint-disable react/prop-types */
const CategoriesCard = ({ Category }) => {
  console.log(Category);
  const {
    id,
    picture,
    title,
    category,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
  } = Category;

  const bgStyle = {
    backgroundColor: card_bg_color || "transparent",
  };
  const categoryStyle = {
    backgroundColor: category_bg_color || "transparent",
  };
  const titleStyle = {
    color: text_button_bg_color,
  };
  return (
    <div className="card card-compact bg-base-100 shadow-lg" style={bgStyle}>
      <figure>
        <img src={picture} alt="Category Image" className="w-full" />
      </figure>
      <div className="card-body">
        <div className="text-base w-20 rounded-md" style={categoryStyle}>
          <p className="font-semibold p-1  text-center" style={titleStyle}>
            {category}
          </p>
        </div>
        <h2 className="card-title font-semibold" style={titleStyle}>
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CategoriesCard;
