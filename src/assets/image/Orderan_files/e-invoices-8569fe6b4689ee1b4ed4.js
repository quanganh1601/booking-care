(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2474],{71025:function(e){!function(){"use strict";e.exports=".order-control-container .tools-container .filters{float:right;display:flex}.order-control-container .tools-container .filters .ant-input-affix-wrapper{width:40vw;position:absolute;top:-48px;z-index:1000;border:0;border-radius:0;border-left:1px solid #d9d9d9;height:48px;padding-left:20px;left:300px}.order-control-container .tools-container .filters .ant-input-affix-wrapper .ant-input-prefix{font-size:16px;font-weight:bold;margin-left:10px}.order-control-container .tools-container .filters .ant-input-affix-wrapper .ant-input{border:none;font-size:15px !important;background:#fff}.order-control-container .tools-container .filters .ant-input-affix-wrapper .ant-input:focus{box-shadow:none}.order-control-container .tools-container .filters .ant-select{width:150px;margin-left:10px}.order-control-container .tools-container .filters .clear-filter{margin-right:0}@media screen and (max-width: 740px){.order-control-container .tools-container .filters{float:none;margin-top:10px}.order-control-container .tools-container .filters .ant-input-search{width:100%}.order-control-container .tools-container .filters .ant-select{width:50%}}.ant-table-wrapper .ant-table .ant-table-header{border-top:1px solid #d9d9d9}.ant-table-wrapper .ant-table-body .ant-table-row{cursor:pointer;height:40px}.ant-table-wrapper .ant-table-body .ant-table-tbody .ant-table-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ant-table-wrapper .ant-table-body .ant-table-tbody .ant-table-cell-ellipsis,.ant-table-wrapper .ant-table-body .ant-table-tbody .ant-table-cell-fix-right{overflow:unset !important}.ant-table-wrapper{border:0 !important}.ant-table-row:hover .folder-action{margin-left:5px;width:16px !important}.ant-table-row:hover .folder-action .icon-button{margin-left:0px !important}.ant-table-row:hover .group-action{margin-right:0px !important}"}()},7690:function(e,t,n){"use strict";var a,o=n(71535),i=n(65400),r=n(74047),s=n(52700),l=n(4706),c=n(33814),u=n(44102),d=n(20775),p=n(26265),h=n(65988),f=n(67294),v=n(99069),g=n(17405),m=n(57254),y=n(87217),b=n(95213),_=n(20920),Z=f.createElement;function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.Z)(e);if(t){var o=(0,d.Z)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,u.Z)(this,n)}}var S="btn-filter",k=(0,y.Z)()(a=function(e){(0,c.Z)(n,e);var t=w(n);function n(e){var a;return(0,r.Z)(this,n),a=t.call(this,e),(0,p.Z)((0,l.Z)(a),"handleClickOutSideFilter",(function(e){var t=a.state.popupVisible,n=a.props,o=n.popupClassName,i=n.id,r=n.field;e.stopPropagation();var s=document.getElementsByClassName(o)[0],l=document.getElementById("advance-filter-".concat(null===r||void 0===r?void 0:r.name));if(s){var c=s.getBoundingClientRect();if(c.left<e.x&&e.x<c.right&&c.top<e.y&&e.y<c.bottom)return}var u=document.getElementsByClassName("ant-picker-dropdown-range")[0],d=i?document.getElementById(i):document.getElementById(S);s&&(s.contains(e.target)||d.contains(e.target)||u&&u.contains(e.target)||l&&l.contains(e.target)||t&&a.setPopupVisible(!1))})),(0,p.Z)((0,l.Z)(a),"setPopupVisible",(function(e){return a.setState({popupVisible:e})})),(0,p.Z)((0,l.Z)(a),"handleFilter",(function(){var e=a.props,t=e.field,n=e.callBackField,o=e.type,i=(e.popupClassName,a.state.popupVisible);a.setPopupVisible(!i),o&&n(t)})),(0,p.Z)((0,l.Z)(a),"styleModal",(function(e){var t=a.props,n=t.columnsWidth,o=t.field,i=t.dataSource,r=n[o.name];return r=(r=r||(0,b.IQS)(i,o.type==(0,_.Rt)().boolean.id?o.label:o.name))&&(r.toString().includes("em")?r:"".concat(r,"px")),Z(h.default,{id:"2766829989",dynamic:[e,r,e]},[".".concat(e," .ant-cascader-menu:first-child{width:").concat(r,";min-width:150px;max-width:285px;}"),".".concat(e," .ant-cascader-menu-item-disabled{position:-webkit-sticky;position:sticky;top:-4px;padding-top:5px;z-index:900;background-color:#fff;}")])})),(0,p.Z)((0,l.Z)(a),"getButton",(function(){var e=a.props,t=e.t,n=e.label,o=e.type,r=e.field,s=e.popupClassName,l=e.id,c=e.noIcon;return n?Z("span",{id:l||S,className:"btn-advance-filter",onClick:a.handleFilter},n):o?Z("span",{id:"advance-filter-".concat(r.name),onClick:function(){return a.handleFilter()},style:{width:20}},a.styleModal(s),Z(v.Z,{style:{color:"#949494"},className:"field-icon"})):Z(i.default,{id:l||S,icon:c?null:Z(g.Z,null),onClick:function(){return a.handleFilter()},className:"btn-advance-filter"},t("crm.addFilter"),Z(m.Z,null))})),a.state={popupVisible:!1},a}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){this.props.onRef&&this.props.onRef(this),document.addEventListener("click",this.handleClickOutSideFilter,!1)}},{key:"componentWillUnmount",value:function(){this.props.onRef&&this.props.onRef(null),document.removeEventListener("click",this.handleClickOutSideFilter,!1)}},{key:"render",value:function(){var e=this.props,t=e.options,n=e.popupClassName,a=e.onChange,i=e.changeOnSelect,r=e.loadData,s=e.disabled,l=e.displayRender,c=e.type,u=this.state.popupVisible;return Z(o.Z,{defaultValue:c?["$customize"]:"",popupVisible:u,popupClassName:n,options:t,popupPlacement:"bottomRight",changeOnSelect:i,onChange:a,loadData:r,disabled:s,displayRender:l},this.getButton())}}]),n}(f.Component))||a;t.Z=k},45812:function(e,t,n){"use strict";var a=n(65400),o=n(74806),i=n(67294),r=n(54549),s=n(74298),l=i.createElement;t.Z=function(e){var t=e.loadingData,n=e.selectedLength,i=e.total,c=e.onClick;return 0!=n||t?l(a.default,{onClick:c},t&&l(o.default,{type:"circle",percent:Math.round(n/(i||1)*100),width:18,strokeWidth:16,format:function(){return null},style:{marginRight:4}}),l("b",null,n),"\xa0",s.ZP.t("pages.shop.order.selectedOrder"),"  ",l(r.Z,null)):null}},65644:function(e,t,n){"use strict";var a=n(74047),o=n(52700),i=n(4706),r=n(33814),s=n(44102),l=n(20775),c=n(26265),u=n(67294),d=n(14494),p=n(36934),h=u.createElement;function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var m=function(e){(0,r.Z)(n,e);var t=g(n);function n(e){var o;return(0,a.Z)(this,n),o=t.call(this,e),(0,c.Z)((0,i.Z)(o),"listenMeronpan",(function(){var e=o.props,t=e.extension,n=e.dispatch;null==t&&(o.unlistenMeronpan(),window.addEventListener("message",o.listenMeronpanHandler.bind((0,i.Z)(o),n)),window.postMessage({type:"CHECK_EXTENSION_VERSION",from:"WEBPAGE"},"*"),window.postMessage({type:"CHECK_EXTENSION",from:"WEBPAGE"},"*"))})),(0,c.Z)((0,i.Z)(o),"listenMeronpanHandler",(function(e,t){if("WEBPAGE"!=t.data.from)switch(t.data.type){case"EXTENSION_LOADED":window.postMessage({type:"CHECK_EXTENSION",from:"WEBPAGE"},"*");break;case"REPORT_EXTENSION_STATUS":e((0,p.GoT)(t.data.connectionStatus));break;case"EXTENSION_VERSION":e((0,p.HfQ)(t.data.version))}})),(0,c.Z)((0,i.Z)(o),"unlistenMeronpan",(function(){window.removeEventListener("message",o.listenMeronpanHandler)})),o}return(0,o.Z)(n,[{key:"componentWillUnmount",value:function(){this.unlistenMeronpan()}},{key:"componentDidMount",value:function(){this.listenMeronpan()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,a=e.onScroll,o=e.style,i=e.top,r=e.height;return h("div",{id:"container-layout",onScroll:a,style:this.props.fullScreen?v(v(v({},y),o),{},{top:0,height:"calc(100%)"}):v(v(v({},y),o),{},{top:i||49,height:r||"calc(100% - ".concat(i||49,"px)")}),className:"__container-layout ".concat(t||"")},n)}}]),n}(u.Component),y={overflowY:"overlay",overflowX:"hidden",position:"absolute",height:"calc(100% - 49px)",width:"100%",padding:"10px 0",top:49,left:0};t.Z=(0,d.$j)((function(e){return{fullScreen:e.navigation.fullScreen,extension:e.shop.extension}}),null)(m)},84252:function(e,t,n){"use strict";n.r(t);var a=n(56697),o=n(74806),i=n(64749),r=n(65400),s=n(809),l=n.n(s),c=n(92447),u=n(32292),d=n(59361),p=n(51024),h=n(74047),f=n(52700),v=n(4706),g=n(33814),m=n(44102),y=n(20775),b=n(26265),_=n(14321),Z=n(23279),w=n.n(Z),S=n(57557),k=n.n(S),x=n(67294),C=n(92902),I=n(30381),D=n.n(I),E=n(9669),O=n.n(E),R=n(14494),N=n(65644),T=n(71025),M=n.n(T),P=n(7690),U=n(31731),F=n(36934),L=n(95213),j=n(96129),z=n(25592),Y=n(50161),K=n(76570),B=n(41850),V=n(45812),Q=n(22318),H=n(7145),X=n.n(H),q=n(84707),W=x.createElement;function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,y.Z)(e);if(t){var o=(0,y.Z)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,m.Z)(this,n)}}var J=_.default.RangePicker,ee=["30","50","100"],te={page:1,page_size:30},ne=function(e){(0,g.Z)(n,e);var t=G(n);function n(e){var s;return(0,h.Z)(this,n),s=t.call(this,e),(0,b.Z)((0,v.Z)(s),"componentDidMount",(function(){s.onSync()})),(0,b.Z)((0,v.Z)(s),"onSync",(function(){s.fetchListEinvoices()})),(0,b.Z)((0,v.Z)(s),"onChangeSearchText",(function(e){var t=s.state.params;e.persist();var n=e.target.value;n?s.setState({params:X()(t,{$merge:{search:n}})}):s.setState({params:X()(t,{$unset:["search"]})}),s.delaySearch()})),(0,b.Z)((0,v.Z)(s),"delaySearch",w()((function(){return s.fetchListEinvoices()}),400)),(0,b.Z)((0,v.Z)(s),"fetchListEinvoices",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s.props,n=t.accessToken,a=t.shopId,o=$($($({},e),s.state.params),{},{page_size:s.state.pageSize});return s.setState({isLoading:!0}),s.props.fetchListEinvoices(n,a,o).then((function(){return s.setState({isLoading:!1})}))})),(0,b.Z)((0,v.Z)(s),"handleClearFilter",(function(){s.setState({params:$({},te),dataFilter:[]},(function(){s.fetchListEinvoices(s.state.params)}))})),(0,b.Z)((0,v.Z)(s),"handleSearchEmployee",(function(e,t){var n=s.props,a=n.pushUsersTextSearch,o=n.users;a(e.target?e.target.value:e,o,t,"invoicesFilter")})),(0,b.Z)((0,v.Z)(s),"renderUsers",(function(e,t){var n=s.props,a=n.employeeList,o=n.users,i=a&&a.length?a.findIndex((function(t){return t.which==e&&"invoicesFilter"==t.type})):-1,r=-1==i?o:a[i].users,l=i>-1?a[i].text:void 0,c=r.map((function(e){var t=e.user_id;return{value:t,label:(0,L.q$s)(t,r)}}));return t?l:c})),(0,b.Z)((0,v.Z)(s),"onChangeFilterDate",(function(e,t){var n=s.state,a=n.params,o=n.dataFilter,i=o.findIndex((function(e){return e.key==t}));if(e&&e.length>0){var r=e[0].startOf("day").unix(),l=e[1].endOf("day").unix(),c={key:t,value:"einvoice_date"==t?{startDate:e[0].startOf("day"),endDate:e[1].endOf("day")}:{startDateRelease:e[0].startOf("day"),endDateRelease:e[1].endOf("day")}};i>-1?o[i]=c:o.push(c),"einvoice_date"==t?(a.startDate=r,a.endDate=l):(a.startDateRelease=r,a.endDateRelease=l),s.fetchListEinvoices(a)}else{i>-1&&s.setState({dataFilter:o.splice(i,1)});var u=a;u="einvoice_date"==t?(u=u.startDate?k()(u,"startDate"):u).endDate?k()(u,"endDate"):u:(u=u.startDateRelease?k()(u,"startDateRelease"):u).endDateRelease?k()(u,"endDateRelease"):u,s.setState({params:u},(function(){return s.fetchListEinvoices(u)}))}s.setState({dataFilter:o})})),(0,b.Z)((0,v.Z)(s),"renderRangePicker",(function(e,t,n){var a,o=s.props.t;return W("span",{onClick:function(e){return e.stopPropagation()}},W(J,{ranges:(a={},(0,b.Z)(a,o("pages.shop.statistic.yesterday"),[D()().add(-1,"days").startOf("day"),D()().add(-1,"days").endOf("day")]),(0,b.Z)(a,o("pages.shop.statistic.today"),[D()().startOf("day"),D()().endOf("day")]),(0,b.Z)(a,o("pages.shop.statistic.lastWeek"),[D()().add(-7,"days").startOf("day"),D()().endOf("day")]),(0,b.Z)(a,o("pages.shop.statistic.lastMonth"),[D()().add(-30,"days").startOf("day"),D()().endOf("day")]),(0,b.Z)(a,o("pages.shop.statistic.thisMonth"),[D()().startOf("month").startOf("day"),D()().endOf("month").endOf("day")]),a),value:n&&t?[D()(t,"X"),D()(n,"X")]:[],format:"DD/MM/YYYY",style:{width:300,marginRight:10},onChange:function(t){return s.onChangeFilterDate(t,e)}}))})),(0,b.Z)((0,v.Z)(s),"invoiceStatus",(function(){return[{value:0,label:"Ch\u01b0a ph\xe1t h\xe0nh"},{value:1,label:"Ch\u1edd ph\xe1t h\xe0nh"},{value:2,label:"\u0110\xe3 ph\xe1t h\xe0nh"},{value:3,label:"\u0110\xe3 h\u1ee7y"}]})),(0,b.Z)((0,v.Z)(s),"showOptionsFilter",(function(){var e=s.state.params,t=s.props.t;return[{value:"status",label:"Tr\u1ea1ng th\xe1i h\xf3a \u0111\u01a1n",children:s.invoiceStatus()},{value:"payment_method",label:"Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n",children:[{value:"TM/CK",label:"Ti\u1ec1n m\u1eb7t/ Chuy\u1ec3n kho\u1ea3n"},{value:"TM",label:"Ti\u1ec1n m\u1eb7t"},{value:"CK",label:"Chuy\u1ec3n kho\u1ea3n"}]},{value:"creator_id",label:t("pages.shop.orderControlInfo.creator"),children:[{value:100,label:W("div",{onClick:function(e){return e.stopPropagation()}},W(p.default,{onChange:function(e){return s.handleSearchEmployee(e,"creator_id")},value:s.renderUsers("creator_id",!0),placeholder:t("components.orderAdvanceFilter.enterEmployee"),allowClear:!0}))}].concat(s.renderUsers("creator_id",!1))},{value:"einvoice_date",label:"Ng\xe0y h\xf3a \u0111\u01a1n",children:[{value:"period",label:s.renderRangePicker("einvoice_date",null===e||void 0===e?void 0:e.startDate,null===e||void 0===e?void 0:e.endDate)}]},{value:"release_date",label:"Ng\xe0y ph\xe1t h\xe0nh",children:[{value:"period",label:s.renderRangePicker("release_date",null===e||void 0===e?void 0:e.startDateRelease,null===e||void 0===e?void 0:e.endDateRelease)}]}]})),(0,b.Z)((0,v.Z)(s),"onClickMenuItem",(function(e){var t=s.state,n=t.params,a=t.dataFilter,o=e[1],i=e[0];if("einvoice_date"!=i&&"release_date"!=i||"period"!=o){var r=n;r[i]=o;var l=a.findIndex((function(e){return e.key==i}));l>-1?a[l]={key:i,value:o}:a.push({key:i,value:o}),s.setState({params:r,dataFilter:a},(function(){return s.fetchListEinvoices(r)}))}})),(0,b.Z)((0,v.Z)(s),"handleCloseTag",(function(e){var t=s.state,n=t.dataFilter,a=t.params,o=n[e].key;n.splice(e,1),a=a[o]?k()(a,o):a,"einvoice_date"==o?(a=k()(a,"startDate"),a=k()(a,"endDate")):"release_date"==o&&(a=k()(a,"startDateRelease"),a=k()(a,"endDateRelease")),s.setState({dataFilter:n,params:a},(function(){s.fetchListEinvoices(s.state.params)}))})),(0,b.Z)((0,v.Z)(s),"handleShowDataFilter",(function(e,t){var n,a=s.props,o=a.t,i=a.users,r=a.timezone,l="",c="";switch(e.key){case"status":l="Tr\u1ea1ng th\xe1i h\xf3a \u0111\u01a1n",c=null===(n=s.invoiceStatus().find((function(t){return t.value==e.value})))||void 0===n?void 0:n.label;break;case"payment_method":l="Ph\u01b0\u01a1ng th\u1ee9c thanh to\xe1n",c="TM/CK"==e.value?"Ti\u1ec1n m\u1eb7t/ Chuy\u1ec3n kho\u1ea3n":"TM"==e.value?"Ti\u1ec1n m\u1eb7t":"Chuy\u1ec3n kho\u1ea3n";break;case"creator_id":l=o("pages.shop.orderControlInfo.creator"),c=i.find((function(t){return t.user_id==e.value})).user.name;break;case"einvoice_date":l="Ng\xe0y h\xf3a \u0111\u01a1n";var u=(0,L.o0x)(r,e.value.startDate||"",!1,"DD/MM/YYYY"),p=(0,L.o0x)(r,e.value.endDate||"",!1,"DD/MM/YYYY");c="".concat(o("pages.shop.product.purchase.from")," ").concat(u," - ").concat(o("pages.shop.product.purchase.to")," ").concat(p);break;case"release_date":l="Ng\xe0y ph\xe1t h\xe0nh";var h=(0,L.o0x)(r,e.value.startDateRelease||"",!1,"DD/MM/YYYY"),f=(0,L.o0x)(r,e.value.endDateRelease||"",!1,"DD/MM/YYYY");c="".concat(o("pages.shop.product.purchase.from")," ").concat(h," - ").concat(o("pages.shop.product.purchase.to")," ").concat(f)}return W(d.default,{key:"".concat(e.key,"_").concat(e.value,"}"),closable:!0,onClose:function(){return s.handleCloseTag(t)}},W("span",null,"".concat(l,":")," ",W("strong",null,c)))})),(0,b.Z)((0,v.Z)(s),"parseStatusInvoice",(function(e){switch(e){case 0:return W(d.default,{style:{width:130,backgroundColor:"#e8e8e8"},color:"default"},"Ch\u01b0a ph\xe1t h\xe0nh");case 1:return W(d.default,{style:{width:130},color:"warning"},"Ch\u1edd ph\xe1t h\xe0nh");case 2:return W(d.default,{style:{width:130},color:"success"},"\u0110\xe3 ph\xe1t h\xe0nh");case 3:return W(d.default,{style:{width:130},color:"error"},"\u0110\xe3 h\u1ee7y")}})),(0,b.Z)((0,v.Z)(s),"parsePaymentMethod",(function(e){switch(e){case"CK":return"Chuy\u1ec3n kho\u1ea3n";case"TM":return"Ti\u1ec1n m\u1eb7t";case"TM/CK":return"Ti\u1ec1n m\u1eb7t/ Chuy\u1ec3n kho\u1ea3n"}})),(0,b.Z)((0,v.Z)(s),"getDataSourceEinvoices",(function(){var e=s.props,t=e.listEinvoices,n=e.currentShop,a=e.timezone,o=(0,v.Z)(s).lengthData,i=[];return[(t.data||[]).map((function(e){var t,r,l,c,u;return i.push({key:o(e.id),index:o(e.display_id),order_id:o((null===(t=e.order_info)||void 0===t?void 0:t.custom_id)||(null===(r=e.order_info)||void 0===r?void 0:r.display_id)),invoice_no:o(e.invoice_no),column_status:o(e.status),column_einvoice_account_id:o(e.einvoice_account_id),column_total_amount:o((0,L.ufS)(e.total_amount||0,n.currency)),column_einvoice_date:o((0,L.p6d)(e.einvoice_date,a||7)),column_release_date:o((0,L.p6d)(e.release_date,a||7)),full_name:o(e.full_name),phone_number:o(e.phone_number),column_payment_method:o(e.payment_method)}),$($({},e),{},{key:e.id,index:e.display_id,order_id:(null===(l=e.order_info)||void 0===l?void 0:l.custom_id)||(null===(c=e.order_info)||void 0===c?void 0:c.display_id),column_status:s.parseStatusInvoice(e.status),column_einvoice_account_id:(null===(u=(n.einvoice_accounts||[]).find((function(t){return t.id==e.einvoice_account_id})))||void 0===u||u.type,"SInvoice"),column_total_amount:(0,L.ufS)(e.total_amount||0,n.currency),column_einvoice_date:(0,L.p6d)(e.einvoice_date,a||7),column_release_date:e.release_date?(0,L.p6d)(e.release_date,a||7):"",column_payment_method:s.parsePaymentMethod(e.payment_method)})})),i]})),(0,b.Z)((0,v.Z)(s),"lengthData",(function(e){return(e||"").toString().length||0})),(0,b.Z)((0,v.Z)(s),"columns",(function(){return[{title:"M\xe3 h\xf3a \u0111\u01a1n",dataIndex:"index",ellipsis:!0,align:"left",width:"120px",fixed:"left"},{title:"M\xe3 \u0111\u01a1n h\xe0ng",dataIndex:"order_id",ellipsis:!0,align:"left",width:"150px"},{title:"S\u1ed1 h\xf3a \u0111\u01a1n",dataIndex:"invoice_no",ellipsis:!0,align:"left",width:"15%"},{title:"S\u0110T",dataIndex:"phone_number",ellipsis:!0,align:"right",width:"15%"},{title:"Kh\xe1ch h\xe0ng",dataIndex:"full_name",ellipsis:!0,align:"left",width:"15%"},{title:"Ti\u1ec1n ph\u1ea3i tr\u1ea3",dataIndex:"column_total_amount",ellipsis:!0,align:"right",width:"150px"},{title:"Ng\xe0y h\xf3a \u0111\u01a1n",dataIndex:"column_einvoice_date",ellipsis:!0,align:"right",width:"15%"},{title:"Ng\xe0y ph\xe1t h\xe0nh",dataIndex:"column_release_date",ellipsis:!0,align:"right",width:"150px"},{title:"Ph\u01b0\u01a1ng th\u1ee9c chuy\u1ec3n kho\u1ea3n",dataIndex:"column_payment_method",ellipsis:!0,align:"left",width:"200px"},{title:"\u0110\u01a1n v\u1ecb ph\xe1t h\xe0nh",dataIndex:"column_einvoice_account_id",ellipsis:!0,align:"left",width:"200px"},{title:"Tr\u1ea1ng th\xe1i",dataIndex:"column_status",ellipsis:!0,align:"center",width:"150px",fixed:"right"}]})),(0,b.Z)((0,v.Z)(s),"handleTableChange",(function(e){var t=s.state.params;t.page_size=e.pageSize,t.page=e.current,s.fetchListEinvoices(t)})),(0,b.Z)((0,v.Z)(s),"onRowSelect",(function(e){var t,n=s.props.currentShop;e.einvoice_account_id||1!=(null===(t=n.einvoice_accounts)||void 0===t?void 0:t.length)||(e.einvoice_account_id=n.einvoice_accounts[0].id),s.setState({visibleInvoice:!0,invoiceInfo:e})})),(0,b.Z)((0,v.Z)(s),"onSelectRow",(function(){var e=s.props,t=e.shopId,n=e.accessToken,a=s.state.params,o="".concat((0,L.LpH)(),"/shops/").concat(t,"/list_einvoices?access_token=").concat(n);s.setState({loadingData:!0});(function e(t){return O().get(o,{params:t}).then((function(n){var a=s.state,o=a.loadingData,i=a.selectedRowKeys,r=n.data.data,l=r.map((function(e){return e.id})),c=i.filter((function(e){return!l.includes(e)})).concat(l);return o&&s.setState({selectedRowKeys:c}),(c||[]).length>=n.data.total_entries||0==r.length||!o?void 0:(t.page+=1,e(t))}))})($($({},a),{},{page:1})).then((function(e){return s.setState({loadingData:!1})}))})),(0,b.Z)((0,v.Z)(s),"renderContent",(function(){var e=s.props.listEinvoices.total_entries,t=s.state,n=t.dataFilter,a=t.isLoading,o=t.selectedRowKeys,i=t.pageSize,r=t.params,l=n.length>0?"calc(100vh - 250px)":"calc(100vh - 190px)",c={selectedRowKeys:o,onChange:function(e){return s.setState({selectedRowKeys:e})},preserveSelectedRowKeys:!0,isSelection:!0,onSelectRow:s.onSelectRow},d=s.columns(),p=s.getDataSourceEinvoices(),h=(0,u.Z)(p,2),f=h[0],v=h[1],g=(0,L.Owf)(v,d.filter((function(e){return e.dataIndex})));d=d.map((function(e){return e.dataIndex?e.width=g[e.dataIndex]:e.width=0,e}));var m=(0,L.f2Q)(d);return W("div",null,W(B.Z,{className:"order-returned-container",dataSource:f,columns:s.columns(),onChange:s.handleTableChange,scroll:{x:m,y:l},loading:a,onRow:function(e){return{onClick:function(){return s.onRowSelect(e)}}},rowSelection:c,pagination:{size:"small",pageSize:i,pageSizeOptions:ee,current:r.page,onShowSizeChange:s.onShowSizeChange,total:e}}),(0,j.NP)(n.length>0,s.props.listEinvoices.data.length>0,228,190))})),(0,b.Z)((0,v.Z)(s),"onShowSizeChange",(function(e,t){localStorage.setItem("listInvoices",t),s.setState({pageSize:t},(function(){s.fetchListEinvoices({page_size:t})}))})),(0,b.Z)((0,v.Z)(s),"setVisibleInvoice",(function(e){return s.setState({visibleInvoice:e})})),(0,b.Z)((0,v.Z)(s),"renderModalInvoiceInfo",(function(){var e=s.props,t=e.t,n=e.currentShop,a=e.shopId,o=e.accessToken,i=s.state,r=i.visibleInvoice,l=i.invoiceInfo;return r&&W(q.Z,{t:t,currentShop:n,invoiceInfo:l,visibleInvoice:r,setVisibleInvoice:s.setVisibleInvoice,shopId:a,accessToken:o})})),(0,b.Z)((0,v.Z)(s),"handleConfirmQuickUpdate",(0,c.Z)(l().mark((function e(){var t,n,a,o,i,r,c,u,d,p,h;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.props,n=t.accessToken,a=t.shopId,o=s.state,i=o.quickUpdateReason,r=o.quickUpdateStatus,c=o.selectedRowKeys,u=[],(3!=r||i)&&r){e.next=5;break}return e.abrupt("return",Q.Z.error("Th\u1ea5t b\u1ea1i","Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin c\u1eadp nh\u1eadt"));case 5:s.setState({isUpdating:!0}),d="".concat((0,L.LpH)(),"/shops/").concat(a,"/list_einvoices?access_token=").concat(n),p=c.join(",").toString(),h=$($({},s.state.params),{},{ids:p,page:1,page_size:50}),function e(t){return O().get(d,{params:t}).then((function(n){if(n.data.success){var a=n.data.data;return u=u.concat(a),0==a.length||u.length>=n.data.total_entries?(u.length==n.data.total_entries&&s.setState({isLoading:!1}),u):(t.page+=1,e(t))}return u})).catch((function(e){console.log(e)}))}(h).then((function(e){e&&s.setState({invoicesUpdate:e},(function(){s.handleUpdateInvoice(0)}))}));case 11:case"end":return e.stop()}}),e)})))),(0,b.Z)((0,v.Z)(s),"handleUpdateInvoice",(function(e){var t=s.props,n=t.shopId,a=t.accessToken,o=t.t,i=s.state,r=i.invoicesUpdate,l=i.updatingInfo,c=i.quickUpdateStatus,u=i.quickUpdateReason;e>0&&s.scrollUpdatingInfo();var d=r[e];l.push({success:null,message:null});var p=function(t){l[e].success=t.success,s.setState({updatingInfo:l}),e+1<r.length&&s.handleUpdateInvoice(e+1)},h="".concat((0,L.LpH)(),"/shops/").concat(n,"/list_einvoices/").concat(d.id,"/update_invoice?access_token=").concat(a),f={type:"viettel"};switch(c){case 2:f.is_release=!0;break;case 3:f.is_cancel=!0,f.reason=u}O().post(h,f).then((function(t){t.data.success?(l[e].message=o("success"),t.data.invoice_no&&(d.invoice_no=t.data.invoice_no),d.status=c,s.props.hanldeChangeInvoiceData(d),p(t.data)):(l[e].message=t.data.message||"",p(t.data))}))})),(0,b.Z)((0,v.Z)(s),"renderResultQuickUpdate",(function(){var e=s.state,t=e.updatingInfo,n=e.invoicesUpdate,a=function(e,t,a){var o=n[t];return W("div",{key:o.id},W("span",null,W("strong",{className:a},"#".concat(o.display_id))),"\xa0",W("span",{className:a},e.message))};return W("div",null,t.map((function(e,t){return e.success?W("div",{key:t},a(e,t,"success")):W("div",{key:t},a(e,t,"fail"))})))})),(0,b.Z)((0,v.Z)(s),"renderQuickUpdate",(function(){var e=s.props.t,t=s.state,n=t.isQuickUpdate,l=t.selectedRowKeys,c=t.isUpdating,u=t.updatingInfo,d=t.invoicesUpdate,h=t.quickUpdateStatus,f=u.filter((function(e){return e.success})).length,v=d.length-f,g=l.length;return W(a.Z,{wrapClassName:"modal-updating",title:"C\u1eadp nh\u1eadt nhanh ".concat(l.length," h\xf3a \u0111\u01a1n \u0111\xe3 ch\u1ecdn"),onCancel:function(){return s.setState({isQuickUpdate:!1,quickUpdateStatus:void 0,quickUpdateReason:void 0,updatingInfo:[],isUpdating:!1})},visible:n,footer:W("div",null,c?W(r.default,{onClick:function(){return s.setState({updatingInfo:[],isQuickUpdate:!1,isUpdating:!1})}},e("components.productUpdateCategory.exit")):W(r.default,{type:"primary",disabled:!l.length,onClick:s.handleConfirmQuickUpdate},e("pages.dashboard.update")))},c?W("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},W(o.default,{type:"circle",percent:Math.floor(100*u.length/g),style:{marginBottom:10}}),u.length==g?W("h4",null,W("span",{style:{color:"#00a854"}},"".concat(e("components.productUpdateCategory.updateSucceed")," ").concat(f," h\xf3a \u0111\u01a1n")),W("span",{style:{color:"#f04134"}},"".concat(v>0?", ".concat(e("pages.admin.failure")," ").concat(v," h\xf3a \u0111\u01a1n"):""))):W("div",null,W("h4",{style:{color:"#096dd9"}},e("components.productUpdateCategory.updatingCategory"))),W("div",{id:"updating-info",className:"updating-info"},s.renderResultQuickUpdate())):W("div",{style:{width:"100%"}},W("span",null,"Ch\u1ecdn tr\u1ea1ng th\xe1i"),W("div",null,W(i.default,{value:h,onChange:function(e){return s.setState({quickUpdateStatus:e})},placeholder:"Ch\u1ecdn tr\u1ea1ng th\xe1i",style:{width:"100%",marginTop:5},allowClear:!0,options:[{value:2,label:"\u0110\xe3 ph\xe1t h\xe0nh"},{value:3,label:"\u0110\xe3 h\u1ee7y"}]}),3==h&&W("div",{style:{marginTop:15}},W("span",null,"L\xfd do h\u1ee7y"),W(p.default,{style:{marginTop:5},onChange:function(e){return s.setState({quickUpdateReason:e.target.value})}})))))})),s.state={params:$({},te),isLoading:!1,dataFilter:[],selectedRowKeys:[],loadingData:!1,invoicesUpdate:[],updatingInfo:[],pageSize:parseInt(localStorage.getItem("listInvoices")||30)},s}return(0,f.Z)(n,[{key:"scrollUpdatingInfo",value:function(){var e=document.getElementById("updating-info");e.scrollTop=e.scrollHeight}},{key:"render",value:function(){var e=this,t=this.props,n=t.t,a=t.listEinvoices.total_entries,o=this.state,i=o.dataFilter,s=o.selectedRowKeys,l=o.loadingData,c=o.params;return W(N.Z,{className:"container-layout order-control-container",style:{overflow:"visible"}},W("div",{className:"tools-container",style:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid rgb(233, 233, 233)"}},W("div",null,W(U.Z,{title:n("pages.shop.orderControlInfo.sync"),icon:W(z.Z,null),onClick:this.onSync,isButton:!0}),W(U.Z,{icon:W(Y.Z,null),title:"C\u1eadp nh\u1eadt nhanh",onClick:function(){return e.setState({isQuickUpdate:!0})},isButton:!0}),W(V.Z,{selectedLength:s.length,loadingData:l,total:a,onClick:function(){return e.setState({loadingData:!1,selectedRowKeys:[]})}})),W("div",{className:"filters"},W(p.default,{placeholder:"Nh\u1eadp S\u1ed1 h\xf3a \u0111\u01a1n/ M\u1eabu h\xf3a \u0111\u01a1n",prefix:W(K.Z,null),value:c.search,style:{marginLeft:-60},onChange:this.onChangeSearchText}),W("div",null,W("div",{style:{display:"flex",justifyContent:"flex-end"}},i&&i.length>0&&W(r.default,{danger:!0,onClick:function(){return e.handleClearFilter()}},n("pages.shop.statistic.customer.deleteFilter")),"\xa0",W(P.Z,{options:this.showOptionsFilter(),popupClassName:"cascader-filter-customer",onChange:this.onClickMenuItem})),i&&i.length>0&&W("div",{className:"tags-filter",style:{paddingRight:10}},i.map(this.handleShowDataFilter))))),this.renderContent(),this.renderModalInvoiceInfo(),this.renderQuickUpdate())}}]),n}(x.Component);(0,b.Z)(ne,"pageInfo",{title:"pages.shop.setting.eInvoice",sassStyle:M()});t.default=(0,R.$j)((function(e){return{currentShop:e.shop.currentShop,listEinvoices:e.order.listEinvoices,timezone:e.navigation.user.timezone,users:e.user.users,employeeList:e.user.filterEmployeeList}}),{fetchListEinvoices:F.x7w,pushUsersTextSearch:F.mw6,hanldeChangeInvoiceData:F.bFe})((0,C.Z)(ne))},53803:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/e-invoices",function(){return n(84252)}])}},function(e){e.O(0,[5460,2902,9774,2888,179],(function(){return t=53803,e(e.s=t);var t}));var t=e.O();_N_E=t}]);