import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [dataFound, setDataFound] = useState("");
  const [seeAll, setSeeAll] = useState(false);

  useEffect(() => {
    const donatedCategories = JSON.parse(localStorage.getItem("donated"));

    if (donatedCategories) {
      setDonation(donatedCategories);
    } else {
      setDataFound("Data Not Found");
    }
  }, []);

  const handleSeeAll = () => {
    setSeeAll(!seeAll);
  };

  return (
    <div>
      {dataFound ? (
        <h3 className="text-gray-500 text-2xl font-semibold flex justify-center items-center h-[70vh]">
          {dataFound}
        </h3>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto gap-5 my-8">
          {seeAll
            ? donation.map((donatedCard) => (
                <DonationCard
                  key={donatedCard.id}
                  donatedCard={donatedCard}
                ></DonationCard>
              ))
            : donation
                .slice(0, 4)
                .map((donatedCard) => (
                  <DonationCard
                    key={donatedCard.id}
                    donatedCard={donatedCard}
                  ></DonationCard>
                ))}
        </div>
      )}
      <div className="w-full flex justify-center">
        {donation.length > 4 && (
          <button
            onClick={handleSeeAll}
            className={`bg-[#009444] text-white px-4 py-2 mb-8 rounded-md ${
              seeAll ? "hidden" : " "
            }`}
          >
            {seeAll ? " " : "See All"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
