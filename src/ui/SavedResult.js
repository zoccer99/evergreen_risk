import React, { useEffect } from "react";
import { ResultBox } from "./ResultBox";
import { useSearchParams } from "react-router-dom";

export const SavedResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="d-flex justify-content-center mt-4">
      <ResultBox
        calculatedRisk={searchParams.get("risk")}
        yin={searchParams.get("yin")}
        yang={searchParams.get("yang")}
        return={searchParams.get("return")}
        volality={searchParams.get("volality")}
      />
    </div>
  );
};
