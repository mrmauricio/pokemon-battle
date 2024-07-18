(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Error/error.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Error/error.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <fa-icon [icon]=\"faExclamationTriangle\"></fa-icon>\r\n    <span>\r\n        <a href=\"https://pokeapi.co/\">PokéAPI</a> seems to be offline. Try again\r\n        later</span\r\n    >\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\r\n    <a href=\"https://github.com/mrmauricio\">\r\n        <fa-icon [icon]=\"faGithub\"></fa-icon>\r\n        <span>mrmauricio ;)</span>\r\n    </a>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n    <a routerLink=\"\">\r\n        <img src=\"assets/images/logo.png\" alt=\"Angular\" />\r\n        <span>Angular Battle Simulator</span>\r\n    </a>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Loading/loading.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/Loading/loading.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <fa-icon [icon]=\"faFan\" [spin]=\"true\"></fa-icon>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/PokemonCard/pokemon-card.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/PokemonCard/pokemon-card.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<article>\r\n    <a routerLink=\"/pokemon/{{ pokemon.id }}\">\r\n        <h2>#{{ pokemon.id }} {{ pokemon.name | titlecase }}</h2>\r\n        <img\r\n            id=\"pokemon\"\r\n            [src]=\"trophyAmount !== 6 ? pokemon.sprite : pokemon.spriteShiny\"\r\n            [alt]=\"pokemon.name\"\r\n        />\r\n        <div>\r\n            <span *ngFor=\"let type of pokemon.types; let i = index\">\r\n                <span *ngIf=\"i === 1\">/</span>\r\n                {{ type | uppercase }}\r\n            </span>\r\n        </div>\r\n        <ng-container *ngFor=\"let item of trophyArray\">\r\n            <img\r\n                *ngIf=\"item <= trophyAmount\"\r\n                class=\"trophy\"\r\n                id=\"trophy-{{ item }}\"\r\n                src=\"assets/images/trophy.png\"\r\n                alt=\"trophy\"\r\n            />\r\n        </ng-container>\r\n    </a>\r\n</article>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Battle/battle.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Battle/battle.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div *ngIf=\"playerPokemon\">\r\n        <div id=\"mobile-warning\">\r\n            <p>Please use your phone on Landscape Mode</p>\r\n            <p>Android layout still being finished ;)</p>\r\n        </div>\r\n        <!-- BATTLE SCREEN -->\r\n        <div class=\"battle-background\">\r\n            <img\r\n                id=\"bg\"\r\n                src=\"assets/images/battle-background.jpeg\"\r\n                [class.darken]=\"battlePhase === 4\"\r\n                alt=\"bg\"\r\n                draggable=\"false\"\r\n            />\r\n            <!-- PLAYER INFO (SPRITE, INFO, DAMAGE TAKEN) -->\r\n            <img\r\n                id=\"player-sprite\"\r\n                [class.hidden]=\"\r\n                    !playerPokemon.status.isAlive || battlePhase === 4\r\n                \"\r\n                [class.sprite-attack]=\"playerPokemon.status.startAttack\"\r\n                [src]=\"\r\n                    playerTrophyAmount !== 6\r\n                        ? playerPokemon.sprites.back_default\r\n                        : playerPokemon.sprites.back_shiny\r\n                \"\r\n                [alt]=\"playerPokemon.name\"\r\n            />\r\n            <div\r\n                id=\"player-info\"\r\n                [class.hidden]=\"battlePhase === 4\"\r\n                [class.damaged]=\"enemyPokemon.status.startAttack\"\r\n            >\r\n                <strong>{{ playerPokemon.name }}</strong>\r\n                <div>\r\n                    <div class=\"hp-bar\">\r\n                        <div\r\n                            [style.width]=\"\r\n                                playerPokemon.status.currentHpPercentage + '%'\r\n                            \"\r\n                            [style.background-color]=\"\r\n                                playerPokemon.status.currentHpColor\r\n                            \"\r\n                        ></div>\r\n                    </div>\r\n                </div>\r\n                <small>\r\n                    {{ playerPokemon.status.currentHp }} /\r\n                    {{ playerPokemon.stats.hp }}\r\n                </small>\r\n            </div>\r\n            <div\r\n                *ngIf=\"enemyPokemon.status.startAttack\"\r\n                id=\"player-damage-taken\"\r\n            >\r\n                <div>-{{ enemyPokemon.status.damageDealt }} HP</div>\r\n                <div>{{ enemyPokemon.status.currentAttackEffectiveness }}</div>\r\n            </div>\r\n            <!-- ENEMY INFO (SPRITE, INFO, DAMAGE TAKEN) -->\r\n            <img\r\n                id=\"enemy-sprite\"\r\n                [class.hidden]=\"\r\n                    !enemyPokemon.status.isAlive || battlePhase === 4\r\n                \"\r\n                [class.sprite-attack]=\"enemyPokemon.status.startAttack\"\r\n                [src]=\"\r\n                    enemyTrophyAmount !== 6\r\n                        ? enemyPokemon.sprites.front_default\r\n                        : enemyPokemon.sprites.front_shiny\r\n                \"\r\n                [alt]=\"enemyPokemon.name\"\r\n            />\r\n            <div\r\n                id=\"enemy-info\"\r\n                [class.hidden]=\"battlePhase === 4\"\r\n                [class.damaged]=\"playerPokemon.status.startAttack\"\r\n            >\r\n                <strong>{{ enemyPokemon.name }}</strong>\r\n                <div>\r\n                    <div class=\"hp-bar\">\r\n                        <div\r\n                            [style.width]=\"\r\n                                enemyPokemon.status.currentHpPercentage + '%'\r\n                            \"\r\n                            [style.background]=\"\r\n                                enemyPokemon.status.currentHpColor\r\n                            \"\r\n                        ></div>\r\n                    </div>\r\n                </div>\r\n                <small>\r\n                    {{ enemyPokemon.status.currentHp }} /\r\n                    {{ enemyPokemon.stats.hp }}\r\n                </small>\r\n            </div>\r\n            <div\r\n                *ngIf=\"playerPokemon.status.startAttack\"\r\n                id=\"enemy-damage-taken\"\r\n            >\r\n                <div>-{{ playerPokemon.status.damageDealt }} HP</div>\r\n                <div>{{ playerPokemon.status.currentAttackEffectiveness }}</div>\r\n            </div>\r\n            <!-- WIN/LOSE MODALS -->\r\n            <div\r\n                *ngIf=\"!playerPokemon.status.isAlive\"\r\n                id=\"modal-loser\"\r\n                class=\"modal\"\r\n                [class.visible]=\"battlePhase === 4\"\r\n            >\r\n                <div>\r\n                    <strong>YOU LOST!</strong>\r\n                    <div>\r\n                        <a routerLink=\"/pokemon/{{ playerPokemon.id }}\">\r\n                            <span>Try again</span>\r\n                        </a>\r\n                        <a routerLink=\"/\"><span>Change fighter</span></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div\r\n                *ngIf=\"!enemyPokemon.status.isAlive\"\r\n                id=\"modal-winner\"\r\n                class=\"modal\"\r\n                [class.visible]=\"battlePhase === 4\"\r\n            >\r\n                <div>\r\n                    <strong>YOU WON!</strong>\r\n                    <div *ngIf=\"playerTrophyAmount !== 5\">\r\n                        <img\r\n                            id=\"modal-trophy\"\r\n                            src=\"assets/images/trophy.png\"\r\n                            alt=\"trophy\"\r\n                        />\r\n                    </div>\r\n                    <div id=\"unlocked-shiny\" *ngIf=\"playerTrophyAmount === 5\">\r\n                        <img [src]=\"playerPokemon.sprites.front_shiny\" alt=\"\" />\r\n                        <div>Unlocked Shiny {{ playerPokemon.name }}!</div>\r\n                    </div>\r\n\r\n                    <a routerLink=\"/pokemon/{{ playerPokemon.id }}\">\r\n                        <span>Fight again!</span>\r\n                    </a>\r\n                    <a routerLink=\"/\"><span>Change fighter</span></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- BATTLE MENU -->\r\n        <div class=\"battle-menu\">\r\n            <div\r\n                *ngIf=\"battlePhase === 3 || battlePhase === 4\"\r\n                class=\"battle-info\"\r\n            >\r\n                <span>\r\n                    {{ battleInfoText }}\r\n                </span>\r\n            </div>\r\n            <div\r\n                *ngIf=\"battlePhase === 1 || battlePhase === 2\"\r\n                class=\"battle-options\"\r\n            >\r\n                <div class=\"battle-left-options\">\r\n                    <span *ngIf=\"battlePhase === 1\">\r\n                        {{ battleInfoText }}\r\n                    </span>\r\n                    <ng-container *ngIf=\"battlePhase === 2\">\r\n                        <button\r\n                            (click)=\"handleMoveSelect(move)\"\r\n                            *ngFor=\"let move of playerPokemon.moves\"\r\n                        >\r\n                            {{ move.name }}\r\n                        </button>\r\n                    </ng-container>\r\n                </div>\r\n                <div class=\"battle-right-options\">\r\n                    <button\r\n                        (click)=\"handleOptionSelect(option.id)\"\r\n                        *ngFor=\"let option of battleOptions\"\r\n                    >\r\n                        {{ option.name }}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Main/main.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Main/main.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\r\n    <section *ngFor=\"let section of sections\">\r\n        <h1>\r\n            <fa-icon [icon]=\"section.title.icon\"></fa-icon\r\n            >{{ section.title.name }}\r\n        </h1>\r\n        <div class=\"main-loading\">\r\n            <app-loading\r\n                *ngIf=\"\r\n                    section.isLoading &&\r\n                    !section.error &&\r\n                    !section.buttonList.isLoading\r\n                \"\r\n            ></app-loading>\r\n\r\n            <app-error *ngIf=\"section.error\"></app-error>\r\n        </div>\r\n        <div\r\n            class=\"main-article\"\r\n            *ngIf=\"\r\n                (!section.isLoading && !section.error) ||\r\n                section.buttonList.isLoading\r\n            \"\r\n        >\r\n            <ng-container>\r\n                <app-pokemon-card\r\n                    *ngFor=\"let pokemon of section.pokemonList\"\r\n                    [pokemon]=\"pokemon\"\r\n                    [trophyAmount]=\"trophyList[pokemon.id]\"\r\n                ></app-pokemon-card>\r\n            </ng-container>\r\n\r\n            <div\r\n                *ngIf=\"\r\n                    section.buttonList.buttons.length > 0 &&\r\n                    !section.buttonList.isLoading\r\n                \"\r\n            >\r\n                <button\r\n                    *ngFor=\"let button of section.buttonList.buttons\"\r\n                    (click)=\"button.function(section.id)\"\r\n                >\r\n                    <fa-icon [icon]=\"button.icon\"></fa-icon>\r\n                    <span>{{ button.name }}</span>\r\n                </button>\r\n            </div>\r\n            <app-loading *ngIf=\"section.buttonList.isLoading\"></app-loading>\r\n        </div>\r\n    </section>\r\n</main>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/NotFound/not-found.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/NotFound/not-found.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div>\r\n        <small>Artwork by moltres93</small>\r\n        <img src=\"assets/images/not-found.jpg\" alt=\"not-found\" />\r\n        <button (click)=\"redirectHome()\">\r\n            <fa-icon [icon]=\"faHome\"></fa-icon>\r\n            <span>Home page</span>\r\n        </button>\r\n    </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Pokemon/pokemon.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Pokemon/pokemon.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n    <div>\r\n        <app-loading *ngIf=\"isLoading && !error\"></app-loading>\r\n        <app-error *ngIf=\"error\"></app-error>\r\n        <div class=\"pokemon-detail\" *ngIf=\"!isLoading && !error\">\r\n            <nav>\r\n                <div [class.nav-disabled]=\"id === 1\">\r\n                    <a\r\n                        [class.nav-disabled]=\"id === 1\"\r\n                        routerLink=\"/pokemon/{{ pokemon.id - 1 }}\"\r\n                    >\r\n                        <fa-icon [icon]=\"faArrowAltCircleLeft\"></fa-icon>\r\n                        <span>#{{ pokemon.id - 1 }}</span>\r\n                    </a>\r\n\r\n                    <a routerLink=\"/pokemon/{{ pokemon.id + 1 }}\">\r\n                        <span>#{{ pokemon.id + 1 }}</span>\r\n                        <fa-icon [icon]=\"faArrowAltCircleRight\"></fa-icon>\r\n                    </a>\r\n                </div>\r\n\r\n                <div\r\n                    [class.nav-disabled]=\"fighterIndex === 0\"\r\n                    *ngIf=\"isFighter\"\r\n                    id=\"nav-fighter\"\r\n                >\r\n                    <a\r\n                        [class.nav-disabled]=\"fighterIndex === 0\"\r\n                        routerLink=\"/pokemon/{{\r\n                            fightersIdList[fighterIndex - 1]\r\n                        }}\"\r\n                    >\r\n                        <fa-icon [icon]=\"faArrowAltCircleLeft\"></fa-icon>\r\n                        <span>Previous Fighter</span>\r\n                    </a>\r\n                    <a\r\n                        [class.nav-disabled]=\"\r\n                            fighterIndex === fightersIdList.length - 1\r\n                        \"\r\n                        routerLink=\"/pokemon/{{\r\n                            fightersIdList[fighterIndex + 1]\r\n                        }}\"\r\n                    >\r\n                        <span>Next Fighter</span>\r\n                        <fa-icon [icon]=\"faArrowAltCircleRight\"></fa-icon>\r\n                    </a>\r\n                </div>\r\n            </nav>\r\n            <header [class.header-position]=\"isFighter\">\r\n                <h1>#{{ pokemon.id }} {{ pokemon.name | uppercase }}</h1>\r\n            </header>\r\n\r\n            <div>\r\n                <div id=\"img-wrapper\">\r\n                    <img [src]=\"pokemon.sprites.artwork\" [alt]=\"pokemon.name\" />\r\n                </div>\r\n\r\n                <div class=\"pokemon-info\">\r\n                    <ul>\r\n                        <li>\r\n                            <small>National Nº</small>\r\n                            <span>{{ pokemon.id }}</span>\r\n                        </li>\r\n                        <li>\r\n                            <small>Type</small>\r\n                            <span>\r\n                                <span\r\n                                    *ngFor=\"\r\n                                        let type of pokemon.types;\r\n                                        let i = index\r\n                                    \"\r\n                                >\r\n                                    <span *ngIf=\"i === 1\">/</span>\r\n                                    {{ type | titlecase }}\r\n                                </span>\r\n                            </span>\r\n                        </li>\r\n                        <li>\r\n                            <small>Height</small>\r\n                            <span>{{ pokemon.height }} m</span>\r\n                        </li>\r\n                        <li>\r\n                            <small>Ability</small>\r\n                            <span>\r\n                                <span\r\n                                    *ngFor=\"\r\n                                        let ability of pokemon.abilities;\r\n                                        let i = index\r\n                                    \"\r\n                                >\r\n                                    {{ ability | titlecase }}\r\n                                    <span\r\n                                        *ngIf=\"\r\n                                            i !== pokemon.abilities.length - 1\r\n                                        \"\r\n                                    >\r\n                                        / <br\r\n                                    /></span>\r\n                                </span>\r\n                            </span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <div *ngIf=\"isFighter\" class=\"pokemon-moves\">\r\n                    <h2>Moves:</h2>\r\n                    <ul>\r\n                        <li *ngFor=\"let move of pokemon.moves; let i = index\">\r\n                            <div>\r\n                                <span>\r\n                                    <h3>{{ move.name | uppercase }}</h3>\r\n                                </span>\r\n                                <span>\r\n                                    <span>\r\n                                        <small>Power</small>\r\n                                        <span\r\n                                            >{{ move.power }}\r\n                                            <fa-icon\r\n                                                *ngIf=\"isMoveStab[i] === true\"\r\n                                                [icon]=\"faAngleDoubleUp\"\r\n                                            ></fa-icon>\r\n                                        </span>\r\n                                    </span>\r\n                                    <span>\r\n                                        <small>Type</small>\r\n                                        <span>{{ move.type | titlecase }}</span>\r\n                                    </span>\r\n                                </span>\r\n                            </div>\r\n                            <p>{{ move.text }}</p>\r\n                        </li>\r\n                    </ul>\r\n                    <p>\r\n                        <fa-icon [icon]=\"faAngleDoubleUp\"></fa-icon>\r\n                        <span> : Same type attack bonus</span>\r\n                    </p>\r\n                </div>\r\n\r\n                <div *ngIf=\"!isFighter\" id=\"not-fighter-wrapper\">\r\n                    <p>\r\n                        {{ pokemon.name | titlecase }} is in a peaceful mood and\r\n                        chose not to fight. <br />\r\n                        Check the fighters <a routerLink=\"/\">here</a>\r\n                    </p>\r\n                </div>\r\n\r\n                <div id=\"btn-wrapper\">\r\n                    <button\r\n                        (click)=\"startBattle()\"\r\n                        [disabled]=\"\r\n                            !isFighter || isBattleLoading ? true : false\r\n                        \"\r\n                    >\r\n                        <fa-icon\r\n                            *ngIf=\"isBattleLoading\"\r\n                            [icon]=\"faFan\"\r\n                            [spin]=\"true\"\r\n                        ></fa-icon>\r\n                        <fa-icon\r\n                            *ngIf=\"!isBattleLoading\"\r\n                            [icon]=\"faBolt\"\r\n                        ></fa-icon>\r\n                        <span>Start Battle</span>\r\n                    </button>\r\n                </div>\r\n\r\n                <div id=\"trophies-list\" *ngIf=\"isFighter\">\r\n                    <div>\r\n                        <ng-container *ngFor=\"let item of trophyArray\">\r\n                            <img\r\n                                [class.trophy-missing]=\"item > trophyList[id]\"\r\n                                src=\"assets/images/trophy.png\"\r\n                                alt=\"trophy\"\r\n                            />\r\n                        </ng-container>\r\n                    </div>\r\n                    <small> {{ trophyList[id] }} / 6</small>\r\n                    <small *ngIf=\"trophyList[id] !== 6\">\r\n                        Win six trophies to see something special happen\r\n                    </small>\r\n                    <small *ngIf=\"trophyList[id] === 6\">\r\n                        Congratulations! Enjoy your shiny\r\n                        {{ pokemon.name | titlecase }}!\r\n                    </small>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <a routerLink=\"/\">\r\n        <fa-icon [icon]=\"faArrowAltCircleLeft\"></fa-icon>\r\n    </a>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _modules_main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/main.module */ "./src/app/modules/main.module.ts");
/* harmony import */ var _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/app-routing.module */ "./src/app/modules/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_NotFound_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/NotFound/not-found.component */ "./src/app/pages/NotFound/not-found.component.ts");
/* harmony import */ var _components_Header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Header/header.component */ "./src/app/components/Header/header.component.ts");
/* harmony import */ var _components_Footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Footer/footer.component */ "./src/app/components/Footer/footer.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _pages_NotFound_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
            _components_Header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _components_Footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _modules_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/Error/error.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/Error/error.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  height: 20rem;\n  font-size: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\ndiv fa-icon {\n  margin-left: 1rem;\n}\ndiv span {\n  font-size: 1.8rem;\n  margin-left: 2rem;\n}\ndiv span a {\n  color: #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9FcnJvci9DOlxcVXNlcnNcXGN0dzAwNzczXFxEb2N1bWVudHNcXG1ybWF1cmljaW9cXHBva2Vtb24tYmF0dGxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxFcnJvclxcZXJyb3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvRXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUo7QURFSTtFQUNJLGlCQUFBO0FDQVI7QURHSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNEUjtBREdRO0VBQ0ksY0FBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9FcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBoZWlnaHQ6IDIwcmVtO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgZmEtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZGl2IHtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmRpdiBmYS1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5kaXYgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cbmRpdiBzcGFuIGEge1xuICBjb2xvcjogI2ZmMDAwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/Error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/Error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let ErrorComponent = class ErrorComponent {
    constructor() {
        this.faExclamationTriangle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faExclamationTriangle"];
    }
    ngOnInit() { }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-error",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.scss */ "./src/app/components/Error/error.component.scss")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/components/Footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/Footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("footer {\n  width: 100%;\n  margin: 2.5rem 0;\n  display: flex;\n  justify-content: center;\n}\nfooter a {\n  text-decoration: none;\n  width: 15rem;\n  transition: 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nfooter a:hover {\n  transform: translateY(-2px);\n}\nfooter a fa-icon {\n  color: #fff;\n}\nfooter a span {\n  margin-left: 0.5rem;\n  font-size: 1.3rem;\n  font-weight: bold;\n  color: #fff;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Gb290ZXIvQzpcXFVzZXJzXFxjdHcwMDc3M1xcRG9jdW1lbnRzXFxtcm1hdXJpY2lvXFxwb2tlbW9uLWJhdHRsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcRm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvRm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtBQ0FKO0FERUk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRFI7QURHUTtFQUNJLDJCQUFBO0FDRFo7QURJUTtFQUNJLFdBQUE7QUNGWjtBREtRO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0FDSFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIuNXJlbSAwO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZhLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIuNXJlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmZvb3RlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogMTVyZW07XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuZm9vdGVyIGE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5mb290ZXIgYSBmYS1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG59XG5mb290ZXIgYSBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/Footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/Footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");



let FooterComponent = class FooterComponent {
    constructor() {
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"];
    }
    ngOnInit() { }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-footer",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/Footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/Header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/Header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  width: 100%;\n  margin: 2.5rem 0;\n  display: flex;\n  justify-content: center;\n}\nheader a {\n  color: #fff;\n  font-weight: bold;\n  font-size: 1.8rem;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);\n  text-decoration: none;\n  transition: 0.2s;\n  width: 22rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nheader a:hover {\n  transform: translateY(-3px);\n}\nheader a img {\n  width: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9IZWFkZXIvQzpcXFVzZXJzXFxjdHcwMDc3M1xcRG9jdW1lbnRzXFxtcm1hdXJpY2lvXFxwb2tlbW9uLWJhdHRsZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcSGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtBQ0FKO0FERUk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0RSO0FER1E7RUFDSSwyQkFBQTtBQ0RaO0FESVE7RUFDSSxZQUFBO0FDRloiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIuNXJlbSAwO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgd2lkdGg6IDIycmVtO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMi41cmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaGVhZGVyIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgd2lkdGg6IDIycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaGVhZGVyIGE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG59XG5oZWFkZXIgYSBpbWcge1xuICB3aWR0aDogMTVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/components/Header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/Header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/Header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/Loading/loading.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/Loading/loading.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  height: 20rem;\n  font-size: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\ndiv fa-icon {\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Mb2FkaW5nL0M6XFxVc2Vyc1xcY3R3MDA3NzNcXERvY3VtZW50c1xcbXJtYXVyaWNpb1xccG9rZW1vbi1iYXR0bGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXExvYWRpbmdcXGxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvTG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0FKO0FERUk7RUFDSSxpQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9Mb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgaGVpZ2h0OiAyMHJlbTtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGZhLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgfVxyXG59XHJcbiIsImRpdiB7XG4gIGhlaWdodDogMjByZW07XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5kaXYgZmEtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/Loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/Loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let LoadingComponent = class LoadingComponent {
    constructor() {
        this.faFan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFan"];
    }
    ngOnInit() { }
};
LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-loading",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/Loading/loading.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading.component.scss */ "./src/app/components/Loading/loading.component.scss")).default]
    })
], LoadingComponent);



