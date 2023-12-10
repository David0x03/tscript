import * as tgui from "../tgui";
import {icons} from "../icons";
import { Dummy } from "./dummy";

export function add_editor_tabs(tab_editor) {
    let panel_tab_editor = tgui.createPanel({
        name: "tab_editor",
        title: "Editor Tab",
        state: "right",
        fallbackState: "float",
        icon: icons.editor,
    });
    tab_editor = tgui.createElement({
        type: "textarea",
        parent: panel_tab_editor.content,
        classname: "ide ide-tab-sourcecode",
    });

	const newSourcecode = new Dummy(tab_editor);

    tab_editor.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        return false;
    });

	return false;
}
