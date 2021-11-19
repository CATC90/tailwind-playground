import React from "react";

import { TableBody } from "./index";

export default {
  component: TableBody,
  title: "TableBody",
};

const Template = (args) => <TableBody {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    {
      title: "Nombre",
      isDefaultFilter: true,
      hasFilter: true,
    },
    {
      title: "Dirección",
      hasFilter: true,
    },
    {
      title: "Status",
    },
  ],
  hasAvatar: true,
  hasActions: true,
};
