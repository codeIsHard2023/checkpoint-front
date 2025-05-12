import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "../api/queries";
import { CountryType } from "../types";
import { DetailsCountryCard } from "../components/DetailsCountryCard";
import "./CountryDetailPage.css";

export function CountryDetailPage() {
  const { countryCode } = useParams<{ countryCode: string }>();
  const { data, loading, error } = useQuery(GET_COUNTRY, {
    variables: { code: countryCode },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`Error! ${error.message}`}</p>;

  const country: CountryType = data?.country;

  return (
    <div className="details-card-container">
      <DetailsCountryCard country={country} />
    </div>
  );
}
