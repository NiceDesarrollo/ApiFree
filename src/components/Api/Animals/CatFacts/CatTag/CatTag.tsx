import { useState } from "react";
import { useFetchTagCat } from "../../../../../hooks/useFetchTagCat";
import InfoCard from "../../../../Cards/InfoCard";
import CardContent from "./CardInfoContent";

const CatTag = () => {
  
  const { isLoading, data, error } = useFetchTagCat("cute");

  return (
    <div>
      <InfoCard
        isLoading={isLoading}
        imageUrl={data ? URL.createObjectURL(data) : ""}
        content={<CardContent />}
        error={error ? true : false}
      />
    </div>
  );
};
export default CatTag;
