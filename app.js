const markerPositions = {
  doors: [53, 32],
  salt: [36, 18],
  ev: [78, 49],
  bike: [34, 24],
  security: [86, 43],
  cctv: [87, 71],
  defib: [89, 73],
  carparks: [40, 18],
  building: [43, 58],
  lighting: [72, 50],
  streetlights: [82, 42],
  rodent: [58, 72],
  fire: [76, 72],
  water: [64, 78],
  other: [50, 50]
};

const buildingMarkerBases = {
  "Press 3 & 4": [17, 50],
  "DDW / Sheet Metal Fab/TB": [42, 33],
  "DDW / Sheet Metal Fab": [42, 33],
  "Dispatch Warehouse": [60, 33],
  "Building A": [72, 66],
  "Building BCD": [42, 81],
  "AMS House": [90, 86],
  "Site-wide": [86, 38]
};

const markerTypeOffsets = {
  doors: [-4, -5],
  lighting: [0, -6],
  streetlights: [6, -8],
  cctv: [4, -4],
  salt: [-6, 0],
  rodent: [6, 0],
  ev: [-4, 5],
  bike: [0, 6],
  carparks: [5, 5],
  security: [8, -7],
  fire: [-8, 6],
  water: [8, 6],
  defib: [0, -10],
  building: [0, 0],
  other: [0, 0]
};

