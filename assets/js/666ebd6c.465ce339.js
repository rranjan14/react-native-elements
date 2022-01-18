"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[681],{58215:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294);const l=function(t){var e=t.children,a=t.hidden,l=t.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},e)}},82895:(t,e,a)=>{a.d(e,{Z:()=>s});var n=a(87462),l=a(67294),r=a(72389),i=a(79443);const o=function(){var t=(0,l.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t};var p=a(15779),u=a(86010);const c="tabItem_vU9c";function d(t){var e,a,r,i=t.lazy,d=t.block,s=t.defaultValue,m=t.values,k=t.groupId,h=t.className,N=l.Children.map(t.children,(function(t){if((0,l.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:N.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),b=(0,p.lx)(y,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var A=null===s?s:null!=(e=null!=s?s:null==(a=N.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(r=N[0])?void 0:r.props.value;if(null!==A&&!y.some((function(t){return t.value===A})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+y.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=o(),f=g.tabGroupChoices,v=g.setTabGroupChoices,C=(0,l.useState)(A),D=C[0],S=C[1],B=[],I=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var w=f[k];null!=w&&w!==D&&y.some((function(t){return t.value===w}))&&S(w)}var T=function(t){var e=t.currentTarget,a=B.indexOf(e),n=y[a].value;n!==D&&(I(e),S(n),null!=k&&v(k,n))},x=function(t){var e,a=null;switch(t.key){case"ArrowRight":var n=B.indexOf(t.currentTarget)+1;a=B[n]||B[0];break;case"ArrowLeft":var l=B.indexOf(t.currentTarget)-1;a=B[l]||B[B.length-1]}null==(e=a)||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},h)},y.map((function(t){var e=t.value,a=t.label,r=t.attributes;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:function(t){return B.push(t)},onKeyDown:x,onFocus:T,onClick:T},r,{className:(0,u.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":D===e})}),null!=a?a:e)}))),i?(0,l.cloneElement)(N.filter((function(t){return t.props.value===D}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},N.map((function(t,e){return(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==D})}))))}function s(t){var e=(0,r.Z)();return l.createElement(d,(0,n.Z)({key:String(e)},t))}},80938:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>p,contentTitle:()=>u,metadata:()=>c,toc:()=>d,default:()=>m});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=a(90519),o=(a(34738),a(82895),a(58215),["components"]),p={id:"socialicon",title:"SocialIcon",slug:"/socialicon"},u=void 0,c={unversionedId:"main/socialicon",id:"main/socialicon",title:"SocialIcon",description:"SocialIcons are visual cues to online and social media networks. We offer a varied range of social icons.",source:"@site/docs/main/SocialIcon.mdx",sourceDirName:"main",slug:"/socialicon",permalink:"/docs/next/socialicon",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/SocialIcon.mdx",tags:[],version:"current",frontMatter:{id:"socialicon",title:"SocialIcon",slug:"/socialicon"},sidebar:"docs",previous:{title:"Slider",permalink:"/docs/next/slider"},next:{title:"SpeedDial",permalink:"/docs/next/speeddial"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"SocialIcon",id:"socialicon",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"SocialIcon",id:"socialicon-1",children:[{value:"Component",id:"component",children:[],level:4},{value:"activityIndicatorStyle",id:"activityindicatorstyle",children:[],level:4},{value:"button",id:"button",children:[],level:4},{value:"disabled",id:"disabled",children:[],level:4},{value:"fontFamily",id:"fontfamily",children:[],level:4},{value:"fontStyle",id:"fontstyle",children:[],level:4},{value:"fontWeight",id:"fontweight",children:[],level:4},{value:"iconColor",id:"iconcolor",children:[],level:4},{value:"iconSize",id:"iconsize",children:[],level:4},{value:"iconStyle",id:"iconstyle",children:[],level:4},{value:"iconType",id:"icontype",children:[],level:4},{value:"light",id:"light",children:[],level:4},{value:"loading",id:"loading",children:[],level:4},{value:"pressableProps",id:"pressableprops",children:[],level:4},{value:"raised",id:"raised",children:[],level:4},{value:"small",id:"small",children:[],level:4},{value:"style",id:"style",children:[],level:4},{value:"title",id:"title",children:[],level:4},{value:"type",id:"type",children:[],level:4},{value:"underlayColor",id:"underlaycolor",children:[],level:4}],level:3}],level:2}],s={toc:d};function m(t){var e=t.components,a=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SocialIcons are visual cues to online and social media networks. We offer a varied range of social icons."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.default,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"socialicon"},"SocialIcon"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#component"},"Component")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#activityindicatorstyle"},"activityIndicatorStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#button"},"button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabled"},"disabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fontfamily"},"fontFamily")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fontstyle"},"fontStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fontweight"},"fontWeight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iconcolor"},"iconColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iconsize"},"iconSize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#iconstyle"},"iconStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#icontype"},"iconType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#light"},"light")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#loading"},"loading")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pressableprops"},"pressableProps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#raised"},"raised")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#small"},"small")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#style"},"style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#title"},"title")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#type"},"type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#underlaycolor"},"underlayColor"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"socialicon-1"},"SocialIcon"),(0,r.kt)("h4",{id:"component"},"Component"),(0,r.kt)("p",null,"Type of button."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"React Component"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Press handlers present then Pressable else View"))))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"activityindicatorstyle"},"activityIndicatorStyle"),(0,r.kt)("p",null,"Style to render when in loading state."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"button"},"button"),(0,r.kt)("p",null,"Creates button with a social icon."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabled"},"disabled"),(0,r.kt)("p",null,"Disables the button, if true."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"fontfamily"},"fontFamily"),(0,r.kt)("p",null,"Specify different font family."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"fontstyle"},"fontStyle"),(0,r.kt)("p",null,"Specify text styling."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"fontweight"},"fontWeight"),(0,r.kt)("p",null,"Specify font weight of title if set as a button with a title."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"iconcolor"},"iconColor"),(0,r.kt)("p",null,"Specify the color of the icon."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"white")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"iconsize"},"iconSize"),(0,r.kt)("p",null,"Specify the size of the icon."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"24")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"iconstyle"},"iconStyle"),(0,r.kt)("p",null,"Extra styling for icon component."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"icontype"},"iconType"),(0,r.kt)("p",null,"Type of icon set. ",(0,r.kt)("a",{parentName:"p",href:"icon#available-icon-sets"},"Supported sets here"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"font-awesome")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"light"},"light"),(0,r.kt)("p",null,"Reverses icon color scheme, setting background to white and icon to primary color."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"loading"},"loading"),(0,r.kt)("p",null,"Shows loading indicator."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"pressableprops"},"pressableProps"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"raised"},"raised"),(0,r.kt)("p",null,"Raised adds a drop shadow, set to false to remove."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"small"},"small"),(0,r.kt)("p",null,"Decides the size of the activity indicator."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"style"},"style"),(0,r.kt)("p",null,"Adds styling to the button."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"title"},"title"),(0,r.kt)("p",null,"Title if made into a button."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"type"},"type"),(0,r.kt)("p",null,"Social media type."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SocialMediaType"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"underlaycolor"},"underlayColor"),(0,r.kt)("p",null,"Add Underlay color."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null))}m.isMDXComponent=!0},90519:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>p,contentTitle:()=>u,metadata:()=>c,toc:()=>d,default:()=>m});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=a(7800),o=["components"],p={},u=void 0,c={unversionedId:"main/usage/SocialIcon/SocialIcon",id:"main/usage/SocialIcon/SocialIcon",title:"SocialIcon",description:"",source:"@site/docs/main/usage/SocialIcon/SocialIcon.mdx",sourceDirName:"main/usage/SocialIcon",slug:"/main/usage/SocialIcon/",permalink:"/docs/next/main/usage/SocialIcon/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/SocialIcon/SocialIcon.mdx",tags:[],version:"current",frontMatter:{}},d=[],s={toc:d};function m(t){var e=t.components,a=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.default,{mdxType:"Snack"}))}m.isMDXComponent=!0},7800:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>u,toc:()=>c,default:()=>s});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],o={},p=void 0,u={unversionedId:"main/usage/SocialIcon/snack/index",id:"main/usage/SocialIcon/snack/index",title:"index",description:"",source:"@site/docs/main/usage/SocialIcon/snack/index.md",sourceDirName:"main/usage/SocialIcon/snack",slug:"/main/usage/SocialIcon/snack/",permalink:"/docs/next/main/usage/SocialIcon/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/SocialIcon/snack/index.md",tags:[],version:"current",frontMatter:{}},c=[],d={toc:c};function s(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Social Icon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SocialIcon%2C%20SocialIconProps%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20IconData%20%3D%20%7B%0A%20%20type%3A%20SocialMediaType%3B%0A%20%20iconType%3A%20string%3B%0A%7D%3B%0A%0Aconst%20dataList%3A%20Partial%3CIconData%3E%5B%5D%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20type%3A%20'facebook'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'twitter'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'google-plus-official'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'google'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'pinterest'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'linkedin'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'youtube'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'vimeo'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'tumblr'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'instagram'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'quora'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'flickr'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'foursquare'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'wordpress'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'stumbleupon'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'github'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'github-alt'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'twitch'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'medium'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'soundcloud'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'stack-overflow'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'gitlab'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'angellist'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'codepen'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'weibo'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'vk'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'facebook-messenger'%2C%0A%20%20%20%20iconType%3A%20'material-community'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'whatsapp'%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Atype%20SocialIconsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SocialIcons%3A%20React.FunctionComponent%3CSocialIconsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20socialProps%20%3D%20%7B%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%7B_.chunk(dataList%2C%203).map(%0A%20%20%20%20%20%20%20%20%20%20(chunk%3A%20Partial%3CIconData%3E%5B%5D%2C%20chunkIndex%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'%234c4c4c'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BchunkIndex%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bchunk.map((l%3A%20Partial%3CIconData%3E%2C%20i%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSocialIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%7Bl.type%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconType%3D%7Bl.iconType%20%3F%20l.iconType%20%3A%20'font-awesome'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60%24%7BchunkIndex%7D-%24%7Bi%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20SocialIcons%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0}}]);