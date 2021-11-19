import React from "react";

import { Row } from "./index";

export default {
  component: Row,
  title: "Row",
};

const Template = (args) => <Row {...args} />;

export const Default = Template.bind({});
Default.args = {
  rowData: {
    avatar:
      "https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    rows: [
      {
        title: "Carlos Trujillo",
        subtitle: "catc_90@hotmail.com",
      },
      {
        title: "Santa cristina 3148",
        subtitle: "Macul",
      },
    ],
    actions: {
      delete: {},
      update: {},
      view: {},
    },
    status: {
      label: "New",
      variant: "success",
    },
  },
};
