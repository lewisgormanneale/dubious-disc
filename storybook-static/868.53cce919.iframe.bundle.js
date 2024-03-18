"use strict";(self.webpackChunkdubious_disc=self.webpackChunkdubious_disc||[]).push([[868],{"./node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sU:()=>NgIconsModule});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),isFunction=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");var EmptyError=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js"),Subscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js");const NgGlyphConfigToken=new core.InjectionToken("Ng Glyph Config"),defaultConfig$1={size:"1em",opticalSize:20,color:"currentColor",weight:400,grade:0,fill:!1};const NgGlyphsToken=new core.InjectionToken("NgGlyphsToken");function coerceCssPixelValue(value){return null==value?"":/^\d+$/.test(value)?`${value}px`:value}class NgGlyph{constructor(){this.glyphsets=function injectNgGlyphs(){const glyphs=(0,core.inject)(NgGlyphsToken,{optional:!0});if(!glyphs)throw new Error("Please provide the glyphs using the provideNgGlyphs() function.");return glyphs}(),this.config=function injectNgGlyphsConfig(){return(0,core.inject)(NgGlyphConfigToken,{optional:!0})??defaultConfig$1}(),this.glyphset=this.glyphsets.defaultGlyphset,this.opticalSize=this.config.opticalSize,this.weight=this.config.weight,this.grade=this.config.grade,this.fill=this.config.fill,this.size=this.config.size,this.color=this.config.color}get glyphsetClass(){const glyphset=this.glyphsets.glyphsets.find((glyphset=>glyphset.name===this.glyphset));if(!glyphset)throw new Error(`The glyphset "${this.glyphset}" does not exist. Please provide a valid glyphset.`);return glyphset.baseClass}get fontVariationSettings(){return`'FILL' ${this.fill?1:0}, 'wght' ${this.weight}, 'GRAD' ${this.grade}, 'opsz' ${this.opticalSize}`}static#_=this.ɵfac=function NgGlyph_Factory(t){return new(t||NgGlyph)};static#_2=this.ɵcmp=core["ɵɵdefineComponent"]({type:NgGlyph,selectors:[["ng-glyph"]],hostVars:9,hostBindings:function NgGlyph_HostBindings(rf,ctx){2&rf&&(core["ɵɵhostProperty"]("textContent",ctx.name),core["ɵɵclassMap"](ctx.glyphsetClass),core["ɵɵstyleProp"]("--ng-glyph__size",ctx.size)("color",ctx.color)("font-variation-settings",ctx.fontVariationSettings))},inputs:{name:"name",glyphset:"glyphset",opticalSize:["opticalSize","opticalSize",core.numberAttribute],weight:["weight","weight",core.numberAttribute],grade:["grade","grade",core.numberAttribute],fill:["fill","fill",core.booleanAttribute],size:["size","size",coerceCssPixelValue],color:"color"},standalone:!0,features:[core["ɵɵInputTransformsFeature"],core["ɵɵStandaloneFeature"]],decls:0,vars:0,template:function NgGlyph_Template(rf,ctx){},styles:["[_nghost-%COMP%]{display:inline-block;width:var(--ng-glyph__size);height:var(--ng-glyph__size);font-size:var(--ng-glyph__size);overflow:hidden}"],changeDetection:0})}("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](NgGlyph,[{type:core.Component,args:[{selector:"ng-glyph",standalone:!0,template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[":host{display:inline-block;width:var(--ng-glyph__size);height:var(--ng-glyph__size);font-size:var(--ng-glyph__size);overflow:hidden}\n"]}]}],null,{name:[{type:core.HostBinding,args:["textContent"]},{type:core.Input,args:[{required:!0}]}],glyphset:[{type:core.Input}],opticalSize:[{type:core.Input,args:[{transform:core.numberAttribute}]}],weight:[{type:core.Input,args:[{transform:core.numberAttribute}]}],grade:[{type:core.Input,args:[{transform:core.numberAttribute}]}],fill:[{type:core.Input,args:[{transform:core.booleanAttribute}]}],size:[{type:core.HostBinding,args:["style.--ng-glyph__size"]},{type:core.Input,args:[{transform:coerceCssPixelValue}]}],color:[{type:core.HostBinding,args:["style.color"]},{type:core.Input}],glyphsetClass:[{type:core.HostBinding,args:["class"]}],fontVariationSettings:[{type:core.HostBinding,args:["style.font-variation-settings"]}]});const NgIconConfigToken=new core.InjectionToken("Ng Icon Config"),defaultConfig={size:"1em"};const NgIconLoaderToken=new core.InjectionToken("Ng Icon Loader Token");const NgIconCacheToken=new core.InjectionToken("Ng Icon Cache Token");function provideIcons(icons){return[{provide:NgIconsToken,useFactory:parentIcons=>({...parentIcons?.reduce(((acc,icons)=>({...acc,...icons})),{}),...icons}),deps:[[NgIconsToken,new core.Optional,new core.SkipSelf]],multi:!0}]}const NgIconsToken=new core.InjectionToken("Icons Token");function coerceLoaderResult(result){return"string"==typeof result?Promise.resolve(result):function isObservable(obj){return!!obj&&(obj instanceof Observable.y||(0,isFunction.m)(obj.lift)&&(0,isFunction.m)(obj.subscribe))}(result)?function firstValueFrom(source,config){var hasConfig="object"==typeof config;return new Promise((function(resolve,reject){var subscriber=new Subscriber.Hp({next:function(value){resolve(value),subscriber.unsubscribe()},error:reject,complete:function(){hasConfig?resolve(config.defaultValue):reject(new EmptyError.K)}});source.subscribe(subscriber)}))}(result):result}class NgIcon{constructor(){this.config=function injectNgIconConfig(){return(0,core.inject)(NgIconConfigToken,{optional:!0})??defaultConfig}(),this.icons=function injectNgIcons(){return(0,core.inject)(NgIconsToken,{optional:!0})??[]}(),this.loader=function injectNgIconLoader(){return(0,core.inject)(NgIconLoaderToken,{optional:!0})}(),this.cache=function injectNgIconLoaderCache(){return(0,core.inject)(NgIconCacheToken,{optional:!0})}(),this.injector=(0,core.inject)(core.Injector),this.elementRef=(0,core.inject)(core.ElementRef),this.size=this.config.size,this.color=this.config.color}set name(name){this.setIcon(name)}setIcon(name){var _this=this;return(0,asyncToGenerator.Z)((function*(){const propertyName=function toPropertyName(str){return str.replace(/([^a-zA-Z0-9])+(.)?/g,((_,__,chr)=>chr?chr.toUpperCase():"")).replace(/[^a-zA-Z\d]/g,"").replace(/^([A-Z])/,(m=>m.toLowerCase()))}(name);for(const icons of[..._this.icons].reverse())if(icons[propertyName])return void(_this.elementRef.nativeElement.innerHTML=icons[propertyName]);if(_this.loader){const result=yield _this.requestIconFromLoader(name);if(null!==result)return void(_this.elementRef.nativeElement.innerHTML=result)}console.warn(`No icon named ${name} was found. You may need to import it using the withIcons function.`)}))()}requestIconFromLoader(name){var _this2=this;return new Promise((resolve=>{(0,core.runInInjectionContext)(this.injector,(0,asyncToGenerator.Z)((function*(){if(_this2.cache){const cachedResult=_this2.cache.get(name);if("string"==typeof cachedResult)return void resolve(cachedResult);if(cachedResult instanceof Promise){const result=yield cachedResult;return void resolve(result)}}const promise=coerceLoaderResult(_this2.loader(name));_this2.cache?.set(name,promise);const result=yield promise;_this2.cache?.set(name,result),resolve(result)})))}))}static#_=this.ɵfac=function NgIcon_Factory(t){return new(t||NgIcon)};static#_2=this.ɵcmp=core["ɵɵdefineComponent"]({type:NgIcon,selectors:[["ng-icon"]],hostVars:6,hostBindings:function NgIcon_HostBindings(rf,ctx){2&rf&&core["ɵɵstyleProp"]("--ng-icon__size",ctx.size)("--ng-icon__stroke-width",ctx.strokeWidth)("color",ctx.color)},inputs:{name:"name",size:["size","size",coerceCssPixelValue],strokeWidth:"strokeWidth",color:"color"},standalone:!0,features:[core["ɵɵInputTransformsFeature"],core["ɵɵStandaloneFeature"]],decls:0,vars:0,template:function NgIcon_Template(rf,ctx){},styles:["[_nghost-%COMP%]{display:inline-block;width:var(--ng-icon__size);height:var(--ng-icon__size);overflow:hidden}"],changeDetection:0})}("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](NgIcon,[{type:core.Component,args:[{selector:"ng-icon",template:"",standalone:!0,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[":host{display:inline-block;width:var(--ng-icon__size);height:var(--ng-icon__size);overflow:hidden}\n"]}]}],null,{name:[{type:core.Input}],size:[{type:core.HostBinding,args:["style.--ng-icon__size"]},{type:core.Input,args:[{transform:coerceCssPixelValue}]}],strokeWidth:[{type:core.HostBinding,args:["style.--ng-icon__stroke-width"]},{type:core.Input}],color:[{type:core.HostBinding,args:["style.color"]},{type:core.Input}]});class NgIconsModule{constructor(icons){if(0===Object.keys(icons).length)throw new Error("No icons have been provided. Ensure to include some icons by importing them using NgIconsModule.withIcons({ ... }).")}static withIcons(icons){return{ngModule:NgIconsModule,providers:provideIcons(icons)}}static#_=this.ɵfac=function NgIconsModule_Factory(t){return new(t||NgIconsModule)(core["ɵɵinject"](NgIconsToken))};static#_2=this.ɵmod=core["ɵɵdefineNgModule"]({type:NgIconsModule,imports:[NgIcon],exports:[NgIcon]});static#_3=this.ɵinj=core["ɵɵdefineInjector"]({})}("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](NgIconsModule,[{type:core.NgModule,args:[{imports:[NgIcon],exports:[NgIcon]}]}],(()=>[{type:void 0,decorators:[{type:core.Inject,args:[NgIconsToken]}]}]),null)},"./node_modules/@ng-icons/heroicons/fesm2022/ng-icons-heroicons-solid.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{LJA:()=>heroUserCircleSolid});const heroUserCircleSolid='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="width:var(--ng-icon__size, 1em);height:var(--ng-icon__size, 1em)"><path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"/></svg>'},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})}}]);