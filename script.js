const STORAGE_KEY = "inventory-dashboard-v2";
const PAGE_STORAGE_KEY = "inventory-dashboard-current-page";
const SEASON_STORAGE_KEY = "inventory-dashboard-current-season";
const EXPANDED_STORAGE_KEY = "inventory-dashboard-expanded-category";
const AUTH_STORAGE_KEY = "inventory-dashboard-authenticated";
const APP_PASSWORD = "wtp9394!";
const DEFAULT_STOCK = 20;
const SIZES = ["M", "L"];
const ONE_SIZE = "OS";
const PRODUCT_DEFINITIONS = [
  { season: "초기시즌", category: "반팔", name: "What you looking at", color: "기본" },
  { season: "초기시즌", category: "반팔", name: "Glory youth Crop T-Shirts", color: "기본" },
  { season: "초기시즌", category: "반팔", name: "V.C.R", color: "기본" },
  { season: "초기시즌", category: "반팔", name: "Always Open", color: "기본" },
  { season: "초기시즌", category: "반팔", name: "Album 1.", color: "기본" },
  { season: "초기시즌", category: "맨투맨", name: "Uprising", color: "기본" },
  { season: "초기시즌", category: "맨투맨", name: "New Wave", color: "기본" },
  { season: "초기시즌", category: "맨투맨", name: "Years and Years Sweatshirt Gray", color: "기본" },

  { season: "2024", category: "반팔", name: "Years and Years", color: "기본" },
  { season: "2024", category: "반팔", name: "Crowd Psychology (T-shirt)", color: "기본" },
  { season: "2024", category: "반팔", name: "It Is No Joke (T-shirt)", color: "기본" },
  { season: "2024", category: "반팔", name: "That Is Where It Started (T-shirt)", color: "기본" },
  { season: "2024", category: "반팔", name: "Entropy", color: "기본" },
  { season: "2024", category: "반팔", name: "Distortion (T-shirt)", color: "기본" },
  { season: "2024", category: "반팔", name: "What We Are Crazy About (T-shirt)", color: "기본" },
  { season: "2024", category: "반팔", name: "Dazed and Confused", color: "기본" },
  { season: "2024", category: "반팔", name: "The hammer of philosophy", color: "기본" },
  { season: "2024", category: "반팔", name: "Kierkegaard", color: "기본" },
  { season: "2024", category: "반팔", name: "An Informal Organization", color: "기본" },
  { season: "2024", category: "반팔", name: "Enfant Terrible (Reglan)", color: "기본", oneSize: true },
  { season: "2024", category: "반팔", name: "Enfant Terrible", color: "기본", oneSize: true },
  { season: "2024", category: "반팔", name: "Dopamine Detox (Regaln)", color: "기본", oneSize: true },
  { season: "2024", category: "반팔", name: "Dopamine Detox", color: "기본", oneSize: true },
  { season: "2024", category: "반팔", name: "My Companion (Stratocaster)", color: "기본" },
  { season: "2024", category: "반팔", name: "My Companion (Telecaster)", color: "기본" },
  { season: "2024", category: "반팔", name: "My Companion (Les Paul)", color: "기본" },

  { season: "2024", category: "후드티", name: "(Heavy Cotton) Entelecheia Charcoal", color: "기본" },
  { season: "2024", category: "후드티", name: "(Heavy Cotton) Entelecheia Navy", color: "기본" },
  { season: "2024", category: "후드티", name: "(Heavy Cotton) The hammer of philosophy Charcoal", color: "기본" },
  { season: "2024", category: "후드티", name: "(Heavy Cotton) The hammer of philosophy Navy", color: "기본" },
  { season: "2024", category: "후드티", name: "Years and Years Gray", color: "기본" },
  { season: "2024", category: "후드티", name: "Years and Years Gray (기모)", color: "기본" },
  { season: "2024", category: "후드티", name: "Years and Years Cream", color: "기본" },
  { season: "2024", category: "후드티", name: "Years and Years Cream (기모)", color: "기본" },
  { season: "2024", category: "후드티", name: "Rock Goddesses Black", color: "기본" },
  { season: "2024", category: "후드티", name: "What We Are Crazy About", color: "기본" },
  { season: "2024", category: "후드티", name: "Distortion", color: "기본" },
  { season: "2024", category: "후드티", name: "City ​Like Roses Hoodie (Burgundy)", color: "기본" },
  { season: "2024", category: "후드티", name: "City ​Like Roses Hoodie (Black)", color: "기본" },
  { season: "2024", category: "후드티", name: "They Became Grizzlies", color: "기본" },

  { season: "2024", category: "팬츠", name: "Rock and Roll Brain pigment sweat shorts", color: "기본" },
  { season: "2024", category: "팬츠", name: "Soldier of Fortune pigment sweat shorts", color: "기본" },

  { season: "2024", category: "롱슬리브", name: "Doom and Gloom (Layered Long Sleeve)", color: "기본" },
  { season: "2024", category: "롱슬리브", name: "That Is Where It Started (Raglan)", color: "기본" },
  { season: "2024", category: "롱슬리브", name: "That Is Where It Started", color: "기본" },
  { season: "2024", category: "롱슬리브", name: "How About You Guys Try it", color: "기본" },
  { season: "2024", category: "롱슬리브", name: "Crowd Psychology", color: "기본" },
  { season: "2024", category: "롱슬리브", name: "My Companion Long sleeves (Stratocaster)", color: "기본" },
  { season: "2024", category: "롱슬리브", name: "Black House (Layered Long Sleeve)", color: "기본" },
  { season: "2024", category: "롱슬리브", name: "Psychedelic (Layered Long Sleeve)", color: "기본" },
  { season: "2024", category: "롱슬리브", name: "The Doors of Perception (Layered Long Sleeve)", color: "기본" },
  { season: "2024", category: "롱슬리브", name: "Black House (Pigment)", color: "기본" },
  { season: "2024", category: "롱슬리브", name: "Psychedelic (Pigment)", color: "기본" },
  { season: "2024", category: "롱슬리브", name: "British Invasion (Charcoal)", color: "기본", oneSize: true },
  { season: "2024", category: "롱슬리브", name: "British Invasion (White)", color: "기본", oneSize: true },
  { season: "2024", category: "롱슬리브", name: "The Doors of Perception", color: "기본", oneSize: true },
  { season: "2024", category: "롱슬리브", name: "Wish You Were Here", color: "기본", oneSize: true },
  { season: "2024", category: "롱슬리브", name: "Deep Dive In Your Mind", color: "기본", oneSize: true },
  { season: "2024", category: "롱슬리브", name: "Anti-Christ (Pigment)", color: "기본" },
  { season: "2024", category: "롱슬리브", name: "Doom and Gloom (Pigment)", color: "기본" },

  { season: "25SS", category: "아우터", name: "Doom and Gloom Hoodie Zip-Up", color: "Pigment Charcoal" },
  { season: "25SS", category: "아우터", name: "The Doors of Perception Hoodie Zip-Up", color: "Pigment Charcoal" },

  { season: "25SS", category: "맨투맨", name: "World Tour Sweatshirt", color: "Brick" },
  { season: "25SS", category: "맨투맨", name: "Rock Naissnce Sweatshirt", color: "Brick" },
  { season: "25SS", category: "맨투맨", name: "Routine Sweatshirt", color: "Brick" },
  { season: "25SS", category: "맨투맨", name: "World Tour Sweatshirt", color: "Olive" },
  { season: "25SS", category: "맨투맨", name: "Rock Naissnce Sweatshirt", color: "Olive" },
  { season: "25SS", category: "맨투맨", name: "Routine Sweatshirt", color: "Olive" },
  { season: "25SS", category: "맨투맨", name: "World Tour Sweatshirt", color: "Blue Green" },
  { season: "25SS", category: "맨투맨", name: "Rock Naissnce Sweatshirt", color: "Blue Green" },
  { season: "25SS", category: "맨투맨", name: "Routine Sweatshirt", color: "Blue Green" },

  { season: "25SS", category: "롱슬리브", name: "Routine Long Sleeves", color: "Brown" },
  { season: "25SS", category: "롱슬리브", name: "3 Reason Long Sleeves", color: "Indi Pink" },
  { season: "25SS", category: "롱슬리브", name: "Rock Family Long Sleeves", color: "Indi Pink" },
  { season: "25SS", category: "롱슬리브", name: "World Tour Long Sleeves", color: "Indi Pink" },
  { season: "25SS", category: "롱슬리브", name: "Rock Naissnce Long Sleeves", color: "Indi Pink" },
  { season: "25SS", category: "롱슬리브", name: "Routine Long Sleeves", color: "Indi Pink" },
  { season: "25SS", category: "롱슬리브", name: "3 Reason Long Sleeves", color: "White Gray" },
  { season: "25SS", category: "롱슬리브", name: "Rock Family Long Sleeves", color: "White Gray" },
  { season: "25SS", category: "롱슬리브", name: "World Tour Long Sleeves", color: "White Gray" },
  { season: "25SS", category: "롱슬리브", name: "Rock Naissnce Long Sleeves", color: "White Gray" },
  { season: "25SS", category: "롱슬리브", name: "Routine Long Sleeves", color: "White Gray" },

  { season: "25SS", category: "반팔", name: "Rock Family Indi Pink (T-shirt)", color: "기본" },
  { season: "25SS", category: "반팔", name: "World Tour Indi Pink (T-shirt)", color: "기본" },
  { season: "25SS", category: "반팔", name: "Routine White Gray (T-shirt)", color: "기본" },
  { season: "25SS", category: "반팔", name: "Rock Naissnce White Gray (T-shirt)", color: "기본" },
  { season: "25SS", category: "반팔", name: "3 Reason White Gray (T-shirt)", color: "기본" },
  { season: "25SS", category: "반팔", name: "Another Brick In The Wall", color: "기본" },
  { season: "25SS", category: "반팔", name: "Punk sisters", color: "기본" },
  { season: "25SS", category: "반팔", name: "Hells Bells", color: "기본" },

  { season: "25FW", category: "후드티", name: "Imperfection Layered Hoodie Sleeves", color: "2color" },
  { season: "25FW", category: "후드티", name: "Hells Bells Layered Hoodie Sleeves", color: "기본" },
  { season: "25FW", category: "후드티", name: "(Heavy Cotton) Favorite Genre Hoodie", color: "기본" },
  { season: "25FW", category: "후드티", name: "Defiance Eyes reglan Hoodie", color: "2color" },
  { season: "25FW", category: "후드티", name: "Grunge reglan Hoodie", color: "기본" },
  { season: "25FW", category: "후드티", name: "(Heavy Cotton) Dcrstar Hoodie", color: "기본" },
  { season: "25FW", category: "후드티", name: "[기모] Silver Dcrstar 오버핏 후드티 블랙", color: "기본" },

  { season: "25FW", category: "맨투맨", name: "(Heavy Cotton) Strawberry Fields Forever Sweatshirt", color: "3color" },
  { season: "25FW", category: "맨투맨", name: "(Heavy Cotton) Favorite Genre Sweatshirt", color: "기본" },
  { season: "25FW", category: "맨투맨", name: "Imperfection reglan sweatshirt", color: "2color" },
  { season: "25FW", category: "맨투맨", name: "Grunge reglan sweatshirt", color: "기본" },
  { season: "25FW", category: "맨투맨", name: "Overdrive reglan sweatshirt", color: "2color" },
  { season: "25FW", category: "맨투맨", name: "Zarathustra reglan sweatshirt", color: "기본" },

  { season: "공통", category: "잡화류", name: "You are not at fault", color: "기본", sizes: ["S", "M"] },
  { season: "공통", category: "잡화류", name: "C.C.C.", color: "기본", sizes: ["S", "M"] },
  { season: "공통", category: "잡화류", name: "Hell Song", color: "기본", sizes: ["M"], sizeLabel: "M" },
  { season: "공통", category: "잡화류", name: "Lizard House", color: "기본", sizes: ["M"], sizeLabel: "M" },
  { season: "공통", category: "잡화류", name: "Satisfaction Beanie", color: "기본", sizes: ["M"], sizeLabel: "M" },
  { season: "공통", category: "잡화류", name: "Electric Guitar", color: "기본", sizes: ["M"], sizeLabel: "M" },
  { season: "공통", category: "잡화류", name: "Rock Band Ball Cap (2color)", color: "브라운", sizes: ["M"], sizeLabel: "M" },
  { season: "공통", category: "잡화류", name: "Rock Band Ball Cap (2color)", color: "인디핑크", sizes: ["M"], sizeLabel: "M" },
  { season: "공통", category: "잡화류", name: "Dcrstar Ball cap", color: "기본", sizes: ["M"], sizeLabel: "M" },
  { season: "공통", category: "잡화류", name: "커트 러그", color: "기본", sizes: ["M"], sizeLabel: "M" },
  { season: "공통", category: "잡화류", name: "총기 러그", color: "기본", sizes: ["M"], sizeLabel: "M" },
  { season: "공통", category: "잡화류", name: "락의공식 머플러", color: "기본", sizes: ["M"], sizeLabel: "M" },
  { season: "공통", category: "잡화류", name: "DCR 담요", color: "기본", sizes: ["M"], sizeLabel: "M" },

  { season: "맨투맨", category: "아울렛", name: "They dont care about your future", color: "기본" },
  { season: "맨투맨", category: "아울렛", name: "(Heavy Cotton) Saint of Defiance", color: "Navy" },

  { season: "반팔", category: "아울렛", name: "The Catcher in the Rye", color: "Black", oneSize: true },
  { season: "반팔", category: "아울렛", name: "Do you know shelley", color: "기본", oneSize: true },
  { season: "반팔", category: "아울렛", name: "Rock, Stock And Two Smoking Barrels", color: "기본", oneSize: true },
  { season: "반팔", category: "아울렛", name: "Deep Dive In Your Mind", color: "기본", oneSize: true },
  { season: "반팔", category: "아울렛", name: "The Catcher in the Rye", color: "기본", oneSize: true },
  { season: "반팔", category: "아울렛", name: "NARCISSIST", color: "기본", oneSize: true },
  { season: "반팔", category: "아울렛", name: "Bullet", color: "노랑", oneSize: true },
  { season: "반팔", category: "아울렛", name: "Bullet", color: "차콜", oneSize: true },
  { season: "반팔", category: "아울렛", name: "Die Verwandlung", color: "기본", oneSize: true },
  { season: "반팔", category: "아울렛", name: "Face To Face", color: "기본", oneSize: true },
  { season: "반팔", category: "아울렛", name: "Land : Horses", color: "기본", oneSize: true },

  { season: "후드티", category: "아울렛", name: "(Heavy Cotton) House of Liberty", color: "Charcoal" },
  { season: "후드티", category: "아울렛", name: "(Heavy Cotton) House of Liberty", color: "Navy" },
  { season: "후드티", category: "아울렛", name: "(Heavy Cotton) Wild flower", color: "Charcoal" },
  { season: "후드티", category: "아울렛", name: "(Heavy Cotton) Wild flower", color: "Navy" },
  { season: "후드티", category: "아울렛", name: "(Heavy Cotton) Primordial Rockstar", color: "Charcoal" },
  { season: "후드티", category: "아울렛", name: "(Heavy Cotton) Breaking the mold", color: "Navy" },
  { season: "후드티", category: "아울렛", name: "(Heavy Cotton) Headquarters", color: "Charcoal" },
  { season: "후드티", category: "아울렛", name: "(Heavy Cotton) Headquarters", color: "Navy" },
  { season: "후드티", category: "아울렛", name: "(Heavy Cotton) Primordial Rockstar", color: "Black" },
  { season: "후드티", category: "아울렛", name: "(Heavy Cotton) Do you know Elton John", color: "Charcoal" },
  { season: "후드티", category: "아울렛", name: "(Heavy Cotton) Do you know Elton John", color: "Navy" },

  { season: "팬츠", category: "아울렛", name: "Khaki Cargo Pants", color: "기본" },
  { season: "팬츠", category: "아울렛", name: "Denim Cargo Pants", color: "기본" },
  { season: "팬츠", category: "아울렛", name: "Glitter Skirt", color: "기본" },
  { season: "팬츠", category: "아울렛", name: "Blue Skirt Pants", color: "기본" },

  { season: "26SS", category: "반팔", name: "Fame&Vanity 반팔 티셔츠", color: "차콜", initialStock: 0 },
  { season: "26SS", category: "반팔", name: "Shine In Lies Illusion 반팔 티셔츠", color: "블루" },
  { season: "26SS", category: "반팔", name: "Shine In Lies Illusion 반팔 티셔츠", color: "버건디" },
  { season: "26SS", category: "반팔", name: "Shine In Lies Illusion 반팔 티셔츠", color: "차콜" },
  { season: "26SS", category: "반팔", name: "Burning Youth Syndrome 반팔 티셔츠", color: "화이트 메란지", initialStock: 0 },
  { season: "26SS", category: "반팔", name: "Eternal Tour 반팔 티셔츠", color: "블랙" },
  { season: "26SS", category: "반팔", name: "Eternal Tour 반팔 티셔츠", color: "버건디" },
  { season: "26SS", category: "반팔", name: "Midnight Fade 반팔 티셔츠", color: "차콜", initialStock: 0 },
  { season: "26SS", category: "반팔", name: "Messy Youth 반팔 티셔츠", color: "블랙", initialStock: 0 },
  { season: "26SS", category: "반팔", name: "Rock Star The Legend 링거 반팔 티셔츠", color: "메란지" },
  { season: "26SS", category: "반팔", name: "Rock Star The Legend 링거 반팔 티셔츠", color: "크림" },
  { season: "26SS", category: "반팔", name: "27Club 세미 크롭 반팔 티셔츠", color: "메란지", initialStock: 0 },
  { season: "26SS", category: "반팔", name: "Dead Chord 세미 크롭 반팔 티셔츠", color: "브라운" },
  { season: "26SS", category: "반팔", name: "Dead Chord 세미 크롭 반팔 티셔츠", color: "차콜" },
  { season: "26SS", category: "반팔", name: "Flight 666 원 오프 숄더 보트넥 반팔 티셔츠", color: "아이보리", oneSize: true },
  { season: "26SS", category: "반팔", name: "Flight 666 원 오프 숄더 보트넥 반팔 티셔츠", color: "차콜", oneSize: true },
  { season: "26SS", category: "반팔", name: "Flight 666 원 오프 숄더 보트넥 반팔 티셔츠", color: "블랙", oneSize: true },
  { season: "26SS", category: "반팔", name: "Glam Rock 핫픽스 반팔 크롭 티셔츠", color: "블랙", oneSize: true },
  { season: "26SS", category: "반팔", name: "Glam Rock 핫픽스 반팔 크롭 티셔츠", color: "아이보리", oneSize: true },
  { season: "26SS", category: "롱슬리브", name: "Eternal Tour 롱슬리브", color: "블랙", initialStock: 0 },
  { season: "26SS", category: "롱슬리브", name: "Eternal Tour 레이어드 롱슬리브", color: "딥 버건디", initialStock: 0 },
  { season: "26SS", category: "롱슬리브", name: "Shine In Lies Illusion 롱슬리브", color: "딥버건디" },
  { season: "26SS", category: "롱슬리브", name: "Shine In Lies Illusion 롱슬리브", color: "차콜" },
  { season: "26SS", category: "롱슬리브", name: "Midnight Fade 롱슬리브", color: "차콜", initialStock: 0 },
  { season: "26SS", category: "롱슬리브", name: "Flight 666 롱슬리브", color: "브라운" },
  { season: "26SS", category: "롱슬리브", name: "Flight 666 롱슬리브", color: "블랙" },
  { season: "26SS", category: "롱슬리브", name: "Sensual flamboyance 페미닌 보트넥 롱슬리브", color: "블랙", oneSize: true, initialStock: 0 },
  { season: "26SS", category: "롱슬리브", name: "Glam Rock 핫픽스 페미닌 보트넥 롱슬리브", color: "블랙", oneSize: true },
  { season: "26SS", category: "롱슬리브", name: "Glam Rock 핫픽스 페미닌 보트넥 롱슬리브", color: "화이트", oneSize: true }
];
const SEASON_ORDER = ["초기시즌", "2024", "25SS", "25FW", "26SS"];
const CATEGORY_ORDER = ["반팔", "롱슬리브", "맨투맨", "후드티", "아우터", "팬츠", "잡화류", "기타", "아울렛"];
const PAGE_ORDER = ["manage", "overview", "alerts"];

