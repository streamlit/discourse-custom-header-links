import { withPluginApi } from "discourse/lib/plugin-api";
import CustomHeaderLinks from "../components/custom-header-links";

export default {
    name: "custom-header-links",
    initialize() {
        withPluginApi("1.14.0", api => {
            api.renderInOutlet("before-header-panel", CustomHeaderLinks);
        });
    }
};