/***/ }),

/***/ "./src/app/components/PokemonCard/pokemon-card.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/PokemonCard/pokemon-card.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("article {\n  height: 100%;\n}\narticle a {\n  text-decoration: none;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\narticle a h2 {\n  width: 100%;\n  padding: 1rem;\n  background: #ff0000;\n  color: #fff;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);\n  text-align: center;\n  font-size: 1.6rem;\n}\narticle a #pokemon {\n  width: 10rem;\n  height: 10rem;\n}\narticle a div span {\n  color: #000;\n  font-size: 1.1rem;\n  font-weight: bold;\n}\narticle a .trophy {\n  position: absolute;\n  width: 2rem;\n  height: 2rem;\n  right: 0.5rem;\n}\narticle a #trophy-1 {\n  bottom: 0.5rem;\n}\narticle a #trophy-2 {\n  bottom: 2.5rem;\n}\narticle a #trophy-3 {\n  bottom: 4.5rem;\n}\narticle a #trophy-4 {\n  bottom: 6.5rem;\n}\narticle a #trophy-5 {\n  bottom: 8.5rem;\n}\narticle a #trophy-6 {\n  bottom: 10.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Qb2tlbW9uQ2FyZC9DOlxcVXNlcnNcXGN0dzAwNzczXFxEb2N1bWVudHNcXG1ybWF1cmljaW9cXHBva2Vtb24tYmF0dGxlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxQb2tlbW9uQ2FyZFxccG9rZW1vbi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL1Bva2Vtb25DYXJkL3Bva2Vtb24tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjtBRENJO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0FSO0FERVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FaO0FER1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0RaO0FES1k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0hoQjtBRE9RO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNMWjtBRFFRO0VBQ0ksY0FBQTtBQ05aO0FEU1E7RUFDSSxjQUFBO0FDUFo7QURVUTtFQUNJLGNBQUE7QUNSWjtBRFdRO0VBQ0ksY0FBQTtBQ1RaO0FEWVE7RUFDSSxjQUFBO0FDVlo7QURhUTtFQUNJLGVBQUE7QUNYWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvUG9rZW1vbkNhcmQvcG9rZW1vbi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXJ0aWNsZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmMDAwMDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNwb2tlbW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50cm9waHkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdHJvcGh5LTEge1xyXG4gICAgICAgICAgICBib3R0b206IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0cm9waHktMiB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMi41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3Ryb3BoeS0zIHtcclxuICAgICAgICAgICAgYm90dG9tOiA0LjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdHJvcGh5LTQge1xyXG4gICAgICAgICAgICBib3R0b206IDYuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0cm9waHktNSB7XHJcbiAgICAgICAgICAgIGJvdHRvbTogOC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3Ryb3BoeS02IHtcclxuICAgICAgICAgICAgYm90dG9tOiAxMC41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJhcnRpY2xlIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuYXJ0aWNsZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbmFydGljbGUgYSBoMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjZmYwMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuYXJ0aWNsZSBhICNwb2tlbW9uIHtcbiAgd2lkdGg6IDEwcmVtO1xuICBoZWlnaHQ6IDEwcmVtO1xufVxuYXJ0aWNsZSBhIGRpdiBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmFydGljbGUgYSAudHJvcGh5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICByaWdodDogMC41cmVtO1xufVxuYXJ0aWNsZSBhICN0cm9waHktMSB7XG4gIGJvdHRvbTogMC41cmVtO1xufVxuYXJ0aWNsZSBhICN0cm9waHktMiB7XG4gIGJvdHRvbTogMi41cmVtO1xufVxuYXJ0aWNsZSBhICN0cm9waHktMyB7XG4gIGJvdHRvbTogNC41cmVtO1xufVxuYXJ0aWNsZSBhICN0cm9waHktNCB7XG4gIGJvdHRvbTogNi41cmVtO1xufVxuYXJ0aWNsZSBhICN0cm9waHktNSB7XG4gIGJvdHRvbTogOC41cmVtO1xufVxuYXJ0aWNsZSBhICN0cm9waHktNiB7XG4gIGJvdHRvbTogMTAuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/PokemonCard/pokemon-card.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/PokemonCard/pokemon-card.component.ts ***!
  \******************************************************************/
/*! exports provided: PokemonCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonCardComponent", function() { return PokemonCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PokemonCardComponent = class PokemonCardComponent {
    constructor() { }
    ngOnInit() {
        this.trophyArray = [...Array(this.trophyAmount).keys()].map((id) => id + 1);
        //console.log(`${this.pokemon.id} - ${this.trophyAmount}`);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PokemonCardComponent.prototype, "pokemon", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PokemonCardComponent.prototype, "trophyAmount", void 0);
PokemonCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-pokemon-card",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pokemon-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/PokemonCard/pokemon-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pokemon-card.component.scss */ "./src/app/components/PokemonCard/pokemon-card.component.scss")).default]
    })
], PokemonCardComponent);



/***/ }),

/***/ "./src/app/modules/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_Main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Main/main.component */ "./src/app/pages/Main/main.component.ts");
/* harmony import */ var _pages_Pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Pokemon/pokemon.component */ "./src/app/pages/Pokemon/pokemon.component.ts");
/* harmony import */ var _pages_Battle_battle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Battle/battle.component */ "./src/app/pages/Battle/battle.component.ts");
/* harmony import */ var _pages_NotFound_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/NotFound/not-found.component */ "./src/app/pages/NotFound/not-found.component.ts");







const routes = [
    {
        path: "",
        component: _pages_Main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    },
    {
        path: "pokemon/:id",
        component: _pages_Pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_4__["PokemonComponent"]
    },
    {
        path: "battle",
        component: _pages_Battle_battle_component__WEBPACK_IMPORTED_MODULE_5__["BattleComponent"]
    },
    {
        path: "404",
        component: _pages_NotFound_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]
    },
    {
        path: "**",
        redirectTo: "/404"
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: "enabled"
            })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/modules/battle.module.ts":
/*!******************************************!*\
  !*** ./src/app/modules/battle.module.ts ***!
  \******************************************/
/*! exports provided: BattleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleModule", function() { return BattleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/modules/app-routing.module.ts");
/* harmony import */ var _pages_Battle_battle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../pages/Battle/battle.component */ "./src/app/pages/Battle/battle.component.ts");





let BattleModule = class BattleModule {
};
BattleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_Battle_battle_component__WEBPACK_IMPORTED_MODULE_4__["BattleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
        exports: [_pages_Battle_battle_component__WEBPACK_IMPORTED_MODULE_4__["BattleComponent"]]
    })
], BattleModule);



/***/ }),

/***/ "./src/app/modules/main.module.ts":
/*!****************************************!*\
  !*** ./src/app/modules/main.module.ts ***!
  \****************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/modules/app-routing.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _battle_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./battle.module */ "./src/app/modules/battle.module.ts");
/* harmony import */ var _pages_Main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Main/main.component */ "./src/app/pages/Main/main.component.ts");
/* harmony import */ var _pages_Pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Pokemon/pokemon.component */ "./src/app/pages/Pokemon/pokemon.component.ts");
/* harmony import */ var _components_PokemonCard_pokemon_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PokemonCard/pokemon-card.component */ "./src/app/components/PokemonCard/pokemon-card.component.ts");
/* harmony import */ var _components_Error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/Error/error.component */ "./src/app/components/Error/error.component.ts");
/* harmony import */ var _components_Loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../components/Loading/loading.component */ "./src/app/components/Loading/loading.component.ts");











let MainModule = class MainModule {
};
MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_Main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
            _pages_Pokemon_pokemon_component__WEBPACK_IMPORTED_MODULE_7__["PokemonComponent"],
            _components_PokemonCard_pokemon_card_component__WEBPACK_IMPORTED_MODULE_8__["PokemonCardComponent"],
            _components_Error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
            _components_Loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _battle_module__WEBPACK_IMPORTED_MODULE_5__["BattleModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]],
        exports: [_pages_Main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]]
    })
], MainModule);



/***/ }),