const summaryGrid = document.getElementById("summaryGrid");
const inventoryCategories = document.getElementById("inventoryCategories");
const historyBody = document.getElementById("historyBody");
const dailySummaryBody = document.getElementById("dailySummaryBody");
const dailyCards = document.getElementById("dailyCards");
const overviewGrid = document.getElementById("overviewGrid");
const lowStockBody = document.getElementById("lowStockBody");
const lowStockSummary = document.getElementById("lowStockSummary");
const transactionDateInput = document.getElementById("transactionDate");
const dashboardDateInput = document.getElementById("dashboardDate");
const resetDateButton = document.getElementById("resetDateButton");
const prevPageButton = document.getElementById("prevPageButton");
const nextPageButton = document.getElementById("nextPageButton");
const pageLabel = document.getElementById("pageLabel");
const pageSections = document.querySelectorAll(".app-page");
const authOverlay = document.getElementById("authOverlay");
const authForm = document.getElementById("authForm");
const passwordInput = document.getElementById("passwordInput");
const authError = document.getElementById("authError");
const supabaseConfig = window.APP_CONFIG || {};
const supabaseClient = window.supabase && supabaseConfig.supabaseUrl && supabaseConfig.supabaseAnonKey
  ? window.supabase.createClient(supabaseConfig.supabaseUrl, supabaseConfig.supabaseAnonKey)
  : null;
