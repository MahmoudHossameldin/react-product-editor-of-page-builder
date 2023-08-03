// /src/store/types.ts

export type Trl = {
  id: string;
  name: string;
};
export type Type = {
  id?: string;
  name: string;
};
export type Category = {
  id: string;
  name: string;
};
export type Model = {
  id: string;
  name: string;
};

export type EditedData = {
  name?: string;
  description?: string;
  picture?: string;
  type?: Type | null;
  categories?: Category[];
  trl?: Trl | null;
  video?: string;
  businessModels?: Model[];
  loading?: boolean;
  error?: string | null;
};

// Product type
export type Product = {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: {
    id: string;
    name: string;
  };
  categories: Category[];
  implementationEffortText: string | null;
  investmentEffort: string;
  trl: Trl;
  video: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    sex: number;
    profilePicture: string;
    position: string;
  };
  company: {
    name: string;
    logo: string;
    address: {
      country: {
        name: string;
      };
      city: {
        name: string;
      };
      street: string;
      house: string;
      zipCode: string;
      longitude: string;
      latitude: string;
    };
  };
  businessModels: Model[];
};

// Loading and error states
export type ProductState = {
  data: Product | null;
  loading: boolean;
  error: string | null;
};
