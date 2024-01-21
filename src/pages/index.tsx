import ErrorCard from "@/components/ErrorCard";
import Search from "@/components/Search";
import TemperatureComponents from "@/components/TemperatureComponents";
import TemperatureDisplay from "@/components/TemperatureDisplay";
import Wrapper from "@/components/Wrapper";
import fetchWeather from "@/services/fetchWeather";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";

const WeatherApp: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ weather, error, icon, name }) => {
  if (error || !weather)
    return (
      <>
        <Head>
          <title>{error}</title>
        </Head>
        <ErrorCard error={error} />
      </>
    );

  return (
    <>
      <Head>
        <title>Weather App - {name}</title>
        <link
          rel="icon"
          type="image/png"
          href={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        />
      </Head>
      <Wrapper>
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Weather App
        </h1>
        <Search location={name || ""} />
        <TemperatureDisplay
          weather={weather.weather[0]}
          temperature={weather.main.temp}
        />
        <div className="mt-4 grid grid-cols-2 gap-2">
          <TemperatureComponents main={weather.main} wind={weather.wind} />
        </div>
      </Wrapper>
    </>
  );
};

export default WeatherApp;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const location = context.query.location || "Ahmedabad";
  const { error, weather } = await fetchWeather(location as string);
  return {
    props: {
      weather: weather,
      error: error,
      ...(!error
        ? {
            key: weather?.name,
            icon: weather?.weather?.[0]?.icon,
            name: weather?.name,
          }
        : {}),
    },
  };
};