const assets = [
    {
        "id":  "SITE-WIDE-SECURITY-GATES-001",
        "type":  "security",
        "label":  "Automatic Security Gate ASG-K4-K5-01",
        "building":  "Site-wide",
        "location":  "K4-K5 / along L4-L5 grid line",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Security gates",
        "summary":  "Green vertical gate line, SVG x=547.038 y=150 to y=250; slightly thicker than building blue outlines",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "SITE-WIDE-SECURITY-GATES-002",
        "type":  "security",
        "label":  "Automatic Security Gate ASG-X12-Z12-01",
        "building":  "Site-wide",
        "location":  "Top edge of grids X12, Y12 and Z12",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Security gates",
        "summary":  "Green horizontal gate line, SVG x=1143.808 to x=1293.000 at y=550.000; slightly thicker than building blue outlines",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-ACCESS-DOORS-003",
        "type":  "doors",
        "label":  "Main glazed entrance door",
        "building":  "Dispatch Warehouse",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Access / doors",
        "summary":  "30/30 cylinder confirmed",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-WINDOWS-GLAZING-004",
        "type":  "other",
        "label":  "Glazed frontage",
        "building":  "Dispatch Warehouse",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "18 m x 5.9 m",
        "assetGroup":  "Windows / glazing",
        "summary":  "Main frontage glazing",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-WINDOWS-GLAZING-005",
        "type":  "other",
        "label":  "Top-hung windows",
        "building":  "Dispatch Warehouse",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "9",
        "assetGroup":  "Windows / glazing",
        "summary":  "Recorded on North elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-WINTER-SAFETY-006",
        "type":  "salt",
        "label":  "Salt bin SB-DISPATCH-N-01",
        "building":  "Dispatch Warehouse",
        "location":  "North - Grid J6",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Winter / safety",
        "summary":  "Main entrance/loading-bay area; Grid J6; SVG x=472.442 y=252.000",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-GROUNDS-WEED-CONTROL-007",
        "type":  "other",
        "label":  "Weed-control joint",
        "building":  "Dispatch Warehouse",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "1 area",
        "assetGroup":  "Grounds / weed control",
        "summary":  "North elevation joint",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-LIGHTING-008",
        "type":  "lighting",
        "label":  "LED floodlights",
        "building":  "Dispatch Warehouse",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Lighting",
        "summary":  "Recorded as good",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-DOORS-SHUTTERS-009",
        "type":  "doors",
        "label":  "Roller / rapid opening",
        "building":  "Dispatch Warehouse",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "6.1 m x 4.6 m; rapid door broken",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-DOORS-010",
        "type":  "doors",
        "label":  "Emergency Access Door",
        "building":  "Dispatch Warehouse",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Outside-access cylinder 30/10 recorded",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-CCTV-011",
        "type":  "cctv",
        "label":  "Security camera",
        "building":  "Dispatch Warehouse",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "South elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-LIGHTING-012",
        "type":  "lighting",
        "label":  "LED lights",
        "building":  "Dispatch Warehouse",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Lighting",
        "summary":  "South elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-PEST-CONTROL-013",
        "type":  "rodent",
        "label":  "Rodent / pest point",
        "building":  "Dispatch Warehouse",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Pest control",
        "summary":  "South elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-ACCESS-CONTROL-014",
        "type":  "doors",
        "label":  "Keypad",
        "building":  "Dispatch Warehouse",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Access control",
        "summary":  "Rapid-door keypad code to be added",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-FIRE-SAFETY-015",
        "type":  "fire",
        "label":  "Fire extinguisher",
        "building":  "Dispatch Warehouse",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Fire safety",
        "summary":  "South elevation near rapid/EAD area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-DOORS-SHUTTERS-016",
        "type":  "doors",
        "label":  "Roller shutter",
        "building":  "Dispatch Warehouse",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "5 m x 4.5 m shutter",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-DOORS-017",
        "type":  "doors",
        "label":  "Emergency Access Doors",
        "building":  "Dispatch Warehouse",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "3",
        "assetGroup":  "Doors",
        "summary":  "Recorded for replacement",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-LIGHTING-018",
        "type":  "lighting",
        "label":  "LED lights",
        "building":  "Dispatch Warehouse",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "6",
        "assetGroup":  "Lighting",
        "summary":  "East elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-CCTV-019",
        "type":  "cctv",
        "label":  "Security camera DW-CCTV-E-01",
        "building":  "Dispatch Warehouse",
        "location":  "Grid K6 - bottom-left",
        "grid":  "K6",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Moved from Grid K10 to Grid K6 and nudged right onto the blue outline; SVG x=523.000 y=300.000.",
        "status":  "Location updated by user instruction 2026-07-20; nudged right onto blue outline",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-VENTILATION-020",
        "type":  "other",
        "label":  "Vents",
        "building":  "Dispatch Warehouse",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Ventilation",
        "summary":  "East elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-PEST-CONTROL-021",
        "type":  "rodent",
        "label":  "Rodent-control stations",
        "building":  "Dispatch Warehouse",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Pest control",
        "summary":  "East elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-STORAGE-022",
        "type":  "other",
        "label":  "Timber storage",
        "building":  "Dispatch Warehouse",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "1 area",
        "assetGroup":  "Storage",
        "summary":  "Timber against/near external wall",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-GROUNDS-WEED-CONTROL-023",
        "type":  "other",
        "label":  "Gravel weed strip",
        "building":  "Dispatch Warehouse",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "2 m strip",
        "assetGroup":  "Grounds / weed control",
        "summary":  "East elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-PEST-CONTROL-024",
        "type":  "rodent",
        "label":  "Rodent-control stations",
        "building":  "Dispatch Warehouse",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "4",
        "assetGroup":  "Pest control",
        "summary":  "One damaged pest box recorded",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-LIGHTING-025",
        "type":  "lighting",
        "label":  "Older external lights",
        "building":  "Dispatch Warehouse",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "4",
        "assetGroup":  "Lighting",
        "summary":  "West elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-DOORS-026",
        "type":  "doors",
        "label":  "Emergency Access Door",
        "building":  "Dispatch Warehouse",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Recorded requiring urgent replacement",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-VENTILATION-027",
        "type":  "other",
        "label":  "Vents",
        "building":  "Dispatch Warehouse",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "3",
        "assetGroup":  "Ventilation",
        "summary":  "West elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DISPATCH-WAREHOUSE-LOADING-STRUCTURE-028",
        "type":  "other",
        "label":  "Loading-bay recess",
        "building":  "Dispatch Warehouse",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "4 m x 18 m",
        "assetGroup":  "Loading / structure",
        "summary":  "West elevation recess",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-ACCESS-DOORS-029",
        "type":  "doors",
        "label":  "Pair of TB glazed entrance doors",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "1 pair",
        "assetGroup":  "Access / doors",
        "summary":  "Keypad access; cylinder size to be checked",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-WINDOWS-GLAZING-030",
        "type":  "other",
        "label":  "Curtain-wall glazing",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "1 elevation",
        "assetGroup":  "Windows / glazing",
        "summary":  "Principal North glazing",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-WINDOWS-GLAZING-031",
        "type":  "ev",
        "label":  "Lower-level top-hung openings",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Windows / glazing",
        "summary":  "North elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-WINDOWS-GLAZING-032",
        "type":  "ev",
        "label":  "Upper-level top-hung openings",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "10",
        "assetGroup":  "Windows / glazing",
        "summary":  "North elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-WINTER-SAFETY-033",
        "type":  "salt",
        "label":  "Salt bin SB-DDW-N-01",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "North - Grid G6",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Winter / safety",
        "summary":  "Right of main entrance; Grid G6; SVG x=323.250 y=252.000",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-PARKING-GROUNDS-034",
        "type":  "carparks",
        "label":  "Car park",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "28 spaces + 2 disabled spaces",
        "assetGroup":  "Parking / grounds",
        "summary":  "DDW north elevation car park; total 30 spaces including 2 disabled spaces",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-GROUNDS-035",
        "type":  "other",
        "label":  "Grass verge",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "1 irregular verge",
        "assetGroup":  "Grounds",
        "summary":  "Full-length North verge with kerbs/lighting columns",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-LIGHTING-036",
        "type":  "lighting",
        "label":  "Lighting columns / external lighting",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Lighting",
        "summary":  "Referenced in North grounds/front car park record",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-DOORS-SHUTTERS-037",
        "type":  "doors",
        "label":  "Roller shutters",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Doors / shutters",
        "summary":  "6.56 m x 4.50 m and 3.95 m x 4.50 m",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-CCTV-038",
        "type":  "cctv",
        "label":  "Security camera",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "South service/loading-yard area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-LIGHTING-039",
        "type":  "lighting",
        "label":  "LED wall lights",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Lighting",
        "summary":  "South elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-VENTILATION-040",
        "type":  "other",
        "label":  "Ventilation grille",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Ventilation",
        "summary":  "South elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-WASTE-STORAGE-041",
        "type":  "other",
        "label":  "Waste-timber skip",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Waste / storage",
        "summary":  "South service/loading-yard area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-STORAGE-042",
        "type":  "other",
        "label":  "Sheet-storage trailer",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Storage",
        "summary":  "South service/loading-yard area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-FIRE-SAFETY-043",
        "type":  "fire",
        "label":  "Fire extinguisher",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "South",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Fire safety",
        "summary":  "South roller/rapid-door and EAD area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-CANOPY-STRUCTURE-044",
        "type":  "other",
        "label":  "Canopy",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "12 m x 5.5 m x 6 m",
        "assetGroup":  "Canopy / structure",
        "summary":  "East elevation canopy",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-DOORS-SHUTTERS-045",
        "type":  "doors",
        "label":  "Roller shutter beneath canopy",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "4.05 m x 5.0 m",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-BICYCLE-STORAGE-046",
        "type":  "bike",
        "label":  "Bicycle shelter BS-DDW-E-01",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "East - Grid I7",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Bicycle storage",
        "summary":  "Toward Dispatch Warehouse side near North end; Grid I7; SVG x=422.712 y=325.000; visible bike-shed outline on aerial map",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-STORAGE-MATERIALS-047",
        "type":  "other",
        "label":  "Tate customer material stillages",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Storage / materials",
        "summary":  "East elevation; profiles about 6 m x 900 mm",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-STORAGE-MATERIALS-048",
        "type":  "other",
        "label":  "Tate profile stillages",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Storage / materials",
        "summary":  "East elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-PEST-CONTROL-049",
        "type":  "rodent",
        "label":  "Rodent-control stations",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Pest control",
        "summary":  "East elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-LIGHTING-050",
        "type":  "lighting",
        "label":  "External lighting",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Lighting",
        "summary":  "External lighting condition items referenced",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-GROUNDS-051",
        "type":  "other",
        "label":  "Gravel verge",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "3.4 m x 25 m",
        "assetGroup":  "Grounds",
        "summary":  "From North/West corner",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-BILLET-ALLOY-052",
        "type":  "other",
        "label":  "Aluminium billet bundles",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "5",
        "assetGroup":  "Billet / alloy",
        "summary":  "Each approx. 5 m, end-to-end north-to-south",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-PEST-CONTROL-053",
        "type":  "rodent",
        "label":  "Rodent-control stations",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "3",
        "assetGroup":  "Pest control",
        "summary":  "West elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB-LIGHTING-054",
        "type":  "lighting",
        "label":  "External lighting",
        "building":  "DDW / Sheet Metal Fab/TB",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Lighting",
        "summary":  "External lighting condition items referenced",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-WINTER-SAFETY-055",
        "type":  "salt",
        "label":  "Salt bin",
        "building":  "Building A",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Winter / safety",
        "summary":  "Beneath Door A8 identification sign",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-LIGHTING-056",
        "type":  "lighting",
        "label":  "LED external light at alcove/A8 section",
        "building":  "Building A",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Lighting",
        "summary":  "North alcove/A8 section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-LIGHTING-057",
        "type":  "lighting",
        "label":  "LED external lights on 99 m section",
        "building":  "Building A",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "6",
        "assetGroup":  "Lighting",
        "summary":  "North 99 m straight section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-CCTV-058",
        "type":  "cctv",
        "label":  "Security camera at alcove",
        "building":  "Building A",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "North alcove/A8 section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-CCTV-059",
        "type":  "cctv",
        "label":  "Security cameras on 99 m section",
        "building":  "Building A",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "4",
        "assetGroup":  "CCTV",
        "summary":  "North 99 m straight section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-ACCESS-060",
        "type":  "doors",
        "label":  "Doors and access A3-A19",
        "building":  "Building A",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "17 records",
        "assetGroup":  "Doors / access",
        "summary":  "Includes EADs, shutters, louvred doors, keypads and TBC items",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-RAINWATER-061",
        "type":  "water",
        "label":  "External gutter",
        "building":  "Building A",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "Full 99 m section",
        "assetGroup":  "Rainwater",
        "summary":  "North straight section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-RAINWATER-062",
        "type":  "water",
        "label":  "Downpipes",
        "building":  "Building A",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "5",
        "assetGroup":  "Rainwater",
        "summary":  "North straight section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-GROUNDS-063",
        "type":  "other",
        "label":  "Grass verge",
        "building":  "Building A",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "2 m wide, full length",
        "assetGroup":  "Grounds",
        "summary":  "Approx. 7 m north of elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-WELFARE-EXTERNAL-ASSET-064",
        "type":  "other",
        "label":  "Smoking shelter",
        "building":  "Building A",
        "location":  "North",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Welfare / external asset",
        "summary":  "North elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-ACCESS-GROUNDS-065",
        "type":  "doors",
        "label":  "Steel gate",
        "building":  "Building A",
        "location":  "North east end",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Access / grounds",
        "summary":  "North eastern end",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-EV-CHARGING-066",
        "type":  "ev",
        "label":  "EV charging points",
        "building":  "Building A",
        "location":  "North recessed elevation",
        "grid":  "TBC",
        "quantity":  "3",
        "assetGroup":  "EV charging",
        "summary":  "Adjacent to recorded three-door entrance area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-CANOPY-STRUCTURE-067",
        "type":  "other",
        "label":  "Entrance canopy",
        "building":  "Building A",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Canopy / structure",
        "summary":  "Includes 11 recessed lights",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-LIGHTING-068",
        "type":  "lighting",
        "label":  "Recessed canopy lights",
        "building":  "Building A",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "11",
        "assetGroup":  "Lighting",
        "summary":  "East entrance canopy",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-ACCESS-DOORS-069",
        "type":  "doors",
        "label":  "Keypad/fob-controlled glazed double access door",
        "building":  "Building A",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Access / doors",
        "summary":  "External reader, pull handles and light above",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-LIGHTING-070",
        "type":  "doors",
        "label":  "External light above glazed access door",
        "building":  "Building A",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Lighting",
        "summary":  "East controlled access door",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DRAINAGE-071",
        "type":  "other",
        "label":  "Linear threshold drainage",
        "building":  "Building A",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Drainage",
        "summary":  "At glazed access door approach",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-WINDOWS-GLAZING-072",
        "type":  "other",
        "label":  "Two-panel lower window assembly",
        "building":  "Building A",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "2 glazed sections",
        "assetGroup":  "Windows / glazing",
        "summary":  "Opaque lower panels also recorded",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-WINDOWS-GLAZING-073",
        "type":  "other",
        "label":  "Upper circular glazed window",
        "building":  "Building A",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Windows / glazing",
        "summary":  "Upper-level circular window",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-SHUTTERS-074",
        "type":  "doors",
        "label":  "A39 roller shutter",
        "building":  "Building A",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "4 m x 3 m; rear of Press 1",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-LIGHTING-075",
        "type":  "lighting",
        "label":  "LED above A39",
        "building":  "Building A",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Lighting",
        "summary":  "Above A39 roller shutter",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-VENTILATION-076",
        "type":  "ev",
        "label":  "High-level extraction vents",
        "building":  "Building A",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "3",
        "assetGroup":  "Ventilation",
        "summary":  "Profiled metal-clad elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-VENTILATION-077",
        "type":  "other",
        "label":  "Ventilation louvres",
        "building":  "Building A",
        "location":  "East",
        "grid":  "TBC",
        "quantity":  "6",
        "assetGroup":  "Ventilation",
        "summary":  "Three upper, three above lower window",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-078",
        "type":  "doors",
        "label":  "A26 Emergency Access Door",
        "building":  "Building A",
        "location":  "South eastern recess",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "30/10 cylinder",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-SCRAP-STORAGE-079",
        "type":  "other",
        "label":  "Scrap bins near A26",
        "building":  "Building A",
        "location":  "South eastern recess",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Scrap / storage",
        "summary":  "Near Yard Manager office/platform scales",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-OFFICE-EQUIPMENT-080",
        "type":  "other",
        "label":  "Yard Manager office",
        "building":  "Building A",
        "location":  "South eastern recess",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Office / equipment",
        "summary":  "In front of A26 area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-WEIGHING-EQUIPMENT-081",
        "type":  "other",
        "label":  "Platform weighing scales",
        "building":  "Building A",
        "location":  "South eastern recess",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Weighing equipment",
        "summary":  "In front of A26",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-SHUTTERS-082",
        "type":  "doors",
        "label":  "A27 roller shutter and rapid shutter",
        "building":  "Building A",
        "location":  "South eastern recess",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Doors / shutters",
        "summary":  "Each 5 m x 4.5 m",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-083",
        "type":  "doors",
        "label":  "A28 Emergency Access Door",
        "building":  "Building A",
        "location":  "South eastern recess",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "30/10 cylinder; held open with timber",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-LIGHTING-084",
        "type":  "lighting",
        "label":  "External lights in A27/A28 area",
        "building":  "Building A",
        "location":  "South eastern recess",
        "grid":  "TBC",
        "quantity":  "3",
        "assetGroup":  "Lighting",
        "summary":  "South survey",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-CCTV-085",
        "type":  "cctv",
        "label":  "Security cameras in A27/A28 area",
        "building":  "Building A",
        "location":  "South eastern recess",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "CCTV",
        "summary":  "South survey",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-PROCESS-EMISSIONS-086",
        "type":  "other",
        "label":  "Extrusion scrubber",
        "building":  "Building A",
        "location":  "South west-facing recess",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Process / emissions",
        "summary":  "West-facing recess",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-EMISSIONS-087",
        "type":  "other",
        "label":  "Air-emission monitoring point A2-1",
        "building":  "Building A",
        "location":  "South west-facing recess",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Emissions",
        "summary":  "Extrusion scrubber area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-SHUTTERS-088",
        "type":  "doors",
        "label":  "A29 roller shutter",
        "building":  "Building A",
        "location":  "South west-facing recess",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "2.5 m x 2.1 m",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-RAINWATER-089",
        "type":  "water",
        "label":  "Gutter at A29",
        "building":  "Building A",
        "location":  "South west-facing recess",
        "grid":  "TBC",
        "quantity":  "3.5 m",
        "assetGroup":  "Rainwater",
        "summary":  "South west-facing recess",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-RAINWATER-090",
        "type":  "water",
        "label":  "Downpipe at A29",
        "building":  "Building A",
        "location":  "South west-facing recess",
        "grid":  "TBC",
        "quantity":  "3 m",
        "assetGroup":  "Rainwater",
        "summary":  "South west-facing recess",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-SHUTTERS-091",
        "type":  "doors",
        "label":  "A31 Extrusion 1 roller shutter",
        "building":  "Building A",
        "location":  "South west-facing recess",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "3.5 m x 3.4 m",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-092",
        "type":  "doors",
        "label":  "A32 Emergency Access Door",
        "building":  "Building A",
        "location":  "South west-facing recess",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "30/10 cylinder",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-LIFE-SAFETY-093",
        "type":  "defib",
        "label":  "AED / defibrillator",
        "building":  "Building A",
        "location":  "South west-facing recess",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Life safety",
        "summary":  "Next to Door A32 - Extrusion 1",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-WASTE-CHEMICAL-094",
        "type":  "other",
        "label":  "Waste aerosol/solvent station",
        "building":  "Building A",
        "location":  "South west-facing recess",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Waste / chemical",
        "summary":  "South west-facing recess",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-GAS-CHEMICAL-095",
        "type":  "other",
        "label":  "Ammonia and CO2 compound",
        "building":  "Building A",
        "location":  "South west-facing recess",
        "grid":  "TBC",
        "quantity":  "1 compound",
        "assetGroup":  "Gas / chemical",
        "summary":  "South west-facing recess",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-CHEMICAL-PROCESS-096",
        "type":  "other",
        "label":  "Caustic tanks",
        "building":  "Building A",
        "location":  "South west-facing recess",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Chemical / process",
        "summary":  "South west-facing recess",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-EMERGENCY-SAFETY-097",
        "type":  "other",
        "label":  "Emergency wash station",
        "building":  "Building A",
        "location":  "South west-facing recess",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Emergency safety",
        "summary":  "South west-facing recess",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-STORAGE-098",
        "type":  "other",
        "label":  "IBC storage units",
        "building":  "Building A",
        "location":  "South west-facing recess",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Storage",
        "summary":  "South west-facing recess",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-RAINWATER-099",
        "type":  "water",
        "label":  "External gutter",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "133 m",
        "assetGroup":  "Rainwater",
        "summary":  "Continuous full-length gutter",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-RAINWATER-100",
        "type":  "water",
        "label":  "Downpipes",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "9",
        "assetGroup":  "Rainwater",
        "summary":  "South main section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-WINDOWS-GLAZING-101",
        "type":  "ev",
        "label":  "Upper-level windows",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "6",
        "assetGroup":  "Windows / glazing",
        "summary":  "Each 5 m x 1 m with 3 fixed panes",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-WINDOWS-GLAZING-102",
        "type":  "other",
        "label":  "Fixed panes",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "18",
        "assetGroup":  "Windows / glazing",
        "summary":  "In 6 upper-level windows",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-GROUNDS-103",
        "type":  "other",
        "label":  "Grass verge",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "60 m x 3 m",
        "assetGroup":  "Grounds",
        "summary":  "180 m2",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-PEST-CONTROL-104",
        "type":  "rodent",
        "label":  "Rodent points",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "70, 69, 68, 66",
        "assetGroup":  "Pest control",
        "summary":  "South main section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-105",
        "type":  "doors",
        "label":  "A38 Emergency Access Door",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "30/10 cylinder",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-106",
        "type":  "doors",
        "label":  "A37 Emergency Access Door",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "30/10 cylinder; light above",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-LIGHTING-107",
        "type":  "lighting",
        "label":  "Light above A37",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Lighting",
        "summary":  "South main section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-108",
        "type":  "doors",
        "label":  "A36 Emergency Access Door",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "30/10 cylinder; held open with black rubber",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-109",
        "type":  "doors",
        "label":  "A35 Emergency Access Door",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "No outside access; held open with steel",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-110",
        "type":  "doors",
        "label":  "A34 louvred double door",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Electrical Switch Room 2 / Transformer Room 2; 30/10 cylinder",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-DOORS-SHUTTERS-111",
        "type":  "doors",
        "label":  "A33 billet-loading roller shutter",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "8 m x 3.5 m",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-VENTILATION-112",
        "type":  "other",
        "label":  "External extractor fan",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Ventilation",
        "summary":  "South main section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-RAINWATER-STORAGE-113",
        "type":  "water",
        "label":  "Rainwater retention/harvesting tanks",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "5",
        "assetGroup":  "Rainwater / storage",
        "summary":  "RWH-ST01-RWH-ST05",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-GAS-PROCESS-114",
        "type":  "other",
        "label":  "Liquid nitrogen tank",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Gas / process",
        "summary":  "South main section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-WASTE-STORAGE-115",
        "type":  "other",
        "label":  "Waste billet bin",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Waste / storage",
        "summary":  "South main section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-PROCESS-TANK-116",
        "type":  "other",
        "label":  "WCT holding tank WCT-ET026",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Process / tank",
        "summary":  "With service shed",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-PLANT-STRUCTURE-117",
        "type":  "other",
        "label":  "WCT service shed",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Plant / structure",
        "summary":  "By WCT-ET026",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-CCTV-118",
        "type":  "cctv",
        "label":  "Security camera",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "South main section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-LIGHTING-119",
        "type":  "lighting",
        "label":  "External light",
        "building":  "Building A",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Lighting",
        "summary":  "WCT/service-shed area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-LIGHTING-120",
        "type":  "lighting",
        "label":  "LED external lights",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "7",
        "assetGroup":  "Lighting",
        "summary":  "West elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-CCTV-121",
        "type":  "cctv",
        "label":  "Security cameras",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "5",
        "assetGroup":  "CCTV",
        "summary":  "West elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-RAINWATER-STORAGE-122",
        "type":  "water",
        "label":  "Rainwater-retaining tanks",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "4 TBC",
        "assetGroup":  "Rainwater / storage",
        "summary":  "Quantity subject to confirmation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-EMERGENCY-SAFETY-123",
        "type":  "other",
        "label":  "Eyewash station",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Emergency safety",
        "summary":  "West elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-CHEMICAL-PROCESS-124",
        "type":  "other",
        "label":  "Caustic station",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Chemical / process",
        "summary":  "West elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-UNIDENTIFIED-ASSET-125",
        "type":  "water",
        "label":  "Possible water cooler / unidentified unit",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "1 TBC",
        "assetGroup":  "Unidentified asset",
        "summary":  "Identification outstanding",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-BICYCLE-STORAGE-126",
        "type":  "bike",
        "label":  "Bicycle rack",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Bicycle storage",
        "summary":  "Outside A24 / beneath external stairs",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-TEMPORARY-PLANT-127",
        "type":  "other",
        "label":  "Temporary/rental generator",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Temporary plant",
        "summary":  "MW Hire / Instant Power asset P24779",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-FUEL-STORAGE-128",
        "type":  "other",
        "label":  "External fuel tank",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Fuel storage",
        "summary":  "TransCube P24026",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-ELECTRICAL-129",
        "type":  "ev",
        "label":  "Electrical charger and cable reel",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Electrical",
        "summary":  "Below A25 sign",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-BILLET-ALLOY-130",
        "type":  "other",
        "label":  "Aluminium billet rows/bundles",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "6",
        "assetGroup":  "Billet / alloy",
        "summary":  "Stored end-to-end; alloy photos recorded",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-EMISSIONS-131",
        "type":  "other",
        "label":  "Air Emission Monitoring Point - Anodising Boiler A1-1",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Emissions",
        "summary":  "Fixed caged access ladder",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-ACCESS-STRUCTURE-132",
        "type":  "doors",
        "label":  "Fixed caged access ladder",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Access / structure",
        "summary":  "At A1-1 monitoring point",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-ACCESS-STRUCTURE-133",
        "type":  "doors",
        "label":  "Aluminium external stairs",
        "building":  "Building A",
        "location":  "West",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Access / structure",
        "summary":  "Associated with A24/bicycle rack area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-134",
        "type":  "water",
        "label":  "Full-length external gutter",
        "building":  "Building BCD",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "120 m",
        "assetGroup":  "Rainwater",
        "summary":  "South main section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-135",
        "type":  "water",
        "label":  "Downpipes",
        "building":  "Building BCD",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "9",
        "assetGroup":  "Rainwater",
        "summary":  "D9 at 13 m, C2 at 44 m, C1 at 74 m",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-WINDOWS-GLAZING-136",
        "type":  "other",
        "label":  "Thermally broken windows",
        "building":  "Building BCD",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Windows / glazing",
        "summary":  "Each 2 m x 5 m with top opening",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-LIGHTING-137",
        "type":  "lighting",
        "label":  "LED light",
        "building":  "Building BCD",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Lighting",
        "summary":  "South main section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-CCTV-138",
        "type":  "cctv",
        "label":  "Security cameras",
        "building":  "Building BCD",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "3",
        "assetGroup":  "CCTV",
        "summary":  "South main section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-CANOPY-LIGHTING-139",
        "type":  "lighting",
        "label":  "Canopy over most of elevation",
        "building":  "Building BCD",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Canopy / lighting",
        "summary":  "Includes 10 overhead lights",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-LIGHTING-140",
        "type":  "lighting",
        "label":  "Canopy overhead lights",
        "building":  "Building BCD",
        "location":  "South main section",
        "grid":  "TBC",
        "quantity":  "10",
        "assetGroup":  "Lighting",
        "summary":  "South canopy",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-VENTILATION-141",
        "type":  "other",
        "label":  "Extractor fans",
        "building":  "Building BCD",
        "location":  "South 14 m east-facing return",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Ventilation",
        "summary":  "South 14 m return",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-LIGHTING-142",
        "type":  "lighting",
        "label":  "LED light",
        "building":  "Building BCD",
        "location":  "South 14 m east-facing return",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Lighting",
        "summary":  "South 14 m return",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-WINDOWS-GLAZING-143",
        "type":  "other",
        "label":  "Matching window",
        "building":  "Building BCD",
        "location":  "South 14 m east-facing return",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Windows / glazing",
        "summary":  "South 14 m return",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-144",
        "type":  "doors",
        "label":  "C20 double EAD",
        "building":  "Building BCD",
        "location":  "South 14 m east-facing return",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "At 12 m; outside access; 30/10 cylinder",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-BICYCLE-STORAGE-145",
        "type":  "bike",
        "label":  "Bike shed",
        "building":  "Building BCD",
        "location":  "South 14 m east-facing return",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Bicycle storage",
        "summary":  "Beside e-bike charger/fire extinguisher area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-ELECTRICAL-CHARGING-146",
        "type":  "bike",
        "label":  "Electric-bike charger",
        "building":  "Building BCD",
        "location":  "South 14 m east-facing return",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Electrical charging",
        "summary":  "Beside bike shed",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-FIRE-SAFETY-147",
        "type":  "fire",
        "label":  "Fire extinguisher",
        "building":  "Building BCD",
        "location":  "South 14 m east-facing return",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Fire safety",
        "summary":  "Beside bike shed/e-bike charger area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-GROUNDS-PROJECT-148",
        "type":  "other",
        "label":  "Grass area / garden opportunity",
        "building":  "Building BCD",
        "location":  "South 14 m east-facing return",
        "grid":  "TBC",
        "quantity":  "1 area",
        "assetGroup":  "Grounds / project",
        "summary":  "Beside bike shed/e-bike charger",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-149",
        "type":  "water",
        "label":  "External gutter",
        "building":  "Building BCD",
        "location":  "South 25 m section",
        "grid":  "TBC",
        "quantity":  "25 m",
        "assetGroup":  "Rainwater",
        "summary":  "South 25 m section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-150",
        "type":  "water",
        "label":  "Downpipes",
        "building":  "Building BCD",
        "location":  "South 25 m section",
        "grid":  "TBC",
        "quantity":  "3",
        "assetGroup":  "Rainwater",
        "summary":  "South 25 m section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-151",
        "type":  "doors",
        "label":  "B13 double door",
        "building":  "Building BCD",
        "location":  "South 25 m section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "At 14 m from south-east-facing section; 30/10 cylinder",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-LIGHTING-152",
        "type":  "lighting",
        "label":  "LED lights",
        "building":  "Building BCD",
        "location":  "South 25 m section",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Lighting",
        "summary":  "South 25 m section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-CCTV-153",
        "type":  "cctv",
        "label":  "Security camera",
        "building":  "Building BCD",
        "location":  "South 25 m section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "South 25 m section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-WINDOWS-GLAZING-154",
        "type":  "other",
        "label":  "Thermally broken glazing",
        "building":  "Building BCD",
        "location":  "South 25 m section",
        "grid":  "TBC",
        "quantity":  "1 section",
        "assetGroup":  "Windows / glazing",
        "summary":  "South 25 m section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-LIGHTING-155",
        "type":  "lighting",
        "label":  "LED lights",
        "building":  "Building BCD",
        "location":  "South 34 m east-facing return",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Lighting",
        "summary":  "South 34 m return",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-CCTV-156",
        "type":  "cctv",
        "label":  "Security camera",
        "building":  "Building BCD",
        "location":  "South 34 m east-facing return",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "South 34 m return",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-157",
        "type":  "doors",
        "label":  "B14 double doors to Foam Filling Room",
        "building":  "Building BCD",
        "location":  "South 34 m east-facing return",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Lever/lever, cylinder unknown",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-158",
        "type":  "doors",
        "label":  "B3 main entrance double doors",
        "building":  "Building BCD",
        "location":  "South 34 m east-facing return",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Same hardware; porch project",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-WINDOWS-GLAZING-159",
        "type":  "other",
        "label":  "Distinct thermally broken glazing design",
        "building":  "Building BCD",
        "location":  "South 34 m east-facing return",
        "grid":  "TBC",
        "quantity":  "1 section",
        "assetGroup":  "Windows / glazing",
        "summary":  "South 34 m return",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-160",
        "type":  "water",
        "label":  "Full-length gutter",
        "building":  "Building BCD",
        "location":  "South final section",
        "grid":  "TBC",
        "quantity":  "34 m",
        "assetGroup":  "Rainwater",
        "summary":  "Final south-facing section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-161",
        "type":  "water",
        "label":  "Downpipes",
        "building":  "Building BCD",
        "location":  "South final section",
        "grid":  "TBC",
        "quantity":  "3",
        "assetGroup":  "Rainwater",
        "summary":  "Final south-facing section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-162",
        "type":  "doors",
        "label":  "B2 Emergency Access Door",
        "building":  "Building BCD",
        "location":  "South final section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "At 4 m from eastern elevation; 30/10 cylinder",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-SHUTTERS-163",
        "type":  "doors",
        "label":  "B1 central roller door",
        "building":  "Building BCD",
        "location":  "BCC East elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "7 m x 5 m; rear of Extrusion 3",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-SAFETY-ENCLOSURE-164",
        "type":  "other",
        "label":  "Fenced-off rear of Extrusion 3",
        "building":  "Building BCD",
        "location":  "BCC East elevation",
        "grid":  "TBC",
        "quantity":  "1 area",
        "assetGroup":  "Safety / enclosure",
        "summary":  "At B1 roller door area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-CCTV-165",
        "type":  "cctv",
        "label":  "Security camera",
        "building":  "Building BCD",
        "location":  "BCC East elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "BCC East elevation",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-EV-CHARGING-166",
        "type":  "ev",
        "label":  "EV charger EV-BCD-BCCE-01",
        "building":  "Building BCD",
        "location":  "BCC East elevation - Grid U20",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "EV charging",
        "summary":  "Restored BCCE / BCC East EV charger; SVG x=1040 y=956; approximate position near lower end of BCC East blue outline",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-167",
        "type":  "water",
        "label":  "Full-length gutter",
        "building":  "Building BCD",
        "location":  "North 103 m section",
        "grid":  "TBC",
        "quantity":  "103 m",
        "assetGroup":  "Rainwater",
        "summary":  "North main section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-168",
        "type":  "water",
        "label":  "Downpipes",
        "building":  "Building BCD",
        "location":  "North 103 m section",
        "grid":  "TBC",
        "quantity":  "8",
        "assetGroup":  "Rainwater",
        "summary":  "North main section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-169",
        "type":  "doors",
        "label":  "B4 door",
        "building":  "Building BCD",
        "location":  "North 103 m section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "At 4 m from east; no outside access",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-170",
        "type":  "doors",
        "label":  "B5 EAD",
        "building":  "Building BCD",
        "location":  "North 103 m section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "At 40 m; no outside access; held open with timber",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-CCTV-171",
        "type":  "cctv",
        "label":  "Security cameras",
        "building":  "Building BCD",
        "location":  "North 103 m section",
        "grid":  "TBC",
        "quantity":  "3",
        "assetGroup":  "CCTV",
        "summary":  "North 103 m section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-WINDOWS-GLAZING-172",
        "type":  "ev",
        "label":  "Fixed high-level windows",
        "building":  "Building BCD",
        "location":  "North 103 m section",
        "grid":  "TBC",
        "quantity":  "11",
        "assetGroup":  "Windows / glazing",
        "summary":  "Western side",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-PEST-CONTROL-173",
        "type":  "other",
        "label":  "Pest points 56 and 57",
        "building":  "Building BCD",
        "location":  "North 103 m section",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Pest control",
        "summary":  "One damaged/open station also recorded",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-CLEANING-MAINTENANCE-174",
        "type":  "ev",
        "label":  "Full elevation cleaning area",
        "building":  "Building BCD",
        "location":  "North 103 m section",
        "grid":  "TBC",
        "quantity":  "103 m x 10 m",
        "assetGroup":  "Cleaning / maintenance",
        "summary":  "Biological growth/dirt/staining",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-175",
        "type":  "doors",
        "label":  "B6 EAD",
        "building":  "Building BCD",
        "location":  "West-facing return 5 m",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Midway; outside access; 30/10; held open with timber",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-WINDOWS-GLAZING-176",
        "type":  "ev",
        "label":  "Fixed high-level windows",
        "building":  "Building BCD",
        "location":  "West-facing return 5 m",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Windows / glazing",
        "summary":  "West-facing return",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-ACCESS-STRUCTURE-177",
        "type":  "doors",
        "label":  "Aluminium steps to yard",
        "building":  "Building BCD",
        "location":  "West-facing return 5 m",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Access / structure",
        "summary":  "West-facing return",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-178",
        "type":  "water",
        "label":  "Full-length gutter",
        "building":  "Building BCD",
        "location":  "North-facing 12.5 m section",
        "grid":  "TBC",
        "quantity":  "12.5 m",
        "assetGroup":  "Rainwater",
        "summary":  "North-facing section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-179",
        "type":  "water",
        "label":  "Downpipe",
        "building":  "Building BCD",
        "location":  "North-facing 12.5 m section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Rainwater",
        "summary":  "North-facing section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-PEST-CONTROL-180",
        "type":  "other",
        "label":  "Pest point 58",
        "building":  "Building BCD",
        "location":  "North-facing 12.5 m section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Pest control",
        "summary":  "North-facing section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-CLEANING-MAINTENANCE-181",
        "type":  "other",
        "label":  "Cleaning area",
        "building":  "Building BCD",
        "location":  "North-facing 12.5 m section",
        "grid":  "TBC",
        "quantity":  "1 section",
        "assetGroup":  "Cleaning / maintenance",
        "summary":  "Cleaning required",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-LIGHTING-182",
        "type":  "lighting",
        "label":  "LED light",
        "building":  "Building BCD",
        "location":  "West-facing return 8.5 m",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Lighting",
        "summary":  "West-facing return",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-BILLET-ALLOY-183",
        "type":  "other",
        "label":  "Billet storage",
        "building":  "Building BCD",
        "location":  "West-facing return 8.5 m",
        "grid":  "TBC",
        "quantity":  "1 area",
        "assetGroup":  "Billet / alloy",
        "summary":  "Alloy to be determined",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-WASTE-STORAGE-184",
        "type":  "other",
        "label":  "Scrap binding/banding containers",
        "building":  "Building BCD",
        "location":  "West-facing return 8.5 m",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Waste / storage",
        "summary":  "West-facing return",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-SHUTTERS-185",
        "type":  "doors",
        "label":  "B7 roller door",
        "building":  "Building BCD",
        "location":  "Press 2 billet-loading alcove - south",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "Press 2 billet loading; 8 m x 5 m",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-LIGHTING-186",
        "type":  "lighting",
        "label":  "LED above B7",
        "building":  "Building BCD",
        "location":  "Press 2 billet-loading alcove - south",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Lighting",
        "summary":  "South alcove",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-PEST-CONTROL-187",
        "type":  "other",
        "label":  "Pest point 59",
        "building":  "Building BCD",
        "location":  "Press 2 billet-loading alcove - south",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Pest control",
        "summary":  "South alcove",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-188",
        "type":  "doors",
        "label":  "B12 EAD",
        "building":  "Building BCD",
        "location":  "Press 2/Fabrication alcove - west",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Outside access; 30/10",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-189",
        "type":  "doors",
        "label":  "B11 double EAD",
        "building":  "Building BCD",
        "location":  "Press 2/Fabrication alcove - west",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "No outside access",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-SHUTTERS-190",
        "type":  "doors",
        "label":  "B20 roller shutter to Packing 2",
        "building":  "Building BCD",
        "location":  "Press 2/Fabrication alcove - west",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "4.5 m x 5 m",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-191",
        "type":  "doors",
        "label":  "B9 EAD",
        "building":  "Building BCD",
        "location":  "Press 2/Fabrication alcove - west",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Outside access; 30/10",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-SHUTTERS-192",
        "type":  "doors",
        "label":  "B8 roller shutter to Press 2",
        "building":  "Building BCD",
        "location":  "Press 2/Fabrication alcove - west",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "Same dimensions as B10",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-SHUTTERS-193",
        "type":  "doors",
        "label":  "B10 roller/rapid door",
        "building":  "Building BCD",
        "location":  "Press 2/Fabrication alcove - west",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "Keypad; restricted code retained in source",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-LIGHTING-194",
        "type":  "lighting",
        "label":  "LED light",
        "building":  "Building BCD",
        "location":  "Press 2/Fabrication alcove - west",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Lighting",
        "summary":  "West alcove",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-CCTV-195",
        "type":  "cctv",
        "label":  "Security camera",
        "building":  "Building BCD",
        "location":  "Press 2/Fabrication alcove - west",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "West alcove",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-PEST-CONTROL-196",
        "type":  "other",
        "label":  "Pest point 60",
        "building":  "Building BCD",
        "location":  "Press 2/Fabrication alcove - west",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Pest control",
        "summary":  "West alcove",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-197",
        "type":  "water",
        "label":  "Upper and lower full-length gutters",
        "building":  "Building BCD",
        "location":  "Alcove north / compressor rooms",
        "grid":  "TBC",
        "quantity":  "2 runs",
        "assetGroup":  "Rainwater",
        "summary":  "Projected lower level",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-198",
        "type":  "water",
        "label":  "Downpipes",
        "building":  "Building BCD",
        "location":  "Alcove north / compressor rooms",
        "grid":  "TBC",
        "quantity":  "4",
        "assetGroup":  "Rainwater",
        "summary":  "Compressor-room section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-199",
        "type":  "doors",
        "label":  "C8 outside-access door",
        "building":  "Building BCD",
        "location":  "Alcove north / compressor rooms",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Standard 30/10",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-SHUTTERS-200",
        "type":  "doors",
        "label":  "C9 roller + rapid door to Lift \u0026 Slide",
        "building":  "Building BCD",
        "location":  "Alcove north / compressor rooms",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "4.8 m x 5 m; keypad code unknown",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-201",
        "type":  "doors",
        "label":  "C7 lever/lever door",
        "building":  "Building BCD",
        "location":  "Alcove north / compressor rooms",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Cylinder unknown",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-202",
        "type":  "doors",
        "label":  "C6 double louvre doors",
        "building":  "Building BCD",
        "location":  "Alcove north / compressor rooms",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Cylinder/access TBC",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-203",
        "type":  "doors",
        "label":  "C4/C5 same hardware",
        "building":  "Building BCD",
        "location":  "Alcove north / compressor rooms",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Doors",
        "summary":  "Cylinder/access TBC",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-204",
        "type":  "doors",
        "label":  "C3 EAD",
        "building":  "Building BCD",
        "location":  "Alcove north / compressor rooms",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Outside access; standard 30/10",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-COMPRESSED-AIR-205",
        "type":  "other",
        "label":  "CA-R08 compressed-air tank",
        "building":  "Building BCD",
        "location":  "Alcove north / compressor rooms",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Compressed air",
        "summary":  "Compressor-room section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-HVAC-206",
        "type":  "other",
        "label":  "Daikin condenser units",
        "building":  "Building BCD",
        "location":  "Alcove north / compressor rooms",
        "grid":  "TBC",
        "quantity":  "4",
        "assetGroup":  "HVAC",
        "summary":  "Service labels indicated service due August 2025",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-WINTER-SAFETY-207",
        "type":  "salt",
        "label":  "Salt/grit bin",
        "building":  "Building BCD",
        "location":  "Alcove north / compressor rooms",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Winter / safety",
        "summary":  "Near CA-R08/Daikin assets",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-PEST-CONTROL-208",
        "type":  "other",
        "label":  "Pest point 61",
        "building":  "Building BCD",
        "location":  "Alcove north / compressor rooms",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Pest control",
        "summary":  "Compressor-room section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-SHUTTERS-209",
        "type":  "doors",
        "label":  "D7 and D8 roller shutters with rapid doors",
        "building":  "Building BCD",
        "location":  "Final east-facing Fabrication section",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Doors / shutters",
        "summary":  "Each 4.8 m x 5 m",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-LIGHTING-210",
        "type":  "lighting",
        "label":  "External lights",
        "building":  "Building BCD",
        "location":  "Final east-facing Fabrication section",
        "grid":  "TBC",
        "quantity":  "4",
        "assetGroup":  "Lighting",
        "summary":  "Fabrication section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-CCTV-211",
        "type":  "cctv",
        "label":  "Security cameras",
        "building":  "Building BCD",
        "location":  "Final east-facing Fabrication section",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "CCTV",
        "summary":  "Fabrication section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-PEST-CONTROL-212",
        "type":  "other",
        "label":  "Pest point 63",
        "building":  "Building BCD",
        "location":  "Final east-facing Fabrication section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Pest control",
        "summary":  "Fabrication section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-WINDOWS-GLAZING-213",
        "type":  "ev",
        "label":  "High-level translucent panels",
        "building":  "Building BCD",
        "location":  "Final east-facing Fabrication section",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Windows / glazing",
        "summary":  "Fabrication section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-BILLET-STORAGE-214",
        "type":  "other",
        "label":  "External billet/profile storage",
        "building":  "Building BCD",
        "location":  "Final east-facing Fabrication section",
        "grid":  "TBC",
        "quantity":  "1 area",
        "assetGroup":  "Billet / storage",
        "summary":  "Fabrication section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-215",
        "type":  "water",
        "label":  "Full-length gutter",
        "building":  "Building BCD",
        "location":  "Final north section",
        "grid":  "TBC",
        "quantity":  "48 m",
        "assetGroup":  "Rainwater",
        "summary":  "Final north section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-RAINWATER-216",
        "type":  "water",
        "label":  "Downpipes",
        "building":  "Building BCD",
        "location":  "Final north section",
        "grid":  "TBC",
        "quantity":  "3",
        "assetGroup":  "Rainwater",
        "summary":  "Final north section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-CCTV-217",
        "type":  "cctv",
        "label":  "Security cameras",
        "building":  "Building BCD",
        "location":  "Final north section",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "CCTV",
        "summary":  "Final north section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-LIGHTING-218",
        "type":  "lighting",
        "label":  "External lights",
        "building":  "Building BCD",
        "location":  "Final north section",
        "grid":  "TBC",
        "quantity":  "2",
        "assetGroup":  "Lighting",
        "summary":  "Final north section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-SHUTTERS-219",
        "type":  "doors",
        "label":  "D5 roller/rapid door",
        "building":  "Building BCD",
        "location":  "Final north section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors / shutters",
        "summary":  "Forklift Stores area",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-220",
        "type":  "doors",
        "label":  "D6 EAD",
        "building":  "Building BCD",
        "location":  "Final north section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "No outside access",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-221",
        "type":  "doors",
        "label":  "Unmarked EAD between D5/D6",
        "building":  "Building BCD",
        "location":  "Final north section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Outside access; ID/cylinder TBC",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-DOORS-222",
        "type":  "doors",
        "label":  "D4 automatic double doors",
        "building":  "Building BCD",
        "location":  "Final north section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Doors",
        "summary":  "Forklift Stores Maintenance; 30/30 cylinder",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-WELFARE-EXTERNAL-ASSET-223",
        "type":  "other",
        "label":  "Smoking shelter",
        "building":  "Building BCD",
        "location":  "Final north section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Welfare / external asset",
        "summary":  "Outside D5",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-WASTE-RECYCLING-224",
        "type":  "other",
        "label":  "Waste/recycling bins",
        "building":  "Building BCD",
        "location":  "Final north section",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Waste / recycling",
        "summary":  "Outside D5/final north section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-PEST-CONTROL-225",
        "type":  "other",
        "label":  "Pest point 64",
        "building":  "Building BCD",
        "location":  "Final north section",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Pest control",
        "summary":  "Final north section",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-PEST-CONTROL-226",
        "type":  "other",
        "label":  "Pest point 62",
        "building":  "Building BCD",
        "location":  "Unreconciled BCD pest record",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Pest control",
        "summary":  "Exact location not yet reconciled",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-BILLET-ALLOY-227",
        "type":  "other",
        "label":  "Additional billet storage",
        "building":  "Building BCD",
        "location":  "BCD external storage/scrap area",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Billet / alloy",
        "summary":  "Do not merge with five alcove piles",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-BCD-WASTE-STORAGE-228",
        "type":  "other",
        "label":  "Damaged roll-in box",
        "building":  "Building BCD",
        "location":  "BCD survey photo/source record",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Waste / storage",
        "summary":  "Exact elevation/asset identifier TBC",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "BUILDING-A-WINTER-SAFETY-229",
        "type":  "salt",
        "label":  "Salt bin SB-A-LCP-01",
        "building":  "Building A",
        "location":  "Lower car park steps - Grid Z15",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Winter / safety",
        "summary":  "Near the steps to the lower car park; Grid Z15; SVG x=1268.135 y=725.000",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-DOOR-230",
        "type":  "doors",
        "label":  "Main Entrance Door AMSH-N-MD1",
        "building":  "AMS House",
        "location":  "North elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Door",
        "summary":  "30/30 cylinder",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-DOOR-231",
        "type":  "doors",
        "label":  "Emergency Access Door AMSH-N-EAD1",
        "building":  "AMS House",
        "location":  "North elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Door",
        "summary":  "Details TBC",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-EV-CHARGER-232",
        "type":  "ev",
        "label":  "Dual-outlet EV charger AMSH-N-EV1",
        "building":  "AMS House",
        "location":  "North elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "EV charger",
        "summary":  "Dual outlet",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-CAR-PARK-233",
        "type":  "carparks",
        "label":  "Visitor Car Park AMSH-N-CP1",
        "building":  "AMS House",
        "location":  "North elevation",
        "grid":  "TBC",
        "quantity":  "6 spaces",
        "assetGroup":  "Car park",
        "summary":  "Visitor parking",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-CAR-PARK-234",
        "type":  "carparks",
        "label":  "Car Park AMSH-E-CP1",
        "building":  "AMS House",
        "location":  "East elevation",
        "grid":  "TBC",
        "quantity":  "16 spaces",
        "assetGroup":  "Car park",
        "summary":  "General car park",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-EMERGENCY-DEFIB-235",
        "type":  "defib",
        "label":  "AED AMSH-E-AED1",
        "building":  "AMS House",
        "location":  "East elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Emergency / defib",
        "summary":  "Exact cabinet detail TBC",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-EXTERNAL-WATER-236",
        "type":  "water",
        "label":  "Storm Water Monitoring Point AMSH-E-SW1",
        "building":  "AMS House",
        "location":  "East elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "External / water",
        "summary":  "SW1",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-LIGHTING-237",
        "type":  "lighting",
        "label":  "External lighting AMSH-MSCH-LIGHT-TBC",
        "building":  "AMS House",
        "location":  "TBC",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Lighting",
        "summary":  "Named in maintenance schedule; exact positions TBC",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-CCTV-238",
        "type":  "cctv",
        "label":  "CCTV camera(s) AMSH-MSCH-CCTV-TBC",
        "building":  "AMS House",
        "location":  "TBC",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "CCTV",
        "summary":  "Named in maintenance schedule; exact positions TBC",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-DRAINAGE-239",
        "type":  "water",
        "label":  "Full-length external gutter AMSH-N-GUTTER-01",
        "building":  "AMS House",
        "location":  "North elevation",
        "grid":  "TBC",
        "quantity":  "Full elevation length",
        "assetGroup":  "Drainage",
        "summary":  "Simple user-confirmed provisional entry",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-DRAINAGE-240",
        "type":  "water",
        "label":  "Downpipe AMSH-N-DP-01",
        "building":  "AMS House",
        "location":  "North elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Drainage",
        "summary":  "Simple user-confirmed provisional entry",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-DRAINAGE-241",
        "type":  "water",
        "label":  "Full-length external gutter AMSH-E-GUTTER-01",
        "building":  "AMS House",
        "location":  "East elevation",
        "grid":  "TBC",
        "quantity":  "Full elevation length",
        "assetGroup":  "Drainage",
        "summary":  "Simple user-confirmed provisional entry",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-DRAINAGE-242",
        "type":  "water",
        "label":  "Downpipe AMSH-E-DP-01",
        "building":  "AMS House",
        "location":  "East elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Drainage",
        "summary":  "Simple user-confirmed provisional entry",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-DRAINAGE-243",
        "type":  "water",
        "label":  "Full-length external gutter AMSH-S-GUTTER-01",
        "building":  "AMS House",
        "location":  "South elevation",
        "grid":  "TBC",
        "quantity":  "Full elevation length",
        "assetGroup":  "Drainage",
        "summary":  "Simple user-confirmed provisional entry",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-DRAINAGE-244",
        "type":  "water",
        "label":  "Downpipe AMSH-S-DP-01",
        "building":  "AMS House",
        "location":  "South elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Drainage",
        "summary":  "Simple user-confirmed provisional entry",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-DRAINAGE-245",
        "type":  "water",
        "label":  "Full-length external gutter AMSH-W-GUTTER-01",
        "building":  "AMS House",
        "location":  "West elevation",
        "grid":  "TBC",
        "quantity":  "Full elevation length",
        "assetGroup":  "Drainage",
        "summary":  "Simple user-confirmed provisional entry",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-DRAINAGE-246",
        "type":  "water",
        "label":  "Downpipe AMSH-W-DP-01",
        "building":  "AMS House",
        "location":  "West elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Drainage",
        "summary":  "Simple user-confirmed provisional entry",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-CAR-PARK-247",
        "type":  "carparks",
        "label":  "Parking markings AMSH-MSCH-PARK-MARK-TBC",
        "building":  "AMS House",
        "location":  "North/east car parks",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Car park",
        "summary":  "Named in maintenance schedule",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-CCTV-248",
        "type":  "cctv",
        "label":  "CCTV camera AMSH-S-CCTV1",
        "building":  "AMS House",
        "location":  "South elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Placed on southern AMS House outline",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-CCTV-249",
        "type":  "cctv",
        "label":  "CCTV camera AMSH-S-CCTV2",
        "building":  "AMS House",
        "location":  "South elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Placed on southern AMS House outline",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-CCTV-250",
        "type":  "cctv",
        "label":  "CCTV camera AMSH-N-CCTV1",
        "building":  "AMS House",
        "location":  "North elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Placed on north AMS House outline",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-CCTV-251",
        "type":  "cctv",
        "label":  "CCTV camera AMSH-E-CCTV1",
        "building":  "AMS House",
        "location":  "East elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Placed on east AMS House outline",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-DOOR-252",
        "type":  "doors",
        "label":  "Standard lever-handle door AMSH-S-D01",
        "building":  "AMS House",
        "location":  "South elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "Door",
        "summary":  "Not an EAD",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-CCTV-253",
        "type":  "cctv",
        "label":  "CCTV camera AMSH-N-CCTV1",
        "building":  "AMS House",
        "location":  "North elevation",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Between EV marker and north door marker",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-CCTV-254",
        "type":  "cctv",
        "label":  "CCTV camera AMSH-S-GABLE-CCTV1",
        "building":  "AMS House",
        "location":  "Southern gable",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Restored/clarified on southern gable",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "AMS-HOUSE-CCTV-255",
        "type":  "cctv",
        "label":  "CCTV camera AMSH-S-GABLE-CCTV2",
        "building":  "AMS House",
        "location":  "Southern gable",
        "grid":  "TBC",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Restored/clarified on southern gable",
        "status":  "Imported from All Site Assets Index",
        "source":  "All Site Assets Index"
    },
    {
        "id":  "P34-PLACEHOLDER-01",
        "type":  "building",
        "label":  "Press 3 \u0026 4",
        "building":  "Press 3 \u0026 4",
        "location":  "Footprint confirmed on master map",
        "grid":  "TBC",
        "quantity":  "TBC",
        "assetGroup":  "Building placeholder",
        "summary":  "Placeholder only. Detailed survey and asset import pending for next week.",
        "status":  "Pending survey import",
        "source":  "Mobile app placeholder"
    },
    {
        "id":  "SL1",
        "type":  "streetlights",
        "label":  "SL1 - Double Street Light",
        "building":  "Site-wide",
        "location":  "Grid Y13 - bottom-left corner",
        "grid":  "Y13",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Double Street Light; SVG x=1193.538 y=650.000; placed at bottom-left corner of Grid Y13",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL2",
        "type":  "streetlights",
        "label":  "SL2 - Double Street Light",
        "building":  "Site-wide",
        "location":  "Grid Y16 - moved upward inside grid",
        "grid":  "Y16",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Double Street Light; SVG x=1193.538 y=775.000; moved upward inside Grid Y16.",
        "status":  "User-confirmed move upward within Y16",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL3",
        "type":  "streetlights",
        "label":  "SL3 - Double Street Light",
        "building":  "Site-wide",
        "location":  "Grid Y17 - bottom-left corner",
        "grid":  "Y17",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Double Street Light; SVG x=1193.538 y=850.000; placed at bottom-left corner of Grid Y17",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL4",
        "type":  "streetlights",
        "label":  "SL4 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid Z16 - top-right corner",
        "grid":  "Z16",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=1293.000 y=750.000; placed at top-right corner of Grid Z16.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL5",
        "type":  "streetlights",
        "label":  "SL5 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid Y19 - top-middle",
        "grid":  "Y19",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=1218.904 y=900.000; placed at top-middle of Grid Y19.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL6",
        "type":  "streetlights",
        "label":  "SL6 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid Y19 - right-middle",
        "grid":  "Y19",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=1243.269 y=925.000; placed at right-middle of Grid Y19.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL7",
        "type":  "streetlights",
        "label":  "SL7 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid Y19 - bottom-middle",
        "grid":  "Y19",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=1218.904 y=950.000; placed at bottom-middle of Grid Y19.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL8",
        "type":  "streetlights",
        "label":  "SL8 - Double Street Light",
        "building":  "Site-wide",
        "location":  "Grid X19 - top-right corner",
        "grid":  "X19",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Double Street Light; SVG x=1193.538 y=900.000; placed at top-right corner of Grid X19.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL9",
        "type":  "streetlights",
        "label":  "SL9 - Double Street Light",
        "building":  "Site-wide",
        "location":  "Grid W20 - bottom-left corner",
        "grid":  "W20",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Double Street Light; SVG x=1094.077 y=1000.000; placed at bottom-left corner of Grid W20.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL10",
        "type":  "streetlights",
        "label":  "SL10 - Double Street Light",
        "building":  "Site-wide",
        "location":  "Grid Z14 - right side upper",
        "grid":  "Z14",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Double Street Light; SVG x=1293.000 y=666.667; placed on the right side upper position of Grid Z14.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL11",
        "type":  "streetlights",
        "label":  "SL11 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid Z14 - right side lower",
        "grid":  "Z14",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=1293.000 y=683.333; placed on the right side lower position of Grid Z14.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL12",
        "type":  "streetlights",
        "label":  "SL12 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid R24 - bottom-middle",
        "grid":  "R24",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=870.288 y=1200.000; placed at bottom-middle of Grid R24.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL13",
        "type":  "streetlights",
        "label":  "SL13 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid T23 - middle",
        "grid":  "T23",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=969.750 y=1125.000; placed in the middle of Grid T23.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL14",
        "type":  "streetlights",
        "label":  "SL14 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid U23 - top-right corner",
        "grid":  "U23",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=1044.346 y=1100.000; placed at the top-right corner of Grid U23.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL15",
        "type":  "streetlights",
        "label":  "SL15 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid U22 - bottom-left corner",
        "grid":  "U22",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=994.615 y=1100.000; placed at bottom-left corner of Grid U22.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL16",
        "type":  "streetlights",
        "label":  "SL16 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid V21 - bottom-left corner",
        "grid":  "V21",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=1044.346 y=1050.000; placed at bottom-left corner of Grid V21.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL17",
        "type":  "streetlights",
        "label":  "SL17 - Double Street Light",
        "building":  "Site-wide",
        "location":  "Grid U22 - bottom-middle",
        "grid":  "U22",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Double Street Light; SVG x=1019.481 y=1100.000; placed at bottom-middle of Grid U22.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL18",
        "type":  "streetlights",
        "label":  "SL18 - Double Street Light",
        "building":  "Site-wide",
        "location":  "Grid W22 - middle",
        "grid":  "W22",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Double Street Light; SVG x=1118.942 y=1075.000; placed in the middle of Grid W22.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL19",
        "type":  "streetlights",
        "label":  "SL19 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid W21 - top-left corner",
        "grid":  "W21",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=1094.077 y=1000.000; placed at top-left corner of Grid W21.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL20",
        "type":  "streetlights",
        "label":  "SL20 - Double Street Light",
        "building":  "Site-wide",
        "location":  "Grid I13 - bottom-left corner",
        "grid":  "I13",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Double Street Light; SVG x=397.846 y=650.000; moved from H13 to bottom-left corner of Grid I13.",
        "status":  "User-confirmed move from H13 to I13",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL21",
        "type":  "streetlights",
        "label":  "SL21 - Double Street Light",
        "building":  "Site-wide",
        "location":  "Grid I15 - bottom-left corner",
        "grid":  "I15",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Double Street Light; SVG x=397.846 y=750.000; moved from H15 to bottom-left corner of Grid I15.",
        "status":  "User-confirmed move from H15 to I15",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL22",
        "type":  "streetlights",
        "label":  "SL22 - Double Street Light",
        "building":  "Site-wide",
        "location":  "Grid I17 - bottom-left corner",
        "grid":  "I17",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Double Street Light; SVG x=397.846 y=850.000; moved from H17 to bottom-left corner of Grid I17.",
        "status":  "User-confirmed move from H17 to I17",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL23",
        "type":  "streetlights",
        "label":  "SL23 - Double Street Light",
        "building":  "Site-wide",
        "location":  "Grid X13 - middle",
        "grid":  "X13",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Double Street Light; SVG x=1168.673 y=625.000; placed in the middle of Grid X13.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL24",
        "type":  "streetlights",
        "label":  "SL24 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid F4 - bottom-middle",
        "grid":  "F4",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=273.519 y=200.000; placed at bottom-middle of Grid F4.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL25",
        "type":  "streetlights",
        "label":  "SL25 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid G4 - bottom-middle",
        "grid":  "G4",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=323.250 y=200.000; placed at bottom-middle of Grid G4.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL26",
        "type":  "streetlights",
        "label":  "SL26 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid H4 - bottom-middle",
        "grid":  "H4",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=372.981 y=200.000; placed at bottom-middle of Grid H4.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "SL27",
        "type":  "streetlights",
        "label":  "SL27 - Single Street Light",
        "building":  "Site-wide",
        "location":  "Grid I4 - bottom-right corner",
        "grid":  "I4",
        "quantity":  "1",
        "assetGroup":  "Street Lights",
        "summary":  "Single Street Light; SVG x=447.577 y=200.000; placed at bottom-right corner of Grid I4.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    }
,
    {
        "id":  "P3&4-1",
        "type":  "cctv",
        "label":  "P3&4-1 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "middle of Grid E12",
        "grid":  "E12",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "P3&4-2",
        "type":  "cctv",
        "label":  "P3&4-2 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "middle of Grid E8",
        "grid":  "E8",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "P3&4-3",
        "type":  "cctv",
        "label":  "P3&4-3 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "middle of Grid E9",
        "grid":  "E9",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "P3&4-4",
        "type":  "cctv",
        "label":  "P3&4-4 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "middle of Grid E6",
        "grid":  "E6",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "P3&4-5",
        "type":  "cctv",
        "label":  "P3&4-5 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "middle of Grid E5",
        "grid":  "E5",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "P3&4-6",
        "type":  "cctv",
        "label":  "P3&4-6 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "bottom-right corner of Grid C3",
        "grid":  "C3",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "P3&4-7",
        "type":  "cctv",
        "label":  "P3&4-7 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "bottom-left corner of Grid D4",
        "grid":  "D4",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "P3&4-8",
        "type":  "cctv",
        "label":  "P3&4-8 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "bottom-left corner of Grid D4",
        "grid":  "D4",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "P3&4-9",
        "type":  "cctv",
        "label":  "P3&4-9 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "middle of Grid B4",
        "grid":  "B4",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "P3&4-10",
        "type":  "cctv",
        "label":  "P3&4-10 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "bottom corner of Grid B5",
        "grid":  "B5",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "P3&4-11",
        "type":  "cctv",
        "label":  "P3&4-11 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "top-right corner of Grid B8",
        "grid":  "B8",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "P3&4-12",
        "type":  "cctv",
        "label":  "P3&4-12 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "middle of Grid B9",
        "grid":  "B9",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "P3&4-13",
        "type":  "cctv",
        "label":  "P3&4-13 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "middle of Grid B9",
        "grid":  "B9",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "P3&4-14",
        "type":  "cctv",
        "label":  "P3&4-14 - CCTV camera",
        "building":  "Press 3 & 4",
        "location":  "middle of Grid B10",
        "grid":  "B10",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "Press 3 & 4 CCTV camera placed by grid reference on the current master map; final exact blue-line alignment may be adjusted during field review.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "NG-1",
        "type":  "cctv",
        "label":  "NG-1 - North Gate CCTV camera",
        "building":  "Site-wide",
        "location":  "North Gate - Grid K3 bottom-right",
        "grid":  "K3",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "North Gate CCTV camera, paired at K3 bottom-right.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "NG-2",
        "type":  "cctv",
        "label":  "NG-2 - North Gate CCTV camera",
        "building":  "Site-wide",
        "location":  "North Gate - Grid K3 bottom-right",
        "grid":  "K3",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "North Gate CCTV camera, paired at K3 bottom-right.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "NG-3",
        "type":  "cctv",
        "label":  "NG-3 - North Gate CCTV camera",
        "building":  "Site-wide",
        "location":  "North Gate - Grid J3 bottom-right",
        "grid":  "J3",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "North Gate CCTV camera, paired at J3 bottom-right.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    },
    {
        "id":  "NG-4",
        "type":  "cctv",
        "label":  "NG-4 - North Gate CCTV camera",
        "building":  "Site-wide",
        "location":  "North Gate - Grid J3 bottom-right",
        "grid":  "J3",
        "quantity":  "1",
        "assetGroup":  "CCTV",
        "summary":  "North Gate CCTV camera, paired at J3 bottom-right.",
        "status":  "User-confirmed grid placement",
        "source":  "User instruction 2026-07-20"
    }];
const buildings = [
    {
        "id":  "BUILDING-A",
        "name":  "Building A",
        "status":  "Active",
        "assetCount":  80
    },
    {
        "id":  "BUILDING-BCD",
        "name":  "Building BCD",
        "status":  "Active",
        "assetCount":  95
    },
    {
        "id":  "AMS-HOUSE",
        "name":  "AMS House",
        "status":  "Active",
        "assetCount":  26
    },
    {
        "id":  "DDW-SHEET-METAL-FAB-TB",
        "name":  "DDW / Sheet Metal Fab/TB",
        "status":  "Active",
        "assetCount":  26
    },
    {
        "id":  "DDW-SHEET-METAL-FAB",
        "name":  "DDW / Sheet Metal Fab",
        "status":  "Active",
        "assetCount":  0
    },
    {
        "id":  "DISPATCH-WAREHOUSE",
        "name":  "Dispatch Warehouse",
        "status":  "Active",
        "assetCount":  26
    },
    {
        "id":  "PRESS-3-4",
        "name":  "Press 3 \u0026 4",
        "status":  "Footprint confirmed, CCTV locations started",
        "assetCount":  15
    },
    {
        "id":  "SITE-WIDE",
        "name":  "Site-wide",
        "status":  "Active",
        "assetCount":  33
    }
];
let activeFilter = "all";
let activeBuilding = "all";

const listEl = document.getElementById("assetList");
const mapEl = document.getElementById("miniMap");
const searchEl = document.getElementById("assetSearch");
const countEl = document.getElementById("resultCount");
const summaryEl = document.getElementById("assetSummary");
const buildingListEl = document.getElementById("buildingList");
const sheetEl = document.getElementById("detailSheet");
const buildingSheetEl = document.getElementById("buildingSheet");
const masterSheetEl = document.getElementById("masterSheet");
let selectedBuildingForSheet = null;

renderBuildings();
renderSummary();
render();

document.getElementById("clearBuildingFilter").addEventListener("click", () => {
  activeBuilding = "all";
  renderBuildings();
  render();
});

document.querySelectorAll(".filter-strip button").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    syncFilterControls();
    render();
  });
});

