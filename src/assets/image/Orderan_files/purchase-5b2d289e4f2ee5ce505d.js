(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[889],{89226:function(t){!function(){"use strict";t.exports=".ant-tabs-top>.ant-tabs-nav::before{border:none}.product-import{overflow:visible}.product-import .product-import-table .purchase-tag{min-width:95px;text-align:center;margin:0 !important}.product-import .product-import-table .ant-table-body .ant-table-row{cursor:pointer}.product-import .product-import-table .ant-table-summary{height:35px !important}.product-import .ant-tabs-nav-wrap{line-height:2.3;border-left:1px solid #e8e5e5;padding-left:5px}.product-import .ant-tabs-nav{border-bottom:unset;position:absolute;top:-54px;z-index:1000;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.product-import .ant-tabs{overflow:visible}.product-import .ant-tabs .tools-container .filter .ant-input-affix-wrapper{width:35vh}.product-import .ant-tabs-tab{padding:14px 18px 9px 18px !important}.product-import .ant-table-wrapper-by-variation{margin-top:10px}.product-import .ant-table-wrapper-by-variation .ant-table-body{min-height:calc(100vh - 179px);max-height:calc(100vh - 179px) !important}.ant-calendar-range{width:520px !important}.variation-select{border:1px solid #d9d9d9;border-radius:2px;padding:5px;margin-top:10px;background:#f7f7f7;max-height:50vh;overflow:overlay}.variation-select .title{display:flex;justify-content:space-around}.variation-select .item-variation{background:#fff;border:1px solid #d9d9d9;display:flex;margin-top:5px}.variation-select .item-variation .close-div{padding:5px 8px;cursor:pointer;border-right:1px solid #d9d9d9}.variation-select .item-variation .close-div:hover{color:#f04134}.variation-select .item-variation .variation-content{flex:1;padding:5px 10px;display:flex;justify-content:space-between;align-items:center}.skeleton-small{margin-top:3px}.purchase-total{color:#00a854;font-weight:600}.purchase-cascader-filter .ant-cascader-menu{min-width:160px}"}()},34862:function(t,e,r){"use strict";r.r(e);var n=r(20838),a=r(809),o=r.n(a),i=r(92447),c=r(74047),p=r(4706),s=r(52700),u=r(33814),l=r(44102),d=r(20775),f=r(26265),h=r(67294),m=r(87378),b=r(36934),v=r(95213),g=r(65644),x=r(92902),y=r(89226),w=r.n(y),P=r(14494),Z=r(3122),k=h.createElement;function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){(0,f.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function T(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,d.Z)(t);if(e){var a=(0,d.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var j={page:1,page_size:30,status:"-2",type:"product"},S=function(t){(0,u.Z)(r,t);var e=T(r);function r(t){var n;return(0,c.Z)(this,r),n=e.call(this,t),(0,f.Z)((0,p.Z)(n),"componentDidMount",(function(){var t=n.props.router;(0,v.VZI)(t)})),(0,f.Z)((0,p.Z)(n),"componentDidUpdate",(function(t,e){var r=n.state.tabKey,a=n.props,o=a.currentLanguage,i=a.router;e.tabKey==r&&t.currentLanguage==o||"undefined"===typeof document||(0,v.VZI)(i)})),(0,f.Z)((0,p.Z)(n),"getNameSupplierProducts",(function(t){var e=n.props.supplier_products;return e&&e.length>0&&t&&e.filter((function(e){return e.id==t})).length>0?e.filter((function(e){return e.id==t}))[0].name:""})),n.state={params:O({},j),tabKey:"purchase"},n}return(0,s.Z)(r,null,[{key:"getInitialProps",value:function(){var t=(0,i.Z)(o().mark((function t(e,r){var n,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.store.dispatch,a=e.query.shopId,!e.isServer){t.next=20;break}return t.next=4,n((0,b.T0T)(r,a,j));case 4:return t.next=6,n((0,b.eAQ)(r,a));case 6:return t.next=8,n((0,b.fYC)(r,a,O(O({},j),{},{page:-1})));case 8:return t.next=10,n((0,b.u5D)(r,a,j));case 10:return t.next=12,n((0,b.YRF)(r,a));case 12:return t.next=14,n((0,b.P3w)(r,a));case 14:return t.next=16,n((0,b.A56)(r,a));case 16:return t.next=18,n((0,b.z4F)(r,a));case 18:t.next=29;break;case 20:return n((0,b.eAQ)(r,a)),n((0,b.fYC)(r,a,O(O({},j),{},{page:-1}))),n((0,b.u5D)(r,a,j)),t.next=25,n((0,b.P3w)(r,a));case 25:return t.next=27,n((0,b.YRF)(r,a));case 27:n((0,b.A56)(r,a)),n((0,b.z4F)(r,a));case 29:return t.abrupt("return",{});case 30:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}]),(0,s.Z)(r,[{key:"render",value:function(){var t=this,e=this.props,r=e.t,a=e.accessToken,o=e.shopId,i=e.timezone,c=e.supplier_products,p=e.router,s=e.isServer,u=this.state,l=u.tabKey,d=u.params;return k(g.Z,{className:"product-import",style:{overflow:"visible"}},k(n.default,{className:"header-tabs",activeKey:l,tabPosition:"top",animated:!1,onChange:function(e){return t.setState({tabKey:e})}},k(n.default.TabPane,{tab:r("accordingImportBill"),key:"purchase"},k(Z.Z,{shopId:o,accessToken:a,params:d,tabKey:l,isServer:s,supplier_products:c,callBack:function(e){return t.setState({params:e})}})),k(n.default.TabPane,{tab:r("accordingToTheProduct"),key:"purchase_items"},k(m.Z,{tabKey:l,accessToken:a,shopId:o,timezone:i,getNameSupplierProducts:this.getNameSupplierProducts,supplier_products:c||[],params:d,router:p}))))}}]),r}(h.Component);(0,f.Z)(S,"pageInfo",{title:"pages.shop.product.purchase.purchase",sassStyle:w()});e.default=(0,P.$j)((function(t){var e,r,n=t.shop.currentShop,a=t.navigation.user,o=t.user.users,i=(0,v.nkB)(null===(e=t.product)||void 0===e||null===(r=e.supplier_products)||void 0===r?void 0:r.data,null===n||void 0===n?void 0:n.shop_departments,a,o);return{timezone:t.navigation.user.timezone,currentLanguage:t.navigation.user.locale,supplier_products:i}}),{fetchPurchases:b.T0T,fetchGetTotalPriceRemain:b.eAQ,fetchListOfSupplierProducts:b.fYC,countersPurchase:b.u5D,fetchPrintBarcodes:b.P3w,fetchMaterials:b.A56,fetchPurchaseTags:b.z4F})((0,x.Z)(S))},36093:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/product/purchase",function(){return r(34862)}])}},function(t){t.O(0,[5460,5074,6977,3924,2902,4517,2653,3177,517,532,3745,2837,9648,5634,9774,2888,179],(function(){return e=36093,t(t.s=e);var e}));var e=t.O();_N_E=e}]);