import { useFetchTheMealDb } from "../../../../../hooks/TheMealDb/useFetchTheMealDb";
import InfoCard from "../../../../Cards/InfoCard";
import TheMealDbContent from "../TheMealDbContent";

const Meal = () => {

  const { isLoading, data, error } = useFetchTheMealDb();

  if (data) {
    console.log(data.meals[0]);
  }

  return (
    <>
      <InfoCard
        isLoading={isLoading}
        imageUrl={data?.meals[0].strMealThumb || ""}
        content={<TheMealDbContent/>}
        error={error ? true : false}
      />
    </>
  );
};

export default Meal;