searchEl.addEventListener("input", render);
document.getElementById("closeSheet").addEventListener("click", closeDetail);
sheetEl.addEventListener("click", (event) => {
  if (event.target === sheetEl) closeDetail();
});
document.getElementById("closeBuildingSheet").addEventListener("click", closeBuildingDetail);
buildingSheetEl.addEventListener("click", (event) => {
  if (event.target === buildingSheetEl) closeBuildingDetail();
});
document.getElementById("masterInfoButton").addEventListener("click", openMasterInfo);
document.getElementById("inlineInfoButton").addEventListener("click", openMasterInfo);
document.getElementById("closeMasterSheet").addEventListener("click", closeMasterInfo);
masterSheetEl.addEventListener("click", (event) => {
  if (event.target === masterSheetEl) closeMasterInfo();
});
document.getElementById("showBuildingAssets").addEventListener("click", () => {
  if (!selectedBuildingForSheet) return;
  activeBuilding = selectedBuildingForSheet.name;
  closeBuildingDetail();
  renderBuildings();
  render();
  document.getElementById("registerView").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".bottom-nav button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".bottom-nav button").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    const target = document.getElementById(button.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

function getFilteredAssets() {
  const query = searchEl.value.trim().toLowerCase();
  return assets.filter((asset) => {
    const matchesFilter = activeFilter === "all" || asset.type === activeFilter;
    const matchesBuilding = activeBuilding === "all" || asset.building === activeBuilding;
    const haystack = `${asset.id} ${asset.type} ${asset.label} ${asset.building} ${asset.location} ${asset.grid} ${asset.summary}`.toLowerCase();
    return matchesFilter && matchesBuilding && (!query || haystack.includes(query));
  });
}

function renderBuildings() {
  buildingListEl.innerHTML = "";
  buildings.forEach((building) => {
    const row = document.createElement("button");
    row.className = "building-row";
    row.type = "button";
    row.classList.toggle("active", activeBuilding === building.name);
    row.innerHTML = `<div><strong>${building.name}</strong><span>${building.status}</span></div><span>${building.assetCount}</span>`;
    row.addEventListener("click", () => {
      openBuildingDetail(building);
    });
    buildingListEl.appendChild(row);
  });
}

function openBuildingDetail(building) {
  selectedBuildingForSheet = building;
  const buildingAssets = assets.filter((asset) => asset.building === building.name);
  const counts = buildingAssets.reduce((acc, asset) => {
    acc[asset.type] = (acc[asset.type] || 0) + 1;
    return acc;
  }, {});
  const groupText = Object.keys(counts).length
    ? Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([type, count]) => `${type}: ${count}`).join(", ")
    : "No asset records yet";
  document.getElementById("buildingTitle").textContent = building.name;
  document.getElementById("buildingStatus").textContent = building.status;
  document.getElementById("buildingRecordCount").textContent = `${building.assetCount} records`;
  document.getElementById("buildingGroups").textContent = groupText;
  const breakdown = document.getElementById("buildingBreakdown");
  breakdown.innerHTML = "";
  Object.entries(counts).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
    const item = document.createElement("span");
    item.textContent = `${type}: ${count}`;
    breakdown.appendChild(item);
  });
  if (!Object.keys(counts).length) {
    const item = document.createElement("span");
    item.textContent = "Survey import pending";
    breakdown.appendChild(item);
  }
  buildingSheetEl.classList.add("open");
  buildingSheetEl.setAttribute("aria-hidden", "false");
}

