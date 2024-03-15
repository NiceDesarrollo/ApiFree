import { useEffect, useState } from "react";
import { useFetchTagCat } from "../../../../../hooks/Cats/useFetchTagCat";
import InfoCard from "../../../../Cards/InfoCard";
import CardContent from "./CardInfoContent";

const CatTag = () => {

  const [BlobImageurl, setBlobImageurl] = useState<Blob | undefined>();

  const { isLoading, data, error } = useFetchTagCat();

  useEffect(() => {
    setBlobImageurl(data);
  }, [data]);


  return (
    <div>
      <InfoCard
        isLoading={isLoading}
        imageUrl={BlobImageurl ? URL.createObjectURL(BlobImageurl) : ""}
        content={<CardContent setBlobImageurl={setBlobImageurl} />}
        error={error ? true : false}
      />
    </div>
  );
};
export default CatTag;
