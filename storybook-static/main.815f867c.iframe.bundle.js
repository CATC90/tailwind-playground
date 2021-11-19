(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{170:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Row}));__webpack_require__(24);var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(113),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(18)),Avatar=function Avatar(_ref){var href=_ref.href;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"hidden md:flex min-w-[6rem] justify-center",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{className:"object-cover w-10 h-10 rounded-full",src:href,alt:"Profile image"})})};Avatar.displayName="Avatar";var ActionWrapper=function ActionWrapper(_ref2){var children=_ref2.children;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"flex  justify-end",children:[" ",children," "]})};ActionWrapper.displayName="ActionWrapper";var Action=function Action(_ref3){var Icon=_ref3.icon;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"h-10 w-10 rounded-full hover:bg-gray-300 cursor-pointer flex justify-center items-center",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon,{className:"h-6 w-6 mx-2 text-gray-700"})})};Action.displayName="Action";var Status=function Status(_ref4){var label=_ref4.label,variant=_ref4.variant;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"text-left min-w-[9rem]",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"rounded-full "+{success:"bg-green-500",warning:"bg-yellow-500",danger:"bg-red-500",neutral:"bg-indigo-500",disabled:"bg-grey-500"}[variant]+" uppercase py-1 px-4 text-xs font-bold text-white",children:label})})};Status.displayName="Status";var ColumnData=function ColumnData(_ref5){var title=_ref5.title,_ref5$subtitle=_ref5.subtitle,subtitle=void 0===_ref5$subtitle?"":_ref5$subtitle;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"text-left flex-auto min-w-[9rem] w-32",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"font-semibold text-sm",children:title}),subtitle&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"font-thin text-sm",children:subtitle})]})};ColumnData.displayName="ColumnData";var Row=function Row(_ref6){var rowData=_ref6.rowData,avatar=rowData.avatar,rows=rowData.rows,status=rowData.status,actions=rowData.actions;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"flex items-center border-t shadow drop-shadow-md w-full h-14 hover:bg-gray-200 gap-6 overflow-y-hidden",children:[avatar&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Avatar,{href:avatar}),rows.map((function(_ref7){var title=_ref7.title,subtitle=_ref7.subtitle;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColumnData,{title:title,subtitle:subtitle})})),status&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Status,{label:status.label,variant:status.variant}),actions&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ActionWrapper,{children:[actions.view&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Action,{icon:_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.b}),actions.delete&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Action,{icon:_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.e}),actions.update&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Action,{icon:_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.c})]})]})};Row.displayName="Row",Row.__docgenInfo={description:"",methods:[],displayName:"Row"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/row/index.js"]={name:"Row",docgenInfo:Row.__docgenInfo,path:"components/row/index.js"})},171:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Search}));__webpack_require__(0);var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(113),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(18),Search=function Search(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"border rounded focus:shadow-outline shadow flex items-center",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{className:"bg-transparent appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none",id:"username",type:"text",placeholder:"Buscar"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.d,{className:"h-5 w-5 mx-2 text-gray-700"})]})};Search.displayName="Search",Search.__docgenInfo={description:"",methods:[],displayName:"Search"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/search/index.js"]={name:"Search",docgenInfo:Search.__docgenInfo,path:"components/search/index.js"})},172:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return TableBody}));__webpack_require__(24),__webpack_require__(858),__webpack_require__(5),__webpack_require__(9),__webpack_require__(7),__webpack_require__(20),__webpack_require__(17),__webpack_require__(13),__webpack_require__(16),__webpack_require__(15),__webpack_require__(6),__webpack_require__(28);var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(113),react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(18);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var TableColumnAvatar=function TableColumnAvatar(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"hidden md:flex min-w-[6rem]"})};TableColumnAvatar.displayName="TableColumnAvatar";var TableColumnTitle=function TableColumnTitle(_ref){var title=_ref.title,_ref$withFilter=(_ref.width,_ref.withFilter),withFilter=void 0!==_ref$withFilter&&_ref$withFilter,onFilter=_ref.onFilter,defaultFilter=_ref.defaultFilter,_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(defaultFilter||!1),2),isDecreasingFilter=_useState2[0],setFilter=_useState2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{onClick:function handleClick(){setFilter(!isDecreasingFilter),onFilter({title:title,isDecreasingFilter:!isDecreasingFilter})},className:"flex min-w-[9rem] items-center text-left pb-2 font-bold cursor-pointer",children:[withFilter&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_12__.a,{className:"h-4 w-4 pr-1 transition-transform "+(isDecreasingFilter&&"rotate-180 -translate-x-1")+" "}),title]})};TableColumnTitle.displayName="TableColumnTitle";var TableBody=function TableBody(_ref2){var children=_ref2.children,columns=_ref2.columns,hasAvatar=_ref2.hasAvatar;_ref2.hasActions;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"flex w-full h-10 border-b border-gray-200 z-10 gap-6",children:[hasAvatar&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(TableColumnAvatar,{width:"w-28"}),columns.map((function(_ref3){var title=_ref3.title,hasFilter=_ref3.hasFilter,handleFilter=_ref3.handleFilter,isDefaultFilter=_ref3.isDefaultFilter;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(TableColumnTitle,{title:title,withFilter:hasFilter,onFilter:handleFilter,defaultFilter:isDefaultFilter})}))]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"w-full overflow-y-scroll",children:children})]})};TableBody.__docgenInfo={description:"",methods:[],displayName:"TableBody"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/table-body/index.js"]={name:"TableBody",docgenInfo:TableBody.__docgenInfo,path:"components/table-body/index.js"})},487:function(module,exports,__webpack_require__){__webpack_require__(488),__webpack_require__(643),__webpack_require__(644),__webpack_require__(859),__webpack_require__(860),__webpack_require__(866),__webpack_require__(867),__webpack_require__(865),__webpack_require__(861),__webpack_require__(868),__webpack_require__(862),__webpack_require__(863),__webpack_require__(869),module.exports=__webpack_require__(851)},554:function(module,exports){},644:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(351)},851:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(351).configure)([__webpack_require__(852),__webpack_require__(853)],module,!1)}).call(this,__webpack_require__(208)(module))},852:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=852},853:function(module,exports,__webpack_require__){var map={"./row/row.stories.js":854,"./search/search.stories.js":856,"./table-body/tableBody.stories.js":857,"./table/table.stories.js":864};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=853},854:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(12),__webpack_require__(214),__webpack_require__(0);var _index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(170),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18);__webpack_exports__.default={component:_index__WEBPACK_IMPORTED_MODULE_3__.a,title:"Row"};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={rowData:{avatar:"https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",rows:[{title:"Carlos Trujillo",subtitle:"catc_90@hotmail.com"},{title:"Santa cristina 3148",subtitle:"Macul"}],actions:{delete:{},update:{},view:{}},status:{label:"New",variant:"success"}}},Default.parameters=Object.assign({storySource:{source:"(args) => <Row {...args} />"}},Default.parameters)},856:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(12),__webpack_require__(214),__webpack_require__(0);var _index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(171),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18);__webpack_exports__.default={component:_index__WEBPACK_IMPORTED_MODULE_3__.a,title:"Search"};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={},Default.parameters=Object.assign({storySource:{source:"(args) => <Search {...args} />"}},Default.parameters)},857:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(12),__webpack_require__(214),__webpack_require__(0);var _index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(172),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18);__webpack_exports__.default={component:_index__WEBPACK_IMPORTED_MODULE_3__.a,title:"TableBody"};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={columns:[{title:"Nombre",isDefaultFilter:!0,hasFilter:!0},{title:"Dirección",hasFilter:!0},{title:"Status"}],hasAvatar:!0,hasActions:!0},Default.parameters=Object.assign({storySource:{source:"(args) => <TableBody {...args} />"}},Default.parameters)},864:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__(12),__webpack_require__(214),__webpack_require__(0),__webpack_require__(24);var row=__webpack_require__(170),search=__webpack_require__(171),table_body=__webpack_require__(172),jsx_runtime=__webpack_require__(18),table_header_TableHeader=function TableHeader(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)("div",{className:"p-4",children:children})};table_header_TableHeader.displayName="TableHeader",table_header_TableHeader.__docgenInfo={description:"",methods:[],displayName:"TableHeader"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/table-header.js"]={name:"TableHeader",docgenInfo:table_header_TableHeader.__docgenInfo,path:"components/table-header.js"});var table_wrapper_TableWrapper=function TableWrapper(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)("figure",{className:"flex flex-col max-w-max bg-gray-100 rounded-xl p-0 max-h-80 relative font-nunito",children:children})};table_wrapper_TableWrapper.displayName="TableWrapper",table_wrapper_TableWrapper.__docgenInfo={description:"",methods:[],displayName:"TableWrapper"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/table-wrapper.js"]={name:"TableWrapper",docgenInfo:table_wrapper_TableWrapper.__docgenInfo,path:"components/table-wrapper.js"});var table_Table=function Table(_ref){var tableData=_ref.tableData,columns=tableData.columns,data=tableData.data,hasAvatar=tableData.hasAvatar,hasActions=tableData.hasActions;return Object(jsx_runtime.jsxs)(table_wrapper_TableWrapper,{children:[Object(jsx_runtime.jsx)(table_header_TableHeader,{children:Object(jsx_runtime.jsx)(search.a,{})}),Object(jsx_runtime.jsx)(table_body.a,{columns:columns,hasActions:hasActions,hasAvatar:hasAvatar,children:data.map((function(rowData){return Object(jsx_runtime.jsx)(row.a,{rowData:rowData})}))})]})};table_Table.displayName="Table",table_Table.__docgenInfo={description:"",methods:[],displayName:"Table"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/table/index.js"]={name:"Table",docgenInfo:table_Table.__docgenInfo,path:"components/table/index.js"});__webpack_exports__.default={component:table_Table,title:"Table"};var table_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(table_Table,Object.assign({},args))};table_stories_Template.displayName="Template";var Default=table_stories_Template.bind({});Default.args={tableData:{data:[{avatar:"https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",rows:[{title:"Carlos Trujillo",subtitle:"catc_90@hotmail.com"},{title:"Fullstack developer",subtitle:"Stefanini chile"},{title:"Santa cristina 3148, santiago",subtitle:"Macul"}],actions:{delete:{},update:{},view:{}},status:{label:"New",variant:"success"}},{avatar:"https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",rows:[{title:"Carlos Trujillo",subtitle:"catc_90@hotmail.com"},{title:"Fullstack developer",subtitle:"Stefanini chile"},{title:"Santa cristina 3148, santiago",subtitle:"Macul"}],actions:{delete:{},update:{},view:{}},status:{label:"New",variant:"success"}},{avatar:"https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",rows:[{title:"Carlos Trujillo",subtitle:"catc_90@hotmail.com"},{title:"Fullstack developer",subtitle:"Stefanini chile"},{title:"Santa cristina 3148, santiago",subtitle:"Macul"}],actions:{delete:{},update:{},view:{}},status:{label:"New",variant:"success"}},{avatar:"https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",rows:[{title:"Carlos Trujillo",subtitle:"catc_90@hotmail.com"},{title:"Fullstack developer",subtitle:"Stefanini chile"},{title:"Santa cristina 3148, santiago",subtitle:"Macul"}],actions:{delete:{},update:{},view:{}},status:{label:"New",variant:"success"}},{avatar:"https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",rows:[{title:"Carlos Trujillo",subtitle:"catc_90@hotmail.com"},{title:"Fullstack developer",subtitle:"Stefanini chile"},{title:"Santa cristina 3148, santiago",subtitle:"Macul"}],actions:{delete:{},update:{},view:{}},status:{label:"New",variant:"success"}},{avatar:"https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",rows:[{title:"Carlos Trujillo",subtitle:"catc_90@hotmail.com"},{title:"Fullstack developer",subtitle:"Stefanini chile"},{title:"Santa cristina 3148, santiago",subtitle:"Macul"}],actions:{delete:{},update:{},view:{}},status:{label:"New",variant:"success"}},{avatar:"https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",rows:[{title:"Carlos Trujillo",subtitle:"catc_90@hotmail.com"},{title:"Fullstack developer",subtitle:"Stefanini chile"},{title:"Santa cristina 3148, santiago",subtitle:"Macul"}],actions:{delete:{},update:{},view:{}},status:{label:"New",variant:"success"}}],columns:[{title:"Nombre",isDefaultFilter:!0,hasFilter:!0},{title:"Cargo"},{title:"Dirección",hasFilter:!0},{title:"Status"}],hasAvatar:!0,hasActions:!0}},Default.parameters=Object.assign({storySource:{source:"(args) => <Table {...args} />"}},Default.parameters)},869:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(26),__webpack_require__(5),__webpack_require__(52),__webpack_require__(434),__webpack_require__(844),__webpack_require__(50),__webpack_require__(845),__webpack_require__(846),__webpack_require__(433);var client_api=__webpack_require__(876),esm=__webpack_require__(4),parameters=(__webpack_require__(847),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[487,2,3]]]);