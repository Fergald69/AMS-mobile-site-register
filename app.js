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
  motorbike: [66, 86],
  electrical: [43, 62],
  billet: [30, 80],
  other: [50, 50]
};

const buildingMarkerBases = {
    "Press 3 & 4": [14, 42],
    "DDW / Sheet Metal Fab/TB": [42, 21],
    "DDW / Sheet Metal Fab": [42, 21],
    "Dispatch Warehouse": [60, 21],
    "Building A": [72, 56],
  "Building BCD": [42, 89],
  "AMS House": [90, 86],
  "North Gate": [48, 12],
  "Billet Locations": [30, 80],
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
  motorbike: [7, 7],
  electrical: [-7, 7],
  billet: [-10, 9],
  building: [0, 0],
  other: [0, 0]
};

const hiddenMapTypes = new Set(["building", "other"]);

const buildingShapeClasses = {
  "Press 3 & 4": "local-shape-press",
  "DDW / Sheet Metal Fab/TB": "local-shape-ddw",
  "DDW / Sheet Metal Fab": "local-shape-ddw",
  "Dispatch Warehouse": "local-shape-dispatch",
  "Building A": "local-shape-a",
  "Building BCD": "local-shape-bcd",
  "AMS House": "local-shape-house"
};

const buildingLocalBounds = {
  "Press 3 & 4": { north: 8, south: 91, west: 10, east: 34 },
  "DDW / Sheet Metal Fab/TB": { north: 20, south: 82, west: 26, east: 61 },
  "DDW / Sheet Metal Fab": { north: 20, south: 82, west: 26, east: 61 },
  "Dispatch Warehouse": { north: 15, south: 84, west: 52, east: 73 },
  "Building A": { north: 20, south: 80, west: 38, east: 90 },
  "Building BCD": { north: 28, south: 86, west: 18, east: 88 },
  "AMS House": { north: 38, south: 78, west: 60, east: 90 }
};

