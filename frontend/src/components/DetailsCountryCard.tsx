import { CountryType } from "../types";
import "./DetailsCard.css";

interface Props {
  country: CountryType;
}

export function DetailsCountryCard({ country }: Props) {
  return (
    <div className="details-card">
      <span>{country.emoji}</span>
      <p>
        Name: {country.name} ({country.code})
      </p>
      <p>Continent: {country.continent?.name}</p>
    </div>
  );
}
