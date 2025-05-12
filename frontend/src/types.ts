export type CountryType = {
  id: number;
  code: string;
  name: string;
  emoji: string;
  continent?: {
    id: number;
    name: string;
    code: string;
  } | null;
};

export type ContinentType = {
  id: number;
  name: string;
};

export interface NewCountryInput {
  name: string;
  code: string;
  emoji: string;
  continent?: string | null;
}