/***/ "./src/app/pages/Battle/battle.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/Battle/battle.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nsection > div {\n  background: #fff;\n  border-radius: 8px;\n  min-width: 650px;\n  width: 90%;\n  padding: 2rem;\n  margin: 1rem;\n}\nsection > div #mobile-warning {\n  display: none;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  background: rgba(255, 0, 0, 0.1);\n  border-radius: 0.4rem;\n}\nsection > div #mobile-warning p {\n  text-align: center;\n}\n@media (max-width: 450px) {\n  section > div #mobile-warning {\n    display: block;\n  }\n}\nsection > div .battle-background {\n  position: relative;\n}\nsection > div .battle-background #bg {\n  width: 100%;\n  background: #000;\n  border: 0.3rem #000 solid;\n  border-radius: 0.5rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nsection > div .battle-background #player-info {\n  position: absolute;\n  bottom: 15%;\n  right: 15%;\n}\nsection > div .battle-background #enemy-info {\n  position: absolute;\n  top: 15%;\n  left: 15%;\n}\nsection > div .battle-background #player-info,\nsection > div .battle-background #enemy-info {\n  background: #fff;\n  width: 20rem;\n  padding: 0.5rem 1rem;\n  font-size: 1.5rem;\n  border: 1px #000 solid;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n}\nsection > div .battle-background #player-info .hp-bar,\nsection > div .battle-background #enemy-info .hp-bar {\n  height: 1rem;\n  width: 100%;\n  margin: 0.5rem 0 0.25rem;\n  border: 1px #000 solid;\n  border-radius: 5px;\n  background-color: #eeeeee;\n}\nsection > div .battle-background #player-info .hp-bar div,\nsection > div .battle-background #enemy-info .hp-bar div {\n  height: 100%;\n  border-radius: 5px;\n  border-right: 1px solid #929292;\n  border-left: 1px solid #929292;\n}\nsection > div .battle-background #player-info small,\nsection > div .battle-background #enemy-info small {\n  text-align: end;\n}\nsection > div .battle-background #player-sprite {\n  position: absolute;\n  left: 23%;\n  bottom: 16%;\n  width: 13rem;\n  height: 13rem;\n}\nsection > div .battle-background #enemy-sprite {\n  position: absolute;\n  right: 23%;\n  top: 24%;\n  width: 13rem;\n  height: 13rem;\n}\nsection > div .battle-background #player-damage-taken {\n  position: absolute;\n  left: 24%;\n  bottom: 49%;\n}\nsection > div .battle-background #enemy-damage-taken {\n  position: absolute;\n  left: 61%;\n  top: 15%;\n}\nsection > div .battle-background #player-damage-taken,\nsection > div .battle-background #enemy-damage-taken {\n  position: absolute;\n  z-index: 1;\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: #fff;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n}\nsection > div .battle-background #player-damage-taken div:first-child,\nsection > div .battle-background #enemy-damage-taken div:first-child {\n  font-size: 1.6rem;\n  margin-bottom: 0.1rem;\n}\n@media (max-width: 1010px) {\n  section > div .battle-background #player-sprite,\nsection > div .battle-background #enemy-sprite {\n    width: 12rem;\n    height: 12rem;\n  }\n  section > div .battle-background #player-info,\nsection > div .battle-background #enemy-info {\n    width: 18rem;\n    font-size: 1.4rem;\n  }\n  section > div .battle-background #player-damage-taken {\n    position: absolute;\n    left: 23%;\n    bottom: 47%;\n  }\n}\n@media (max-width: 940px) {\n  section > div .battle-background #player-sprite,\nsection > div .battle-background #enemy-sprite {\n    width: 11rem;\n    height: 11rem;\n  }\n  section > div .battle-background #player-info,\nsection > div .battle-background #enemy-info {\n    width: 16rem;\n  }\n}\n@media (max-width: 870px) {\n  section > div .battle-background #player-sprite,\nsection > div .battle-background #enemy-sprite {\n    width: 10rem;\n    height: 10rem;\n  }\n  section > div .battle-background #player-info,\nsection > div .battle-background #enemy-info {\n    width: 14rem;\n    font-size: 1.3rem;\n  }\n  section > div .battle-background #enemy-damage-taken {\n    position: absolute;\n    left: 61%;\n    top: 13%;\n  }\n  section > div .battle-background #player-damage-taken,\nsection > div .battle-background #enemy-damage-taken {\n    font-size: 1.2rem;\n  }\n  section > div .battle-background #player-damage-taken div:first-child,\nsection > div .battle-background #enemy-damage-taken div:first-child {\n    font-size: 1.4rem;\n  }\n}\nsection > div .battle-background #modal-winner {\n  position: absolute;\n  top: calc(50% - 12rem);\n  left: calc(50% - 12rem);\n  height: 24rem;\n  width: 24rem;\n}\nsection > div .battle-background #modal-winner #unlocked-shiny {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\nsection > div .battle-background #modal-winner #unlocked-shiny > div {\n  font-size: 1.2rem;\n  margin: 0.5rem 0 1rem;\n}\nsection > div .battle-background #modal-loser {\n  position: absolute;\n  top: calc(50% - 10rem);\n  left: calc(50% - 12rem);\n  height: 20rem;\n  width: 24rem;\n}\nsection > div .battle-background #modal-loser > div > div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nsection > div .battle-background #modal-loser > div > div a {\n  margin-top: 0.7rem;\n}\nsection > div .battle-background .modal {\n  visibility: hidden;\n  opacity: 0;\n  z-index: 2;\n  background: white;\n  padding: 1rem;\n  border: 0.3rem #000 solid;\n  border-radius: 8px;\n}\nsection > div .battle-background .modal > div {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\nsection > div .battle-background .modal > div strong {\n  font-size: 2.6rem;\n}\nsection > div .battle-background .modal > div > div #modal-trophy {\n  width: 9rem;\n  height: 9rem;\n}\nsection > div .battle-background .modal > div a {\n  color: #ff0000;\n  text-decoration: none;\n  padding: 0.25rem;\n  font-size: 1.3rem;\n  border-radius: 8px;\n}\nsection > div .battle-background .modal > div a:hover {\n  transform: translateY(-2px);\n  background-color: rgba(255, 0, 0, 0.1);\n}\nsection > div .battle-background .modal > div a span {\n  padding: 0.5rem;\n}\nsection > div .battle-background .sprite-attack {\n  -webkit-animation: attack 1s 2 alternate;\n          animation: attack 1s 2 alternate;\n}\n@-webkit-keyframes attack {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-1rem) scale(1.1);\n  }\n}\n@keyframes attack {\n  0% {\n    transform: translateY(0) scale(1);\n  }\n  100% {\n    transform: translateY(-1rem) scale(1.1);\n  }\n}\nsection > div .battle-background .damaged {\n  background: #ffd6d6 !important;\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  perspective: 1000px;\n}\n@-webkit-keyframes shake {\n  10%, 90% {\n    transform: translate3d(-0.5px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(0.5px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-0.5px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(0.5px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%, 90% {\n    transform: translate3d(-0.5px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(0.5px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-0.5px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(0.5px, 0, 0);\n  }\n}\nsection > div .battle-background .hidden {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 2s, opacity 2s linear;\n}\nsection > div .battle-background .visible {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 2s linear;\n}\nsection > div .battle-background .darken {\n  -webkit-filter: brightness(70%);\n          filter: brightness(70%);\n  transition: -webkit-filter 2s;\n  transition: filter 2s;\n  transition: filter 2s, -webkit-filter 2s;\n}\nsection > div .battle-menu {\n  border: 0.5rem #000 double;\n  border-radius: 0.5rem;\n  height: 8rem;\n  font-size: 1.8rem;\n}\n@media (max-width: 870px) {\n  section > div .battle-menu {\n    font-size: 1.6rem;\n  }\n}\nsection > div .battle-menu .battle-info {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nsection > div .battle-menu .battle-options {\n  display: flex;\n  height: 100%;\n}\nsection > div .battle-menu .battle-options .battle-left-options,\nsection > div .battle-menu .battle-options .battle-right-options {\n  flex: 2;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-evenly;\n}\nsection > div .battle-menu .battle-options .battle-left-options button,\nsection > div .battle-menu .battle-options .battle-right-options button {\n  cursor: pointer;\n  font-size: 1.8rem;\n  width: 35%;\n  background: none;\n  border: none;\n  text-align: start;\n  outline-color: #ff0000;\n}\n@media (max-width: 870px) {\n  section > div .battle-menu .battle-options .battle-left-options button,\nsection > div .battle-menu .battle-options .battle-right-options button {\n    font-size: 1.6rem;\n  }\n}\nsection > div .battle-menu .battle-options .battle-left-options button:hover,\nsection > div .battle-menu .battle-options .battle-right-options button:hover {\n  transform: translateY(-1px);\n}\nsection > div .battle-menu .battle-options .battle-left-options {\n  flex: 3;\n}\nsection > div .battle-menu .battle-options .battle-left-options::after {\n  position: absolute;\n  content: \"\";\n  height: 90%;\n  width: 0.2rem;\n  left: 100%;\n  top: 5%;\n  background-color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQmF0dGxlL0M6XFxVc2Vyc1xcY3R3MDA3NzNcXERvY3VtZW50c1xcbXJtYXVyaWNpb1xccG9rZW1vbi1iYXR0bGUvc3JjXFxhcHBcXHBhZ2VzXFxCYXR0bGVcXGJhdHRsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvQmF0dGxlL2JhdHRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NSO0FEQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtBQ0NaO0FEQ1k7RUFDSSxrQkFBQTtBQ0NoQjtBREVZO0VBWEo7SUFZUSxjQUFBO0VDQ2Q7QUFDRjtBREdRO0VBQ0ksa0JBQUE7QUNEWjtBRElZO0VBQ0ksV0FBQTtFQUVBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDSGhCO0FET1k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDTGhCO0FEU1k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDUGhCO0FEVVk7O0VBRUksZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUVBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQ1ZoQjtBRFlnQjs7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDVHBCO0FEV29COztFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7QUNSeEI7QURZZ0I7O0VBQ0ksZUFBQTtBQ1RwQjtBRGNZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDWmhCO0FEZ0JZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDZGhCO0FEa0JZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ2hCaEI7QURvQlk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDbEJoQjtBRHFCWTs7RUFFSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlFQUFBO0FDbkJoQjtBRHNCZ0I7O0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtBQ25CcEI7QUR3Qlk7RUFDSTs7SUFFSSxZQUFBO0lBQ0EsYUFBQTtFQ3RCbEI7RUR5QmM7O0lBRUksWUFBQTtJQUNBLGlCQUFBO0VDdkJsQjtFRDBCYztJQUNJLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUN4QmxCO0FBQ0Y7QUQyQlk7RUFDSTs7SUFFSSxZQUFBO0lBQ0EsYUFBQTtFQ3pCbEI7RUQ0QmM7O0lBRUksWUFBQTtFQzFCbEI7QUFDRjtBRDZCWTtFQUNJOztJQUVJLFlBQUE7SUFDQSxhQUFBO0VDM0JsQjtFRDhCYzs7SUFFSSxZQUFBO0lBQ0EsaUJBQUE7RUM1QmxCO0VEK0JjO0lBQ0ksa0JBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtFQzdCbEI7RURnQ2M7O0lBRUksaUJBQUE7RUM5QmxCO0VEZ0NrQjs7SUFDSSxpQkFBQTtFQzdCdEI7QUFDRjtBRGlDWTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0FDaENoQjtBRGtDZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ2hDcEI7QURrQ29CO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtBQ2hDeEI7QURxQ1k7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxhQUFBO0VBQ0EsWUFBQTtBQ3BDaEI7QUR1Q29CO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNyQ3hCO0FEdUN3QjtFQUNJLGtCQUFBO0FDckM1QjtBRDRDWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDMUNoQjtBRDRDZ0I7RUFDSSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQzNDcEI7QUQ2Q29CO0VBQ0ksaUJBQUE7QUMzQ3hCO0FEK0N3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDN0M1QjtBRGlEb0I7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUMvQ3hCO0FEaUR3QjtFQUNJLDJCQUFBO0VBQ0Esc0NBQUE7QUMvQzVCO0FEa0R3QjtFQUNJLGVBQUE7QUNoRDVCO0FEdURZO0VBQ0ksd0NBQUE7VUFBQSxnQ0FBQTtBQ3JEaEI7QUR3RFk7RUFDSTtJQUNJLGlDQUFBO0VDdERsQjtFRHdEYztJQUNJLHVDQUFBO0VDdERsQjtBQUNGO0FEZ0RZO0VBQ0k7SUFDSSxpQ0FBQTtFQ3REbEI7RUR3RGM7SUFDSSx1Q0FBQTtFQ3REbEI7QUFDRjtBRDBEWTtFQUNJLDhCQUFBO0VBQ0Esd0VBQUE7VUFBQSxnRUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FDeERoQjtBRDJEWTtFQUNJO0lBRUksb0NBQUE7RUMxRGxCO0VENkRjO0lBRUksbUNBQUE7RUM1RGxCO0VEK0RjO0lBR0ksb0NBQUE7RUMvRGxCO0VEa0VjO0lBRUksbUNBQUE7RUNqRWxCO0FBQ0Y7QUQ2Q1k7RUFDSTtJQUVJLG9DQUFBO0VDMURsQjtFRDZEYztJQUVJLG1DQUFBO0VDNURsQjtFRCtEYztJQUdJLG9DQUFBO0VDL0RsQjtFRGtFYztJQUVJLG1DQUFBO0VDakVsQjtBQUNGO0FEcUVZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsK0NBQUE7QUNuRWhCO0FEdUVZO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUNyRWhCO0FEd0VZO0VBQ0ksK0JBQUE7VUFBQSx1QkFBQTtFQUNBLDZCQUFBO0VBQUEscUJBQUE7RUFBQSx3Q0FBQTtBQ3RFaEI7QUQyRVE7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDekVaO0FEMkVZO0VBTko7SUFPUSxpQkFBQTtFQ3hFZDtBQUNGO0FEMkVZO0VBQ0ksWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDMUVoQjtBRDhFWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDNUVoQjtBRCtFZ0I7O0VBRUksT0FBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDOUVwQjtBRGdGb0I7O0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUM3RXhCO0FEK0V3QjtFQVRKOztJQVVRLGlCQUFBO0VDM0UxQjtBQUNGO0FENkV3Qjs7RUFDSSwyQkFBQTtBQzFFNUI7QUQrRWdCO0VBQ0ksT0FBQTtBQzdFcEI7QUQrRW9CO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0FDN0V4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL0JhdHRsZS9iYXR0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2NTBweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG5cclxuICAgICAgICAjbW9iaWxlLXdhcm5pbmcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJBVFRMRSBTQ1JFRU4gTEFZT1VUXHJcbiAgICAgICAgLmJhdHRsZS1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZCBpbWFnZVxyXG4gICAgICAgICAgICAjYmcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMC4zcmVtICMwMDAgc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gcGxheWVyIGluZm9ybWF0aW9uIG9uIHNjcmVlblxyXG4gICAgICAgICAgICAjcGxheWVyLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNSU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTUlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBlbmVteSBpbmZvcm1hdGlvbiBvbiBzY3JlZW5cclxuICAgICAgICAgICAgI2VuZW15LWluZm8ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNSU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNSU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNwbGF5ZXItaW5mbyxcclxuICAgICAgICAgICAgI2VuZW15LWluZm8ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggIzAwMCBzb2xpZDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgLmhwLWJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDAgMC4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCAjMDAwIHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDE0NiwgMTQ2LCAxNDYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxNDYsIDE0NiwgMTQ2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gcGxheWVyIHBva2Vtb24gb24gc2NyZWVuXHJcbiAgICAgICAgICAgICNwbGF5ZXItc3ByaXRlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDIzJTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMTYlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzcmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxM3JlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZW5lbXkgcG9rZW1vbiBvbiBzY3JlZW5cclxuICAgICAgICAgICAgI2VuZW15LXNwcml0ZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMjMlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyNCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTNyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBwbGF5ZXIgZGFtYWdlIHRha2VuIHZhbHVlIG9uIHNjcmVlblxyXG4gICAgICAgICAgICAjcGxheWVyLWRhbWFnZS10YWtlbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNCU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDQ5JTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZW5lbXkgZGFtYWdlIHRha2VuIHZhbHVlIG9uIHNjcmVlblxyXG4gICAgICAgICAgICAjZW5lbXktZGFtYWdlLXRha2VuIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDYxJTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTUlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjcGxheWVyLWRhbWFnZS10YWtlbixcclxuICAgICAgICAgICAgI2VuZW15LWRhbWFnZS10YWtlbiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgLTFweCBibGFjaztcclxuXHJcbiAgICAgICAgICAgICAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gbWVkaWEgcXVlcmllcyBmb3Igc3ByaXRlcywgaW5mbyBhbmQgZGFtYWdlIHZhbHVlXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDEwcHgpIHtcclxuICAgICAgICAgICAgICAgICNwbGF5ZXItc3ByaXRlLFxyXG4gICAgICAgICAgICAgICAgI2VuZW15LXNwcml0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI3BsYXllci1pbmZvLFxyXG4gICAgICAgICAgICAgICAgI2VuZW15LWluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjcGxheWVyLWRhbWFnZS10YWtlbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIzJTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDQ3JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAjcGxheWVyLXNwcml0ZSxcclxuICAgICAgICAgICAgICAgICNlbmVteS1zcHJpdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNwbGF5ZXItaW5mbyxcclxuICAgICAgICAgICAgICAgICNlbmVteS1pbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xyXG4gICAgICAgICAgICAgICAgI3BsYXllci1zcHJpdGUsXHJcbiAgICAgICAgICAgICAgICAjZW5lbXktc3ByaXRlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjcGxheWVyLWluZm8sXHJcbiAgICAgICAgICAgICAgICAjZW5lbXktaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICNlbmVteS1kYW1hZ2UtdGFrZW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA2MSU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMyU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgI3BsYXllci1kYW1hZ2UtdGFrZW4sXHJcbiAgICAgICAgICAgICAgICAjZW5lbXktZGFtYWdlLXRha2VuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbW9kYWwtd2lubmVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAxMnJlbSk7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDEycmVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICN1bmxvY2tlZC1zaGlueSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNtb2RhbC1sb3NlciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMTByZW0pO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMnJlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG1vZGFsXHJcbiAgICAgICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMC4zcmVtICMwMDAgc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAjbW9kYWwtdHJvcGh5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhdHRhY2sgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5zcHJpdGUtYXR0YWNrIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYXR0YWNrIDFzIDIgYWx0ZXJuYXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGF0dGFjayB7XHJcbiAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcmVtKSBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBkYW1hZ2UgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIC5kYW1hZ2VkIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDIxNCwgMjE0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzaGFrZSAwLjgycyBjdWJpYy1iZXppZXIoMC4zNiwgMC4wNywgMC4xOSwgMC45NykgYm90aDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAgICAgICAgICAgICAgIDEwJSxcclxuICAgICAgICAgICAgICAgIDkwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDIwJSxcclxuICAgICAgICAgICAgICAgIDgwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLjVweCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgMzAlLFxyXG4gICAgICAgICAgICAgICAgNTAlLFxyXG4gICAgICAgICAgICAgICAgNzAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgNDAlLFxyXG4gICAgICAgICAgICAgICAgNjAlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAuNXB4LCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaGlkZVxyXG4gICAgICAgICAgICAuaGlkZGVuIHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIDJzLCBvcGFjaXR5IDJzIGxpbmVhcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc2hvd1xyXG4gICAgICAgICAgICAudmlzaWJsZSB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMnMgbGluZWFyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGFya2VuIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDJzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCQVRUTEUgQk9UVE9NIE1FTlVcclxuICAgICAgICAuYmF0dGxlLW1lbnUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuNXJlbSAjMDAwIGRvdWJsZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaW5mb3JtYXRpdmUgdGV4dFxyXG4gICAgICAgICAgICAuYmF0dGxlLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGJhdHRsZSBidXR0b25zXHJcbiAgICAgICAgICAgIC5iYXR0bGUtb3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGJhdHRsZSBidXR0b24gc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgLmJhdHRsZS1sZWZ0LW9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAuYmF0dGxlLXJpZ2h0LW9wdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lLWNvbG9yOiAjZmYwMDAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJhdHRsZS1sZWZ0LW9wdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDAuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwic2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5zZWN0aW9uID4gZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtaW4td2lkdGg6IDY1MHB4O1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXJnaW46IDFyZW07XG59XG5zZWN0aW9uID4gZGl2ICNtb2JpbGUtd2FybmluZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG59XG5zZWN0aW9uID4gZGl2ICNtb2JpbGUtd2FybmluZyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIHNlY3Rpb24gPiBkaXYgI21vYmlsZS13YXJuaW5nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtYmFja2dyb3VuZCAjYmcge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyOiAwLjNyZW0gIzAwMCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kICNwbGF5ZXItaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNSU7XG4gIHJpZ2h0OiAxNSU7XG59XG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtYmFja2dyb3VuZCAjZW5lbXktaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7XG4gIGxlZnQ6IDE1JTtcbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kICNwbGF5ZXItaW5mbyxcbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kICNlbmVteS1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlcjogMXB4ICMwMDAgc29saWQ7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kICNwbGF5ZXItaW5mbyAuaHAtYmFyLFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LWluZm8gLmhwLWJhciB7XG4gIGhlaWdodDogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC41cmVtIDAgMC4yNXJlbTtcbiAgYm9yZGVyOiAxcHggIzAwMCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI3BsYXllci1pbmZvIC5ocC1iYXIgZGl2LFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LWluZm8gLmhwLWJhciBkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzkyOTI5MjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOTI5MjkyO1xufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI3BsYXllci1pbmZvIHNtYWxsLFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LWluZm8gc21hbGwge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtYmFja2dyb3VuZCAjcGxheWVyLXNwcml0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjMlO1xuICBib3R0b206IDE2JTtcbiAgd2lkdGg6IDEzcmVtO1xuICBoZWlnaHQ6IDEzcmVtO1xufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LXNwcml0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIzJTtcbiAgdG9wOiAyNCU7XG4gIHdpZHRoOiAxM3JlbTtcbiAgaGVpZ2h0OiAxM3JlbTtcbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kICNwbGF5ZXItZGFtYWdlLXRha2VuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNCU7XG4gIGJvdHRvbTogNDklO1xufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LWRhbWFnZS10YWtlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjElO1xuICB0b3A6IDE1JTtcbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kICNwbGF5ZXItZGFtYWdlLXRha2VuLFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LWRhbWFnZS10YWtlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XG59XG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtYmFja2dyb3VuZCAjcGxheWVyLWRhbWFnZS10YWtlbiBkaXY6Zmlyc3QtY2hpbGQsXG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtYmFja2dyb3VuZCAjZW5lbXktZGFtYWdlLXRha2VuIGRpdjpmaXJzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjFyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAxMHB4KSB7XG4gIHNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kICNwbGF5ZXItc3ByaXRlLFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LXNwcml0ZSB7XG4gICAgd2lkdGg6IDEycmVtO1xuICAgIGhlaWdodDogMTJyZW07XG4gIH1cbiAgc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI3BsYXllci1pbmZvLFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LWluZm8ge1xuICAgIHdpZHRoOiAxOHJlbTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICBzZWN0aW9uID4gZGl2IC5iYXR0bGUtYmFja2dyb3VuZCAjcGxheWVyLWRhbWFnZS10YWtlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIzJTtcbiAgICBib3R0b206IDQ3JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk0MHB4KSB7XG4gIHNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kICNwbGF5ZXItc3ByaXRlLFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LXNwcml0ZSB7XG4gICAgd2lkdGg6IDExcmVtO1xuICAgIGhlaWdodDogMTFyZW07XG4gIH1cbiAgc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI3BsYXllci1pbmZvLFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LWluZm8ge1xuICAgIHdpZHRoOiAxNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XG4gIHNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kICNwbGF5ZXItc3ByaXRlLFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LXNwcml0ZSB7XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIGhlaWdodDogMTByZW07XG4gIH1cbiAgc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI3BsYXllci1pbmZvLFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LWluZm8ge1xuICAgIHdpZHRoOiAxNHJlbTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgfVxuICBzZWN0aW9uID4gZGl2IC5iYXR0bGUtYmFja2dyb3VuZCAjZW5lbXktZGFtYWdlLXRha2VuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNjElO1xuICAgIHRvcDogMTMlO1xuICB9XG4gIHNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kICNwbGF5ZXItZGFtYWdlLXRha2VuLFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LWRhbWFnZS10YWtlbiB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbiAgc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI3BsYXllci1kYW1hZ2UtdGFrZW4gZGl2OmZpcnN0LWNoaWxkLFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI2VuZW15LWRhbWFnZS10YWtlbiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG59XG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtYmFja2dyb3VuZCAjbW9kYWwtd2lubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMTJyZW0pO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDEycmVtKTtcbiAgaGVpZ2h0OiAyNHJlbTtcbiAgd2lkdGg6IDI0cmVtO1xufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI21vZGFsLXdpbm5lciAjdW5sb2NrZWQtc2hpbnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI21vZGFsLXdpbm5lciAjdW5sb2NrZWQtc2hpbnkgPiBkaXYge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luOiAwLjVyZW0gMCAxcmVtO1xufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI21vZGFsLWxvc2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gMTByZW0pO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDEycmVtKTtcbiAgaGVpZ2h0OiAyMHJlbTtcbiAgd2lkdGg6IDI0cmVtO1xufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgI21vZGFsLWxvc2VyID4gZGl2ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kICNtb2RhbC1sb3NlciA+IGRpdiA+IGRpdiBhIHtcbiAgbWFyZ2luLXRvcDogMC43cmVtO1xufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgLm1vZGFsIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAwLjNyZW0gIzAwMCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgLm1vZGFsID4gZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kIC5tb2RhbCA+IGRpdiBzdHJvbmcge1xuICBmb250LXNpemU6IDIuNnJlbTtcbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kIC5tb2RhbCA+IGRpdiA+IGRpdiAjbW9kYWwtdHJvcGh5IHtcbiAgd2lkdGg6IDlyZW07XG4gIGhlaWdodDogOXJlbTtcbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kIC5tb2RhbCA+IGRpdiBhIHtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kIC5tb2RhbCA+IGRpdiBhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kIC5tb2RhbCA+IGRpdiBhIHNwYW4ge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtYmFja2dyb3VuZCAuc3ByaXRlLWF0dGFjayB7XG4gIGFuaW1hdGlvbjogYXR0YWNrIDFzIDIgYWx0ZXJuYXRlO1xufVxuQGtleWZyYW1lcyBhdHRhY2sge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXJlbSkgc2NhbGUoMS4xKTtcbiAgfVxufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLWJhY2tncm91bmQgLmRhbWFnZWQge1xuICBiYWNrZ3JvdW5kOiAjZmZkNmQ2ICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbjogc2hha2UgMC44MnMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApO1xuICB9XG4gIDIwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAuNXB4LCAwLCAwKTtcbiAgfVxuICAzMCUsIDUwJSwgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCk7XG4gIH1cbiAgNDAlLCA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMC41cHgsIDAsIDApO1xuICB9XG59XG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtYmFja2dyb3VuZCAuaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIDJzLCBvcGFjaXR5IDJzIGxpbmVhcjtcbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1iYWNrZ3JvdW5kIC52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAycyBsaW5lYXI7XG59XG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtYmFja2dyb3VuZCAuZGFya2VuIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDcwJSk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAycztcbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1tZW51IHtcbiAgYm9yZGVyOiAwLjVyZW0gIzAwMCBkb3VibGU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgaGVpZ2h0OiA4cmVtO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xuICBzZWN0aW9uID4gZGl2IC5iYXR0bGUtbWVudSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gIH1cbn1cbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1tZW51IC5iYXR0bGUtaW5mbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtbWVudSAuYmF0dGxlLW9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtbWVudSAuYmF0dGxlLW9wdGlvbnMgLmJhdHRsZS1sZWZ0LW9wdGlvbnMsXG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtbWVudSAuYmF0dGxlLW9wdGlvbnMgLmJhdHRsZS1yaWdodC1vcHRpb25zIHtcbiAgZmxleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLW1lbnUgLmJhdHRsZS1vcHRpb25zIC5iYXR0bGUtbGVmdC1vcHRpb25zIGJ1dHRvbixcbnNlY3Rpb24gPiBkaXYgLmJhdHRsZS1tZW51IC5iYXR0bGUtb3B0aW9ucyAuYmF0dGxlLXJpZ2h0LW9wdGlvbnMgYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgd2lkdGg6IDM1JTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgb3V0bGluZS1jb2xvcjogI2ZmMDAwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xuICBzZWN0aW9uID4gZGl2IC5iYXR0bGUtbWVudSAuYmF0dGxlLW9wdGlvbnMgLmJhdHRsZS1sZWZ0LW9wdGlvbnMgYnV0dG9uLFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLW1lbnUgLmJhdHRsZS1vcHRpb25zIC5iYXR0bGUtcmlnaHQtb3B0aW9ucyBidXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG59XG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtbWVudSAuYmF0dGxlLW9wdGlvbnMgLmJhdHRsZS1sZWZ0LW9wdGlvbnMgYnV0dG9uOmhvdmVyLFxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLW1lbnUgLmJhdHRsZS1vcHRpb25zIC5iYXR0bGUtcmlnaHQtb3B0aW9ucyBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5zZWN0aW9uID4gZGl2IC5iYXR0bGUtbWVudSAuYmF0dGxlLW9wdGlvbnMgLmJhdHRsZS1sZWZ0LW9wdGlvbnMge1xuICBmbGV4OiAzO1xufVxuc2VjdGlvbiA+IGRpdiAuYmF0dGxlLW1lbnUgLmJhdHRsZS1vcHRpb25zIC5iYXR0bGUtbGVmdC1vcHRpb25zOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAwLjJyZW07XG4gIGxlZnQ6IDEwMCU7XG4gIHRvcDogNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/Battle/battle.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/Battle/battle.component.ts ***!
  \**************************************************/