const assets = [
  {
    "id": "AMS-HOUSE-EV-CHARGER-232",
    "type": "ev",
    "label": "Dual-outlet EV charger AMSH-N-EV1",
    "building": "AMS House",
    "location": "North elevation",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "EV charger",
    "summary": "Dual outlet",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "AMS-HOUSE-DRAINAGE-239",
    "type": "water",
    "label": "Full-length external gutter AMSH-N-GUTTER-01",
    "building": "AMS House",
    "location": "North elevation",
    "grid": "TBC",
    "quantity": "Full elevation length",
    "assetGroup": "Drainage",
    "summary": "Simple user-confirmed provisional entry",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "AMS-HOUSE-DRAINAGE-240",
    "type": "water",
    "label": "Downpipe AMSH-N-DP-01",
    "building": "AMS House",
    "location": "North elevation",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Drainage",
    "summary": "Simple user-confirmed provisional entry",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "AMS-HOUSE-DRAINAGE-241",
    "type": "water",
    "label": "Full-length external gutter AMSH-E-GUTTER-01",
    "building": "AMS House",
    "location": "East elevation",
    "grid": "TBC",
    "quantity": "Full elevation length",
    "assetGroup": "Drainage",
    "summary": "Simple user-confirmed provisional entry",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "AMS-HOUSE-DRAINAGE-242",
    "type": "water",
    "label": "Downpipe AMSH-E-DP-01",
    "building": "AMS House",
    "location": "East elevation",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Drainage",
    "summary": "Simple user-confirmed provisional entry",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "AMS-HOUSE-DRAINAGE-243",
    "type": "water",
    "label": "Full-length external gutter AMSH-S-GUTTER-01",
    "building": "AMS House",
    "location": "South elevation",
    "grid": "TBC",
    "quantity": "Full elevation length",
    "assetGroup": "Drainage",
    "summary": "Simple user-confirmed provisional entry",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "AMS-HOUSE-DRAINAGE-244",
    "type": "water",
    "label": "Downpipe AMSH-S-DP-01",
    "building": "AMS House",
    "location": "South elevation",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Drainage",
    "summary": "Simple user-confirmed provisional entry",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "AMS-HOUSE-DRAINAGE-245",
    "type": "water",
    "label": "Full-length external gutter AMSH-W-GUTTER-01",
    "building": "AMS House",
    "location": "West elevation",
    "grid": "TBC",
    "quantity": "Full elevation length",
    "assetGroup": "Drainage",
    "summary": "Simple user-confirmed provisional entry",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "AMS-HOUSE-DRAINAGE-246",
    "type": "water",
    "label": "Downpipe AMSH-W-DP-01",
    "building": "AMS House",
    "location": "West elevation",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Drainage",
    "summary": "Simple user-confirmed provisional entry",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "AMS-HOUSE-EXTERNAL-WATER-236",
    "type": "water",
    "label": "Storm Water Monitoring Point AMSH-E-SW1",
    "building": "AMS House",
    "location": "East elevation",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "External / water",
    "summary": "SW1",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BLT-001",
    "type": "billet",
    "label": "BLT-001 - 6101 billet",
    "building": "Billet Locations",
    "location": "Grid C1 - horizontal",
    "grid": "C1",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6101 billet stored horizontal at Grid C1",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-002",
    "type": "billet",
    "label": "BLT-002 - 6005A billet",
    "building": "Billet Locations",
    "location": "Grid D2 - horizontal",
    "grid": "D2",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6005A billet stored horizontal at Grid D2",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-003",
    "type": "billet",
    "label": "BLT-003 - 6005A billet",
    "building": "Billet Locations",
    "location": "Grid D3 - horizontal",
    "grid": "D3",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6005A billet stored horizontal at Grid D3",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-004",
    "type": "billet",
    "label": "BLT-004 - 6101B billet",
    "building": "Billet Locations",
    "location": "Grid E4 - vertical",
    "grid": "E4",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6101B billet stored vertical at Grid E4",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-005",
    "type": "billet",
    "label": "BLT-005 - 6063 billet",
    "building": "Billet Locations",
    "location": "Grid E5 - vertical",
    "grid": "E5",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063 billet stored vertical at Grid E5",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-006",
    "type": "billet",
    "label": "BLT-006 - 6101B billet",
    "building": "Billet Locations",
    "location": "Grid E8 - vertical",
    "grid": "E8",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6101B billet stored vertical at Grid E8",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-007",
    "type": "billet",
    "label": "BLT-007 - 6063 billet",
    "building": "Billet Locations",
    "location": "Grid E9 - vertical",
    "grid": "E9",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063 billet stored vertical at Grid E9",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-008",
    "type": "billet",
    "label": "BLT-008 - 6063A billet",
    "building": "Billet Locations",
    "location": "Grid E10 - vertical",
    "grid": "E10",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063A billet stored vertical at Grid E10",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-009",
    "type": "billet",
    "label": "BLT-009 - 6005A billet",
    "building": "Billet Locations",
    "location": "Grid E11 - vertical",
    "grid": "E11",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6005A billet stored vertical at Grid E11",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-010",
    "type": "billet",
    "label": "BLT-010 - 6063A billet",
    "building": "Billet Locations",
    "location": "Grid E12 - vertical",
    "grid": "E12",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063A billet stored vertical at Grid E12",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-011",
    "type": "billet",
    "label": "BLT-011 - 6005A billet",
    "building": "Billet Locations",
    "location": "Grid G5 - vertical",
    "grid": "G5",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6005A billet stored vertical at Grid G5",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-012",
    "type": "billet",
    "label": "BLT-012 - 6005A billet",
    "building": "Billet Locations",
    "location": "Grid G6 - vertical",
    "grid": "G6",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6005A billet stored vertical at Grid G6",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-013",
    "type": "billet",
    "label": "BLT-013 - 6063 billet",
    "building": "Billet Locations",
    "location": "Grid G7 - vertical",
    "grid": "G7",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063 billet stored vertical at Grid G7",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-014",
    "type": "billet",
    "label": "BLT-014 - 6063 billet",
    "building": "Billet Locations",
    "location": "Grid G8 - vertical",
    "grid": "G8",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063 billet stored vertical at Grid G8",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-015",
    "type": "billet",
    "label": "BLT-015 - 6061 billet",
    "building": "Billet Locations",
    "location": "Grid G9 - vertical",
    "grid": "G9",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6061 billet stored vertical at Grid G9",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-016",
    "type": "billet",
    "label": "BLT-016 - 6063A billet",
    "building": "Billet Locations",
    "location": "Grid G11 - vertical",
    "grid": "G11",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063A billet stored vertical at Grid G11",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-017",
    "type": "billet",
    "label": "BLT-017 - 6060-25 billet",
    "building": "Billet Locations",
    "location": "Grid F14 - horizontal",
    "grid": "F14",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6060-25 billet stored horizontal at Grid F14",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-018",
    "type": "billet",
    "label": "BLT-018 - 6060-25 billet",
    "building": "Billet Locations",
    "location": "Grid G14 - horizontal",
    "grid": "G14",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6060-25 billet stored horizontal at Grid G14",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-019",
    "type": "billet",
    "label": "BLT-019 - 6063 billet",
    "building": "Billet Locations",
    "location": "Grid I14 - horizontal",
    "grid": "I14",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063 billet stored horizontal at Grid I14",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-020",
    "type": "billet",
    "label": "BLT-020 - 6063A billet",
    "building": "Billet Locations",
    "location": "Grid H14 - horizontal",
    "grid": "H14",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063A billet stored horizontal at Grid H14",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-021",
    "type": "billet",
    "label": "BLT-021 - 6101B billet",
    "building": "Billet Locations",
    "location": "Grid P11 - vertical",
    "grid": "P11",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6101B billet stored vertical at Grid P11",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-022",
    "type": "billet",
    "label": "BLT-022 - 6060-25 billet",
    "building": "Billet Locations",
    "location": "Grid P12 - vertical",
    "grid": "P12",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6060-25 billet stored vertical at Grid P12",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-023",
    "type": "billet",
    "label": "BLT-023 - 6060-25 billet",
    "building": "Billet Locations",
    "location": "Grid P14 - vertical",
    "grid": "P14",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6060-25 billet stored vertical at Grid P14",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-024",
    "type": "billet",
    "label": "BLT-024 - 6063 billet",
    "building": "Billet Locations",
    "location": "Grid P15 - vertical",
    "grid": "P15",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063 billet stored vertical at Grid P15",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-025",
    "type": "billet",
    "label": "BLT-025 - 6063 billet",
    "building": "Billet Locations",
    "location": "Grid P16 - vertical",
    "grid": "P16",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063 billet stored vertical at Grid P16",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-026",
    "type": "billet",
    "label": "BLT-026 - 6101 billet",
    "building": "Billet Locations",
    "location": "Grid J16 - vertical",
    "grid": "J16",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6101 billet stored vertical at Grid J16",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-027",
    "type": "billet",
    "label": "BLT-027 - 6063B billet",
    "building": "Billet Locations",
    "location": "Grid H21 - vertical",
    "grid": "H21",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063B billet stored vertical at Grid H21",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-028",
    "type": "billet",
    "label": "BLT-028 - 6082 billet",
    "building": "Billet Locations",
    "location": "Grid H20 - vertical",
    "grid": "H20",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6082 billet stored vertical at Grid H20",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-029",
    "type": "billet",
    "label": "BLT-029 - 6082 billet",
    "building": "Billet Locations",
    "location": "Grid H19 - vertical",
    "grid": "H19",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6082 billet stored vertical at Grid H19",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-030",
    "type": "billet",
    "label": "BLT-030 - 6063 billet",
    "building": "Billet Locations",
    "location": "Grid K21 - vertical",
    "grid": "K21",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063 billet stored vertical at Grid K21",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-031",
    "type": "billet",
    "label": "BLT-031 - 6005A billet",
    "building": "Billet Locations",
    "location": "Grid K20 - vertical",
    "grid": "K20",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6005A billet stored vertical at Grid K20",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-032",
    "type": "billet",
    "label": "BLT-032 - 6005A billet",
    "building": "Billet Locations",
    "location": "Grid M21 - vertical",
    "grid": "M21",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6005A billet stored vertical at Grid M21",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-033",
    "type": "billet",
    "label": "BLT-033 - 6005-30 billet",
    "building": "Billet Locations",
    "location": "Grid N21 - vertical",
    "grid": "N21",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6005-30 billet stored vertical at Grid N21",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-034",
    "type": "billet",
    "label": "BLT-034 - 6005A billet",
    "building": "Billet Locations",
    "location": "Grid M20 - horizontal",
    "grid": "M20",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6005A billet stored horizontal at Grid M20",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-035",
    "type": "billet",
    "label": "BLT-035 - 6063A billet",
    "building": "Billet Locations",
    "location": "Grid K24 - vertical",
    "grid": "K24",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063A billet stored vertical at Grid K24",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-036",
    "type": "billet",
    "label": "BLT-036 - 6063A billet",
    "building": "Billet Locations",
    "location": "Grid K23 - vertical",
    "grid": "K23",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063A billet stored vertical at Grid K23",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-037",
    "type": "billet",
    "label": "BLT-037 - 6063A billet",
    "building": "Billet Locations",
    "location": "Grid K22 - vertical",
    "grid": "K22",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063A billet stored vertical at Grid K22",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-038",
    "type": "billet",
    "label": "BLT-038 - 6063A billet",
    "building": "Billet Locations",
    "location": "Grid Q22 - horizontal",
    "grid": "Q22",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063A billet stored horizontal at Grid Q22",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-039",
    "type": "billet",
    "label": "BLT-039 - 6063A billet",
    "building": "Billet Locations",
    "location": "Grid P22 - horizontal",
    "grid": "P22",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063A billet stored horizontal at Grid P22",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-040",
    "type": "billet",
    "label": "BLT-040 - 6063-3.0 billet",
    "building": "Billet Locations",
    "location": "Grid N24 - horizontal",
    "grid": "N24",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063-3.0 billet stored horizontal at Grid N24",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BLT-041",
    "type": "billet",
    "label": "BLT-041 - 6063 billet",
    "building": "Billet Locations",
    "location": "Grid N23 - vertical",
    "grid": "N23",
    "quantity": "1",
    "assetGroup": "Billet storage",
    "summary": "6063 billet stored vertical at Grid N23",
    "status": "Confirmed from billet survey",
    "source": "Current master billet map"
  },
  {
    "id": "BUILDING-A-BICYCLE-STORAGE-126",
    "type": "bike",
    "label": "Bicycle rack",
    "building": "Building A",
    "location": "West",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Bicycle storage",
    "summary": "Outside A24 / beneath external stairs",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BA-CCTV-20260721-01",
    "type": "cctv",
    "label": "BA-CCTV-20260721-01 - Building A CCTV camera - Grid Y12 - bunched top-right of Y12",
    "building": "Building A",
    "location": "Grid Y12 - SVG x=1226.3, y=559.0",
    "grid": "Y12",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-01 - Building A CCTV camera - Grid Y12 - bunched top-right of Y12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-02",
    "type": "cctv",
    "label": "BA-CCTV-20260721-02 - Building A CCTV camera - Grid Y12 - bunched top-right of Y12",
    "building": "Building A",
    "location": "Grid Y12 - SVG x=1234.3, y=559.0",
    "grid": "Y12",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-02 - Building A CCTV camera - Grid Y12 - bunched top-right of Y12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-03",
    "type": "cctv",
    "label": "BA-CCTV-20260721-03 - Building A CCTV camera - Grid Y12 - bunched top-right of Y12",
    "building": "Building A",
    "location": "Grid Y12 - SVG x=1242.3, y=559.0",
    "grid": "Y12",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-03 - Building A CCTV camera - Grid Y12 - bunched top-right of Y12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-04",
    "type": "cctv",
    "label": "BA-CCTV-20260721-04 - Building A CCTV camera - Grid X13 - centre of X13",
    "building": "Building A",
    "location": "Grid X13 - SVG x=1164.2, y=625.0",
    "grid": "X13",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-04 - Building A CCTV camera - Grid X13 - centre of X13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-05",
    "type": "cctv",
    "label": "BA-CCTV-20260721-05 - Building A CCTV camera - Grid X13 - centre of X13",
    "building": "Building A",
    "location": "Grid X13 - SVG x=1173.2, y=625.0",
    "grid": "X13",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-05 - Building A CCTV camera - Grid X13 - centre of X13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-06",
    "type": "cctv",
    "label": "BA-CCTV-20260721-06 - Building A CCTV camera - Grid Y14 - top-left of Y14",
    "building": "Building A",
    "location": "Grid Y14 - SVG x=1198.0, y=659.0",
    "grid": "Y14",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-06 - Building A CCTV camera - Grid Y14 - top-left of Y14",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-07",
    "type": "cctv",
    "label": "BA-CCTV-20260721-07 - Building A CCTV camera - Grid Y14 - top-left of Y14",
    "building": "Building A",
    "location": "Grid Y14 - SVG x=1207.0, y=659.0",
    "grid": "Y14",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-07 - Building A CCTV camera - Grid Y14 - top-left of Y14",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-08",
    "type": "cctv",
    "label": "BA-CCTV-20260721-08 - Building A CCTV camera - Grid Y16 - middle of Y16",
    "building": "Building A",
    "location": "Grid Y16 - SVG x=1213.9, y=775.0",
    "grid": "Y16",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-08 - Building A CCTV camera - Grid Y16 - middle of Y16",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-09",
    "type": "cctv",
    "label": "BA-CCTV-20260721-09 - Building A CCTV camera - Grid Y16 - middle of Y16",
    "building": "Building A",
    "location": "Grid Y16 - SVG x=1222.9, y=775.0",
    "grid": "Y16",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-09 - Building A CCTV camera - Grid Y16 - middle of Y16",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-10",
    "type": "cctv",
    "label": "BA-CCTV-20260721-10 - Building A CCTV camera - Grid Z16 - bottom-left of Z16",
    "building": "Building A",
    "location": "Grid Z16 - SVG x=1252.2, y=791.0",
    "grid": "Z16",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-10 - Building A CCTV camera - Grid Z16 - bottom-left of Z16",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-11",
    "type": "cctv",
    "label": "BA-CCTV-20260721-11 - Building A CCTV camera - Grid M17 - towards the end of the line at M17",
    "building": "Building A",
    "location": "Grid M17 - SVG x=639.0, y=825.0",
    "grid": "M17",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-11 - Building A CCTV camera - Grid M17 - towards the end of the line at M17",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-12",
    "type": "cctv",
    "label": "BA-CCTV-20260721-12 - Building A CCTV camera - Grid M18 - top of M18 left",
    "building": "Building A",
    "location": "Grid M18 - SVG x=605.7, y=859.0",
    "grid": "M18",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-12 - Building A CCTV camera - Grid M18 - top of M18 left",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-13",
    "type": "cctv",
    "label": "BA-CCTV-20260721-13 - Building A CCTV camera - Grid N18 - top of N18 right",
    "building": "Building A",
    "location": "Grid N18 - SVG x=687.3, y=859.0",
    "grid": "N18",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-13 - Building A CCTV camera - Grid N18 - top of N18 right",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-14",
    "type": "cctv",
    "label": "BA-CCTV-20260721-14 - Building A CCTV camera - Grid N18 - middle of the blue line at N18",
    "building": "Building A",
    "location": "Grid N18 - SVG x=671.4, y=875.0",
    "grid": "N18",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-14 - Building A CCTV camera - Grid N18 - middle of the blue line at N18",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-15",
    "type": "cctv",
    "label": "BA-CCTV-20260721-15 - Building A CCTV camera - Grid X20 - moved back onto Building A east vertical blue line",
    "building": "Building A",
    "location": "Grid X20 - SVG x=1100.0, y=895.0",
    "grid": "X20",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-15 - Building A CCTV camera - Grid X20 - moved back onto Building A east vertical blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-17",
    "type": "cctv",
    "label": "BA-CCTV-20260721-17 - Building A CCTV camera - Grid X21 - moved back onto Building A east vertical blue line",
    "building": "Building A",
    "location": "Grid X21 - SVG x=1100.0, y=875.0",
    "grid": "X21",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-17 - Building A CCTV camera - Grid X21 - moved back onto Building A east vertical blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-18",
    "type": "cctv",
    "label": "BA-CCTV-20260721-18 - Building A CCTV camera - Grid W21 - moved back onto Building A east corner blue line",
    "building": "Building A",
    "location": "Grid W21 - SVG x=1100.0, y=859.0",
    "grid": "W21",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-18 - Building A CCTV camera - Grid W21 - moved back onto Building A east corner blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-19",
    "type": "cctv",
    "label": "BA-CCTV-20260721-19 - Building A CCTV camera - Grid Y19 - moved back onto Building A lower blue line",
    "building": "Building A",
    "location": "Grid Y19 - SVG x=1090.0, y=911.0",
    "grid": "Y19",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-19 - Building A CCTV camera - Grid Y19 - moved back onto Building A lower blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-CCTV-20260721-20",
    "type": "cctv",
    "label": "BA-CCTV-20260721-20 - Building A CCTV camera - Grid Y19 - moved back onto Building A lower blue line",
    "building": "Building A",
    "location": "Grid Y19 - SVG x=1078.0, y=911.0",
    "grid": "Y19",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-CCTV-20260721-20 - Building A CCTV camera - Grid Y19 - moved back onto Building A lower blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-CCTV-06",
    "type": "cctv",
    "label": "BA-N-CCTV-06 - Building A north CCTV added at N12, camera 1 of 2 - Grid N12",
    "building": "Building A",
    "location": "Grid N12 - SVG x=664.0, y=582.0",
    "grid": "N12",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-N-CCTV-06 - Building A north CCTV added at N12, camera 1 of 2 - Grid N12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-CCTV-07",
    "type": "cctv",
    "label": "BA-N-CCTV-07 - Building A north CCTV added at N12, camera 2 of 2 - Grid N12",
    "building": "Building A",
    "location": "Grid N12 - SVG x=678.0, y=582.0",
    "grid": "N12",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-N-CCTV-07 - Building A north CCTV added at N12, camera 2 of 2 - Grid N12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-CCTV-08",
    "type": "cctv",
    "label": "BA-N-CCTV-08 - Building A north CCTV moved onto the M12 blue line - Grid M12",
    "building": "Building A",
    "location": "Grid M12 - SVG x=600.0, y=582.0",
    "grid": "M12",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BA-N-CCTV-08 - Building A north CCTV moved onto the M12 blue line - Grid M12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A1",
    "type": "doors",
    "label": "BA-A1 - Building A door - Grid W12 - new EAD; outside access; middle of W13",
    "building": "Building A",
    "location": "Grid W13 - SVG x=1118.9, y=625.0",
    "grid": "W13",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A1 - Building A door - Grid W12 - new EAD; outside access; middle of W13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A2",
    "type": "doors",
    "label": "BA-A2 - Building A door - Grid W12 - moved to top-left of W13",
    "building": "Building A",
    "location": "Grid W13 - SVG x=1103.0, y=609.0",
    "grid": "W13",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A2 - Building A door - Grid W12 - moved to top-left of W13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A27-PENDING",
    "type": "doors",
    "label": "BA-A27-PENDING - Building A door - Grid TBC - A27 move requested; destination not provided; pending confirmation",
    "building": "Building A",
    "location": "SVG x=591.0, y=792.1",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A27-PENDING - Building A door - Grid TBC - A27 move requested; destination not provided; pending confirmation",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A29",
    "type": "doors",
    "label": "BA-A29 - Building A door - Grid TBC - A29 marked as roller shutter to anodising",
    "building": "Building A",
    "location": "SVG x=656.2, y=851.0",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A29 - Building A door - Grid TBC - A29 marked as roller shutter to anodising",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A30",
    "type": "doors",
    "label": "BA-A30 - Building A door - Grid TBC - A30 marked as EAD; no outside access",
    "building": "Building A",
    "location": "SVG x=672.0, y=853.0",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A30 - Building A door - Grid TBC - A30 marked as EAD; no outside access",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A31-RS",
    "type": "doors",
    "label": "BA-A31-RS - Building A door - Grid N18 - A31 roller shutter door to Press 1; moved to middle of N18",
    "building": "Building A",
    "location": "Grid N18 - SVG x=671.4, y=875.0",
    "grid": "N18",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A31-RS - Building A door - Grid N18 - A31 roller shutter door to Press 1; moved to middle of N18",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A31-SMALL-RS",
    "type": "doors",
    "label": "BA-A31-SMALL-RS - Building A door - Grid M18 - A31 small roller shutter door; vertical line M18",
    "building": "Building A",
    "location": "Grid M18 - SVG x=604.2, y=868.0",
    "grid": "M18",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A31-SMALL-RS - Building A door - Grid M18 - A31 small roller shutter door; vertical line M18",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A33",
    "type": "doors",
    "label": "BA-A33 - Building A door - Grid N18 - A33 roller shutter; Billot loading; middle of horizontal line in N18",
    "building": "Building A",
    "location": "Grid N18 - SVG x=671.4, y=865.0",
    "grid": "N18",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A33 - Building A door - Grid N18 - A33 roller shutter; Billot loading; middle of horizontal line in N18",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A34",
    "type": "doors",
    "label": "BA-A34 - Building A door - Grid Q18 - A34 plant room double doors; EAD; outside access; louvres",
    "building": "Building A",
    "location": "Grid Q18 - SVG x=820.6, y=895.0",
    "grid": "Q18",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A34 - Building A door - Grid Q18 - A34 plant room double doors; EAD; outside access; louvres",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A35",
    "type": "doors",
    "label": "BA-A35 - Building A door - Grid TBC - renamed from existing A32",
    "building": "Building A",
    "location": "SVG x=736.2, y=905.0",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A35 - Building A door - Grid TBC - renamed from existing A32",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A36",
    "type": "doors",
    "label": "BA-A36 - Building A door - Grid TBC - renamed from existing A33",
    "building": "Building A",
    "location": "SVG x=806.8, y=905.0",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A36 - Building A door - Grid TBC - renamed from existing A33",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A37-1",
    "type": "doors",
    "label": "BA-A37-1 - Building A door - Grid TBC - renamed from existing A34",
    "building": "Building A",
    "location": "SVG x=880.4, y=905.0",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A37-1 - Building A door - Grid TBC - renamed from existing A34",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A37-2",
    "type": "doors",
    "label": "BA-A37-2 - Building A door - Grid TBC - renamed from existing A35 per user instruction",
    "building": "Building A",
    "location": "SVG x=954.0, y=905.0",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A37-2 - Building A door - Grid TBC - renamed from existing A35 per user instruction",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A38",
    "type": "doors",
    "label": "BA-A38 - Building A door - Grid TBC - renamed from existing A36",
    "building": "Building A",
    "location": "SVG x=1027.6, y=905.0",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A38 - Building A door - Grid TBC - renamed from existing A36",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A39",
    "type": "doors",
    "label": "BA-A39 - Building A door - Grid W18 - A39 roller shutter door; back of Press 1; middle of W18 vertical line",
    "building": "Building A",
    "location": "Grid W18 - SVG x=1118.9, y=875.0",
    "grid": "W18",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A39 - Building A door - Grid W18 - A39 roller shutter door; back of Press 1; middle of W18 vertical line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-A3E",
    "type": "doors",
    "label": "BA-A3E - Building A door - Grid M18 - A3E EAD; outside access; vertical line M18",
    "building": "Building A",
    "location": "Grid M18 - SVG x=604.2, y=882.0",
    "grid": "M18",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-A3E - Building A door - Grid M18 - A3E EAD; outside access; vertical line M18",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A10-RS",
    "type": "doors",
    "label": "BA-N-A10-RS - Building A north elevation - A10 - A10 roller shutter door - Grid R13",
    "building": "Building A",
    "location": "Grid R13 - SVG x=770.0, y=622.0",
    "grid": "R13",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A10-RS - Building A north elevation - A10 - A10 roller shutter door - Grid R13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A11-D",
    "type": "doors",
    "label": "BA-N-A11-D - Building A north elevation - A11 - A11 door with lever/lever handles - Grid R13",
    "building": "Building A",
    "location": "Grid R13 - SVG x=770.0, y=631.0",
    "grid": "R13",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A11-D - Building A north elevation - A11 - A11 door with lever/lever handles - Grid R13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A12-DD",
    "type": "doors",
    "label": "BA-N-A12-DD - Building A north elevation - A12 - A12 compressor room double doors with louvres; outside access - Grid R13",
    "building": "Building A",
    "location": "Grid R13 - SVG x=770.0, y=640.0",
    "grid": "R13",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A12-DD - Building A north elevation - A12 - A12 compressor room double doors with louvres; outside access - Grid R13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A13-DD",
    "type": "doors",
    "label": "BA-N-A13-DD - Building A north elevation - A13 - A13 compressor room double doors with louvres; outside access - Grid R13",
    "building": "Building A",
    "location": "Grid R13 - SVG x=770.0, y=649.0",
    "grid": "R13",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A13-DD - Building A north elevation - A13 - A13 compressor room double doors with louvres; outside access - Grid R13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A14-EAD",
    "type": "doors",
    "label": "BA-N-A14-EAD - Building A north elevation - A14 - A14 Emergency Access Door; outside access; left-hand corner on line - Grid R13",
    "building": "Building A",
    "location": "Grid R13 - SVG x=770.0, y=604.0",
    "grid": "R13",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A14-EAD - Building A north elevation - A14 - A14 Emergency Access Door; outside access; left-hand corner on line - Grid R13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A15-RS",
    "type": "doors",
    "label": "BA-N-A15-RS - Building A north elevation - A15 - A15 roller shutter to anodising; top of vertical line - Grid R13",
    "building": "Building A",
    "location": "Grid R13 - SVG x=770.0, y=613.0",
    "grid": "R13",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A15-RS - Building A north elevation - A15 - A15 roller shutter to anodising; top of vertical line - Grid R13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A16-EAD",
    "type": "doors",
    "label": "BA-N-A16-EAD - Building A north elevation - A16 - A16 Emergency Access Door; outside access - Grid Q12",
    "building": "Building A",
    "location": "Grid Q12 - SVG x=832.0, y=594.0",
    "grid": "Q12",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A16-EAD - Building A north elevation - A16 - A16 Emergency Access Door; outside access - Grid Q12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A17-RS",
    "type": "doors",
    "label": "BA-N-A17-RS - Building A north elevation - A17 - A17 roller shutter door to anodising; access code 8413 - Grid N12",
    "building": "Building A",
    "location": "Grid N12 - SVG x=671.4, y=582.0",
    "grid": "N12",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A17-RS - Building A north elevation - A17 - A17 roller shutter door to anodising; access code 8413 - Grid N12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A18-RS",
    "type": "doors",
    "label": "BA-N-A18-RS - Building A north elevation - A18 - A18 roller shutter door to anodising - Grid M12",
    "building": "Building A",
    "location": "Grid M12 - SVG x=621.6, y=582.0",
    "grid": "M12",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A18-RS - Building A north elevation - A18 - A18 roller shutter door to anodising - Grid M12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A3-EAD",
    "type": "doors",
    "label": "BA-N-A3-EAD - Building A north elevation - A3 - Emergency Access Door; no outside access - Grid V12",
    "building": "Building A",
    "location": "Grid V12 - SVG x=1069.2, y=582.0",
    "grid": "V12",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A3-EAD - Building A north elevation - A3 - Emergency Access Door; no outside access - Grid V12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A4-RS",
    "type": "doors",
    "label": "BA-N-A4-RS - Building A north elevation - A4 - Roller shutter door; access code 8462 - Grid U12",
    "building": "Building A",
    "location": "Grid U12 - SVG x=1019.5, y=582.0",
    "grid": "U12",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A4-RS - Building A north elevation - A4 - Roller shutter door; access code 8462 - Grid U12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A5-EAD",
    "type": "doors",
    "label": "BA-N-A5-EAD - Building A north elevation - A5 - Emergency Access Door; outside access; louvre door; access to fire escape route - Grid T12",
    "building": "Building A",
    "location": "Grid T12 - SVG x=969.8, y=582.0",
    "grid": "T12",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A5-EAD - Building A north elevation - A5 - Emergency Access Door; outside access; louvre door; access to fire escape route - Grid T12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A6-EAD",
    "type": "doors",
    "label": "BA-N-A6-EAD - Building A north elevation - A6 - Emergency Access Door; no outside access - Grid S12",
    "building": "Building A",
    "location": "Grid S12 - SVG x=920.0, y=582.0",
    "grid": "S12",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A6-EAD - Building A north elevation - A6 - Emergency Access Door; no outside access - Grid S12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A7-EAD",
    "type": "doors",
    "label": "BA-N-A7-EAD - Building A north elevation - A7 - Emergency Access Door; outside access - Grid Q12",
    "building": "Building A",
    "location": "Grid Q12 - SVG x=820.6, y=582.0",
    "grid": "Q12",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A7-EAD - Building A north elevation - A7 - Emergency Access Door; outside access - Grid Q12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A8-EAD",
    "type": "doors",
    "label": "BA-N-A8-EAD - Building A north elevation - A8 - A8 Emergency Access Door; outside access - Grid P12",
    "building": "Building A",
    "location": "Grid P12 - SVG x=804.0, y=602.0",
    "grid": "P12",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A8-EAD - Building A north elevation - A8 - A8 Emergency Access Door; outside access - Grid P12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-A8-RS",
    "type": "doors",
    "label": "BA-N-A8-RS - Building A north elevation - A8-RS - A8 vertical roller shutter door - Grid P12",
    "building": "Building A",
    "location": "Grid P12 - SVG x=804.0, y=590.0",
    "grid": "P12",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-N-A8-RS - Building A north elevation - A8-RS - A8 vertical roller shutter door - Grid P12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-W13-EAD-NOA",
    "type": "doors",
    "label": "BA-W13-EAD-NOA - Building A door - Grid W12 - EAD; no outside access; above keyfob door on line",
    "building": "Building A",
    "location": "Grid W13 - SVG x=1101.5, y=617.0",
    "grid": "W13",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-W13-EAD-NOA - Building A door - Grid W12 - EAD; no outside access; above keyfob door on line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-W13-KEYFOB",
    "type": "doors",
    "label": "BA-W13-KEYFOB - Building A door - Grid W12 - personnel door with keyfob access; above panel door on line",
    "building": "Building A",
    "location": "Grid W13 - SVG x=1101.5, y=633.0",
    "grid": "W13",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-W13-KEYFOB - Building A door - Grid W12 - personnel door with keyfob access; above panel door on line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-W13-PANEL",
    "type": "doors",
    "label": "BA-W13-PANEL - Building A door - Grid W12 - panel door; lever/lever handles; cylinder to be confirmed",
    "building": "Building A",
    "location": "Grid W13 - SVG x=1103.0, y=641.0",
    "grid": "W13",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-W13-PANEL - Building A door - Grid W12 - panel door; lever/lever handles; cylinder to be confirmed",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-W18-JENNIFER",
    "type": "doors",
    "label": "BA-W18-JENNIFER - Building A door - Grid W18 - lever/lever handles; access to Jennifers Office",
    "building": "Building A",
    "location": "Grid W18 - SVG x=1103.0, y=859.0",
    "grid": "W18",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-W18-JENNIFER - Building A door - Grid W18 - lever/lever handles; access to Jennifers Office",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-W18-KEYFOB",
    "type": "doors",
    "label": "BA-W18-KEYFOB - Building A door - Grid W18 - personnel door; keyfob access; slightly below top-left W18",
    "building": "Building A",
    "location": "Grid W18 - SVG x=1103.0, y=871.0",
    "grid": "W18",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-W18-KEYFOB - Building A door - Grid W18 - personnel door; keyfob access; slightly below top-left W18",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-X13-AUTO",
    "type": "doors",
    "label": "BA-X13-AUTO - Building A door - Grid X13 - main office entrance double automatic doors",
    "building": "Building A",
    "location": "Grid X13 - SVG x=1168.7, y=645.0",
    "grid": "X13",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "BA-X13-AUTO - Building A door - Grid X13 - main office entrance double automatic doors",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-1P-EXT-L15",
    "type": "electrical",
    "label": "BA-1P-EXT-L15 - Building A single-phase external connection - Grid L15 approximate",
    "building": "Building A",
    "location": "Grid L15",
    "grid": "L15",
    "quantity": "1",
    "assetGroup": "Electrical",
    "summary": "BA-1P-EXT-L15 - Building A single-phase external connection - Grid L15 approximate",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BUILDING-A-ELECTRICAL-129",
    "type": "other",
    "label": "Electrical charger and cable reel",
    "building": "Building A",
    "location": "West",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Electrical",
    "summary": "Below A25 sign",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-EV-CHARGING-066",
    "type": "ev",
    "label": "EV charging points",
    "building": "Building A",
    "location": "North recessed elevation",
    "grid": "TBC",
    "quantity": "3",
    "assetGroup": "EV charging",
    "summary": "Adjacent to recorded three-door entrance area",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-VENTILATION-076",
    "type": "ev",
    "label": "High-level extraction vents",
    "building": "Building A",
    "location": "East",
    "grid": "TBC",
    "quantity": "3",
    "assetGroup": "Ventilation",
    "summary": "Profiled metal-clad elevation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-WINDOWS-GLAZING-101",
    "type": "ev",
    "label": "Upper-level windows",
    "building": "Building A",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "6",
    "assetGroup": "Windows / glazing",
    "summary": "Each 5 m x 1 m with 3 fixed panes",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BA-L-M17-M13-1",
    "type": "lighting",
    "label": "BA-L-M17-M13-1 - Building A light on same elevation run; evenly spaced on blue line - Grid L17",
    "building": "Building A",
    "location": "Grid L17 - SVG x=591.0, y=825.0",
    "grid": "L17",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-L-M17-M13-1 - Building A light on same elevation run; evenly spaced on blue line - Grid L17",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-L-M17-M13-2",
    "type": "lighting",
    "label": "BA-L-M17-M13-2 - Building A light moved from M16 to L16 blue line; evenly spaced run - Grid L16",
    "building": "Building A",
    "location": "Grid L16 - SVG x=591.0, y=775.0",
    "grid": "L16",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-L-M17-M13-2 - Building A light moved from M16 to L16 blue line; evenly spaced run - Grid L16",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-L-M17-M13-3",
    "type": "lighting",
    "label": "BA-L-M17-M13-3 - Building A light moved from M15 to L15 blue line; evenly spaced run - Grid L15",
    "building": "Building A",
    "location": "Grid L15 - SVG x=591.0, y=725.0",
    "grid": "L15",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-L-M17-M13-3 - Building A light moved from M15 to L15 blue line; evenly spaced run - Grid L15",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-L-M17-M13-4",
    "type": "lighting",
    "label": "BA-L-M17-M13-4 - Building A light moved from M14 to L14 blue line; evenly spaced run - Grid L14",
    "building": "Building A",
    "location": "Grid L14 - SVG x=591.0, y=675.0",
    "grid": "L14",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-L-M17-M13-4 - Building A light moved from M14 to L14 blue line; evenly spaced run - Grid L14",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-L-M17-M13-5",
    "type": "lighting",
    "label": "BA-L-M17-M13-5 - Building A light moved from M13 to L13 blue line; evenly spaced run - Grid L13",
    "building": "Building A",
    "location": "Grid L13 - SVG x=591.0, y=625.0",
    "grid": "L13",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-L-M17-M13-5 - Building A light moved from M13 to L13 blue line; evenly spaced run - Grid L13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-L-M18-TOP-1",
    "type": "lighting",
    "label": "BA-L-M18-TOP-1 - Building A light - Grid M18 - equally spaced top of M18",
    "building": "Building A",
    "location": "Grid M18 - SVG x=614.2, y=856.0",
    "grid": "M18",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-L-M18-TOP-1 - Building A light - Grid M18 - equally spaced top of M18",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-L-M18-TOP-2",
    "type": "lighting",
    "label": "BA-L-M18-TOP-2 - Building A light - Grid M18 - equally spaced top of M18",
    "building": "Building A",
    "location": "Grid M18 - SVG x=629.1, y=856.0",
    "grid": "M18",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-L-M18-TOP-2 - Building A light - Grid M18 - equally spaced top of M18",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-L-N18-BR",
    "type": "lighting",
    "label": "BA-L-N18-BR - Building A light - Grid N18 - bottom-right of N18; marked as part of last four",
    "building": "Building A",
    "location": "Grid N18 - SVG x=687.3, y=891.0",
    "grid": "N18",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-L-N18-BR - Building A light - Grid N18 - bottom-right of N18; marked as part of last four",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-L-N18-TM",
    "type": "lighting",
    "label": "BA-L-N18-TM - Building A light - Grid N18 - top-middle of N18",
    "building": "Building A",
    "location": "Grid N18 - SVG x=671.4, y=857.5",
    "grid": "N18",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-L-N18-TM - Building A light - Grid N18 - top-middle of N18",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-L-N18-V",
    "type": "lighting",
    "label": "BA-L-N18-V - Building A light - Grid N18 - middle of N18 vertical line",
    "building": "Building A",
    "location": "Grid N18 - SVG x=671.4, y=875.0",
    "grid": "N18",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-L-N18-V - Building A light - Grid N18 - middle of N18 vertical line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-L-W13-V",
    "type": "lighting",
    "label": "BA-L-W13-V - Building A light - Grid W13 - moved onto Building A blue line",
    "building": "Building A",
    "location": "Grid W13 - SVG x=1099.0, y=625.0",
    "grid": "W13",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-L-W13-V - Building A light - Grid W13 - moved onto Building A blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-L-W18-V",
    "type": "lighting",
    "label": "BA-L-W18-V - Building A light - Grid W18 - middle of W18 vertical line",
    "building": "Building A",
    "location": "Grid W18 - SVG x=1118.9, y=875.0",
    "grid": "W18",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-L-W18-V - Building A light - Grid W18 - middle of W18 vertical line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-L-01",
    "type": "lighting",
    "label": "BA-N-L-01 - Building A north elevation LED external light - M12-O12 north horizontal run - Grid M12",
    "building": "Building A",
    "location": "Grid M12 - SVG x=596.8, y=582.0",
    "grid": "M12",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-N-L-01 - Building A north elevation LED external light - M12-O12 north horizontal run - Grid M12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-L-02",
    "type": "lighting",
    "label": "BA-N-L-02 - Building A north elevation LED external light - M12-O12 north horizontal run - Grid M12",
    "building": "Building A",
    "location": "Grid M12 - SVG x=634.1, y=582.0",
    "grid": "M12",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-N-L-02 - Building A north elevation LED external light - M12-O12 north horizontal run - Grid M12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-L-03",
    "type": "lighting",
    "label": "BA-N-L-03 - Building A north elevation LED external light - M12-O12 north horizontal run - Grid N12",
    "building": "Building A",
    "location": "Grid N12 - SVG x=671.4, y=582.0",
    "grid": "N12",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-N-L-03 - Building A north elevation LED external light - M12-O12 north horizontal run - Grid N12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-L-04",
    "type": "lighting",
    "label": "BA-N-L-04 - Building A north elevation LED external light - M12-O12 north horizontal run - Grid O12",
    "building": "Building A",
    "location": "Grid O12 - SVG x=708.7, y=582.0",
    "grid": "O12",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-N-L-04 - Building A north elevation LED external light - M12-O12 north horizontal run - Grid O12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-L-05",
    "type": "lighting",
    "label": "BA-N-L-05 - Building A north elevation LED external light - M12-O12 north horizontal run - Grid P12",
    "building": "Building A",
    "location": "Grid P12 - SVG x=746.0, y=582.0",
    "grid": "P12",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-N-L-05 - Building A north elevation LED external light - M12-O12 north horizontal run - Grid P12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-L-06",
    "type": "lighting",
    "label": "BA-N-L-06 - Building A north elevation LED external light - P13 left vertical line - Grid O13",
    "building": "Building A",
    "location": "Grid O13 - SVG x=746.0, y=625.0",
    "grid": "O13",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-N-L-06 - Building A north elevation LED external light - P13 left vertical line - Grid O13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-L-07",
    "type": "lighting",
    "label": "BA-N-L-07 - Building A north elevation LED external light - P13 right vertical line upper - Grid Q13",
    "building": "Building A",
    "location": "Grid Q13 - SVG x=795.7, y=616.0",
    "grid": "Q13",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-N-L-07 - Building A north elevation LED external light - P13 right vertical line upper - Grid Q13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-L-08",
    "type": "lighting",
    "label": "BA-N-L-08 - Building A north elevation LED external light - nudged upward onto P13/Q13 vertical blue line - Grid Q13",
    "building": "Building A",
    "location": "Grid Q13 - SVG x=795.7, y=628.0",
    "grid": "Q13",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-N-L-08 - Building A north elevation LED external light - nudged upward onto P13/Q13 vertical blue line - Grid Q13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-L-09",
    "type": "lighting",
    "label": "BA-N-L-09 - Building A north elevation LED external light - Q12-V12 north horizontal run - Grid Q12",
    "building": "Building A",
    "location": "Grid Q12 - SVG x=795.7, y=582.0",
    "grid": "Q12",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-N-L-09 - Building A north elevation LED external light - Q12-V12 north horizontal run - Grid Q12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-L-10",
    "type": "lighting",
    "label": "BA-N-L-10 - Building A north elevation LED external light - Q12-V12 north horizontal run - Grid R12",
    "building": "Building A",
    "location": "Grid R12 - SVG x=870.3, y=582.0",
    "grid": "R12",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-N-L-10 - Building A north elevation LED external light - Q12-V12 north horizontal run - Grid R12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-L-11",
    "type": "lighting",
    "label": "BA-N-L-11 - Building A north elevation LED external light - Q12-V12 north horizontal run - Grid T12",
    "building": "Building A",
    "location": "Grid T12 - SVG x=944.9, y=582.0",
    "grid": "T12",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-N-L-11 - Building A north elevation LED external light - Q12-V12 north horizontal run - Grid T12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-L-12",
    "type": "lighting",
    "label": "BA-N-L-12 - Building A north elevation LED external light - Q12-V12 north horizontal run - Grid U12",
    "building": "Building A",
    "location": "Grid U12 - SVG x=1019.5, y=582.0",
    "grid": "U12",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-N-L-12 - Building A north elevation LED external light - Q12-V12 north horizontal run - Grid U12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-L-13",
    "type": "lighting",
    "label": "BA-N-L-13 - Building A north elevation LED external light - Q12-V12 north horizontal run - Grid V12",
    "building": "Building A",
    "location": "Grid V12 - SVG x=1094.1, y=582.0",
    "grid": "V12",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-N-L-13 - Building A north elevation LED external light - Q12-V12 north horizontal run - Grid V12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-OLD-WALL-S19",
    "type": "lighting",
    "label": "BA-OLD-WALL-S19 - Building A light - Grid S19 - older non-LED wall-mounted light",
    "building": "Building A",
    "location": "Grid S19 - SVG x=904.1, y=909.0",
    "grid": "S19",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-OLD-WALL-S19 - Building A light - Grid S19 - older non-LED wall-mounted light",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-OLD-WALL-T19",
    "type": "lighting",
    "label": "BA-OLD-WALL-T19 - Building A light - Grid T19 - older non-LED wall-mounted light",
    "building": "Building A",
    "location": "Grid T19 - SVG x=953.8, y=909.0",
    "grid": "T19",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-OLD-WALL-T19 - Building A light - Grid T19 - older non-LED wall-mounted light",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-OLD-WALL-U19",
    "type": "lighting",
    "label": "BA-OLD-WALL-U19 - Building A light - Grid U19 - older non-LED wall-mounted light",
    "building": "Building A",
    "location": "Grid U19 - SVG x=1003.6, y=909.0",
    "grid": "U19",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-OLD-WALL-U19 - Building A light - Grid U19 - older non-LED wall-mounted light",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-OLD-WALL-V19",
    "type": "lighting",
    "label": "BA-OLD-WALL-V19 - Building A light - Grid V19 - older non-LED wall-mounted light",
    "building": "Building A",
    "location": "Grid V19 - SVG x=1053.3, y=909.0",
    "grid": "V19",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-OLD-WALL-V19 - Building A light - Grid V19 - older non-LED wall-mounted light",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-OLD-WALL-X20",
    "type": "lighting",
    "label": "BA-OLD-WALL-X20 - Building A old type wall mounted light restored to Grid X20",
    "building": "Building A",
    "location": "Grid X20 - SVG x=1168.7, y=975.0",
    "grid": "X20",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-OLD-WALL-X20 - Building A old type wall mounted light restored to Grid X20",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-OLD-WALL-Y20",
    "type": "lighting",
    "label": "BA-OLD-WALL-Y20 - Building A old type wall mounted light restored to Grid Y20",
    "building": "Building A",
    "location": "Grid Y20 - SVG x=1218.9, y=975.0",
    "grid": "Y20",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BA-OLD-WALL-Y20 - Building A old type wall mounted light restored to Grid Y20",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BUILDING-A-BILLET-ALLOY-130",
    "type": "other",
    "label": "Aluminium billet rows/bundles",
    "building": "Building A",
    "location": "West",
    "grid": "TBC",
    "quantity": "6",
    "assetGroup": "Billet / alloy",
    "summary": "Stored end-to-end; alloy photos recorded",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-CANOPY-STRUCTURE-067",
    "type": "other",
    "label": "Entrance canopy",
    "building": "Building A",
    "location": "East",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Canopy / structure",
    "summary": "Includes 11 recessed lights",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-CHEMICAL-PROCESS-096",
    "type": "other",
    "label": "Caustic tanks",
    "building": "Building A",
    "location": "South west-facing recess",
    "grid": "TBC",
    "quantity": "TBC",
    "assetGroup": "Chemical / process",
    "summary": "South west-facing recess",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-CHEMICAL-PROCESS-124",
    "type": "other",
    "label": "Caustic station",
    "building": "Building A",
    "location": "West",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Chemical / process",
    "summary": "West elevation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-DRAINAGE-071",
    "type": "other",
    "label": "Linear threshold drainage",
    "building": "Building A",
    "location": "East",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Drainage",
    "summary": "At glazed access door approach",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-EMERGENCY-SAFETY-097",
    "type": "other",
    "label": "Emergency wash station",
    "building": "Building A",
    "location": "South west-facing recess",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Emergency safety",
    "summary": "South west-facing recess",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-EMERGENCY-SAFETY-123",
    "type": "other",
    "label": "Eyewash station",
    "building": "Building A",
    "location": "West",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Emergency safety",
    "summary": "West elevation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-EMISSIONS-087",
    "type": "other",
    "label": "Air-emission monitoring point A2-1",
    "building": "Building A",
    "location": "South west-facing recess",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Emissions",
    "summary": "Extrusion scrubber area",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-EMISSIONS-131",
    "type": "other",
    "label": "Air Emission Monitoring Point - Anodising Boiler A1-1",
    "building": "Building A",
    "location": "West",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Emissions",
    "summary": "Fixed caged access ladder",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-FUEL-STORAGE-128",
    "type": "other",
    "label": "External fuel tank",
    "building": "Building A",
    "location": "West",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Fuel storage",
    "summary": "TransCube P24026",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-GAS-CHEMICAL-095",
    "type": "other",
    "label": "Ammonia and CO2 compound",
    "building": "Building A",
    "location": "South west-facing recess",
    "grid": "TBC",
    "quantity": "1 compound",
    "assetGroup": "Gas / chemical",
    "summary": "South west-facing recess",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-GAS-PROCESS-114",
    "type": "other",
    "label": "Liquid nitrogen tank",
    "building": "Building A",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Gas / process",
    "summary": "South main section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-GROUNDS-063",
    "type": "other",
    "label": "Grass verge",
    "building": "Building A",
    "location": "North",
    "grid": "TBC",
    "quantity": "2 m wide, full length",
    "assetGroup": "Grounds",
    "summary": "Approx. 7 m north of elevation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-GROUNDS-103",
    "type": "other",
    "label": "Grass verge",
    "building": "Building A",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "60 m x 3 m",
    "assetGroup": "Grounds",
    "summary": "180 m2",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-OFFICE-EQUIPMENT-080",
    "type": "other",
    "label": "Yard Manager office",
    "building": "Building A",
    "location": "South eastern recess",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Office / equipment",
    "summary": "In front of A26 area",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-PLANT-STRUCTURE-117",
    "type": "other",
    "label": "WCT service shed",
    "building": "Building A",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Plant / structure",
    "summary": "By WCT-ET026",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-PROCESS-EMISSIONS-086",
    "type": "other",
    "label": "Extrusion scrubber",
    "building": "Building A",
    "location": "South west-facing recess",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Process / emissions",
    "summary": "West-facing recess",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-PROCESS-TANK-116",
    "type": "other",
    "label": "WCT holding tank WCT-ET026",
    "building": "Building A",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Process / tank",
    "summary": "With service shed",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-SCRAP-STORAGE-079",
    "type": "other",
    "label": "Scrap bins near A26",
    "building": "Building A",
    "location": "South eastern recess",
    "grid": "TBC",
    "quantity": "TBC",
    "assetGroup": "Scrap / storage",
    "summary": "Near Yard Manager office/platform scales",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-STORAGE-098",
    "type": "other",
    "label": "IBC storage units",
    "building": "Building A",
    "location": "South west-facing recess",
    "grid": "TBC",
    "quantity": "2",
    "assetGroup": "Storage",
    "summary": "South west-facing recess",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-TEMPORARY-PLANT-127",
    "type": "other",
    "label": "Temporary/rental generator",
    "building": "Building A",
    "location": "West",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Temporary plant",
    "summary": "MW Hire / Instant Power asset P24779",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-VENTILATION-077",
    "type": "other",
    "label": "Ventilation louvres",
    "building": "Building A",
    "location": "East",
    "grid": "TBC",
    "quantity": "6",
    "assetGroup": "Ventilation",
    "summary": "Three upper, three above lower window",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-VENTILATION-112",
    "type": "other",
    "label": "External extractor fan",
    "building": "Building A",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Ventilation",
    "summary": "South main section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-WASTE-CHEMICAL-094",
    "type": "other",
    "label": "Waste aerosol/solvent station",
    "building": "Building A",
    "location": "South west-facing recess",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Waste / chemical",
    "summary": "South west-facing recess",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-WASTE-STORAGE-115",
    "type": "other",
    "label": "Waste billet bin",
    "building": "Building A",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Waste / storage",
    "summary": "South main section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-WEIGHING-EQUIPMENT-081",
    "type": "other",
    "label": "Platform weighing scales",
    "building": "Building A",
    "location": "South eastern recess",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Weighing equipment",
    "summary": "In front of A26",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-WELFARE-EXTERNAL-ASSET-064",
    "type": "other",
    "label": "Smoking shelter",
    "building": "Building A",
    "location": "North",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Welfare / external asset",
    "summary": "North elevation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-WINDOWS-GLAZING-072",
    "type": "other",
    "label": "Two-panel lower window assembly",
    "building": "Building A",
    "location": "East",
    "grid": "TBC",
    "quantity": "2 glazed sections",
    "assetGroup": "Windows / glazing",
    "summary": "Opaque lower panels also recorded",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-WINDOWS-GLAZING-073",
    "type": "other",
    "label": "Upper circular glazed window",
    "building": "Building A",
    "location": "East",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Windows / glazing",
    "summary": "Upper-level circular window",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-WINDOWS-GLAZING-102",
    "type": "other",
    "label": "Fixed panes",
    "building": "Building A",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "18",
    "assetGroup": "Windows / glazing",
    "summary": "In 6 upper-level windows",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BA-N-RC-01",
    "type": "rodent",
    "label": "BA-N-RC-01 - Building A north elevation rodent control station 1 - top of V12, Building A north elevation - Grid V12",
    "building": "Building A",
    "location": "Grid V12 - SVG x=1069.2, y=556.0",
    "grid": "V12",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "BA-N-RC-01 - Building A north elevation rodent control station 1 - top of V12, Building A north elevation - Grid V12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-RC-02",
    "type": "rodent",
    "label": "BA-N-RC-02 - Building A north elevation rodent control station 2 - top of S12, Building A north elevation - Grid S12",
    "building": "Building A",
    "location": "Grid S12 - SVG x=920.0, y=556.0",
    "grid": "S12",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "BA-N-RC-02 - Building A north elevation rodent control station 2 - top of S12, Building A north elevation - Grid S12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-N-RC-03",
    "type": "rodent",
    "label": "BA-N-RC-03 - Building A north elevation rodent control station 3 - top of Q12, Building A north elevation - Grid Q12",
    "building": "Building A",
    "location": "Grid Q12 - SVG x=820.6, y=556.0",
    "grid": "Q12",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "BA-N-RC-03 - Building A north elevation rodent control station 3 - top of Q12, Building A north elevation - Grid Q12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BA-RC-66-O18",
    "type": "rodent",
    "label": "BA-RC-66-O18 - Building A rodent-control station 66 - Grid O18 - station 66 on vertical O18",
    "building": "Building A",
    "location": "Grid O18 - SVG x=721.1, y=875.0",
    "grid": "O18",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "BA-RC-66-O18 - Building A rodent-control station 66 - Grid O18 - station 66 on vertical O18",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BUILDING-A-WINTER-SAFETY-055",
    "type": "salt",
    "label": "Salt bin",
    "building": "Building A",
    "location": "North",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Winter / safety",
    "summary": "Beneath Door A8 identification sign",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-WINTER-SAFETY-229",
    "type": "salt",
    "label": "Salt bin SB-A-LCP-01",
    "building": "Building A",
    "location": "Lower car park steps - Grid Z15",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Winter / safety",
    "summary": "Near the steps to the lower car park; Grid Z15; SVG x=1268.135 y=725.000",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "SB-W12-01",
    "type": "salt",
    "label": "SB-W12-01 - Salt Bin - bottom of Grid W12 - outside personnel door to offices",
    "building": "Building A",
    "location": "Grid W12 - SVG x=1118.942, y=594.000",
    "grid": "W12",
    "quantity": "1",
    "assetGroup": "Salt",
    "summary": "SB-W12-01 - Salt Bin - bottom of Grid W12 - outside personnel door to offices",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BUILDING-A-RAINWATER-061",
    "type": "water",
    "label": "External gutter",
    "building": "Building A",
    "location": "North",
    "grid": "TBC",
    "quantity": "Full 99 m section",
    "assetGroup": "Rainwater",
    "summary": "North straight section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-RAINWATER-062",
    "type": "water",
    "label": "Downpipes",
    "building": "Building A",
    "location": "North",
    "grid": "TBC",
    "quantity": "5",
    "assetGroup": "Rainwater",
    "summary": "North straight section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-RAINWATER-089",
    "type": "water",
    "label": "Gutter at A29",
    "building": "Building A",
    "location": "South west-facing recess",
    "grid": "TBC",
    "quantity": "3.5 m",
    "assetGroup": "Rainwater",
    "summary": "South west-facing recess",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-RAINWATER-090",
    "type": "water",
    "label": "Downpipe at A29",
    "building": "Building A",
    "location": "South west-facing recess",
    "grid": "TBC",
    "quantity": "3 m",
    "assetGroup": "Rainwater",
    "summary": "South west-facing recess",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-RAINWATER-099",
    "type": "water",
    "label": "External gutter",
    "building": "Building A",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "133 m",
    "assetGroup": "Rainwater",
    "summary": "Continuous full-length gutter",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-RAINWATER-100",
    "type": "water",
    "label": "Downpipes",
    "building": "Building A",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "9",
    "assetGroup": "Rainwater",
    "summary": "South main section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-RAINWATER-STORAGE-113",
    "type": "water",
    "label": "Rainwater retention/harvesting tanks",
    "building": "Building A",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "5",
    "assetGroup": "Rainwater / storage",
    "summary": "RWH-ST01-RWH-ST05",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-RAINWATER-STORAGE-122",
    "type": "water",
    "label": "Rainwater-retaining tanks",
    "building": "Building A",
    "location": "West",
    "grid": "TBC",
    "quantity": "4 TBC",
    "assetGroup": "Rainwater / storage",
    "summary": "Quantity subject to confirmation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-A-UNIDENTIFIED-ASSET-125",
    "type": "water",
    "label": "Possible water cooler / unidentified unit",
    "building": "Building A",
    "location": "West",
    "grid": "TBC",
    "quantity": "1 TBC",
    "assetGroup": "Unidentified asset",
    "summary": "Identification outstanding",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-BICYCLE-STORAGE-145",
    "type": "bike",
    "label": "Bike shed",
    "building": "Building BCD",
    "location": "South 14 m east-facing return",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Bicycle storage",
    "summary": "Beside e-bike charger/fire extinguisher area",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-ELECTRICAL-CHARGING-146",
    "type": "bike",
    "label": "Electric-bike charger",
    "building": "Building BCD",
    "location": "South 14 m east-facing return",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Electrical charging",
    "summary": "Beside bike shed",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "CP-BA-X12-VIS-01",
    "type": "carparks",
    "label": "Building A / visitor parking at right-hand middle of Grid X12, spaces TBC including 3 EV",
    "building": "Building BCD",
    "location": "Grid X12",
    "grid": "X12",
    "quantity": "1",
    "assetGroup": "Car Parks",
    "summary": "Building A / visitor parking at right-hand middle of Grid X12, spaces TBC including 3 EV",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "CP-BCD-V21-01",
    "type": "carparks",
    "label": "Building BCD car park at middle of Grid V21, 111 spaces including 4 EV charging and 1 disabled",
    "building": "Building BCD",
    "location": "Grid V21",
    "grid": "V21",
    "quantity": "1",
    "assetGroup": "Car Parks",
    "summary": "Building BCD car park at middle of Grid V21, 111 spaces including 4 EV charging and 1 disabled",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "CP-LOWER-Z12-01",
    "type": "carparks",
    "label": "Lower car park at top of Grid Z12, 16 shared spaces",
    "building": "Building BCD",
    "location": "Grid Z12",
    "grid": "Z12",
    "quantity": "1",
    "assetGroup": "Car Parks",
    "summary": "Lower car park at top of Grid Z12, 16 shared spaces",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "CP-OFFICE-Y15-01",
    "type": "carparks",
    "label": "Office parking at bottom-left of Grid Y15, 10 spaces including 1 disabled",
    "building": "Building BCD",
    "location": "Grid Y15",
    "grid": "Y15",
    "quantity": "1",
    "assetGroup": "Car Parks",
    "summary": "Office parking at bottom-left of Grid Y15, 10 spaces including 1 disabled",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-CCTV-J19",
    "type": "cctv",
    "label": "BCD CCTV - J19 on BCD blue line",
    "building": "Building BCD",
    "location": "Grid J19 - SVG x=472.4, y=933.0",
    "grid": "J19",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BCD CCTV - J19 on BCD blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-CCTV-L19",
    "type": "cctv",
    "label": "BCD CCTV - L19 on BCD blue line",
    "building": "Building BCD",
    "location": "Grid L19 - SVG x=572.0, y=933.0",
    "grid": "L19",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "BCD CCTV - L19 on BCD blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BUILDING-BCD-CLEANING-MAINTENANCE-174",
    "type": "ev",
    "label": "Full elevation cleaning area",
    "building": "Building BCD",
    "location": "North 103 m section",
    "grid": "TBC",
    "quantity": "103 m x 10 m",
    "assetGroup": "Cleaning / maintenance",
    "summary": "Biological growth/dirt/staining",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-EV-CHARGING-166",
    "type": "ev",
    "label": "EV charger EV-BCD-BCCE-01",
    "building": "Building BCD",
    "location": "BCC East elevation - Grid U20",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "EV charging",
    "summary": "Restored BCCE / BCC East EV charger; SVG x=1040 y=956; approximate position near lower end of BCC East blue outline",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-WINDOWS-GLAZING-172",
    "type": "ev",
    "label": "Fixed high-level windows",
    "building": "Building BCD",
    "location": "North 103 m section",
    "grid": "TBC",
    "quantity": "11",
    "assetGroup": "Windows / glazing",
    "summary": "Western side",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-WINDOWS-GLAZING-176",
    "type": "ev",
    "label": "Fixed high-level windows",
    "building": "Building BCD",
    "location": "West-facing return 5 m",
    "grid": "TBC",
    "quantity": "2",
    "assetGroup": "Windows / glazing",
    "summary": "West-facing return",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-WINDOWS-GLAZING-213",
    "type": "ev",
    "label": "High-level translucent panels",
    "building": "Building BCD",
    "location": "Final east-facing Fabrication section",
    "grid": "TBC",
    "quantity": "TBC",
    "assetGroup": "Windows / glazing",
    "summary": "Fabrication section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "EV-BCD-BCCE-01",
    "type": "ev",
    "label": "EV-BCD-BCCE-01 - Building BCD BCCE / BCC East EV charger restored",
    "building": "Building BCD",
    "location": "Grid U20 - SVG x=1040, y=956",
    "grid": "U20",
    "quantity": "1",
    "assetGroup": "EV",
    "summary": "EV-BCD-BCCE-01 - Building BCD BCCE / BCC East EV charger restored",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BUILDING-BCD-FIRE-SAFETY-147",
    "type": "fire",
    "label": "Fire extinguisher",
    "building": "Building BCD",
    "location": "South 14 m east-facing return",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Fire safety",
    "summary": "Beside bike shed/e-bike charger area",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BCD-L-J19-BR",
    "type": "lighting",
    "label": "BCD-L-J19-BR - BCD light - J19 moved up onto BCD blue line",
    "building": "Building BCD",
    "location": "Grid J19 - SVG x=497.3, y=933.0",
    "grid": "J19",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BCD-L-J19-BR - BCD light - J19 moved up onto BCD blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-L-J19-CORNER",
    "type": "lighting",
    "label": "BCD-L-J19-CORNER - BCD light - bottom of J19 corner of lines - Grid J19",
    "building": "Building BCD",
    "location": "Grid J19 - SVG x=447.6, y=950.0",
    "grid": "J19",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BCD-L-J19-CORNER - BCD light - bottom of J19 corner of lines - Grid J19",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-L-M20-V1",
    "type": "lighting",
    "label": "BCD-L-M20-V1 - BCD light - vertical line at M20 - 1 of 2; M29 interpreted as M20 - Grid M20",
    "building": "Building BCD",
    "location": "Grid M20 - SVG x=596.8, y=966.0",
    "grid": "M20",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BCD-L-M20-V1 - BCD light - vertical line at M20 - 1 of 2; M29 interpreted as M20 - Grid M20",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-L-M20-V2",
    "type": "lighting",
    "label": "BCD-L-M20-V2 - BCD light - vertical line at M20 - 2 of 2; M29 interpreted as M20 - Grid M20",
    "building": "Building BCD",
    "location": "Grid M20 - SVG x=596.8, y=984.0",
    "grid": "M20",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BCD-L-M20-V2 - BCD light - vertical line at M20 - 2 of 2; M29 interpreted as M20 - Grid M20",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-L-N20-H",
    "type": "lighting",
    "label": "BCD-L-N20-H - BCD light - horizontal line at N20 - Grid N20",
    "building": "Building BCD",
    "location": "Grid N20 - SVG x=671.4, y=950.0",
    "grid": "N20",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BCD-L-N20-H - BCD light - horizontal line at N20 - Grid N20",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-L-N20-V",
    "type": "lighting",
    "label": "BCD-L-N20-V - BCD light - vertical line at N20 - Grid N20",
    "building": "Building BCD",
    "location": "Grid N20 - SVG x=646.5, y=975.0",
    "grid": "N20",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BCD-L-N20-V - BCD light - vertical line at N20 - Grid N20",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-L-O20",
    "type": "lighting",
    "label": "BCD-L-O20 - BCD light - O20 - Grid O20",
    "building": "Building BCD",
    "location": "Grid O20 - SVG x=721.1, y=975.0",
    "grid": "O20",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BCD-L-O20 - BCD light - O20 - Grid O20",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-L-S21-V",
    "type": "lighting",
    "label": "BCD-L-S21-V - BCD light - S21 nudged right onto vertical blue line",
    "building": "Building BCD",
    "location": "Grid S21 - SVG x=922.0, y=1025.0",
    "grid": "S21",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BCD-L-S21-V - BCD light - S21 nudged right onto vertical blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-L-S22-MID",
    "type": "lighting",
    "label": "BCD-L-S22-MID - BCD light - S22 midway - Grid S22",
    "building": "Building BCD",
    "location": "Grid S22 - SVG x=920.0, y=1075.0",
    "grid": "S22",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BCD-L-S22-MID - BCD light - S22 midway - Grid S22",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-L-U20",
    "type": "lighting",
    "label": "BCD-L-U20 - BCD light - middle of U20 - Grid U20",
    "building": "Building BCD",
    "location": "Grid U20 - SVG x=1019.5, y=975.0",
    "grid": "U20",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "BCD-L-U20 - BCD light - middle of U20 - Grid U20",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BUILDING-BCD-BILLET-ALLOY-183",
    "type": "other",
    "label": "Billet storage",
    "building": "Building BCD",
    "location": "West-facing return 8.5 m",
    "grid": "TBC",
    "quantity": "1 area",
    "assetGroup": "Billet / alloy",
    "summary": "Alloy to be determined",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-BILLET-ALLOY-227",
    "type": "other",
    "label": "Additional billet storage",
    "building": "Building BCD",
    "location": "BCD external storage/scrap area",
    "grid": "TBC",
    "quantity": "TBC",
    "assetGroup": "Billet / alloy",
    "summary": "Do not merge with five alcove piles",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-BILLET-STORAGE-214",
    "type": "other",
    "label": "External billet/profile storage",
    "building": "Building BCD",
    "location": "Final east-facing Fabrication section",
    "grid": "TBC",
    "quantity": "1 area",
    "assetGroup": "Billet / storage",
    "summary": "Fabrication section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-CLEANING-MAINTENANCE-181",
    "type": "other",
    "label": "Cleaning area",
    "building": "Building BCD",
    "location": "North-facing 12.5 m section",
    "grid": "TBC",
    "quantity": "1 section",
    "assetGroup": "Cleaning / maintenance",
    "summary": "Cleaning required",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-COMPRESSED-AIR-205",
    "type": "other",
    "label": "CA-R08 compressed-air tank",
    "building": "Building BCD",
    "location": "Alcove north / compressor rooms",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Compressed air",
    "summary": "Compressor-room section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-GROUNDS-PROJECT-148",
    "type": "other",
    "label": "Grass area / garden opportunity",
    "building": "Building BCD",
    "location": "South 14 m east-facing return",
    "grid": "TBC",
    "quantity": "1 area",
    "assetGroup": "Grounds / project",
    "summary": "Beside bike shed/e-bike charger",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-HVAC-206",
    "type": "other",
    "label": "Daikin condenser units",
    "building": "Building BCD",
    "location": "Alcove north / compressor rooms",
    "grid": "TBC",
    "quantity": "4",
    "assetGroup": "HVAC",
    "summary": "Service labels indicated service due August 2025",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-PEST-CONTROL-173",
    "type": "other",
    "label": "Pest points 56 and 57",
    "building": "Building BCD",
    "location": "North 103 m section",
    "grid": "TBC",
    "quantity": "2",
    "assetGroup": "Pest control",
    "summary": "One damaged/open station also recorded",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-PEST-CONTROL-180",
    "type": "other",
    "label": "Pest point 58",
    "building": "Building BCD",
    "location": "North-facing 12.5 m section",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Pest control",
    "summary": "North-facing section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-PEST-CONTROL-187",
    "type": "other",
    "label": "Pest point 59",
    "building": "Building BCD",
    "location": "Press 2 billet-loading alcove - south",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Pest control",
    "summary": "South alcove",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-PEST-CONTROL-196",
    "type": "other",
    "label": "Pest point 60",
    "building": "Building BCD",
    "location": "Press 2/Fabrication alcove - west",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Pest control",
    "summary": "West alcove",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-PEST-CONTROL-208",
    "type": "other",
    "label": "Pest point 61",
    "building": "Building BCD",
    "location": "Alcove north / compressor rooms",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Pest control",
    "summary": "Compressor-room section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-PEST-CONTROL-212",
    "type": "other",
    "label": "Pest point 63",
    "building": "Building BCD",
    "location": "Final east-facing Fabrication section",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Pest control",
    "summary": "Fabrication section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-PEST-CONTROL-225",
    "type": "other",
    "label": "Pest point 64",
    "building": "Building BCD",
    "location": "Final north section",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Pest control",
    "summary": "Final north section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-PEST-CONTROL-226",
    "type": "other",
    "label": "Pest point 62",
    "building": "Building BCD",
    "location": "Unreconciled BCD pest record",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Pest control",
    "summary": "Exact location not yet reconciled",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-SAFETY-ENCLOSURE-164",
    "type": "other",
    "label": "Fenced-off rear of Extrusion 3",
    "building": "Building BCD",
    "location": "BCC East elevation",
    "grid": "TBC",
    "quantity": "1 area",
    "assetGroup": "Safety / enclosure",
    "summary": "At B1 roller door area",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-VENTILATION-141",
    "type": "other",
    "label": "Extractor fans",
    "building": "Building BCD",
    "location": "South 14 m east-facing return",
    "grid": "TBC",
    "quantity": "2",
    "assetGroup": "Ventilation",
    "summary": "South 14 m return",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-WASTE-RECYCLING-224",
    "type": "other",
    "label": "Waste/recycling bins",
    "building": "Building BCD",
    "location": "Final north section",
    "grid": "TBC",
    "quantity": "TBC",
    "assetGroup": "Waste / recycling",
    "summary": "Outside D5/final north section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-WASTE-STORAGE-184",
    "type": "other",
    "label": "Scrap binding/banding containers",
    "building": "Building BCD",
    "location": "West-facing return 8.5 m",
    "grid": "TBC",
    "quantity": "TBC",
    "assetGroup": "Waste / storage",
    "summary": "West-facing return",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-WASTE-STORAGE-228",
    "type": "other",
    "label": "Damaged roll-in box",
    "building": "Building BCD",
    "location": "BCD survey photo/source record",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Waste / storage",
    "summary": "Exact elevation/asset identifier TBC",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-WELFARE-EXTERNAL-ASSET-223",
    "type": "other",
    "label": "Smoking shelter",
    "building": "Building BCD",
    "location": "Final north section",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Welfare / external asset",
    "summary": "Outside D5",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-WINDOWS-GLAZING-136",
    "type": "other",
    "label": "Thermally broken windows",
    "building": "Building BCD",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "2",
    "assetGroup": "Windows / glazing",
    "summary": "Each 2 m x 5 m with top opening",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-WINDOWS-GLAZING-143",
    "type": "other",
    "label": "Matching window",
    "building": "Building BCD",
    "location": "South 14 m east-facing return",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Windows / glazing",
    "summary": "South 14 m return",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-WINDOWS-GLAZING-154",
    "type": "other",
    "label": "Thermally broken glazing",
    "building": "Building BCD",
    "location": "South 25 m section",
    "grid": "TBC",
    "quantity": "1 section",
    "assetGroup": "Windows / glazing",
    "summary": "South 25 m section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-WINDOWS-GLAZING-159",
    "type": "other",
    "label": "Distinct thermally broken glazing design",
    "building": "Building BCD",
    "location": "South 34 m east-facing return",
    "grid": "TBC",
    "quantity": "1 section",
    "assetGroup": "Windows / glazing",
    "summary": "South 34 m return",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BCD-RC-50",
    "type": "rodent",
    "label": "Building BCD rodent control station 50 - Q23 vertical (Q23)",
    "building": "Building BCD",
    "location": "Grid Q23 - SVG x=820.6, y=1125.0",
    "grid": "Q23",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "Building BCD rodent control station 50 - Q23 vertical (Q23)",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-RC-51",
    "type": "rodent",
    "label": "Building BCD rodent control station 51 - bottom of R22 (R22)",
    "building": "Building BCD",
    "location": "Grid R22 - SVG x=870.3, y=1100.0",
    "grid": "R22",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "Building BCD rodent control station 51 - bottom of R22 (R22)",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-RC-52",
    "type": "rodent",
    "label": "Building BCD rodent control station 52 - bottom of S22 (S22)",
    "building": "Building BCD",
    "location": "Grid S22 - SVG x=920.0, y=1100.0",
    "grid": "S22",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "Building BCD rodent control station 52 - bottom of S22 (S22)",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-RC-53",
    "type": "rodent",
    "label": "Building BCD rodent control station 53 - top of S22 vertical (S22)",
    "building": "Building BCD",
    "location": "Grid S22 - SVG x=920.0, y=1050.0",
    "grid": "S22",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "Building BCD rodent control station 53 - top of S22 vertical (S22)",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-RC-54",
    "type": "rodent",
    "label": "Building BCD rodent control station 54 - bottom of T20 (T20)",
    "building": "Building BCD",
    "location": "Grid T20 - SVG x=969.8, y=1000.0",
    "grid": "T20",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "Building BCD rodent control station 54 - bottom of T20 (T20)",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-RC-55",
    "type": "rodent",
    "label": "Building BCD rodent control station 55 - bottom of U20 (U20)",
    "building": "Building BCD",
    "location": "Grid U20 - SVG x=1019.5, y=1000.0",
    "grid": "U20",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "Building BCD rodent control station 55 - bottom of U20 (U20)",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-RC-56",
    "type": "rodent",
    "label": "Building BCD rodent control station 56 - renamed from old station 57 (T19)",
    "building": "Building BCD",
    "location": "Grid T19 - SVG x=960.0, y=941.0",
    "grid": "T19",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "Building BCD rodent control station 56 - renamed from old station 57 (T19)",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-RC-57",
    "type": "rodent",
    "label": "Building BCD rodent control station 57 - renamed from old station 56 (Q19)",
    "building": "Building BCD",
    "location": "Grid Q19 - SVG x=820.0, y=940.0",
    "grid": "Q19",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "Building BCD rodent control station 57 - renamed from old station 56 (Q19)",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-RC-58",
    "type": "rodent",
    "label": "Building BCD rodent control station 58 - renamed from old station 62 (O20)",
    "building": "Building BCD",
    "location": "Grid O20 - SVG x=700.0, y=989.0",
    "grid": "O20",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "Building BCD rodent control station 58 - renamed from old station 62 (O20)",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-RC-62",
    "type": "rodent",
    "label": "Building BCD rodent control station 62 - renamed from old station 60 (M20)",
    "building": "Building BCD",
    "location": "Grid M20 - SVG x=611.0, y=988.0",
    "grid": "M20",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "Building BCD rodent control station 62 - renamed from old station 60 (M20)",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-RC-63",
    "type": "rodent",
    "label": "Building BCD rodent control station 63 - M19 vertical (M19)",
    "building": "Building BCD",
    "location": "Grid M19 - SVG x=621.6, y=925.0",
    "grid": "M19",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "Building BCD rodent control station 63 - M19 vertical (M19)",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BCD-RC-64",
    "type": "rodent",
    "label": "Building BCD rodent control station 64 - J19 horizontal (J19)",
    "building": "Building BCD",
    "location": "Grid J19 - SVG x=472.4, y=950.0",
    "grid": "J19",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "Building BCD rodent control station 64 - J19 horizontal (J19)",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BUILDING-BCD-WINTER-SAFETY-207",
    "type": "salt",
    "label": "Salt/grit bin",
    "building": "Building BCD",
    "location": "Alcove north / compressor rooms",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Winter / safety",
    "summary": "Near CA-R08/Daikin assets",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-134",
    "type": "water",
    "label": "Full-length external gutter",
    "building": "Building BCD",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "120 m",
    "assetGroup": "Rainwater",
    "summary": "South main section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-135",
    "type": "water",
    "label": "Downpipes",
    "building": "Building BCD",
    "location": "South main section",
    "grid": "TBC",
    "quantity": "9",
    "assetGroup": "Rainwater",
    "summary": "D9 at 13 m, C2 at 44 m, C1 at 74 m",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-149",
    "type": "water",
    "label": "External gutter",
    "building": "Building BCD",
    "location": "South 25 m section",
    "grid": "TBC",
    "quantity": "25 m",
    "assetGroup": "Rainwater",
    "summary": "South 25 m section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-150",
    "type": "water",
    "label": "Downpipes",
    "building": "Building BCD",
    "location": "South 25 m section",
    "grid": "TBC",
    "quantity": "3",
    "assetGroup": "Rainwater",
    "summary": "South 25 m section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-160",
    "type": "water",
    "label": "Full-length gutter",
    "building": "Building BCD",
    "location": "South final section",
    "grid": "TBC",
    "quantity": "34 m",
    "assetGroup": "Rainwater",
    "summary": "Final south-facing section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-161",
    "type": "water",
    "label": "Downpipes",
    "building": "Building BCD",
    "location": "South final section",
    "grid": "TBC",
    "quantity": "3",
    "assetGroup": "Rainwater",
    "summary": "Final south-facing section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-167",
    "type": "water",
    "label": "Full-length gutter",
    "building": "Building BCD",
    "location": "North 103 m section",
    "grid": "TBC",
    "quantity": "103 m",
    "assetGroup": "Rainwater",
    "summary": "North main section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-168",
    "type": "water",
    "label": "Downpipes",
    "building": "Building BCD",
    "location": "North 103 m section",
    "grid": "TBC",
    "quantity": "8",
    "assetGroup": "Rainwater",
    "summary": "North main section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-178",
    "type": "water",
    "label": "Full-length gutter",
    "building": "Building BCD",
    "location": "North-facing 12.5 m section",
    "grid": "TBC",
    "quantity": "12.5 m",
    "assetGroup": "Rainwater",
    "summary": "North-facing section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-179",
    "type": "water",
    "label": "Downpipe",
    "building": "Building BCD",
    "location": "North-facing 12.5 m section",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Rainwater",
    "summary": "North-facing section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-197",
    "type": "water",
    "label": "Upper and lower full-length gutters",
    "building": "Building BCD",
    "location": "Alcove north / compressor rooms",
    "grid": "TBC",
    "quantity": "2 runs",
    "assetGroup": "Rainwater",
    "summary": "Projected lower level",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-198",
    "type": "water",
    "label": "Downpipes",
    "building": "Building BCD",
    "location": "Alcove north / compressor rooms",
    "grid": "TBC",
    "quantity": "4",
    "assetGroup": "Rainwater",
    "summary": "Compressor-room section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-215",
    "type": "water",
    "label": "Full-length gutter",
    "building": "Building BCD",
    "location": "Final north section",
    "grid": "TBC",
    "quantity": "48 m",
    "assetGroup": "Rainwater",
    "summary": "Final north section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BUILDING-BCD-RAINWATER-216",
    "type": "water",
    "label": "Downpipes",
    "building": "Building BCD",
    "location": "Final north section",
    "grid": "TBC",
    "quantity": "3",
    "assetGroup": "Rainwater",
    "summary": "Final north section",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-BICYCLE-STORAGE-046",
    "type": "bike",
    "label": "Bicycle shelter BS-DDW-E-01",
    "building": "Site-wide",
    "location": "East - Grid I7",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Bicycle storage",
    "summary": "Toward Dispatch Warehouse side near North end; Grid I7; SVG x=422.712 y=325.000; visible bike-shed outline on aerial map",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-WINDOWS-GLAZING-031",
    "type": "other",
    "label": "Lower-level top-hung openings",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "North",
    "grid": "TBC",
    "quantity": "2",
    "assetGroup": "Windows / glazing",
    "summary": "North elevation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-WINDOWS-GLAZING-032",
    "type": "other",
    "label": "Upper-level top-hung openings",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "North",
    "grid": "TBC",
    "quantity": "10",
    "assetGroup": "Windows / glazing",
    "summary": "North elevation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-FIRE-SAFETY-043",
    "type": "fire",
    "label": "Fire extinguisher",
    "building": "Site-wide",
    "location": "South",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Fire safety",
    "summary": "South roller/rapid-door and EAD area",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-BILLET-ALLOY-052",
    "type": "other",
    "label": "Aluminium billet bundles",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "West",
    "grid": "TBC",
    "quantity": "5",
    "assetGroup": "Billet / alloy",
    "summary": "Each approx. 5 m, end-to-end north-to-south",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-CANOPY-STRUCTURE-044",
    "type": "other",
    "label": "Canopy",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "East",
    "grid": "TBC",
    "quantity": "12 m x 5.5 m x 6 m",
    "assetGroup": "Canopy / structure",
    "summary": "East elevation canopy",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-GROUNDS-035",
    "type": "other",
    "label": "Grass verge",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "North",
    "grid": "TBC",
    "quantity": "1 irregular verge",
    "assetGroup": "Grounds",
    "summary": "Full-length North verge with kerbs/lighting columns",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-GROUNDS-051",
    "type": "other",
    "label": "Gravel verge",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "West",
    "grid": "TBC",
    "quantity": "3.4 m x 25 m",
    "assetGroup": "Grounds",
    "summary": "From North/West corner",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-STORAGE-042",
    "type": "other",
    "label": "Sheet-storage trailer",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "South",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Storage",
    "summary": "South service/loading-yard area",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-STORAGE-MATERIALS-047",
    "type": "other",
    "label": "Tate customer material stillages",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "East",
    "grid": "TBC",
    "quantity": "TBC",
    "assetGroup": "Storage / materials",
    "summary": "East elevation; profiles about 6 m x 900 mm",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-STORAGE-MATERIALS-048",
    "type": "other",
    "label": "Tate profile stillages",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "East",
    "grid": "TBC",
    "quantity": "TBC",
    "assetGroup": "Storage / materials",
    "summary": "East elevation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-VENTILATION-040",
    "type": "other",
    "label": "Ventilation grille",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "South",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Ventilation",
    "summary": "South elevation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-WASTE-STORAGE-041",
    "type": "other",
    "label": "Waste-timber skip",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "South",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Waste / storage",
    "summary": "South service/loading-yard area",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-WINDOWS-GLAZING-030",
    "type": "other",
    "label": "Curtain-wall glazing",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "North",
    "grid": "TBC",
    "quantity": "1 elevation",
    "assetGroup": "Windows / glazing",
    "summary": "Principal North glazing",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DDW-R-04",
    "type": "rodent",
    "label": "DDW-R-04 - Station 4 - DDW south elevation rodent-control station at G10 - Grid G10",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "Grid G10 - SVG x=325.0, y=496.0",
    "grid": "G10",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "DDW-R-04 - Station 4 - DDW south elevation rodent-control station at G10 - Grid G10",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "DDW-R-15",
    "type": "rodent",
    "label": "DDW-R-15 - Station 15 - DDW south elevation rodent-control station at H10 - Grid H10",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "Grid H10 - SVG x=370.0, y=496.0",
    "grid": "H10",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "DDW-R-15 - Station 15 - DDW south elevation rodent-control station at H10 - Grid H10",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "DDW-R-18",
    "type": "rodent",
    "label": "DDW-R-18 - Station 18 - DDW east/north corner rodent-control station added at H6 - Grid H6",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "Grid H6 - SVG x=370.0, y=285.0",
    "grid": "H6",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "DDW-R-18 - Station 18 - DDW east/north corner rodent-control station added at H6 - Grid H6",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "DDW-R-22",
    "type": "rodent",
    "label": "DDW-R-22 - Station 22 - DDW south elevation rodent-control station at bottom of F10 - Grid F10",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "Grid F10 - SVG x=285.0, y=496.0",
    "grid": "F10",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "DDW-R-22 - Station 22 - DDW south elevation rodent-control station at bottom of F10 - Grid F10",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB-WINTER-SAFETY-033",
    "type": "salt",
    "label": "Salt bin SB-DDW-N-01",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "North - Grid G6",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Winter / safety",
    "summary": "Right of main entrance; Grid G6; SVG x=323.250 y=252.000",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "BS-DDW-E-01",
    "type": "bike",
    "label": "DDW bike shed grid reference marker",
    "building": "Site-wide",
    "location": "Grid I7 - SVG x=422.712, y=325.000",
    "grid": "I7",
    "quantity": "1",
    "assetGroup": "Bike",
    "summary": "DDW bike shed grid reference marker",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "CP-DDW-I8-01",
    "type": "carparks",
    "label": "DDW side parking at Grid I8, 12 spaces available",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "Grid I8",
    "grid": "I8",
    "quantity": "1",
    "assetGroup": "Car Parks",
    "summary": "DDW side parking at Grid I8, 12 spaces available",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "DDW-CCTV-H7-01",
    "type": "cctv",
    "label": "DDW-CCTV-H7-01 - DDW / Sheet Metal Fab/TB CCTV camera - bottom of Grid H7 on DDW blue outline",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "Grid H7 - SVG x=387.0, y=350.0",
    "grid": "H7",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "DDW-CCTV-H7-01 - DDW / Sheet Metal Fab/TB CCTV camera - bottom of Grid H7 on DDW blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "DDW-CCTV-I7-01",
    "type": "cctv",
    "label": "DDW-CCTV-I7-01 - DDW / Sheet Metal Fab/TB CCTV camera - top of the vertical blue line at Grid I7",
    "building": "DDW / Sheet Metal Fab/TB",
    "location": "Grid I7 - SVG x=387.0, y=300.0",
    "grid": "I7",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "DDW-CCTV-I7-01 - DDW / Sheet Metal Fab/TB CCTV camera - top of the vertical blue line at Grid I7",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "DISPATCH-CCTV-J6-01",
    "type": "cctv",
    "label": "DISPATCH-CCTV-J6-01 - Dispatch Warehouse CCTV camera - top of the vertical blue line at Grid J6",
    "building": "Dispatch Warehouse",
    "location": "Grid J6 - SVG x=459.0, y=266.0",
    "grid": "J6",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "DISPATCH-CCTV-J6-01 - Dispatch Warehouse CCTV camera - top of the vertical blue line at Grid J6",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "DISPATCH-WAREHOUSE-FIRE-SAFETY-015",
    "type": "fire",
    "label": "Fire extinguisher",
    "building": "Dispatch Warehouse",
    "location": "South",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Fire safety",
    "summary": "South elevation near rapid/EAD area",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DISPATCH-WAREHOUSE-GROUNDS-WEED-CONTROL-007",
    "type": "other",
    "label": "Weed-control joint",
    "building": "Dispatch Warehouse",
    "location": "North",
    "grid": "TBC",
    "quantity": "1 area",
    "assetGroup": "Grounds / weed control",
    "summary": "North elevation joint",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DISPATCH-WAREHOUSE-GROUNDS-WEED-CONTROL-023",
    "type": "other",
    "label": "Gravel weed strip",
    "building": "Dispatch Warehouse",
    "location": "East",
    "grid": "TBC",
    "quantity": "2 m strip",
    "assetGroup": "Grounds / weed control",
    "summary": "East elevation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DISPATCH-WAREHOUSE-LOADING-STRUCTURE-028",
    "type": "other",
    "label": "Loading-bay recess",
    "building": "Dispatch Warehouse",
    "location": "West",
    "grid": "TBC",
    "quantity": "4 m x 18 m",
    "assetGroup": "Loading / structure",
    "summary": "West elevation recess",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DISPATCH-WAREHOUSE-STORAGE-022",
    "type": "other",
    "label": "Timber storage",
    "building": "Dispatch Warehouse",
    "location": "East",
    "grid": "TBC",
    "quantity": "1 area",
    "assetGroup": "Storage",
    "summary": "Timber against/near external wall",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DISPATCH-WAREHOUSE-VENTILATION-020",
    "type": "other",
    "label": "Vents",
    "building": "Dispatch Warehouse",
    "location": "East",
    "grid": "TBC",
    "quantity": "2",
    "assetGroup": "Ventilation",
    "summary": "East elevation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DISPATCH-WAREHOUSE-VENTILATION-027",
    "type": "other",
    "label": "Vents",
    "building": "Dispatch Warehouse",
    "location": "West",
    "grid": "TBC",
    "quantity": "3",
    "assetGroup": "Ventilation",
    "summary": "West elevation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DISPATCH-WAREHOUSE-WINDOWS-GLAZING-004",
    "type": "other",
    "label": "Glazed frontage",
    "building": "Dispatch Warehouse",
    "location": "North",
    "grid": "TBC",
    "quantity": "18 m x 5.9 m",
    "assetGroup": "Windows / glazing",
    "summary": "Main frontage glazing",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DISPATCH-WAREHOUSE-WINDOWS-GLAZING-005",
    "type": "other",
    "label": "Top-hung windows",
    "building": "Dispatch Warehouse",
    "location": "North",
    "grid": "TBC",
    "quantity": "9",
    "assetGroup": "Windows / glazing",
    "summary": "Recorded on North elevation",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "DISPATCH-WAREHOUSE-WINTER-SAFETY-006",
    "type": "salt",
    "label": "Salt bin SB-DISPATCH-N-01",
    "building": "Dispatch Warehouse",
    "location": "North - Grid J6",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Winter / safety",
    "summary": "Main entrance/loading-bay area; Grid J6; SVG x=472.442 y=252.000",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "NG-1",
    "type": "cctv",
    "label": "NG-1 - North Gate camera 1 - Grid K3 bottom-right",
    "building": "North Gate",
    "location": "Grid K3 - SVG x=543.038, y=146",
    "grid": "K3",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "NG-1 - North Gate camera 1 - Grid K3 bottom-right",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "NG-2",
    "type": "cctv",
    "label": "NG-2 - North Gate camera 2 - Grid K3 bottom-right",
    "building": "North Gate",
    "location": "Grid K3 - SVG x=551.038, y=154",
    "grid": "K3",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "NG-2 - North Gate camera 2 - Grid K3 bottom-right",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "NG-3",
    "type": "cctv",
    "label": "NG-3 - North Gate camera 3 - Grid J3 bottom-right",
    "building": "North Gate",
    "location": "Grid J3 - SVG x=493.308, y=146",
    "grid": "J3",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "NG-3 - North Gate camera 3 - Grid J3 bottom-right",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "NG-4",
    "type": "cctv",
    "label": "NG-4 - North Gate camera 4 - Grid J3 bottom-right",
    "building": "North Gate",
    "location": "Grid J3 - SVG x=501.308, y=154",
    "grid": "J3",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "NG-4 - North Gate camera 4 - Grid J3 bottom-right",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-BIKE-01",
    "type": "bike",
    "label": "P34-BIKE-01 - Press 3&4 bike rack and charging station - middle of E4 - Grid E4",
    "building": "Press 3 & 4",
    "location": "Grid E4 - SVG x=218.0, y=175.0",
    "grid": "E4",
    "quantity": "1",
    "assetGroup": "Bike",
    "summary": "P34-BIKE-01 - Press 3&4 bike rack and charging station - middle of E4 - Grid E4",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-PLACEHOLDER-01",
    "type": "building",
    "label": "Press 3 & 4",
    "building": "Press 3 & 4",
    "location": "Footprint confirmed on master map",
    "grid": "TBC",
    "quantity": "TBC",
    "assetGroup": "Building placeholder",
    "summary": "Placeholder only. Detailed survey and asset import pending for next week.",
    "status": "Pending survey import",
    "source": "Mobile app placeholder"
  },
  {
    "id": "P3&4-1",
    "type": "cctv",
    "label": "P3&4-1 - Press 3 & 4 CCTV camera - Grid E12, right blue outline",
    "building": "Press 3 & 4",
    "location": "Grid E12 - SVG x=232.1, y=575",
    "grid": "E12",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-1 - Press 3 & 4 CCTV camera - Grid E12, right blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-10",
    "type": "cctv",
    "label": "P3&4-10 - Press 3 & 4 CCTV camera - Grid B5, left blue outline",
    "building": "Press 3 & 4",
    "location": "Grid B5 - SVG x=88.4, y=250",
    "grid": "B5",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-10 - Press 3 & 4 CCTV camera - Grid B5, left blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-12",
    "type": "cctv",
    "label": "P3&4-12 - Press 3 & 4 CCTV camera - single retained camera at Grid B9 on left blue outline",
    "building": "Press 3 & 4",
    "location": "Grid B9 - SVG x=90.7, y=421",
    "grid": "B9",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-12 - Press 3 & 4 CCTV camera - single retained camera at Grid B9 on left blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-15",
    "type": "cctv",
    "label": "P3&4-15 - Press 3 & 4 CCTV camera - additional camera next to the B5 camera on left blue outline",
    "building": "Press 3 & 4",
    "location": "Grid B5 - SVG x=88.6, y=258",
    "grid": "B5",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-15 - Press 3 & 4 CCTV camera - additional camera next to the B5 camera on left blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-16",
    "type": "cctv",
    "label": "P3&4-16 - Press 3 & 4 CCTV camera - bottom of Grid B12 on left blue outline",
    "building": "Press 3 & 4",
    "location": "Grid B12 - SVG x=92.0, y=600",
    "grid": "B12",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-16 - Press 3 & 4 CCTV camera - bottom of Grid B12 on left blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-17",
    "type": "cctv",
    "label": "P3&4-17 - Press 3 & 4 CCTV camera - top corner of Grid B14, first of two",
    "building": "Press 3 & 4",
    "location": "Grid B14 - SVG x=93.5, y=646",
    "grid": "B14",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-17 - Press 3 & 4 CCTV camera - top corner of Grid B14, first of two",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-18",
    "type": "cctv",
    "label": "P3&4-18 - Press 3 & 4 CCTV camera - top corner of Grid B14, second of two",
    "building": "Press 3 & 4",
    "location": "Grid B14 - SVG x=93.5, y=654",
    "grid": "B14",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-18 - Press 3 & 4 CCTV camera - top corner of Grid B14, second of two",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-19",
    "type": "cctv",
    "label": "P3&4-19 - Press 3 & 4 CCTV camera - middle of Grid B17 on lower left blue outline",
    "building": "Press 3 & 4",
    "location": "Grid B17 - SVG x=96.0, y=825",
    "grid": "B17",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-19 - Press 3 & 4 CCTV camera - middle of Grid B17 on lower left blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-2",
    "type": "cctv",
    "label": "P3&4-2 - Press 3 & 4 CCTV camera - Grid E8, right blue outline",
    "building": "Press 3 & 4",
    "location": "Grid E8 - SVG x=229.4, y=375",
    "grid": "E8",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-2 - Press 3 & 4 CCTV camera - Grid E8, right blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-20",
    "type": "cctv",
    "label": "P3&4-20 - Press 3 & 4 CCTV camera - middle of lower horizontal blue line in Grid C17",
    "building": "Press 3 & 4",
    "location": "Grid C17 - SVG x=124.4, y=839",
    "grid": "C17",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-20 - Press 3 & 4 CCTV camera - middle of lower horizontal blue line in Grid C17",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-21",
    "type": "cctv",
    "label": "P3&4-21 - Press 3 & 4 CCTV camera - Grid E17, first of three on lower blue outline",
    "building": "Press 3 & 4",
    "location": "Grid E17 - SVG x=204.0, y=839",
    "grid": "E17",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-21 - Press 3 & 4 CCTV camera - Grid E17, first of three on lower blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-22",
    "type": "cctv",
    "label": "P3&4-22 - Press 3 & 4 CCTV camera - Grid E17, second of three on lower blue outline",
    "building": "Press 3 & 4",
    "location": "Grid E17 - SVG x=220.0, y=839",
    "grid": "E17",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-22 - Press 3 & 4 CCTV camera - Grid E17, second of three on lower blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-23",
    "type": "cctv",
    "label": "P3&4-23 - Press 3 & 4 CCTV camera - Grid E17, third of three on lower blue outline",
    "building": "Press 3 & 4",
    "location": "Grid E17 - SVG x=236.0, y=839",
    "grid": "E17",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-23 - Press 3 & 4 CCTV camera - Grid E17, third of three on lower blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-24",
    "type": "cctv",
    "label": "P3&4-24 - Press 3 & 4 CCTV camera - top-right of Grid E16 on right blue outline",
    "building": "Press 3 & 4",
    "location": "Grid E16 - SVG x=234.0, y=750",
    "grid": "E16",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-24 - Press 3 & 4 CCTV camera - top-right of Grid E16 on right blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-25",
    "type": "cctv",
    "label": "P3&4-25 - Press 3 & 4 CCTV camera - middle of Grid E14, first of two on right blue outline",
    "building": "Press 3 & 4",
    "location": "Grid E14 - SVG x=232.7, y=671",
    "grid": "E14",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-25 - Press 3 & 4 CCTV camera - middle of Grid E14, first of two on right blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-26",
    "type": "cctv",
    "label": "P3&4-26 - Press 3 & 4 CCTV camera - middle of Grid E14, second of two on right blue outline",
    "building": "Press 3 & 4",
    "location": "Grid E14 - SVG x=232.9, y=679",
    "grid": "E14",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-26 - Press 3 & 4 CCTV camera - middle of Grid E14, second of two on right blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-3",
    "type": "cctv",
    "label": "P3&4-3 - Press 3 & 4 CCTV camera - moved from E9 to sit next to the E8 camera on right blue outline",
    "building": "Press 3 & 4",
    "location": "Grid E8/E9 - SVG x=229.7, y=391",
    "grid": "E8/E9",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-3 - Press 3 & 4 CCTV camera - moved from E9 to sit next to the E8 camera on right blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-5",
    "type": "cctv",
    "label": "P3&4-5 - Press 3 & 4 CCTV camera - middle of Grid E4 on blue outline",
    "building": "Press 3 & 4",
    "location": "Grid E4 - SVG x=198.0, y=175",
    "grid": "E4",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-5 - Press 3 & 4 CCTV camera - middle of Grid E4 on blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-6",
    "type": "cctv",
    "label": "P3&4-6 - Press 3 & 4 CCTV camera - middle of the blue line at the bottom of Grid C3",
    "building": "Press 3 & 4",
    "location": "Grid C3 - SVG x=124.4, y=150",
    "grid": "C3",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-6 - Press 3 & 4 CCTV camera - middle of the blue line at the bottom of Grid C3",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-7",
    "type": "cctv",
    "label": "P3&4-7 - Press 3 & 4 CCTV camera - D4 camera moved right along the upper step blue outline",
    "building": "Press 3 & 4",
    "location": "Grid D4 - SVG x=198.0, y=173",
    "grid": "D4",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-7 - Press 3 & 4 CCTV camera - D4 camera moved right along the upper step blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P3&4-9",
    "type": "cctv",
    "label": "P3&4-9 - Press 3 & 4 CCTV camera - middle of Grid B4 on left blue outline",
    "building": "Press 3 & 4",
    "location": "Grid B4 - SVG x=87.5, y=175",
    "grid": "B4",
    "quantity": "1",
    "assetGroup": "CCTV",
    "summary": "P3&4-9 - Press 3 & 4 CCTV camera - middle of Grid B4 on left blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-AED-01",
    "type": "defib",
    "label": "P34-AED-01 - Press 3&4 AED defibrillator provisional marker - E7 vertical blue outline - exact location to confirm",
    "building": "Press 3 & 4",
    "location": "Grid E7 - SVG x=232.0, y=331.0",
    "grid": "E7",
    "quantity": "1",
    "assetGroup": "Defib",
    "summary": "P34-AED-01 - Press 3&4 AED defibrillator provisional marker - E7 vertical blue outline - exact location to confirm",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-01",
    "type": "doors",
    "label": "P34-D-01 - Press 3&4 single EAD door - outside access - 30/10 cylinder - B7 west blue outline - Grid B7",
    "building": "Press 3 & 4",
    "location": "Grid B7 - SVG x=96.0, y=335.0",
    "grid": "B7",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-01 - Press 3&4 single EAD door - outside access - 30/10 cylinder - B7 west blue outline - Grid B7",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-02",
    "type": "doors",
    "label": "P34-D-02 - Press 3&4 single EAD door - outside access - 30/10 cylinder - B9 west blue outline - Grid B9",
    "building": "Press 3 & 4",
    "location": "Grid B9 - SVG x=96.0, y=435.0",
    "grid": "B9",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-02 - Press 3&4 single EAD door - outside access - 30/10 cylinder - B9 west blue outline - Grid B9",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-03",
    "type": "doors",
    "label": "P34-D-03 - Press 3&4 single EAD door - outside access - 30/10 cylinder - B10 west blue outline - Grid B10",
    "building": "Press 3 & 4",
    "location": "Grid B10 - SVG x=96.0, y=485.0",
    "grid": "B10",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-03 - Press 3&4 single EAD door - outside access - 30/10 cylinder - B10 west blue outline - Grid B10",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-04",
    "type": "doors",
    "label": "P34-D-04 - Press 3&4 single EAD door - outside access - 30/10 cylinder - B11 west blue outline - Grid B11",
    "building": "Press 3 & 4",
    "location": "Grid B11 - SVG x=96.0, y=535.0",
    "grid": "B11",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-04 - Press 3&4 single EAD door - outside access - 30/10 cylinder - B11 west blue outline - Grid B11",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-05",
    "type": "doors",
    "label": "P34-D-05 - Press 3&4 single EAD door - outside access - 30/10 cylinder - B12 west blue outline - Grid B12",
    "building": "Press 3 & 4",
    "location": "Grid B12 - SVG x=96.0, y=585.0",
    "grid": "B12",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-05 - Press 3&4 single EAD door - outside access - 30/10 cylinder - B12 west blue outline - Grid B12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-06",
    "type": "doors",
    "label": "P34-D-06 - Press 3&4 single EAD door - outside access - 30/10 cylinder - B14 west blue outline - Grid B14",
    "building": "Press 3 & 4",
    "location": "Grid B14 - SVG x=96.0, y=685.0",
    "grid": "B14",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-06 - Press 3&4 single EAD door - outside access - 30/10 cylinder - B14 west blue outline - Grid B14",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-07",
    "type": "doors",
    "label": "P34-D-07 - Press 3&4 single EAD door - outside access - 30/10 cylinder - top right of E17 / east outline - Grid E17",
    "building": "Press 3 & 4",
    "location": "Grid E17 - SVG x=236.0, y=801.0",
    "grid": "E17",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-07 - Press 3&4 single EAD door - outside access - 30/10 cylinder - top right of E17 / east outline - Grid E17",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-08",
    "type": "doors",
    "label": "P34-D-08 - Press 3&4 single EAD door - outside access - 30/10 cylinder - bottom right of E16 / east outline - Grid E16",
    "building": "Press 3 & 4",
    "location": "Grid E16 - SVG x=236.0, y=775.0",
    "grid": "E16",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-08 - Press 3&4 single EAD door - outside access - 30/10 cylinder - bottom right of E16 / east outline - Grid E16",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-09",
    "type": "doors",
    "label": "P34-D-09 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E14 east vertical outline - Grid E14",
    "building": "Press 3 & 4",
    "location": "Grid E14 - SVG x=232.0, y=686.5",
    "grid": "E14",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-09 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E14 east vertical outline - Grid E14",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-10",
    "type": "doors",
    "label": "P34-D-10 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E15 east vertical outline - Grid E15",
    "building": "Press 3 & 4",
    "location": "Grid E15 - SVG x=232.0, y=732.7",
    "grid": "E15",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-10 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E15 east vertical outline - Grid E15",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-11",
    "type": "doors",
    "label": "P34-D-11 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E11 east vertical outline - Grid E11",
    "building": "Press 3 & 4",
    "location": "Grid E11 - SVG x=232.0, y=501.9",
    "grid": "E11",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-11 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E11 east vertical outline - Grid E11",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-12",
    "type": "doors",
    "label": "P34-D-12 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E9 east vertical outline - Grid E9",
    "building": "Press 3 & 4",
    "location": "Grid E9 - SVG x=232.0, y=409.6",
    "grid": "E9",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-12 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E9 east vertical outline - Grid E9",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-13",
    "type": "doors",
    "label": "P34-D-13 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E7 east vertical outline - Grid E7",
    "building": "Press 3 & 4",
    "location": "Grid E7 - SVG x=232.0, y=317.3",
    "grid": "E7",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-13 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E7 east vertical outline - Grid E7",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-14",
    "type": "doors",
    "label": "P34-D-14 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E6 east vertical outline - Grid E6",
    "building": "Press 3 & 4",
    "location": "Grid E6 - SVG x=232.0, y=271.2",
    "grid": "E6",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-14 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E6 east vertical outline - Grid E6",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-15",
    "type": "doors",
    "label": "P34-D-15 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E5 horizontal line - Grid E5",
    "building": "Press 3 & 4",
    "location": "Grid E5 - SVG x=214.0, y=220.0",
    "grid": "E5",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-15 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E5 horizontal line - Grid E5",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-16",
    "type": "doors",
    "label": "P34-D-16 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E5 vertical line - Grid E5",
    "building": "Press 3 & 4",
    "location": "Grid E5 - SVG x=232.0, y=238.0",
    "grid": "E5",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-16 - Press 3&4 single EAD door - outside access - 30/10 cylinder - E5 vertical line - Grid E5",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-D-17",
    "type": "doors",
    "label": "P34-D-17 - Press 3&4 single EAD door - outside access - 30/10 cylinder - C4 right-hand corner - Grid C4",
    "building": "Press 3 & 4",
    "location": "Grid C4 - SVG x=145.0, y=173.0",
    "grid": "C4",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-D-17 - Press 3&4 single EAD door - outside access - 30/10 cylinder - C4 right-hand corner - Grid C4",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-PRD-01",
    "type": "doors",
    "label": "P34-PRD-01 - Press 3&4 Plant room double doors with top lights, 70/35 cylinders, lever/lever handles - C3 horizontal blue line - plant room double doors 1 of 2 - Grid C3",
    "building": "Press 3 & 4",
    "location": "Grid C3 - SVG x=112.0, y=140.0",
    "grid": "C3",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-PRD-01 - Press 3&4 Plant room double doors with top lights, 70/35 cylinders, lever/lever handles - C3 horizontal blue line - plant room double doors 1 of 2 - Grid C3",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-PRD-02",
    "type": "doors",
    "label": "P34-PRD-02 - Press 3&4 Plant room double doors with top lights, 70/35 cylinders, lever/lever handles - C3 horizontal blue line - plant room double doors 2 of 2 - Grid C3",
    "building": "Press 3 & 4",
    "location": "Grid C3 - SVG x=132.0, y=140.0",
    "grid": "C3",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-PRD-02 - Press 3&4 Plant room double doors with top lights, 70/35 cylinders, lever/lever handles - C3 horizontal blue line - plant room double doors 2 of 2 - Grid C3",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-PRD-03",
    "type": "doors",
    "label": "P34-PRD-03 - Press 3&4 Plant room double doors with top lights, 70/35 cylinders, lever/lever handles - B4 west/step blue outline - Grid B4",
    "building": "Press 3 & 4",
    "location": "Grid B4 - SVG x=96.0, y=173.0",
    "grid": "B4",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-PRD-03 - Press 3&4 Plant room double doors with top lights, 70/35 cylinders, lever/lever handles - B4 west/step blue outline - Grid B4",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-PRD-04",
    "type": "doors",
    "label": "P34-PRD-04 - Press 3&4 Plant room double doors with top lights, 70/35 cylinders, lever/lever handles - B5 west blue outline - Grid B5",
    "building": "Press 3 & 4",
    "location": "Grid B5 - SVG x=91.0, y=225.0",
    "grid": "B5",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-PRD-04 - Press 3&4 Plant room double doors with top lights, 70/35 cylinders, lever/lever handles - B5 west blue outline - Grid B5",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-PRD-05",
    "type": "doors",
    "label": "P34-PRD-05 - Press 3&4 Plant room double doors with top lights, 70/35 cylinders, lever/lever handles - B16 west blue outline - Grid B16",
    "building": "Press 3 & 4",
    "location": "Grid B16 - SVG x=96.0, y=775.0",
    "grid": "B16",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-PRD-05 - Press 3&4 Plant room double doors with top lights, 70/35 cylinders, lever/lever handles - B16 west blue outline - Grid B16",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-PRD-06",
    "type": "doors",
    "label": "P34-PRD-06 - Press 3&4 Plant room double doors with top lights, 70/35 cylinders, lever/lever handles - B17 west blue outline - Grid B17",
    "building": "Press 3 & 4",
    "location": "Grid B17 - SVG x=96.0, y=825.0",
    "grid": "B17",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-PRD-06 - Press 3&4 Plant room double doors with top lights, 70/35 cylinders, lever/lever handles - B17 west blue outline - Grid B17",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-RS-01",
    "type": "doors",
    "label": "P34-RS-01 - Press 3&4 roller shutter door - D4 horizontal blue line - Grid D4",
    "building": "Press 3 & 4",
    "location": "Grid D4 - SVG x=170.0, y=173.0",
    "grid": "D4",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-RS-01 - Press 3&4 roller shutter door - D4 horizontal blue line - Grid D4",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-RS-02",
    "type": "doors",
    "label": "P34-RS-02 - Press 3&4 roller shutter door - C3 vertical blue line - Grid C3",
    "building": "Press 3 & 4",
    "location": "Grid C3 - SVG x=145.0, y=148.0",
    "grid": "C3",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-RS-02 - Press 3&4 roller shutter door - C3 vertical blue line - Grid C3",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-RS-03",
    "type": "doors",
    "label": "P34-RS-03 - Press 3&4 roller shutter door - B15 west blue outline - Grid B15",
    "building": "Press 3 & 4",
    "location": "Grid B15 - SVG x=96.0, y=735.0",
    "grid": "B15",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-RS-03 - Press 3&4 roller shutter door - B15 west blue outline - Grid B15",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-RS-04",
    "type": "doors",
    "label": "P34-RS-04 - Press 3&4 roller shutter door - D17 vertical blue line - Grid D17",
    "building": "Press 3 & 4",
    "location": "Grid D17 - SVG x=170.0, y=820.0",
    "grid": "D17",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-RS-04 - Press 3&4 roller shutter door - D17 vertical blue line - Grid D17",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-RS-05",
    "type": "doors",
    "label": "P34-RS-05 - Press 3&4 roller shutter door - E17 horizontal blue line - Grid E17",
    "building": "Press 3 & 4",
    "location": "Grid E17 - SVG x=215.0, y=801.0",
    "grid": "E17",
    "quantity": "1",
    "assetGroup": "Doors",
    "summary": "P34-RS-05 - Press 3&4 roller shutter door - E17 horizontal blue line - Grid E17",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-FE-01",
    "type": "fire",
    "label": "P34-FE-01 - Press 3&4 fire extinguisher next to bike rack/charger - middle of E4 - Grid E4",
    "building": "Press 3 & 4",
    "location": "Grid E4 - SVG x=230.0, y=175.0",
    "grid": "E4",
    "quantity": "1",
    "assetGroup": "Fire",
    "summary": "P34-FE-01 - Press 3&4 fire extinguisher next to bike rack/charger - middle of E4 - Grid E4",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-01",
    "type": "lighting",
    "label": "P34-L-01 - Press 3&4 LED external light - Press 3&4 east vertical blue line - 14 LEDs equally spaced from E5 to E17 - Grid E5",
    "building": "Press 3 & 4",
    "location": "Grid E5 - SVG x=232.0, y=225.0",
    "grid": "E5",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-01 - Press 3&4 LED external light - Press 3&4 east vertical blue line - 14 LEDs equally spaced from E5 to E17 - Grid E5",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-02",
    "type": "lighting",
    "label": "P34-L-02 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E6",
    "building": "Press 3 & 4",
    "location": "Grid E6 - SVG x=232.0, y=275.0",
    "grid": "E6",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-02 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E6",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-03",
    "type": "lighting",
    "label": "P34-L-03 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E7",
    "building": "Press 3 & 4",
    "location": "Grid E7 - SVG x=232.0, y=316.7",
    "grid": "E7",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-03 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E7",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-04",
    "type": "lighting",
    "label": "P34-L-04 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E8",
    "building": "Press 3 & 4",
    "location": "Grid E8 - SVG x=232.0, y=358.3",
    "grid": "E8",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-04 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E8",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-05",
    "type": "lighting",
    "label": "P34-L-05 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E9",
    "building": "Press 3 & 4",
    "location": "Grid E9 - SVG x=232.0, y=400.0",
    "grid": "E9",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-05 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E9",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-06",
    "type": "lighting",
    "label": "P34-L-06 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E9",
    "building": "Press 3 & 4",
    "location": "Grid E9 - SVG x=232.0, y=441.7",
    "grid": "E9",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-06 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E9",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-07",
    "type": "lighting",
    "label": "P34-L-07 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E10",
    "building": "Press 3 & 4",
    "location": "Grid E10 - SVG x=232.0, y=483.3",
    "grid": "E10",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-07 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E10",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-08",
    "type": "lighting",
    "label": "P34-L-08 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E11",
    "building": "Press 3 & 4",
    "location": "Grid E11 - SVG x=232.0, y=525.0",
    "grid": "E11",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-08 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E11",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-09",
    "type": "lighting",
    "label": "P34-L-09 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E12",
    "building": "Press 3 & 4",
    "location": "Grid E12 - SVG x=232.0, y=566.7",
    "grid": "E12",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-09 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-10",
    "type": "lighting",
    "label": "P34-L-10 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E13",
    "building": "Press 3 & 4",
    "location": "Grid E13 - SVG x=232.0, y=608.3",
    "grid": "E13",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-10 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-11",
    "type": "lighting",
    "label": "P34-L-11 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E14",
    "building": "Press 3 & 4",
    "location": "Grid E14 - SVG x=232.0, y=650.0",
    "grid": "E14",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-11 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E14",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-12",
    "type": "lighting",
    "label": "P34-L-12 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E14",
    "building": "Press 3 & 4",
    "location": "Grid E14 - SVG x=232.0, y=691.7",
    "grid": "E14",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-12 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E14",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-13",
    "type": "lighting",
    "label": "P34-L-13 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E15",
    "building": "Press 3 & 4",
    "location": "Grid E15 - SVG x=232.0, y=733.3",
    "grid": "E15",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-13 - Press 3&4 LED external light - Press 3&4 east vertical blue line - re-spaced equally from E6 to E16 - Grid E15",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-14",
    "type": "lighting",
    "label": "P34-L-14 - Press 3&4 LED external light - Press 3&4 east vertical blue line - moved onto angled blue outline - Grid E16",
    "building": "Press 3 & 4",
    "location": "Grid E16 - SVG x=235.6, y=775.0",
    "grid": "E16",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-14 - Press 3&4 LED external light - Press 3&4 east vertical blue line - moved onto angled blue outline - Grid E16",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-15",
    "type": "lighting",
    "label": "P34-L-15 - Press 3&4 LED external light - E5 horizontal blue line - Grid E5",
    "building": "Press 3 & 4",
    "location": "Grid E5 - SVG x=214.0, y=220.0",
    "grid": "E5",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-15 - Press 3&4 LED external light - E5 horizontal blue line - Grid E5",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-16",
    "type": "lighting",
    "label": "P34-L-16 - Press 3&4 LED external light - E5 vertical blue line - Grid E5",
    "building": "Press 3 & 4",
    "location": "Grid E5 - SVG x=232.0, y=238.0",
    "grid": "E5",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-16 - Press 3&4 LED external light - E5 vertical blue line - Grid E5",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-17",
    "type": "lighting",
    "label": "P34-L-17 - Press 3&4 LED external light - D4 horizontal blue line - 1 of 2 - Grid D4",
    "building": "Press 3 & 4",
    "location": "Grid D4 - SVG x=157.0, y=173.0",
    "grid": "D4",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-17 - Press 3&4 LED external light - D4 horizontal blue line - 1 of 2 - Grid D4",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-18",
    "type": "lighting",
    "label": "P34-L-18 - Press 3&4 LED external light - D4 horizontal blue line - 2 of 2 - Grid D4",
    "building": "Press 3 & 4",
    "location": "Grid D4 - SVG x=181.0, y=173.0",
    "grid": "D4",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-18 - Press 3&4 LED external light - D4 horizontal blue line - 2 of 2 - Grid D4",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-19",
    "type": "lighting",
    "label": "P34-L-19 - Press 3&4 LED external light - C4 vertical blue line - Grid C4",
    "building": "Press 3 & 4",
    "location": "Grid C4 - SVG x=145.0, y=160.0",
    "grid": "C4",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-19 - Press 3&4 LED external light - C4 vertical blue line - Grid C4",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-20",
    "type": "lighting",
    "label": "P34-L-20 - Press 3&4 LED external light - C3 horizontal blue line - Grid C3",
    "building": "Press 3 & 4",
    "location": "Grid C3 - SVG x=118.0, y=140.0",
    "grid": "C3",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-20 - Press 3&4 LED external light - C3 horizontal blue line - Grid C3",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-21",
    "type": "lighting",
    "label": "P34-L-21 - Press 3&4 LED external light - B4 blue outline - Grid B4",
    "building": "Press 3 & 4",
    "location": "Grid B4 - SVG x=96.0, y=173.0",
    "grid": "B4",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-21 - Press 3&4 LED external light - B4 blue outline - Grid B4",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-22",
    "type": "lighting",
    "label": "P34-L-22 - Press 3&4 LED external light - B6 blue outline - Grid B6",
    "building": "Press 3 & 4",
    "location": "Grid B6 - SVG x=96.0, y=285.0",
    "grid": "B6",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-22 - Press 3&4 LED external light - B6 blue outline - Grid B6",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-23",
    "type": "lighting",
    "label": "P34-L-23 - Press 3&4 LED external light - B7 blue outline - Grid B7",
    "building": "Press 3 & 4",
    "location": "Grid B7 - SVG x=96.0, y=335.0",
    "grid": "B7",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-23 - Press 3&4 LED external light - B7 blue outline - Grid B7",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-24",
    "type": "lighting",
    "label": "P34-L-24 - Press 3&4 LED external light - B11 to B17 west blue line - 4 LEDs equally spaced - Grid B11",
    "building": "Press 3 & 4",
    "location": "Grid B11 - SVG x=96.0, y=535.0",
    "grid": "B11",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-24 - Press 3&4 LED external light - B11 to B17 west blue line - 4 LEDs equally spaced - Grid B11",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-25",
    "type": "lighting",
    "label": "P34-L-25 - Press 3&4 LED external light - B11 to B17 west blue line - 4 LEDs equally spaced - Grid B13",
    "building": "Press 3 & 4",
    "location": "Grid B13 - SVG x=96.0, y=635.0",
    "grid": "B13",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-25 - Press 3&4 LED external light - B11 to B17 west blue line - 4 LEDs equally spaced - Grid B13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-26",
    "type": "lighting",
    "label": "P34-L-26 - Press 3&4 LED external light - B11 to B17 west blue line - 4 LEDs equally spaced - Grid B15",
    "building": "Press 3 & 4",
    "location": "Grid B15 - SVG x=96.0, y=735.0",
    "grid": "B15",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-26 - Press 3&4 LED external light - B11 to B17 west blue line - 4 LEDs equally spaced - Grid B15",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-27",
    "type": "lighting",
    "label": "P34-L-27 - Press 3&4 LED external light - B11 to B17 west blue line - 4 LEDs equally spaced - Grid B17",
    "building": "Press 3 & 4",
    "location": "Grid B17 - SVG x=96.0, y=825.0",
    "grid": "B17",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-27 - Press 3&4 LED external light - B11 to B17 west blue line - 4 LEDs equally spaced - Grid B17",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-28",
    "type": "lighting",
    "label": "P34-L-28 - Press 3&4 LED external light - C17 horizontal blue line midway - Grid C17",
    "building": "Press 3 & 4",
    "location": "Grid C17 - SVG x=132.0, y=839.0",
    "grid": "C17",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-28 - Press 3&4 LED external light - C17 horizontal blue line midway - Grid C17",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-29",
    "type": "lighting",
    "label": "P34-L-29 - Press 3&4 LED external light - D17 vertical blue line - Grid D17",
    "building": "Press 3 & 4",
    "location": "Grid D17 - SVG x=170.0, y=820.0",
    "grid": "D17",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-29 - Press 3&4 LED external light - D17 vertical blue line - Grid D17",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "P34-L-30",
    "type": "lighting",
    "label": "P34-L-30 - Press 3&4 LED external light - Moved up from E17 to E16 per field adjustment - Grid E16",
    "building": "Press 3 & 4",
    "location": "Grid E16 - SVG x=215.0, y=775.0",
    "grid": "E16",
    "quantity": "1",
    "assetGroup": "Lighting",
    "summary": "P34-L-30 - Press 3&4 LED external light - Moved up from E17 to E16 per field adjustment - Grid E16",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "RC-23",
    "type": "rodent",
    "label": "RC-23 - Press 3&4 rodent control station 23 - Grid E12 - E12 east vertical blue line",
    "building": "Press 3 & 4",
    "location": "Grid E12 - SVG x=232.0, y=575.0",
    "grid": "E12",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "RC-23 - Press 3&4 rodent control station 23 - Grid E12 - E12 east vertical blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "RC-24",
    "type": "rodent",
    "label": "RC-24 - Press 3&4 rodent control station 24 - Grid E11 - E11 east vertical blue line",
    "building": "Press 3 & 4",
    "location": "Grid E11 - SVG x=232.0, y=525.0",
    "grid": "E11",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "RC-24 - Press 3&4 rodent control station 24 - Grid E11 - E11 east vertical blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "RC-25",
    "type": "rodent",
    "label": "RC-25 - Press 3&4 rodent control station 25 - Grid E9 - E9 east vertical blue line",
    "building": "Press 3 & 4",
    "location": "Grid E9 - SVG x=232.0, y=425.0",
    "grid": "E9",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "RC-25 - Press 3&4 rodent control station 25 - Grid E9 - E9 east vertical blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "RC-26",
    "type": "rodent",
    "label": "RC-26 - Press 3&4 rodent control station 26 - Grid E10 - E10 east vertical blue line",
    "building": "Press 3 & 4",
    "location": "Grid E10 - SVG x=232.0, y=475.0",
    "grid": "E10",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "RC-26 - Press 3&4 rodent control station 26 - Grid E10 - E10 east vertical blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "RC-27",
    "type": "rodent",
    "label": "RC-27 - Press 3&4 rodent control station 27 - Grid E5 - E5 vertical blue line",
    "building": "Press 3 & 4",
    "location": "Grid E5 - SVG x=232.0, y=238.0",
    "grid": "E5",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "RC-27 - Press 3&4 rodent control station 27 - Grid E5 - E5 vertical blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "RC-28",
    "type": "rodent",
    "label": "RC-28 - Press 3&4 rodent control station 28 - Grid D4 - D4 horizontal blue line",
    "building": "Press 3 & 4",
    "location": "Grid D4 - SVG x=170.0, y=173.0",
    "grid": "D4",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "RC-28 - Press 3&4 rodent control station 28 - Grid D4 - D4 horizontal blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "RC-29",
    "type": "rodent",
    "label": "RC-29 - Press 3&4 rodent control station 29 - Grid C3 - C3 horizontal blue line",
    "building": "Press 3 & 4",
    "location": "Grid C3 - SVG x=118.0, y=140.0",
    "grid": "C3",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "RC-29 - Press 3&4 rodent control station 29 - Grid C3 - C3 horizontal blue line",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "RC-30",
    "type": "rodent",
    "label": "RC-30 - Press 3&4 rodent control station 30 - Grid B7 - B7 west blue outline",
    "building": "Press 3 & 4",
    "location": "Grid B7 - SVG x=96.0, y=335.0",
    "grid": "B7",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "RC-30 - Press 3&4 rodent control station 30 - Grid B7 - B7 west blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "RC-32",
    "type": "rodent",
    "label": "RC-32 - Press 3&4 rodent control station 32 - Grid B9 - B9 west blue outline",
    "building": "Press 3 & 4",
    "location": "Grid B9 - SVG x=96.0, y=435.0",
    "grid": "B9",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "RC-32 - Press 3&4 rodent control station 32 - Grid B9 - B9 west blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "RC-33",
    "type": "rodent",
    "label": "RC-33 - Press 3&4 rodent control station 33 - Grid B12 - B12 west blue outline",
    "building": "Press 3 & 4",
    "location": "Grid B12 - SVG x=96.0, y=585.0",
    "grid": "B12",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "RC-33 - Press 3&4 rodent control station 33 - Grid B12 - B12 west blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "RC-34",
    "type": "rodent",
    "label": "RC-34 - Press 3&4 rodent control station 34 - Grid B14 - B14 west blue outline",
    "building": "Press 3 & 4",
    "location": "Grid B14 - SVG x=96.0, y=685.0",
    "grid": "B14",
    "quantity": "1",
    "assetGroup": "Rodent",
    "summary": "RC-34 - Press 3&4 rodent control station 34 - Grid B14 - B14 west blue outline",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "BS-CHG-R23-01",
    "type": "bike",
    "label": "BS-CHG-R23-01 - Bike shed with charging station - Grid R23",
    "building": "Site-wide",
    "location": "Grid R23 - SVG x=870.3, y=1125.0",
    "grid": "R23",
    "quantity": "1",
    "assetGroup": "Bike",
    "summary": "BS-CHG-R23-01 - Bike shed with charging station - Grid R23",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "MB-S21-01",
    "type": "motorbike",
    "label": "Motorbike parking at right-hand side of Grid S21, 3 spaces",
    "building": "Site-wide",
    "location": "Grid S21",
    "grid": "S21",
    "quantity": "1",
    "assetGroup": "Motorbike",
    "summary": "Motorbike parking at right-hand side of Grid S21, 3 spaces",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "MB-T23-01",
    "type": "motorbike",
    "label": "Motorbike parking at Grid T23, 6 spaces",
    "building": "Site-wide",
    "location": "Grid T23",
    "grid": "T23",
    "quantity": "1",
    "assetGroup": "Motorbike",
    "summary": "Motorbike parking at Grid T23, 6 spaces",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SB-H12-01",
    "type": "salt",
    "label": "Salt Bin SB-H12-01 grid H12 - bottom right of H12",
    "building": "Site-wide",
    "location": "Grid H12 - SVG x=389.846, y=592.000",
    "grid": "H12",
    "quantity": "1",
    "assetGroup": "Salt",
    "summary": "Salt Bin SB-H12-01 grid H12 - bottom right of H12",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SITE-WIDE-SECURITY-GATES-001",
    "type": "security",
    "label": "Automatic Security Gate ASG-K4-K5-01",
    "building": "Site-wide",
    "location": "K4-K5 / along L4-L5 grid line",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Security gates",
    "summary": "Green vertical gate line, SVG x=547.038 y=150 to y=250; slightly thicker than building blue outlines",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "SITE-WIDE-SECURITY-GATES-002",
    "type": "security",
    "label": "Automatic Security Gate ASG-X12-Z12-01",
    "building": "Site-wide",
    "location": "Top edge of grids X12, Y12 and Z12",
    "grid": "TBC",
    "quantity": "1",
    "assetGroup": "Security gates",
    "summary": "Green horizontal gate line, SVG x=1143.808 to x=1293.000 at y=550.000; slightly thicker than building blue outlines",
    "status": "Imported from All Site Assets Index",
    "source": "All Site Assets Index"
  },
  {
    "id": "SL1",
    "type": "streetlights",
    "label": "SL1 - Double Street Light - Grid Y13",
    "building": "Site-wide",
    "location": "Grid Y13 - SVG x=1193.538, y=650.000",
    "grid": "Y13",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL1 - Double Street Light - Grid Y13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL10",
    "type": "streetlights",
    "label": "SL10 - Double Street Light - Grid Z14",
    "building": "Site-wide",
    "location": "Grid Z14 - SVG x=1293.000, y=666.667",
    "grid": "Z14",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL10 - Double Street Light - Grid Z14",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL11",
    "type": "streetlights",
    "label": "SL11 - Single Street Light - Grid Z14",
    "building": "Site-wide",
    "location": "Grid Z14 - SVG x=1293.000, y=683.333",
    "grid": "Z14",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL11 - Single Street Light - Grid Z14",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL12",
    "type": "streetlights",
    "label": "SL12 - Single Street Light - Grid R23",
    "building": "Site-wide",
    "location": "Grid R23 - SVG x=870.288, y=1150.000",
    "grid": "R23",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL12 - Single Street Light - Grid R23",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL13",
    "type": "streetlights",
    "label": "SL13 - Single Street Light - Grid T23",
    "building": "Site-wide",
    "location": "Grid T23 - SVG x=969.750, y=1125.000",
    "grid": "T23",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL13 - Single Street Light - Grid T23",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL14",
    "type": "streetlights",
    "label": "SL14 - Single Street Light - Grid U23",
    "building": "Site-wide",
    "location": "Grid U23 - SVG x=1044.346, y=1100.000",
    "grid": "U23",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL14 - Single Street Light - Grid U23",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL15",
    "type": "streetlights",
    "label": "SL15 - Single Street Light - Grid U22",
    "building": "Site-wide",
    "location": "Grid U22 - SVG x=994.615, y=1100.000",
    "grid": "U22",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL15 - Single Street Light - Grid U22",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL16",
    "type": "streetlights",
    "label": "SL16 - Single Street Light - Grid V21",
    "building": "Site-wide",
    "location": "Grid V21 - SVG x=1044.346, y=1050.000",
    "grid": "V21",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL16 - Single Street Light - Grid V21",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL17",
    "type": "streetlights",
    "label": "SL17 - Double Street Light - Grid U22",
    "building": "Site-wide",
    "location": "Grid U22 - SVG x=1019.481, y=1100.000",
    "grid": "U22",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL17 - Double Street Light - Grid U22",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL18",
    "type": "streetlights",
    "label": "SL18 - Double Street Light - Grid W22",
    "building": "Site-wide",
    "location": "Grid W22 - SVG x=1118.942, y=1075.000",
    "grid": "W22",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL18 - Double Street Light - Grid W22",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL19",
    "type": "streetlights",
    "label": "SL19 - Single Street Light - Grid W21",
    "building": "Site-wide",
    "location": "Grid W21 - SVG x=1094.077, y=1000.000",
    "grid": "W21",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL19 - Single Street Light - Grid W21",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL2",
    "type": "streetlights",
    "label": "SL2 - Double Street Light - Grid Y16",
    "building": "Site-wide",
    "location": "Grid Y16 - SVG x=1193.538, y=775.000",
    "grid": "Y16",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL2 - Double Street Light - Grid Y16",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL20",
    "type": "streetlights",
    "label": "SL20 - Double Street Light - Grid I13",
    "building": "Site-wide",
    "location": "Grid I13 - SVG x=397.846, y=650.000",
    "grid": "I13",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL20 - Double Street Light - Grid I13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL21",
    "type": "streetlights",
    "label": "SL21 - Double Street Light - Grid I15",
    "building": "Site-wide",
    "location": "Grid I15 - SVG x=397.846, y=750.000",
    "grid": "I15",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL21 - Double Street Light - Grid I15",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL22",
    "type": "streetlights",
    "label": "SL22 - Double Street Light - Grid I17",
    "building": "Site-wide",
    "location": "Grid I17 - SVG x=397.846, y=850.000",
    "grid": "I17",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL22 - Double Street Light - Grid I17",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL23",
    "type": "streetlights",
    "label": "SL23 - Double Street Light - Grid X13",
    "building": "Site-wide",
    "location": "Grid X13 - SVG x=1168.673, y=625.000",
    "grid": "X13",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL23 - Double Street Light - Grid X13",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL24",
    "type": "streetlights",
    "label": "SL24 - Single Street Light - Grid F4",
    "building": "Site-wide",
    "location": "Grid F4 - SVG x=273.519, y=200.000",
    "grid": "F4",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL24 - Single Street Light - Grid F4",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL25",
    "type": "streetlights",
    "label": "SL25 - Single Street Light - Grid G4",
    "building": "Site-wide",
    "location": "Grid G4 - SVG x=323.250, y=200.000",
    "grid": "G4",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL25 - Single Street Light - Grid G4",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL26",
    "type": "streetlights",
    "label": "SL26 - Single Street Light - Grid H4",
    "building": "Site-wide",
    "location": "Grid H4 - SVG x=372.981, y=200.000",
    "grid": "H4",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL26 - Single Street Light - Grid H4",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL27",
    "type": "streetlights",
    "label": "SL27 - Single Street Light - Grid I4",
    "building": "Site-wide",
    "location": "Grid I4 - SVG x=447.577, y=200.000",
    "grid": "I4",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL27 - Single Street Light - Grid I4",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL28",
    "type": "streetlights",
    "label": "SL28 - Single Street Light - Grid F5",
    "building": "Site-wide",
    "location": "Grid F5 - SVG x=248.654, y=250.000",
    "grid": "F5",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL28 - Single Street Light - Grid F5",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL3",
    "type": "streetlights",
    "label": "SL3 - Double Street Light - Grid Y17",
    "building": "Site-wide",
    "location": "Grid Y17 - SVG x=1193.538, y=850.000",
    "grid": "Y17",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL3 - Double Street Light - Grid Y17",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL4",
    "type": "streetlights",
    "label": "SL4 - Single Street Light - Grid Z16",
    "building": "Site-wide",
    "location": "Grid Z16 - SVG x=1293.000, y=750.000",
    "grid": "Z16",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL4 - Single Street Light - Grid Z16",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL5",
    "type": "streetlights",
    "label": "SL5 - Single Street Light - Grid Y19",
    "building": "Site-wide",
    "location": "Grid Y19 - SVG x=1218.904, y=900.000",
    "grid": "Y19",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL5 - Single Street Light - Grid Y19",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL6",
    "type": "streetlights",
    "label": "SL6 - Single Street Light - Grid Y19",
    "building": "Site-wide",
    "location": "Grid Y19 - SVG x=1243.269, y=925.000",
    "grid": "Y19",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL6 - Single Street Light - Grid Y19",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL7",
    "type": "streetlights",
    "label": "SL7 - Single Street Light - Grid Y19",
    "building": "Site-wide",
    "location": "Grid Y19 - SVG x=1218.904, y=950.000",
    "grid": "Y19",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL7 - Single Street Light - Grid Y19",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL8",
    "type": "streetlights",
    "label": "SL8 - Double Street Light - Grid X19",
    "building": "Site-wide",
    "location": "Grid X19 - SVG x=1193.538, y=900.000",
    "grid": "X19",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL8 - Double Street Light - Grid X19",
    "status": "Imported from current master",
    "source": "Current master map marker"
  },
  {
    "id": "SL9",
    "type": "streetlights",
    "label": "SL9 - Double Street Light - Grid W20",
    "building": "Site-wide",
    "location": "Grid W20 - SVG x=1094.077, y=1000.000",
    "grid": "W20",
    "quantity": "1",
    "assetGroup": "Street Lights",
    "summary": "SL9 - Double Street Light - Grid W20",
    "status": "Imported from current master",
    "source": "Current master map marker"
  }
];
const buildings = [
  {
    "id": "BUILDING-A",
    "name": "Building A",
    "status": "Active",
    "assetCount": 143
  },
  {
    "id": "BUILDING-BCD",
    "name": "Building BCD",
    "status": "Active",
    "assetCount": 77
  },
  {
    "id": "AMS-HOUSE",
    "name": "AMS House",
    "status": "Active",
    "assetCount": 10
  },
  {
    "id": "DDW-SHEET-METAL-FAB-TB",
    "name": "DDW / Sheet Metal Fab/TB",
    "status": "Active",
    "assetCount": 19
  },
  {
    "id": "DISPATCH-WAREHOUSE",
    "name": "Dispatch Warehouse",
    "status": "Active",
    "assetCount": 15
  },
  {
    "id": "PRESS-3-4",
    "name": "Press 3 & 4",
    "status": "Active",
    "assetCount": 94
  },
  {
    "id": "NORTH-GATE",
    "name": "North Gate",
    "status": "Active",
    "assetCount": 4
  },
  {
    "id": "SITE-WIDE",
    "name": "Site-wide",
    "status": "Active",
    "assetCount": 34
  },
  {
    "id": "BILLET-LOCATIONS",
    "name": "Billet Locations",
    "status": "Active",
    "assetCount": 41
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
const buildingElevationFilterEl = document.getElementById("buildingElevationFilter");
const buildingAssetFilterEl = document.getElementById("buildingAssetFilter");
const buildingAssetListEl = document.getElementById("buildingAssetList");
const buildingAssetMapEl = document.getElementById("buildingAssetMap");
const showBuildingTasksButton = document.getElementById("showBuildingTasks");
const showBuildingProvidersButton = document.getElementById("showBuildingProviders");
let selectedBuildingForSheet = null;

updateStatusCounts();
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
showBuildingTasksButton.addEventListener("click", () => {
  if (!selectedBuildingForSheet) return;
  activeFilter = "all";
  activeBuilding = "all";
  searchEl.value = selectedBuildingForSheet.name;
  syncFilterControls();
  renderBuildings();
  render();
  document.querySelector('[data-target="searchView"]').click();
  document.getElementById("searchView").scrollIntoView({ behavior: "smooth", block: "start" });
  closeBuildingDetail();
});
showBuildingProvidersButton.addEventListener("click", () => {
  activeFilter = "all";
  activeBuilding = "all";
  searchEl.value = "service provider";
  syncFilterControls();
  renderBuildings();
  render();
  document.querySelector('[data-target="searchView"]').click();
  document.getElementById("searchView").scrollIntoView({ behavior: "smooth", block: "start" });
  closeBuildingDetail();
});

buildingAssetFilterEl.addEventListener("change", () => {
  if (selectedBuildingForSheet) renderBuildingAssetList(selectedBuildingForSheet.name);
});

buildingElevationFilterEl.addEventListener("change", () => {
  if (selectedBuildingForSheet) renderBuildingAssetList(selectedBuildingForSheet.name);
});

document.querySelectorAll("[data-building-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const building = buildings.find((item) => item.name === button.dataset.buildingTarget);
    if (building) openBuildingDetail(building);
  });
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
    const buildingAssetCount = assets.filter((asset) => asset.building === building.name).length;
    const row = document.createElement("button");
    row.className = "building-row";
    row.type = "button";
    row.classList.toggle("active", activeBuilding === building.name);
    row.innerHTML = `<div><strong>${building.name}</strong><span>${building.status}</span></div><span>${buildingAssetCount}</span>`;
    row.addEventListener("click", () => {
      openBuildingDetail(building);
    });
    buildingListEl.appendChild(row);
  });
}

