!function(g){function n(t){if(I[t])return I[t].exports;var e=I[t]={i:t,l:!1,exports:{}};return g[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}var I={};n.m=g,n.c=I,n.i=function(g){return g},n.d=function(g,I,t){n.o(g,I)||Object.defineProperty(g,I,{configurable:!1,enumerable:!0,get:t})},n.n=function(g){var I=g&&g.__esModule?function(){return g.default}:function(){return g};return n.d(I,"a",I),I},n.o=function(g,n){return Object.prototype.hasOwnProperty.call(g,n)},n.p="",n(n.s=4)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n// import WPAPI from 'wpapi';\n\nvar config = {\n    body: document.querySelector('body'),\n    siteTitle: document.querySelector('.site-title a'),\n    siteDescription: document.querySelector('.site-description'),\n    title: document.querySelector('.title-editor'),\n    content: document.querySelector('#content-editor'),\n    menuContainer: document.querySelector('#mainNav ul'),\n    articleContainer: document.querySelector('main#main'),\n    sidebar: document.querySelector('#secondary'),\n    apiRoot: 'http://writing-portfolio.dev/wp-json/'\n};\n\nconfig.page404 = {\n    type: '404',\n    title: {\n        rendered: '404 Error.'\n    },\n    content: {\n        rendered: '<p>This Page was not found</p>'\n    },\n    link: '/',\n    _embedded: {\n        author: [{\n            name: 'Admin'\n        }]\n    }\n\n};\n\n// (function($) {\n//    console.log(sitedata);\n// })( jQuery );\n//\nconsole.log(sitedata);\n\n// config.wp = new WPAPI( { endpoint: config.apiRoot } );\n//config.wp = new wp.api.collections;\n\nexports.default = config;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9saWIvY29uZmlnLmpzPzYwZWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyBpbXBvcnQgV1BBUEkgZnJvbSAnd3BhcGknO1xuXG52YXIgY29uZmlnID0ge1xuICAgIGJvZHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcbiAgICBzaXRlVGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLXRpdGxlIGEnKSxcbiAgICBzaXRlRGVzY3JpcHRpb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWRlc2NyaXB0aW9uJyksXG4gICAgdGl0bGU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1lZGl0b3InKSxcbiAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudC1lZGl0b3InKSxcbiAgICBtZW51Q29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbk5hdiB1bCcpLFxuICAgIGFydGljbGVDb250YWluZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4jbWFpbicpLFxuICAgIHNpZGViYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWNvbmRhcnknKSxcbiAgICBhcGlSb290OiAnaHR0cDovL3dyaXRpbmctcG9ydGZvbGlvLmRldi93cC1qc29uLydcbn07XG5cbmNvbmZpZy5wYWdlNDA0ID0ge1xuICAgIHR5cGU6ICc0MDQnLFxuICAgIHRpdGxlOiB7XG4gICAgICAgIHJlbmRlcmVkOiAnNDA0IEVycm9yLidcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgcmVuZGVyZWQ6ICc8cD5UaGlzIFBhZ2Ugd2FzIG5vdCBmb3VuZDwvcD4nXG4gICAgfSxcbiAgICBsaW5rOiAnLycsXG4gICAgX2VtYmVkZGVkOiB7XG4gICAgICAgIGF1dGhvcjogW3tcbiAgICAgICAgICAgIG5hbWU6ICdBZG1pbidcbiAgICAgICAgfV1cbiAgICB9XG5cbn07XG5cbi8vIChmdW5jdGlvbigkKSB7XG4vLyAgICBjb25zb2xlLmxvZyhzaXRlZGF0YSk7XG4vLyB9KSggalF1ZXJ5ICk7XG4vL1xuY29uc29sZS5sb2coc2l0ZWRhdGEpO1xuXG4vLyBjb25maWcud3AgPSBuZXcgV1BBUEkoIHsgZW5kcG9pbnQ6IGNvbmZpZy5hcGlSb290IH0gKTtcbi8vY29uZmlnLndwID0gbmV3IHdwLmFwaS5jb2xsZWN0aW9ucztcblxuZXhwb3J0cy5kZWZhdWx0ID0gY29uZmlnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xpYi9jb25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Header = __webpack_require__(2);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar App = function () {\n    function App() {\n        _classCallCheck(this, App);\n    }\n\n    _createClass(App, null, [{\n        key: \'init\',\n\n\n        /**\n         * init - Initialize the app\n         * @return {void} Not meant to return\n         */\n        value: function init() {\n            console.log(\'Is this for freaking real??\');\n            //   console.log(sitedata.rest_url); \n        }\n    }]);\n\n    return App;\n}();\n\nexports.default = App;\n\n\nApp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAuanM/ZGU4MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9IZWFkZXIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvSGVhZGVyJyk7XG5cbnZhciBfSGVhZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hlYWRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBwKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQXBwKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQXBwLCBudWxsLCBbe1xuICAgICAgICBrZXk6ICdpbml0JyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpbml0IC0gSW5pdGlhbGl6ZSB0aGUgYXBwXG4gICAgICAgICAqIEByZXR1cm4ge3ZvaWR9IE5vdCBtZWFudCB0byByZXR1cm5cbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0lzIHRoaXMgZm9yIGZyZWFraW5nIHJlYWw/PycpO1xuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhzaXRlZGF0YS5yZXN0X3VybCk7IFxuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEFwcDtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQXBwO1xuXG5cbkFwcC5pbml0KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _config = __webpack_require__(0);\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _Helpers = __webpack_require__(3);\n\nvar _Helpers2 = _interopRequireDefault(_Helpers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Header = function () {\n   function Header() {\n      _classCallCheck(this, Header);\n   }\n\n   _createClass(Header, null, [{\n      key: 'render',\n      value: function render() {\n\n         // posts.fetch({ data: { per_page: 100, orderby: 'title', order: 'asc' } }).done( () => {\n         //       clearPosts();\n         //       posts.each( post => loadPost( post.attributes ) );\n         // });\n\n      }\n   }]);\n\n   return Header;\n}();\n\nexports.default = Header;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcz9mZjNmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vbGliL2NvbmZpZycpO1xuXG52YXIgX2NvbmZpZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25maWcpO1xuXG52YXIgX0hlbHBlcnMgPSByZXF1aXJlKCcuLi8uLi9saWIvSGVscGVycycpO1xuXG52YXIgX0hlbHBlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSGVscGVycyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSGVhZGVyKTtcbiAgIH1cblxuICAgX2NyZWF0ZUNsYXNzKEhlYWRlciwgbnVsbCwgW3tcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXG4gICAgICAgICAvLyBwb3N0cy5mZXRjaCh7IGRhdGE6IHsgcGVyX3BhZ2U6IDEwMCwgb3JkZXJieTogJ3RpdGxlJywgb3JkZXI6ICdhc2MnIH0gfSkuZG9uZSggKCkgPT4ge1xuICAgICAgICAgLy8gICAgICAgY2xlYXJQb3N0cygpO1xuICAgICAgICAgLy8gICAgICAgcG9zdHMuZWFjaCggcG9zdCA9PiBsb2FkUG9zdCggcG9zdC5hdHRyaWJ1dGVzICkgKTtcbiAgICAgICAgIC8vIH0pO1xuXG4gICAgICB9XG4gICB9XSk7XG5cbiAgIHJldHVybiBIZWFkZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEhlYWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n")},function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _config = __webpack_require__(0);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Helpers = function () {\n    function Helpers() {\n        _classCallCheck(this, Helpers);\n    }\n\n    _createClass(Helpers, null, [{\n        key: 'getTitleMarkup',\n\n\n        /**\n         * getTitleMarkup - Get the markup for a content title\n         *\n         * @param {Object} content Individual content from the API\n         * @param {String} titleTag The header to display\n         * @param {Boolean} addLink Whether or not to display a link\n         * @return {Object} Title markup with link and content title\n         */\n        value: function getTitleMarkup(content) {\n            var titleTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'h1';\n            var addLink = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n\n            var titleEl = document.createElement(titleTag),\n                linkEl = document.createElement('a'),\n                title = document.createTextNode(content.title.rendered);\n\n            titleEl.classList.add('entry-title');\n\n            if (true == addLink) {\n                linkEl.appendChild(title);\n                linkEl.href = Helpers.makeHashFromLink(content);\n                titleEl.appendChild(linkEl);\n            } else {\n                titleEl.appendChild(title);\n            }\n\n            titleEl.appendChild(linkEl);\n\n            return titleEl;\n        }\n\n        /**\n         * getContentMarkup - Get the markup for content content\n         *\n         * @param  {Object} content Individual content from the API\n         * @return {Object} Content markup with content\n         */\n\n    }, {\n        key: 'getContentMarkup',\n        value: function getContentMarkup(content) {\n\n            var contentEl = document.createElement('div'),\n                contentMarkup = '',\n                date = Helpers.formatDate(content.date),\n                lastModified = Helpers.formatDate(content.modified),\n                author = content._embedded.author[0].name,\n                featuredImg = '';\n\n            if (content._embedded['wp:featuredmedia']) {\n                featuredImg = content._embedded['wp:featuredmedia'][0].source_url;\n            }\n\n            contentEl.classList.add('entry-content');\n            if ('post' == content.type) {\n                contentMarkup += '<p class=\"meta\">Author: ' + author + ' | ' + date + '</p>';\n            }\n            if (featuredImg) {\n                contentMarkup += '<img class=\"feature\" src=\"' + featuredImg + '\">';\n            }\n            contentMarkup += content.content.rendered;\n            if ('page' == content.type) {\n                contentMarkup += '<p class=\"footer\">Last Updated ' + lastModified + ' by ' + author + '</p>';\n            }\n            contentMarkup += '</div>';\n            contentEl.innerHTML = contentMarkup;\n\n            return contentEl;\n        }\n\n        /**\n         * renderHeader - Renders title to Page\n         *\n         * @param {String} title The site title to display\n         * @param {String} description The site description to display\n         * @return {void} Not meant to return\n         */\n\n    }, {\n        key: 'renderSiteInfo',\n        value: function renderSiteInfo(title, description) {\n\n            _config2.default.siteTitle.innerHTML = title;\n            _config2.default.siteDescription.innerHTML = description;\n        }\n\n        /**\n         * renderHeader - Renders title to Page\n         *\n         * @param {String} title Title to display\n         * @param {String} tag The HTML tag to use\n         * @return {void} Not meant to return\n         */\n\n    }, {\n        key: 'renderHeader',\n        value: function renderHeader(title) {\n            var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'h1';\n\n\n            var titleEl = document.createElement(tag);\n            titleEl.innerHTML = title;\n\n            _config2.default.articleContainer.appendChild(titleEl);\n        }\n\n        /**\n         * renderContent - Renders content to Page\n         *\n         * @param  {Object} content Post or Page content object\n         * @param {String} titleTag h1, h2, etc for HTML header tag to use\n         * @param {Boolean} addLink Whether to display link in title\n         * @return {void} Not meant to return\n         */\n\n    }, {\n        key: 'renderContent',\n        value: function renderContent(content) {\n            var titleTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'h1';\n            var addLink = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n\n            var articleEl = document.createElement('article'),\n                titleEl = Helpers.getTitleMarkup(content, titleTag, addLink),\n                contentEl = Helpers.getContentMarkup(content);\n\n            articleEl.classList.add(content.type);\n            articleEl.appendChild(titleEl);\n            articleEl.appendChild(contentEl);\n            _config2.default.articleContainer.appendChild(articleEl);\n        }\n    }, {\n        key: 'makeHashFromLink',\n\n\n        /**\n         * getHash - Get the hash from the url\n         *\n         * @param {Object} content The post or Page object\n         * @return {String} The hash from the url\n         */\n        value: function makeHashFromLink(content) {\n            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : content.type;\n\n\n            switch (type) {\n                case 'post':\n                    return '#/post/' + content.slug;\n                    break;\n                case 'category':\n                    return '#/category/' + content.slug;\n                    break;\n                case 'tag':\n                    return '#/tag/' + content.slug;\n                    break;\n                case 'user':\n                    return '#/user/' + content.slug;\n                    break;\n                default:\n                    return '#/' + content.slug;\n            }\n        }\n\n        /**\n         * formatDate - Convert ISO date to desired format\n         *\n         * @param {Object} date ISO formatted date\n         * @return {String} Formatted date string\n         */\n\n    }, {\n        key: 'formatDate',\n        value: function formatDate(date) {\n\n            var newDate = new Date(date),\n                day = newDate.getDay(),\n                month = newDate.getMonth(),\n                year = newDate.getYear(),\n                hours = newDate.getHours(),\n                min = newDate.getMinutes();\n\n            return day + '/' + month + '/' + year + '@' + hours + ':' + min;\n        }\n    }, {\n        key: 'clearPage',\n\n\n        /**\n         * clearPage - Clear pages from Page\n         * @return {void} Not meant to return\n         */\n        value: function clearPage() {\n            _config2.default.sidebar.innerHTML = '';\n            Helpers.clearContent();\n        }\n\n        /**\n         * clearContent - Clear main content from Page\n         * @return {void} Not meant to return\n         */\n\n    }, {\n        key: 'clearContent',\n        value: function clearContent() {\n            _config2.default.body.className = '';\n            _config2.default.articleContainer.innerHTML = '';\n        }\n    }]);\n\n    return Helpers;\n}();\n\nexports.default = Helpers;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9saWIvSGVscGVycy5qcz9kZmRhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJyk7XG5cbnZhciBfY29uZmlnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbmZpZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBIZWxwZXJzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhlbHBlcnMoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIZWxwZXJzKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoSGVscGVycywgbnVsbCwgW3tcbiAgICAgICAga2V5OiAnZ2V0VGl0bGVNYXJrdXAnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGdldFRpdGxlTWFya3VwIC0gR2V0IHRoZSBtYXJrdXAgZm9yIGEgY29udGVudCB0aXRsZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29udGVudCBJbmRpdmlkdWFsIGNvbnRlbnQgZnJvbSB0aGUgQVBJXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZVRhZyBUaGUgaGVhZGVyIHRvIGRpc3BsYXlcbiAgICAgICAgICogQHBhcmFtIHtCb29sZWFufSBhZGRMaW5rIFdoZXRoZXIgb3Igbm90IHRvIGRpc3BsYXkgYSBsaW5rXG4gICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGl0bGUgbWFya3VwIHdpdGggbGluayBhbmQgY29udGVudCB0aXRsZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRpdGxlTWFya3VwKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZhciB0aXRsZVRhZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ2gxJztcbiAgICAgICAgICAgIHZhciBhZGRMaW5rID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuXG4gICAgICAgICAgICB2YXIgdGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGl0bGVUYWcpLFxuICAgICAgICAgICAgICAgIGxpbmtFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSxcbiAgICAgICAgICAgICAgICB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQudGl0bGUucmVuZGVyZWQpO1xuXG4gICAgICAgICAgICB0aXRsZUVsLmNsYXNzTGlzdC5hZGQoJ2VudHJ5LXRpdGxlJyk7XG5cbiAgICAgICAgICAgIGlmICh0cnVlID09IGFkZExpbmspIHtcbiAgICAgICAgICAgICAgICBsaW5rRWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgICAgIGxpbmtFbC5ocmVmID0gSGVscGVycy5tYWtlSGFzaEZyb21MaW5rKGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHRpdGxlRWwuYXBwZW5kQ2hpbGQobGlua0VsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGl0bGVFbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRpdGxlRWwuYXBwZW5kQ2hpbGQobGlua0VsKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRpdGxlRWw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogZ2V0Q29udGVudE1hcmt1cCAtIEdldCB0aGUgbWFya3VwIGZvciBjb250ZW50IGNvbnRlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fSBjb250ZW50IEluZGl2aWR1YWwgY29udGVudCBmcm9tIHRoZSBBUElcbiAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBDb250ZW50IG1hcmt1cCB3aXRoIGNvbnRlbnRcbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldENvbnRlbnRNYXJrdXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29udGVudE1hcmt1cChjb250ZW50KSB7XG5cbiAgICAgICAgICAgIHZhciBjb250ZW50RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgICAgICAgICAgICBjb250ZW50TWFya3VwID0gJycsXG4gICAgICAgICAgICAgICAgZGF0ZSA9IEhlbHBlcnMuZm9ybWF0RGF0ZShjb250ZW50LmRhdGUpLFxuICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZCA9IEhlbHBlcnMuZm9ybWF0RGF0ZShjb250ZW50Lm1vZGlmaWVkKSxcbiAgICAgICAgICAgICAgICBhdXRob3IgPSBjb250ZW50Ll9lbWJlZGRlZC5hdXRob3JbMF0ubmFtZSxcbiAgICAgICAgICAgICAgICBmZWF0dXJlZEltZyA9ICcnO1xuXG4gICAgICAgICAgICBpZiAoY29udGVudC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXSkge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVkSW1nID0gY29udGVudC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXVswXS5zb3VyY2VfdXJsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZW50RWwuY2xhc3NMaXN0LmFkZCgnZW50cnktY29udGVudCcpO1xuICAgICAgICAgICAgaWYgKCdwb3N0JyA9PSBjb250ZW50LnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50TWFya3VwICs9ICc8cCBjbGFzcz1cIm1ldGFcIj5BdXRob3I6ICcgKyBhdXRob3IgKyAnIHwgJyArIGRhdGUgKyAnPC9wPic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmVhdHVyZWRJbWcpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50TWFya3VwICs9ICc8aW1nIGNsYXNzPVwiZmVhdHVyZVwiIHNyYz1cIicgKyBmZWF0dXJlZEltZyArICdcIj4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGVudE1hcmt1cCArPSBjb250ZW50LmNvbnRlbnQucmVuZGVyZWQ7XG4gICAgICAgICAgICBpZiAoJ3BhZ2UnID09IGNvbnRlbnQudHlwZSkge1xuICAgICAgICAgICAgICAgIGNvbnRlbnRNYXJrdXAgKz0gJzxwIGNsYXNzPVwiZm9vdGVyXCI+TGFzdCBVcGRhdGVkICcgKyBsYXN0TW9kaWZpZWQgKyAnIGJ5ICcgKyBhdXRob3IgKyAnPC9wPic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZW50TWFya3VwICs9ICc8L2Rpdj4nO1xuICAgICAgICAgICAgY29udGVudEVsLmlubmVySFRNTCA9IGNvbnRlbnRNYXJrdXA7XG5cbiAgICAgICAgICAgIHJldHVybiBjb250ZW50RWw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogcmVuZGVySGVhZGVyIC0gUmVuZGVycyB0aXRsZSB0byBQYWdlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0aXRsZSBUaGUgc2l0ZSB0aXRsZSB0byBkaXNwbGF5XG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkZXNjcmlwdGlvbiBUaGUgc2l0ZSBkZXNjcmlwdGlvbiB0byBkaXNwbGF5XG4gICAgICAgICAqIEByZXR1cm4ge3ZvaWR9IE5vdCBtZWFudCB0byByZXR1cm5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlclNpdGVJbmZvJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclNpdGVJbmZvKHRpdGxlLCBkZXNjcmlwdGlvbikge1xuXG4gICAgICAgICAgICBfY29uZmlnMi5kZWZhdWx0LnNpdGVUaXRsZS5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICAgICAgICAgIF9jb25maWcyLmRlZmF1bHQuc2l0ZURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJlbmRlckhlYWRlciAtIFJlbmRlcnMgdGl0bGUgdG8gUGFnZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGl0bGUgVGl0bGUgdG8gZGlzcGxheVxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGFnIFRoZSBIVE1MIHRhZyB0byB1c2VcbiAgICAgICAgICogQHJldHVybiB7dm9pZH0gTm90IG1lYW50IHRvIHJldHVyblxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVySGVhZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckhlYWRlcih0aXRsZSkge1xuICAgICAgICAgICAgdmFyIHRhZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ2gxJztcblxuXG4gICAgICAgICAgICB2YXIgdGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgICAgIHRpdGxlRWwuaW5uZXJIVE1MID0gdGl0bGU7XG5cbiAgICAgICAgICAgIF9jb25maWcyLmRlZmF1bHQuYXJ0aWNsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiByZW5kZXJDb250ZW50IC0gUmVuZGVycyBjb250ZW50IHRvIFBhZ2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICB7T2JqZWN0fSBjb250ZW50IFBvc3Qgb3IgUGFnZSBjb250ZW50IG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGl0bGVUYWcgaDEsIGgyLCBldGMgZm9yIEhUTUwgaGVhZGVyIHRhZyB0byB1c2VcbiAgICAgICAgICogQHBhcmFtIHtCb29sZWFufSBhZGRMaW5rIFdoZXRoZXIgdG8gZGlzcGxheSBsaW5rIGluIHRpdGxlXG4gICAgICAgICAqIEByZXR1cm4ge3ZvaWR9IE5vdCBtZWFudCB0byByZXR1cm5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckNvbnRlbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ29udGVudChjb250ZW50KSB7XG4gICAgICAgICAgICB2YXIgdGl0bGVUYWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdoMSc7XG4gICAgICAgICAgICB2YXIgYWRkTGluayA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogZmFsc2U7XG5cblxuICAgICAgICAgICAgdmFyIGFydGljbGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKSxcbiAgICAgICAgICAgICAgICB0aXRsZUVsID0gSGVscGVycy5nZXRUaXRsZU1hcmt1cChjb250ZW50LCB0aXRsZVRhZywgYWRkTGluayksXG4gICAgICAgICAgICAgICAgY29udGVudEVsID0gSGVscGVycy5nZXRDb250ZW50TWFya3VwKGNvbnRlbnQpO1xuXG4gICAgICAgICAgICBhcnRpY2xlRWwuY2xhc3NMaXN0LmFkZChjb250ZW50LnR5cGUpO1xuICAgICAgICAgICAgYXJ0aWNsZUVsLmFwcGVuZENoaWxkKHRpdGxlRWwpO1xuICAgICAgICAgICAgYXJ0aWNsZUVsLmFwcGVuZENoaWxkKGNvbnRlbnRFbCk7XG4gICAgICAgICAgICBfY29uZmlnMi5kZWZhdWx0LmFydGljbGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJ0aWNsZUVsKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbWFrZUhhc2hGcm9tTGluaycsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogZ2V0SGFzaCAtIEdldCB0aGUgaGFzaCBmcm9tIHRoZSB1cmxcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRlbnQgVGhlIHBvc3Qgb3IgUGFnZSBvYmplY3RcbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfSBUaGUgaGFzaCBmcm9tIHRoZSB1cmxcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBtYWtlSGFzaEZyb21MaW5rKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBjb250ZW50LnR5cGU7XG5cblxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncG9zdCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnIy9wb3N0LycgKyBjb250ZW50LnNsdWc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NhdGVnb3J5JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcjL2NhdGVnb3J5LycgKyBjb250ZW50LnNsdWc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RhZyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnIy90YWcvJyArIGNvbnRlbnQuc2x1ZztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndXNlcic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnIy91c2VyLycgKyBjb250ZW50LnNsdWc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnIy8nICsgY29udGVudC5zbHVnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGZvcm1hdERhdGUgLSBDb252ZXJ0IElTTyBkYXRlIHRvIGRlc2lyZWQgZm9ybWF0XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRlIElTTyBmb3JtYXR0ZWQgZGF0ZVxuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IEZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZm9ybWF0RGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcblxuICAgICAgICAgICAgdmFyIG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKSxcbiAgICAgICAgICAgICAgICBkYXkgPSBuZXdEYXRlLmdldERheSgpLFxuICAgICAgICAgICAgICAgIG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpLFxuICAgICAgICAgICAgICAgIHllYXIgPSBuZXdEYXRlLmdldFllYXIoKSxcbiAgICAgICAgICAgICAgICBob3VycyA9IG5ld0RhdGUuZ2V0SG91cnMoKSxcbiAgICAgICAgICAgICAgICBtaW4gPSBuZXdEYXRlLmdldE1pbnV0ZXMoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRheSArICcvJyArIG1vbnRoICsgJy8nICsgeWVhciArICdAJyArIGhvdXJzICsgJzonICsgbWluO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbGVhclBhZ2UnLFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNsZWFyUGFnZSAtIENsZWFyIHBhZ2VzIGZyb20gUGFnZVxuICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfSBOb3QgbWVhbnQgdG8gcmV0dXJuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICAgICAgICAgICAgX2NvbmZpZzIuZGVmYXVsdC5zaWRlYmFyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgSGVscGVycy5jbGVhckNvbnRlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBjbGVhckNvbnRlbnQgLSBDbGVhciBtYWluIGNvbnRlbnQgZnJvbSBQYWdlXG4gICAgICAgICAqIEByZXR1cm4ge3ZvaWR9IE5vdCBtZWFudCB0byByZXR1cm5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsZWFyQ29udGVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgICAgICAgICBfY29uZmlnMi5kZWZhdWx0LmJvZHkuY2xhc3NOYW1lID0gJyc7XG4gICAgICAgICAgICBfY29uZmlnMi5kZWZhdWx0LmFydGljbGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gSGVscGVycztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSGVscGVycztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9saWIvSGVscGVycy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n")},function(g,n,I){g.exports=I(1)}]);