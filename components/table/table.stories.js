import React from "react";

import { Table } from "./index";

export default {
  component: Table,
  title: "Table",
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  tableData: {
    data: [
      {
        avatar:
          "https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        rows: [
          {
            title: "Carlos Trujillo",
            subtitle: "catc_90@hotmail.com",
          },
          {
            title: "Fullstack developer",
            subtitle: "Stefanini chile",
          },
          {
            title: "Santa cristina 3148, santiago",
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
      {
        avatar:
          "https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        rows: [
          {
            title: "Carlos Trujillo",
            subtitle: "catc_90@hotmail.com",
          },
          {
            title: "Fullstack developer",
            subtitle: "Stefanini chile",
          },
          {
            title: "Santa cristina 3148, santiago",
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
      {
        avatar:
          "https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        rows: [
          {
            title: "Carlos Trujillo",
            subtitle: "catc_90@hotmail.com",
          },
          {
            title: "Fullstack developer",
            subtitle: "Stefanini chile",
          },
          {
            title: "Santa cristina 3148, santiago",
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
      {
        avatar:
          "https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        rows: [
          {
            title: "Carlos Trujillo",
            subtitle: "catc_90@hotmail.com",
          },
          {
            title: "Fullstack developer",
            subtitle: "Stefanini chile",
          },
          {
            title: "Santa cristina 3148, santiago",
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
      {
        avatar:
          "https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        rows: [
          {
            title: "Carlos Trujillo",
            subtitle: "catc_90@hotmail.com",
          },
          {
            title: "Fullstack developer",
            subtitle: "Stefanini chile",
          },
          {
            title: "Santa cristina 3148, santiago",
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
      {
        avatar:
          "https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        rows: [
          {
            title: "Carlos Trujillo",
            subtitle: "catc_90@hotmail.com",
          },
          {
            title: "Fullstack developer",
            subtitle: "Stefanini chile",
          },
          {
            title: "Santa cristina 3148, santiago",
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
      {
        avatar:
          "https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        rows: [
          {
            title: "Carlos Trujillo",
            subtitle: "catc_90@hotmail.com",
          },
          {
            title: "Fullstack developer",
            subtitle: "Stefanini chile",
          },
          {
            title: "Santa cristina 3148, santiago",
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
    ],
    columns: [
      {
        title: "Nombre",
        isDefaultFilter: true,
        hasFilter: true,
      },
      {
        title: "Cargo",
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
  },
};
