/**
 * Application
 */
import React, {Fragment, useEffect, useRef, useState} from "react";

import {
    BryntumGantt,
    BryntumResourceHistogram,
    BryntumDemoHeader,
    BryntumThemeCombo,
    BryntumSplitter,
    BryntumButton,
} from "@bryntum/gantt-react";

import "./App.scss";
import {histogramConfig, ganttConfig} from "./AppConfig";
import SideBar from "./components/SideBar";

function App() {
    const ganttRef = useRef(null);
    const histogramRef = useRef(null);

    const [dateRange, setDateRange] = useState({
        "startData": "2019-01-14",
        "endData": "2019-01-21"
    });

    // setup partnership between gantt and histogram
    useEffect(() => {
        histogramRef.current.instance.addPartner(ganttRef.current.instance);
    }, []);

    // Toolbar checkboxes click handler
    const onToolbarAction = (source) => {
        const action = source.dataset.action;
        histogramRef.current.instance[action] = source.checked;
    };

    // Zoom In/Out handler
    const onZoom = ({source}) => {
        const {
            dataset: {action},
        } = source;
        ganttRef.current.instance[action]();
    };
    useEffect(() => {
        if (dateRange.startDate) {
            ganttRef.current.instance.startDate = dateRange.startDate
            ganttRef.current.instance.endDate = dateRange.endDate
        }
    }, [dateRange])

    return (
        <Fragment>
            <div id={"content"}>
                <SideBar
                    setDataRanges={(e) => setDateRange(e)}

                    // save={saveEvents}
                />
                {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
                <BryntumDemoHeader children={<BryntumThemeCombo/>}/>
                <div className="demo-toolbar align-right" style={{display: "none"}}>
                    <BryntumButton
                        dataset={{action: "zoomIn"}}
                        icon="b-icon-search-plus"
                        tooltip="Zoom in"
                        onAction={onZoom}
                    />
                    <BryntumButton
                        dataset={{action: "zoomOut"}}
                        icon="b-icon-search-minus"
                        tooltip="Zoom out"
                        onAction={onZoom}
                    />
                </div>
                <BryntumGantt
                    ref={ganttRef}
                    startDate={dateRange.startDate}
                    endData={dateRange.endDate}
                    {...ganttConfig}
                />
                <BryntumSplitter/>
                <BryntumResourceHistogram
                    ref={histogramRef}
                    startDate={dateRange.startDate}
                    endData={dateRange.endDate}
                    extraData={{onToolbarAction}}
                    {...histogramConfig}
                />
            </div>
        </Fragment>

    );
}

export default App;