function updateStatusCounts() {
  const assetCountEl = document.getElementById("exportAssetCount");
  const buildingCountEl = document.getElementById("exportBuildingCount");
  if (assetCountEl) assetCountEl.textContent = `${assets.length} assets`;
  if (buildingCountEl) buildingCountEl.textContent = `${buildings.length} records`;
}

function openBuildingDetail(building) {
  selectedBuildingForSheet = building;
  const buildingAssets = assets.filter((asset) => asset.building === building.name);
  const counts = buildingAssets.reduce((acc, asset) => {
    acc[asset.type] = (acc[asset.type] || 0) + 1;
    return acc;
  }, {});
  const groupText = Object.keys(counts).length
    ? Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 4).map(([type, count]) => `${getAssetTypeLabels()[type] || type}: ${count}`).join(", ")
    : "No asset records yet";
  document.getElementById("buildingTitle").textContent = building.name;
  document.getElementById("buildingStatus").textContent = building.status;
  document.getElementById("buildingRecordCount").textContent = `${buildingAssets.length} records`;
  document.getElementById("buildingGroups").textContent = groupText;
  const breakdown = document.getElementById("buildingBreakdown");
  breakdown.innerHTML = "";
  Object.entries(counts).sort((a, b) => b[1] - a[1]).forEach(([type, count]) => {
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.buildingType = type;
    item.innerHTML = `<span>${getAssetTypeLabels()[type] || type}</span><strong>${count}</strong>`;
    breakdown.appendChild(item);
  });
  if (!Object.keys(counts).length) {
    const item = document.createElement("span");
    item.textContent = "Survey import pending";
    breakdown.appendChild(item);
  }
  breakdown.querySelectorAll("[data-building-type]").forEach((button) => {
    button.addEventListener("click", () => {
      buildingAssetFilterEl.value = button.dataset.buildingType;
      renderBuildingAssetList(building.name);
    });
  });
  populateBuildingElevationFilter(buildingAssets);
  populateBuildingAssetFilter(counts);
  renderBuildingAssetList(building.name);
  buildingSheetEl.classList.add("open");
  buildingSheetEl.setAttribute("aria-hidden", "false");
}

