import { withPluginApi } from "discourse/lib/plugin-api";
import CustomHeaderLinks from "../components/custom-header-links";

export default {
    name: "Custom Header Links",
    after: "discourse-material-design-icons-filled",
    initialize() {
        withPluginApi("1.14.0", api => {
            api.renderInOutlet("before-header-panel", CustomHeaderLinks);
            api.replaceIcon('bars', 'sidebar-icon');
            api.replaceIcon('mdf-menu', 'sidebar-icon');
        });
    }
};