const REMOTE_ITEMS_TABLE = "inventory_items";
const REMOTE_TRANSACTIONS_TABLE = "inventory_transactions";

const today = getToday();
transactionDateInput.value = today;
dashboardDateInput.value = today;

let state = loadState();
let expandedCategory = localStorage.getItem(EXPANDED_STORAGE_KEY) || state.ui?.expandedCategory || "";
let currentPage = localStorage.getItem(PAGE_STORAGE_KEY) || state.ui?.currentPage || "manage";
let currentSeason = localStorage.getItem(SEASON_STORAGE_KEY) || state.ui?.currentSeason || "26SS";
let remoteSubscription = null;
let isRemoteRefreshing = false;
let isAuthenticated = sessionStorage.getItem(AUTH_STORAGE_KEY) === "true";

function getHistorySnapshot() {
  return {
    page: currentPage,
    season: currentSeason,
    category: expandedCategory
  };
}

function getHistoryUrl(snapshot) {
  return `#${snapshot.page}`;
}

function syncBrowserHistory(mode = "replace") {
  const snapshot = getHistorySnapshot();
  const nextUrl = getHistoryUrl(snapshot);

  if (mode === "push") {
    window.history.pushState(snapshot, "", nextUrl);
    return;
  }

  window.history.replaceState(snapshot, "", nextUrl);
}

function getToday() {
  return new Date().toLocaleDateString("en-CA");
}

function createInitialState() {
  return {
    items: PRODUCT_DEFINITIONS.map((product) => createItemFromDefinition(product)),
    transactions: [],
    ui: {
      currentPage: "manage",
      currentSeason: "26SS",
      expandedCategory: ""
    }
  };
}

function getInlineSizeInfo(name, category, oneSize) {
  if (!oneSize || category !== "잡화류") {
    return {
      displayName: name,
      sizeLabel: oneSize ? "원사이즈" : ""
    };
  }

  const match = name.match(/^(.*)\s+(S\/M|M)$/);
  if (!match) {
    return {
      displayName: name,
      sizeLabel: "원사이즈"
    };
  }

  return {
    displayName: match[1].trim(),
    sizeLabel: match[2]
  };
}

function getProductSizes(product) {
  if (Array.isArray(product.sizes) && product.sizes.length > 0) {
    return product.sizes;
  }

  if (product.oneSize) {
    return [ONE_SIZE];
  }

  return SIZES;
}

function inferItemConfig(meta) {
  const targetName = meta.baseName || meta.name?.replace(/\s*\([^)]+\)\s*$/, "") || "";
  const targetColor = meta.color || meta.name?.match(/\(([^)]+)\)\s*$/)?.[1] || "기본";
  const matchedProduct = PRODUCT_DEFINITIONS.find((product) => {
    const productSizeInfo = getInlineSizeInfo(product.name, product.category, Boolean(product.oneSize));
    return product.season === meta.season
      && product.category === meta.category
      && productSizeInfo.displayName === targetName
      && product.color === targetColor;
  });

  const sizes = matchedProduct ? getProductSizes(matchedProduct) : (
    Array.isArray(meta.sizes) && meta.sizes.length > 0
      ? meta.sizes
      : (meta.oneSize ? [ONE_SIZE] : SIZES)
  );

  return {
    sizes,
    sizeLabel: meta.sizeLabel || matchedProduct?.sizeLabel || (sizes.length === 1 ? sizes[0] : sizes.join("/"))
  };
}

function isDeprecatedItem(item) {
  const baseName = item.baseName || item.name?.replace(/\s*\([^)]+\)\s*$/, "") || "";
  return item.season === "공통"
    && item.category === "잡화류"
    && baseName === "Rock Band Ball Cap (2color)"
    && (item.color === "기본" || !item.color);
}

function createItemFromDefinition(product, index) {
  const sizeInfo = getInlineSizeInfo(product.name, product.category, Boolean(product.oneSize));
  const productSizes = getProductSizes(product);
  const slug = `${product.season}-${product.category}-${product.name}-${product.color}`
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return {
    id: `item-${slug}`,
    name: product.color === "기본" ? sizeInfo.displayName : `${sizeInfo.displayName} (${product.color})`,
    baseName: sizeInfo.displayName,
    familyName: getFamilyName(sizeInfo.displayName),
    color: product.color,
    season: product.season,
    category: product.category,
    oneSize: productSizes.length === 1 && productSizes[0] === ONE_SIZE,
    sizes: productSizes,
    sizeLabel: product.sizeLabel || sizeInfo.sizeLabel,
    initialStock: createStockMap(product.initialStock ?? DEFAULT_STOCK, productSizes),
    displayOrder: index
  };
}

function getFamilyName(name) {
  return name.replace(/\s*\([^)]*\)\s*$/g, "").trim();
}

function isOneSizeProduct(itemOrName) {
  if (typeof itemOrName === "object" && itemOrName) {
    const sizes = Array.isArray(itemOrName.sizes) && itemOrName.sizes.length > 0
      ? itemOrName.sizes
      : (itemOrName.oneSize ? [ONE_SIZE] : SIZES);
    return sizes.length === 1 && sizes[0] === ONE_SIZE;
  }

  return PRODUCT_DEFINITIONS.some((product) => {
    const productSizes = getProductSizes(product);
    return productSizes.length === 1
      && productSizes[0] === ONE_SIZE
      && `${product.name} (${product.color})` === itemOrName;
  });
}

function getItemSizes(itemOrName) {
  if (typeof itemOrName === "object" && itemOrName) {
    if (Array.isArray(itemOrName.sizes) && itemOrName.sizes.length > 0) {
      return itemOrName.sizes;
    }

    return isOneSizeProduct(itemOrName) ? [ONE_SIZE] : SIZES;
  }

  const matchedProduct = PRODUCT_DEFINITIONS.find((product) => {
    const sizeInfo = getInlineSizeInfo(product.name, product.category, Boolean(product.oneSize));
    const displayName = product.color === "기본" ? sizeInfo.displayName : `${sizeInfo.displayName} (${product.color})`;
    return displayName === itemOrName;
  });

  return matchedProduct ? getProductSizes(matchedProduct) : SIZES;
}

function getSizeLabel(size, itemMeta) {
  return size === ONE_SIZE ? itemMeta?.sizeLabel || "원사이즈" : size;
}

function createStockMap(value = 0, sizeConfig = false) {
  const sizes = Array.isArray(sizeConfig)
    ? sizeConfig
    : (sizeConfig ? [ONE_SIZE] : SIZES);
  return Object.fromEntries(sizes.map((size) => [size, value]));
}

function normalizeStockMap(stock, itemMeta) {
  const sizes = getItemSizes(itemMeta);

  if (sizes.length === 1 && sizes[0] === ONE_SIZE) {
    if (typeof stock === "number") {
      return createStockMap(stock, true);
    }

    const hasLegacySizes = stock && (stock.M !== undefined || stock.L !== undefined);
    const legacyTotal = Number(stock?.M ?? 0) + Number(stock?.L ?? 0);
    const oneSizeValue = Number(stock?.[ONE_SIZE] ?? (hasLegacySizes ? legacyTotal : DEFAULT_STOCK));
    return {
      [ONE_SIZE]: Number.isFinite(oneSizeValue) ? oneSizeValue : DEFAULT_STOCK
    };
  }

  if (sizes.length === 1) {
    const size = sizes[0];
    if (typeof stock === "number") {
      return createStockMap(stock, sizes);
    }

    const sizeValue = Number(stock?.[size] ?? stock?.[ONE_SIZE] ?? DEFAULT_STOCK);
    return {
      [size]: Number.isFinite(sizeValue) ? sizeValue : DEFAULT_STOCK
    };
  }

  if (typeof stock === "number") {
    return createStockMap(stock, sizes);
  }

  return Object.fromEntries(sizes.map((size) => {
    const value = Number(stock?.[size] ?? DEFAULT_STOCK);
    return [size, Number.isFinite(value) ? value : DEFAULT_STOCK];
  }));
}

function categorizeProduct(name) {
  if (name.includes("반팔")) {
    return "반팔";
  }

  if (name.includes("롱슬리브")) {
    return "롱슬리브";
  }

  return "기타";
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return createInitialState();
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.items) || !Array.isArray(parsed.transactions)) {
      return createInitialState();
    }

    const items = parsed.items.map((item) => {
      const normalizedName = item.name?.replace("핫픽스  반팔", "핫픽스 반팔") || item.name;
      const cleanedName = normalizedName?.replace(/\s*\(기본\)\s*$/, "") || normalizedName;
      const normalizedCategory = item.category || categorizeProduct(cleanedName);
      const sizeInfo = getInlineSizeInfo(
        item.baseName || cleanedName.replace(/\s*\([^)]+\)\s*$/, ""),
        normalizedCategory,
        Boolean(item.oneSize)
      );
      const inferredConfig = inferItemConfig({
        ...item,
        season: item.season || "26SS",
        category: normalizedCategory,
        baseName: sizeInfo.displayName,
        name: cleanedName
      });
      return {
        ...item,
        name: item.color && item.color !== "기본" ? `${sizeInfo.displayName} (${item.color})` : sizeInfo.displayName,
        baseName: sizeInfo.displayName,
        familyName: item.familyName || getFamilyName(sizeInfo.displayName),
        color: item.color || cleanedName.match(/\(([^)]+)\)\s*$/)?.[1] || "기본",
        season: item.season || "26SS",
        oneSize: inferredConfig.sizes.length === 1 && inferredConfig.sizes[0] === ONE_SIZE,
        sizes: inferredConfig.sizes,
        sizeLabel: inferredConfig.sizeLabel,
        displayOrder: Number.isInteger(item.displayOrder) ? item.displayOrder : PRODUCT_DEFINITIONS.findIndex((product) => {
          const targetName = sizeInfo.displayName;
          const targetColor = item.color || cleanedName.match(/\(([^)]+)\)\s*$/)?.[1] || "기본";
          const productSizeInfo = getInlineSizeInfo(product.name, product.category, Boolean(product.oneSize));
          return product.season === (item.season || "26SS")
            && product.category === normalizedCategory
            && productSizeInfo.displayName === targetName
            && product.color === targetColor;
        }),
        initialStock: normalizeStockMap(item.initialStock, { ...item, sizes: inferredConfig.sizes, oneSize: inferredConfig.sizes.length === 1 && inferredConfig.sizes[0] === ONE_SIZE }),
        category: normalizedCategory
      };
    }).filter((item) => !isDeprecatedItem(item));

    const existingNames = new Set(items.map((item) => item.name));
    const missingItems = PRODUCT_DEFINITIONS
      .map((product) => createItemFromDefinition(product))
      .filter((item) => !existingNames.has(item.name));

    return {
      items: [...items, ...missingItems],
      transactions: parsed.transactions.map((transaction) => {
        const allItems = [...items, ...missingItems];
        const item = allItems.find((entry) => entry.id === transaction.itemId);
        return {
          ...transaction,
          size: getItemSizes(item)[0] === ONE_SIZE ? ONE_SIZE : (transaction.size || "M")
        };
      }),
      ui: {
        currentPage: parsed.ui?.currentPage || "manage",
        currentSeason: parsed.ui?.currentSeason || "26SS",
        expandedCategory: parsed.ui?.expandedCategory || ""
      }
    };
  } catch (error) {
    console.error("Failed to load state", error);
    return createInitialState();
  }
}

