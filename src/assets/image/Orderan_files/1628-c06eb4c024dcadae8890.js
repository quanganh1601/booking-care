(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1628],{89053:function(t){!function(){"use strict";t.exports=".ant-popover-placement-bottomLeft{width:60%}.input-warning{border-color:#f5222d !important;box-shadow:none}.input-warning:focus{box-shadow:none}"}()},82942:function(t,e,a){"use strict";var n,r=a(62443),o=a(65400),i=a(12386),s=a(74047),c=a(52700),u=a(4706),l=a(33814),d=a(44102),p=a(20775),h=a(26265),f=a(18446),m=a.n(f),y=a(67294),v=a(14494),_=a(87217),b=a(36934),g=a(20920),x=a(57254),S=y.createElement;function Z(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function w(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(a),!0).forEach((function(e){(0,h.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function C(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=(0,p.Z)(t);if(e){var r=(0,p.Z)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,d.Z)(this,a)}}var B=(0,_.Z)()(n=function(t){(0,l.Z)(a,t);var e=C(a);function a(t){var n;return(0,s.Z)(this,a),n=e.call(this,t),(0,h.Z)((0,u.Z)(n),"getMenuContent",(function(){var t=n.state.isLoading,e=n.getStatus();return S(i.default,{className:"dropdown-container",onClick:n.handleOnClick},e.map((function(e){var a=(0,g.eS)()[e];return S(i.default.Item,{disabled:t,key:e},a.icon," ",a.text)})))})),(0,h.Z)((0,u.Z)(n),"handleOnClick",(function(t){var e=t.key,a=n.props,r=a.batchExport,o=a.updateBatchExport,i=a.accessToken,s=a.shopId,c=a.onChange;c?c(e):n.state.isLoading||(n.setState({isLoading:!0}),o(i,s,w(w({},r),{},{status:e})).then((function(){n.setState({isLoading:!1,status:parseInt(r.status)})})))})),(0,h.Z)((0,u.Z)(n),"getStatus",(function(){var t=n.props.batchExport,e=t.id,a=t.user_id;if(!e||!a)return[];switch(n.state.status){case 0:return[1];default:return[]}})),n.state={isLoading:!1,status:t.batchExport.status},n}return(0,c.Z)(a,[{key:"componentDidUpdate",value:function(t){m()(t.batchExport.status,this.props.batchExport.status)||this.setState({status:this.props.batchExport.status})}},{key:"render",value:function(){var t=this.props,e=t.batchExport,a=t.size,n=(0,g.eS)()[e.status],i=this.getStatus();return S("div",null,S(r.default,{placement:"bottom",content:this.getMenuContent(),overlayClassName:"order-action-list"},S(o.default,{type:"primary",style:{fontSize:"large"==a?14:12,width:130,height:"large"==a?40:22,background:n.bgColor,borderColor:n.bgColor,position:"relative",overflow:"hidden",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}},n.text,i.length>0&&S(x.Z,{size:"small",style:{position:"absolute",right:"large"==a?10:5,top:"calc((100% / 2) - 6px)"}}))))}}]),a}(y.Component))||n;e.Z=(0,v.$j)((function(t){return{currentShop:t.shop.currentShop,timezone:t.navigation.user.timezone}}),{updateBatchExport:b.HEk})(B)},21628:function(t,e,a){"use strict";a.d(e,{Z:function(){return _t}});var n,r=a(56697),o=a(65400),i=a(2307),s=a(64713),c=a(94055),u=a(32292),l=a(74047),d=a(52700),p=a(4706),h=a(33814),f=a(44102),m=a(20775),y=a(26265),v=a(64749),_=a(51024),b=a(41609),g=a.n(b),x=a(50361),S=a.n(x),Z=a(18446),w=a.n(Z),C=a(67294),B=a(14494),k=a(73218),I=a(92104),q=a(30381),D=a.n(q),E=a(87217),N=a(31432),O=a(97705),P=a(17669),R=a(70302),T=a(91229),M=a(11187),j=a(28140),L=a(59361),A=a(23493),W=a.n(A),Q=a(23279),z=a.n(Q),F=a(9669),H=a.n(F),K=a(68628),U=a(25449),$=a(59271),G=a(7085),J=(a(37508),a(22318)),V=a(95213),X=a(36934),Y=a(83862),tt=C.createElement;function et(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=(0,m.Z)(t);if(e){var r=(0,m.Z)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,f.Z)(this,a)}}v.default.Option;var at,nt=(0,E.Z)()(n=function(t){(0,h.Z)(a,t);var e=et(a);function a(t){var n;return(0,l.Z)(this,a),n=e.call(this,t),(0,y.Z)((0,p.Z)(n),"handleKeyDown",(function(t){var e=n.state.onScreenBarcode;n.props.onScreenBarcode&&(120==t.keyCode?n.setState({onScreenBarcode:!e}):[13,9].includes(t.keyCode)&&e?n.sendSearchBatchRequest(n.textBarcode.innerText):27==t.keyCode&&n.setState({onScreenBarcode:!1}))})),(0,y.Z)((0,p.Z)(n),"showScanBarcode",(function(){n.state.onScreenBarcode&&(n.textBarcode=document.getElementsByClassName("text-barcode")[0],n.textBarcode.focus())})),(0,y.Z)((0,p.Z)(n),"renderBatch",(function(t,e){n.props.t;if("no-result"==t.id)return tt("div",{className:"item-name"}," ",tt("strong",null," ",t.display_id,"!"));var a,r=t.variation,o=r?r.product:null;r.fields&&r.fields.length>0&&(a=r.fields.filter((function(t){return"undefined"!=t.value})).map((function(t){return"".concat(t.name,": ").concat(t.value)})).join(", "));return tt("div",null,tt("div",{style:{display:"flex"},key:e},o&&o.display_id?tt(L.default,{color:"green"},o.custom_id||(0,V.pyT)(o.display_id,0)):null,r?tt(L.default,{color:"pink"},r.custom_id||(0,V.pyT)(r.display_id,0)):null,tt("div",{className:"item-name"},tt("strong",null," ",o?o.name:""))),a&&tt("div",{style:{marginLeft:10,marginTop:3}},tt(K.Z,null),tt("span",{style:{color:"#096dd9"}}," ",a)),tt("div",{style:{display:"flex",marginLeft:10}},tt("span",null,tt(U.Z,null)," M\xe3 l\xf4:"," ",tt("span",{style:{color:"#096dd9"}},t.display_id)),tt("span",{style:{marginLeft:10}},tt($.Z,null)," S\u1ed1 l\u01b0\u1ee3ng trong l\xf4:"," ",tt("span",{style:{color:"#096dd9"}},t.quantity))))})),(0,y.Z)((0,p.Z)(n),"handleInputSearchChange",(function(t){var e=t.target&&t.target?t.target.value:t;n.setState({searchTerm:e,isRenderAutoComplete:!1}),n.isDropdownSelect=!1})),(0,y.Z)((0,p.Z)(n),"onSearch",(function(t){var e=t.target&&t.target?t.target.value:t;n.setState({searchTerm:e,loading:!0}),n.debounceSendSearchBatchRequest(e)})),(0,y.Z)((0,p.Z)(n),"sendSearchBatchRequest",(function(t){if(""===t||void 0!==t.target)return n.setState({loading:!1});t=t.replace(/\n/g,"");var e=n.props,a=e.accessToken,r=e.shopId,o=e.t,i={access_token:a};n.state.onScreenBarcode?i.display_id=t:i.search=t,n.props.warehouse_id&&(i.warehouse_id=n.props.warehouse_id);var s="".concat((0,V.LpH)(),"/shops/").concat(r,"/batchs");H()({method:"get",url:s,params:i}).then(Y.Z.newTask("product-search-bar",(function(t){if(200===t.status&&t.data&&!0===t.data.success){var e=(0,j.Z)(t.data.data);if(n.state.onScreenBarcode){var a=e;n.props.callback(a.reduce((function(t,e){return"object"!=typeof t?[]:(t.find((function(t){return t.id==e.id}))||t.push(e),t)}),n.props.searchResult)),1==a.length?n.props.onSelect(a[0].id):a.length?n.setState({barcodeResult:a}):J.Z.error("Kh\xf4ng t\xecm th\u1ea5y l\xf4 ".concat(n.textBarcode.innerText)),n.textBarcode.innerText=""}return 0==e.length&&e.push({id:"no-result",display_id:o("components.productSearchBar.noResultWereFound"),disabled:!0}),n.props.callback(e),n.setState({loading:!1,isRenderAutoComplete:!0})}return n.props.callback([{id:"no-result",display_id:o("components.productSearchBar.noResultWereFound"),disabled:!0}]),n.setState({loading:!1})})))})),(0,y.Z)((0,p.Z)(n),"handleOnSelect",(function(t,e){if("no-result"!=t){n.props.t;var a=n.state.searchTerm;if(n.isDropdownSelect=!0,n.setState({isRenderAutoComplete:!0,searchTerm:a}),!n.state.loading){n.props.onSelect(t,a);var r=n.props.searchResult.find((function(e){return e.id==t}));M.default.success("Th\xeam th\xe0nh c\xf4ng l\xf4 ".concat(r.display_id))}}})),(0,y.Z)((0,p.Z)(n),"handleAddProduct",(function(t){if(13==t.keyCode){if(!n.state.searchCombo&&"box-product"==n.props.customDTS){if(!n.isDropdownSelect){var e=n.props,a=e.t,r=e.searchResult,o=n.renderAutoCompleteDataSource(),i=(o=o.filter((function(t){return"no-result"!=t.value&&"loading"!=t.value}))).findIndex((function(t){return"quick-add"==t.value}));if(!o||o&&0==o.length)return;if(o.length>1||1==o.length&&-1==i){var s=o.length>1&&i>-1?o[1]:o[0];n.props.onSelect(s.value,n.state.searchTerm);var c=r.find((function(t){return t.id==s.value}));M.default.success(tt("span",null,c.product?c.product.display_id?tt(L.default,{color:"green"},c.product.custom_id||(0,V.pyT)(c.product.display_id,0)):null:c.display_id?tt(L.default,{color:"green"},c.custom_id||(0,V.pyT)(c.display_id,0)):null,c.display_id?tt(L.default,{color:"pink"},c.custom_id||(0,V.pyT)(c.display_id,0)):null,"\xa0",c.product?c.product.name:c.name?c.name:""))}else{var u=o[0];n.props.onSelect(u.value,n.state.searchTerm),M.default.success(a("quickAddProducts")),n.setState({searchTerm:""})}}n.isDropdownSelect=!1}}else[38,40].includes(t.keyCode)&&(n.isDropdownSelect=!0)})),n.state={loading:!1,open:!1,onScreenBarcode:!1,barcodeResult:[],isRenderAutoComplete:!0},n.debounceSendSearchBatchRequest=z()(n.sendSearchBatchRequest,1e3),n.handleKeyDown=W()(n.handleKeyDown.bind((0,p.Z)(n)),500),n}return(0,d.Z)(a,[{key:"shouldComponentUpdate",value:function(t,e){var a=!w()(t,this.props),n=!w()(e,this.state);return a||n}},{key:"componentDidMount",value:function(){var t=this.props.callbackOnBlur,e=document.getElementsByClassName("input-search");e&&e[0]&&t&&e[0].focus(),document.addEventListener("keydown",this.handleKeyDown,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown,!1)}},{key:"componentDidUpdate",value:function(t,e){var a=this.props.onScreenBarcode;a&&e.onScreenBarcode!=this.state.onScreenBarcode&&(this.showScanBarcode(),a(this.state.onScreenBarcode))}},{key:"renderAutoCompleteDataSource",value:function(){var t=this,e=this.state,a=e.searchTerm,n=e.isRenderAutoComplete,r=this.props,o=r.searchResult;r.currentShop,r.t;if(!n&&""!=a){return[].map((function(e,a){return{label:t.renderBatch(e,a),value:e.id}})).concat({label:tt("div",{style:{textAlign:"center"}},tt(G.Z,null)),value:"loading"})}return(0,j.Z)(o).map((function(e,a){return{label:t.renderBatch(e,a),value:e.id}}))}},{key:"render",value:function(){var t=this,e=this.state,a=e.searchTerm,n=e.open,r=e.barcodeResult,i=e.onScreenBarcode,s=this.props,c=s.t,u=s.disabled,l=s.callbackOnBlur,d=s.viewReturnedOrder,p=s.localClassName,h=s.style,f=l?{onBlur:function(){return l()}}:{},m=tt(_.default,(0,T.Z)({className:"input-search",autoComplete:"off",disabled:u,onClick:function(t){return t.target.focus()},onKeyDown:this.handleAddProduct,placeholder:"Nh\u1eadp m\xe3 l\xf4, m\xe3 m\u1eabu m\xe3..."},f));return tt("div",{className:"box-auto-complete",style:h||{}},i&&tt("div",{className:"scan-barcode ant-modal-mask"},tt("h1",null,tt(U.Z,null)," ",c("pages.shop.barcodeMode")),tt("div",{className:"text-barcode",contentEditable:!0}),tt("div",{className:"product-search-result"},r.map((function(e){return tt(R.Z,{className:"product-result-card",key:e.display_id,onClick:function(){return t.props.onSelect(e.id)}},tt("div",{className:"id-name"},tt(L.default,null,e.product.custom_id||(0,V.pyT)(e.product.display_id,0)),tt(L.default,null,e.custom_id||(0,V.pyT)(e.display_id,0)),tt("span",{style:{marginLeft:5}},e.product.name)),tt("div",{className:"price"},tt("span",null,tt($.Z,null)," ",c("pages.shop.remain"),":"," ",tt("span",{style:{color:"#096dd9"}},(0,V.oH6)(e.variations_warehouses.reduce((function(t,e){return t+e.remain_quantity}),0),t.props.currentShop.currency))),tt("span",null,c("pages.shop.price"),": ",tt("span",{style:{color:"#096dd9"}},(0,V.ufS)(e.retail_price,t.props.currentShop.currency)))))})))),tt(P.Z,{className:"global-search",open:n,onFocus:function(){t.setState({open:!0}),t.props.type&&"update-order-tool"==t.props.type&&t.props.focus(!0)},onBlur:function(){t.setState({open:!1,searchTerm:""}),t.props.type&&"update-order-tool"==t.props.type&&t.props.focus(!1)},value:a,dropdownMatchSelectWidth:!1,style:{width:this.props.onScreenBarcode?"calc(100% - 142px)":"100%"},onSearch:this.onSearch,onChange:this.handleInputSearchChange,disabled:this.props.disabled,onSelect:this.handleOnSelect,listHeight:"60vh",options:this.renderAutoCompleteDataSource(),defaultActiveFirstOption:!0,dropdownClassName:d?"box-product-select-returned-order":"dropdown-box-product-select "},m),this.props.onScreenBarcode&&tt(o.default,{style:this.props.styleBtn,icon:tt(U.Z,null),className:p||"scanbarcode-button",onClick:function(){return t.setState({onScreenBarcode:!0,barcodeResult:[]})}},c("containers.formBox.f9")))}}]),a}(C.Component))||n,rt=(0,B.$j)((function(t){return{currentShop:t.shop.currentShop}}),{fetchCategories:X.pED})(nt),ot=a(7463),it=a(20920),st=a(82942),ct=a(89053),ut=a.n(ct),lt=C.createElement;function dt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function pt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?dt(Object(a),!0).forEach((function(e){(0,y.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):dt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function ht(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=(0,m.Z)(t);if(e){var r=(0,m.Z)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,f.Z)(this,a)}}var ft=_.default.TextArea,mt=_.default.Search,yt=v.default.Option,vt=(0,E.Z)()(at=function(t){(0,h.Z)(a,t);var e=ht(a);function a(t){var n;return(0,l.Z)(this,a),n=e.call(this,t),(0,y.Z)((0,p.Z)(n),"componentDidMount",(function(){window.addEventListener("beforeunload",(function(t){t.preventDefault(),"undefined"!==typeof Storage&&n.handleDraftExport()}))})),(0,y.Z)((0,p.Z)(n),"handleSave",(function(){n.setState({isLoading:!0});var t=n.props,e=t.createBatchExport,a=t.updateBatchExport,r=t.close,o=t.accessToken,i=t.shopId,s=t.t,c=n.state,u=c.batch_export,l=c.isCreating,d=!1;if(u.items&&u.items.length>0&&u.items.map((function(t){t.quantity<0&&(d=!0)})),d)return n.setState({isLoading:!1}),J.Z.error(s("pages.admin.failure"),s("components.exportProductDetail.notNegativeNumber"));if(l){var p=pt({},u);p.shop_id=i,p.warehouse_id=p.warehouse.id,delete p.warehouse,e(o,i,p)}else a(o,i,u);n.setState({isLoading:!1,searchProduct:""}),r()})),(0,y.Z)((0,p.Z)(n),"handleDraftExport",(function(){var t,e=n.props.shopId,a=n.state.batch_export;localStorage["draft_batch_export_shop_".concat(e)]&&a&&!a.display_id&&localStorage.removeItem("draft_batch_export_shop_".concat(e)),a&&!a.display_id&&((null===(t=a.items)||void 0===t?void 0:t.length)>0||a.note||!g()(a.warehouse))&&localStorage.setItem("draft_batch_export_shop_".concat(e),JSON.stringify(a)),n.setState({searchProduct:""})})),(0,y.Z)((0,p.Z)(n),"handleNoteChange",(function(t){var e=pt({},n.state.batch_export);e.note=t.target.value,n.setState({batch_export:e}),n.updateBatchExportWithIndex(e)})),(0,y.Z)((0,p.Z)(n),"updateBatchExportWithIndex",(function(t){var e=n.props,a=e.callback,r=e.indexBatchExport,o=r+1;a&&o&&o&&a(t,r)})),(0,y.Z)((0,p.Z)(n),"onChangeWarehouse",(function(t){var e=n.props.warehouse.find((function(e){return e.id==t})),a=pt({},n.state.batch_export);a.warehouse=e;var r=S()(a.items).filter((function(e){var a,n,r,o;return(null===(a=e.variation)||void 0===a||null===(n=a.product)||void 0===n?void 0:n.manipulation_warehouses).includes(t)||0==(null===(r=e.variation)||void 0===r||null===(o=r.product)||void 0===o?void 0:o.manipulation_warehouses.length)}));a.items=r,a.items&&a.items.forEach((function(e){var a=!1;if(e.variation&&e.variation.variations_warehouses){var n=e.variation.variations_warehouses.find((function(e){return e.warehouse_id===t}))||{actual_remain_quantity:0,shelf_quantity:0,quantity_in_batch:0};n.actual_remain_quantity-n.shelf_quantity-n.quantity_in_batch<e.quantity&&(a=!0),e.warningQuantity=a,e.maxQty=n.actual_remain_quantity-n.shelf_quantity-n.quantity_in_batch}})),n.setState({batch_export:a}),n.updateBatchExportWithIndex(a)})),(0,y.Z)((0,p.Z)(n),"handleSelectItem",(function(t){var e=n.state.searchResult.find((function(e){return e.id==t})),a=S()(n.state.batch_export),r=!1,o=1;if(e&&e.variations_warehouses&&a.warehouse){var i=e.variations_warehouses.find((function(t){return t.warehouse_id==a.warehouse.id}))||{actual_remain_quantity:0,shelf_quantity:0,quantity_in_batch:0};i.actual_remain_quantity-i.shelf_quantity-i.quantity_in_batch<1&&(r=!0),o=i.actual_remain_quantity-i.shelf_quantity-i.quantity_in_batch}var s=a.items.findIndex((function(e){return e.variation_id==t}));-1==s?a.items.push({variation:e,product_name:e.product.name,quantity:1,variation_id:e.id,warningQuantity:r,maxQty:o,shop_id:n.props.shopId}):a.items[s]=pt(pt({},a.items[s]),{},{quantity:a.items[s].quantity+1}),n.state.onScreenBarcode&&J.Z.success("".concat(n.props.t("pages.shop.addProductSuccess")," ").concat(e.product.name)),n.setState({batch_export:a}),n.updateBatchExportWithIndex(a)})),(0,y.Z)((0,p.Z)(n),"handleSelectBatch",(function(t){if("no-result"!=t){var e=n.state.searchBatchResult.find((function(e){return e.id==t})),a=S()(n.state.batch_export);-1==a.items.findIndex((function(t){return t.batch_display_id==e.display_id}))&&a.items.push({variation:e.variation,product_name:e.variation.product.name,variation_id:e.variation.id,quantity:e.quantity,batch_display_id:e.display_id}),n.state.onScreenBarcode&&J.Z.success("Th\xeam l\xf4 ".concat(e.display_id," th\xe0nh c\xf4ng")),n.setState({batch_export:a}),n.updateBatchExportWithIndex(a)}})),(0,y.Z)((0,p.Z)(n),"getData",(function(){var t=n.props.t,e=n.state,a=e.batch_export,r=e.searchProduct,o=[];a.items.map((function(e,n){(e.variation.fields||[]).map((function(t){return"".concat(t.name,": ").concat(t.value)})).join(", ");o.push({key:n,productName:e.variation.product.name||t("components.productPurchaseDetail.productWasDelete"),productId:e.variation.product.custom_id||e.variation.product.display_id,variationId:e.variation.custom_id||e.variation.display_id,fields:e.variation.fields||[],images:(0,it.ip)(e.variation.images||[]),quantity:{value:e.quantity,index:n,warningQuantity:!a.from_shelf_to_batch&&e.warningQuantity,status:a.status,maxQty:a.from_shelf_to_batch?void 0:e.maxQty},delete:n,quantityPerBatch:{value:e.quantity_per_batch,index:n,max:e.maxQtyPerBatch},numberOfBatch:{value:e.number_of_batch,index:n,max:e.maxNumber},batchDisplayId:e.batch_display_id,originItem:e})}));return o.filter((function(t){var e=t.originItem,a=(e.variation.fields||[]).map((function(t){return t.value}));return(0,V.C6S)((0,V.Mle)(r),(0,V.Mle)(e.variation.product.name))||(0,V.C6S)((0,V.Mle)(r),(0,V.Mle)(e.variation.product.custom_id))||(0,V.C6S)((0,V.Mle)(r),(0,V.Mle)(e.variation.product.display_id))||(0,V.C6S)((0,V.Mle)(r),(0,V.Mle)(e.variation.display_id))||(0,V.C6S)((0,V.Mle)(r),(0,V.Mle)(e.variation.custom_id))||a.find((function(t){return null!=(0,V.C6S)((0,V.Mle)(r),(0,V.Mle)(t))}))}))})),(0,y.Z)((0,p.Z)(n),"getColumns",(function(){var t=n.props,e=t.t,a=t.currentShop,r=n.state,o=r.batch_export,i=r.isCreating,s=[{title:function(){return lt("div",null,e("components.productComboDetail.variationId")," / ",e("components.productCreatorFirstStep.properties"))},dataIndex:"variation",ellipsis:!0,render:function(t,e){return lt("div",{className:"variation-info"},lt("div",{style:{color:"#434343",fontWeight:500}},e.variationId),lt("div",null,(0,it.Br)(e.fields)))}},{title:function(){return lt("div",null,e("products.title")," / ",e("components.productComboDetail.productId"))},dataIndex:"product",ellipsis:!0,render:function(t,e){return lt("div",{className:"product-info"},lt("div",{style:{color:"#434343",fontWeight:500}},e.productName),lt("div",null,e.productId))}},{title:e("components.orderExportExcel.image"),dataIndex:"images",align:"center",width:70,ellipsis:!0},{title:"M\xe3 l\xf4",dataIndex:"batchDisplayId",ellipsis:!0,width:"10%"},{title:n.props.t("components.orderExportExcel.quantity"),dataIndex:"quantity",width:"15%",align:"right",ellipsis:!0,render:function(t){var r=t.value,s=t.index,l=t.warningQuantity,d=t.maxQty;if("text"!=s&&i&&"by_batch"!=o.type){var p=l?[{borderColor:"#f5222d"},"".concat(e("components.exportProductDetail.actualQuantityNotEnough")).concat(d)]:[null,null],h=(0,u.Z)(p,2),f=h[0],m=h[1];return lt(c.default,{title:m,placement:"topLeft"},lt("span",{className:l?"input-quantity":""},lt(ot.default,{min:0,max:d,style:f,value:r,size:"small",currency:a.currency,isMoney:!1,callBack:function(t){return n.handleInputFormatMoney("quantity",s,t)}})))}return(0,V.oH6)(r,a.currency)}},{title:"SL/L\xf4",dataIndex:"quantityPerBatch",width:"15%",align:"right",ellipsis:!0,render:function(t){var e=t.value,r=t.index,s=t.max;return"text"!=r&&i?lt(ot.default,{value:e,size:"small",currency:a.currency,isMoney:!1,min:0,max:s||Math.floor(o.items[r].quantity/(o.items[r].quantity_per_batch||1)),callBack:function(t){return n.handleChangeBatch("quantity_per_batch",r,t)}}):(0,V.oH6)(e,a.currency)}},{title:"S\u1ed1 l\xf4",dataIndex:"numberOfBatch",width:"15%",align:"right",ellipsis:!0,render:function(t){var e=t.value,r=t.index,s=t.max;return"text"!=r&&i?lt(ot.default,{value:e,size:"small",currency:a.currency,isMoney:!1,min:0,max:s||Math.floor(o.items[r].quantity/(o.items[r].quantity_per_batch||1)),callBack:function(t){return n.handleChangeBatch("number_of_batch",r,t)}}):(0,V.oH6)(e,a.currency)}},{title:"",dataIndex:"delete",width:"5%",render:function(t){return lt(k.Z,{style:{color:"rgb(255, 56, 96)",cursor:"pointer"},onClick:function(){o.items&&o.items.splice(t,1),n.setState({batch_export:o}),n.updateBatchExportWithIndex(o)}})}}];if(!n.state.isCreating){var l=s.findIndex((function(t){return"delete"==t.dataIndex}));-1!=l&&s.splice(l,1)}if(!o.from_shelf_to_batch){var d=s.findIndex((function(t){return"quantityPerBatch"==t.dataIndex}));-1!=d&&s.splice(d,1);var p=s.findIndex((function(t){return"numberOfBatch"==t.dataIndex}));-1!=p&&s.splice(p,1)}if("by_batch"!=o.type){var h=s.findIndex((function(t){return"batchDisplayId"==t.dataIndex}));-1!=h&&s.splice(h,1)}return s})),(0,y.Z)((0,p.Z)(n),"handleInputFormatMoney",(function(t,e,a){var r=pt({},n.state.batch_export),o=!1;if(r.items[e].variation&&r.items[e].variation.variations_warehouses&&r.warehouse&&"quantity"==t){var i=r.items[e].variation.variations_warehouses.find((function(t){return t.warehouse_id==r.warehouse.id}))||{actual_remain_quantity:0,shelf_quantity:0,quantity_in_batch:0};i.actual_remain_quantity-i.shelf_quantity-i.quantity_in_batch<a&&(o=!0),r.items[e].warningQuantity=o,r.items[e].maxQty=i.actual_remain_quantity-i.shelf_quantity-i.quantity_in_batch}r.items[e][t]=a,n.setState({batch_export:r}),n.updateBatchExportWithIndex(r)})),(0,y.Z)((0,p.Z)(n),"onChangeInsertedAt",(function(t){if(t){var e=D()(t.startOf("day")).unix();n.setState({batch_export:pt(pt({},n.state.batch_export),{},{inserted_at:e,change_inserted_at:!0})})}})),(0,y.Z)((0,p.Z)(n),"onChangeStatus",(function(t){var e=S()(n.state.batch_export);e.status=t,n.setState({batch_export:e}),n.updateBatchExportWithIndex(e)})),(0,y.Z)((0,p.Z)(n),"renderFooterExport",(function(){var t=n.state.batch_export,e=n.props.t,a=(t.items||[]).reduce((function(t,e){return t+e.quantity}),0);return lt("div",{style:{textAlign:"right"}},lt("span",{className:"total-info"},e("pages.shop.statistic.statisticItem.total_product"),": ",lt("strong",null,(0,V.ufS)((t.items||[]).length))),lt("span",{className:"total-info"},"T\u1ed5ng s\u1ed1 l\u01b0\u1ee3ng: ",lt("b",null,(0,V.ufS)(a))))})),(0,y.Z)((0,p.Z)(n),"handleChangeBatch",(function(t,e,a){var r=pt({},n.state.batch_export),o=r.items[e].quantity,i=r.items[e].number_of_batch||0,s=r.items[e].quantity_per_batch||0;"quantity_per_batch"==t?(r.items[e].maxNumber=Math.floor(o/(a||1)),r.items[e].maxQty=Math.floor(o/(i||1)),o<i*a&&(r.items[e].number_of_batch=0)):(r.items[e].maxQty=Math.floor(o/(a||1)),r.items[e].maxNumber=Math.floor(o/(s||1)),o<s*a&&(r.items[e].quantity_per_batch=0)),r.items[e][t]=a,n.setState({batch_export:r})})),(0,y.Z)((0,p.Z)(n),"onChangeType",(function(t,e){var a=S()(n.state.batch_export);a[e]=t,a.items=[],n.setState({batch_export:a})})),(0,y.Z)((0,p.Z)(n),"renderSearchProduct",(function(){var t=n.props.t;return lt("div",{className:"text-align-left",style:{display:"flex",justifyContent:"space-between"}},lt(mt,{placeholder:t("components.productPurchaseDetail.textSearchExport"),allowClear:!0,onChange:function(t){return n.setState({searchProduct:t.target.value})},style:{width:300}}))})),(0,y.Z)((0,p.Z)(n),"renderContent",(function(){var t,e,a,r=n.props,o=r.accessToken,c=r.shopId,u=r.t,l=r.hideActions,d=r.warehouse,p=n.state,h=p.isCreating,f=p.batch_export,m=p.searchResult,y=p.searchBatchResult,_=d.map((function(t){var e=t.name,a=t.id;return lt(yt,{key:a,value:a},e)})),b=f?f.items.map((function(t){return t.variation_id})):[];return lt("div",{className:"content"},lt("div",{className:"content-info"},lt("div",{className:"info-item"},lt("div",{className:"header"},u("components.productPurchaseDetail.type")),lt(v.default,{disabled:!h,value:f.from_shelf_to_batch||!1,placeholder:u("components.productPurchaseDetail.selectType"),dropdownClassName:"select-warehouse-dropdown",style:{width:"100%"},onChange:function(t){return n.onChangeType(t,"from_shelf_to_batch")}},lt(yt,{key:"0",value:!1},u("components.productPurchaseDetail.fromBatchToShelf")),lt(yt,{key:"1",value:!0},u("components.productPurchaseDetail.fromShelfToBatch"))),!f.from_shelf_to_batch&&26290==c&&lt(s.default.Group,{onChange:function(t){return n.onChangeType(t.target.value,"type")},value:f.type||"by_odd",style:{width:"100%",display:"grid",paddingLeft:15},disabled:!h},lt(s.default,{value:"by_odd"},u("components.productPurchaseDetail.byOdd")),lt(s.default,{value:"by_batch"},u("components.productPurchaseDetail.byBatch")))),lt("div",{className:"info-item"},lt("div",{className:"header"},u("components.exportProductDetail.store")),lt(v.default,{disabled:!h||l,value:null===(t=f.warehouse)||void 0===t?void 0:t.id,placeholder:u("components.exportProductDetail.selectWarehouse"),dropdownClassName:"select-warehouse-dropdown",style:{width:"100%"},onChange:n.onChangeWarehouse},_)),lt("div",{className:"info-item"},lt("div",{className:"header"},u("note")),lt(ft,{placeholder:u("note"),style:{fontSize:14},value:f.note,onChange:n.handleNoteChange}))),lt("div",{className:"table-info"},h&&!l&&("by_batch"==f.type?lt(rt,{accessToken:o,searchResult:y,shopId:c,onSelect:n.handleSelectBatch,callback:function(t){return n.setState({searchBatchResult:t})},warehouse_id:null===(e=f.warehouse)||void 0===e?void 0:e.id,onScreenBarcode:function(t){return n.setState({onScreenBarcode:t})},localClassName:"stocktaking-search"}):lt(O.Z,{accessToken:o,searchResult:m,shopId:c,onSelect:n.handleSelectItem,callback:function(t){return n.setState({searchResult:t})},warehouse_id:null===(a=f.warehouse)||void 0===a?void 0:a.id,selectedVariationIds:b,onScreenBarcode:function(t){return n.setState({onScreenBarcode:t})},localClassName:"stocktaking-search"})),lt(i.Z,{title:n.renderSearchProduct,className:"table-container",columns:n.getColumns(),dataSource:n.getData(),size:"small",scroll:{y:400},pagination:!1,footer:function(){return n.renderFooterExport()}})))})),n.state=(0,y.Z)({batch_export:t.batch_export,isLoading:!1,isCreating:!1,searchResult:[],searchBatchResult:[],onScreenBarcode:!1,searchProduct:""},"isCreating",!t.batch_export||!t.batch_export.id),n}return(0,d.Z)(a,[{key:"componentDidUpdate",value:function(t){w()(t,this.props)||this.setState({batch_export:this.props.batch_export||{note:"",items:[],warehouse:this.props.warehouse&&this.props.warehouse[0],status:0},isCreating:!this.props.batch_export||!this.props.batch_export.id})}},{key:"render",value:function(){var t=this,e=this.props,a=e.visible,n=e.t,i=e.close,s=e.hideActions,c=e.hideModal,u=e.accessToken,l=e.shopId,d=this.state,p=d.isLoading,h=d.isCreating,f=d.batch_export,m=d.onScreenBarcode;if(!f)return null;var y=f.from_shelf_to_batch?-1:f.items&&f.items.findIndex((function(t){return!0===t.warningQuantity}));return lt(C.Fragment,null,a&&lt(r.Z,{className:"modal-detail",visible:a,width:"95%",onCancel:function(){m||(t.handleDraftExport(),i(f))},maskClosable:!p,closable:!p,title:"".concat(n("components.exportProductDetail.detailedInfo")," ").concat(h?"":"#".concat(f.display_id)),footer:s?null:lt("div",{style:{display:"flex",justifyContent:"flex-end"}},lt(st.Z,{accessToken:u,shopId:l,batchExport:f,onChange:this.onChangeStatus,t:n,size:"large"}),lt(o.default,{type:"primary",icon:lt(p?LoadingOutlined:I.Z,null),disabled:p||g()(f.warehouse)||-1!==y||f.items&&0==f.items.length,onClick:this.handleSave,style:{marginLeft:10}},n(h?"components.exportProductDetail.create":"save")))},this.renderContent()),c&&this.renderContent(),lt("style",{dangerouslySetInnerHTML:{__html:ut()}}))}}]),a}(C.Component))||at,_t=(0,B.$j)((function(t){return{warehouse:(0,N.op)(t),currentShop:(0,N.tf)(t)}}),{createBatchExport:X.D_x,updateBatchExport:X.HEk})(vt)}}]);