import useSmartStorage from "./useSmartStorage";
import {Row, RowData, Table, TableState, VisibilityState} from "@tanstack/react-table";
import {useEffect, useState} from "react";

const DEFAULT_TABLE_STATE: TableState = {
    columnFilters: [],
    columnOrder: [],
    columnPinning: {left: [], right: []},
    columnSizing: {},
    columnSizingInfo: {
        columnSizingStart: [],
        deltaOffset: null,
        deltaPercentage: null,
        isResizingColumn: false,
        startOffset: null,
        startSize: null,
    },
    columnVisibility:{},
    expanded: {},
    grouping: [],
    pagination: {pageIndex: 0, pageSize: 10},
    rowPinning: {top: [], bottom: []},
    rowSelection:{},
    sorting: [],
    globalFilter: null
};

const getDefaultSettingsForTable = <TData extends RowData>(table: Table<TData>, userDefaults: Partial<TableState>): TableState =>
    overrideSettings(DEFAULT_TABLE_STATE, {
        columnOrder: table.getAllLeafColumns().map(c=>c.id),
        ...userDefaults,
        columnVisibility: {
            ...(Object.fromEntries(table.getAllLeafColumns().map(col => [col.id, true]))),
            ...userDefaults.columnVisibility
        },
    });

const overrideSettings = (defaultSettings: TableState, localSettings: Partial<TableState>): TableState => ({
    ...defaultSettings,
    ...localSettings,
    columnPinning: {
        ...defaultSettings.columnPinning,
        ...localSettings.columnVisibility
    },
    pagination: {
        ...defaultSettings.pagination,
        ...localSettings.pagination
    },
    rowPinning: {
        ...defaultSettings.rowPinning,
        ...localSettings.rowPinning
    },
    columnVisibility: {
        ...defaultSettings.columnVisibility,
        ...localSettings.columnVisibility
    }
})


const sanitizeLocalSettings = <TData extends RowData>(table: Table<TData>, localDefaults: Partial<TableState>): Partial<TableState> => {
    const columnIds = table.getAllLeafColumns().map(col => col.id);

    const sanitizedSettings: Partial<TableState> = {};

    // columnFilters
    if(localDefaults.columnFilters) {
        sanitizedSettings.columnFilters = localDefaults.columnFilters.filter(filter => columnIds.includes(filter.id));
    }

    // columnOrder
    if(localDefaults.columnOrder) {
        const sanitizedLocalColumnOrder = localDefaults.columnOrder.filter(columnId => columnIds.includes(columnId));

        columnIds.forEach(columnId => {
            if( !sanitizedLocalColumnOrder.includes(columnId) ) {
                sanitizedLocalColumnOrder.push(columnId);
            }
        })
        sanitizedSettings.columnOrder = sanitizedLocalColumnOrder;
    }

    // columnSizing
    if(localDefaults.columnSizing) {
        sanitizedSettings.columnSizing = Object.fromEntries(Object.entries(localDefaults.columnSizing).filter(([id, _num]) => columnIds.includes(id)));
    }

    // expanded
    if(localDefaults.expanded) {
        sanitizedSettings.expanded = localDefaults.expanded;
    }

    // grouping
    if(localDefaults.grouping) {
        sanitizedSettings.grouping = localDefaults.grouping.filter(columnId => columnIds.includes(columnId));
    }

    // rowSelection
    if(localDefaults.rowSelection) {
        sanitizedSettings.rowSelection = localDefaults.rowSelection;
    }

    if(localDefaults.sorting) {
        sanitizedSettings.sorting = localDefaults.sorting.filter(sort => columnIds.includes(sort.id));
    }

    // columnPinning
    if(localDefaults.columnPinning) {
        sanitizedSettings.columnPinning = {};

        // columnPinning.left
        if(localDefaults.columnPinning.left) {
            sanitizedSettings.columnPinning.left = localDefaults.columnPinning.left.filter(columnId => columnIds.includes(columnId));
        }

        // columnPinning.right
        if(localDefaults.columnPinning.right) {
            sanitizedSettings.columnPinning.right = localDefaults.columnPinning.right.filter(columnId => columnIds.includes(columnId));
        }
    }

    // pagination
    if(localDefaults.pagination) {
        sanitizedSettings.pagination = localDefaults.pagination;
    }

    // rowPinning
    if(localDefaults.rowPinning) {
        sanitizedSettings.rowPinning = localDefaults.rowPinning;
    }

    // columnVisibility
    if(localDefaults.columnVisibility) {
        const sanitizedLocalColumnVisibility = Object.fromEntries(Object.entries(localDefaults.columnVisibility).filter(([id, _num]) => columnIds.includes(id)));

        columnIds.forEach(columnId => {
            if( sanitizedLocalColumnVisibility[columnId] === undefined ) {
                sanitizedLocalColumnVisibility[columnId] = true;
            }
        })
        sanitizedSettings.columnVisibility = sanitizedLocalColumnVisibility;
    }

    return sanitizedSettings;

}

const useInteractiveTableSettings = <TData extends RowData>(tableId: string, table: Table<TData>, initialSettings: Partial<TableState> = {}): [...ReturnType<typeof useSmartStorage<TableState>>, () => void] => {
    const [localSettings, updateSettings, deleteSettings] = useSmartStorage<TableState>(`interactiveTableSettings.${tableId}`);

    const [defaultApplied, setDefaultApplied] = useState(false);

    useEffect(() => {
        // This ensures that when the hook is initialized, the localSettings are in-sync with the table structure.
        // It also handles the case when localSettings have not been stored in local storage yet.
        if(!defaultApplied) {
            setDefaultApplied(true);

            // Get defaults for specific table instance
            const defaultSettings = getDefaultSettingsForTable(table, initialSettings);

            // Ensure localSettings still adhere to the table structure. This accounts for changes to the config of the
            // table since last storing the table state in local storage (i.e. if a column is added/removed)
            const sanitizedLocalSettings = sanitizeLocalSettings(table, localSettings);

            // Deep override of defaults with localSettings.
            updateSettings("", overrideSettings(defaultSettings, sanitizedLocalSettings));
        }
    }, [defaultApplied, initialSettings, localSettings, table, updateSettings]);

    const resetSettings = () => updateSettings("", getDefaultSettingsForTable(table, initialSettings));

    return [defaultApplied ? localSettings : {} as TableState, updateSettings, deleteSettings, resetSettings];
};

export default useInteractiveTableSettings;