function closeBuildingDetail() {
  buildingSheetEl.classList.remove("open");
  buildingSheetEl.setAttribute("aria-hidden", "true");
}

function populateBuildingAssetFilter(counts) {
  const labels = getAssetTypeLabels();
  const current = buildingAssetFilterEl.value || "all";
  buildingAssetFilterEl.innerHTML = `<option value="all">All asset categories</option>`;
  Object.keys(counts).sort((a, b) => (labels[a] || a).localeCompare(labels[b] || b)).forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = `${labels[type] || type} (${counts[type]})`;
    buildingAssetFilterEl.appendChild(option);
  });
  buildingAssetFilterEl.value = counts[current] ? current : "all";
}

function populateBuildingElevationFilter(buildingAssets) {
  const current = buildingElevationFilterEl.value || "all";
  const areas = buildingAssets.reduce((acc, asset) => {
    const area = getAssetArea(asset);
    acc[area] = (acc[area] || 0) + 1;
    return acc;
  }, {});
  buildingElevationFilterEl.innerHTML = `<option value="all">All elevations / areas</option>`;
  getSortedAreaLabels(Object.keys(areas)).forEach((area) => {
    const option = document.createElement("option");
    option.value = area;
    option.textContent = `${area} (${areas[area]})`;
    buildingElevationFilterEl.appendChild(option);
  });
  buildingElevationFilterEl.value = areas[current] ? current : "all";
}

