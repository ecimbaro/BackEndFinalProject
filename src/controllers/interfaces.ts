export const CountryDTO = {
    Capital: String,
    Code: String,
    CallingCode: String,
    FlagImageUri: String,
    Name: String,
    NumRegions: Number,
    WikiDataId: String,
}


export interface Country  {
    data: APICountry;
}

export interface APICountry {
    capital: string;
    code: string;
    callingCode: string;
    flagImageUri: string;
    name: string;
    numRegions: number;
    wikiDataId: string;
}
