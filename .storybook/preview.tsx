import React from "react";
import { ConfigProvider } from "antd";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ConfigProvider
      theme={{ cssVar: true }}>
      <Story />
    </ConfigProvider>
    ),
  ],
};

export default preview;
