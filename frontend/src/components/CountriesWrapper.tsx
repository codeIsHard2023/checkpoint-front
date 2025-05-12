import { useQuery } from "@apollo/client";
import "./CountriesWrapper.css";
import { CountryCard } from "./CountryCard";
import { GET_COUNTRIES } from "../api/queries";
import { CountryType } from "../types";

export function CountriesWrapper() {
  const { data, loading, error } = useQuery(GET_COUNTRIES, {
    fetchPolicy: "cache-and-network",
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  const countries: CountryType[] = data?.countries;

  return (
    <div className="countries-grid">
      {countries.map((country) => (
        <CountryCard key={country.code} country={country} />
      ))}
    </div>
  );
}