/*! exports provided: BattleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleComponent", function() { return BattleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_trophy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/trophy.service */ "./src/app/services/trophy.service.ts");
/* harmony import */ var src_app_utils_typeEffectiveness__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/typeEffectiveness */ "./src/app/utils/typeEffectiveness.ts");




//import { mockPokemon, mockPokemon2 } from "./mockPokemon";

let BattleComponent = class BattleComponent {
    constructor(router, trophyService) {
        this.router = router;
        this.trophyService = trophyService;
        this.waitTime = 2500;
        this.playerTrophyAmount = history.state.playerTrophyAmount;
        this.enemyTrophyAmount = history.state.enemyTrophyAmount;
        this.battlePhases = [
            1,
            2,
            3,
            4 // ended
        ];
        this.battleOptions = [
            { id: 1, name: "Fight" },
            { id: 2, name: "Bag" },
            { id: 3, name: "Pokémon" },
            { id: 4, name: "Run" }
        ];
        this.colors = {
            yellow: "#cccf00",
            green: "#35aa31",
            red: "#d95f5f"
        };
    }
    // ---------------------------- //
    // INITIAL CONFIG FUNCTIONS     //
    // ---------------------------- //
    ngOnInit() {
        // get data passed as state on route redirection
        this.getFightersData();
    }
    getFightersData() {
        if (history.state.hasOwnProperty("enemyPokemon") &&
            history.state.hasOwnProperty("playerPokemon")) {
            this.playerPokemon = this.formatPokemonData(history.state.playerPokemon);
            this.enemyPokemon = this.formatPokemonData(history.state.enemyPokemon);
            // set initial battle phase and initial text
            this.setInitialState();
            // start battle music
            this.playAudio();
        }
        else {
            this.router.navigateByUrl("/404");
            // test:
            //this.playerPokemon = this.formatPokemonData(mockPokemon);
            //this.enemyPokemon = this.formatPokemonData(mockPokemon2);
            //this.setInitialState();
        }
    }
    setInitialState() {
        this.battlePhase = 1;
        this.battleInfoText = this.getBattleInfoText(1, this.playerPokemon.name);
    }
    ngOnDestroy() {
        if (this.battleMusic) {
            this.battleMusic.pause();
        }
    }
    // ---------------------------- //
    // BATTLE FUNCTIONS             //
    // ---------------------------- //
    handleMoveSelect(playerMove) {
        let enemyMove = this.handleEnemyMove();
        // start battle after player and enemy selected their moves
        this.enterBattlePhase(playerMove, enemyMove);
    }
    handleEnemyMove() {
        let randomMove = this.enemyPokemon.moves[Math.floor(Math.random() * this.enemyPokemon.moves.length)];
        return randomMove;
    }
    enterBattlePhase(playerMove, enemyMove) {
        let firstAttacker, firstAttackerMove, secondAttacker, secondAttackerMove;
        this.battlePhase = 3;
        // decide who attacks first based on speed stat
        if (this.playerPokemon.stats.speed >= this.enemyPokemon.stats.speed) {
            firstAttacker = this.playerPokemon;
            firstAttackerMove = playerMove;
            secondAttacker = this.enemyPokemon;
            secondAttackerMove = enemyMove;
        }
        else {
            firstAttacker = this.enemyPokemon;
            firstAttackerMove = enemyMove;
            secondAttacker = this.playerPokemon;
            secondAttackerMove = playerMove;
        }
        // first attack!
        this.startAttack(firstAttacker, firstAttackerMove, secondAttacker);
        // second attack!
        setTimeout(() => {
            firstAttacker.status.startAttack = false;
            if (secondAttacker.status.isAlive) {
                this.startAttack(secondAttacker, secondAttackerMove, firstAttacker);
                setTimeout(() => {
                    secondAttacker.status.startAttack = false;
                    if (firstAttacker.status.isAlive) {
                        this.setInitialState();
                    }
                }, this.waitTime);
            }
        }, this.waitTime);
    }
    startAttack(attacker, attackerMove, defender) {
        attacker.status.startAttack = true;
        // check selected move effectiveness on target
        let attackerMoveEffectiveness = this.calculateTypeEffectiveness(attackerMove, defender);
        // display on screen menu the attack text
        this.battleInfoText = this.getBattleInfoText(2, attacker.name, attackerMove.name, attackerMoveEffectiveness);
        // display on screen the move effectiveness
        attacker.status.currentAttackEffectiveness = this.getBattleInfoText(0, null, null, attackerMoveEffectiveness);
        // calculate damage dealt on target
        attacker.status.damageDealt = this.calculateDamage(attacker, defender, attackerMove);
        // apply damage on target's hp
        let appliedDamage = defender.status.currentHp - attacker.status.damageDealt;
        if (appliedDamage <= 0) {
            defender.status.currentHp = 0;
            defender.status.isAlive = false;
            setTimeout(() => {
                this.handleBattleEnd(attacker);
            }, this.waitTime);
        }
        else {
            defender.status.currentHp = appliedDamage;
        }
        // get damage percentage to display on screen
        this.calculatePercentage(defender);
    }
    handleBattleEnd(winner) {
        this.battleInfoText = this.getBattleInfoText(0);
        this.battlePhase = 4;
        if (winner === this.playerPokemon) {
            this.trophyService.addTrophyById(winner.id);
        }
    }
    // ---------------------------- //
    // BATTLE CALCULATION FUNCTIONS //
    // ---------------------------- //
    calculatePercentage(pokemon) {
        let remainingHp = (100 * pokemon.status.currentHp) / pokemon.stats.hp;
        if (remainingHp < 50 && remainingHp > 20) {
            pokemon.status.currentHpColor = this.colors.yellow;
        }
        if (remainingHp < 20) {
            pokemon.status.currentHpColor = this.colors.red;
        }
        pokemon.status.currentHpPercentage = remainingHp;
    }
    calculateDamage(attacker, defender, move) {
        let stabMultiplier = 1;
        if (attacker.types.find((type) => type === move.type)) {
            stabMultiplier = 1.25;
        }
        let typeMultiplier = this.calculateTypeEffectiveness(move, defender);
        let damage = Math.round(0.75 *
            move.power *
            (attacker.stats.attack / defender.stats.defense) *
            typeMultiplier *
            stabMultiplier);
        console.log(`--------------
${attacker.name} attacked ${defender.name} and dealt ${damage} damage.
--------------
* MOVE POWER: ${move.power * 0.75}
* ATTACK x DEFENSE: ${attacker.stats.attack} / ${defender.stats.defense} = ${attacker.stats.attack / defender.stats.defense}
* TYPE MULTIPLIER: ${typeMultiplier}
* STAB MULTIPLIER: ${stabMultiplier}
--------------`);
        return damage;
    }
    calculateTypeEffectiveness(move, defender) {
        return defender.types.reduce((acc, type) => {
            return acc * src_app_utils_typeEffectiveness__WEBPACK_IMPORTED_MODULE_4__["typeEffectiveness"][move.type][type];
        }, 1);
    }
    // ---------------------------- //
    //  DISPLAY FUNCTIONS       //
    // ---------------------------- //
    handleOptionSelect(id) {
        switch (id) {
            // fight
            case 1:
                this.battlePhase = 2;
                break;
            // bag
            case 2:
                this.battlePhase = 3;
                this.battleInfoText = this.getBattleInfoText(11);
                setTimeout(() => {
                    this.setInitialState();
                }, this.waitTime);
                break;
            // pokemon
            case 3:
                this.battlePhase = 3;
                this.battleInfoText = this.getBattleInfoText(12, this.playerPokemon.name);
                setTimeout(() => {
                    this.setInitialState();
                }, this.waitTime);
                break;
            // run
            case 4:
                this.battlePhase = 3;
                this.battleInfoText = this.getBattleInfoText(13);
                setTimeout(() => {
                    this.setInitialState();
                }, this.waitTime);
                break;
            default:
                break;
        }
    }
    getBattleInfoText(id, pokemonName = null, moveName = null, effectiveness = 1) {
        let battleInfo = [
            { id: 0, name: "" },
            { id: 1, name: `What will ${pokemonName} do?` },
            { id: 2, name: `${pokemonName} used ${moveName}! ` },
            { id: 3, name: `It's super effective!` },
            { id: 4, name: `It's ultra effective!` },
            { id: 5, name: `It's not very effective...` },
            { id: 6, name: `It's extremely ineffective...` },
            { id: 7, name: `It does not affect the opponent...` },
            { id: 11, name: "You have no items on your bag" },
            { id: 12, name: `${pokemonName} is your only Pokémon` },
            { id: 13, name: "Can't escape!" }
        ];
        function getInfoName(id) {
            return battleInfo.find((info) => info.id === id).name;
        }
        let info = getInfoName(id);
        switch (effectiveness) {
            case 1:
                break;
            case 2:
                info = info + getInfoName(3);
                break;
            case 4:
                info = info + getInfoName(4);
                break;
            case 0.5:
                info = info + getInfoName(5);
                break;
            case 0.25:
                info = info + getInfoName(6);
                break;
            case 0:
                info = info + getInfoName(7);
                break;
            default:
                break;
        }
        return info;
    }
    playAudio() {
        this.battleMusic = new Audio();
        this.battleMusic.src = "assets/sounds/battle-song.ogg";
        this.battleMusic.load();
        this.battleMusic.play();
    }
    // ---------------------------- //
    // DATA FORMATTING FUNCTIONS    //
    // ---------------------------- //
    // format PokemonData instance to Fighter instance
    formatPokemonData(pokemon) {
        return {
            id: pokemon.id,
            sprites: pokemon.sprites,
            name: this.capitalizeFirstLetter(pokemon.name),
            types: pokemon.types,
            moves: pokemon.moves.map((move) => {
                move.name = this.capitalizeFirstLetter(move.name);
                return move;
            }),
            stats: pokemon.stats,
            status: {
                startAttack: false,
                currentAttackEffectiveness: "",
                damageDealt: 0,
                currentHp: pokemon.stats.hp,
                currentHpPercentage: 100,
                currentHpColor: this.colors.green,
                isAlive: true
            }
        };
    }
    capitalizeFirstLetter(str) {
        let strArray = str.split(" ");
        for (let i = 0, x = strArray.length; i < x; i++) {
            strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substr(1);
        }
        return strArray.join(" ");
    }
};
BattleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_trophy_service__WEBPACK_IMPORTED_MODULE_3__["TrophyService"] }
];
BattleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-battle",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./battle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Battle/battle.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./battle.component.scss */ "./src/app/pages/Battle/battle.component.scss")).default]
    })
], BattleComponent);



