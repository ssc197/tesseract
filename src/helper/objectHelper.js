
import whyToDevelop from "../assets/images/developers/whytodevelop.svg"
import howToDevelop from "../assets/images/developers/Icon open-question-mark.svg"
import Downloads from "../assets/images/developers/Icon feather-download.svg"
import Community from "../assets/images/developers/Icon feather-users.svg"
import SIGNUP from "../assets/images/developers/Icon feather-arrow.svg"
 import BannerImg from "../assets/images/developers/developer_background.png";
import immediateGroup from "../assets/images/developers/immediateGrowth.png";
import sgNetwrokGrowth from "../assets/images/developers/sgNetworkGrowth.png";
import  jioGlassBanner  from "../assets/images/developers/jioGlass.png";
import JioGlassWear from "../assets/images/developers/jioGlassWear.png";
import instagram from "../assets/images/developers/instagram.svg";
import linkedIn from "../assets/images/developers/linkedin.svg";
import facebook from "../assets/images/developers/facebook.svg";

export const configObject = {
  subMenu: [
    {
      name: "JIO GLASS",
      isMobile: false,
      children: null,
      customClass: null,
      route: "/",
    },
    {
      name: "EXPERIANCES",
      isMobile: false,
      children: null,
      customClass: null,
      route: "/",
    },
    {
      name: "DEVELOPERS",
      isMobile: false,
      customClass: null,
      route:"#"
    },
    {
      name: "CAREERS",
      isMobile: false,
      children: null,
      customClass: null,
      route: "#",
    },
  ],

  footer:{
   column1: [
      {
        title:"JioGlass",
        list:[
          {
            name:"Product",
            route:"/"
          }
        ]
      },
      {
        title:"for Consumers",
        list:[
          {
            name:"Consumer experiences",
            route:"/"
          }
        ]
      },
      {
        title:"for Enterprises",
        list:[
          {
            name:"Enterprise experiences",
            route:"/"
          }
        ]
      }
    ],
    column2: [
      {
        title:"for Developers",
        list:[
          {
            name:"Why to Develop?",
            route:"/"
          },
          {
            name:"How to develop??",
            route:"/"
          },    {
            name:"Downloads",
            route:"/"
          }
          ,    {
            name:"Community",
            route:"/"
          }
          ,    {
            name:"Sign up",
            route:"/"
          }
        ]
      },
      {
        title:"Careers",
        list:[
          {
            name:"Opportunities",
            route:"/"
          }
        ]
      }
    ],
    column3: [
      {
        title:"Contact",
        list:[
          {
            name:"Corporate Office Tesseract Imaging Ltd, T22, Reliance Corporate Park, Navi Mumbai, India - 400701",
            route:"/",
            class:"contact-us"
          },
          {
            name:"Mail us @ info@tesseract.in",
            route:"/",
            isemail:true,
            emailid:"info@tesseract.in"
          }
        ]
      },
      {
        title:"Follow us",
        isSocialMedia:true,
        list:[
          {
            iconSrc:linkedIn,
            name:"LinkedIn",
            route:"/"
          },
          {
            iconSrc:instagram,
            name:"Instagram",
            route:"/"
          },
          {
            iconSrc:facebook,
            name:"Facebook",
            route:"/"
          }
        ]
      }
    ]
  }
,

  developers: {
    subNavbar: [
      {
        name:"Why to DEVELOP?",
        imgSrc:whyToDevelop
      },
      {
        name:" How to DEVELOP?",
        imgSrc:howToDevelop
      },
      {
        name:"Downloads",
        imgSrc:Downloads
      },
      {
        name:"Community",
        imgSrc:Community
      },
      {
        name:"SIGN IN /SIGNUP",
        imgSrc:SIGNUP,
        class:'nowrap'
      }

    ],

    banner:{
      bannerImgSrc:BannerImg,
      title:"Jio Tesseract Developer Platform",
      desc:"Be a part building apps for the future of mixed reality with JioGlass",
      cta :[
        {
          name:"Start developing",
          route:'/'
         },
        {
          name:"Download kits",
          route:'/'
         }
      ]
    },

    quote : {
      title:"Develop for the next Billion internet users",
      list:[
      {
        title:"The Immeddiate Growth",
        imgSrc:immediateGroup,
        desc:"India had nearly 700 million internet users across the country. This figure is projected to grow to over 974 million users by 2025. Be a part of this digital growth now.",
        cta:{
          name:"Start developing",
          route:"/"
        },

      },
      {
        title:"5g Network Growth",
        imgSrc:sgNetwrokGrowth,
        desc:'<i>"I assure you that Jio will pioneer the 5G revolution in India in the second half of 2021. It will be powered by indigenous-developed network, hardware and technology components"</i> <br/>- Mukesh D. Ambani',
        desc2:"With a Growth in 5G network, the increase of mixed reality experiances will be seamless",
        cta:{
          name:"Sign up now",
          route:"/"
        }
      }
    ]
  },

  jioGlass:{
    bannerImgSrc:jioGlassBanner,
    title:"JioGlass is everything you imagined in a Mixed Reality Innovation",
    desc:"We have got 25,000 sign ups who are eagerly waiting for the updates on JioGlass and its launch.",
  },

  upcomingEvent :{
    imgSrc:JioGlassWear,
    title: "JioGlass Launch Program 2021",
    desc: "Will be initially launched in June 2021 & then finally to the consumer market by December 2021.",
    cta :[
      {
        name:"Keep me updated",
        route:'#',
       },
      {
        name:"Submit concept",
        route:'#'
       }
    ]
  },

  getStarted : {
    title:"How to get started?",
    desc:"Simple 4 step process"
  },

  howToDevelop:{
    title:"How to Develop?",
    desc:"Guides & references for developing for JioGlass & Mixed Reality applications are provided and listed for your easy execution and developing, publishing, analysing and monetising your apps.",
    cta:{
      name:'Know more',
      route:'/'
    },
    signup:{
      cta:{
        name:"Sign up",
        route:"/"
      }
    }
  }

  }

};


