"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4013],{1830:function(e,t,a){a.d(t,{Z:function(){return v}});var r=a(7044),n=a(9496),l=a(1626),c=a(9114),s=a(9717),i="sidebar_A4WY",m="sidebarItemTitle_dRuW",o="sidebarItemList_t0xm",u="sidebarItem_hL3Q",g="sidebarItemLink_k4uQ",d="sidebarItemLinkActive_bJdl",b=a(5015);function E(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var p=["sidebar","toc","children"];function v(e){var t=e.sidebar,a=e.toc,s=e.children,i=(0,r.Z)(e,p),m=t&&t.items.length>0;return n.createElement(c.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(E,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},a))))}},8752:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(9496),n=a(1830),l=a(121),c=a(5531),s="tag_JBxc";function i(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:s},r.createElement(l.Z,e))}))),r.createElement("hr",null))}function m(e){var t=e.tags,a=(0,c.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(i,{key:e.letter,letterEntry:e})})))}function o(e){var t=e.tags,a=e.sidebar,l=(0,c.MA)();return r.createElement(n.Z,{title:l,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,l),r.createElement(m,{tags:Object.values(t)}))}},121:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(9496),n=a(1626),l=a(9717),c="tag_vY99",s="tagRegular_obi5",i="tagWithCount_SR6e";function m(e){var t,a=e.permalink,m=e.name,o=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(c,(t={},t[s]=!o,t[i]=o,t))},m,o&&r.createElement("span",null,o))}}}]);