function renderBuildingAssetList(buildingName) {
  const selectedType = buildingAssetFilterEl.value;
  const selectedArea = buildingElevationFilterEl.value;
  const buildingAssets = assets.filter((asset) => {
    const matchesType = selectedType === "all" || asset.type === selectedType;
    const matchesArea = selectedArea === "all" || getAssetArea(asset) === selectedArea;
    return asset.building === buildingName && matchesType && matchesArea;
  });

  renderBuildingAssetMap(buildingName, buildingAssets, selectedType);

  if (!buildingAssets.length) {
    buildingAssetListEl.innerHTML = `<p>No records in this category.</p>`;
    return;
  }

  buildingAssetListEl.innerHTML = "";
  buildingAssets.slice(0, 18).forEach((asset) => {
    const item = document.createElement("button");
    item.className = "building-asset-item";
    item.type = "button";
    const typeLabel = getAssetTypeLabels()[asset.type] || asset.type;
    const area = getAssetArea(asset);
    item.innerHTML = `<strong>${asset.label}</strong><span>${typeLabel} · ${area} · ${asset.status || "Recorded"}</span><em>${asset.summary || asset.location || "Location detail pending"}</em>`;
    item.addEventListener("click", () => openDetail(asset));
    buildingAssetListEl.appendChild(item);
  });

  if (buildingAssets.length > 18) {
    const item = document.createElement("div");
    item.className = "building-asset-item";
    item.innerHTML = `<strong>${buildingAssets.length - 18} more records</strong><span>Use the full register list for the remaining records.</span>`;
    buildingAssetListEl.appendChild(item);
  }
}

