import utils from "../utils/event";
import { Website } from "../websites";

const website: Website = {
    regexp: new RegExp("xiaohongshu"),
    init: function () {
        utils.hideButton();
        utils.enableUserSelectByCSS();
        utils.enableOnKeyDownByCapture();
    },
};

export default website;
