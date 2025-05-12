import { useState } from "react";
import "./AddCountryForm.css";
import { ADD_COUNTRY } from "../api/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CONTINENTS, GET_COUNTRIES } from "../api/queries";
import { ContinentType } from "../types";

type GetContinentsData = {
  continents: ContinentType[];
};

export function AddCountryForm() {
  const [form, setForm] = useState({
    name: "",
    code: "",
    emoji: "",
    continent: "",
  });

  const { data, error: errorContinents } =
    useQuery<GetContinentsData>(GET_CONTINENTS);
  console.log(errorContinents);

  const [addCountry, { loading, error }] = useMutation(ADD_COUNTRY, {
    refetchQueries: [GET_COUNTRIES],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addCountry({
        variables: {
          data: {
            name: form.name,
            code: form.code.toUpperCase(),
            emoji: form.emoji,
            continent: form.continent ? { id: parseInt(form.continent) } : null,
          },
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="add-country-page">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="code"
          value={form.code}
          onChange={handleChange}
          placeholder="Code"
          required
        />
        <input
          name="emoji"
          value={form.emoji}
          onChange={handleChange}
          placeholder="Emoji"
          required
        />
        <select name="continent" value={form.continent} onChange={handleChange}>
          <option value="">Select Continent</option>
          {data?.continents?.map((c: { id: number; name: string }) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <button type="submit" disabled={loading}>
          Add
        </button>
        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
}
