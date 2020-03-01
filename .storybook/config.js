import { configure } from "@storybook/react";
import "../src/styles/storybook.base.css";
// automatically import all files ending in *.stories.tsx
configure(require.context("../src", true, /\.stories\.tsx?$/), module);
