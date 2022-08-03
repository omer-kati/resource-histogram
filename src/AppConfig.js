/**
 * Application configuration
 */
// import React from 'react';
import {ProjectModel} from '@bryntum/gantt';


// project
const project = new ProjectModel({
    transport: {
        load: {
            url: 'data/launch-saas.json'
        }
    },
    autoLoad: true,
    // This config enables response validation and dumping of found errors to the browser console.
    // It's meant to be used as a development stage helper only so please set it to false for production systems.
    validateResponse: true
});

// Scheduler
const ganttConfig = {
    project,
    dependencyIdField: 'sequenceNumber',
    resourceImageFolderPath: 'users/',
    viewPreset: 'weekAndDayLetter',
    columnLines: true,
    showMaxEffort: true,
    labelsFeature: {
        left: {
            field: 'name',
            editor: {
                type: 'textfield'
            }
        }
    },
    columns: [
        {type: 'name', width: 280},
        {type: 'resourceassignment', showAvatars: true, width: 170}
    ]
};

// Histogram
const histogramConfig = {
    project,
    resourceImagePath: 'users/',
    viewPreset: 'weekAndDayLetter',
    hideHeaders: true,
    rowHeight: 50,
    showBarTip: true,
    scheduleTooltipFeature: false,
    columns: [
        {type: 'resourceInfo', field: 'name', showEventCount: false, width: 410}
    ]
};

export {ganttConfig, histogramConfig};