function saveState() {
  state.ui = {
    currentPage,
    currentSeason,
    expandedCategory
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  localStorage.setItem(PAGE_STORAGE_KEY, currentPage);
  localStorage.setItem(SEASON_STORAGE_KEY, currentSeason);
  localStorage.setItem(EXPANDED_STORAGE_KEY, expandedCategory);
}

function lockApp() {
  document.body.classList.add("is-locked");
  authOverlay.hidden = false;
}

function unlockApp() {
  isAuthenticated = true;
  sessionStorage.setItem(AUTH_STORAGE_KEY, "true");
  document.body.classList.remove("is-locked");
  authOverlay.hidden = true;
}

function isRemoteMode() {
  return Boolean(supabaseClient);
}

function mapItemToRemoteRow(item) {
  return {
    id: item.id,
    name: item.name,
    base_name: item.baseName,
    color: item.color,
    season: item.season,
    category: item.category,
    one_size: Boolean(item.oneSize),
    initial_stock: item.initialStock,
    updated_at: new Date().toISOString()
  };
}

function mapItemFromRemoteRow(row) {
  const sizeInfo = getInlineSizeInfo(row.base_name || row.name, row.category, Boolean(row.one_size));
  const inferredConfig = inferItemConfig({
    season: row.season,
    category: row.category,
    baseName: sizeInfo.displayName,
    color: row.color,
    oneSize: Boolean(row.one_size)
  });
  return {
    id: row.id,
    name: row.color && row.color !== "기본" ? `${sizeInfo.displayName} (${row.color})` : sizeInfo.displayName,
    baseName: sizeInfo.displayName,
    color: row.color,
    season: row.season,
    category: row.category,
    oneSize: inferredConfig.sizes.length === 1 && inferredConfig.sizes[0] === ONE_SIZE,
    sizes: inferredConfig.sizes,
    sizeLabel: inferredConfig.sizeLabel,
    initialStock: normalizeStockMap(row.initial_stock, { sizes: inferredConfig.sizes, oneSize: inferredConfig.sizes.length === 1 && inferredConfig.sizes[0] === ONE_SIZE })
  };
}

function mapTransactionToRemoteRow(transaction) {
  return {
    id: transaction.id,
    item_id: transaction.itemId,
    size: transaction.size,
    type: transaction.type,
    quantity: transaction.quantity,
    date: transaction.date,
    created_at: transaction.createdAt
  };
}

function mapTransactionFromRemoteRow(row) {
  return {
    id: row.id,
    itemId: row.item_id,
    size: row.size,
    type: row.type,
    quantity: row.quantity,
    date: row.date,
    createdAt: row.created_at
  };
}

async function syncItemsToRemote(items) {
  if (!isRemoteMode()) {
    return;
  }

  const { error } = await supabaseClient
    .from(REMOTE_ITEMS_TABLE)
    .upsert(items.map(mapItemToRemoteRow), { onConflict: "id" });

  if (error) {
    throw error;
  }
}

async function insertTransactionsToRemote(transactions) {
  if (!isRemoteMode() || transactions.length === 0) {
    return;
  }

  const { error } = await supabaseClient
    .from(REMOTE_TRANSACTIONS_TABLE)
    .upsert(transactions.map(mapTransactionToRemoteRow), { onConflict: "id" });

  if (error) {
    throw error;
  }
}

async function deleteTransactionsFromRemote(ids) {
  if (!isRemoteMode() || ids.length === 0) {
    return;
  }

  const { error } = await supabaseClient
    .from(REMOTE_TRANSACTIONS_TABLE)
    .delete()
    .in("id", ids);

  if (error) {
    throw error;
  }
}

async function loadRemoteState() {
  const { data: itemRows, error: itemsError } = await supabaseClient
    .from(REMOTE_ITEMS_TABLE)
    .select("*")
    .order("season", { ascending: true })
    .order("category", { ascending: true })
    .order("base_name", { ascending: true })
    .order("color", { ascending: true });

  if (itemsError) {
    throw itemsError;
  }

  let items = (itemRows || []).map(mapItemFromRemoteRow).filter((item) => !isDeprecatedItem(item));

  if (items.length === 0) {
    const seeded = createInitialState();
    await syncItemsToRemote(seeded.items);
    items = seeded.items;
  } else {
    const existingNames = new Set(items.map((item) => item.name));
    const missingItems = PRODUCT_DEFINITIONS
      .map((product) => createItemFromDefinition(product))
      .filter((item) => !existingNames.has(item.name));

    if (missingItems.length > 0) {
      await syncItemsToRemote(missingItems);
      items = [...items, ...missingItems];
    }
  }

  const { data: transactionRows, error: transactionsError } = await supabaseClient
    .from(REMOTE_TRANSACTIONS_TABLE)
    .select("*")
    .order("created_at", { ascending: false });

  if (transactionsError) {
    throw transactionsError;
  }

  return {
    items,
    transactions: (transactionRows || []).map(mapTransactionFromRemoteRow),
    ui: state.ui || createInitialState().ui
  };
}

async function refreshRemoteState() {
  if (!isRemoteMode() || isRemoteRefreshing) {
    return;
  }

  isRemoteRefreshing = true;

  try {
    const remoteState = await loadRemoteState();
    state = {
      ...remoteState,
      ui: {
        currentPage,
        currentSeason,
        expandedCategory
      }
    };
    render();
  } catch (error) {
    console.error("Failed to refresh Supabase state", error);
  } finally {
    isRemoteRefreshing = false;
  }
}

function subscribeRemoteState() {
  if (!isRemoteMode() || remoteSubscription) {
    return;
  }

  remoteSubscription = supabaseClient
    .channel("inventory-sync")
    .on("postgres_changes", { event: "*", schema: "public", table: REMOTE_ITEMS_TABLE }, () => {
      void refreshRemoteState();
    })
    .on("postgres_changes", { event: "*", schema: "public", table: REMOTE_TRANSACTIONS_TABLE }, () => {
      void refreshRemoteState();
    })
    .subscribe();
}

function getCurrentStock(itemId, size) {
  const item = state.items.find((entry) => entry.id === itemId);
  const base = item?.initialStock?.[size] ?? 0;
  const delta = state.transactions.reduce((sum, transaction) => {
    if (transaction.itemId !== itemId || transaction.size !== size) {
      return sum;
    }

    return sum + (transaction.type === "in" ? transaction.quantity : -transaction.quantity);
  }, 0);

  return base + delta;
}

function getAvailableSeasons() {
  const seasons = new Set(SEASON_ORDER);
  state.items.forEach((item) => seasons.add(item.season));
  return [...seasons];
}

function getAvailableCategories() {
  const categories = new Set(CATEGORY_ORDER);
  state.items.forEach((item) => categories.add(item.category));
  return [...categories].filter((category) => state.items.some((item) => item.category === category));
}

function getAvailableSeasonsForCategory(category) {
  return getAvailableSeasons().filter((season) => (
    state.items.some((item) => item.category === category && item.season === season)
  ));
}

function ensureCurrentSeason() {
  const legacyExpandedCategory = getAvailableSeasons().find((season) => expandedCategory.startsWith(`${season}-`));
  if (legacyExpandedCategory) {
    expandedCategory = expandedCategory.slice(legacyExpandedCategory.length + 1);
  }

  const categories = getAvailableCategories();
  if (!categories.includes(expandedCategory)) {
    expandedCategory = categories[0] || "";
  }

  if (!expandedCategory) {
    return;
  }

  const seasons = getAvailableSeasonsForCategory(expandedCategory);
  if (!seasons.includes(currentSeason)) {
    currentSeason = "";
  }
}

function getItemTotalStock(itemId) {
  const item = state.items.find((entry) => entry.id === itemId);
  return getItemSizes(item).reduce((sum, size) => sum + getCurrentStock(itemId, size), 0);
}

function sortItemsForDisplay(items) {
  return [...items].sort((a, b) => {
    const aOrder = Number.isInteger(a.displayOrder) && a.displayOrder >= 0 ? a.displayOrder : Number.MAX_SAFE_INTEGER;
    const bOrder = Number.isInteger(b.displayOrder) && b.displayOrder >= 0 ? b.displayOrder : Number.MAX_SAFE_INTEGER;
    return aOrder - bOrder;
  });
}

function getRowGroupClass(previousItem, currentItem, season, category) {
  if (!previousItem) {
    return "";
  }

  if (season === "25SS" && (category === "롱슬리브" || category === "맨투맨")) {
    return previousItem.color !== currentItem.color ? "color-group-start" : "";
  }

  return previousItem.familyName !== currentItem.familyName ? "design-group-start" : "";
}

function getSeasonBlocksForCategory(category) {
  return getAvailableSeasons().map((season) => ({
    season,
    items: sortItemsForDisplay(
      state.items.filter((item) => item.category === category && item.season === season)
    )
  })).filter((group) => group.items.length > 0);
}

function getLatestTransaction(itemId) {
  return state.transactions
    .filter((transaction) => transaction.itemId === itemId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0];
}

function formatDate(dateString) {
  if (!dateString) {
    return "-";
  }

  const date = new Date(`${dateString}T00:00:00`);
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function buildSummaryCards() {
  const totalCurrentStock = state.items.reduce((sum, item) => sum + getItemTotalStock(item.id), 0);
  const todayTransactions = state.transactions.filter((transaction) => transaction.date === today);
  const todayInbound = todayTransactions
    .filter((transaction) => transaction.type === "in")
    .reduce((sum, transaction) => sum + transaction.quantity, 0);
  const todayOutbound = todayTransactions
    .filter((transaction) => transaction.type === "out")
    .reduce((sum, transaction) => sum + transaction.quantity, 0);
  const lowStockCount = state.items.filter((item) => getItemSizes(item).some((size) => getCurrentStock(item.id, size) <= 5)).length;
  const seasonBreakdown = [
    ...SEASON_ORDER
      .filter((season) => !["공통", "반팔", "맨투맨", "후드티", "팬츠"].includes(season))
      .map((season) => {
        const total = state.items
          .filter((item) => item.category !== "잡화류" && item.category !== "아울렛" && item.season === season)
          .reduce((sum, item) => sum + getItemTotalStock(item.id), 0);
        return { label: season, total };
      })
      .filter((entry) => entry.total > 0),
    {
      label: "잡화류",
      total: state.items
        .filter((item) => item.category === "잡화류")
        .reduce((sum, item) => sum + getItemTotalStock(item.id), 0)
    },
    {
      label: "아울렛",
      total: state.items
        .filter((item) => item.category === "아울렛")
        .reduce((sum, item) => sum + getItemTotalStock(item.id), 0)
    }
  ].filter((entry) => entry.total > 0);
  const categoryBreakdown = CATEGORY_ORDER.map((category) => ({
    label: category,
    total: state.items.filter((item) => item.category === category).length
  })).filter((entry) => entry.total > 0);

  const cards = [
    {
      label: "등록 품목",
      value: `${state.items.length}개`,
      note: "전체 시즌 기준 품목 수",
      breakdown: categoryBreakdown
    },
    {
      label: "현재 총재고",
      value: `${totalCurrentStock}개`,
      note: "전체 시즌 합산 기준",
      breakdown: seasonBreakdown
    },
    {
      label: "오늘 입고",
      value: `+${todayInbound}`,
      note: `${formatDate(today)} 기준`
    },
    {
      label: "오늘 출고",
      value: `-${todayOutbound}`,
      note: lowStockCount > 0 ? `재고 주의 ${lowStockCount}개 품목` : "재고 주의 품목 없음"
    }
  ];

  summaryGrid.innerHTML = cards.map((card) => `
    <article class="summary-card">
      <div class="summary-label">${card.label}</div>
      <div class="summary-value">${card.value}</div>
      <div class="summary-note">${card.note}</div>
      ${card.breakdown ? `
        <div class="summary-breakdown">
          ${card.breakdown.map((entry) => `<div class="summary-breakdown-item">${entry.label}: ${entry.total}개</div>`).join("")}
        </div>
      ` : ""}
    </article>
  `).join("");
}

function buildManageRows(items, season, category) {
  const tableSizes = category === "잡화류" ? ["S", "M"] : ["M", "L"];
  const renderBlockedCell = (cellClass, groupStart = false) => `
    <td class="${cellClass} blocked-cell ${groupStart ? "group-start" : ""}">
      <span class="blocked-slot">불가</span>
    </td>
  `;

  return items.map((item, index) => {
    const previousItem = items[index - 1];
    const rowClass = getRowGroupClass(previousItem, item, season, category);
    const itemSizes = getItemSizes(item);
    const isSingleSize = itemSizes.length === 1;
    const singleSize = isSingleSize ? itemSizes[0] : null;
    const singleSizeLabel = isSingleSize ? getSizeLabel(singleSize, item) : "";
    const latestTransaction = getLatestTransaction(item.id);
    const latestLabel = latestTransaction
      ? `${formatDate(latestTransaction.date)} · ${getSizeLabel(latestTransaction.size, item)} ${latestTransaction.type === "in" ? "입고" : "출고"} ${latestTransaction.quantity}`
      : "기록 없음";

    const initialCells = isSingleSize ? `
      <td class="cell-initial group-start" colspan="2">
        <div class="onesize-cell">
          <span class="onesize-label">${singleSizeLabel}</span>
          <input class="row-input" type="number" min="0" step="1" value="${item.initialStock[singleSize]}" data-input-type="initial" data-size="${singleSize}" data-item-id="${item.id}">
        </div>
      </td>
    ` : `
      <td class="cell-initial group-start">
        <input class="row-input" type="number" min="0" step="1" value="${item.initialStock[tableSizes[0]] ?? 0}" data-input-type="initial" data-size="${tableSizes[0]}" data-item-id="${item.id}">
      </td>
      <td class="cell-initial">
        <input class="row-input" type="number" min="0" step="1" value="${item.initialStock[tableSizes[1]] ?? 0}" data-input-type="initial" data-size="${tableSizes[1]}" data-item-id="${item.id}">
      </td>
    `;

    const inCells = isSingleSize ? `
      <td class="cell-in group-start" colspan="2">
        <div class="onesize-cell">
          <span class="onesize-label">${singleSizeLabel}</span>
          <input class="row-input" type="number" min="0" step="1" value="" data-input-type="in" data-size="${singleSize}" data-item-id="${item.id}" placeholder="0">
        </div>
      </td>
    ` : `
      <td class="cell-in group-start">
        <input class="row-input" type="number" min="0" step="1" value="" data-input-type="in" data-size="${tableSizes[0]}" data-item-id="${item.id}" placeholder="0">
      </td>
      <td class="cell-in">
        <input class="row-input" type="number" min="0" step="1" value="" data-input-type="in" data-size="${tableSizes[1]}" data-item-id="${item.id}" placeholder="0">
      </td>
    `;

    const outCells = isSingleSize ? `
      <td class="cell-out group-start" colspan="2">
        <div class="onesize-cell">
          <span class="onesize-label">${singleSizeLabel}</span>
          <input class="row-input" type="number" min="0" step="1" value="" data-input-type="out" data-size="${singleSize}" data-item-id="${item.id}" placeholder="0">
        </div>
      </td>
    ` : `
      <td class="cell-out group-start">
        <input class="row-input" type="number" min="0" step="1" value="" data-input-type="out" data-size="${tableSizes[0]}" data-item-id="${item.id}" placeholder="0">
      </td>
      <td class="cell-out">
        <input class="row-input" type="number" min="0" step="1" value="" data-input-type="out" data-size="${tableSizes[1]}" data-item-id="${item.id}" placeholder="0">
      </td>
    `;

    const stockCells = isSingleSize ? `
      <td class="cell-stock group-start" colspan="3">
        <div class="onesize-stock">
          <span class="onesize-label">${singleSizeLabel}</span>
          <span class="stock-chip ${getCurrentStock(item.id, singleSize) <= 5 ? "low" : ""}">${getCurrentStock(item.id, singleSize)}</span>
        </div>
      </td>
    ` : `
      <td class="cell-stock group-start">
        <span class="stock-chip ${getCurrentStock(item.id, tableSizes[0]) <= 5 ? "low" : ""}">${getCurrentStock(item.id, tableSizes[0])}</span>
      </td>
      <td class="cell-stock">
        <span class="stock-chip ${getCurrentStock(item.id, tableSizes[1]) <= 5 ? "low" : ""}">${getCurrentStock(item.id, tableSizes[1])}</span>
      </td>
      <td class="cell-stock">
        <span class="stock-chip ${getItemTotalStock(item.id) <= 10 ? "low" : ""}">${getItemTotalStock(item.id)}</span>
      </td>
    `;

    return `
      <tr class="${rowClass}">
        <td class="inventory-name">${item.name}</td>
        ${initialCells}
        <td class="cell-initial">
          <button class="secondary-button save-button" type="button" data-action="save-initial" data-item-id="${item.id}">저장</button>
        </td>
        ${inCells}
        ${outCells}
        ${stockCells}
        <td>
          <span class="movement-chip">${latestLabel}</span>
        </td>
        <td>
          <button class="action-button" type="button" data-action="apply" data-item-id="${item.id}">입출고 반영</button>
        </td>
      </tr>
    `;
  }).join("");
}

function buildManageRowsV2(items, season, category) {
  const tableSizes = category === "잡화류" ? ["S", "M"] : ["M", "L"];
  const renderBlockedCell = (cellClass, groupStart = false) => `
    <td class="${cellClass} blocked-cell ${groupStart ? "group-start" : ""}">
      <span class="blocked-slot">불가</span>
    </td>
  `;

  return items.map((item, index) => {
    const previousItem = items[index - 1];
    const rowClass = getRowGroupClass(previousItem, item, season, category);
    const itemSizes = getItemSizes(item);
    const isSingleSize = itemSizes.length === 1;
    const singleSize = isSingleSize ? itemSizes[0] : null;
    const latestTransaction = getLatestTransaction(item.id);
    const latestLabel = latestTransaction
      ? `${formatDate(latestTransaction.date)} · ${getSizeLabel(latestTransaction.size, item)} ${latestTransaction.type === "in" ? "입고" : "출고"} ${latestTransaction.quantity}`
      : "기록 없음";
    const usesBlockedLayout = category === "잡화류" && isSingleSize && singleSize !== ONE_SIZE && tableSizes.includes(singleSize);

    let initialCells = "";
    let inCells = "";
    let outCells = "";
    let stockCells = "";

    if (usesBlockedLayout) {
      const blockedFirst = singleSize === tableSizes[1];
      const activeSize = singleSize;
      const renderInputCell = (cellClass, groupStart, inputType, value = "", placeholder = "0") => `
        <td class="${cellClass} ${groupStart ? "group-start" : ""}">
          <input class="row-input" type="number" min="0" step="1" value="${value}" data-input-type="${inputType}" data-size="${activeSize}" data-item-id="${item.id}" placeholder="${placeholder}">
        </td>
      `;
      const renderStockCell = (groupStart = false) => `
        <td class="cell-stock ${groupStart ? "group-start" : ""}">
          <span class="stock-chip ${getCurrentStock(item.id, activeSize) <= 5 ? "low" : ""}">${getCurrentStock(item.id, activeSize)}</span>
        </td>
      `;

      initialCells = blockedFirst
        ? `${renderBlockedCell("cell-initial", true)}${renderInputCell("cell-initial", false, "initial", item.initialStock[activeSize], "0")}`
        : `${renderInputCell("cell-initial", true, "initial", item.initialStock[activeSize], "0")}${renderBlockedCell("cell-initial", false)}`;

      inCells = blockedFirst
        ? `${renderBlockedCell("cell-in", true)}${renderInputCell("cell-in", false, "in", "", "0")}`
        : `${renderInputCell("cell-in", true, "in", "", "0")}${renderBlockedCell("cell-in", false)}`;

      outCells = blockedFirst
        ? `${renderBlockedCell("cell-out", true)}${renderInputCell("cell-out", false, "out", "", "0")}`
        : `${renderInputCell("cell-out", true, "out", "", "0")}${renderBlockedCell("cell-out", false)}`;

      stockCells = blockedFirst
        ? `${renderBlockedCell("cell-stock", true)}${renderStockCell(false)}<td class="cell-stock"><span class="stock-chip ${getItemTotalStock(item.id) <= 10 ? "low" : ""}">${getItemTotalStock(item.id)}</span></td>`
        : `${renderStockCell(true)}${renderBlockedCell("cell-stock", false)}<td class="cell-stock"><span class="stock-chip ${getItemTotalStock(item.id) <= 10 ? "low" : ""}">${getItemTotalStock(item.id)}</span></td>`;
    } else if (isSingleSize) {
      initialCells = `
        <td class="cell-initial group-start" colspan="2">
          <div class="onesize-cell">
            <span class="onesize-label">${getSizeLabel(singleSize, item)}</span>
            <input class="row-input" type="number" min="0" step="1" value="${item.initialStock[singleSize]}" data-input-type="initial" data-size="${singleSize}" data-item-id="${item.id}">
          </div>
        </td>
      `;

      inCells = `
        <td class="cell-in group-start" colspan="2">
          <div class="onesize-cell">
            <span class="onesize-label">${getSizeLabel(singleSize, item)}</span>
            <input class="row-input" type="number" min="0" step="1" value="" data-input-type="in" data-size="${singleSize}" data-item-id="${item.id}" placeholder="0">
          </div>
        </td>
      `;

      outCells = `
        <td class="cell-out group-start" colspan="2">
          <div class="onesize-cell">
            <span class="onesize-label">${getSizeLabel(singleSize, item)}</span>
            <input class="row-input" type="number" min="0" step="1" value="" data-input-type="out" data-size="${singleSize}" data-item-id="${item.id}" placeholder="0">
          </div>
        </td>
      `;

      stockCells = `
        <td class="cell-stock group-start" colspan="3">
          <div class="onesize-stock">
            <span class="onesize-label">${getSizeLabel(singleSize, item)}</span>
            <span class="stock-chip ${getCurrentStock(item.id, singleSize) <= 5 ? "low" : ""}">${getCurrentStock(item.id, singleSize)}</span>
          </div>
        </td>
      `;
    } else {
      initialCells = `
        <td class="cell-initial group-start">
          <input class="row-input" type="number" min="0" step="1" value="${item.initialStock[tableSizes[0]] ?? 0}" data-input-type="initial" data-size="${tableSizes[0]}" data-item-id="${item.id}">
        </td>
        <td class="cell-initial">
          <input class="row-input" type="number" min="0" step="1" value="${item.initialStock[tableSizes[1]] ?? 0}" data-input-type="initial" data-size="${tableSizes[1]}" data-item-id="${item.id}">
        </td>
      `;

      inCells = `
        <td class="cell-in group-start">
          <input class="row-input" type="number" min="0" step="1" value="" data-input-type="in" data-size="${tableSizes[0]}" data-item-id="${item.id}" placeholder="0">
        </td>
        <td class="cell-in">
          <input class="row-input" type="number" min="0" step="1" value="" data-input-type="in" data-size="${tableSizes[1]}" data-item-id="${item.id}" placeholder="0">
        </td>
      `;

      outCells = `
        <td class="cell-out group-start">
          <input class="row-input" type="number" min="0" step="1" value="" data-input-type="out" data-size="${tableSizes[0]}" data-item-id="${item.id}" placeholder="0">
        </td>
        <td class="cell-out">
          <input class="row-input" type="number" min="0" step="1" value="" data-input-type="out" data-size="${tableSizes[1]}" data-item-id="${item.id}" placeholder="0">
        </td>
      `;

      stockCells = `
        <td class="cell-stock group-start">
          <span class="stock-chip ${getCurrentStock(item.id, tableSizes[0]) <= 5 ? "low" : ""}">${getCurrentStock(item.id, tableSizes[0])}</span>
        </td>
        <td class="cell-stock">
          <span class="stock-chip ${getCurrentStock(item.id, tableSizes[1]) <= 5 ? "low" : ""}">${getCurrentStock(item.id, tableSizes[1])}</span>
        </td>
        <td class="cell-stock">
          <span class="stock-chip ${getItemTotalStock(item.id) <= 10 ? "low" : ""}">${getItemTotalStock(item.id)}</span>
        </td>
      `;
    }

    return `
      <tr class="${rowClass}">
        <td class="inventory-name">${item.name}</td>
        ${initialCells}
        <td class="cell-initial">
          <button class="secondary-button save-button" type="button" data-action="save-initial" data-item-id="${item.id}">저장</button>
        </td>
        ${inCells}
        ${outCells}
        ${stockCells}
        <td>
          <span class="movement-chip">${latestLabel}</span>
        </td>
        <td>
          <button class="action-button" type="button" data-action="apply" data-item-id="${item.id}">입출고 반영</button>
        </td>
      </tr>
    `;
  }).join("");
}

function buildInventoryTable() {
  const groupedItems = CATEGORY_ORDER.map((category) => {
    const seasonBlocks = getSeasonBlocksForCategory(category);
    const items = seasonBlocks.flatMap((group) => group.items);
    return { category, seasonBlocks, items };
  }).filter((group) => group.items.length > 0);

  const grandTotal = groupedItems.reduce(
    (sum, group) => sum + group.items.reduce((groupSum, item) => groupSum + getItemTotalStock(item.id), 0),
    0
  );
  const activeCategory = groupedItems.find((group) => group.category === expandedCategory) || groupedItems[0];
  const isAccessoryCategory = activeCategory?.category === "잡화류";
  const isOutletCategory = activeCategory?.category === "아울렛";
  const tableSizes = isAccessoryCategory ? ["S", "M"] : ["M", "L"];
  const activeSeasonBlock = isAccessoryCategory
    ? { season: "전체", items: activeCategory?.items || [] }
    : activeCategory?.seasonBlocks.find((seasonBlock) => seasonBlock.season === currentSeason) || null;
  const activeRows = activeSeasonBlock
    ? buildManageRowsV2(activeSeasonBlock.items, activeSeasonBlock.season, activeCategory.category)
    : "";
  const activeCategoryTotal = activeCategory
    ? activeCategory.items.reduce((sum, item) => sum + getItemTotalStock(item.id), 0)
    : 0;
  const activeSeasonTotal = activeSeasonBlock
    ? activeSeasonBlock.items.reduce((sum, item) => sum + getItemTotalStock(item.id), 0)
    : 0;

  const categoryTabs = groupedItems.map((group) => `
    <button
      class="season-tab ${group.category === activeCategory?.category ? "is-active" : ""}"
      type="button"
      data-action="select-category"
      data-category="${group.category}"
    >${group.category}</button>
  `).join("");

  const seasonTabs = isAccessoryCategory ? "" : (activeCategory?.seasonBlocks || []).map((seasonBlock) => `
    <button
      class="season-tab ${seasonBlock.season === activeSeasonBlock?.season ? "is-active" : ""}"
      type="button"
      data-action="select-season"
      data-season="${seasonBlock.season}"
    >${seasonBlock.season}</button>
  `).join("");

  inventoryCategories.innerHTML = `
    <section class="season-block">
      <div class="season-header">
        <div>
          <p class="eyebrow">Category</p>
          <h2>카테고리별 입출고 처리</h2>
          <div class="season-tabs">${categoryTabs}</div>
          ${activeCategory ? `<div class="season-subblock">
            <div class="season-subheader">
              <div class="season-subtitle">${activeCategory.category}</div>
              <div class="season-submeta">${activeCategory.items.length}개 품목${isAccessoryCategory ? "" : ` · ${isOutletCategory ? "카테고리" : "시즌"} ${activeCategory.seasonBlocks.length}개`} · 재고 ${activeCategoryTotal}개</div>
            </div>
            ${seasonTabs ? `<div class="season-tabs">${seasonTabs}</div>` : ""}
          </div>` : ""}
        </div>
        <div class="season-total">총 재고 ${grandTotal}개</div>
      </div>
      ${activeSeasonBlock ? `
        <section class="season-subblock">
          <div class="season-subheader">
            <div class="season-subtitle">${activeSeasonBlock.season}</div>
            <div class="season-submeta">${activeSeasonBlock.items.length}개 품목 · 재고 ${activeSeasonTotal}개</div>
          </div>
          <div class="table-wrap">
            <table class="inventory-table">
              <thead>
                <tr>
                  <th>품목명</th>
                  <th class="group-head-initial group-start">${tableSizes[0]}</th>
                  <th class="group-head-initial">${tableSizes[1]}</th>
                  <th class="group-head-initial">저장</th>
                  <th class="group-head-in group-start">${tableSizes[0]}+</th>
                  <th class="group-head-in">${tableSizes[1]}+</th>
                  <th class="group-head-out group-start">${tableSizes[0]}-</th>
                  <th class="group-head-out">${tableSizes[1]}-</th>
                  <th class="group-head-stock group-start">${tableSizes[0]}</th>
                  <th class="group-head-stock">${tableSizes[1]}</th>
                  <th class="group-head-stock">합계</th>
                  <th>최근 반영</th>
                  <th>처리</th>
                </tr>
              </thead>
              <tbody>${activeRows}</tbody>
            </table>
          </div>
        </section>
      ` : `<div class="empty-state">${isOutletCategory ? "카테고리를 선택하면 상품이 표시됩니다." : "시즌을 선택하면 상품이 표시됩니다."}</div>`}
    </section>
  `;
}

function buildOverviewRows(items, season, category) {
  const tableSizes = category === "잡화류" ? ["S", "M"] : ["M", "L"];

  return items.map((item, index) => {
    const previousItem = items[index - 1];
    const rowClass = getRowGroupClass(previousItem, item, season, category);
    const itemSizes = getItemSizes(item);
    const isSingleSize = itemSizes.length === 1;

    if (isSingleSize) {
      const size = itemSizes[0];
      const stock = getCurrentStock(item.id, size);
      return `
        <tr class="${rowClass}">
          <td class="inventory-name">${item.name}</td>
          <td class="cell-stock group-start" colspan="3">
            <div class="onesize-stock">
              <span class="onesize-label">${getSizeLabel(size, item)}</span>
              <span class="stock-chip ${stock <= 5 ? "low" : ""}">${stock}</span>
            </div>
          </td>
        </tr>
      `;
    }

    return `
      <tr class="${rowClass}">
        <td class="inventory-name">${item.name}</td>
        <td class="cell-stock group-start">
          <span class="stock-chip ${getCurrentStock(item.id, tableSizes[0]) <= 5 ? "low" : ""}">${getCurrentStock(item.id, tableSizes[0])}</span>
        </td>
        <td class="cell-stock">
          <span class="stock-chip ${getCurrentStock(item.id, tableSizes[1]) <= 5 ? "low" : ""}">${getCurrentStock(item.id, tableSizes[1])}</span>
        </td>
        <td class="cell-stock">
          <span class="stock-chip ${getItemTotalStock(item.id) <= 10 ? "low" : ""}">${getItemTotalStock(item.id)}</span>
        </td>
      </tr>
    `;
  }).join("");
}

function buildOverviewRowsV2(items, season, category) {
  const tableSizes = category === "잡화류" ? ["S", "M"] : ["M", "L"];
  const renderBlockedCell = (groupStart = false) => `
    <td class="cell-stock blocked-cell ${groupStart ? "group-start" : ""}">
      <span class="blocked-slot">불가</span>
    </td>
  `;

  return items.map((item, index) => {
    const previousItem = items[index - 1];
    const rowClass = getRowGroupClass(previousItem, item, season, category);
    const itemSizes = getItemSizes(item);
    const isSingleSize = itemSizes.length === 1;
    const singleSize = isSingleSize ? itemSizes[0] : null;
    const usesBlockedLayout = category === "잡화류" && isSingleSize && singleSize !== ONE_SIZE && tableSizes.includes(singleSize);

    if (usesBlockedLayout) {
      const blockedFirst = singleSize === tableSizes[1];
      const stockCell = `
        <td class="cell-stock ${blockedFirst ? "" : "group-start"}">
          <span class="stock-chip ${getCurrentStock(item.id, singleSize) <= 5 ? "low" : ""}">${getCurrentStock(item.id, singleSize)}</span>
        </td>
      `;
      return `
        <tr class="${rowClass}">
          <td class="inventory-name">${item.name}</td>
          ${blockedFirst ? renderBlockedCell(true) : stockCell}
          ${blockedFirst ? stockCell : renderBlockedCell(false)}
          <td class="cell-stock">
            <span class="stock-chip ${getItemTotalStock(item.id) <= 10 ? "low" : ""}">${getItemTotalStock(item.id)}</span>
          </td>
        </tr>
      `;
    }

    if (isSingleSize) {
      const stock = getCurrentStock(item.id, singleSize);
      return `
        <tr class="${rowClass}">
          <td class="inventory-name">${item.name}</td>
          <td class="cell-stock group-start" colspan="3">
            <div class="onesize-stock">
              <span class="onesize-label">${getSizeLabel(singleSize, item)}</span>
              <span class="stock-chip ${stock <= 5 ? "low" : ""}">${stock}</span>
            </div>
          </td>
        </tr>
      `;
    }

    return `
      <tr class="${rowClass}">
        <td class="inventory-name">${item.name}</td>
        <td class="cell-stock group-start">
          <span class="stock-chip ${getCurrentStock(item.id, tableSizes[0]) <= 5 ? "low" : ""}">${getCurrentStock(item.id, tableSizes[0])}</span>
        </td>
        <td class="cell-stock">
          <span class="stock-chip ${getCurrentStock(item.id, tableSizes[1]) <= 5 ? "low" : ""}">${getCurrentStock(item.id, tableSizes[1])}</span>
        </td>
        <td class="cell-stock">
          <span class="stock-chip ${getItemTotalStock(item.id) <= 10 ? "low" : ""}">${getItemTotalStock(item.id)}</span>
        </td>
      </tr>
    `;
  }).join("");
}

function buildOverviewPage() {
  const groupedItems = CATEGORY_ORDER.map((category) => {
    const seasonBlocks = getSeasonBlocksForCategory(category);
    const items = seasonBlocks.flatMap((group) => group.items);
    return { category, seasonBlocks, items };
  }).filter((group) => group.items.length > 0);

  const activeCategory = groupedItems.find((group) => group.category === expandedCategory) || groupedItems[0];
  const isAccessoryCategory = activeCategory?.category === "잡화류";
  const isOutletCategory = activeCategory?.category === "아울렛";
  const tableSizes = isAccessoryCategory ? ["S", "M"] : ["M", "L"];
  const activeSeasonBlock = isAccessoryCategory
    ? { season: "전체", items: activeCategory?.items || [] }
    : activeCategory?.seasonBlocks.find((seasonBlock) => seasonBlock.season === currentSeason) || null;
  const activeRows = activeSeasonBlock
    ? buildOverviewRowsV2(activeSeasonBlock.items, activeSeasonBlock.season, activeCategory.category)
    : "";
  const activeCategoryTotal = activeCategory
    ? activeCategory.items.reduce((sum, item) => sum + getItemTotalStock(item.id), 0)
    : 0;
  const activeSeasonTotal = activeSeasonBlock
    ? activeSeasonBlock.items.reduce((sum, item) => sum + getItemTotalStock(item.id), 0)
    : 0;

  const categoryTabs = groupedItems.map((group) => `
    <button
      class="season-tab ${group.category === activeCategory?.category ? "is-active" : ""}"
      type="button"
      data-action="select-category"
      data-category="${group.category}"
    >${group.category}</button>
  `).join("");

  const seasonTabs = isAccessoryCategory ? "" : (activeCategory?.seasonBlocks || []).map((seasonBlock) => `
    <button
      class="season-tab ${seasonBlock.season === activeSeasonBlock?.season ? "is-active" : ""}"
      type="button"
      data-action="select-season"
      data-season="${seasonBlock.season}"
    >${seasonBlock.season}</button>
  `).join("");

  overviewGrid.innerHTML = `
    <section class="season-block">
      <div class="season-header">
        <div>
          <p class="eyebrow">Overview</p>
          <h2>카테고리별 재고 보기</h2>
          <div class="season-tabs">${categoryTabs}</div>
          ${activeCategory ? `<div class="season-subblock">
            <div class="season-subheader">
              <div class="season-subtitle">${activeCategory.category}</div>
              <div class="season-submeta">${activeCategory.items.length}개 품목${isAccessoryCategory ? "" : ` · ${isOutletCategory ? "카테고리" : "시즌"} ${activeCategory.seasonBlocks.length}개`} · 재고 ${activeCategoryTotal}개</div>
            </div>
            ${seasonTabs ? `<div class="season-tabs">${seasonTabs}</div>` : ""}
          </div>` : ""}
        </div>
      </div>
      ${activeSeasonBlock ? `
        <article class="overview-card">
          <p class="eyebrow">${activeSeasonBlock.season}</p>
          <h2>${activeSeasonBlock.season} 재고표</h2>
          <div class="overview-total">품목 ${activeSeasonBlock.items.length}개 · 재고 ${activeSeasonTotal}개</div>
          <div class="table-wrap">
            <table class="mini-table">
              <thead>
                <tr>
                  <th>품목명</th>
                  <th class="group-head-stock group-start">${tableSizes[0]}</th>
                  <th class="group-head-stock">${tableSizes[1]}</th>
                  <th class="group-head-stock">합계</th>
                </tr>
              </thead>
              <tbody>${activeRows}</tbody>
            </table>
          </div>
        </article>
      ` : `<div class="empty-state">${isOutletCategory ? "카테고리를 선택하면 재고표가 표시됩니다." : "시즌을 선택하면 재고표가 표시됩니다."}</div>`}
    </section>
  `;
}

function buildLowStockPage() {
  const rows = state.items.flatMap((item) => (
    getItemSizes(item).map((size) => ({
      item,
      size,
      stock: getCurrentStock(item.id, size)
    }))
  )).filter((entry) => entry.item.category !== "아울렛" && entry.stock < 10)
    .sort((a, b) => a.stock - b.stock || a.item.category.localeCompare(b.item.category) || a.item.name.localeCompare(b.item.name));

  lowStockSummary.textContent = rows.length > 0
    ? `재고 주의 ${rows.length}건 · 기준 10개 미만`
    : "현재 재고 주의 품목이 없습니다.";

  if (rows.length === 0) {
    lowStockBody.innerHTML = `<tr><td class="empty-state" colspan="6">현재 재고 10개 미만 품목이 없습니다.</td></tr>`;
    return;
  }

  lowStockBody.innerHTML = rows.map(({ item, size, stock }) => `
    <tr>
      <td>${item.category}</td>
      <td>${item.category === "아울렛" ? item.season : item.season}</td>
      <td>
        <button class="text-link-button" type="button" data-action="open-overview-item" data-item-id="${item.id}">
          ${item.name}
        </button>
      </td>
      <td>${getSizeLabel(size, item)}</td>
      <td><span class="stock-chip low">${stock}</span></td>
      <td class="movement-out">주의</td>
    </tr>
  `).join("");
}

function buildDailyDashboard() {
  const selectedDate = dashboardDateInput.value || today;
  const dayTransactions = state.transactions.filter((transaction) => transaction.date === selectedDate);
  const inbound = dayTransactions
    .filter((transaction) => transaction.type === "in")
    .reduce((sum, transaction) => sum + transaction.quantity, 0);
  const outbound = dayTransactions
    .filter((transaction) => transaction.type === "out")
    .reduce((sum, transaction) => sum + transaction.quantity, 0);

  dailyCards.innerHTML = `
    <article class="daily-card">
      <span>조회일</span>
      <strong>${formatDate(selectedDate)}</strong>
    </article>
    <article class="daily-card">
      <span>총 입고</span>
      <strong class="movement-in">+${inbound}</strong>
    </article>
    <article class="daily-card">
      <span>총 출고</span>
      <strong class="movement-out">-${outbound}</strong>
    </article>
  `;

  const rows = state.items.map((item) => {
    const itemTransactions = dayTransactions.filter((transaction) => transaction.itemId === item.id);
    const itemInbound = itemTransactions
      .filter((transaction) => transaction.type === "in")
      .reduce((sum, transaction) => sum + transaction.quantity, 0);
    const itemOutbound = itemTransactions
      .filter((transaction) => transaction.type === "out")
      .reduce((sum, transaction) => sum + transaction.quantity, 0);

    return {
      name: item.name,
      inbound: itemInbound,
      outbound: itemOutbound,
      net: itemInbound - itemOutbound
    };
  }).filter((entry) => entry.inbound > 0 || entry.outbound > 0);

  if (rows.length === 0) {
    dailySummaryBody.innerHTML = `<tr><td class="empty-state" colspan="4">선택한 날짜의 입출고 내역이 없습니다.</td></tr>`;
    return;
  }

  dailySummaryBody.innerHTML = rows.map((row) => `
    <tr>
      <td>${row.name}</td>
      <td class="movement-in">+${row.inbound}</td>
      <td class="movement-out">-${row.outbound}</td>
      <td>${row.net > 0 ? `+${row.net}` : row.net}</td>
    </tr>
  `).join("");
}

function buildHistoryTable() {
  const rows = state.transactions
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 80);

  if (rows.length === 0) {
    historyBody.innerHTML = `<tr><td class="empty-state" colspan="6">아직 저장된 입출고 기록이 없습니다.</td></tr>`;
    return;
  }

  historyBody.innerHTML = rows.map((transaction) => {
    const item = state.items.find((entry) => entry.id === transaction.itemId);
    const typeLabel = transaction.type === "in" ? "입고" : "출고";
    const quantityLabel = transaction.type === "in" ? `+${transaction.quantity}` : `-${transaction.quantity}`;

    return `
      <tr>
        <td class="history-date">${formatDate(transaction.date)}</td>
        <td>${item?.season ?? "-"}</td>
        <td>${item?.name ?? "-"}</td>
        <td>${getSizeLabel(transaction.size, item)}</td>
        <td class="${transaction.type === "in" ? "movement-in" : "movement-out"}">${typeLabel}</td>
        <td>${quantityLabel}</td>
      </tr>
    `;
  }).join("");
}

function renderPage() {
  pageSections.forEach((section) => {
    section.classList.toggle("is-active", section.dataset.page === currentPage);
  });

  const pageIndex = PAGE_ORDER.indexOf(currentPage);
  prevPageButton.disabled = pageIndex === 0;
  nextPageButton.disabled = pageIndex === PAGE_ORDER.length - 1;
  pageLabel.textContent = currentPage === "manage"
    ? "1페이지 · 입출고 관리"
    : currentPage === "overview"
      ? "2페이지 · 한눈에 재고보기"
      : "3페이지 · 재고 주의 품목";
  saveState();
}

function render() {
  ensureCurrentSeason();
  buildSummaryCards();
  buildInventoryTable();
  buildDailyDashboard();
  buildHistoryTable();
  buildOverviewPage();
  buildLowStockPage();
  renderPage();
  saveState();
}

function clearRowInputs(itemId) {
  document.querySelectorAll(`input[data-item-id="${itemId}"][data-input-type="in"], input[data-item-id="${itemId}"][data-input-type="out"]`).forEach((input) => {
    input.value = "";
  });
}

async function saveInitialStock(itemId) {
  const itemIndex = state.items.findIndex((entry) => entry.id === itemId);
  if (itemIndex === -1) {
    return;
  }

  const item = state.items[itemIndex];

  const nextStock = {};

  for (const size of getItemSizes(item)) {
    const input = document.querySelector(`input[data-item-id="${itemId}"][data-input-type="initial"][data-size="${size}"]`);
    const value = Number(input?.value ?? item.initialStock[size]);

    if (!Number.isInteger(value) || value < 0) {
      window.alert("초기재고는 0 이상의 정수만 입력할 수 있습니다.");
      return;
    }

    nextStock[size] = value;
  }

  state.items = state.items.map((entry, index) => (
    index === itemIndex ? { ...entry, initialStock: nextStock } : entry
  ));
  await syncItemsToRemote(state.items);
  saveState();
  render();
}

async function addTransaction(itemId) {
  const transactionDate = transactionDateInput.value || today;
  const item = state.items.find((entry) => entry.id === itemId);
  const entries = getItemSizes(item).map((size) => ({
    size,
    inbound: Number(document.querySelector(`input[data-item-id="${itemId}"][data-input-type="in"][data-size="${size}"]`)?.value || 0),
    outbound: Number(document.querySelector(`input[data-item-id="${itemId}"][data-input-type="out"][data-size="${size}"]`)?.value || 0)
  }));

  if (entries.every((entry) => entry.inbound <= 0 && entry.outbound <= 0)) {
    window.alert("입고 또는 출고 수량을 입력해 주세요.");
    return;
  }

  for (const entry of entries) {
    if (!Number.isInteger(entry.inbound) || !Number.isInteger(entry.outbound) || entry.inbound < 0 || entry.outbound < 0) {
      window.alert("수량은 0 이상의 정수만 입력할 수 있습니다.");
      return;
    }

    const currentStock = getCurrentStock(itemId, entry.size);
    if (entry.outbound > currentStock + entry.inbound) {
      window.alert(`${entry.size} 사이즈 출고 수량이 현재 처리 가능한 재고보다 많습니다.`);
      return;
    }
  }

  const createdAt = new Date().toISOString();
  const nextTransactions = [];

  for (const entry of entries) {
    if (entry.inbound > 0) {
      nextTransactions.push({
        id: `${itemId}-${entry.size}-in-${createdAt}-${Math.random().toString(36).slice(2, 7)}`,
        itemId,
        size: entry.size,
        type: "in",
        quantity: entry.inbound,
        date: transactionDate,
        createdAt
      });
    }

    if (entry.outbound > 0) {
      nextTransactions.push({
        id: `${itemId}-${entry.size}-out-${createdAt}-${Math.random().toString(36).slice(2, 7)}`,
        itemId,
        size: entry.size,
        type: "out",
        quantity: entry.outbound,
        date: transactionDate,
        createdAt
      });
    }
  }

  state.transactions = [...state.transactions, ...nextTransactions];
  await insertTransactionsToRemote(nextTransactions);
  const itemMeta = state.items.find((item) => item.id === itemId);
  expandedCategory = itemMeta ? itemMeta.category : expandedCategory;
  currentSeason = itemMeta ? itemMeta.season : currentSeason;
  saveState();
  clearRowInputs(itemId);
  render();
}

inventoryCategories.addEventListener("click", (event) => {
  const rawTarget = event.target;
  if (!(rawTarget instanceof HTMLElement)) {
    return;
  }

  const target = rawTarget.closest("[data-action]");
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.dataset.action === "save-initial") {
    void saveInitialStock(target.dataset.itemId);
    return;
  }

  if (target.dataset.action === "apply") {
    void addTransaction(target.dataset.itemId);
  }
});

