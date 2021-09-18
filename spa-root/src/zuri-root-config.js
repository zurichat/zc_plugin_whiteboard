import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@zuri/zuri-plugin-whiteboard",
  app: () => System.import("@zuri/zuri-plugin-whiteboard"),
  activeWhen: ["/whiteboard"]
});

start({
  urlRerouteOnly: true,
});
