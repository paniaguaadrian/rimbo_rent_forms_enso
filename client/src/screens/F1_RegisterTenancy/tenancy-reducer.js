import {
  UPDATE_TENANCY_INFO,
  UPDATE_TENANT_PERSONAL_INFO,
  UPDATE_TENANT_CONTACT_INFO,
  UPDATE_PROPERTY_INFO,
} from "./constants";

export const DefaultTenancy = {
  agencyName: "Enso Coliving",
  tenancyID: "",

  propertyDetails: {
    rentalAddress: "",
    rentalCity: "",
    route: "",
    rentalPostalCode: "",
    streetNumber: "",
    room: "",
    rentAmount: "",
    rentStartDate: "",
    rentEndDate: "",
  },

  tenantContactDetails: {
    tenantName: "",
    tenantPhone: "",
    tenantEmail: "",
    randomID: "",
  },

  tenantPersonalDetails: {
    tenantsAddress: "",
    city: "",
    route: "",
    postalCode: "",
    streetNumber: "",
    documentType: "",
    documentNumber: "",
    monthlyNetIncome: "",
    acceptanceCriteria: "",
    jobType: "",
    isAgentAccepted: true,
  },
};

export const TenancyReducer = (tenancy, { type, payload }) => {
  switch (type) {
    case UPDATE_TENANCY_INFO:
      return {
        ...tenancy,
        ...payload,
      };

    case UPDATE_PROPERTY_INFO:
      return {
        ...tenancy,
        propertyDetails: {
          ...tenancy.propertyDetails,
          ...payload,
        },
      };

    case UPDATE_TENANT_CONTACT_INFO:
      return {
        ...tenancy,
        tenantContactDetails: {
          ...tenancy.tenantContactDetails,
          ...payload,
        },
      };

    case UPDATE_TENANT_PERSONAL_INFO:
      return {
        ...tenancy,
        tenantPersonalDetails: {
          ...tenancy.tenantPersonalDetails,
          ...payload,
        },
      };

    default:
      return tenancy;
  }
};
