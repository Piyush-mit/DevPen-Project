import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { handleSave, handleCopy, handleShare } from "@/actions/compiler.action";
import { useState, useCallback } from "react";
import type { StateType } from "@/redux/store";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function HelperButtonsDropdown() {
    const fullCode = useSelector((state: StateType) => state.compilerSlice.fullCode);
    const title = useSelector((state: StateType) => state.compilerSlice.title);
    const currentLanguage = useSelector((state: StateType) => state.compilerSlice.currentLanguage);
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();
    const { urlId } = useParams();
    const handleSaveClick = useCallback(() => {
        handleSave(fullCode, navigate, setSaving, title, urlId);
    }, [fullCode, navigate]);

    const handleCopyClick = useCallback(() => {
        handleCopy(fullCode, currentLanguage);
    }, [fullCode, currentLanguage]);

    const handleShareClick = useCallback(() => {
        handleShare(window.location.href);
    }, []);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="select-none focus-visible:border focus-visible:ring-0">
                <Button variant="outline"><MenuIcon /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36" align="start">
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={handleShareClick} disabled={saving || !urlId}>
                        Share
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSaveClick}>
                        Save
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleCopyClick}>
                        Copy
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
