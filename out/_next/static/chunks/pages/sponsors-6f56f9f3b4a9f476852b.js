(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[234],{8179:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var o=t(4942),r=t(7294),s=t(5893),i=(t(1664),t(2207)),a=t.n(i);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var n=e.Item,t=e.data;if(!t||0==t.length)return(0,s.jsx)("div",{className:a().emptyListSection,children:(0,s.jsx)("p",{children:e.emptyText||"Not found"})});var o=t.map((function(e,t){return(0,r.createElement)(n,l(l({},e),{},{key:t}))}));return(0,s.jsx)("div",{className:a().listSection,children:o})}},7956:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return h},default:function(){return p}});var o=t(5893),r=t(1664),s=t(821),i=t(8179),a=t(2306),c=t.n(a),l=t(3064).basePublicPath;function d(e){var n="col-xs-12 col-sm-6 col-md-4 col-lg-3";return 2==e.size?n="col-xs-12 col-sm-12 col-md-6 col-lg-6":3==e.size&&(n="col-xs-12 col-sm-6 col-md-6 col-lg-4"),(0,o.jsx)("div",{className:n,children:(0,o.jsx)("div",{className:"card ".concat(c().cardContainer),children:(0,o.jsx)("div",{className:c().card,children:(0,o.jsx)(r.default,{href:e.data.link,children:(0,o.jsxs)("a",{target:"_blank",children:[(0,o.jsx)("img",{src:"".concat(l,"/assets/sponsor_logos/").concat(e.level_id).concat(e.data.image||"/placeholder.png"),className:c().cardImage}),(0,o.jsx)("p",{children:e.data.name})]})})})})})}function u(e){var n=e.data.map((function(n){return{data:n,level_id:e.sponsorship_level_id,size:e.size}}));return(0,o.jsxs)("div",{className:c().levelContainer,children:[(0,o.jsx)("h3",{children:e.sponsorship_level}),(0,o.jsx)("div",{className:c().sponsorsContainer,children:(0,o.jsx)(i.Z,{Item:d,data:n})})]})}var h=!0;function p(e){var n=e.listData;return(0,o.jsx)(s.Z,{title:"Sponsors",activeItem:1,children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)("h1",{children:"Sponsors"}),(0,o.jsx)("h3",{children:"Thank You!"}),(0,o.jsx)("p",{children:"The Carnegie Mellon International Film Festival is dedicated to the late Paul Goodman, a world-renowned filmmaker, psychologist, and CMU professor. The festival mirrors Paul's dedication to global awareness in his teaching and research, and his desire to bring to light important but often overlooked aspects of diverse individuals through filmmaking. The festival is also grateful to Denise Rousseau, Paul's wife and Professor of Organizational Behavior and Public Policy at CMU, whose gracious personal involvement has enabled the legacy of Paul Goodman to live through the festival."}),(0,o.jsx)("p",{children:'CMU IFF would not exist without the generous support of our sponsors, who share in our mission to bring Pittsburgh the best in contemporary world cinema and to bring films to life through food, cultural engagement and dialogue. The 2020 edition of the CMU IFF, "Faces of Home," is brought to you by:'}),(0,o.jsx)(i.Z,{Item:u,data:n.data})]})})}},8402:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sponsors",function(){return t(7956)}])},2207:function(e){e.exports={listSection:"list_listSection__l24Ip",emptyListSection:"list_emptyListSection__32w5i"}},2306:function(e){e.exports={levelContainer:"sponsors_levelContainer__YihOA",sponsorsContainer:"sponsors_sponsorsContainer__2uI2g",cardContainer:"sponsors_cardContainer__3sO6w",card:"sponsors_card__4zJbz",cardImage:"sponsors_cardImage__aACRQ"}}},function(e){e.O(0,[821,774,888,179],(function(){return n=8402,e(e.s=n);var n}));var n=e.O();_N_E=n}]);