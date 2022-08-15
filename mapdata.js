var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#bdd7ee",
    popups: "detect",
    
    //State defaults
    state_description: "State Description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      hover_color: "#004986",
      color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    AK: {
      name: "Alaska",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    FL: {
      name: "Florida",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "yes",
      description: "Cigna IFP medical plans offered in 12 counties: Broward, Collier, Indian River, Lake, Leon, Martin, Miami-Dade, Palm Beach, Orange, Osceola, Seminole, St. Lucie"
    },
    NH: {
      name: "New Hampshire",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    VT: {
      name: "Vermont",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    ME: {
      name: "Maine",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    RI: {
      name: "Rhode Island",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    NY: {
      name: "New York",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    PA: {
      name: "Pennsylvania",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "Yes",
      description: "Cigna IFP medical plans offered in 5 counties: Bucks, Chester, Delaware, Montgomery, Philadelphia"
    },
    NJ: {
      name: "New Jersey",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    DE: {
      name: "Delaware",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    MD: {
      name: "Maryland",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    VA: {
      name: "Virginia",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "yes",
      description: "Cigna IFP medical plans offered in 35 counties: Alexandria City, Amelia, Arlington, Charles City, Chesterfield,  Clarke, Colonial Heights City, Cumberland, Dinwiddie, Fairfax City, Fairfax, Falls Church City, Fauquier, Frederick, Goochland, Hanover, Henrico, Hopewell City, Loudoun, Louisa, Manassas City, Manassas Park City, Page, Petersburg City, Prince George, Prince William, Powhatan, Rappahannock, Richmond City, Shenandoah, Spotsylvania, Stafford, Sussex, Warren, Winchester City"
    },
    WV: {
      name: "West Virginia",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    OH: {
      name: "Ohio",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    IN: {
      name: "Indiana",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "yes",
      description: "Cigna IFP medical plans offered in 8 counties: Boone, Hamilton, Hancock, Hendricks, Henry, Johnson, Marion, Shelby"
    },
    IL: {
      name: "Illinois",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "Yes",
      description: "Cigna IFP medical plans offered in 9 counties: Cook, DuPage, Grundy, Kane, Kankakee, Kendall, Lake, McHenry,  Will"
    },
    CT: {
      name: "Connecticut",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    WI: {
      name: "Wisconsin",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    NC: {
      name: "North Carolina",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "yes",
      description: "Cigna IFP medical plans offered in 70 counties: Alamance, Avery, Beaufort, Bertie, Bladen, Buncombe, Camden, Carteret, Chatham, Cherokee, Chowan, Clay, Craven, Cumberland, Currituck, Dare, Duplin, Durham, Edgecombe, Franklin, Gates, Graham, Granville, Greene, Guilford, Halifax, Harnett, Haywood, Henderson, Hertford, Hoke, Hyde, Jackson, Johnston, Jones, Lee, Lenoir, Macon, Madison,  Martin, McDowell, Mitchell, Montgomery,  Moore, Nash, Northampton, Onslow, Orange, Pamlico, Pasquotank, Perquimans,  Person, Pitt, Polk, Randolph, Richmond, Robeson, Rutherford, Sampson, Scotland, Swain, Transylvania, Tyrell, Vance, Wake, Warren, Washington, Wayne, Wilson, Yancey"
    },
    DC: {
      name: "District of Columbia",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    MA: {
      name: "Massachusetts",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    TN: {
      name: "Tennessee",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "yes",
      description: "Cigna IFP medical plans offered in 65 counties: Anderson, Benton, Bledsoe, Blount, Bradley, Campbell, Carroll, Carter, Claiborne, Cheatham, Chester, Cocke, Crockett, Davidson, Decatur, Dyer, Fayette, Franklin, Gibson, Grainger, Greene, Grundy, Hamblen, Hamilton, Hancock, Hardeman, Hardin, Hawkins, Haywood, Henderson, Henry, Jefferson, Johnson, Knox, Lake, Lauderdale, Loudon, Madison, Marion, McMinn, McNairy, Meigs, Monroe, Montgomery, Morgan, Obion, Polk, Rhea, Roane, Robertson, Rutherford, Scott, Sequatchie, Sevier, Shelby, Sullivan, Sumner, Tipton, Trousdale, Unicoi, Union, Washington, Weakley, Williamson, Wilson"
    },
    AR: {
      name: "Arkansas",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    MO: {
      name: "Missouri",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "yes",
      description: "Cigna IFP medical plans offered in 16 counties: Boone, Cass, Clay, Jackson, Platte, Ray, Franklin, Jefferson, Lincoln, St. Charles, St. Francois, St. Louis City, St Louis County, Ste. Genevieve, Warren, Washington"
    },
    GA: {
      name: "Georgia",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "yes",
      description: "Cigna IFP medical plans offered in 66 counties: Banks, Barrow,  Bartow, Bryan, Bulloch, Butts, Candler, Chatham, Chattahoochee, Cherokee, Clarke, Clayton, Cobb, Coweta, Dawson, DeKalb, Douglas, Effingham, Elbert, Evans, Fayette, Forsyth, Franklin, Fulton, Gilmer, Greene, Gwinnett, Habersham, Hall, Harris, Hart, Henry, Jackson, Jasper, Lamar, Liberty, Long, Lumpkin, Macon, Madison, Marion, Meriwether, Morgan, Muscogee, Newton, Oconee, Oglethorpe,  Paulding, Pickens, Pike, Rabun, Rockdale, Screven, Spalding, Stephens, Stewart, Talbot, Tattnall, Taylor, Towns, Troup, Union, Upson, Walton, Webster, White"
    },
    SC: {
      name: "South Carolina",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "yes",
      description: "Cigna IFP medical plans offered in 4 counties: Berkeley, Charleston, Dorchester, Horry"
    },
    KY: {
      name: "Kentucky",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    AL: {
      name: "Alabama",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    LA: {
      name: "Louisiana",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    MS: {
      name: "Mississippi",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "yes",
      description: "Cigna IFP medical plans offered in 35 counties: Alcorn, Benton, Calhoun, Clay, Chickasaw, Covington, DeSoto, Forrest, George, Greene, Hancock, Harrison, Itawamba, Jackson, Jefferson Davis, Jones, Lamar, Lawrence, Lee, Lowndes, Marion, Marshall, Monroe, Pearl River, Perry, Pontotoc, Prentiss, Stone, Tate, Tippah, Tishomingo, Tunica, Union, Walthall, Webster"
    },
    IA: {
      name: "Iowa",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    MN: {
      name: "Minnesota",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    OK: {
      name: "Oklahoma",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    TX: {
      name: "Texas",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "yes",
      description: "Cigna IFP medical plans offered in 11 counties: Collin, Crosby, Dallas, Ellis, El Paso, Hunt, Johnson, Kaufman, Lubbock, Rockwall, Tarrant"
    },
    NM: {
      name: "New Mexico",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    KS: {
      name: "Kansas",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "yes",
      description: "Cigna IFP medical plans offered in 8 counties: Butler, Harvey, Johnson, Leavenworth, Miami, Sedgwick, Sumner, Wyandotte"
    },
    NE: {
      name: "Nebraska",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    SD: {
      name: "South Dakota",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    ND: {
      name: "North Dakota",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    WY: {
      name: "Wyoming",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    MT: {
      name: "Montana",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    CO: {
      name: "Colorado",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "Yes",
      description: "Cigna IFP medical plans offered in 10 counties: Adams, Arapahoe, Broomfield, Boulder, Douglas, El Paso, Jefferson, Larimer, Teller, Weld"
    },
    UT: {
      name: "Utah",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "yes",
      description: "Cigna IFP medical plans offered in 4 counties: Davis, Salt Lake, Utah, Weber"
    },
    AZ: {
      name: "Arizona",
      color: "#00A9E0",
      hover_color: "#00A9E0",
      zoomable: "yes",
      description: "Cigna IFP medical plans offered in 4 counties: Gila, Maricopa, Pinal, Yavapai"
    },
    NV: {
      name: "Nevada",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    OR: {
      name: "Oregon",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    WA: {
      name: "Washington",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    CA: {
      name: "California",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    MI: {
      name: "Michigan",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    ID: {
      name: "Idaho",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    GU: {
      name: "Guam",
      hide: "yes",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes",
      color: "#c8c9c7",
      hover_color: "#c8c9c7",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes",
      color: "#c8c9c7",
      hover_color: "#c8c9c7",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes",
      color: "#c8c9c7",
      hover_color: "#c8c9c7",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    },
    AS: {
      name: "American Samoa",
      hide: "yes",
      color: "#004986",
      hover_color: "#004986",
      zoomable: "no",
      description: "Cigna IFP dental plans available, IFP medical plans not offered"
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all",
      font: "Arial",
      size: "15",
      color: "#408CBC",
      scale: "no"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575",
      size: "15",
      font: "Arial",
      color: "#408CBC"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580",
      size: "15",
      font: "Arial",
      color: "#FFFFFF"
    }
  },
  legend: {
    entries: [
      {
        name: "States offering Cigna IFP medical plans for 2023",
        color: "#00A9E0",
        type: "state",
        shape: "circle",
        ids: ""
      }
    ]
  },
  regions: {}
};