/***/ }),

/***/ "./src/app/pages/Main/main.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/Main/main.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nmain section {\n  background: #fff;\n  border-radius: 8px;\n  width: 90%;\n  padding: 2rem;\n  margin: 1rem;\n}\nmain section h1 {\n  font-size: 2.2rem;\n  text-align: center;\n  margin: 2rem 1rem 4rem;\n}\nmain section h1 fa-icon {\n  display: block;\n  padding-right: 1rem;\n  font-size: 3rem;\n}\nmain section .main-loading {\n  margin-bottom: 3rem;\n}\nmain section .main-article {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\nmain section .main-article app-pokemon-card {\n  margin: 1rem;\n  width: 15rem;\n  height: 17rem;\n  flex-grow: 1;\n  box-shadow: 0 2px 8px rgba(255, 0, 0, 0.2);\n  transition: 0.2s transform;\n}\nmain section .main-article app-pokemon-card:hover {\n  transform: translateY(-3px);\n  background-color: rgba(255, 0, 0, 0.1);\n}\nmain section .main-article > div {\n  width: 100%;\n  margin: 3rem 1rem;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\nmain section .main-article > div button {\n  margin: 0.5rem;\n  background: #fff;\n  height: 3.6rem;\n  width: 14rem;\n  font-weight: bold;\n  font-size: 1.3rem;\n  color: #ff0000;\n  border: 0.2rem solid #ff0000;\n  border-radius: 16px;\n  cursor: pointer;\n  outline-color: #ff0000;\n  transition: 0.2s;\n}\nmain section .main-article > div button:hover {\n  background-color: rgba(255, 0, 0, 0.1);\n}\nmain section .main-article > div button span {\n  margin-left: 0.7rem;\n}\nmain section .main-article app-loading {\n  width: 100%;\n}\n@media (min-width: 400px) {\n  main section h1 fa-icon {\n    display: inline;\n  }\n}\n@media (min-width: 768px) {\n  main app-pokemon-card {\n    max-width: 16.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvTWFpbi9DOlxcVXNlcnNcXGN0dzAwNzczXFxEb2N1bWVudHNcXG1ybWF1cmljaW9cXHBva2Vtb24tYmF0dGxlL3NyY1xcYXBwXFxwYWdlc1xcTWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvTWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NSO0FEQ1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDWjtBRENZO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NoQjtBREdRO0VBQ0ksbUJBQUE7QUNEWjtBRElRO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0ZaO0FES1k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtBQ0hoQjtBREtnQjtFQUNJLDJCQUFBO0VBQ0Esc0NBQUE7QUNIcEI7QURPWTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUVBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNOaEI7QURRZ0I7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDTnBCO0FEUW9CO0VBQ0ksc0NBQUE7QUNOeEI7QURTb0I7RUFDSSxtQkFBQTtBQ1B4QjtBRFlZO0VBQ0ksV0FBQTtBQ1ZoQjtBRGVJO0VBQ0k7SUFDSSxlQUFBO0VDYlY7QUFDRjtBRGdCSTtFQUNJO0lBQ0ksa0JBQUE7RUNkVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvTWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMXJlbSA0cmVtO1xyXG5cclxuICAgICAgICAgICAgZmEtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluLWxvYWRpbmcge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1haW4tYXJ0aWNsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAvLyBhcnRpY2xlXHJcbiAgICAgICAgICAgIGFwcC1wb2tlbW9uLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxN3JlbTtcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnMgdHJhbnNmb3JtO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDNyZW0gMXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMy42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjZmYwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmUtY29sb3I6ICNmZjAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhcHAtbG9hZGluZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICBzZWN0aW9uIGgxIGZhLWljb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGFwcC1wb2tlbW9uLWNhcmQge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE2LjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWFpbiBzZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXJnaW46IDFyZW07XG59XG5tYWluIHNlY3Rpb24gaDEge1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMXJlbSA0cmVtO1xufVxubWFpbiBzZWN0aW9uIGgxIGZhLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxubWFpbiBzZWN0aW9uIC5tYWluLWxvYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxubWFpbiBzZWN0aW9uIC5tYWluLWFydGljbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxubWFpbiBzZWN0aW9uIC5tYWluLWFydGljbGUgYXBwLXBva2Vtb24tY2FyZCB7XG4gIG1hcmdpbjogMXJlbTtcbiAgd2lkdGg6IDE1cmVtO1xuICBoZWlnaHQ6IDE3cmVtO1xuICBmbGV4LWdyb3c6IDE7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogMC4ycyB0cmFuc2Zvcm07XG59XG5tYWluIHNlY3Rpb24gLm1haW4tYXJ0aWNsZSBhcHAtcG9rZW1vbi1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcbn1cbm1haW4gc2VjdGlvbiAubWFpbi1hcnRpY2xlID4gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogM3JlbSAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxubWFpbiBzZWN0aW9uIC5tYWluLWFydGljbGUgPiBkaXYgYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMy42cmVtO1xuICB3aWR0aDogMTRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkICNmZjAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZS1jb2xvcjogI2ZmMDAwMDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbm1haW4gc2VjdGlvbiAubWFpbi1hcnRpY2xlID4gZGl2IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjEpO1xufVxubWFpbiBzZWN0aW9uIC5tYWluLWFydGljbGUgPiBkaXYgYnV0dG9uIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMC43cmVtO1xufVxubWFpbiBzZWN0aW9uIC5tYWluLWFydGljbGUgYXBwLWxvYWRpbmcge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xuICBtYWluIHNlY3Rpb24gaDEgZmEtaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgbWFpbiBhcHAtcG9rZW1vbi1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDE2LjVyZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/Main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/Main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _services_trophy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/trophy.service */ "./src/app/services/trophy.service.ts");
/* harmony import */ var _utils_fightersIdList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/fightersIdList */ "./src/app/utils/fightersIdList.ts");







