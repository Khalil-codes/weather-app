import React from "react";
import Search from "./Search";
import Wrapper from "./Wrapper";

const ErrorCard = ({ error }: { error: string | null }) => {
  return (
    <Wrapper>
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Weather App
      </h1>
      <Search location={""} />
      <h1 className="text-3xl mt-10 font-bold text-center text-gray-800">
        {error}
      </h1>
    </Wrapper>
  );
};

export default ErrorCard;
