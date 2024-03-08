import { APPCONST } from "../constant/globalVar";

export default (() => {
  return {
    LOGIN: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/login",
    ADD_PAGE_STATIC_DATA: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/homePageStaticData",
    HOMEDESCACCOMP: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getHomeDescAccomAndMeetExecutive",
    HOMEPAGESTATIC: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getHomePageStaticData",

    ADD_HOME_DESCRIPTION: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/homePageSecDescAccom",
    ADD_HOME_MEET_EXECUTIVE: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/homePageSecMeetExec",

    GET_HOME_DESCRIPTION:
      process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getHomeDescAccomAndMeetExecutive",

    GETINVOLVEDYNAMIC: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getHomeCampNewsAndSponsPartner",
    GETINVOLVEDINTLIST: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getEnvolvedInterest",
    DELETEINTERESTLIST: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/envolvedInterest",
    DELETELEARNMORELIST: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/deletelearnMore",
    DELETESignUpList: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/deleteSignUp",

    ADD_SIGNUP_DATA: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/signUp",
    GET_SIGNUP_LIST: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getSignUp",
    CAMPAIGN_NEWS: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/homePageSecCampNews",
    ADD_HOME_SPONSOR_PARTNER: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/homepageSecSponPartner",

    CAMPDYNAMIC: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getCampaignPageEquityManagement",
    CAMPDYNAMICADMIN:
      process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getCampaignPageEquityManagementAdmin",
    campaignHeaderContent:
      process.env.NEXT_PUBLIC_API_URL.API_URL + "api/campaignPageEquityManagement",

    contactUs: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/contactUs",
    ADD_CONTACT_FORM_DATA: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/storeUserDataForm",
    EVENTPAGE1: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/eventCategory",
    EVENTPAGE2: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/eventPromoImage",
    EVENTPAGE3: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getEventPromoImage",
    EVENTMANAGEMENT: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/eventManagement",

    GET_SINGLE_EVENTS: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getEventManagement",
    GET_ALL_EVENTS: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getEventManagementFilterData",

    GETINVOLVEDINTEREST: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/envolvedInterest",
    DONATIONPAGE: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/donationFormData",
    DONATIONTYPES: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/donationType",
    DONATIONTYPESTATIC: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getDonationType",
    DONATEPAGEDYNAMIC: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getDonationFormData",

    CONTACTUSGET: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getcontactUs",

    GETEVENTPAGEDYNAMIC: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getEventCategory",
    EVENTPAGEMEDIA: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getEventManagement",

    DOWNLOAD_SIGNUP_REPORT: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getSignUpReport",
    DOWNLOAD_EVENT_LIST: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/downloadEventList",
    DOWNLOAD_REGISTERED_EVENT_USER:
      process.env.NEXT_PUBLIC_API_URL.API_URL + "api/downloadUserEventRegisteredData",
    DOWNLOAD_DONATION_LIST: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/downloadDonationList",
    DOWNLOAD_LEARN_MORE: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/learnMoreListDownload",
    GET_COMMENTS: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getComments",
    GET_FILTER_COMMENTS: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getFilteredComments",
    POST_COMMENTS: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/storeComments",
    POST_RSVP: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/storeUserEventSelectionData",
    GET_RSVP: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/getRsvpList",
    DEL_RSVP: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/deleteRsvpListData",
    POST_LEARNMORE: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/learnMore",
    ORDER_PAY: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/order/pay",
    DO_PAYMENT: process.env.NEXT_PUBLIC_API_URL.API_URL + "api/doPayment",
  };
})();