let MainComponent = class MainComponent {
    constructor(pokemonService, router, trophyService) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.trophyService = trophyService;
        // initial IDs to fetch
        this.fightersIdList = _utils_fightersIdList__WEBPACK_IMPORTED_MODULE_6__["fightersIdList"];
        this.pokedexList = [...Array(12).keys()].map(id => id + 1);
        this.buttons = [
            {
                id: 1,
                name: "Load more",
                function: (sectionId) => {
                    this.handlePokedexLoad(sectionId);
                },
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"]
            },
            {
                id: 2,
                name: "Pick Random",
                function: (sectionId) => {
                    this.handleRandomSelection(sectionId, false);
                },
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faQuestion"]
            },
            {
                id: 3,
                name: "Pick Random",
                function: (sectionId) => {
                    this.handleRandomSelection(sectionId, true);
                },
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faQuestion"]
            }
        ];
        this.sections = [
            {
                // first section: fighters
                id: 1,
                title: { name: "Choose your Fighter", icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBolt"] },
                pokemonList: [],
                isLoading: false,
                error: false,
                buttonList: {
                    buttons: [this.getButtonById(3)],
                    isLoading: false
                }
            },
            {
                // second section: pokedex
                id: 2,
                title: { name: "Learn about other Pokémon", icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGraduationCap"] },
                pokemonList: [],
                isLoading: false,
                error: false,
                buttonList: {
                    buttons: [this.getButtonById(1), this.getButtonById(2)],
                    isLoading: false
                }
            }
        ];
    }
    ngOnInit() {
        // if there's no data on local storage, set initial values
        this.handleTrophies();
        // fetch first section data:
        this.fetchPokemonByIdList(this.fightersIdList, 1, false);
        // fetch second section data:
        this.fetchPokemonByIdList(this.pokedexList, 2, false);
    }
    fetchPokemonByIdList(idList, sectionId, shouldReturn) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let section = this.getSectionById(sectionId);
            section.isLoading = true;
            try {
                let data = yield this.pokemonService.getPokemonPreviewByIdList(idList);
                section.isLoading = false;
                section.error = false;
                if (shouldReturn) {
                    return data;
                }
                section.pokemonList = data;
            }
            catch (e) {
                //console.log(e);
                section.isLoading = false;
                section.error = true;
            }
        });
    }
    handlePokedexLoad(sectionId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let section = this.getSectionById(sectionId);
            section.buttonList.isLoading = true;
            let lastPokemonId = section.pokemonList[section.pokemonList.length - 1].id;
            let newPokedexList = [...Array(12).keys()].map(
            // plus 1 because it starts on 0
            id => id + lastPokemonId + 1);
            let data = yield this.fetchPokemonByIdList(newPokedexList, sectionId, true);
            section.pokemonList = section.pokemonList.concat(data);
            section.buttonList.isLoading = false;
        });
    }
    handleRandomSelection(sectionId, onlyFighters) {
        let randomPokemonId;
        if (onlyFighters) {
            let section = this.getSectionById(sectionId);
            let idList = section.pokemonList.map(pokemon => pokemon.id);
            randomPokemonId = idList[Math.floor(Math.random() * idList.length)];
        }
        else {
            randomPokemonId = Math.floor(Math.random() * 151) + 1;
        }
        this.router.navigate(["/pokemon", randomPokemonId]);
    }
    handleTrophies() {
        this.trophyList = this.trophyService.getTrophyList();
        if (!this.trophyList) {
            this.trophyList = this.trophyService.setInitialTrophyList();
        }
    }
    getButtonById(id) {
        return this.buttons.find(button => button.id === id);
    }
    getSectionById(id) {
        return this.sections.find(section => section.id === id);
    }
};
MainComponent.ctorParameters = () => [
    { type: _services_pokemon_service__WEBPACK_IMPORTED_MODULE_4__["PokemonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_trophy_service__WEBPACK_IMPORTED_MODULE_5__["TrophyService"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-main",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/pages/Main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/pages/NotFound/not-found.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/NotFound/not-found.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\nsection > div {\n  background: #fff;\n  border-radius: 8px;\n  width: 90%;\n  padding: 2rem;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nsection > div small {\n  align-self: flex-end;\n  font-size: 1rem;\n}\nsection > div img {\n  width: 100%;\n}\nsection > div button {\n  margin: 1rem;\n  background: #fff;\n  height: 3.6rem;\n  width: 14rem;\n  font-weight: bold;\n  font-size: 1.3rem;\n  color: #ff0000;\n  border: 0.2rem solid #ff0000;\n  border-radius: 16px;\n  cursor: pointer;\n  outline-color: #ff0000;\n  transition: 0.2s;\n}\nsection > div button:hover {\n  background-color: rgba(255, 0, 0, 0.1);\n}\nsection > div button span {\n  margin-left: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvTm90Rm91bmQvQzpcXFVzZXJzXFxjdHcwMDc3M1xcRG9jdW1lbnRzXFxtcm1hdXJpY2lvXFxwb2tlbW9uLWJhdHRsZS9zcmNcXGFwcFxccGFnZXNcXE5vdEZvdW5kXFxub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL05vdEZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUNBSjtBREVJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDRFI7QURHUTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQ0RaO0FESVE7RUFDSSxXQUFBO0FDRlo7QURLUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNIWjtBREtZO0VBQ0ksc0NBQUE7QUNIaEI7QURNWTtFQUNJLG1CQUFBO0FDSmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvTm90Rm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGhlaWdodDogMy42cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTRyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkICNmZjAwMDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgb3V0bGluZS1jb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuc2VjdGlvbiA+IGRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuc2VjdGlvbiA+IGRpdiBzbWFsbCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBmb250LXNpemU6IDFyZW07XG59XG5zZWN0aW9uID4gZGl2IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuc2VjdGlvbiA+IGRpdiBidXR0b24ge1xuICBtYXJnaW46IDFyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMy42cmVtO1xuICB3aWR0aDogMTRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkICNmZjAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZS1jb2xvcjogI2ZmMDAwMDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbnNlY3Rpb24gPiBkaXYgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMSk7XG59XG5zZWN0aW9uID4gZGl2IGJ1dHRvbiBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/NotFound/not-found.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/NotFound/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




let NotFoundComponent = class NotFoundComponent {
    constructor(router) {
        this.router = router;
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHome"];
    }
    ngOnInit() { }
    redirectHome() {
        this.router.navigate(["/"]);
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-not-found",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/NotFound/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/NotFound/not-found.component.scss")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/pages/Pokemon/pokemon.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/Pokemon/pokemon.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\nsection > div {\n  background: #fff;\n  border-radius: 8px;\n  width: 90%;\n  padding: 2rem;\n  margin: 1rem;\n}\nsection .pokemon-detail header {\n  text-align: center;\n}\nsection .pokemon-detail header h1 {\n  margin-bottom: 1rem;\n  font-size: 2.6rem;\n}\nsection .pokemon-detail nav {\n  margin-bottom: 1rem;\n}\nsection .pokemon-detail nav #nav-fighter {\n  display: none;\n  margin: 1rem 0;\n}\nsection .pokemon-detail nav div.nav-disabled {\n  justify-content: flex-end;\n}\nsection .pokemon-detail nav div {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\nsection .pokemon-detail nav div a.nav-disabled {\n  display: none;\n}\nsection .pokemon-detail nav div a {\n  text-decoration: none;\n  color: #ff0000;\n  padding: 0.25rem;\n  border-radius: 0.8rem;\n  display: flex;\n  align-items: center;\n}\nsection .pokemon-detail nav div a fa-icon {\n  font-size: 2rem;\n  margin: 0 0.25rem;\n}\nsection .pokemon-detail nav div a span {\n  font-size: 1.4rem;\n  line-height: 1.6rem;\n  margin: 0 0.25rem;\n}\nsection .pokemon-detail nav div a:hover {\n  background: rgba(255, 0, 0, 0.1);\n}\nsection .pokemon-detail > div {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\nsection .pokemon-detail > div #img-wrapper {\n  width: 100%;\n  height: 20rem;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nsection .pokemon-detail > div #img-wrapper img {\n  max-width: 100%;\n  max-height: 100%;\n  transition: 0.2s;\n}\nsection .pokemon-detail > div #img-wrapper img:hover {\n  transform: scale(1.05);\n}\nsection .pokemon-detail > div .pokemon-info {\n  width: 100%;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n}\nsection .pokemon-detail > div .pokemon-info ul {\n  width: 100%;\n}\nsection .pokemon-detail > div .pokemon-info ul li {\n  width: 100%;\n  padding-top: 1rem;\n  margin-top: 1rem;\n  border-top: 0.1rem solid #eee;\n  display: flex;\n  align-items: baseline;\n}\nsection .pokemon-detail > div .pokemon-info ul li:last-child {\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 0.1rem solid #eee;\n}\nsection .pokemon-detail > div .pokemon-info ul li small {\n  width: 40%;\n  text-align: end;\n  color: #737373;\n}\nsection .pokemon-detail > div .pokemon-info ul li > span {\n  font-size: 1.5rem;\n  width: 60%;\n  margin-left: 1rem;\n}\nsection .pokemon-detail > div .pokemon-moves {\n  width: 100%;\n  padding: 1rem;\n}\nsection .pokemon-detail > div .pokemon-moves h2 {\n  font-size: 2.1rem;\n}\nsection .pokemon-detail > div .pokemon-moves ul {\n  width: 100%;\n}\nsection .pokemon-detail > div .pokemon-moves ul li {\n  width: 100%;\n  padding-top: 1rem;\n  margin-top: 1rem;\n  border-top: 0.1rem solid #eee;\n}\nsection .pokemon-detail > div .pokemon-moves ul li:last-child {\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n  border-bottom: 0.1rem solid #eee;\n}\nsection .pokemon-detail > div .pokemon-moves ul li > div {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\nsection .pokemon-detail > div .pokemon-moves ul li > div > span:first-child {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\nsection .pokemon-detail > div .pokemon-moves ul li > div > span:first-child h3 {\n  font-size: 1.5rem;\n}\nsection .pokemon-detail > div .pokemon-moves ul li > div > span:last-child {\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n}\nsection .pokemon-detail > div .pokemon-moves ul li > div > span:last-child > span {\n  display: flex;\n  align-items: baseline;\n}\nsection .pokemon-detail > div .pokemon-moves ul li > div > span:last-child > span small {\n  color: #737373;\n  width: 4rem;\n}\nsection .pokemon-detail > div .pokemon-moves ul li > div > span:last-child > span span {\n  font-size: 1.5rem;\n  margin-left: 0.5rem;\n}\nsection .pokemon-detail > div .pokemon-moves ul li > div > span:last-child > span span fa-icon {\n  color: #13b913;\n}\nsection .pokemon-detail > div .pokemon-moves ul li p {\n  font-size: 1.5rem;\n  text-align: justify;\n  text-justify: inter-word;\n}\nsection .pokemon-detail > div .pokemon-moves > p {\n  font-size: 1.3rem;\n  text-align: end;\n}\nsection .pokemon-detail > div .pokemon-moves > p fa-icon {\n  color: #13b913;\n  font-size: 1.5rem;\n}\nsection .pokemon-detail > div #not-fighter-wrapper {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 2rem 0 2rem;\n  border-bottom: 0.1rem solid #eee;\n  border-top: 0.1rem solid #eee;\n}\nsection .pokemon-detail > div #not-fighter-wrapper p {\n  text-align: center;\n  font-size: 1.5rem;\n}\nsection .pokemon-detail > div #not-fighter-wrapper p a {\n  color: #ff0000;\n}\nsection .pokemon-detail > div #btn-wrapper {\n  width: 100%;\n  margin: 3rem;\n  display: flex;\n  justify-content: center;\n}\nsection .pokemon-detail > div #btn-wrapper button {\n  margin: 0.5rem;\n  background: #fff;\n  height: 3.6rem;\n  width: 14rem;\n  font-weight: bold;\n  font-size: 1.3rem;\n  color: #ff0000;\n  border: 0.2rem solid #ff0000;\n  border-radius: 16px;\n  cursor: pointer;\n  outline-color: #ff0000;\n  transition: 0.2s;\n}\nsection .pokemon-detail > div #btn-wrapper button:hover {\n  background-color: rgba(255, 0, 0, 0.1);\n}\nsection .pokemon-detail > div #btn-wrapper button span {\n  margin-left: 0.7rem;\n}\nsection .pokemon-detail > div #btn-wrapper button:disabled {\n  cursor: not-allowed;\n  border: 0.2rem solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\nsection .pokemon-detail > div #trophies-list {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 2rem;\n  margin-top: 1rem;\n  border-top: 0.1rem solid #eee;\n}\nsection .pokemon-detail > div #trophies-list > div img {\n  width: 3rem;\n  height: 3rem;\n}\nsection .pokemon-detail > div #trophies-list > div .trophy-missing {\n  opacity: 0.25;\n  -webkit-filter: brightness(20%);\n          filter: brightness(20%);\n}\nsection .pokemon-detail > div #trophies-list small {\n  font-size: 1.1rem;\n  text-align: center;\n}\nsection .pokemon-detail > div #trophies-list small:last-child {\n  margin-top: 1.5rem;\n}\nsection .pokemon-detail > div li {\n  list-style: none;\n}\nsection > a {\n  position: absolute;\n  top: -7rem;\n  left: 2rem;\n  font-size: 2.5rem;\n  color: #ffffff;\n}\n@media (min-width: 400px) {\n  section > a {\n    left: 4rem;\n  }\n  section .pokemon-detail nav #nav-fighter {\n    display: flex;\n  }\n  section .pokemon-detail > div #img-wrapper {\n    height: 25rem;\n  }\n  section .pokemon-detail > div .pokemon-moves ul li > div > span:first-child {\n    width: 13rem;\n  }\n  section .pokemon-detail > div .pokemon-moves ul li > div > span:last-child {\n    margin-top: 0;\n    width: 11rem;\n  }\n  section .pokemon-detail > div .pokemon-moves ul li > div > span:last-child > span small {\n    text-align: end;\n  }\n  section .pokemon-detail > div .pokemon-moves ul li > div > span:last-child > span span {\n    margin-left: 1rem;\n  }\n  section .pokemon-detail > div #trophies-list > div img {\n    width: 4rem;\n    height: 4rem;\n  }\n}\n@media (min-width: 768px) {\n  section > a {\n    left: 5rem;\n  }\n  section .pokemon-detail .header-position {\n    margin-top: -5rem;\n    padding: 1rem;\n  }\n  section .pokemon-detail > div #img-wrapper {\n    width: 50%;\n    height: 30rem;\n    margin-bottom: 1rem;\n  }\n  section .pokemon-detail > div .pokemon-info {\n    width: 50%;\n  }\n  section .pokemon-detail > div .pokemon-info ul li strong {\n    width: 30%;\n  }\n  section .pokemon-detail > div .pokemon-info ul li span {\n    width: 70%;\n  }\n  section .pokemon-detail > div #trophies-list > div img {\n    width: 5rem;\n    height: 5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvUG9rZW1vbi9DOlxcVXNlcnNcXGN0dzAwNzczXFxEb2N1bWVudHNcXG1ybWF1cmljaW9cXHBva2Vtb24tYmF0dGxlL3NyY1xcYXBwXFxwYWdlc1xcUG9rZW1vblxccG9rZW1vbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvUG9rZW1vbi9wb2tlbW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtBQ0FKO0FERUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQVI7QURJUTtFQUNJLGtCQUFBO0FDRlo7QURJWTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNGaEI7QURNUTtFQUNJLG1CQUFBO0FDSlo7QURNWTtFQUNJLGFBQUE7RUFFQSxjQUFBO0FDTGhCO0FEUVk7RUFDSSx5QkFBQTtBQ05oQjtBRFNZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1BoQjtBRFNnQjtFQUNJLGFBQUE7QUNQcEI7QURVZ0I7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FDVHBCO0FEV29CO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDVHhCO0FEWW9CO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDVnhCO0FEYW9CO0VBQ0ksZ0NBQUE7QUNYeEI7QURpQlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDZlo7QURpQlk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2hCaEI7QURrQmdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNoQnBCO0FEa0JvQjtFQUNJLHNCQUFBO0FDaEJ4QjtBRHFCWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUNwQmhCO0FEc0JnQjtFQUNJLFdBQUE7QUNwQnBCO0FEc0JvQjtFQUNJLFdBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFFQSxhQUFBO0VBQ0EscUJBQUE7QUN0QnhCO0FEd0J3QjtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ3RCNUI7QUR5QndCO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDdkI1QjtBRDBCd0I7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ3hCNUI7QUQ4Qlk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQzVCaEI7QUQ4QmdCO0VBQ0ksaUJBQUE7QUM1QnBCO0FEK0JnQjtFQUNJLFdBQUE7QUM3QnBCO0FEK0JvQjtFQUNJLFdBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUM5QnhCO0FEZ0N3QjtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQzlCNUI7QURpQ3dCO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDL0I1QjtBRGtDZ0M7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDaENwQztBRGtDb0M7RUFDSSxpQkFBQTtBQ2hDeEM7QURvQ2dDO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUNuQ3BDO0FEcUNvQztFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQ25DeEM7QURxQ3dDO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUNuQzVDO0FEc0N3QztFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNwQzVDO0FEc0M0QztFQUNJLGNBQUE7QUNwQ2hEO0FENEN3QjtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQzFDNUI7QUQrQ2dCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDN0NwQjtBRCtDb0I7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUM3Q3hCO0FEa0RZO0VBQ0ksV0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ2xEaEI7QURvRGdCO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ2xEcEI7QURvRG9CO0VBQ0ksY0FBQTtBQ2xEeEI7QUR1RFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtBQ3REaEI7QUR3RGdCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ3REcEI7QUR3RG9CO0VBQ0ksc0NBQUE7QUN0RHhCO0FEeURvQjtFQUNJLG1CQUFBO0FDdkR4QjtBRDBEb0I7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDeER4QjtBRDZEWTtFQUNJLFdBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDN0RoQjtBRGdFb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzlEeEI7QURpRW9CO0VBQ0ksYUFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUMvRHhCO0FEbUVnQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNqRXBCO0FEbUVvQjtFQUNJLGtCQUFBO0FDakV4QjtBRHNFWTtFQUNJLGdCQUFBO0FDcEVoQjtBRHlFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7QUN4RVI7QUQ2RUk7RUFDSTtJQUNJLFVBQUE7RUMzRVY7RUQrRVU7SUFDSSxhQUFBO0VDN0VkO0VEaUZjO0lBQ0ksYUFBQTtFQy9FbEI7RURtRmtCO0lBQ0ksWUFBQTtFQ2pGdEI7RURvRmtCO0lBQ0ksYUFBQTtJQUNBLFlBQUE7RUNsRnRCO0VEcUYwQjtJQUNJLGVBQUE7RUNuRjlCO0VEc0YwQjtJQUNJLGlCQUFBO0VDcEY5QjtFRDBGYztJQUNJLFdBQUE7SUFDQSxZQUFBO0VDeEZsQjtBQUNGO0FENkZJO0VBQ0k7SUFDSSxVQUFBO0VDM0ZWO0VEK0ZVO0lBQ0ksaUJBQUE7SUFDQSxhQUFBO0VDN0ZkO0VEaUdjO0lBQ0ksVUFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQy9GbEI7RURrR2M7SUFDSSxVQUFBO0VDaEdsQjtFRGtHa0I7SUFDSSxVQUFBO0VDaEd0QjtFRGtHa0I7SUFDSSxVQUFBO0VDaEd0QjtFRG9HYztJQUNJLFdBQUE7SUFDQSxZQUFBO0VDbEdsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvUG9rZW1vbi9wb2tlbW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5wb2tlbW9uLWRldGFpbCB7XHJcbiAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi42cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuICAgICAgICAgICAgI25hdi1maWdodGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpdi5uYXYtZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICAgICAgYS5uYXYtZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC44cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZhLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMC4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgICAgI2ltZy13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucG9rZW1vbi1pbmZvIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuMXJlbSBzb2xpZCAjZWVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MzczNzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnBva2Vtb24tbW92ZXMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkICNlZWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MzczNzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmEtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTNiOTEzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWp1c3RpZnk6IGludGVyLXdvcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPiBwIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZhLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzEzYjkxMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjbm90LWZpZ2h0ZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwIDJyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgI2VlZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuMXJlbSBzb2xpZCAjZWVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgI2J0bi13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkICNmZjAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZS1jb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjOTk5OTk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICN0cm9waGllcy1saXN0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuMXJlbSBzb2xpZCAjZWVlO1xyXG5cclxuICAgICAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyb3BoeS1taXNzaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4yNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDIwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPiBhIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtN3JlbTtcclxuICAgICAgICBsZWZ0OiAycmVtO1xyXG5cclxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtZWRpYSBxdWVyaWVzOlxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9rZW1vbi1kZXRhaWwge1xyXG4gICAgICAgICAgICBuYXYgI25hdi1maWdodGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICNpbWctd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucG9rZW1vbi1tb3ZlcyB1bCBsaSA+IGRpdiA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTFyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjdHJvcGhpZXMtbGlzdCA+IGRpdiBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBsZWZ0OiA1cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBva2Vtb24tZGV0YWlsIHtcclxuICAgICAgICAgICAgLmhlYWRlci1wb3NpdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICNpbWctd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnBva2Vtb24taW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdWwgbGkgc3Ryb25nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdWwgbGkgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICN0cm9waGllcy1saXN0ID4gZGl2IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5zZWN0aW9uID4gZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogOTAlO1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXJnaW46IDFyZW07XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCBoZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCBoZWFkZXIgaDEge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDIuNnJlbTtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsIG5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCBuYXYgI25hdi1maWdodGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCBuYXYgZGl2Lm5hdi1kaXNhYmxlZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCBuYXYgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCBuYXYgZGl2IGEubmF2LWRpc2FibGVkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsIG5hdiBkaXYgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsIG5hdiBkaXYgYSBmYS1pY29uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW46IDAgMC4yNXJlbTtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsIG5hdiBkaXYgYSBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XG4gIG1hcmdpbjogMCAwLjI1cmVtO1xufVxuc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgbmF2IGRpdiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuMSk7XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2ICNpbWctd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcmVtO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgI2ltZy13cmFwcGVyIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2ICNpbWctd3JhcHBlciBpbWc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgLnBva2Vtb24taW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgLnBva2Vtb24taW5mbyB1bCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgLnBva2Vtb24taW5mbyB1bCBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkICNlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2IC5wb2tlbW9uLWluZm8gdWwgbGk6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgI2VlZTtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2IC5wb2tlbW9uLWluZm8gdWwgbGkgc21hbGwge1xuICB3aWR0aDogNDAlO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGNvbG9yOiAjNzM3MzczO1xufVxuc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgLnBva2Vtb24taW5mbyB1bCBsaSA+IHNwYW4ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAucG9rZW1vbi1tb3ZlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgLnBva2Vtb24tbW92ZXMgaDIge1xuICBmb250LXNpemU6IDIuMXJlbTtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2IC5wb2tlbW9uLW1vdmVzIHVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAucG9rZW1vbi1tb3ZlcyB1bCBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkICNlZWU7XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAucG9rZW1vbi1tb3ZlcyB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjZWVlO1xufVxuc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgLnBva2Vtb24tbW92ZXMgdWwgbGkgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2IC5wb2tlbW9uLW1vdmVzIHVsIGxpID4gZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgLnBva2Vtb24tbW92ZXMgdWwgbGkgPiBkaXYgPiBzcGFuOmZpcnN0LWNoaWxkIGgzIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAucG9rZW1vbi1tb3ZlcyB1bCBsaSA+IGRpdiA+IHNwYW46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2IC5wb2tlbW9uLW1vdmVzIHVsIGxpID4gZGl2ID4gc3BhbjpsYXN0LWNoaWxkID4gc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2IC5wb2tlbW9uLW1vdmVzIHVsIGxpID4gZGl2ID4gc3BhbjpsYXN0LWNoaWxkID4gc3BhbiBzbWFsbCB7XG4gIGNvbG9yOiAjNzM3MzczO1xuICB3aWR0aDogNHJlbTtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2IC5wb2tlbW9uLW1vdmVzIHVsIGxpID4gZGl2ID4gc3BhbjpsYXN0LWNoaWxkID4gc3BhbiBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAucG9rZW1vbi1tb3ZlcyB1bCBsaSA+IGRpdiA+IHNwYW46bGFzdC1jaGlsZCA+IHNwYW4gc3BhbiBmYS1pY29uIHtcbiAgY29sb3I6ICMxM2I5MTM7XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAucG9rZW1vbi1tb3ZlcyB1bCBsaSBwIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2IC5wb2tlbW9uLW1vdmVzID4gcCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAucG9rZW1vbi1tb3ZlcyA+IHAgZmEtaWNvbiB7XG4gIGNvbG9yOiAjMTNiOTEzO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2ICNub3QtZmlnaHRlci13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAycmVtIDAgMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNlZWU7XG4gIGJvcmRlci10b3A6IDAuMXJlbSBzb2xpZCAjZWVlO1xufVxuc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgI25vdC1maWdodGVyLXdyYXBwZXIgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAjbm90LWZpZ2h0ZXItd3JhcHBlciBwIGEge1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2ICNidG4td3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgI2J0bi13cmFwcGVyIGJ1dHRvbiB7XG4gIG1hcmdpbjogMC41cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDMuNnJlbTtcbiAgd2lkdGg6IDE0cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBib3JkZXI6IDAuMnJlbSBzb2xpZCAjZmYwMDAwO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmUtY29sb3I6ICNmZjAwMDA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAjYnRuLXdyYXBwZXIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMSk7XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAjYnRuLXdyYXBwZXIgYnV0dG9uIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMC43cmVtO1xufVxuc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgI2J0bi13cmFwcGVyIGJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkICM5OTk5OTk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgI3Ryb3BoaWVzLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAycmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgI2VlZTtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2ICN0cm9waGllcy1saXN0ID4gZGl2IGltZyB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAjdHJvcGhpZXMtbGlzdCA+IGRpdiAudHJvcGh5LW1pc3Npbmcge1xuICBvcGFjaXR5OiAwLjI1O1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMjAlKTtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2ICN0cm9waGllcy1saXN0IHNtYWxsIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2ICN0cm9waGllcy1saXN0IHNtYWxsOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5zZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5zZWN0aW9uID4gYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtN3JlbTtcbiAgbGVmdDogMnJlbTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gIHNlY3Rpb24gPiBhIHtcbiAgICBsZWZ0OiA0cmVtO1xuICB9XG4gIHNlY3Rpb24gLnBva2Vtb24tZGV0YWlsIG5hdiAjbmF2LWZpZ2h0ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgI2ltZy13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDI1cmVtO1xuICB9XG4gIHNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2IC5wb2tlbW9uLW1vdmVzIHVsIGxpID4gZGl2ID4gc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDEzcmVtO1xuICB9XG4gIHNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2IC5wb2tlbW9uLW1vdmVzIHVsIGxpID4gZGl2ID4gc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHdpZHRoOiAxMXJlbTtcbiAgfVxuICBzZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAucG9rZW1vbi1tb3ZlcyB1bCBsaSA+IGRpdiA+IHNwYW46bGFzdC1jaGlsZCA+IHNwYW4gc21hbGwge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgfVxuICBzZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAucG9rZW1vbi1tb3ZlcyB1bCBsaSA+IGRpdiA+IHNwYW46bGFzdC1jaGlsZCA+IHNwYW4gc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cbiAgc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgI3Ryb3BoaWVzLWxpc3QgPiBkaXYgaW1nIHtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBzZWN0aW9uID4gYSB7XG4gICAgbGVmdDogNXJlbTtcbiAgfVxuICBzZWN0aW9uIC5wb2tlbW9uLWRldGFpbCAuaGVhZGVyLXBvc2l0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAtNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIHNlY3Rpb24gLnBva2Vtb24tZGV0YWlsID4gZGl2ICNpbWctd3JhcHBlciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgLnBva2Vtb24taW5mbyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICBzZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAucG9rZW1vbi1pbmZvIHVsIGxpIHN0cm9uZyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICBzZWN0aW9uIC5wb2tlbW9uLWRldGFpbCA+IGRpdiAucG9rZW1vbi1pbmZvIHVsIGxpIHNwYW4ge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgc2VjdGlvbiAucG9rZW1vbi1kZXRhaWwgPiBkaXYgI3Ryb3BoaWVzLWxpc3QgPiBkaXYgaW1nIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgICBoZWlnaHQ6IDVyZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/Pokemon/pokemon.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/Pokemon/pokemon.component.ts ***!
  \****************************************************/
/*! exports provided: PokemonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonComponent", function() { return PokemonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _services_trophy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/trophy.service */ "./src/app/services/trophy.service.ts");
/* harmony import */ var _utils_fightersIdList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/fightersIdList */ "./src/app/utils/fightersIdList.ts");







let PokemonComponent = class PokemonComponent {
    constructor(route, pokemonService, router, trophyService) {
        this.route = route;
        this.pokemonService = pokemonService;
        this.router = router;
        this.trophyService = trophyService;
        // current pokemon
        this.id = Number(this.route.snapshot.paramMap.get("id"));
        this.isMoveStab = [];
        // page status
        this.isLoading = true;
        this.isBattleLoading = false;
        this.error = false;
        // font awesome icons
        this.faBolt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBolt"];
        this.faAngleDoubleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngleDoubleUp"];
        this.faArrowAltCircleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowAltCircleLeft"];
        this.faArrowAltCircleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowAltCircleRight"];
        this.faFan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFan"];
        // navigation
        this.fightersIdList = _utils_fightersIdList__WEBPACK_IMPORTED_MODULE_6__["fightersIdList"];
        this.configSameComponentNavigation();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.handleTrophies();
            this.checkFighterId();
            yield this.getPokemonData();
            if (this.isFighter) {
                this.getFighterIndex();
                this.checkMoveType();
            }
        });
    }
    getPokemonData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // fetch current pokemon data from service
            this.isLoading = true;
            try {
                this.pokemon = yield this.pokemonService.getPokemonDataById(this.id, this.isFighter);
                this.isLoading = false;
                this.error = false;
            }
            catch (e) {
                console.log(e);
                this.isLoading = false;
                this.error = true;
            }
        });
    }
    getFighterIndex() {
        // get current pokemon's index on fighters array
        this.fighterIndex = this.fightersIdList.findIndex((id) => id === this.id);
    }
    checkFighterId() {
        // check if current pokemon is a fighter
        this.isFighter = Boolean(this.fightersIdList.find((id) => id === this.id));
    }
    checkMoveType() {
        // check moves with same type attack bonus
        this.isMoveStab = this.pokemon.moves.map((move) => Boolean(this.pokemon.types.find((type) => type === move.type)));
    }
    startBattle() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // get enemy pokemon data
            this.isBattleLoading = true;
            let idList = _utils_fightersIdList__WEBPACK_IMPORTED_MODULE_6__["fightersIdList"].filter((id) => id !== this.id);
            let randomPokemonId = idList[Math.floor(Math.random() * idList.length)];
            let enemyPokemon = yield this.pokemonService.getPokemonDataById(randomPokemonId, true);
            this.isBattleLoading = false;
            // time to battle!
            this.router.navigateByUrl("/battle", {
                state: {
                    playerPokemon: this.pokemon,
                    enemyPokemon,
                    playerTrophyAmount: this.trophyList[this.id],
                    enemyTrophyAmount: this.trophyList[enemyPokemon.id]
                }
            });
        });
    }
    handleTrophies() {
        // get trophies from local storage
        this.trophyList = this.trophyService.getTrophyList();
        if (!this.trophyList) {
            this.trophyList = this.trophyService.setInitialTrophyList();
        }
        this.trophyArray = [...Array(6).keys()].map((id) => id + 1);
    }
    configSameComponentNavigation() {
        // override the route reuse strategy
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.navigationSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
    }
    ngOnDestroy() {
        // cancel subscription
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
};
PokemonComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_pokemon_service__WEBPACK_IMPORTED_MODULE_4__["PokemonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_trophy_service__WEBPACK_IMPORTED_MODULE_5__["TrophyService"] }
];
PokemonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-pokemon",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pokemon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Pokemon/pokemon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pokemon.component.scss */ "./src/app/pages/Pokemon/pokemon.component.scss")).default]
    })
], PokemonComponent);