document.addEventListener("click", (event) => {
  const rawTarget = event.target;
  if (!(rawTarget instanceof HTMLElement)) {
    return;
  }

  const target = rawTarget.closest("[data-action='select-category'], [data-action='select-season']");
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.dataset.action === "select-category") {
    expandedCategory = target.dataset.category || expandedCategory;
    currentSeason = "";
    render();
    return;
  }

  if (target.dataset.action === "select-season") {
    currentSeason = target.dataset.season || currentSeason;
    render();
  }
});

dashboardDateInput.addEventListener("change", buildDailyDashboard);

lowStockBody.addEventListener("click", (event) => {
  const rawTarget = event.target;
  if (!(rawTarget instanceof HTMLElement)) {
    return;
  }

  const target = rawTarget.closest("[data-action='open-overview-item']");
  if (!(target instanceof HTMLElement)) {
    return;
  }

  const item = state.items.find((entry) => entry.id === target.dataset.itemId);
  if (!item) {
    return;
  }

  expandedCategory = item.category;
  currentSeason = item.category === "잡화류" ? "" : item.season;
  currentPage = "overview";
  render();
  syncBrowserHistory("push");
});

prevPageButton.addEventListener("click", () => {
  const pageIndex = PAGE_ORDER.indexOf(currentPage);
  if (pageIndex <= 0) {
    return;
  }

  currentPage = PAGE_ORDER[pageIndex - 1];
  renderPage();
  syncBrowserHistory("push");
});

