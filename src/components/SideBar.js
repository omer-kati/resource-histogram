import React, {useEffect, useState} from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SaveIcon from "@mui/icons-material/Save";
import LogoutIcon from "@mui/icons-material/Logout";
import {IconButton, Grid} from "@mui/material";
import {DateRangePicker} from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const SideBar = ({
                     projects,
                     employees,
                     toggleProjects,
                     toggleEmployees,
                     save,
                     logout,
                     setDataRanges,
                 }) => {
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    });

    useEffect(() => {
        if (selectionRange) setDataRanges(selectionRange);
    }, [selectionRange]);

    const [showCalendar, setShowCalendar] = useState(false);
    return (
        <>
            {showCalendar && (
                <div className={"date-selector"}>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={(e) => setSelectionRange(e.selection)}
                    />
                </div>
            )}
            <Grid className={"sidenav"} style={{width: 70}} container direction="column">
                <Grid style={{marginBottom: 20}} alignItems="center">
                    <img src={"/images/y-wit-wit-wit.png"} style={{width: 50, height: "auto"}}/>
                </Grid>
                <Grid alignItems="center">
                    <IconButton
                        style={{marginBottom: 10}}
                        size={"large"}
                        onClick={toggleProjects}
                        sx={() => projects && {backgroundColor: "#8BC34B", borderRadius: 0}}
                    >
                        <PeopleIcon fontSize="inherit" sx={{color: "#fff"}}/>
                    </IconButton>
                    <IconButton
                        size={"large"}
                        onClick={toggleEmployees}
                        sx={() => employees && {backgroundColor: "#8BC34B", borderRadius: 0}}
                    >
                        <AssignmentIcon fontSize="inherit" sx={{color: "#fff"}}/>
                    </IconButton>
                </Grid>
                <Grid
                    style={{flex: 1}}
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <IconButton size={"large"} onClick={save}>
                        <SaveIcon fontSize="inherit" sx={{color: "#fff"}}/>
                    </IconButton>
                    <IconButton size={"large"} onClick={() => setShowCalendar(!showCalendar)}>
                        <CalendarTodayIcon fontSize="inherit" sx={{color: "#fff"}}/>
                    </IconButton>
                    <IconButton size={"large"}>
                        <SettingsIcon fontSize="inherit" sx={{color: "#fff"}}/>
                    </IconButton>
                    <IconButton size={"large"} onClick={logout}>
                        <LogoutIcon fontSize="inherit" sx={{color: "#fff"}}/>
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
};
export default SideBar;