/***/ }),

/***/ "./src/app/services/pokemon.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/pokemon.service.ts ***!
  \*********************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _utils_movesIdList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/movesIdList */ "./src/app/utils/movesIdList.ts");




let PokemonService = class PokemonService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://pokeapi.co/api/v2";
    }
    // ---------------------------- //
    // GET POKEMON PREVIEW          //
    // ---------------------------- //
    getPokemonPreviewByIdList(idArray) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const pokeArray = yield Promise.all(idArray.map((id) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { return yield this.getPokemonPreviewById(id); })));
            return pokeArray;
        });
    }
    getPokemonPreviewById(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const data = yield this.http
                .get(`${this.baseUrl}/pokemon/${id}`)
                .toPromise();
            const pokemonPreview = {
                id: data.id,
                sprite: data.sprites.front_default,
                spriteShiny: data.sprites.front_shiny,
                name: data.name,
                types: data.types.map(t => t.type.name).reverse()
            };
            //console.log(pokemonPreview);
            return pokemonPreview;
        });
    }
    // ---------------------------- //
    // GET POKEMON DATA & MOVES     //
    // ---------------------------- //
    getPokemonDataById(id, isFighter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const data = yield this.http
                .get(`${this.baseUrl}/pokemon/${id}`)
                .toPromise();
            let statArray;
            let moveArray = [];
            if (isFighter) {
                // set pokemon stats
                statArray = this.formatStats(data.stats);
                // set pokemon moves
                let { movesId } = _utils_movesIdList__WEBPACK_IMPORTED_MODULE_3__["movesIdList"].find(item => item.pokemonId === id);
                moveArray = yield this.getMoveByIdList(movesId);
            }
            const pokemon = {
                id: data.id,
                sprites: {
                    front_default: data.sprites.front_default,
                    back_default: data.sprites.back_default,
                    front_shiny: data.sprites.front_shiny,
                    back_shiny: data.sprites.back_shiny,
                    artwork: `https://img.pokemondb.net/artwork/large/${data.name}.jpg`
                },
                name: data.name,
                types: data.types.map(t => t.type.name).reverse(),
                abilities: data.abilities.map(a => a.ability.name),
                height: data.height / 10,
                moves: moveArray,
                stats: statArray
            };
            return pokemon;
        });
    }
    getMoveByIdList(idArray) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const moveArray = yield Promise.all(idArray.map((id) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { return yield this.getMoveById(id); })));
            return moveArray;
        });
    }
    getMoveById(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const data = yield this.http
                .get(`${this.baseUrl}/move/${id}`)
                .toPromise();
            const text = data.flavor_text_entries.find(item => item.language.name === "en");
            const move = {
                name: data.name.replace("-", " "),
                text: text.flavor_text,
                type: data.type.name,
                power: data.power
            };
            return move;
        });
    }
    formatStats(stats) {
        // creating a object with stat name as property
        let statArray = stats.reduce((newObj, s) => {
            newObj[s.stat.name] = s.base_stat;
            return newObj;
        }, {});
        if (statArray["attack"] < statArray["special-attack"]) {
            statArray["attack"] = statArray["special-attack"];
        }
        if (statArray["defense"] < statArray["special-defense"]) {
            statArray["defense"] = statArray["special-defense"];
        }
        delete statArray["special-attack"];
        delete statArray["special-defense"];
        statArray.hp = 200 + statArray.hp * 2;
        //console.log(statArray);
        return statArray;
    }
};
PokemonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PokemonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], PokemonService);