nextPageButton.addEventListener("click", () => {
  const pageIndex = PAGE_ORDER.indexOf(currentPage);
  if (pageIndex === -1 || pageIndex >= PAGE_ORDER.length - 1) {
    return;
  }

  currentPage = PAGE_ORDER[pageIndex + 1];
  renderPage();
  syncBrowserHistory("push");
});

window.addEventListener("popstate", (event) => {
  const snapshot = event.state;
  if (!snapshot || !PAGE_ORDER.includes(snapshot.page)) {
    currentPage = PAGE_ORDER.includes(location.hash.replace("#", "")) ? location.hash.replace("#", "") : "manage";
    renderPage();
    return;
  }

  currentPage = snapshot.page;
  currentSeason = snapshot.season ?? currentSeason;
  expandedCategory = snapshot.category ?? expandedCategory;
  render();
});

resetDateButton.addEventListener("click", async () => {
  const targetDate = transactionDateInput.value || today;
  const targetTransactions = state.transactions.filter((transaction) => transaction.date === targetDate);
  const hasRecords = targetTransactions.length > 0;

  if (!hasRecords) {
    window.alert("선택한 날짜에 삭제할 입출고 기록이 없습니다.");
    return;
  }

  const confirmed = window.confirm(`${formatDate(targetDate)} 기록만 삭제할까요? 해당 날짜의 입고/출고만 초기화됩니다.`);
  if (!confirmed) {
    return;
  }

  await deleteTransactionsFromRemote(targetTransactions.map((transaction) => transaction.id));
  const targetIds = new Set(targetTransactions.map((transaction) => transaction.id));
  state.transactions = state.transactions.filter((transaction) => !targetIds.has(transaction.id));
  saveState();
  render();
});

authForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (passwordInput.value !== APP_PASSWORD) {
    authError.hidden = false;
    passwordInput.select();
    return;
  }

  authError.hidden = true;
  passwordInput.value = "";
  unlockApp();
});

async function bootstrap() {
  if (!isAuthenticated) {
    lockApp();
  } else {
    unlockApp();
  }

  if (isRemoteMode()) {
    try {
      state = await loadRemoteState();
      subscribeRemoteState();
    } catch (error) {
      console.error("Failed to load Supabase state", error);
      window.alert("Supabase 연결에 실패해 로컬 모드로 실행합니다. 설정값과 테이블 구성을 확인해 주세요.");
      state = loadState();
    }
  }

  render();
  syncBrowserHistory("replace");
}

void bootstrap();
