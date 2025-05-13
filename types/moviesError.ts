export type TManagedError = {
  status: number;
  message: string;
  code?: string;
  isManaged: true;
};
