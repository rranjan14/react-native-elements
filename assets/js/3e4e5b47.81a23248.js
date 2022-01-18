"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5847],{58215:(t,e,a)=>{a.d(e,{Z:()=>n});var l=a(67294);const n=function(t){var e=t.children,a=t.hidden,n=t.className;return l.createElement("div",{role:"tabpanel",hidden:a,className:n},e)}},82895:(t,e,a)=>{a.d(e,{Z:()=>s});var l=a(87462),n=a(67294),r=a(72389),i=a(79443);const u=function(){var t=(0,n.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t};var o=a(15779),m=a(86010);const d="tabItem_vU9c";function p(t){var e,a,r,i=t.lazy,p=t.block,s=t.defaultValue,k=t.values,h=t.groupId,c=t.className,N=n.Children.map(t.children,(function(t){if((0,n.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:N.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),g=(0,o.lx)(b,(function(t,e){return t.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===s?s:null!=(e=null!=s?s:null==(a=N.find((function(t){return t.props.default})))?void 0:a.props.value)?e:null==(r=N[0])?void 0:r.props.value;if(null!==v&&!b.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=u(),y=f.tabGroupChoices,A=f.setTabGroupChoices,D=(0,n.useState)(v),C=D[0],T=D[1],S=[],B=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var w=y[h];null!=w&&w!==C&&b.some((function(t){return t.value===w}))&&T(w)}var x=function(t){var e=t.currentTarget,a=S.indexOf(e),l=b[a].value;l!==C&&(B(e),T(l),null!=h&&A(h,l))},V=function(t){var e,a=null;switch(t.key){case"ArrowRight":var l=S.indexOf(t.currentTarget)+1;a=S[l]||S[0];break;case"ArrowLeft":var n=S.indexOf(t.currentTarget)-1;a=S[n]||S[S.length-1]}null==(e=a)||e.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,m.Z)("tabs",{"tabs--block":p},c)},b.map((function(t){var e=t.value,a=t.label,r=t.attributes;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:function(t){return S.push(t)},onKeyDown:V,onFocus:x,onClick:x},r,{className:(0,m.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":C===e})}),null!=a?a:e)}))),i?(0,n.cloneElement)(N.filter((function(t){return t.props.value===C}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==C})}))))}function s(t){var e=(0,r.Z)();return n.createElement(p,(0,l.Z)({key:String(e)},t))}},53362:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>o,contentTitle:()=>m,metadata:()=>d,toc:()=>p,default:()=>k});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),i=a(10090),u=(a(34738),a(82895),a(58215),["components"]),o={id:"slider",title:"Slider",slug:"/slider"},m=void 0,d={unversionedId:"main/slider",id:"main/slider",title:"Slider",description:"Sliders allow users to select a value from a fixed set of values using drag utility.",source:"@site/docs/main/Slider.mdx",sourceDirName:"main",slug:"/slider",permalink:"/docs/next/slider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/Slider.mdx",tags:[],version:"current",frontMatter:{id:"slider",title:"Slider",slug:"/slider"},sidebar:"docs",previous:{title:"SearchBar",permalink:"/docs/next/searchbar"},next:{title:"SocialIcon",permalink:"/docs/next/socialicon"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"Slider",id:"slider",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"Slider",id:"slider-1",children:[{value:"allowTouchTrack",id:"allowtouchtrack",children:[],level:4},{value:"animateTransitions",id:"animatetransitions",children:[],level:4},{value:"animationConfig",id:"animationconfig",children:[],level:4},{value:"animationType",id:"animationtype",children:[],level:4},{value:"containerStyle",id:"containerstyle",children:[],level:4},{value:"debugTouchArea",id:"debugtoucharea",children:[],level:4},{value:"disabled",id:"disabled",children:[],level:4},{value:"maximumTrackTintColor",id:"maximumtracktintcolor",children:[],level:4},{value:"maximumValue",id:"maximumvalue",children:[],level:4},{value:"minimumTrackTintColor",id:"minimumtracktintcolor",children:[],level:4},{value:"minimumValue",id:"minimumvalue",children:[],level:4},{value:"onSlidingComplete",id:"onslidingcomplete",children:[],level:4},{value:"onSlidingStart",id:"onslidingstart",children:[],level:4},{value:"onValueChange",id:"onvaluechange",children:[],level:4},{value:"orientation",id:"orientation",children:[],level:4},{value:"step",id:"step",children:[],level:4},{value:"style",id:"style",children:[],level:4},{value:"thumbProps",id:"thumbprops",children:[],level:4},{value:"thumbStyle",id:"thumbstyle",children:[],level:4},{value:"thumbTintColor",id:"thumbtintcolor",children:[],level:4},{value:"thumbTouchSize",id:"thumbtouchsize",children:[],level:4},{value:"trackStyle",id:"trackstyle",children:[],level:4},{value:"value",id:"value",children:[],level:4}],level:3}],level:2}],s={toc:p};function k(t){var e=t.components,a=(0,n.Z)(t,u);return(0,r.kt)("wrapper",(0,l.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sliders allow users to select a value from a fixed set of values using drag utility."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.default,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"slider"},"Slider"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#allowtouchtrack"},"allowTouchTrack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#animatetransitions"},"animateTransitions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#animationconfig"},"animationConfig")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#animationtype"},"animationType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerstyle"},"containerStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#debugtoucharea"},"debugTouchArea")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#disabled"},"disabled")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#maximumtracktintcolor"},"maximumTrackTintColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#maximumvalue"},"maximumValue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#minimumtracktintcolor"},"minimumTrackTintColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#minimumvalue"},"minimumValue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onslidingcomplete"},"onSlidingComplete")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onslidingstart"},"onSlidingStart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onvaluechange"},"onValueChange")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#orientation"},"orientation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#step"},"step")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#style"},"style")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#thumbprops"},"thumbProps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#thumbstyle"},"thumbStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#thumbtintcolor"},"thumbTintColor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#thumbtouchsize"},"thumbTouchSize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#trackstyle"},"trackStyle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#value"},"value"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"slider-1"},"Slider"),(0,r.kt)("h4",{id:"allowtouchtrack"},"allowTouchTrack"),(0,r.kt)("p",null,"If true, thumb will respond and jump to any touch along the track."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"animatetransitions"},"animateTransitions"),(0,r.kt)("p",null,"Set to true if you want to use the default 'spring' animation."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"animationconfig"},"animationConfig"),(0,r.kt)("p",null,"Used to configure the animation parameters. These are the same parameters in the ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/animations.html"},"Animated library"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TimingAnimationConfig or SpringAnimationConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"animationtype"},"animationType"),(0,r.kt)("p",null,"Set to 'spring' or 'timing' to use one of those two types of animations with the default ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/animations.html"},"animation properties"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"timing" or "spring"'),(0,r.kt)("td",{parentName:"tr",align:null},"timing")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"containerstyle"},"containerStyle"),(0,r.kt)("p",null,"Apply style to the container of the slider."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Style Object"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"debugtoucharea"},"debugTouchArea"),(0,r.kt)("p",null,"Set this to true to visually see the thumb touch rect in green."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"disabled"},"disabled"),(0,r.kt)("p",null,"If true the user won't be able to move the slider."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"maximumtracktintcolor"},"maximumTrackTintColor"),(0,r.kt)("p",null,"The color used for the track to the right of the button."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"#b3b3b3")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"maximumvalue"},"maximumValue"),(0,r.kt)("p",null,"Initial maximum value of the slider."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"minimumtracktintcolor"},"minimumTrackTintColor"),(0,r.kt)("p",null,"The color used for the track to the left of the button."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"#3f3f3f")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"minimumvalue"},"minimumValue"),(0,r.kt)("p",null,"Initial minimum value of the slider."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onslidingcomplete"},"onSlidingComplete"),(0,r.kt)("p",null,"Callback called when the user finishes changing the value (e.g. when the slider is released)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onslidingstart"},"onSlidingStart"),(0,r.kt)("p",null,"Callback called when the user starts changing the value (e.g. when the slider is pressed)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"onvaluechange"},"onValueChange"),(0,r.kt)("p",null,"Callback continuously called while the user is dragging the slider."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(value: number) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"orientation"},"orientation"),(0,r.kt)("p",null,"Set the orientation of the slider."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"vertical" or "horizontal"'),(0,r.kt)("td",{parentName:"tr",align:null},"horizontal")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"step"},"step"),(0,r.kt)("p",null,"Step value of the slider. The value should be between 0 and maximumValue - minimumValue)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"style"},"style"),(0,r.kt)("p",null,"The style applied to the slider container."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"thumbprops"},"thumbProps"),(0,r.kt)("p",null,"The props applied to the thumb. Uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," prop which can accept ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated")," components."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"any"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"thumbstyle"},"thumbStyle"),(0,r.kt)("p",null,"The style applied to the thumb."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"thumbtintcolor"},"thumbTintColor"),(0,r.kt)("p",null,"The color used for the thumb."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"red")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"thumbtouchsize"},"thumbTouchSize"),(0,r.kt)("p",null,"The size of the touch area that allows moving the thumb. The touch area has the same center as the visible thumb. This allows to have a visually small thumb while still allowing the user to move it easily."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sizable"),(0,r.kt)("td",{parentName:"tr",align:null},"{ width: THUMB_SIZE, height: THUMB_SIZE }")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"trackstyle"},"trackStyle"),(0,r.kt)("p",null,"The style applied to the track."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"value"},"value"),(0,r.kt)("p",null,"Initial value of the slider."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("hr",null))}k.isMDXComponent=!0},10090:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>o,contentTitle:()=>m,metadata:()=>d,toc:()=>p,default:()=>k});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),i=a(49022),u=["components"],o={},m=void 0,d={unversionedId:"main/usage/Slider/Slider",id:"main/usage/Slider/Slider",title:"Slider",description:"",source:"@site/docs/main/usage/Slider/Slider.mdx",sourceDirName:"main/usage/Slider",slug:"/main/usage/Slider/",permalink:"/docs/next/main/usage/Slider/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Slider/Slider.mdx",tags:[],version:"current",frontMatter:{}},p=[],s={toc:p};function k(t){var e=t.components,a=(0,n.Z)(t,u);return(0,r.kt)("wrapper",(0,l.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.default,{mdxType:"Snack"}))}k.isMDXComponent=!0},49022:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>u,contentTitle:()=>o,metadata:()=>m,toc:()=>d,default:()=>s});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),i=["components"],u={},o=void 0,m={unversionedId:"main/usage/Slider/snack/index",id:"main/usage/Slider/snack/index",title:"index",description:"",source:"@site/docs/main/usage/Slider/snack/index.md",sourceDirName:"main/usage/Slider/snack",slug:"/main/usage/Slider/snack/",permalink:"/docs/next/main/usage/Slider/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/Slider/snack/index.md",tags:[],version:"current",frontMatter:{}},d=[],p={toc:d};function s(t){var e=t.components,a=(0,n.Z)(t,i);return(0,r.kt)("wrapper",(0,l.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Slider","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Slider%2C%20Text%2C%20Icon%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20SlidersComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Sliders%3A%20React.FunctionComponent%3CSlidersComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bvalue%2C%20setValue%5D%20%3D%20useState(0)%3B%0A%20%20const%20%5BvertValue%2C%20setVertValue%5D%20%3D%20useState(0)%3B%0A%0A%20%20const%20interpolate%20%3D%20(start%3A%20number%2C%20end%3A%20number)%20%3D%3E%20%7B%0A%20%20%20%20let%20k%20%3D%20(value%20-%200)%20%2F%2010%3B%20%2F%2F%200%20%3D%3Emin%20%20%26%26%2010%20%3D%3E%20MAX%0A%20%20%20%20return%20Math.ceil((1%20-%20k)%20*%20start%20%2B%20k%20*%20end)%20%25%20256%3B%0A%20%20%7D%3B%0A%0A%20%20const%20color%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20let%20r%20%3D%20interpolate(255%2C%200)%3B%0A%20%20%20%20let%20g%20%3D%20interpolate(0%2C%20255)%3B%0A%20%20%20%20let%20b%20%3D%20interpolate(0%2C%200)%3B%0A%20%20%20%20return%20%60rgb(%24%7Br%7D%2C%24%7Bg%7D%2C%24%7Bb%7D)%60%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Slider%3C%2FText%3E%0A%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.contentView%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Bvalue%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7BsetValue%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B10%7D%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B0%7D%0A%20%20%20%20%20%20%20%20%20%20step%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20allowTouchTrack%0A%20%20%20%20%20%20%20%20%20%20trackStyle%3D%7B%7B%20height%3A%205%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20thumbStyle%3D%7B%7B%20height%3A%2020%2C%20width%3A%2020%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20thumbProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22heartbeat%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reverse%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20bottom%3A%2020%2C%20right%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolor()%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20paddingTop%3A%2020%20%7D%7D%3EValue%3A%20%7Bvalue%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EVertical%20Slider%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.verticalContent%7D%3E%0A%20%20%20%20%20%20%20%20%3CSlider%0A%20%20%20%20%20%20%20%20%20%20value%3D%7BvertValue%7D%0A%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7BsetVertValue%7D%0A%20%20%20%20%20%20%20%20%20%20maximumValue%3D%7B50%7D%0A%20%20%20%20%20%20%20%20%20%20minimumValue%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%20%20step%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20orientation%3D%22vertical%22%0A%20%20%20%20%20%20%20%20%20%20thumbStyle%3D%7B%7B%20height%3A%2020%2C%20width%3A%2016%2C%20backgroundColor%3A%20'transparent'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20thumbProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22heartbeat%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20reverse%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20bottom%3A%2020%2C%20right%3A%2020%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23f50%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20paddingLeft%3A%2025%20%7D%7D%3EValue%3A%20%7BvertValue%7D%3C%2FText%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20contentView%3A%20%7B%0A%20%20%20%20padding%3A%2020%2C%0A%20%20%20%20width%3A%20'100%25'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'stretch'%2C%0A%20%20%7D%2C%0A%20%20verticalContent%3A%20%7B%0A%20%20%20%20padding%3A%2020%2C%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20height%3A%20500%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'stretch'%2C%0A%20%20%7D%2C%0A%20%20subHeader%3A%20%7B%0A%20%20%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20%20%20color%20%3A%20%22white%22%2C%0A%20%20%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20%20%20paddingVertical%20%3A%205%2C%0A%20%20%20%20marginBottom%20%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20Sliders%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0}}]);