function renderBuildingAssetMap(buildingName, buildingAssets, selectedType) {
  if (!buildingAssetMapEl) return;
  const shortName = getBuildingShortName(buildingName);
  const shapeClass = buildingShapeClasses[buildingName] || "local-shape-generic";
  buildingAssetMapEl.innerHTML = `<div class="local-building-shape ${shapeClass}"><span>${shortName}</span></div>`;

  const plottableAssets = buildingAssets
    .map((asset) => ({ asset, grid: parseAssetGrid(asset), fallbackPoint: getFallbackPointForAsset(buildingName, asset) }))
    .filter((entry) => entry.grid || entry.fallbackPoint);

  if (!plottableAssets.length) {
    const note = document.createElement("div");
    note.className = "local-map-note";
    note.textContent = "Grid references pending for this selection.";
    buildingAssetMapEl.appendChild(note);
    return;
  }

  const bounds = getGridBoundsForBuilding(buildingName, plottableAssets.map((entry) => entry.grid).filter(Boolean));

  if (selectedType === "all") {
    renderLocalCategoryMarkers(plottableAssets, bounds);
    return;
  }

  const visibleEntries = plottableAssets.slice(0, 90).map(({ asset, fallbackPoint }) => ({
    asset,
    point: getLocalPointForAsset(buildingName, asset, bounds) || fallbackPoint
  }));
  const pointGroups = visibleEntries.reduce((acc, entry) => {
    const key = `${Math.round(entry.point.x)}-${Math.round(entry.point.y)}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(entry);
    return acc;
  }, {});

  visibleEntries.forEach(({ asset, point }, index) => {
    const key = `${Math.round(point.x)}-${Math.round(point.y)}`;
    const group = pointGroups[key] || [];
    const groupIndex = group.indexOf(visibleEntries[index]);
    const spread = getMarkerSpread(group.length, groupIndex);
    const marker = document.createElement("button");
    marker.className = `local-map-marker type-${asset.type}`;
    marker.type = "button";
    marker.style.left = `${point.x}%`;
    marker.style.top = `${point.y}%`;
    marker.style.transform = `translate(-50%, -50%) translate(${spread.x}px, ${spread.y}px)`;
    marker.title = `${asset.label} (${asset.grid || "No grid"})`;
    marker.textContent = getMarkerText(asset.type);
    marker.addEventListener("click", () => openDetail(asset));
    buildingAssetMapEl.appendChild(marker);
  });

  if (plottableAssets.length > 90) {
    const note = document.createElement("div");
    note.className = "local-map-note compact";
    note.textContent = `${plottableAssets.length - 90} more records in list`;
    buildingAssetMapEl.appendChild(note);
  }
}

function getMarkerSpread(total, index) {
  if (total <= 1 || index < 0) return { x: 0, y: 0 };
  const compact = [
    { x: -6, y: 0 },
    { x: 6, y: 0 },
    { x: 0, y: -7 },
    { x: 0, y: 7 },
    { x: -6, y: -6 },
    { x: 6, y: 6 }
  ];
  if (index < compact.length) return compact[index];
  const angle = (Math.PI * 2 * index) / total;
  return { x: Math.cos(angle) * 9, y: Math.sin(angle) * 9 };
}

function renderLocalCategoryMarkers(plottableAssets, bounds) {
  const groups = plottableAssets.reduce((acc, entry) => {
    if (hiddenMapTypes.has(entry.asset.type)) return acc;
    if (!acc[entry.asset.type]) acc[entry.asset.type] = [];
    acc[entry.asset.type].push(entry);
    return acc;
  }, {});

  Object.entries(groups).forEach(([type, entries], index) => {
    const points = entries.map((entry) => {
      if (entry.grid) return gridToLocalPoint(entry.grid, bounds);
      return entry.fallbackPoint;
    }).filter(Boolean);
    if (!points.length) return;
    const point = {
      x: points.reduce((sum, item) => sum + item.x, 0) / points.length,
      y: points.reduce((sum, item) => sum + item.y, 0) / points.length
    };
    const marker = document.createElement("button");
    marker.className = `local-map-marker local-category-marker type-${type}`;
    marker.type = "button";
    marker.style.left = `${point.x}%`;
    marker.style.top = `${point.y}%`;
    marker.style.transform = `translate(-50%, -50%) translate(${(index % 4 - 1.5) * 6}px, ${Math.floor(index / 4) * 5}px)`;
    marker.title = `${getAssetTypeLabels()[type] || type}: ${entries.length}`;
    marker.innerHTML = `${getMarkerText(type)}<span>${entries.length}</span>`;
    marker.addEventListener("click", () => {
      buildingAssetFilterEl.value = type;
      renderBuildingAssetList(selectedBuildingForSheet.name);
    });
    buildingAssetMapEl.appendChild(marker);
  });
}

function getAssetArea(asset) {
  const text = `${asset.location || ""} ${asset.summary || ""}`.toLowerCase();
  if (/\bnorth\b/.test(text)) return "North elevation";
  if (/\bsouth\b/.test(text)) return "South elevation";
  if (/\beast\b/.test(text)) return "East elevation";
  if (/\bwest\b/.test(text)) return "West elevation";
  if (/\bplant\b/.test(text)) return "Plant room";
  if (/\boffice\b/.test(text)) return "Office area";
  if (/\byard\b|\bcar park\b|\bcarpark\b|\bparking\b/.test(text)) return "Yard / parking";
  return "Area to confirm";
}

function getFallbackPointForAsset(buildingName, asset) {
  const local = buildingLocalBounds[buildingName];
  if (!local) return null;
  const area = getAssetArea(asset);
  const label = `${asset.label || ""} ${asset.id || ""}`.toLowerCase();
  let along = 50;
  if (/ev|charger/.test(label)) along = 18;
  if (/gutter/.test(label)) along = 38;
  if (/dp|downpipe|sw|monitoring/.test(label)) along = 72;
  if (area === "North elevation") {
    return { x: local.west + ((local.east - local.west) * along) / 100, y: local.north };
  }
  if (area === "South elevation") {
    return { x: local.west + ((local.east - local.west) * along) / 100, y: local.south };
  }
  if (area === "East elevation") {
    return { x: local.east, y: local.north + ((local.south - local.north) * along) / 100 };
  }
  if (area === "West elevation") {
    return { x: local.west, y: local.north + ((local.south - local.north) * along) / 100 };
  }
  return null;
}

function getSortedAreaLabels(labels) {
  const order = [
    "North elevation",
    "South elevation",
    "East elevation",
    "West elevation",
    "Plant room",
    "Office area",
    "Yard / parking",
    "Area to confirm"
  ];
  return labels.sort((a, b) => {
    const ai = order.indexOf(a);
    const bi = order.indexOf(b);
    if (ai !== -1 || bi !== -1) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    return a.localeCompare(b);
  });
}

function getGridBoundsForBuilding(buildingName, grids) {
  const presets = {
    "Press 3 & 4": { minCol: 1, maxCol: 10, minRow: 1, maxRow: 18 },
    "DDW / Sheet Metal Fab/TB": { minCol: 4, maxCol: 11, minRow: 4, maxRow: 11 },
    "DDW / Sheet Metal Fab": { minCol: 4, maxCol: 11, minRow: 4, maxRow: 11 },
    "Dispatch Warehouse": { minCol: 7, maxCol: 13, minRow: 4, maxRow: 11 },
    "Building A": { minCol: 12, maxCol: 26, minRow: 11, maxRow: 21 },
    "Building BCD": { minCol: 9, maxCol: 24, minRow: 17, maxRow: 25 },
    "AMS House": { minCol: 19, maxCol: 27, minRow: 18, maxRow: 24 }
  };
  if (presets[buildingName]) return presets[buildingName];

  const cols = grids.map((grid) => grid.col);
  const rows = grids.map((grid) => grid.row);
  return {
    minCol: Math.min(...cols) - 1,
    maxCol: Math.max(...cols) + 1,
    minRow: Math.min(...rows) - 1,
    maxRow: Math.max(...rows) + 1
  };
}

function getLocalPointForAsset(buildingName, asset, bounds) {
  const grid = parseAssetGrid(asset);
  if (!grid) return null;

  const point = gridToLocalPoint(grid, bounds);
  const local = buildingLocalBounds[buildingName];
  if (!local) return point;

  return snapPointToBuildingOutline(point, local);
}

function snapPointToBuildingOutline(point, local) {
  const x = clamp(point.x, local.west, local.east);
  const y = clamp(point.y, local.north, local.south);
  const distances = [
    { side: "north", value: Math.abs(y - local.north) },
    { side: "south", value: Math.abs(y - local.south) },
    { side: "west", value: Math.abs(x - local.west) },
    { side: "east", value: Math.abs(x - local.east) }
  ].sort((a, b) => a.value - b.value);

  switch (distances[0].side) {
    case "north":
      return { x, y: local.north };
    case "south":
      return { x, y: local.south };
    case "west":
      return { x: local.west, y };
    case "east":
      return { x: local.east, y };
    default:
      return { x, y };
  }
}

function gridToLocalPoint(grid, bounds) {
  const colSpan = Math.max(1, bounds.maxCol - bounds.minCol);
  const rowSpan = Math.max(1, bounds.maxRow - bounds.minRow);
  return {
    x: clamp(((grid.col - bounds.minCol) / colSpan) * 86 + 7, 6, 94),
    y: clamp(((grid.row - bounds.minRow) / rowSpan) * 78 + 11, 8, 92)
  };
}

function parseAssetGrid(asset) {
  return parseGridRef(`${asset.grid || ""} ${asset.location || ""} ${asset.summary || ""} ${asset.label || ""}`);
}

function parseGridRef(gridRef) {
  if (!gridRef || gridRef === "TBC") return null;
  const match = String(gridRef).trim().toUpperCase().match(/([A-Z]+)\s*([0-9]+)/);
  if (!match) return null;
  return {
    col: columnNameToNumber(match[1]),
    row: Number(match[2])
  };
}

function columnNameToNumber(name) {
  return name.split("").reduce((value, char) => value * 26 + char.charCodeAt(0) - 64, 0);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
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
  countEl.textContent = activeFilter === "all" && activeBuilding === "all" && !searchEl.value.trim()
    ? "Tap a building"
    : `${filtered.length} asset${filtered.length === 1 ? "" : "s"}`;
  renderList(filtered);
  renderMarkers(filtered);
  renderSummary();
}

function renderSummary() {
  const order = ["doors", "lighting", "streetlights", "cctv", "salt", "rodent", "ev", "bike", "motorbike", "carparks", "security", "fire", "water", "defib", "electrical", "billet", "building", "other"];
  const labels = getAssetTypeLabels();
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

  const visibleAssets = filtered.filter((asset) => !hiddenMapTypes.has(asset.type));

  if (activeFilter === "all" && activeBuilding === "all" && !searchEl.value.trim()) {
    return;
  }

  const groups = visibleAssets.reduce((acc, asset) => {
    const key = activeFilter === "all" ? `${asset.building}||${asset.type}` : asset.building;
    if (!acc[key]) acc[key] = [];
    acc[key].push(asset);
    return acc;
  }, {});

  Object.values(groups).forEach((group, index) => {
    const asset = group[0];
    const base = buildingMarkerBases[asset.building] || markerPositions[asset.type] || [50, 50];
    const typeOffset = activeFilter === "all" ? (markerTypeOffsets[asset.type] || [0, 0]) : [0, 0];
    const fineOffset = activeFilter === "all" ? (index % 2) * 1.2 : 0;
    const marker = document.createElement("button");
    marker.className = `map-marker type-${asset.type}${activeFilter === "all" ? "" : " filtered-marker"}`;
    marker.type = "button";
    marker.style.left = `${base[0] + typeOffset[0] + fineOffset}%`;
    marker.style.top = `${base[1] + typeOffset[1] + fineOffset}%`;
    marker.innerHTML = `${getMarkerText(asset.type)}${group.length > 1 ? `<span class="marker-count">${group.length}</span>` : ""}`;
    marker.title = group.length > 1
      ? `${asset.building} - ${group.length} ${asset.type} records`
      : `${asset.label} - ${asset.grid}`;
    marker.addEventListener("click", () => {
      if (group.length > 1) {
        activeBuilding = asset.building;
        renderBuildings();
        render();
        document.getElementById("registerView").scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        openDetail(asset);
      }
    });
    mapEl.appendChild(marker);
  });
}

function renderBuildingOverviewMarkers(filtered) {
  const groups = filtered.reduce((acc, asset) => {
    if (!acc[asset.building]) acc[asset.building] = [];
    acc[asset.building].push(asset);
    return acc;
  }, {});

  Object.entries(groups).forEach(([buildingName, group]) => {
    const base = buildingMarkerBases[buildingName] || [50, 50];
    const marker = document.createElement("button");
    marker.className = "map-marker building-total-marker";
    marker.type = "button";
    marker.style.left = `${base[0]}%`;
    marker.style.top = `${base[1]}%`;
    marker.innerHTML = `<span>${getBuildingShortName(buildingName)}</span><span class="marker-count">${group.length}</span>`;
    marker.title = `${buildingName} - ${group.length} records`;
    marker.addEventListener("click", () => {
      const building = buildings.find((item) => item.name === buildingName);
      if (building) openBuildingDetail(building);
    });
    mapEl.appendChild(marker);
  });
}

function getAssetTypeLabels() {
  return {
    "doors": "Doors",
    "lighting": "Lighting",
    "streetlights": "Street Lights",
    "cctv": "CCTV",
    "salt": "Salt",
    "rodent": "Rodent",
    "ev": "EV",
    "bike": "Bike",
    "carparks": "Car Parks",
    "security": "Security Gates",
    "fire": "Fire",
    "water": "Water",
    "defib": "Defib",
    "motorbike": "Motorbike",
    "electrical": "Electrical",
    "billet": "Billet",
    "building": "Buildings",
    "other": "Other"
};
}

function getBuildingShortName(buildingName) {
  const labels = {
    "Press 3 & 4": "P34",
    "DDW / Sheet Metal Fab/TB": "DDW",
    "DDW / Sheet Metal Fab": "DDW",
    "Dispatch Warehouse": "DIS",
    "Building A": "A",
    "Building BCD": "BCD",
    "AMS House": "AMS",
    "Site-wide": "SITE"
  };
  return labels[buildingName] || "B";
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
    billet: "BLT",
    motorbike: "MB",
    electrical: "E",
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



























