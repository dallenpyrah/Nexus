import {Settings} from "@mui/icons-material";

export const SettingsDropdown = () => {
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1">
                <Settings />
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Sign out</a></li>
            </ul>
        </div>
    )
}
