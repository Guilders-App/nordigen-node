import { EndUserAgreement } from "../generated";

export interface RequisitionCreateOptions {
  redirectUrl: string;
  institutionId: string;
  agreement: EndUserAgreement | string;
  userLanguage?: string;
  redirectImmediate?: boolean;
  accountSelection?: boolean;
  reference?: string | null;
  ssn?: string | null;
}
