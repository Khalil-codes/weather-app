import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";

type Props = {
  location: string;
};

const Search = ({ location: locationProp }: Props) => {
  const [location, setLocation] = useState(locationProp);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    router.push({
      pathname: "/",
      query: {
        location,
      },
    });
  };

  useEffect(() => {
    if (router.isReady && locationProp !== location) {
      setLoading(false);
    }
  }, [router, locationProp, location]);

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <label htmlFor="location" className="sr-only">
        Location
      </label>
      <input
        type="text"
        id="location"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter a location"
        className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
      <button
        type="submit"
        disabled={!location || location === locationProp || loading}
        className="w-full mt-2 px-3 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