/***/ }),

/***/ "./src/app/services/trophy.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/trophy.service.ts ***!
  \********************************************/
/*! exports provided: TrophyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrophyService", function() { return TrophyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _utils_fightersIdList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils/fightersIdList */ "./src/app/utils/fightersIdList.ts");



let TrophyService = class TrophyService {
    constructor() { }
    // ---------------------------- //
    // HANDLE POKEMON TROPHIES      //
    // ---------------------------- //
    getTrophyList() {
        return JSON.parse(localStorage.getItem("trophyList"));
    }
    setTrophyList(newTrophyList) {
        localStorage.setItem("trophyList", JSON.stringify(newTrophyList));
    }
    setInitialTrophyList() {
        // creating an object with fighterId as property
        let initialTrophies = _utils_fightersIdList__WEBPACK_IMPORTED_MODULE_2__["fightersIdList"].reduce((newObj, id) => {
            newObj[id] = 0;
            return newObj;
        }, {});
        this.setTrophyList(initialTrophies);
        return initialTrophies;
    }
    addTrophyById(id) {
        let newTrophyList = this.getTrophyList();
        if (newTrophyList[id] < 6) {
            newTrophyList[id]++;
        }
        this.setTrophyList(newTrophyList);
    }
};
TrophyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], TrophyService);



/***/ }),

/***/ "./src/app/utils/fightersIdList.ts":
/*!*****************************************!*\
  !*** ./src/app/utils/fightersIdList.ts ***!
  \*****************************************/
/*! exports provided: fightersIdList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fightersIdList", function() { return fightersIdList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const fightersIdList = [
    3,
    6,
    9,
    12,
    18,
    31,
    34,
    38,
    45,
    65,
    68,
    76,
    82,
    91,
    94,
    130,
    131,
    142,
    144,
    145,
    146,
    149,
    150,
    151
];


/***/ }),

/***/ "./src/app/utils/movesIdList.ts":
/*!**************************************!*\
  !*** ./src/app/utils/movesIdList.ts ***!
  \**************************************/
/*! exports provided: movesIdList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movesIdList", function() { return movesIdList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const movesIdList = [
    {
        pokemonId: 3,
        movesId: [412, 188, 89, 36]
        // energy ball - 90 - GRASS
        // sludge bomb - 90 - POISON
        // earthquake - 100 - GROUND
        // take down - 90 - NORMAL
    },
    {
        pokemonId: 6,
        movesId: [53, 211, 337, 403]
        // flamethrower - 90 - FIRE
        // steel wing - 70 - STEEL
        // dragon claw - 80 - DRAGON
        // air slash - 75 - FLYING
    },
    {
        pokemonId: 9,
        movesId: [57, 89, 58, 399]
        // surf - 90 - WATER
        // earthquake - 100 - GROUND
        // ice beam - 90 - ICE
        // dark pulse - 80 - DARK
    },
    {
        pokemonId: 12,
        movesId: [403, 94, 405, 247]
        // air slash - 75 - FLYING
        // psychic - 90 - PSYCHIC
        // bug buzz - 90 - BUG
        // shadow ball - 80 - GHOST
    },
    {
        pokemonId: 18,
        movesId: [403, 211, 36, 369]
        // air slash - 75 - FLYING
        // steel wing - 70 - STEEL
        // take down - 90 - NORMAL
        // u turn - 70 - BUG
    },
    {
        pokemonId: 31,
        movesId: [89, 188, 58, 280]
        // earthquake - 100 - GROUND
        // sludge bomb - 90 - POISON
        // ice beam - 90 - ICE
        // brick break - 75 - FIGHTING
    },
    {
        pokemonId: 34,
        movesId: [89, 188, 58, 280]
        // earthquake - 100 - GROUND
        // sludge bomb - 90 - POISON
        // ice beam - 90 - ICE
        // brick break - 75 - FIGHTING
    },
    {
        pokemonId: 38,
        movesId: [53, 399, 412, 326]
        // flamethrower - 90 - FIRE
        // dark pulse - 80 - DARK
        // energy ball - 90 - GRASS
        // extrasensory - 80 - PSYCHIC
    },
    {
        pokemonId: 45,
        movesId: [412, 605, 188, 36]
        // energy ball - 90 - GRASS
        // dazzling gleam - 80 - FAIRY
        // sludge bomb - 90 - POISON
        // take down - 90 - NORMAL
    },
    {
        pokemonId: 65,
        movesId: [94, 247, 412, 605]
        // psychic - 90 - PSYCHIC
        // shadow ball - 80 - GHOST
        // energy ball - 90 - GRASS
        // dazzling gleam - 80 - FAIRY
    },
    {
        pokemonId: 68,
        movesId: [280, 53, 89, 157]
        // brick break - 75 - FIGHTING
        // flamethrower - 90 - FIRE
        // earthquake - 100 - GROUND
        // rock slide - 75 - ROCK
    },
    {
        pokemonId: 76,
        movesId: [89, 157, 53, 36]
        // earthquake - 100 - GROUND
        // rock slide - 75 - ROCK
        // flamethrower - 90 - FIRE
        // take down - 90 - NORMAL
    },
    {
        pokemonId: 82,
        movesId: [85, 430, 36, 33]
        // thunderbolt - 90 - ELECTRIC
        // flash cannon - 80 - STEEL
        // take down - 90 - NORMAL
        // tackle - 40 - NORMAL
    },
    {
        pokemonId: 91,
        movesId: [58, 57, 398, 36]
        // ice beam - 90 - ICE
        // surf - 90 - WATER
        // poison jab - 80 - POISON
        // take down - 90 - NORMAL
    },
    {
        pokemonId: 94,
        movesId: [247, 85, 188, 280]
        // shadow ball - 80 - GHOST
        // thunderbolt - 90 - ELECTRIC
        // sludge bomb - 90 - POISON
        // brick break - 75 - FIGHTING
    },
    {
        pokemonId: 130,
        movesId: [57, 53, 89, 85]
        // surf - 90 - WATER
        // flamethrower - 90 - FIRE
        // earthquake - 100 - GROUND
        // thunderbolt - 90 - ELECTRIC
    },
    {
        pokemonId: 131,
        movesId: [58, 57, 85, 94]
        // ice beam - 90 - ICE
        // surf - 90 - WATER
        // thunderbolt - 90 - ELECTRIC
        // psychic - 90 - PSYCHIC
    },
    {
        pokemonId: 142,
        movesId: [157, 337, 53, 332]
        // rock slide - 75 - ROCK
        // dragon claw - 80 - DRAGON
        // flamethrower - 90 - FIRE
        // aerial ace - 60 - FLYING
    },
    {
        pokemonId: 144,
        movesId: [58, 332, 211, 369]
        // ice beam - 90 - ICE
        // aerial ace - 60 - FLYING
        // steel wing - 70 - STEEL
        // u turn - 70 - BUG
    },
    {
        pokemonId: 145,
        movesId: [85, 332, 211, 369]
        // thunderbolt - 90 - ELECTRIC
        // aerial ace - 60 - FLYING
        // steel wing - 70 - STEEL
        // u turn - 70 - BUG
    },
    {
        pokemonId: 146,
        movesId: [53, 332, 211, 369]
        // flamethrower - 90 - FIRE
        // aerial ace - 60 - FLYING
        // steel wing - 70 - STEEL
        // u turn - 70 - BUG
    },
    {
        pokemonId: 149,
        movesId: [337, 57, 85, 89]
        // dragon claw - 80 - DRAGON
        // surf - 90 - WATER
        // thunderbolt - 90 - ELECTRIC
        // earthquake - 100 - GROUND
    },
    {
        pokemonId: 150,
        movesId: [94, 247, 53, 85]
        // psychic - 90 - PSYCHIC
        // shadow ball - 80 - GHOST
        // flamethrower - 90 - FIRE
        // thunderbolt - 90 - ELECTRIC
    },
    {
        pokemonId: 151,
        movesId: [94, 58, 247, 89]
        // psychic - 90 - PSYCHIC
        // ice beam - 90 - ICE
        // shadow ball - 80 - GHOST
        // earthquake - 100 - GROUND
    }
];


/***/ }),

/***/ "./src/app/utils/typeEffectiveness.ts":
/*!********************************************!*\
  !*** ./src/app/utils/typeEffectiveness.ts ***!
  \********************************************/
/*! exports provided: typeEffectiveness */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeEffectiveness", function() { return typeEffectiveness; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const typeEffectiveness = {
    normal: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 0.5,
        ghost: 0,
        dragon: 1,
        dark: 1,
        steel: 0.5,
        fairy: 1
    },
    fire: {
        normal: 1,
        fire: 0.5,
        water: 0.5,
        electric: 1,
        grass: 2,
        ice: 2,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 2,
        rock: 0.5,
        ghost: 1,
        dragon: 0.5,
        dark: 1,
        steel: 2,
        fairy: 1
    },
    water: {
        normal: 1,
        fire: 2,
        water: 0.5,
        electric: 1,
        grass: 0.5,
        ice: 1,
        fighting: 1,
        poison: 1,
        ground: 2,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 2,
        ghost: 1,
        dragon: 0.5,
        dark: 1,
        steel: 1,
        fairy: 1
    },
    electric: {
        normal: 1,
        fire: 1,
        water: 2,
        electric: 0.5,
        grass: 0.5,
        ice: 1,
        fighting: 1,
        poison: 1,
        ground: 0,
        flying: 2,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 0.5,
        dark: 1,
        steel: 1,
        fairy: 1
    },
    grass: {
        normal: 1,
        fire: 0.5,
        water: 2,
        electric: 1,
        grass: 0.5,
        ice: 1,
        fighting: 1,
        poison: 0.5,
        ground: 2,
        flying: 0.5,
        psychic: 1,
        bug: 0.5,
        rock: 2,
        ghost: 1,
        dragon: 0.5,
        dark: 1,
        steel: 0.5,
        fairy: 1
    },
    ice: {
        normal: 1,
        fire: 0.5,
        water: 0.5,
        electric: 1,
        grass: 2,
        ice: 0.5,
        fighting: 1,
        poison: 1,
        ground: 2,
        flying: 2,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 2,
        dark: 1,
        steel: 0.5,
        fairy: 1
    },
    fighting: {
        normal: 2,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 2,
        fighting: 1,
        poison: 0.5,
        ground: 1,
        flying: 0.5,
        psychic: 0.5,
        bug: 0.5,
        rock: 2,
        ghost: 0,
        dragon: 1,
        dark: 2,
        steel: 2,
        fairy: 0.5
    },
    poison: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 2,
        ice: 1,
        fighting: 1,
        poison: 0.5,
        ground: 0.5,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 0.5,
        ghost: 0.5,
        dragon: 1,
        dark: 1,
        steel: 0,
        fairy: 2
    },
    ground: {
        normal: 1,
        fire: 2,
        water: 1,
        electric: 2,
        grass: 0.5,
        ice: 1,
        fighting: 1,
        poison: 2,
        ground: 1,
        flying: 0,
        psychic: 1,
        bug: 0.5,
        rock: 2,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 2,
        fairy: 1
    },
    flying: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 0.5,
        grass: 2,
        ice: 1,
        fighting: 2,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 2,
        rock: 0.5,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 0.5,
        fairy: 1
    },
    psychic: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 2,
        poison: 2,
        ground: 1,
        flying: 1,
        psychic: 0.5,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 1,
        dark: 0,
        steel: 0.5,
        fairy: 1
    },
    bug: {
        normal: 1,
        fire: 0.5,
        water: 1,
        electric: 1,
        grass: 2,
        ice: 1,
        fighting: 0.5,
        poison: 0.5,
        ground: 1,
        flying: 0.5,
        psychic: 2,
        bug: 1,
        rock: 1,
        ghost: 0.5,
        dragon: 1,
        dark: 2,
        steel: 0.5,
        fairy: 0.5
    },
    rock: {
        normal: 1,
        fire: 2,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 2,
        fighting: 0.5,
        poison: 1,
        ground: 0.5,
        flying: 2,
        psychic: 1,
        bug: 2,
        rock: 1,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 0.5,
        fairy: 1
    },
    ghost: {
        normal: 0,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 2,
        bug: 1,
        rock: 1,
        ghost: 2,
        dragon: 1,
        dark: 0.5,
        steel: 1,
        fairy: 1
    },
    dragon: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 2,
        dark: 1,
        steel: 0.5,
        fairy: 0
    },
    dark: {
        normal: 1,
        fire: 1,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 0.5,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 2,
        bug: 1,
        rock: 1,
        ghost: 2,
        dragon: 1,
        dark: 0.5,
        steel: 1,
        fairy: 0.5
    },
    steel: {
        normal: 1,
        fire: 0.5,
        water: 0.5,
        electric: 0.5,
        grass: 1,
        ice: 2,
        fighting: 1,
        poison: 1,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 2,
        ghost: 1,
        dragon: 1,
        dark: 1,
        steel: 0.5,
        fairy: 2
    },
    fairy: {
        normal: 1,
        fire: 0.5,
        water: 1,
        electric: 1,
        grass: 1,
        ice: 1,
        fighting: 2,
        poison: 0.5,
        ground: 1,
        flying: 1,
        psychic: 1,
        bug: 1,
        rock: 1,
        ghost: 1,
        dragon: 2,
        dark: 2,
        steel: 0.5,
        fairy: 1
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ctw00773\Documents\mrmauricio\pokemon-battle\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map