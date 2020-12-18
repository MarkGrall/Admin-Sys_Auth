import async from "../components/Async";

import {
  Activity,
  BookOpen as BookOpenIcon,
  Briefcase as BriefcaseIcon,
  CheckSquare as CheckSquareIcon,
  Grid as GridIcon,
  Heart as HeartIcon,
  Layout as LayoutIcon,
  List as ListIcon,
  MapPin as MapPinIcon,
  Monitor as MonitorIcon,
  PieChart as PieChartIcon,
  Sliders as SlidersIcon,
  User as UserIcon,
  Users as UsersIcon,
  Calendar as CalendarIcon
} from "react-feather";

import {BrowserRouter as Router,Route, Redirect,Switch} from 'react-router-dom';

// Auth
//import SignIn from "../pages/auth/SignIn";

//import SignUp from "../pages/auth/SignUp";
//import ResetPassword from "../pages/auth/ResetPassword";
import Page404 from "../pages/auth/Page404";
import Page500 from "../pages/auth/Page500";

import ThemeClassic from "../pages/layouts/ThemeClassic";

// Plans
const ClientPlanSearch = async(() => import("../pages/ClientPlanSearch"));
const ClientOverview = async(() => import("../pages/Client"));
const PersonalPension = async(() => import("../pages/plans/PersonalPension"));
const LevelTermAssuarance = async(() => import("../pages/plans/LevelTermAssuarance"));
const InvestmentBond = async(() => import("../pages/plans/InvestmentBond"));

//NewBusiness
const LifeInsurance = async(() => import("../pages/NewBusiness/LifeInsurance"));
const FormValidation = async(() => import("../pages/NewBusiness/FormValidation"));

//Fund Centre
const FundPrices = async(() => import("../pages/FundCentre/index"));
const Trade = async(() => import("../pages/FundCentre/Trade/index"));
const FundPricesModal = async(() => import("../pages/FundCentre/FundPricesModal"));

//Product Centre
const ProductSearch = async(() => import("../pages/ProductCentre/ProductSearch/index"));
const Product = async(() => import("../pages/ProductCentre/Product"));

//System Centre
const SystemCentre_Parameters = async(() => import("../pages/SystemCentre/Parameters"));
const SystemCentre_ErrorRectification = async(() => import("../pages/SystemCentre/ErrorRectification"));

const ClientSearch = async(() => import("../pages/ManageClients/ClientSearch"));
// Routes

//const Forms = async(() => import("../pages/ManageClients/Modal"));

const Profile = async(() => import("../pages/Profile/index"));
const LoginSecurity = async(() => import("../pages/Profile/LoginSecurity"));
const Settings = async(() => import("../pages/Profile/Settings"));
const Analytics = async(() => import("../pages/Profile/Analytics"));
const Chat = async(() => import("../pages/chat/Chat"));
const Chat_2 = async(() => import("../pages/chat - Twilio/Chat"));

// Routes
const plansRoutes = {
  path: "/Client",
  name: "Client/Plan",
  icon: BriefcaseIcon,
  containsHome: true,
  children: [
    {
      path: "/Client/Search",
      name: "Client/Plan Search",
	  component: ClientPlanSearch  
	},
    {
      path: "/Client/Client",
      name: "Client",
	  component: ClientOverview  
	},
    {
      path: "/Client/Plans/PersonalPension",
      name: "Personal Pension",
      component: PersonalPension
    },
	{
      path: "/Client/Plans/LevelTermAssuarance",
      name: "Level Term Assuarance",
      component: LevelTermAssuarance
    },
	{
      path: "/Client/Plans/InvestmentBond",
      name: "Investment Bond",
      component: InvestmentBond
    }
  ]
};


const NewBusinessRoutes = {
  path: "/NewBusiness",
  name: "New Business",
  icon: LayoutIcon,
  children: [
    {
      path: "/NewBusiness/LifeInsurance",
      name: "Life Insurance",
      component: LifeInsurance
    }
  ]
};

const FundCentreRoutes = {
  path: "/FundCentre",
  name: "Fund Centre",
  icon: Activity,
  children: [
    {
      path: "/FundCentre/FundPrices",
      name: "Fund Prices",
      component: FundPrices
    },
	{
      path: "/FundCentre/Trade",
      name: "Trade",
      component: Trade
    },
	{
      path: "/FundCentre/FundPricesModal",
      name: "Fund Price Modal",
      component: FundPricesModal
    }
  ]
};

const ClientSearchRoutes = {
  path: "/ManageClient",
  name: "Manage Clients",
  icon: UsersIcon,
  children: [
    {
      path: "/ManageClient/Dashboard",
      name: "Client Dashboard",
      component: LifeInsurance
    },
    {
      path: "/ManageClient/ClientSearch",
      name: "Client Search",
      component: ClientSearch
    }
  ]
};

const UserRoutes = {
  path: "/User",
  name: "User",
  icon: UserIcon,
  children: [
    {
      path: "/User/Profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/User/Analytics",
      name: "Analytics",
      component: Analytics
    },
	{
      path: "/User/LoginSecurity",
      name: "Login & Security",
      component: LoginSecurity
    },
	{
      path: "/User/Settings",
      name: "Settings",
      component: Settings
    },
	{
      path: "/User/Chat",
      name: "Chat",
      component: Chat
    }
  ]
};

const landingRoutes = {
  path: "/",
  name: "Landing Page",
  component: ClientOverview,
  children: null
};





const SystemCentreRoutes = {
  path: "/SystemCentre",
  name: "SystemCentre",
  icon: BriefcaseIcon,
  containsHome: true,
  children: [
    {
      path: "/SystemCentre/Parameters",
      name: "Parameters",
	  component: SystemCentre_Parameters  
	},
    {
      path: "/SystemCentre/Rectification",
      name: "Error Rectification",
	  component: SystemCentre_ErrorRectification  
	}	
  ]
};

const ChatRoutes = {
  path: "/Chat",
  name: "Chat",
  icon: BriefcaseIcon,
  containsHome: true,
  children: [
    {
      path: "/Chat/Chat",
      name: "Chat",
	  component: Chat_2  
	}
  ]
};

const ProductCentreRoutes = {
  path: "/ProductCentre",
  name: "ProductCentre",
  icon: BriefcaseIcon,
  containsHome: true,
  children: [
    {
      path: "/ProductCentre/ProductSearch",
      name: "Product Search",
	  component: ProductSearch  
	},
    {
      path: "/ProductCentre/Product",
      name: "Product",
	  component: Product  
	}
  ]
};

export const landing = [landingRoutes];
//export default landing ;


// plan specific routes
export const plans = [
  plansRoutes,
  NewBusinessRoutes,
  FundCentreRoutes,
  ClientSearchRoutes,
  UserRoutes,
  ProductCentreRoutes,
  SystemCentreRoutes,
  ChatRoutes
  
];



// All routes
export default [
  plansRoutes,
  NewBusinessRoutes,
  FundCentreRoutes,
  ClientSearchRoutes,
  ProductCentreRoutes,
  SystemCentreRoutes,
  ChatRoutes
  
];
