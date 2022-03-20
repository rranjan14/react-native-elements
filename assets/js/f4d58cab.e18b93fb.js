"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},A={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,d=m["".concat(s,".").concat(u)]||m[u]||A[u]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43087:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>l,toc:()=>p,default:()=>m});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={},s=void 0,l={unversionedId:"main/usage/Text/snack/index",id:"version-4.0.0-beta.0/main/usage/Text/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Text/snack/index.md",sourceDirName:"main/usage/Text/snack",slug:"/main/usage/Text/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/Text/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Text/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},p=[],A={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Linear Text","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Text%2C%20useTheme%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20TextComponentProps%20%3D%20%7B%7D%3B%0Aconst%20TextComponent%3A%20React.FunctionComponent%3CTextComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%7B%20theme%20%7D%20%3D%20useTheme()%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.view%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.text%7D%0A%20%20%20%20%20%20%20%20%20%20h1%0A%20%20%20%20%20%20%20%20%20%20h1Style%3D%7B%7B%20color%3A%20theme%3F.colors%3F.secondary%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Heading%201%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.text%7D%0A%20%20%20%20%20%20%20%20%20%20h2%0A%20%20%20%20%20%20%20%20%20%20h2Style%3D%7B%7B%20color%3A%20theme%3F.colors%3F.success%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Heading%202%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.text%7D%0A%20%20%20%20%20%20%20%20%20%20h3%0A%20%20%20%20%20%20%20%20%20%20h3Style%3D%7B%7B%20color%3A%20theme%3F.colors%3F.warning%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Heading%203%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.text%7D%0A%20%20%20%20%20%20%20%20%20%20h4%0A%20%20%20%20%20%20%20%20%20%20h4Style%3D%7B%7B%20color%3A%20theme%3F.colors%3F.primary%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Heading%204%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20view%3A%20%7B%0A%20%20%20%20margin%3A%2010%2C%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20padding%3A%205%2C%0A%20%20%7D%2C%0A%20%20more%3A%20%7B%0A%20%20%20%20marginVertical%3A%2020%2C%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20width%3A%20120%2C%0A%20%20%20%20marginLeft%3A%20'auto'%2C%0A%20%20%20%20marginRight%3A%20'auto'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20TextComponent%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0}}]);