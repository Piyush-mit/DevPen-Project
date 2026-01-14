import { useCallback, useMemo } from "react";
import ThemeSelect from "./EditorThemeSelect";
import LanguageSelect from "./EditorLanguageSelect";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@uiw/react-codemirror";
import {
    githubDark,
    githubLight,
    dracula,
    atomone,
    materialDark,
    materialLight,
} from "@uiw/codemirror-themes-all";

import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { useDispatch, useSelector } from "react-redux";
import type { StateType } from "@/redux/store";
import { updateCode } from "@/redux/slices/compilerSlice";
import HelperButtonsDropdown from "./HelperButtonsDropdown";
import { SaveDialog } from "./SaveDialog";

export default function CodeEditor({ theme: themeKey }: { theme: string }) {
    const fullCode = useSelector((state: StateType) => state.compilerSlice.fullCode);
    const currentLanguage = useSelector((state: StateType) => state.compilerSlice.currentLanguage);
    const dispatch = useDispatch();
    const onChange = useCallback((value: string) => {
        dispatch(updateCode(value));
    }, [dispatch]);

    const currentTheme = useMemo(() => {
        switch (themeKey) {
            case "githubLight": return githubLight;
            case "dracula": return dracula;
            case "atomone": return atomone;
            case "materialDark": return materialDark;
            case "materialLight": return materialLight;
            default: return githubDark;
        }
    }, [themeKey]);

    const language = useMemo(() => {
        switch (currentLanguage) {
            case "css": return css();
            case "javascript": return javascript({ jsx: true, typescript: true });
            default: return html();
        }
    }, [currentLanguage]);

    return (
        <div className="flex h-full flex-col">
            {/* Editor options */}
            <div className=" flex justify-between items-center min-h-12 max-h-12 border-b-2 px-1">
                {/* selects */}
                <div className="flex gap-1 h-full items-center">
                    <ThemeSelect />
                    <LanguageSelect />
                </div>
                {/* buttons */}
                <span className="flex gap-1">
                    <SaveDialog />
                    <HelperButtonsDropdown />
                </span>
            </div>

            {/* Code Editor Window */}
            <div className="flex-1">
                <CodeMirror
                    value={fullCode[currentLanguage]}
                    height="calc(100dvh - 60px - 48px)"
                    extensions={[language, EditorView.lineWrapping]}
                    theme={currentTheme}
                    onChange={onChange}
                    placeholder={"Welcome to Devpen"}
                />
            </div>
        </div>
    );
}