function closeBuildingDetail() {
  buildingSheetEl.classList.remove("open");
  buildingSheetEl.setAttribute("aria-hidden", "true");
}

function openMasterInfo() {
  masterSheetEl.classList.add("open");
  masterSheetEl.setAttribute("aria-hidden", "false");
}

function closeMasterInfo() {
  masterSheetEl.classList.remove("open");
  masterSheetEl.setAttribute("aria-hidden", "true");
}

function render() {
  const filtered = getFilteredAssets();
  countEl.textContent = `${filtered.length} asset${filtered.length === 1 ? "" : "s"}`;
  renderList(filtered);
  renderMarkers(filtered);
  renderSummary();
}

function renderSummary() {
  const order = ["doors", "lighting", "streetlights", "cctv", "salt", "rodent", "ev", "bike", "carparks", "security", "fire", "water", "defib", "building", "other"];
  const labels = {
    doors: "Doors",
    lighting: "Lighting",
    streetlights: "Street Lights",
    cctv: "CCTV",
    salt: "Salt",
    rodent: "Rodent",
    ev: "EV",
    bike: "Bike",
    carparks: "Car Parks",
    security: "Security Gates",
    fire: "Fire",
    water: "Water",
    defib: "Defib",
    building: "Buildings",
    other: "Other"
  };
  const counts = assets.reduce((acc, asset) => {
    acc[asset.type] = (acc[asset.type] || 0) + 1;
    return acc;
  }, {});
  summaryEl.innerHTML = "";
  order.filter((type) => counts[type]).forEach((type) => {
    const tile = document.createElement("button");
    tile.className = "summary-tile";
    tile.type = "button";
    tile.classList.toggle("active", activeFilter === type);
    tile.innerHTML = `<strong>${counts[type]}</strong><span>${labels[type] || type}</span>`;
    tile.addEventListener("click", () => {
      activeFilter = type;
      syncFilterControls();
      render();
      document.getElementById("registerView").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    summaryEl.appendChild(tile);
  });
}

function syncFilterControls() {
  document.querySelectorAll(".filter-strip button").forEach((item) => {
    item.classList.toggle("active", item.dataset.filter === activeFilter);
  });
}

function renderList(filtered) {
  if (!filtered.length) {
    listEl.innerHTML = `<p>No assets match this filter.</p>`;
    return;
  }

  listEl.innerHTML = "";
  filtered.forEach((asset) => {
    const row = document.createElement("button");
    row.className = "asset-row";
    row.type = "button";
    row.innerHTML = `<div class="asset-row-top"><strong>${asset.label}</strong><span class="asset-type-pill">${asset.type}</span></div><span>${asset.building} - ${asset.location} - ${asset.grid}</span>`;
    row.addEventListener("click", () => openDetail(asset));
    listEl.appendChild(row);
  });
}

function renderMarkers(filtered) {
  mapEl.querySelectorAll(".map-marker").forEach((marker) => marker.remove());
  const groups = filtered.reduce((acc, asset) => {
    const key = `${asset.building}||${asset.type}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(asset);
    return acc;
  }, {});

  Object.values(groups).forEach((group, index) => {
    const asset = group[0];
    const base = buildingMarkerBases[asset.building] || markerPositions[asset.type] || [50, 50];
    const typeOffset = markerTypeOffsets[asset.type] || [0, 0];
    const fineOffset = (index % 2) * 1.2;
    const marker = document.createElement("button");
    marker.className = `map-marker type-${asset.type}`;
    marker.type = "button";
    marker.style.left = `${base[0] + typeOffset[0] + fineOffset}%`;
    marker.style.top = `${base[1] + typeOffset[1] + fineOffset}%`;
    marker.innerHTML = `${getMarkerText(asset.type)}${group.length > 1 ? `<span class="marker-count">${group.length}</span>` : ""}`;
    marker.title = group.length > 1
      ? `${asset.building} - ${group.length} ${asset.type} records`
      : `${asset.label} - ${asset.grid}`;
    marker.addEventListener("click", () => openDetail(asset));
    mapEl.appendChild(marker);
  });
}

function getMarkerText(type) {
  const labels = {
    doors: "D",
    salt: "S",
    ev: "EV",
    bike: "B",
    security: "G",
    cctv: "C",
    defib: "+",
    carparks: "P",
    building: "B",
    lighting: "L",
    streetlights: "SL",
    rodent: "R",
    fire: "F",
    water: "W",
    other: "A"
  };
  return labels[type] || "A";
}

function openDetail(asset) {
  document.getElementById("detailType").textContent = asset.type;
  document.getElementById("detailTitle").textContent = asset.label;
  document.getElementById("detailId").textContent = asset.id;
  document.getElementById("detailBuilding").textContent = asset.building;
  document.getElementById("detailLocation").textContent = asset.location;
  document.getElementById("detailGrid").textContent = asset.grid;
  document.getElementById("detailGroup").textContent = asset.assetGroup || asset.type;
  document.getElementById("detailQuantity").textContent = asset.quantity || "TBC";
  document.getElementById("detailStatus").textContent = asset.status;
  document.getElementById("detailSummary").textContent = asset.summary;
  sheetEl.classList.add("open");
  sheetEl.setAttribute("aria-hidden", "false");
}

function closeDetail() {
  sheetEl.classList.remove("open");
  sheetEl.setAttribute("aria-hidden", "true");
}



























