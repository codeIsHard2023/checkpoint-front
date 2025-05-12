import { Link } from "react-router-dom";
import { CountryType } from "../types";
import "./CountryCard.css";

interface Props {
  country: CountryType;
}

export function CountryCard({ country }: Props) {
  return (
    <Link to={`/country/${country.code}`} className="country-card">
      <h2>{country.name}</h2>
      <span>{country.emoji}</span>
    </Link>
  );
}
