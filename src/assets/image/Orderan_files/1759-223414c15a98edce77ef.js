(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1759],{96418:function(e){!function(){"use strict";e.exports=".customer-advance-filter .ant-btn{border-radius:2px !important}.cascader-filter-customer .ant-cascader-menu{min-width:200px}.cascader-filter-customer .ant-cascader-menu{min-width:200px}"}()},78598:function(e,t,r){var n,a=a||function(e){"use strict";if(!("undefined"===typeof e||"undefined"!==typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=e.document,r=function(){return e.URL||e.webkitURL||e},n=t.createElementNS("http://www.w3.org/1999/xhtml","a"),a="download"in n,o=/constructor/i.test(e.HTMLElement)||e.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent),s=function(t){(e.setImmediate||e.setTimeout)((function(){throw t}),0)},l=function(e){setTimeout((function(){"string"===typeof e?r().revokeObjectURL(e):e.remove()}),4e4)},u=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},c=function(t,c,d){d||(t=u(t));var f,p=this,v="application/octet-stream"===t.type,h=function(){!function(e,t,r){for(var n=(t=[].concat(t)).length;n--;){var a=e["on"+t[n]];if("function"===typeof a)try{a.call(e,r||e)}catch(o){s(o)}}}(p,"writestart progress write writeend".split(" "))};if(p.readyState=p.INIT,a)return f=r().createObjectURL(t),void setTimeout((function(){n.href=f,n.download=c,function(e){var t=new MouseEvent("click");e.dispatchEvent(t)}(n),h(),l(f),p.readyState=p.DONE}));!function(){if((i||v&&o)&&e.FileReader){var n=new FileReader;return n.onloadend=function(){var t=i?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(t,"_blank")||(e.location.href=t),t=void 0,p.readyState=p.DONE,h()},n.readAsDataURL(t),void(p.readyState=p.INIT)}(f||(f=r().createObjectURL(t)),v)?e.location.href=f:e.open(f,"_blank")||(e.location.href=f);p.readyState=p.DONE,h(),l(f)}()},d=c.prototype;return"undefined"!==typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,r){return t=t||e.name||"download",r||(e=u(e)),navigator.msSaveOrOpenBlob(e,t)}:(d.abort=function(){},d.readyState=d.INIT=0,d.WRITING=1,d.DONE=2,d.error=d.onwritestart=d.onprogress=d.onwrite=d.onabort=d.onerror=d.onwriteend=null,function(e,t,r){return new c(e,t||e.name||"download",r)})}}("undefined"!==typeof self&&self||"undefined"!==typeof window&&window||this.content);e.exports?e.exports.saveAs=a:null!==r.amdD&&null!==r.amdO&&(void 0===(n=function(){return a}.call(t,r,t,e))||(e.exports=n))},50613:function(e,t,r){"use strict";var n,a=r(28140),o=r(65400),i=r(31059),s=r(51024),l=r(32292),u=r(74047),c=r(52700),d=r(4706),f=r(33814),p=r(44102),v=r(20775),h=r(26265),g=r(64749),m=r(23279),y=r.n(m),_=r(50361),b=r.n(_),k=r(18446),S=r.n(k),C=r(67294),O=r(14494),w=r(87217),Z=r(96418),A=r.n(Z),F=r(76570),L=r(79508),x=r(95213),I=r(9669),R=r.n(I),P=r(7690),D=r(50916),E=r(36934),T=r(33786),N=r(97705),j=r(37508),B=r(31432),U=r(82732),J=r(74125),W=C.createElement;function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,h.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,v.Z)(e);if(t){var a=(0,v.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,p.Z)(this,r)}}var H={type:"greaterOrEqual",value:void 0},K=(g.default.Option,(0,w.Z)()(n=function(e){(0,f.Z)(r,e);var t=V(r);function r(e){var n;return(0,u.Z)(this,r),n=t.call(this,e),(0,h.Z)((0,d.Z)(n),"initCascaderOptionFieldAddress",(function(e){var t=[];e.map((function(e){t.push({value:e.id,label:e.name,isLeaf:!1,info:e.name})})),n.setState({cascaderOptionFieldAddress:t,provinces:e})})),(0,h.Z)((0,d.Z)(n),"getCustomerLevels",(function(){var e=n.props,t=e.accessToken,r=e.shopId,a="".concat((0,x.LpH)(),"/shops/").concat(r,"/customer_levels?access_token=").concat(t);R().get(a).then((function(e){if(200==e.status){var t=e.data.data;n.setState({customerLevels:t})}}))})),(0,h.Z)((0,d.Z)(n),"renderOrderFilter",(function(e){var t=n.props,r=t.t,a=t.shopId,o=n.state.filters;return W("div",{onClick:function(e){return e.stopPropagation()}},W(J.Z,{key:e,viewKey:"customer",t:r,filterData:n.state[e],keyFilter:e,tags:o,keyTags:"filters",setData:function(e){return n.setState(e)},fetchData:function(){return n.debounceFetch(o)},localKey:"".concat(a,"_filter_customer_source_count")}))})),(0,h.Z)((0,d.Z)(n),"debounceFetch",y()((function(e){return n.props.fetch(e)}),300)),(0,h.Z)((0,d.Z)(n),"handleSearchEmployee",(function(e,t){var r=e.target?e.target.value:e;n.props.pushUsersTextSearch(r,n.props.users,t,"customerFilter")})),(0,h.Z)((0,d.Z)(n),"handleFilterOrderSources",(function(e,t){var r,a,o=n.state,i=o.filters,s=o.isFilterExcludeSource,u=(0,l.Z)(e,3),c=u[0],d=u[1],f=u[2],p=t[t.length-1];if("no_source"==d){i=i.filter((function(e){return"order_sources"!=e.key})),d=(0,U.Rp)([d,f]);var v=i.findIndex((function(e){return e.key==c}));-1!=v?i[v]={key:c,value:d}:i.push({key:c,value:d})}else{var h=(i=i.filter((function(e){var t;return"no_source"!=(null===(t=e.value)||void 0===t?void 0:t.order_sources)}))).findIndex((function(e){return e.key==c&&S()((0,U.Rp)([d,f]),e.value)}));if(null!==p&&void 0!==p&&p.children&&p.children.length)return void n.setState({sourceAllAccount:d});2==e.length&&p&&n.setState({sourceAllAccount:null}),d=(0,U.Rp)([d,f]),-1!=h?i.splice(h,1):i.push({key:"order_sources",value:d})}var g=null===(r=i)||void 0===r?void 0:r.find((function(e){return"order_sources"==e.key})),m=null===(a=i)||void 0===a?void 0:a.findIndex((function(e){return"is_filter_exclude_source"==e.key}));g&&(m>-1?i[m].value=s:i.push({key:"is_filter_exclude_source",value:s})),n.props.fetch(i)})),(0,h.Z)((0,d.Z)(n),"handleUsersFilter",(function(e){var t=n.props,r=t.t,a=t.employeeList,o=t.users,i=a&&a.length?a.findIndex((function(t){return t.which==e&&"customerFilter"==t.type})):-1,l=-1==i?o:a[i].users,u=i>-1?a[i].text:void 0,c=l.map((function(t){return{value:t.user_id,label:n.renderLabel(e,t.user_id,n.renderCustomer(t)),isLeaf:!0,info:t}}));return c.unshift({value:100,label:W("div",{onClick:function(e){return e.stopPropagation()}},W(s.default,{onChange:function(t){return n.handleSearchEmployee(t,e)},value:u,placeholder:r("components.orderAdvanceFilter.enterEmployee"),allowClear:!0}))}),c})),(0,h.Z)((0,d.Z)(n),"getOptions",(function(){var e=n.props,t=e.currentShop,r=e.t,l=e.accessToken,u=e.warehouses,c=e.orderFilterOptions,d=e.order_sources_custom,f=n.state,p=f.customerLevels,v=(f.filters,f.searchResult),h=f.searchPageId,g=f.isFilterExcludeSource,m=f.sourceAllAccount,y=[],_=[],b=[{value:"include",label:r("pages.shop.customer.filterInclude"),isLeaf:!1,children:y},{value:"exclude",label:r("pages.shop.customer.filterExclude"),isLeaf:!1,children:_}],k=p.length>0?{value:"selectedLevel",label:r("pages.shop.customer.filterByLevel"),isRoot:!0,children:p.map((function(e){return{key:e.id,value:e.id,label:n.renderLabel("selectedLevel",e.id,e.name),info:e}}))}:null,S={value:"tags",label:r("pages.shop.customer.filterByTag"),isRoot:!0,children:b};t.tags.map((function(e,t){y.push({key:t,value:e,isLeaf:!0,label:n.renderLabel("tags",e,e,"include")})})),t.tags.map((function(e,t){_.push({key:t,value:e,isLeaf:!0,label:n.renderLabel("tags",e,e,"exclude")})}));var O=u.map((function(e){return{value:e.id,label:e.name}})),w=(0,x.K5C)(d,t),Z=[];(0,x.caL)(n.props.currentShop).map((function(e){w.find((function(t){return t.id==e.id}))||Z.push(e)}));var A=[];w.concat(Z).concat({name:r("components.orderAdvanceFilter.noSource"),id:"no_source"}).sort((function(e){var t=e.id;return t&&["-1","-10","-11"].includes(t.toString())?-1:1})).map((function(e){var t,a,o,i,l,u,c,d,f,p,v,g=[],m=[];(null===(o=g=["-1","-7","-15"].includes(null===(t=e.id)||void 0===t?void 0:t.toString())&&h?(e.nodes||[]).filter((function(e){return(0,x.C6S)((0,x.Mle)(h),(0,x.Mle)(e.name))||e.page_id&&e.page_id==h})):"-12"==(null===(a=e.id)||void 0===a?void 0:a.toString())?[]:e.nodes)||void 0===o?void 0:o.length)>0?g.map((function(t){var r;m.push({label:(0,x._Ap)(e.id.toString(),null===(r=t.page_id)||void 0===r?void 0:r.slice(0,2))?W("div",{style:{display:"flex"}},W("div",{style:{display:"flex",justifyItems:"center"}},W(T.Z,{ids:[t.page_id],width:25,height:25,name:t.name,seed:t.id}),"\xa0",W("span",null,t.name))):W("div",null,W("span",null,t.name)),value:(t.custom_id||t.id).toString(),isLeaf:!0})})):m=["-1","-7","-15"].includes(null===(f=e.id)||void 0===f?void 0:f.toString())&&(null===(p=e.nodes)||void 0===p?void 0:p.length)>0?m:null;["-1","-7","-15"].includes(null===(i=e.id)||void 0===i?void 0:i.toString())&&m&&!m.find((function(e){return"page_id"==e.value}))&&(m.unshift({value:"page_id",label:W("span",{onClick:function(e){return e.stopPropagation()}},W(s.default,{onClick:function(e){return e.target.focus()},placeholder:r("components.orderAdvanceFilter.enterPageId"),onChange:function(e){return n.setState({searchPageId:e.target.value})},suffix:W(F.Z,null),value:h,allowClear:!0}))}),h&&"-1"==(null===(v=e.id)||void 0===v?void 0:v.toString())&&m.push({label:h,value:"search_".concat(h),isLeaf:!0}));var y=["-1","-7","-15"].includes(null===(l=e.id)||void 0===l?void 0:l.toString())?!((null===(u=g)||void 0===u?void 0:u.length)>0||h&&(null===(c=g)||void 0===c||!c.length)):!(null!==(d=g)&&void 0!==d&&d.length)>0;A.push({label:W(C.Fragment,null,W("span",null,e.icon&&W("img",{style:{width:18,height:18},src:e.icon}),W("span",{style:{fontWeight:450,marginLeft:8}},e.name))),value:e.id.toString(),isLeaf:y,children:m})})),A.unshift({label:W("div",{onClick:function(e){return e.stopPropagation()}},W(i.default,{checked:g,style:{width:"100%"},onChange:function(e){n.setState({isFilterExcludeSource:e.target.checked})}},r("components.orderAdvanceFilter.filterExclude"))),value:"is_filter_exclude_source"}),A.unshift({value:100,label:W("div",{onClick:function(e){return e.stopPropagation()}},W(o.default,{style:{height:32,width:"100%",cursor:"pointer"},type:"primary",onClick:function(){return n.handleFilterOrderSources(["order_sources",m],[])},disabled:!m},r("crm.filter")))});var L=[Q({},S),{value:"get_field_address",label:r("address"),isRoot:!0,children:n.state.cascaderOptionFieldAddress},{value:"purchasedAmount",label:r("pages.shop.customer.purchasedAmount"),isRoot:!0,children:[{key:"purchase_amount",value:"purchase_amount",disabled:!0,label:n.renderOrderFilter("purchasedAmount")}]},{value:"orderCount",label:r("pages.shop.customer.filterByOrderCount"),isRoot:!0,children:[{key:"count",value:"count",disabled:!0,label:n.renderOrderFilter("orderCount")}]},{value:"succeedOrderCount",label:r("pages.shop.customer.filterByDeliveredOrderCount"),isRoot:!0,children:[{key:"succeed_count",value:"succeed_count",disabled:!0,label:n.renderOrderFilter("succeedOrderCount")}]},{value:"returnedOrderCount",label:r("pages.shop.customer.filterByRefundOrderCount"),isRoot:!0,children:[{key:"returned_order_count",value:"returned_order_count",disabled:!0,label:n.renderOrderFilter("returnedOrderCount")}]},{value:"typeCustomer",label:r("pages.shop.customer.customerOnlineOffline"),isRoot:!0,children:[{key:"online",value:"online",isLeaf:!0,label:n.renderLabel("typeCustomer","online",r("pages.shop.customer.fbCustomer"))},{key:"offline",value:"offline",isLeaf:!0,label:n.renderLabel("typeCustomer","offline",r("pages.shop.customer.offlineCustomer"))}]},{value:"creator_id",label:r("pages.shop.customer.creator"),isRoot:!0,children:n.handleUsersFilter("creator_id")},{value:"assigned_user_id",label:r("pages.shop.customer.assignedTo"),isRoot:!0,children:[{value:"assigned_user_id",label:r("users.title"),isLeaf:!1,children:n.handleUsersFilter("assigned_user_id")},{value:"null",isLeaf:!0,label:r("components.orderAdvanceFilter.notAssigned")}]},{value:"variation",label:r("components.orderAdvanceFilter.variation"),children:[{value:"search-variation",label:W("div",{onClick:function(e){return e.stopPropagation()}},W(N.Z,{accessToken:l,searchResult:v,combo_by:"variation",searchOnly:!0,shopId:t.id,callback:function(e){return n.setState({searchResult:e})},is_filter:!0}))}].concat((0,a.Z)(v.map((function(e,a){return{value:"variation-".concat(a),label:W("div",{onClick:function(t){t.stopPropagation(),n.handleSelectItem(e.id),n.child.setPopupVisible(!1)}},W(j.Z,{width:448,t:r,key:a,currentShop:t,combo_by:"variation",item:e,warehouses:u}))}}))))},{value:"warehouse_id",label:r("pages.shop.setting.conditionWarehouse"),isRoot:!0,children:O},{value:"blocked",label:r("pages.shop.customer.filterBlocked")},{value:"using_coupon",label:r("pages.shop.customer.filterCoupon")},{value:"order_sources",label:r("components.orderAdvanceFilter.orderSource"),isRoot:!0,children:A}];return t.reward_point_settings&&"true"==t.reward_point_settings.enabled&&L.unshift({value:"rewardPoint",label:r("pages.shop.customer.filterByRewardPoint"),isRoot:!0,children:[{key:"reward_point",value:"reward_point",disabled:!0,label:n.renderOrderFilter("rewardPoint")}]}),k&&L.unshift(k),(0,x.QIx)(L,"".concat(n.props.shopId,"_filter_customer_source_count")).concat(c||[])})),(0,h.Z)((0,d.Z)(n),"handleSelectItem",(function(e){if("no-result"!=e){var t=n.state,r=t.searchResult,a=t.filters,o=r.find((function(t){return t.id===e}));localStorage.setItem("searchResult",JSON.stringify(o));var i=o&&o.product.name,s=o&&(o.custom_id||(0,x.pyT)(o.display_id,0)),l=o&&(o.product.custom_id||(0,x.pyT)(o.product.display_id,0)),u={key:"variation_id",value:e,name:i,var_display_id:s,product_display_id:l},c=a.findIndex((function(e){return"variation_id"==e.key}));-1!=c?(a[c].value=e,a[c].name=i,a[c].var_display_id=s,a[c].product_display_id=l):a.push(u);var d=a.filter((function(e){return e.key}));n.setState({filters:d}),n.props.fetch(d)}})),(0,h.Z)((0,d.Z)(n),"renderCustomer",(function(e){var t,r,n,a;return W("span",{style:{display:"flex",justifyItems:"center"}},W(D.Z,{id:null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.fb_id,size:[20,20],seed:null===e||void 0===e||null===(r=e.user)||void 0===r?void 0:r.id,name:null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.name}),"\xa0",W("span",null,null===e||void 0===e||null===(a=e.user)||void 0===a?void 0:a.name))})),(0,h.Z)((0,d.Z)(n),"renderLabel",(function(e,t,r,a){var o=n.state.filters;return W("div",{style:{display:"flex",justifyContent:"space-between"}},W("div",null,r),o.find((function(r){return r.key==e&&(r.value==t||r.value.length>1&&r.value[1]==t&&r.value[0]==a)}))&&W("div",{style:{marginLeft:10}},W(L.Z,{style:{color:"#096dd9"}})))})),(0,h.Z)((0,d.Z)(n),"getFieldsAddress",(function(e,t){var r=t[t.length-1],a=[],o=[],i=!1;if(t.map((function(e){a.push(e),o.push(e.value)})),t.length>2&&(i=!0),1==n.props.currentShop.country_code.length){var s=n.props.currentShop.country_code[0];o.unshift(s),i=!0}n.setState({fieldAddress:a,values:o,visibleFilterByFieldAdress:i,updateOptionCascader:!0},(function(){r.isLeaf&&100!=r.value&&n.handleFilterAddress()}))})),(0,h.Z)((0,d.Z)(n),"handleFilterAddress",(function(){var e=b()(n.state.filters),t=b()(n.state.values),r=b()(n.state.fieldAddress),a="get_field_address",o={key:a,value:t,info:r};switch(t.length){case 3:e=e.filter((function(e){return e.key==a&&e.value[2]!=t[2]||e.key!=a}));break;case 4:e=e.filter((function(e){return e.key!=a||e.key==a&&(e.value[2]!=t[2]||e.value[3]&&e.value[3]!=t[3])}));break;case 5:e=e.filter((function(e){return e.key!=a||e.key==a&&(e.value[2]!=t[2]||e.value[3]&&e.value[3]!=t[3]||e.value[4]&&!S()(e.value,t))}))}e.push(o),(0,x.iAs)(a,"".concat(n.props.shopId,"_filter_customer_source_count")),n.setState({filters:e}),n.props.fetch(e)})),(0,h.Z)((0,d.Z)(n),"handleFilterTags",(function(e,t){var r=n.state.filters,a=[],o=[],i="tags",s=e[2],l=0;t[t.length-1];t.map((function(e){e.value!=i&&(o.push(e.value),a.push(e))}));var u={key:i,value:o,info:a},c=r.findIndex((function(e){return e.key==i&&S()(e.value,o)}));if(-1!=c?r.splice(c,1):r.push(u),r.map((function(e){e.key==i&&S()(e.value[1],s)&&l++})),l>1){var d=r.findIndex((function(e){return S()(e.value[1],s)}));-1!=d&&r.splice(d,1)}(0,x.iAs)(i,"".concat(n.props.shopId,"_filter_customer_source_count")),n.setState({filters:r}),n.props.fetch(r)})),(0,h.Z)((0,d.Z)(n),"onChangeCascader",(function(e,t){var r,a,o,i,s,l,u,c,d;if((null===t||void 0===t||!t.length||null===(r=t[(null===t||void 0===t?void 0:t.length)-1])||void 0===r||!r.isRoot)&&((!t[1]||100!=t[1].value)&&e))if(t&&"get_field_address"==(null===(a=t[0])||void 0===a?void 0:a.value))n.getFieldsAddress(e,t);else if(t&&"tags"==(null===(o=t[0])||void 0===o?void 0:o.value))null!==(d=t[t.length-1])&&void 0!==d&&d.isLeaf&&n.handleFilterTags(e,t);else if(t&&"order_sources"==(null===(i=t[0])||void 0===i?void 0:i.value))n.handleFilterOrderSources(e,t);else if((!t||"assigned_user_id"!=(null===(s=t[0])||void 0===s?void 0:s.value)||null!==(l=t[t.length-1])&&void 0!==l&&l.isLeaf)&&(!t||"order_sources"!=(null===(u=t[0])||void 0===u?void 0:u.value)||null!==(c=t[t.length-1])&&void 0!==c&&c.isLeaf)){var f,p,v,h=n.state.filters;switch(e.length){case 2:f=e[0],p=e[1],v=t[1].info;break;case 3:f=e[1],p=e[2],v=t[2].info||t[2].label}"blocked"!=e[0]&&"using_coupon"!=e[0]||(f=e[0],p=!0);var g={key:f,value:p,info:v};"order_tag"==f&&"no_tag"==p&&(h=h.filter((function(e){return"order_tag"!=e.key})));var m=h.find((function(e){return"order_tag"==e.key&&"no_tag"==e.value}));if(["order_assigning_seller_id","order_marketer"].includes(f)||"order_tag"==f&&m){var y=h.findIndex((function(e){return e.key==f}));-1!=y?h[y]=g:h.push(g)}else{var _=h.findIndex((function(e){return e.key==f&&e.value==p}));-1!=_?h.splice(_,1):h.push(g)}if("assigned_user_id"==f)if("null"!=p){var b=h.findIndex((function(e){return e.key==f&&"null"==e.value}));-1!=b&&h.splice(b,1)}else for(var k=function(e){return e.key==f&&"null"!=e.value},S=h.filter(k).length,C=0;C<S;C++)h.splice(h.findIndex(k),1);1==t.length&&t[0].children||((0,x.iAs)(f,"".concat(n.props.shopId,"_filter_customer_source_count")),n.setState({filters:h,values:[],fieldAddress:[]}),n.props.fetch(h))}})),(0,h.Z)((0,d.Z)(n),"chooseProvince",(function(e,t){var r=localStorage.getItem("provinces_".concat(t));if(r)n.parseAddress(e,JSON.parse(r),"provinces");else{var a="".concat((0,x.LpH)(),"/geo/provinces?country_code=").concat(t);R().get(a).then((function(r){r.data&&1==r.data.success&&(localStorage.setItem("provinces_".concat(t),JSON.stringify(r.data.data)),n.parseAddress(e,r.data.data,"provinces"))}))}})),(0,h.Z)((0,d.Z)(n),"chooseDistrict",(function(e,t){var r=localStorage.getItem("province_".concat(t));if(r)n.parseAddress(e,JSON.parse(r),"districts");else{var a="".concat((0,x.LpH)(),"/geo/districts?province_id=").concat(t);R().get(a).then((function(r){r.data&&1==r.data.success&&(localStorage.setItem("province_".concat(t),JSON.stringify(r.data.data)),n.parseAddress(e,r.data.data,"districts"))}))}})),(0,h.Z)((0,d.Z)(n),"chooseCommune",(function(e,t){var r=localStorage.getItem("district_".concat(t));if(r)n.parseAddress(e,JSON.parse(r),"communes");else{var a="".concat((0,x.LpH)(),"/geo/communes?district_id=").concat(t);R().get(a).then((function(r){r.data&&1==r.data.success&&(localStorage.setItem("district_".concat(t),JSON.stringify(r.data.data)),n.parseAddress(e,r.data.data,"communes"))}))}})),(0,h.Z)((0,d.Z)(n),"parseAddress",(function(e,t,r){var a;e.loading=!1,e.children=t.map((function(e){return{label:e.name,value:e.id,isLeaf:"communes"==r,info:e.name}})),n.setState((a={},(0,h.Z)(a,r,t),(0,h.Z)(a,"updateOptionCascader",!0),a))})),(0,h.Z)((0,d.Z)(n),"loadDataCascader",(function(e){var t=n.props.currentShop,r=e[e.length-1];r.loading=!0;var a=t.country_code.length;switch(e.length){case 1:if(a>1)return;return void n.chooseProvince(r,t.country_code[0]);case 2:return void(a>1?n.chooseProvince(r,r.value):n.chooseDistrict(r,r.value));case 3:return void(a>1?n.chooseDistrict(r,r.value):n.chooseCommune(r,r.value));case 4:return void(a>1&&n.chooseCommune(r,r.value))}})),n.state={customerLevels:[],filters:[],cascaderOptionFieldAddress:[],provinces:[],districts:[],communes:[],tessetd:0,fieldAddress:[],visibleFilterByFieldAdress:!1,updateOptionCascader:!1,values:[],searchPage:"",searchResult:[],searchPageId:"",isFilterExcludeSource:!1,sourceAllAccount:null,purchasedAmount:Q({},H),orderCount:Q({},H),succeedOrderCount:Q({},H),returnedOrderCount:Q({},H),rewardPoint:Q({},H)},n}return(0,c.Z)(r,[{key:"componentDidUpdate",value:function(e){var t=this,r=this.props.filters;if(!S()(r,e.filters)){var n=r.reduce((function(e,t){return["purchasedAmount","orderCount","succeedOrderCount","returnedOrderCount","rewardPoint"].includes(t.key)?Q(Q({},e),{},(0,h.Z)({},t.key,t.value)):e}),{purchasedAmount:Q({},H),orderCount:Q({},H),succeedOrderCount:Q({},H),returnedOrderCount:Q({},H),rewardPoint:Q({},H)});this.setState(Q(Q({},n),{},{filters:r}))}if(this.state.updateOptionCascader){var i=(0,a.Z)(this.state.cascaderOptionFieldAddress);if(i[0]){var s=!(this.state.values.length>2)||!this.state.visibleFilterByFieldAdress,l={value:100,isLeaf:!0,label:W("span",{onClick:function(e){return e.stopPropagation()},style:{position:"absolute",zIndex:30}},W(o.default,{style:{height:32,width:120,cursor:"pointer"},type:"primary",onClick:function(){return t.handleFilterAddress()},disabled:s},"L\u1ecdc"))};100!=i[0].value?i.unshift(l):i[0]=l,i.find((function(e){return"A"==e.value}))||i.splice(1,0,{value:"A",label:W("span",{onClick:function(e){return e.stopPropagation()},style:{color:"#fff"}},"A")}),this.setState({cascaderOptionFieldAddress:i,updateOptionCascader:!1})}}}},{key:"componentWillUnmount",value:function(){this.handleSearchEmployee("",null)}},{key:"componentDidMount",value:function(){var e=this,t=this.props.currentShop;this.getCustomerLevels();var r=[];if(t.country_code.length>1)t.country_code.map((function(e){r.push({value:e,label:(0,x.bbV)(e),isLeaf:!1})})),this.setState({cascaderOptionFieldAddress:r});else{var n=localStorage.getItem("provinces_".concat(t.country_code[0]));if(n)n=JSON.parse(n),this.initCascaderOptionFieldAddress(n);else{var a="".concat((0,x.LpH)(),"/geo/provinces?country_code=").concat(t.country_code[0]);R().get(a).then((function(r){r.data&&1==r.data.success&&(localStorage.setItem("provinces_".concat(t.country_code[0]),JSON.stringify(r.data.data)),n=r.data.data,e.initCascaderOptionFieldAddress(n))}))}}this.setState({updateOptionCascader:!0})}},{key:"render",value:function(){var e=this;return W("div",{className:"customer-advance-filter"},W(P.Z,{options:this.getOptions(),popupClassName:"cascader-filter-customer",onChange:this.onChangeCascader,loadData:this.loadDataCascader,changeOnSelect:!0,onRef:function(t){e.child=t}}),W("style",{dangerouslySetInnerHTML:{__html:A()}}))}}]),r}(C.Component))||n);t.Z=(0,O.$j)((function(e){return{currentShop:e.shop.currentShop,timezone:e.navigation.user.timezone,users:e.user.users,employeeList:e.user.filterEmployeeList,warehouses:e.warehouse.warehouses,order_sources_custom:(0,B.ME)(e)}}),{pushUsersTextSearch:E.mw6})(K)},74125:function(e,t,r){"use strict";var n=r(74047),a=r(52700),o=r(4706),i=r(33814),s=r(44102),l=r(20775),u=r(26265),c=r(51024),d=r(64749),f=r(50361),p=r.n(f),v=r(67294),h=r(14494),g=r(95213),m=v.createElement;function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var a=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}var _=d.default.Option,b=c.default.Group,k=function(e){(0,i.Z)(r,e);var t=y(r);function r(){var e;(0,n.Z)(this,r);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),(0,u.Z)((0,o.Z)(e),"renderSelectTypeFilter",(function(){var t=e.props,r=t.filterData,n=t.t,a=t.viewKey;return m(d.default,{onChange:function(t){return e.onChangeFilterQuantity(t,"type")},value:r.type,style:{minWidth:"80px"}},"customer"==a&&m(_,{value:"equal",key:4},"="),m(_,{value:"greaterOrEqual",key:1},">="),m(_,{value:"smallerOrEqual",key:2},"<="),m(_,{value:"between",key:3},n("pages.shop.product.management.between")))})),(0,u.Z)((0,o.Z)(e),"onChangeFilterQuantity",(function(t,r){var n=e.props,a=n.tags,o=n.filterData,i=n.keyFilter,s=n.localKey,l=n.setData,c=n.fetchData,d=n.keyTags,f=p()(a),v=""==t?void 0:t;o[r]=v,l((0,u.Z)({},i,o));var h=f.findIndex((function(e){return e.key==i}));v||0==v?-1!=h?f[h].value=o:f.push({key:i,value:o}):-1!=h&&(f.splice(h,1),l({tags:f})),("between"==o.type&&void 0!=o.maxValue&&void 0!=o.minValue||"between"!=o.type&&void 0!=o.value)&&(s&&(0,g.iAs)(i,s),l((0,u.Z)({},d||"tags",f)),c((0,u.Z)({},i,o)))})),(0,u.Z)((0,o.Z)(e),"renderBetweenFilter",(function(){var t=e.props,r=t.filterData,n=t.t;return m(b,{compact:!0},m(c.default,{placeholder:n("pages.shop.product.management.minimum"),style:{maxWidth:200,textAlign:"center"},addonBefore:e.renderSelectTypeFilter(),onClick:function(e){return e.target.focus()},value:r.minValue,onChange:function(t){return e.onChangeFilterQuantity(t.target.value,"minValue")}}),m(c.default,{style:{width:32,borderLeft:0,pointerEvents:"none",backgroundColor:"#fff"},placeholder:"~",disabled:!0}),m(c.default,{placeholder:n("pages.shop.product.management.maximum"),style:{width:100,textAlign:"center",borderLeft:0},onClick:function(e){return e.target.focus()},value:r.maxValue,onChange:function(t){return e.onChangeFilterQuantity(t.target.value,"maxValue")}}))})),e}return(0,a.Z)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.t,n=t.filterData,a=t.warehouses,o=t.keyFilter,i=t.viewKey;return m("div",{style:{display:"grid",marginBottom:10}},!["profitRate","filterWeight"].includes(o)&&"customer"!=i&&m(d.default,{value:n.warehouseId,style:{width:"100%",marginBottom:10},placeholder:r("pages.shop.product.promotionAdvance.selectWarehouse"),onChange:function(t){return e.onChangeFilterQuantity(t,"warehouseId")}},m(_,{value:"all",key:"all"},r("pages.shop.statistic.overview.allWarehouse")),a.map((function(e){return m(_,{value:e.id,key:e.id},e.name)}))),"between"==n.type&&this.renderBetweenFilter(),"between"!=n.type&&m("span",null,m(c.default,{addonBefore:this.renderSelectTypeFilter(),placeholder:r("pages.shop.product.promotionAdvance.enterQuantity"),onClick:function(e){return e.target.focus()},value:n.value,onChange:function(t){return e.onChangeFilterQuantity(t.target.value,"value")}})))}}]),r}(v.Component);t.Z=(0,h.$j)((function(e){return{warehouses:e.warehouse.warehouses}}))(k)}}]);