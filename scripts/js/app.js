(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    {
        "context": "You are a parent considering sending your child to Washington University Nursery School. You’ve learned that the curriculum is play-based and you want to know how learning is incorporated into a play-based context. You have some ideas about how language learning might happen, but are less sure about math.",
        "question": "Find some examples of how math learning is incorporated at Washington University Nursery School.",
        "tag": "math"
    },
    {
        "context": "You are investigating pre-school options for your 4 year old. Both you and your spouse work, so you need to fully understand what scheduling constraints each option involves. One of your schools of interest is the Washington University Nursery School.",
        "question": "When does school start and end each day? What is the longest period of time that your child can be there?",
        "tag": "school_day"
    },
    {
        "context": "You are investigating pre-school options for your 3.5 year old. You’ve been told that one of the hallmarks of a good program is teachers who have been there for a long time. You want your child to attend in the mornings only.",
        "question": "Which teachers would your child have and how long have they been at the school?",
        "tag": "teacher_tenure"
    },
    {
        "context": "You are starting to look at summer camp options and have heard good things about Washington University Nursery School for young children.",
        "question": "What are the daily camp hours? Are there any extended day opportunities?",
        "tag": "summer_camp"
    },
    {
        "context": "You are investigating pre-school options for your spirited 3 year old and want to understand their approach to discipline.",
        "question": "How do teachers at Washington University approach discipline?",
        "tag": "discipline"
    },
    {
        "context": "Your daughter is in the Teddy Bear class at Washington University Nursery School. She came home this week singing a song in Spanish about shapes, but you are pretty sure that she has some of the words wrong.",
        "question": "What are the correct lyrics?",
        "tag": "spanish_song"
    },
    {
        "context": "It is mid-December and you are thinking about things to do over your daughter's upcoming school break. She is 3 years old and attends the Washington University Nursery School and is in the Teddy Bear classroom. You are planning a trip to the library and want to check out some books that connect with something she is doing in school.",
        "question": "What are some potential book topics that relate to something that is going on in her classroom this week?",
        "tag": "books"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You want to accept the offer of admission.",
        "question": "Figure out what you need to do at this time to finalize your child’s place at the school.",
        "tag": "admission_2"
    },
    {
        "context": "You are a parent with a child who has just been accepted to attend as a full time student at the Washington University Nursery School. You need to pay one month of tuition as a deposit.",
        "question": "Find out how much one month of tuition is and whether or not it is possible to pay online.",
        "tag": "deposit"
    },
    {
        "context": "You are moving to St. Louis from Beijing and looking for a Pre-K program for your daughter, age 5. She is very close to her friends and you are worried that the move might be hard on her. She may need some extra support from her new teachers learning English, adapting to American culture, and making new friends.",
        "question": "How does the Washington University Nursery School staff approach providing extra help to students who need it?",
        "tag": "help"
    },
    {
        "context": "You are looking at Nursery Schools for your soon to be 3 year old. He has never been in school or daycare before and you are somewhat worried about the transition. You'd like to ensure that you'll be able to have strong communicationat his new school.",
        "question": "How does the Washington University Nursery School handle communicating with parents?",
        "tag": "communication"
    },
    {
        "context": "It’s mid-December and your son, age 4, came home all excited about science class. They learned a new word, but he can’t actually remember the word they learned about.",
        "question": "What was the topic of his recent science class?",
        "tag": "science"
    },
    {
        "context": "You are selecting a pre-school, but want to be sure that your daughter will be ready for kindergarten when it’s time.",
        "question": "How does the nursery school assess children’s knowledge, support their growth, and share the results with parents?",
        "tag": "parent_teacher_conference"
    },
    {
        "context": "You have recently accepted a position for your child for the coming school year at the Washington University Nursery School. Up to this point, your child has been at home and you are somewhat worried about the transition.",
        "question": "How does the nursery school support kids’ transitions into school?",
        "tag": "orientation"
    }
]

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.Data = exports.urlData = void 0;
console.log('data loaded.');
var urlParams = new URL(window.location.href).searchParams;
exports.urlData = {
    raw: urlParams.toString(),
    assignmentID: urlParams.get('assignmentId'),
    hitID: urlParams.get('hitId'),
    workerID: urlParams.get('workerId'),
    submitTo: urlParams.get('turkSubmitTo'),
};
var Data = /** @class */ (function () {
    function Data(rawMturkURLData) {
        this.logs = {};
        this.data = {};
        this.errors = [];
        this.urlData = rawMturkURLData;
    }
    Data.prototype.serialize = function () {
        return JSON.stringify(this);
    };
    return Data;
}());
exports.Data = Data;
exports.data = new Data(exports.urlData);
Object.assign(window, { data: exports.data });

},{}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryEvent = exports.ButtonEvent = exports.ClickEvent = exports.BaseTrackerEvent = void 0;
exports.objectToTrackerEvent = objectToTrackerEvent;
exports.isTrackerEvent = isTrackerEvent;
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
(0, console_wrapper_1.log)("event loaded.", 2 /* DebugLevelEnum.BASIC */);
function objectToTrackerEvent(obj, action) {
    obj.action = action;
    obj.time = (0, funcs_1.now)();
}
function isTrackerEvent(obj) {
    return obj.action !== undefined && obj.time !== undefined;
}
var BaseTrackerEvent = /** @class */ (function () {
    function BaseTrackerEvent(action, eventInitDict) {
        this.custEv = new CustomEvent(action, eventInitDict);
        this.action = action;
        this.time = (0, funcs_1.now)();
    }
    Object.defineProperty(BaseTrackerEvent.prototype, "detail", {
        get: function () {
            return this.custEv.detail;
        },
        enumerable: false,
        configurable: true
    });
    return BaseTrackerEvent;
}());
exports.BaseTrackerEvent = BaseTrackerEvent;
// tslint:disable-next-line: max-classes-per-file
var ClickEvent = /** @class */ (function (_super) {
    __extends(ClickEvent, _super);
    function ClickEvent(x, y, id, eventInitDict) {
        var _this = _super.call(this, "click" /* ActionEnum.CLICK */, eventInitDict) || this;
        _this.detail.x = x;
        _this.detail.y = y;
        _this.detail.id = id;
        return _this;
    }
    return ClickEvent;
}(BaseTrackerEvent));
exports.ClickEvent = ClickEvent;
// tslint:disable-next-line: max-classes-per-file
var ButtonEvent = /** @class */ (function (_super) {
    __extends(ButtonEvent, _super);
    function ButtonEvent(key, id, eventInitDict) {
        var _this = _super.call(this, "click" /* ActionEnum.CLICK */, eventInitDict) || this;
        _this.detail.key = key;
        _this.detail.id = id;
        return _this;
    }
    return ButtonEvent;
}(BaseTrackerEvent));
exports.ButtonEvent = ButtonEvent;
// tslint:disable-next-line: max-classes-per-file
var HistoryEvent = /** @class */ (function (_super) {
    __extends(HistoryEvent, _super);
    function HistoryEvent(url, extra, eventInitDict) {
        var _this = _super.call(this, "history" /* ActionEnum.HISTORY */, eventInitDict) || this;
        _this.detail.url = url;
        _this.detail.extra = extra;
        return _this;
    }
    return HistoryEvent;
}(BaseTrackerEvent));
exports.HistoryEvent = HistoryEvent;

},{"../utils/console_wrapper":16,"../utils/funcs":17}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventReceiver = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var event_1 = require("./event");
(0, console_wrapper_1.log)("receiver loaded.", 2 /* DebugLevelEnum.BASIC */);
var EventReceiver = /** @class */ (function () {
    function EventReceiver() {
        this.map = new Map();
        this.emitter = new EventTarget();
    }
    EventReceiver.prototype.register = function (eventType, callback) {
        this.emitter.addEventListener(eventType, function (event) {
            var trackEv = event
                .detail;
            if ((0, event_1.isTrackerEvent)(trackEv) && callback) {
                callback(trackEv);
            }
        });
        if (callback) {
            this.map.set(eventType, callback);
        }
    };
    EventReceiver.prototype.doEvent = function (event) {
        var callback = this.map.get("" + event.action);
        if (callback) {
            callback(event);
        }
    };
    return EventReceiver;
}());
exports.EventReceiver = EventReceiver;

},{"../utils/console_wrapper":16,"./event":3}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopBanner = void 0;
var router_1 = require("../router/router");
var console_wrapper_1 = require("../utils/console_wrapper");
var history_1 = require("./../router/history");
var document_1 = require("./document");
var elements_1 = require("./elements");
(0, console_wrapper_1.log)("banner loaded.", 2 /* DebugLevelEnum.BASIC */);
var TopBanner = /** @class */ (function () {
    function TopBanner() {
    }
    TopBanner.show = function () {
        TopBanner.showing = true;
        document_1.D.display(elements_1.Elements.ddUp, true);
        document_1.D.display(elements_1.Elements.ddDown, false);
        document_1.D.display(elements_1.Elements.ddContent, true);
    };
    TopBanner.hide = function () {
        TopBanner.showing = false;
        document_1.D.display(elements_1.Elements.ddDown, true);
        document_1.D.display(elements_1.Elements.ddUp, false);
        document_1.D.display(elements_1.Elements.ddContent, false);
    };
    TopBanner.doDisplayChange = function () {
        TopBanner.showing ? TopBanner.hide() : TopBanner.show();
    };
    TopBanner.setup = function () {
        document_1.D.addEventListener(elements_1.Elements.ddArrow, "click", TopBanner.doDisplayChange);
    };
    TopBanner.showing = true;
    return TopBanner;
}());
exports.TopBanner = TopBanner;
document_1.D.addEventListener("mturk-top-banner-back", "click", function (e) {
    if (history_1.History.canBackward()) {
        router_1.Router.loadWithPathPrefix(history_1.History.backward());
    }
    else {
        alert("There is no page history to go back for at this time!");
    }
});

},{"../router/router":14,"../utils/console_wrapper":16,"./../router/history":13,"./document":6,"./elements":7}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.D = void 0;
var console_wrapper_1 = require("./../utils/console_wrapper");
(0, console_wrapper_1.log)("document loaded.", 2 /* DebugLevelEnum.BASIC */);
var D = /** @class */ (function () {
    function D() {
    }
    D.elem = function (elem) {
        if (typeof elem === "string") {
            return D.id(elem);
        }
        else {
            return elem;
        }
    };
    D.display = function (elem, show) {
        elem = D.elem(elem);
        if (show) {
            elem.classList.remove("none");
            elem.classList.add("display");
        }
        else {
            elem.classList.remove("display");
            elem.classList.add("none");
        }
    };
    D.id = function (id) {
        var element = D.doc.getElementById(id);
        if (element === null) {
            throw new Error("Element was not found, id: <".concat(id, ">."));
        }
        else {
            return element;
        }
    };
    D.claz = function (claz) {
        return D.doc.getElementsByClassName(claz);
    };
    D.tag = function (tag) {
        return D.doc.getElementsByTagName(tag);
    };
    D.image = function (id, url) {
        (0, console_wrapper_1.error)(function () { return D.id(id).setAttribute("src", url); });
    };
    D.addEventListener = function (elem, type, listener) {
        elem = this.elem(elem);
        var wrapperFunc = function (e) {
            try {
                listener(e);
            }
            catch (err) {
                console.error(err);
            }
        };
        elem.addEventListener(type, wrapperFunc);
        return wrapperFunc;
    };
    D.each = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            apply(children[i]);
        }
    };
    D.eachRecur = function (elem, apply) {
        elem = this.elem(elem);
        var children = elem.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            apply(child);
            D.eachRecur(child, apply);
        }
    };
    D.create = function (tagName, options) {
        return document.createElement(tagName, options);
    };
    D.doc = document;
    return D;
}());
exports.D = D;

},{"./../utils/console_wrapper":16}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elements = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var document_1 = require("./document");
(0, console_wrapper_1.log)('element loaded.', 2 /* DebugLevelEnum.BASIC */);
/**
 * These are elements that are in every single project. Even if they are not used they should
 * be place in the project and display should be set to none. This simplifies configuration
 * and some common functions and allows less null checks to be performed overall. If the
 * element does not exist at run time an empty div with that id is created and its display
 * is set to none then appended to the body.
 */
/**
 * Attempts to get an element, if unsuccessful, creates div with id and appends to body.
 *
 * @param id - the id of the element to retrieve.
 */
function makeElemIfNotExist(id) {
    var elem;
    try {
        elem = document_1.D.id(id);
    }
    catch (err) {
        elem = document_1.D.create('div');
        elem.id = id;
        elem.style.display = 'none';
        document.body.append(elem);
    }
    return elem;
}
/**
 * Commonly accessed elements, allows for clearer dom manip on these elements.
 */
exports.Elements = {
    document: document_1.D.doc.documentElement,
    wrapper: makeElemIfNotExist('wrapper'),
    htmlLoc: makeElemIfNotExist('html-loc'),
    innerBody: makeElemIfNotExist('inner-body'),
    ddDown: makeElemIfNotExist('mturk-top-banner-drop-down-button'),
    ddUp: makeElemIfNotExist('mturk-top-banner-collapse-button'),
    ddContent: makeElemIfNotExist('mturk-top-banner-drop-down-content'),
    backButton: makeElemIfNotExist('mturk-top-banner-back'),
    ddArrow: makeElemIfNotExist('mturk-top-banner-arrow'),
    mtTopBannerText: makeElemIfNotExist('mturk-top-banner-text'),
    mtScenarioContext: makeElemIfNotExist('scenario_context'),
    mtScenarioQuestion: makeElemIfNotExist('scenario_question'),
    logFileInput: makeElemIfNotExist('mturk-top-banner-drop-down-content-log-file-input'),
    submitForm: makeElemIfNotExist('mturk-submit-form'),
    modal: makeElemIfNotExist('modal'),
};

},{"../utils/console_wrapper":16,"./document":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLoc = exports.ModeEnum = exports.AppEnum = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var elements_1 = require("./../dom/elements");
(0, console_wrapper_1.log)('html loc loaded.', 2 /* DebugLevelEnum.BASIC */);
var AppEnum;
(function (AppEnum) {
    AppEnum["INFORMATION_FORAGING"] = "information-foraging";
    AppEnum["COGNITIVE_LOAD"] = "cognitive-load";
    AppEnum["GENDER_MAG"] = "gender-mag";
    AppEnum["ERROR"] = "error";
})(AppEnum || (exports.AppEnum = AppEnum = {}));
var ModeEnum;
(function (ModeEnum) {
    ModeEnum["REAL"] = "real";
    ModeEnum["SANDBOX"] = "sandbox";
    ModeEnum["TEST"] = "test";
    ModeEnum["ERROR"] = "error";
})(ModeEnum || (exports.ModeEnum = ModeEnum = {}));
var HTMLLoc = /** @class */ (function () {
    function HTMLLoc() {
    }
    HTMLLoc.setup = function () {
        HTMLLoc.app = HTMLLoc.elem.dataset.app || AppEnum.ERROR;
        HTMLLoc.mode =
            HTMLLoc.elem.dataset.mode || ModeEnum.ERROR;
        HTMLLoc.scenario = HTMLLoc.elem.dataset.scenario || 'error';
    };
    HTMLLoc.elem = elements_1.Elements.htmlLoc;
    return HTMLLoc;
}());
exports.HTMLLoc = HTMLLoc;

},{"../utils/console_wrapper":16,"./../dom/elements":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
(0, console_wrapper_1.log)('modal loaded.', 2 /* DebugLevelEnum.BASIC */);
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.display = function (src) {
        Modal.elem.setAttribute('style', "left: ".concat(Math.round(window.pageXOffset), "px; top: ").concat(Math.round(window.pageYOffset), "px;"));
        Modal.elem.classList.replace('hide-modal', 'show-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = src;
        });
        document.body.classList.add('noscroll');
    };
    Modal.hide = function () {
        Modal.elem.classList.replace('show-modal', 'hide-modal');
        document_1.D.each(Modal.elem, function (node) {
            node.src = '';
        });
        document.body.classList.remove('noscroll');
    };
    Modal.elem = elements_1.Elements.modal;
    return Modal;
}());
exports.Modal = Modal;
document_1.D.addEventListener(Modal.elem, 'click', function (e) {
    Modal.hide();
});
document_1.D.each(Modal.elem, function (node) {
    document_1.D.addEventListener(node, 'click', function (e) {
        e.preventDefault();
    });
});

},{"./../utils/console_wrapper":16,"./document":6,"./elements":7}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scroll = void 0;
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("./../utils/funcs");
(0, console_wrapper_1.log)('scroll loaded.', 2 /* DebugLevelEnum.BASIC */);
/**
 * Linear implementation of scrolling.
 * Follows the singleton pattern, call do to start a scroll operation.
 *
 * If a scroll is called when another scroll has already begun an
 * error will be thrown, but the first scroll will continue until completion.
 */
var Scroll = /** @class */ (function () {
    function Scroll(endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            document.dispatchEvent(new CustomEvent('scroll'));
            complete(args);
        };
    }
    Scroll.callback = function (endPos, duration, complete) {
        if (duration === void 0) { duration = 200; }
        if (complete === void 0) { complete = funcs_1.noop; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        var oldComplete = complete;
        complete = function () {
            Scroll.running = false;
            (0, console_wrapper_1.error)(oldComplete);
        };
        this.instance.update(endPos, duration, complete).attemptScroll();
    };
    Scroll.promise = function (endPos, duration) {
        var _this = this;
        if (duration === void 0) { duration = 200; }
        if (Scroll.running) {
            throw new Error('Cannot make multiple calls to scroll at the same time.');
        }
        Scroll.running = true;
        return new Promise(function (resolve, reject) {
            try {
                var runResolver = function () {
                    Scroll.running = false;
                    resolve();
                };
                _this.instance
                    .update(endPos, duration, runResolver)
                    .attemptScroll();
            }
            catch (err) {
                Scroll.running = false;
                reject(err);
            }
        });
    };
    Object.defineProperty(Scroll, "isRunning", {
        get: function () {
            return Scroll.running;
        },
        enumerable: false,
        configurable: true
    });
    Scroll.prototype.update = function (endPos, duration, complete) {
        this.endPos = endPos;
        this.duration = duration;
        this.complete = complete;
        return this;
    };
    Scroll.prototype.calcScrollAmount = function () {
        var curTime = (0, funcs_1.now)();
        var steps = Math.max(1, (this.duration - curTime) / Scroll.STEP_IN_MS);
        var curPos = window.pageYOffset;
        return Math.ceil((this.endPos - curPos) / steps);
    };
    Scroll.prototype.scroll = function () {
        window.scroll(0, this.calcScrollAmount());
        if (window.pageYOffset === this.endPos) {
            this.complete();
        }
        else {
            requestAnimationFrame(this.scroll);
        }
    };
    Scroll.prototype.attemptScroll = function () {
        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, this.endPos);
        }
        this.scroll();
    };
    Scroll.STEP_IN_MS = 17;
    Scroll.running = false;
    Scroll.instance = new Scroll(0, 0, funcs_1.noop);
    return Scroll;
}());
exports.Scroll = Scroll;

},{"../utils/console_wrapper":16,"./../utils/funcs":17}],11:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitForm = void 0;
var funcs_1 = require("../utils/funcs");
var data_1 = require("./../data-log/data");
var console_wrapper_1 = require("./../utils/console_wrapper");
var document_1 = require("./document");
var elements_1 = require("./elements");
(0, console_wrapper_1.log)('submit form loaded.', 2 /* DebugLevelEnum.BASIC */);
var k = 'NcF2WRkUbf5tzj4bIvI981FqmS6pMlO83g2j7u5R';
var gate = 'https://2ykopq1oha.execute-api.us-east-1.amazonaws.com/PROD/logs';
var AllowSubmissionDefault = {
    allow: function () { return null; },
    preSubmit: funcs_1.noop,
};
var SubmitForm = /** @class */ (function () {
    function SubmitForm() {
    }
    SubmitForm.setup = function (allowSubmission) {
        var _this = this;
        if (allowSubmission === void 0) { allowSubmission = AllowSubmissionDefault; }
        SubmitForm.submitFunc = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var allowed, qp, queryString, urlParams, textArea;
            return __generator(this, function (_a) {
                event.preventDefault();
                allowed = allowSubmission.allow();
                if (allowed === null) {
                    qp = new URL(window.location.href).searchParams;
                    data_1.data.urlData.raw = window.location.href;
                    data_1.data.urlData.assignmentID = qp.get('assignmentId');
                    data_1.data.urlData.hitID = qp.get('hitId');
                    data_1.data.urlData.workerID = qp.get('workerId');
                    data_1.data.urlData.submitTo =
                        qp.get('turkSubmitTo') + '/mturk/externalSubmit';
                    if (data_1.data.urlData.assignmentID !== null) {
                        document_1.D.id('assignment-id').value =
                            data_1.data.urlData.assignmentID;
                    }
                    if (data_1.data.urlData.hitID !== null) {
                        document_1.D.id('hit-id').value =
                            data_1.data.urlData.hitID;
                    }
                    queryString = window.location.search;
                    urlParams = new URLSearchParams(queryString);
                    data_1.data.data.task = urlParams.get("tag");
                    textArea = document.getElementById("text-area");
                    data_1.data.data.response = textArea ? textArea.value : '';
                    console.log("\n\nDATA FOR TASK: " + data_1.data.data.task + "\n");
                    console.log(JSON.stringify(data_1.data));
                    alert("Open console to see user data. Please record into a text document.");
                    // (Elements.submitForm as HTMLFormElement).action = data.urlData
                    //     .submitTo as string;
                    // allowSubmission.preSubmit();
                    // const resp = await fetch(gate, {
                    //     method: 'POST',
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //         'x-api-key': k,
                    //     },
                    //     body: JSON.stringify({
                    //         sandbox: params.sandbox,
                    //         wustl_key: params.wustl_key,
                    //         project: params.project,
                    //         iteration: params.iteration,
                    //         tag: params.tag,
                    //         assignmentID: data.urlData.assignmentID,
                    //         hitID: data.urlData.hitID,
                    //         workerID: data.urlData.workerID,
                    //         log: data.serialize(),
                    //     }),
                    // }); // TODO: verify this actually works
                    // console.log(resp.status);
                    // console.log(await resp.json());
                    // if (resp.status !== 200) {
                    //     alert(
                    //         'You made a bad request with your submission. The server thinks that you made this error: ' +
                    //             (await resp.json()).error
                    //     );
                    //     return;
                    // }
                    // SubmitForm.elem.removeEventListener(
                    //     'submit',
                    //     SubmitForm.submitFunc
                    // );
                    // SubmitForm.elem.submit();
                }
                else {
                    alert(allowed);
                }
                return [2 /*return*/];
            });
        }); };
        SubmitForm.elem.addEventListener('submit', SubmitForm.submitFunc);
    };
    SubmitForm.elem = elements_1.Elements.submitForm;
    SubmitForm.allowSubmitDefault = { allow: function () { return true; }, preSubmit: funcs_1.noop };
    return SubmitForm;
}());
exports.SubmitForm = SubmitForm;

},{"../utils/funcs":17,"./../data-log/data":2,"./../utils/console_wrapper":16,"./document":6,"./elements":7}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackerElements = void 0;
var banner_1 = require("./banner");
var html_loc_1 = require("./html_loc");
var TrackerElements = /** @class */ (function () {
    function TrackerElements() {
    }
    TrackerElements.setupTrackerElements = function () {
        // setup dom elements
        banner_1.TopBanner.setup();
        html_loc_1.HTMLLoc.setup();
    };
    return TrackerElements;
}());
exports.TrackerElements = TrackerElements;

},{"./banner":5,"./html_loc":8}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
var tracker_1 = require("./../tracker/tracker");
function newHistoryEntry(currURL, hasPrevURL, prevEntry, extra) {
    tracker_1.Tracker.getEventDispatchFunc('history')({ url: currURL, extra: extra });
    return {
        currURL: currURL,
        hasPrevURL: hasPrevURL,
        prevEntry: prevEntry,
        extra: extra,
        nextEntries: [],
    };
}
var History = /** @class */ (function () {
    function History() {
    }
    History.forward = function (url, extra) {
        var histEnt = newHistoryEntry(url, true, History.currhistory, extra);
        History.currhistory.nextEntries.push(histEnt);
        History.currhistory = histEnt;
        return url;
    };
    History.canBackward = function () {
        var _a, _b;
        return (History.currhistory.hasPrevURL &&
            !((_b = (_a = History.currhistory.prevEntry) === null || _a === void 0 ? void 0 : _a.extra) === null || _b === void 0 ? void 0 : _b.wrapper));
    };
    History.backward = function () {
        if (!History.canBackward()) {
            throw new Error('Cannot go back any further.');
        }
        console.log(History.currhistory.prevEntry);
        var prevEntry = History.currhistory.prevEntry;
        var nextURL = prevEntry.currURL;
        var histEnt = newHistoryEntry(nextURL, prevEntry.hasPrevURL, prevEntry.prevEntry, { back: true });
        History.currhistory = histEnt;
        return nextURL;
    };
    History.setup = function (url, extra) {
        History.firstHistory = newHistoryEntry(url, false, undefined, extra);
        History.currhistory = History.firstHistory;
    };
    return History;
}());
exports.History = History;
window.h = History;

},{"./../tracker/tracker":15}],14:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var document_1 = require("../dom/document");
var elements_1 = require("../dom/elements");
var modal_1 = require("../dom/modal");
var console_wrapper_1 = require("../utils/console_wrapper");
var funcs_1 = require("../utils/funcs");
var html_loader_1 = require("../utils/html_loader");
var history_1 = require("./history");
(0, console_wrapper_1.log)('router loaded.', 2 /* DebugLevelEnum.BASIC */);
function testOn(elem, config) {
    return (elem.tagName === config.module &&
        (config.mode === 1 /* RouterMode.ON */ ||
            config.mode === 2 /* RouterMode.STANDARD_ALLOWANCES */));
}
function testAllowance(config) {
    return config.mode === 2 /* RouterMode.STANDARD_ALLOWANCES */;
}
var Router = /** @class */ (function () {
    function Router() {
    }
    Router.configure = function (configs, pathPrefix) {
        configs.forEach(function (config) {
            Router.configs.set(config.module, Router.upgradeConfig(config));
        });
        Router.pathPrefix = pathPrefix;
    };
    Router.setup = function (elem) {
        document_1.D.eachRecur(elem, function (node) {
            var e_1, _a;
            try {
                for (var _b = __values(Router.configs.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var config = _c.value;
                    if (testOn(node, config)) {
                        config.setup(config, node);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    Router.STANDARD_LINK_LISTENER = function (e) {
        return (0, console_wrapper_1.error)(function () {
            e.preventDefault();
            var target = e.target;
            var url = target.href;
            history_1.History.forward(Router.getPathName(url));
            var ret = html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc);
            window.dispatchEvent(new CustomEvent('newPageLoad'));
            return ret;
        });
    };
    Router.ON_COMPLETE_SLL = function (post) {
        var _this = this;
        return function (e) {
            (0, console_wrapper_1.error)(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Router.STANDARD_LINK_LISTENER(e)];
                        case 1:
                            _a.sent();
                            post(e);
                            return [2 /*return*/];
                    }
                });
            }); });
        };
    };
    Router.IMAGE_LINK_LISTENER = function (e) {
        return (0, console_wrapper_1.error)(function () {
            e.preventDefault();
        });
    };
    Router.FORM_OFF_LISTENER = function (e) {
        e.preventDefault();
        console.error('All forms except for the one in the top header are inactive.');
    };
    Router.defaultAllowancesOn = function () {
        Router.registerAllowance({ regex: Router.EMPTY, func: Router.EMPTY_RESPONDER }, { regex: Router.HASH_TAGS, func: Router.HASH_TAG_RESPONDER }, { regex: Router.AT_SYMBOL, func: Router.AT_SYMBOL_RESPONDER });
    };
    Router.defaultAllowancesOff = function () {
        Router.unregisterAllowance(Router.EMPTY, Router.HASH_TAGS, Router.AT_SYMBOL);
    };
    Router.registerAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) {
            return Router.linkAllowances.set(regex.regex, regex.func);
        });
    };
    Router.unregisterAllowance = function () {
        var regexs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            regexs[_i] = arguments[_i];
        }
        regexs.forEach(function (regex) { return Router.linkAllowances.delete(regex); });
    };
    Router.clearAllowances = function () {
        Router.linkAllowances.clear();
    };
    Router.load = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        history_1.History.forward(Router.getPathName(url));
                        return [4 /*yield*/, html_loader_1.HTMLLoader.loadURL(url, elements_1.Elements.htmlLoc)];
                    case 1:
                        ret = _a.sent();
                        window.dispatchEvent(new CustomEvent('newPageLoad'));
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Router.loadWithPathPrefix = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                ret = html_loader_1.HTMLLoader.loadURL(Router.pathPrefix + page, elements_1.Elements.htmlLoc);
                window.dispatchEvent(new CustomEvent('newPageLoad'));
                return [2 /*return*/, ret];
            });
        });
    };
    Router.upgradeConfig = function (config) {
        return {
            module: config.module,
            mode: config.mode,
            setup: Router.SetupFunctions[config.module],
        };
    };
    Router.getPathName = function (url) {
        var ret = Router.pathRegex.exec(url);
        return ret === null ? url : ret.length > 1 ? ret[1] : url;
    };
    Router.HASH_TAGS = new RegExp('#');
    Router.EMPTY = new RegExp('^$');
    Router.AT_SYMBOL = new RegExp('@');
    Router.HASH_TAG_RESPONDER = funcs_1.noop;
    Router.EMPTY_RESPONDER = function (event) { return event.preventDefault(); };
    Router.AT_SYMBOL_RESPONDER = function (event) {
        return event.preventDefault();
    };
    Router.pathPrefix = '';
    Router.SetupFunctions = {
        A: function (config, elem) {
            var aNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_1 = true;
                var href_1 = aNode.href;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = regex.test(href_1);
                    passesRegexTest_1 = passesRegexTest_1 && !test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_1) {
                    if (href_1.substr(href_1.length - 3) === 'pdf') {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            e.preventDefault();
                            modal_1.Modal.display(href_1);
                        });
                    }
                    else {
                        document_1.D.addEventListener(elem, 'click', function (e) {
                            return Router.STANDARD_LINK_LISTENER(e);
                        });
                    }
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.STANDARD_LINK_LISTENER(e);
                });
            }
        },
        IMG: function (config, elem) {
            var imgNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_2 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(imgNode.src);
                    passesRegexTest_2 = passesRegexTest_2 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_2) {
                    document_1.D.addEventListener(elem, 'click', function (e) {
                        return Router.IMAGE_LINK_LISTENER(e);
                    });
                }
            }
            else {
                document_1.D.addEventListener(elem, 'click', function (e) {
                    return Router.IMAGE_LINK_LISTENER(e);
                });
            }
        },
        FORM: function (config, elem) {
            var formNode = elem;
            if (testAllowance(config)) {
                var passesRegexTest_3 = true;
                Router.linkAllowances.forEach(function (func, regex) {
                    var test = !regex.test(formNode.src);
                    passesRegexTest_3 = passesRegexTest_3 && test;
                    if (test) {
                        document_1.D.addEventListener(elem, 'click', func);
                    }
                });
                if (passesRegexTest_3) {
                    document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
                }
            }
            else {
                document_1.D.addEventListener(elem, 'submit', Router.FORM_OFF_LISTENER);
            }
        },
    };
    Router.configs = new Map();
    Router.linkAllowances = new Map();
    Router.pathRegex = /\/([\w]+.html)/;
    return Router;
}());
exports.Router = Router;

},{"../dom/document":6,"../dom/elements":7,"../dom/modal":9,"../utils/console_wrapper":16,"../utils/funcs":17,"../utils/html_loader":18,"./history":13}],15:[function(require,module,exports){
"use strict";
var __read = (this && this.__read) || function (o, n) {
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
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracker = void 0;
var event_1 = require("../data-log/event");
var receiver_1 = require("../data-log/receiver");
var elements_1 = require("../dom/elements");
var tracker_elems_1 = require("../dom/tracker_elems");
var console_wrapper_1 = require("../utils/console_wrapper");
var data_1 = require("./../data-log/data");
var submit_form_1 = require("./../dom/submit_form");
(0, console_wrapper_1.log)('tracker loaded.', 2 /* DebugLevelEnum.BASIC */);
var Tracker = /** @class */ (function () {
    function Tracker() {
    }
    Tracker.loadScenario = function (scen) {
        var sub = scen.context;
        if (sub.length > 50) {
            sub = sub.substring(0, 50);
            var inds = [
                sub.lastIndexOf(' '),
                sub.lastIndexOf('.'),
                sub.lastIndexOf(','),
                sub.lastIndexOf('?'),
                sub.lastIndexOf('!'),
            ];
            var ind = Math.max.apply(Math, __spreadArray([], __read(inds), false));
            sub = sub.substring(0, ind) + '...';
        }
        console.log(scen);
        console.log('loaded scen');
        elements_1.Elements.mtTopBannerText.innerText = sub;
        elements_1.Elements.mtScenarioContext.innerText = scen.context;
        elements_1.Elements.mtScenarioQuestion.innerText = scen.question;
        elements_1.Elements.htmlLoc.dataset.task = scen.tag;
    };
    Tracker.start = function (config) {
        (0, console_wrapper_1.setDebugLevel)(config.debugLevel);
        // configure tracker specific elements
        tracker_elems_1.TrackerElements.setupTrackerElements();
        submit_form_1.SubmitForm.setup(config.allowSubmission);
        data_1.data.data.task = elements_1.Elements.htmlLoc.dataset.task;
        config.setup();
    };
    Tracker.registerEvent = function (eventType) {
        data_1.data.logs[eventType] = [];
        this.receiver.register(eventType, function (event) {
            data_1.data.logs[eventType].push(event);
        });
        return this.getEventDispatchFunc(eventType);
    };
    Tracker.getEventDispatchFunc = function (eventType) {
        var _this = this;
        return function (evData) {
            if (typeof evData === 'object') {
                if (!(0, event_1.isTrackerEvent)(evData)) {
                    (0, event_1.objectToTrackerEvent)(evData, eventType);
                }
                _this.receiver.doEvent(evData);
            }
        };
    };
    Tracker.attachData = function (key, attribute) {
        data_1.data.data[key] = attribute;
    };
    Tracker.computeAttribute = function (name, compute) {
        data_1.data.data[name] = compute(data_1.data.data[name]);
    };
    Tracker.lastPos = { x: 0, y: 0, time: 0 };
    Tracker.receiver = new receiver_1.EventReceiver();
    return Tracker;
}());
exports.Tracker = Tracker;

},{"../data-log/event":3,"../data-log/receiver":4,"../dom/elements":7,"../dom/tracker_elems":12,"../utils/console_wrapper":16,"./../data-log/data":2,"./../dom/submit_form":11}],16:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = error;
exports.errorHO = errorHO;
exports.setDebugLevel = setDebugLevel;
exports.log = log;
var data_1 = require("./../data-log/data");
log("console wrapper loaded.", 2 /* DebugLevelEnum.BASIC */);
function error(func) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, errorHO(func)()];
        });
    });
}
function errorHO(func) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, func(args)];
                }
                catch (error) {
                    data_1.data.errors.push(error);
                    console.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
}
var debugLevel = 2 /* DebugLevelEnum.BASIC */;
function setDebugLevel(level) {
    debugLevel = level;
}
function log(message, importance) {
    if (debugLevel >= importance) {
        console.log(message);
    }
}

},{"./../data-log/data":2}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = noop;
exports.now = now;
var console_wrapper_1 = require("./console_wrapper");
(0, console_wrapper_1.log)("funcs loaded.", 2 /* DebugLevelEnum.BASIC */);
// tslint:disable-next-line: no-empty
function noop() { }
function now() {
    return new Date().getTime();
}

},{"./console_wrapper":16}],18:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLLoader = void 0;
var document_1 = require("../dom/document");
var console_wrapper_1 = require("./console_wrapper");
var funcs_1 = require("./funcs");
(0, console_wrapper_1.log)('html loader loaded.', 2 /* DebugLevelEnum.BASIC */);
var HTMLLoader = /** @class */ (function () {
    function HTMLLoader() {
    }
    HTMLLoader.finish = function () {
        HTMLLoader.finished = true;
        HTMLLoader.flattenTSLoadTags();
    };
    HTMLLoader.isFinished = function () {
        return HTMLLoader.finished;
    };
    HTMLLoader.cacheHTML = function (name, content) {
        if (HTMLLoader.finished) {
            throw new Error('Cannot cache new HTML entities after the application has been started.');
        }
        var tsl = document.createElement('ts-load');
        tsl.dataset.name = name;
        tsl.innerHTML = content;
        this.CACHE[name] = tsl;
    };
    HTMLLoader.registerPostLoadFunc = function (func) {
        (0, console_wrapper_1.log)('regsiter post load function', 3 /* DebugLevelEnum.DETAILED */);
        HTMLLoader.postLoadFunc = func;
    };
    HTMLLoader.load = function (html, elem) {
        return new Promise(function (resolve, reject) {
            try {
                (0, console_wrapper_1.log)('begin load', 3 /* DebugLevelEnum.DETAILED */);
                var context = document_1.D.elem(elem);
                var range = document.createRange();
                range.selectNodeContents(context);
                var frag = range.createContextualFragment(html);
                HTMLLoader.removeTagsFromDocumentFragment(frag, 'script');
                HTMLLoader.loadAllCachedElements(frag);
                context.innerHTML = '';
                context.appendChild(frag);
                (0, console_wrapper_1.log)('end load', 3 /* DebugLevelEnum.DETAILED */);
                HTMLLoader.postLoadFunc();
                resolve(true);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.loadURL = function (url, elem) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = HTMLLoader).load;
                        return [4 /*yield*/, HTMLLoader.getHTML(url)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent(), elem])];
                }
            });
        });
    };
    HTMLLoader.getHTML = function (url) {
        return new Promise(function (resolve, reject) {
            try {
                (0, console_wrapper_1.log)('begin request', 3 /* DebugLevelEnum.DETAILED */);
                var request_1 = new XMLHttpRequest();
                request_1.open('GET', url, true);
                request_1.send(null);
                request_1.onreadystatechange = function () {
                    if (request_1.readyState === 4) {
                        (0, console_wrapper_1.log)('resolve request', 3 /* DebugLevelEnum.DETAILED */);
                        resolve(request_1.responseText);
                    }
                };
            }
            catch (err) {
                reject(err);
            }
        });
    };
    HTMLLoader.removeTagsFromDocumentFragment = function (frag, tagName) {
        frag.querySelectorAll(tagName).forEach(function (tag) { return frag.removeChild(tag); });
    };
    HTMLLoader.flattenTSLoadTags = function () {
        (0, console_wrapper_1.log)('Flattening', 3 /* DebugLevelEnum.DETAILED */);
        var s = new Set();
        Object.keys(HTMLLoader.CACHE).forEach(function (name) {
            return (HTMLLoader.CACHE[name] = HTMLLoader.flattenTSLoadTag(HTMLLoader.getCachedContent(name), s, 0));
        });
    };
    HTMLLoader.multipleTabs = function (n) {
        var ret = '';
        for (var i = 0; i < n; i++) {
            ret += '\t';
        }
        return ret;
    };
    HTMLLoader.flattenTSLoadTag = function (elem, flattened, count) {
        var tabs = HTMLLoader.multipleTabs(count);
        if (count > 100) {
            alert('Check the console, an error has occurred.');
            throw new Error('It seems like you might have infinitely recursively nested tags.' +
                '\nHere are all of the tags that have been flattened so far: ' +
                flattened +
                '\nHere is the name of the current element: ' +
                elem.getAttribute('data-name'));
        }
        var name = elem.getAttribute('data-name');
        if (name === null) {
            return null;
        }
        var content = HTMLLoader.getCachedContent(name);
        if (content === null) {
            return null;
        }
        if (flattened.has(name)) {
            return content;
        }
        content.querySelectorAll('script').forEach(function (e) { return e.remove(); });
        content.querySelectorAll('ts-load').forEach(function (e) {
            var child = HTMLLoader.flattenTSLoadTag(e, flattened, count + 1);
            if (child !== null) {
                e.replaceWith(child);
            }
        });
        flattened.add(name);
        return content;
    };
    HTMLLoader.getCachedContent = function (name) {
        if (name === undefined || name === null) {
            return null;
        }
        var content = HTMLLoader.CACHE[name];
        if (content === undefined || content === null) {
            return null;
        }
        return content.cloneNode(true);
    };
    HTMLLoader.loadAllCachedElements = function (frag) {
        frag.querySelectorAll('ts-load').forEach(function (elem) {
            var name = elem.getAttribute('data-name');
            var content = HTMLLoader.getCachedContent(name);
            if (content != null) {
                elem.replaceWith(content);
            }
        });
    };
    HTMLLoader.CACHE = {};
    HTMLLoader.finished = false;
    HTMLLoader.postLoadFunc = funcs_1.noop;
    return HTMLLoader;
}());
exports.HTMLLoader = HTMLLoader;

},{"../dom/document":6,"./console_wrapper":16,"./funcs":17}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDGenerator = void 0;
var elements_1 = require("../dom/elements");
var document_1 = require("./../dom/document");
var console_wrapper_1 = require("./console_wrapper");
(0, console_wrapper_1.log)("id generator loaded", 2 /* DebugLevelEnum.BASIC */);
var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    IDGenerator.reset = function () {
        IDGenerator.idCount = 0;
    };
    Object.defineProperty(IDGenerator, "next", {
        get: function () {
            IDGenerator.idCount += 1;
            return IDGenerator.prefix + IDGenerator.idCount;
        },
        enumerable: false,
        configurable: true
    });
    IDGenerator.applyID = function (elem) {
        elem.id = elem.id ? elem.id : IDGenerator.next;
    };
    /**
     * Recursively adds ids to all elements that are below the given
     * element in the heirarchy.
     *
     * @param elem - the element to start applying ids to its children.
     *                  Will not apply an id to this element.
     */
    IDGenerator.applyRecur = function (elem) {
        document_1.D.eachRecur(elem, this.applyID);
    };
    /**
     * Attaches ids to all html elements in the target location in the DOM that do not have ids.
     */
    IDGenerator.attachIdsToAllElements = function () {
        IDGenerator.applyRecur(elements_1.Elements.htmlLoc);
    };
    IDGenerator.idCount = 0;
    IDGenerator.prefix = "auto_gen_id_unq_";
    return IDGenerator;
}());
exports.IDGenerator = IDGenerator;

},{"../dom/elements":7,"./../dom/document":6,"./console_wrapper":16}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = void 0;
var qParams = new URL(window.location.href).searchParams;
exports.params = {
    wustl_key: '',
    sandbox: false,
    project: '',
    iteration: 0,
    tag: '',
};
try {
    qParams.forEach(console.log);
    if (['wustl_key', 'sandbox', 'project', 'iteration', 'tag'].every(function (key) {
        console.log('key: ' + qParams.has(key));
        return qParams.has(key);
    })) {
        exports.params.wustl_key = qParams.get('wustl_key');
        exports.params.sandbox = qParams.get('sandbox') === 'true';
        exports.params.project = qParams.get('project');
        exports.params.iteration = parseInt(qParams.get('iteration'), 10);
        exports.params.tag = qParams.get('tag');
    }
    else {
        console.log('missing query params');
        alert('This HIT is missing neccessary metadata, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
    }
}
catch (e) {
    console.log(e);
    alert(e);
    alert('This HIT is broken, sorry for the inconvenience. Please contact the Requester as this is not intended to happen.');
}

},{}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReady = isReady;
exports.waitUntilReady = waitUntilReady;
var console_wrapper_1 = require("./console_wrapper");
(0, console_wrapper_1.log)("ready loaded", 2 /* DebugLevelEnum.BASIC */);
var ready = false;
var resolveFunc;
var rejectFunc;
var readyPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
});
document.addEventListener("DOMContentLoaded", function () {
    (0, console_wrapper_1.log)("document is ready", 3 /* DebugLevelEnum.DETAILED */);
    ready = true;
    resolveFunc(true);
});
function isReady() {
    return ready;
}
function waitUntilReady() {
    return ready ? Promise.resolve(true) : readyPromise;
}

},{"./console_wrapper":16}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scenarios = void 0;
// tslint:disable-next-line: no-var-requires
exports.scenarios = require('./../../../../scenarios/scenarios.json');
window.scenarios = exports.scenarios;

},{"./../../../../scenarios/scenarios.json":1}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
var document_1 = require("./../core/dom/document");
var Accordion = /** @class */ (function () {
    function Accordion(outer) {
        var _this = this;
        this.outer = outer;
        document_1.D.addEventListener(outer, "click", function () {
            /* Toggle between adding and removing the "active" class,
                      to highlight the button that controls the panel */
            _this.outer.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var panel = _this.outer.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            }
            else {
                panel.style.display = "block";
            }
        });
    }
    Accordion.setupAll = function () {
        Accordion.discardAll();
        var accordions = document_1.D.claz("accordion");
        for (var accIndex = 0; accIndex < accordions.length; ++accIndex) {
            var elem = accordions.item(accIndex);
            if (elem == null) {
                continue;
            }
            Accordion.accordions.push(new Accordion(elem));
        }
    };
    Accordion.discardAll = function () {
        Accordion.accordions = [];
    };
    Accordion.accordions = [];
    return Accordion;
}());
exports.Accordion = Accordion;

},{"./../core/dom/document":6}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomething = doSomething;
function doSomething() {
    console.log("Put some code in here!");
}

},{}],25:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutStudentPageLoadOperationsInsideThisStudentBody = PutStudentPageLoadOperationsInsideThisStudentBody;
exports.setupAll = setupAll;
var html_loader_1 = require("../core/utils/html_loader");
var accordion_1 = require("./accordion");
var do_something_1 = require("./do-something");
var html_imports_1 = require("./html-imports");
var slideshow_1 = require("./slideshow");
// Put all function calls that need to be made on every page load inside the setupAll function body.
function PutStudentPageLoadOperationsInsideThisStudentBody() {
    // TODO: Put all operations that you want to happen on ever page load in this function.
    // For example you could write: Sticky.setup()
    (0, do_something_1.doSomething)();
}
function setupAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 100); })];
                case 1:
                    _a.sent();
                    console.log('reloading');
                    slideshow_1.Slideshow.setupAll();
                    accordion_1.Accordion.setupAll();
                    PutStudentPageLoadOperationsInsideThisStudentBody();
                    console.log('reloaded');
                    return [2 /*return*/];
            }
        });
    });
}
html_imports_1.itemsToCache.forEach(function (item) {
    html_loader_1.HTMLLoader.cacheHTML(item.name, item.content);
});
window.HTMLLoader = html_loader_1.HTMLLoader;
console.log('dynamic-dom loaded');
// Do not touch this line, needed to reinitialize code in the dynamic-dom.ts setupAll function
window.addEventListener('newPageLoad', function () { return setupAll(); });

},{"../core/utils/html_loader":18,"./accordion":23,"./do-something":24,"./html-imports":26,"./slideshow":29}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsToCache = void 0;
// An HTMLContent object should look like the following:
// {
//     name: 'footer',
//     content: require('./html/footer.html'),
// }
// Then you can reference that content in your html using the following tag with the corresponding name attribute.
// <ts-load data-name="header"></ts-load>
// You can specify as many as you want inside of the array and they will all be bundled up with your website.
// Make sure to make a corresponding html file in the html file folder for each element you specify.
exports.itemsToCache = [
    // Feel free to change the content inside any of the html files in the html file folder to suit your needs.
    {
        name: 'header',
        content: require('./html/header.html'),
    },
    {
        name: 'footer',
        content: require('./html/footer.html'),
    },
    // Put more items in the array below here.
];

},{"./html/footer.html":27,"./html/header.html":28}],27:[function(require,module,exports){
module.exports = "<footer id=\"colophon\" class=\"footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"footer-widgets\">\n      <aside class=\"widget site-contact\">\n        <h2 class=\"footer-widget-title\">Nursery School</h2>\n        <p>6926 Forest Park Parkway</p>\n        <p>St. Louis, MO 63130</p>\n        <p class=\"phone\">314-935-6689 <span>|</span> Fax: 314-935-7249</p>\n        <p>\n          <a href=\"files/mailto:nursery@wustl.edu\">nursery@wustl.edu</a>\n        </p>\n      </aside>\n\n      <div class=\"widget-wrapper\">\n        <aside id=\"text-4\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Hours of Operation</h2>\n          <div class=\"textwidget\">\n            <p>\n              Classes meet Mon. through Fri.<br>\n              Morning: 9-11:45 a.m.<br>\n              Afternoon: 12:30-3:15 p.m.<br>\n              Full day: 9 a.m.-3:15 p.m.\n            </p>\n          </div>\n        </aside>\n        <aside id=\"text-3\" class=\"widget widget_text widget-count-2\">\n          <h2 class=\"footer-widget-title\">Apply for the Nursery School</h2>\n          <div class=\"textwidget\">\n            <p>\n              Experience the innovative approach and dynamic teaching\n              environment of the Washington University Nursery School.\n            </p>\n            <a href=\"files/apply.html\">Register Now</a>\n          </div>\n        </aside>\n      </div>\n    </div>\n    <div class=\"site-info\">\n      <p class=\"footer-copyright\">©2019 Washington University in St. Louis</p>\n    </div>\n  </div>\n</footer>";

},{}],28:[function(require,module,exports){
module.exports = "<div id=\"wustl-branding\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"321\" height=\"28\" viewBox=\"0 0 321 28\" class=\"washu-logo\"\n    aria-labelledby=\"title\">\n    <title id=\"title\">Washington University in St. Louis</title>\n    <path fill=\"#FFF\"\n      d=\"M10.46 1.76c-.09 0-4.41.04-10.46-1.21V18c0 .27.01.47.01.47v.02c.04.81.28 1.45.77 2 .32.34.76.7 1.38 1.05.17.1.35.18.55.28.15.07.31.14.47.2.14.06.55.24.69.29l6.59 2.5 6.59-2.5c.15-.05.56-.24.69-.29.16-.07.32-.14.47-.2.19-.1.38-.18.55-.28.62-.35 1.06-.7 1.38-1.05.48-.55.73-1.19.77-2v-.02s0-.19.01-.47V.55C14.86 1.8 10.55 1.76 10.46 1.76z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M10.46 2.8c-.09 0-4.03.04-9.56-1.1v15.95c0 .25.01.43.01.44v.02c.04.74.25 1.33.7 1.83.29.31.7.64 1.26.95.15.09.32.17.5.26.14.07.28.13.44.19.12.05.5.22.63.27l6.03 2.29 6.03-2.29c.13-.05.51-.22.63-.27.15-.06.3-.13.44-.19.18-.09.35-.17.5-.26.56-.31.97-.64 1.26-.95.44-.5.66-1.09.7-1.83v-.02s0-.18.01-.44V1.7c-5.55 1.14-9.5 1.1-9.58 1.1z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M10.46 3.75c-.08 0-3.68.04-8.74-1.02v4.08c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V2.73c-5.06 1.05-8.66 1.02-8.74 1.02z\">\n    </path>\n    <path fill=\"#A51417\"\n      d=\"M10.46 7.83c-.08 0-3.68.04-8.74-1.02v9.05c5.05 1.05 8.67 1.02 8.74 1.02s3.68.04 8.74-1.02V6.82c-5.06 1.04-8.66 1.01-8.74 1.01z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M1.72 17.72c.03.69.23 1.23.64 1.68.26.28.64.58 1.15.87.15.08.29.15.46.23.13.06.26.12.4.17.11.05.46.2.58.24L10.46 23l5.51-2.09c.12-.04.46-.2.58-.24.14-.06.27-.12.4-.17.16-.08.32-.15.46-.23.51-.29.88-.58 1.15-.87.41-.46.6-1 .64-1.68v-.02s0-.16.01-.4v-1.44c-5.05 1.05-8.67 1.02-8.74 1.02s-3.68.04-8.74-1.02v1.45c-.02.25-.01.41-.01.41z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M4.8 3.69l.41 1.23 1.29.01-1.04.77.39 1.24-1.05-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm11.31 0l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.05.76.39-1.24-1.04-.77 1.29-.01.41-1.23zm-5.65.48l.42 1.23 1.29.01-1.04.77.39 1.24-1.06-.76-1.06.75.39-1.24-1.04-.77 1.3-.01.41-1.22zM10.46 17.21l-.46.45v1.22l.23.65v1.09h.45v-1.09l.23-.65v-1.22l-.45-.45zm.22 4.41v-.65h-.45v.65l-.23.42.46.56.46-.56-.24-.42zm.33-.65v.5l.29.31.51-.41v-.41h-.8zm.54-2.04l-.54.6v1.09h.44v-.65l.43-.46.55.36.35-.36v-.58h-1.23zm-1.64 2.04v.5l-.29.31-.52-.41v-.41h.81zm-.55-2.04l.54.6v1.09h-.43v-.65l-.43-.46-.55.36-.35-.36v-.58h1.22z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M14.62 9.27v5.19h-3.49l-.25.21-.43.37-.43-.37-.25-.21H6.29V9.27l-.74.54v5.38h4.12l.37.31.43.38.43-.38.37-.31h4.12V9.81l-.77-.54z\">\n    </path>\n    <path fill=\"#E1C4AC\"\n      d=\"M11.02 8.83l-.14.11-.43.38-.43-.38-.12-.11H7.03v4.89h2.88l.2.17.35.31.36-.31.19-.17h2.88V8.83h-2.87zM16.11 10.35v3.31c.95-.14 1.98-.31 3.08-.54V9.81a50.5 50.5 0 0 1-3.08.54zm-11.31 0c-.95-.14-1.98-.31-3.08-.54v3.31c1.1.23 2.14.41 3.08.54v-3.31z\">\n    </path>\n    <path fill=\"#007360\"\n      d=\"M16.11 16.76l-.31.32v.86l.15.46v.77h.31v-.77l.16-.46v-.86l-.31-.32zm.16 3.09v-.45h-.31v.46l-.15.3.31.4.32-.4-.17-.31zm.23-.45v.35l.2.22.36-.28v-.29h-.56zm.38-1.43l-.38.43v.77h.31v-.46l.3-.33.38.25.24-.25v-.41h-.85zm-1.14 1.43v.35l-.21.22-.35-.28v-.29h.56zm-.39-1.43l.39.43v.77h-.31v-.46l-.3-.33-.39.25-.24-.25v-.41h.85zM4.8 16.76l-.32.32v.86l.16.46v.77h.31v-.77l.15-.46v-.86l-.3-.32zm.16 3.09v-.45h-.31v.46l-.16.3.32.4.31-.4-.16-.31zm.22-.45v.35l.21.22.35-.28v-.29h-.56zm.39-1.43l-.39.43v.77h.31v-.46l.3-.33.39.25.24-.25v-.41h-.85zM4.42 19.4v.35l-.2.22-.36-.28v-.29h.56zm-.38-1.43l.38.43v.77h-.31v-.46l-.3-.33-.38.25-.24-.25v-.41h.85z\">\n    </path>\n    <g fill=\"#FFF\" class=\"washu-logo-text\">\n      <path\n        d=\"M232.47 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zm13.82 12.03v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.06 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 1.99 1.68v7.64c0 1.43-.7 1.55-1.21 1.68-.03 0-.06-.01-.1 0-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.29 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.31 0 1.15-.13 2.53-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06V13.1c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.45-.44-.68-.5-1.97.3-1.95-2.04zM48.91 2.4c.37-.05.55-.19.55-.19 0-.24-.05-.3-.39-.3-.65 0-1.05.11-1.69.11-.71 0-1.25-.08-1.85-.08-.34 0-.31.11-.31.3 0 .21.65.08 1.02.89.21.44.13 1.36-.08 1.9l-5.01 13.74-2.14-6.1-.83-2.23s-.13.06.46-1.79l1.17-3.52c.57-1.73 1.14-2.64 1.88-2.65.92-.02.92-.57.21-.57s-1.13.06-1.75.06c-.65 0-.99-.06-1.69-.06-.26 0-.55.08-.52.3.03.21.42.14.71.3.47.24.78 1.25.45 2.3l-1.38 4.42-1.58-4.13c-.31-.78-.73-2.52.03-2.67.73-.15.63-.52.18-.52-.86 0-1.32.11-2.15.11-.91 0-1.59-.11-2.45-.11-.18 0-.52.03-.42.38.05.21.49.14.76.3 1.05.68 1.25 1.55 1.62 2.52l2.3 6.48c.42 1.16.45.74.11 1.73l-2 5.5-4.95-14.11c-.39-1.06-.6-1.79.26-2.2.37-.19.47-.22.52-.3.05-.07.1-.32-.45-.3-.89.03-1.43.11-2.32.11-.94 0-1.59-.11-2.45-.11-.29 0-.34.14-.34.35 0 .33.71.11 1.31.81.34.38.99 1.66 1.14 2.12L32.8 22.3c.11.25.14.76.48.76.27 0 .33-.57.42-.79l3.13-8.59 3.05 8.16c.13.33.31 1.22.63 1.22.26 0 .36-.43.49-.83l5.9-16.87c.5-1.36 1.07-2.79 2.01-2.96zm65.46 6.71c-3.26 0-5.77 3.28-5.77 7.13 0 1.96.52 3.51 1.42 4.63-.31.21-.92.7-2.15.7-1.07 0-1.68-.64-1.74-2V11.2l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.51-.35-3.51-.36 0-.3.1-.63 1.17-.44 1.44-1.79 2.23-2.63 2.68-.38.09-.81.12-1.29.01-.74-.16-1.6-1.06-3.83-1.06-2.38 0-4.46 1.95-4.46 4.55 0 1.4.62 2.76 1.71 3.48-.2.12-1.53 1.24-1.37 2.56 0 0-.03 1.37 1.05 1.82-.33.14-.67.36-.96.63-.7-.26-1.72-.06-1.72-1.91V15.1c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-.73.99-2.91 1.55-.13.03-.43.1-.44.34 0 .65 1.75-.71 1.76 1.68v7.64c0 1.65-1.31 1.65-1.54 1.67-.1 0-.19 0-.31.01-.55-.05-1.51-.3-1.51-1.34V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.78-.86 2.01-1.43 2.03-.69-.09-1.22-.37-1.22-1.41v-5.14c0-2.65-1.01-6.07-4.33-6.07-1.47 0-2.75.81-3.73 1.92V2.41c0-.31-.15-.48-.31-.49-.4-.03-1.07 1.19-2.96 1.63-.13.03-.62.07-.62.25 0 .65 1.97-.31 1.99 1.69V20.6c0 1.51-1.3 1.31-1.53 1.79-.04.21.08.31.26.31.42 0 1.55-.12 2.35-.12s2.1.12 2.64.12c.31 0 .44-.06.44-.44-.27-.52-2.28.28-2.28-2.37v-6.5c0-1.57 1.87-2.78 3.03-2.78.91 0 3.14.71 3.14 4.53v5.64c0 1.11-1.18 1.23-1.27 1.57 0 .24.15.34.42.34.28 0 1.11-.12 2.12-.12.56 0 1.07.03 1.5.06.23.05.57.05.99.05.28 0 1-.11 1.82-.11s1.48.07 1.99.11c.1.01.2.01.3.01.04 0 .08.01.12.01h.01c.32.01.61 0 .74 0 .31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c0 2-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c.93 0 1.53.07 1.91.1-.29.42-.48.9-.51 1.4-.14 2.51 2.93 3.41 5.51 3.37 5.12-.07 6.57-3.62 5.51-5.51-1.09-1.95-3.44-1.87-5.68-1.86-4.2.02-3.41-2.59-1.69-2.49.4.02.2.14 1.57.14 2.43 0 4.76-1.66 4.7-4.38-.01-.23.05-1.03-.53-2.14 1.14.01.69 0 2.41 0l-.01 7.63c0 3.45 1.64 4.03 2.87 4.03 1.74 0 3.01-1.15 3.24-1.68 1.03 1.1 2.46 1.68 4.12 1.68 3.19 0 5.6-2.93 5.6-6.78 0-5.8-3.65-6.96-5.61-6.96zM95.62 21.72c.21-.01.27.08 2.64.17 2.45.06 3.33.77 3.49 1.4.26 1.12-.53 3.52-4.05 3.29-2.22-.15-2.87-1.2-3.03-1.44-.84-1.16-.16-3.35.95-3.42zm2.01-4.57c-2.08 0-2.78-2-2.78-3.91 0-1.96.59-3.58 2.67-3.58 2.11 0 2.95 2.16 2.95 4.07.01 1.93-.87 3.42-2.84 3.42zm16.99 4.81c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41z\">\n      </path>\n      <path\n        d=\"M131.11 20.19v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.26 0 .73-.2.44-.44-.65-.49-1.94.31-1.92-2.03zM77.41 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6.02.35.77 1.57 1.07 1.57zm-17.3 6.96c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.04 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.47 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 .51-.01.98-.01 1.38-.07.36-.2.7-.54.72-1.24.08-.94-1.9-.94-2.95v-6.43c-.06-1.97-1.54-3.25-3.8-3.25-3.09 0-5.31 3.81-4.25 5 .25.28 1.26-.8 1.32-.86s.08-.13.08-.13c-.01-1.3.97-2.95 2.37-3.09 1.6-.15 2.4 1.04 2.4 2.65v2.09c-6.06 1.21-6.93 3.22-6.93 4.87 0 2.21 1.55 3.2 3.23 3.2 1.45 0 2.88-.69 3.96-1.8.34 1.03 1.01 1.65 2.02 1.62.35-.01.41.09 1.46-.37.37-.1.35-.09.77-.01.56.19 1.32.57 2.66.57 2.03.03 3.85-1.85 3.85-4.17 0-1.5-.43-2.41-2.39-3.63zm-8.43 4.32c0 1.65-1.68 2.52-2.6 2.52-1.38 0-2.33-.89-2.33-2.66 0-2.73 3.28-3.23 4.94-3.67-.01-.01-.01 3.81-.01 3.81zm219.99.19c-.31 0-1.07 1.29-1.07 1.63 0 .34.77 1.6 1.07 1.6.33 0 1.07-1.23 1.07-1.6s-.73-1.63-1.07-1.63zm33.71 1.12V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.58.23-1.29.23-.13 0-.79-.12-.76.25.04.37 1.57.15 1.58 1.23v7.83c-.12 1.37-1.27 2.88-2.66 2.88-.32 0-2.39-.22-2.37-3.65V9.92c0-.61-.34-.77-.44-.77-.39 0-.61.1-.88.16-.27.1-.61.22-1.32.19-.38-.02-.79-.07-.73.29.06.32 1.59 0 1.59 1.23v7.51c0 2.74 1.61 4.32 3.56 4.32 1.3 0 2.49-.28 3.24-1.8h.05v1.32c0 .13.03.48.22.48.37 0 .56-.3.83-.4.29-.07.37-.33 1.28-.42.39-.04.82-.24.82-.5-.11-.53-1.4.06-1.4-.78zM290.09 9.11c-3.26 0-5.77 3.28-5.77 7.13 0 1.73.42 3.15 1.13 4.23-.79.57-2.23 1.1-4.96 1.1-2.13 0-1.93-.74-1.93-2.55V4.57c0-2.66 1.99-1.89 2.03-2.37.03-.34-.28-.26-.61-.26-.38 0-1.07.15-2.52.15-1.25 0-2.34-.12-2.88-.12-.33 0-.63.1-.52.35.25.57 2.14.05 2.14 1.65v15.1c0 1.44.21 2.36-.45 2.73-.81.49-1.76.51-1.68.83.05.19.45.2.68.2 1.02 0 2.42-.13 3.44-.15 1.94-.06 3.86.13 5.79.13 1.12 0 1.4-.22 2.22-1.33.01-.02.02-.03.04-.05 1.01.94 2.34 1.44 3.87 1.44 3.19 0 5.6-2.93 5.6-6.78.01-5.82-3.65-6.98-5.62-6.98zm.26 12.85c-3.03 0-4.22-3.76-4.22-6.82 0-2.65 1.04-5.1 3.57-5.1 3.08 0 4.19 3.29 4.19 6.51.01 3.87-1.36 5.41-3.54 5.41zm-32.03-10.49c-.75-.37-1.85-1.04-2.39-1.36-2.37-1.37-3.3-2.26-3.37-3.52-.12-2.21 2.04-3.52 3.58-3.35 1.96 0 3.57 1.19 4.24 3.73.07.27.31.89.56.89.22 0 .26-.2.24-.45l-.33-4.02c-.02-.33-.14-.42-.27-.42-.22 0-.36.33-.56.33-.31 0-1.1-1.11-3.8-1.09-.18-.01-.43.02-.43.02-2.63-.05-5.1 1.7-5.02 5.4.07 3.37 3.85 5.3 5.89 6.59 1.51.9 3.09 2.34 3.04 3.95-.08 2.47-1.63 4.08-3.58 3.94-4.59-.08-3.96-6.13-4.78-6.13-.56 0-.45 1.52-.46 2.32 0 1.92-.08 3.49.14 3.77.07.09.29.05.74.05.9 0 2 1.05 4.65 1.05 2.95.05 5.38-2.69 5.38-6.25-.01-2.19-.62-3.58-3.47-5.45zm51.69-3.31c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM312.64 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zm5.98-6.88c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.11-.74-2.55-.74-.11 0-.52-.01-.6-.01-.13 0-.28.01-.28.01-1.81-.03-3.5 1.11-3.44 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.61-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52-.01 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17-.01-1.48-.43-2.39-2.39-3.6zm-48.73 5.66c-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2v-8.82l3.38-.01c.22 0 .65-1.44.67-1.52.04-.18.1-.33.12-.46.04-.28-.17-.3-.37-.01-.15.15-.32.55-.99.55h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.23.75.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.34 3.28-1.8.03-.25 0-.28-.15-.26zm-81.32-1.09c-.57 0-1.42 1.62-3.66 1.62-1.58 0-4.17-1.53-4.17-6.66h6.9c.6 0 .88.03.88-.52 0-1.25-1.4-4.95-4.59-4.95-3.24 0-5.08 3.33-5.08 7.31 0 2.05 1.35 6.38 5.24 6.38 2.33 0 4.59-2.24 4.59-2.95-.01-.11-.01-.23-.11-.23zm-5.08-9.81c1.42 0 2.88 1.56 2.88 3.3 0 .46-.15.62-.52.62h-5.11c0-1.71 1.13-3.92 2.75-3.92zm-31.7-7.33c.1-.16-.25-.24-.37-.24-.42 0-1.37.11-1.8.11-.89 0-1.64-.09-2.53-.09-.07 0-.46.05-.46.18-.01.63 2.13-.11 2.13 2.6v10.57c0 3.13-.99 6.41-5.29 6.41-3.09 0-4.76-1.94-4.76-6.17V4.41c0-1.91 1.49-1.49 1.52-1.92.03-.41-1.33-.16-1.43-.16-.71 0-1.21.08-1.95.08-.62 0-1.37-.1-1.97-.1-.12 0-.53-.02-.61.15-.23.56 1.91.26 1.91 1.83v10.92c0 4.08 1.14 8.08 7.17 7.97 7.14-.12 7.01-6.54 7.01-7.83V5.12c.01-2.43 1.2-2.2 1.43-2.57zm28.19 7.24c.17-.2.22-.53-.57-.46-.45 0-.77.08-1.22.08-.57 0-.68-.02-1.22-.04-.68-.02-.86.05-.82.25.12.6 1.55.01 1.36 1.8-.16 1.5-.65 2.79-1.14 4.07l-1.73 4.62-2.54-7.7c-.31-.96-.45-1.47-.45-1.57 0-.96 1.16-.75 1.42-1.14.16-.26-.17-.4-.54-.4-.31 0-.67.11-1.63.13-.79.02-1.36.02-1.7-.05-.89-.16-.82.33-.51.48s.46.01.91 1.36l3.91 11.06c.08.22.18.77.52.77.39 0 .39-.39.88-1.69 0 0 3.75-10.48 4-10.86.51-.74.89-.5 1.07-.71zm14.47-.5c-1.07 0-1.8 1.28-2.33 2.16h-.05V9.53c0-.3-.15-.48-.3-.48-.41 0-.72.81-2.87 1.33-.13.03-.48.1-.48.28 0 .64 1.82-.19 1.82 1.93v8.07c0 1.25-1.29 1.12-1.29 1.77 0 .18.08.27.28.27.17 0 .63-.12 2.32-.12 1.41 0 2.02.12 2.37.12.28 0 .41-.06.41-.34 0-.98-2.25.48-2.25-2.34v-6.88c0-.4.6-1.8 1.64-1.8.91 0 1.02.7 1.5.7.3 0 .91-.91.91-1.38-.01-.58-1.16-1.37-1.68-1.37zm32.55.1c-.27 0-.96.04-1.59.04-.76 0-1.13-.09-1.45-.09-.48 0-.96 0-.87.32.1.36 1.73.23 1.73 2.01 0 .23 0 .52-.33 1.71l-2.08 6.63-2.9-8.15s-.14-.26-.14-.79c0-1.32 1.54-1.17 1.6-1.41.05-.19-.21-.4-.62-.4h-3.63c-.02 0-.03.01-.05.01h-2.81c0-2.41.03-3.04-.35-3.04-.36 0-.3.1-.63 1.17-.54 1.79-2.52 2.58-3.15 2.97-.15.08-.15.11-.15.19-.01.22.76.14 2.31.17l-.01 8.07c0 3.45 1.64 4.03 2.87 4.03 1.87 0 3.21-1.33 3.28-1.8 0-.27-.04-.29-.18-.27-.26.13-.85.77-2.28.77-1.07 0-1.68-.64-1.74-2V10.7s2.5-.01 3.21-.01c.04.06.08.13.1.19l2.99 8.45c.24.69.39.92.68 2.14.19.79.12 1.51.12 1.51-.29 1.27-1.07 1.99-2.26 4.34-.12.22 1.71-.02 1.81-.05.15-.05.13-.09.31-.42l1.32-3.93 3.69-11.34c.54-1.98 1.39-1.62 1.53-1.89.12-.13 0-.3-.33-.3z\">\n      </path>\n      <path\n        d=\"M222.22 22.76l-.07.19V23l.07-.24zm-14.74-14.6c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.76 1.57 1.07 1.57zM210.11 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04-.84-.01-.63.1-.63.36.03.31.53.33 1.37.34.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.33 0 .76-.8.07-.69zM166.52 8.16c.33 0 1.07-1.2 1.07-1.57 0-.36-.74-1.6-1.07-1.6-.3 0-1.07 1.26-1.07 1.6s.77 1.57 1.07 1.57zM169.17 22c-.52-.03-1.63-.23-1.63-1.35V9.59c0-.31-.15-.49-.31-.49-.6 0-.98 1.08-2.63 1.64-.13.03-.37.06-.37.24 0 .65 1.49-.61 1.42 1.69v7.27c.06 1.86-.96 2.04-1.52 2.04h-.17c-.54-.1-1.06-.32-1.05-1.79v-5.08c0-2.34-.76-5.76-4.22-5.76-2.51 0-3.81 2.38-3.76 2.01V9.59c0-.31-.15-.49-.31-.49-.6 0-1.04 1.01-3.07 1.62-.13.03-.5.04-.51.27 0 .65 2.03-.84 2 1.68v7.64c0 2-1.35 1.52-1.66 2.04-.15.27.25.33.59.33.31 0 .83-.13 2.2-.13 1.5 0 2.02.13 2.46.13.39 0 .83-.17.57-.44-.42-.41-2.28.06-2.28-2.06v-7.09c-.03-.49.88-2.4 3.06-2.4 2.1 0 3.03 2.31 3.03 3.85v5.76c-.03 2.27-.8 1.55-1.11 2-.17.25.13.37.46.37s.88-.13 1.87-.13c1.27 0 1.82.12 2.16.12.04 0 .09-.01.13-.01.11 0 .21.01.34.01.28 0 1-.11 1.82-.11 1.07 0 1.87.12 2.41.12.34.02.75-.78.08-.67zm32.72-6.89c-.51-.24-1.27-.68-1.65-.88-1.63-.89-2.27-1.47-2.31-2.3-.08-1.44 1.15-2.19 2.21-2.08 2.54-.05 2.88 2.8 3.14 2.8.39 0 .28-.37.28-1.21 0-.21.03-1.27-.13-1.52-.31-.46-2.1-.74-2.55-.74-.11 0-.52-.01-.6-.02-.13 0-.28.02-.28.02-1.81-.03-3.5 1.11-3.45 3.53.05 2.21 2.64 3.46 4.04 4.3 1.04.59 2.26 1.15 2.24 2.57-.02 1.62-1.27 2.68-2.61 2.6-3.15-.05-2.72-4-3.28-4-.39 0-.31 1-.31 1.52 0 1.25-.06 2.28.1 2.46.05.06.2.03.5.03.62 0 1.38.69 3.19.69 2.03.03 3.85-1.85 3.85-4.17 0-1.47-.42-2.38-2.38-3.6z\">\n      </path>\n    </g>\n  </svg>\n</div>\n<header role=\"banner\">\n  <div class=\"container\">\n    <a class=\"site-title\" href=\"files/index.html\">Nursery School</a>\n  </div>\n  <div id=\"main-menu-container\">\n    <div class=\"container\">\n      <div class=\"navbar\">\n        <!-- <a id=\"home\" href=\"files/index.html\">Homepage</a> -->\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"about\" href=\"files/about.html\">About WUNS</a>\n\n          </button>\n          <div class=\"dropdown-content\">\n            <!-- <a id=\"tuition\" href=\"files/tuition.html\">Tuition</a> -->\n            <a id=\"staff\" href=\"files/staff.html\">Staff</a>\n            <a id=\"curriculum\" href=\"files/curriculum_overview.html\">Curriculum Overview</a>\n            <!-- <a id=\"parent-handbook\" href=\"files/parent_handbook.html\">Parent Handbook</a> -->\n          </div>\n        </div>\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"classrooms\" href=\"files/classrooms.html\">Classrooms\n            </a>\n          </button>\n          <div class=\"dropdown-content\">\n            <!-- <a id=\"curriculum-overview\" href=\"files/curriculum_overview.html\">Curriculum Overview</a> -->\n            \n            <a id=\"class-schedule\" href=\"files/classroom_schedule.html\">All Class Schedules</a>\n            <a id=\"teddy-bears\" href=\"files/teddy_bears.html\">Teddy Bears: 2.5 to under 3 years (AM)</a>\n            <a id=\"panda-bears\" href=\"files/panda_bears.html\">Panda Bears: 2.5 to under 3 years (PM)</a>\n            <a id=\"bear-cubs\" href=\"files/bear_cubs.html\">Bear Cubs: 3 to under 4 years (AM Only) </a>\n            <a id=\"big-bears\" href=\"files/big_bears.html\">Big Bears: 4 to under 5 years (AM)</a>\n            <a id=\"sun-bears\" href=\"files/sun_bears.html\">Sun Bears: 4 to under 5 years (PM)</a>\n            <a id=\"bear-tracks\" href=\"files/bear_tracks.html\">Bear Tracks</a>\n            <!--<a id=\"enrichment-program\" href=\"files/enrichment_programs.html\">Classroom Learning Materials</a> -->\n          </div>\n        </div>\n\n       \n\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a href=\"files/parent_guidance.html\">Parent Guidance</a>\n      </button>\n      <div class=\"dropdown-content\">\n        <a href=\"files/tuition_apply.html\">Tuition</a>\n        <a href=\"files/parent_communication.html\">Parent-School Communication</a>\n        <a href=\"files/transition.html\">Transition and Extra Support</a>\n        <a href=\"files/disciplines.html\">Disciplines and Policies</a>\n        <a href=\"files/parent_guidance.html\">Parent Handbook</a>\n        </div>\n      </div>\n\n      <a id=\"summer-camp\" href=\"files/summer_camp.html\">Summer Camp</a>\n\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"apply\" href=\"files/new_student.html\">Admissions and Forms</a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a href=\"files/new_student.html\">New Student Admission</a>\n            <a href=\"files/returning_students.html\">Returning Students</a>\n          </div>\n        </div>\n\n       <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"calendar\" href=\"files/calendar.html\">Events</a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a href=\"files/special_events.html\">Special Events</a>\n          </div>\n        </div>  \n\n\n        <div class=\"dropdown\">\n          <button class=\"dropbtn\">\n            <a id=\"get-involved\" href=\"files/get_involved.html\">Merch</a>\n          </button>\n          <div class=\"dropdown-content\">\n            <a id=\"nursery-school-merchandise\" href=\"files/nursery_school_merchandise.html\">Nursery School\n              Merchandise</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>";

},{}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slideshow = void 0;
var document_1 = require("./../core/dom/document");
var Slideshow = /** @class */ (function () {
    function Slideshow(outer) {
        var _this = this;
        this.outer = outer;
        this.slideIndex = 0;
        this.slideCount = 0;
        this.slides = [];
        this.dots = [];
        document_1.D.eachRecur(this.outer, function (elem) {
            var cList = elem.classList;
            if (cList.contains("prev-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.minusSlide(1); });
            }
            else if (cList.contains("next-slideshow-button")) {
                document_1.D.addEventListener(elem, "click", function () { return _this.plusSlide(1); });
            }
            else if (cList.contains("slideshow-entry")) {
                _this.slides.push(elem);
            }
            else if (cList.contains("slideshow-dot")) {
                _this.dots.push(elem);
            }
        });
        var _loop_1 = function (i) {
            document_1.D.addEventListener(this_1.dots[i], "click", function () { return _this.showSlide(i); });
        };
        var this_1 = this;
        for (var i = 0; i < this.dots.length; ++i) {
            _loop_1(i);
        }
        this.slideCount = this.slides.length;
        this.showSlide(this.slideIndex);
    }
    Slideshow.setupAll = function () {
        Slideshow.discardAll();
        var slideshows = document_1.D.claz("slideshow");
        for (var ssIndex = 0; ssIndex < slideshows.length; ++ssIndex) {
            var elem = slideshows.item(ssIndex);
            if (elem == null) {
                continue;
            }
            Slideshow.slideshows.push(new Slideshow(elem));
        }
    };
    Slideshow.discardAll = function () {
        Slideshow.slideshows = [];
    };
    Slideshow.prototype.plusSlide = function (n) {
        this.showSlide((this.slideIndex += n));
    };
    Slideshow.prototype.minusSlide = function (n) {
        this.showSlide((this.slideIndex -= n));
    };
    Slideshow.prototype.showSlide = function (index) {
        this.slideIndex = index % this.slideCount;
        this.slideIndex = Math.max(this.slideIndex, -1 * this.slideIndex);
        for (var i = 0; i < this.slides.length; ++i) {
            this.slides[i].style.display = "none";
        }
        for (var i = 0; i < this.dots.length; i++) {
            this.dots[i].classList.remove("active");
        }
        this.slides[this.slideIndex].style.display = "block";
        this.dots[this.slideIndex].classList.add("active");
    };
    Slideshow.slideshows = [];
    return Slideshow;
}());
exports.Slideshow = Slideshow;

},{"./../core/dom/document":6}],30:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var q_params_1 = require("../core/utils/q_params");
var data_1 = require("./../core/data-log/data");
var document_1 = require("./../core/dom/document");
var elements_1 = require("./../core/dom/elements");
var scroll_1 = require("./../core/dom/scroll");
var history_1 = require("./../core/router/history");
var router_1 = require("./../core/router/router");
var tracker_1 = require("./../core/tracker/tracker");
var html_loader_1 = require("./../core/utils/html_loader");
var id_generator_1 = require("./../core/utils/id_generator");
var ready_1 = require("./../core/utils/ready");
var scenarios_1 = require("./../core/utils/scenarios");
var setup = function () { return __awaiter(void 0, void 0, void 0, function () {
    var scenario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, ready_1.waitUntilReady)()];
            case 1:
                _a.sent();
                scenario = scenarios_1.scenarios.find(function (scen) { return scen.tag === q_params_1.params.tag; });
                if (!q_params_1.params.sandbox) {
                    if (scenario === null || scenario === undefined) {
                        alert('This HIT is broken and cannot be completed at this time.');
                    }
                    else {
                        tracker_1.Tracker.loadScenario(scenario);
                    }
                }
                tracker_1.Tracker.start({
                    keyPrefix: 'information-foraging',
                    bucketName: 'cse-256-log',
                    allowSubmission: {
                        allow: function () {
                            try {
                                var textArea = document_1.D.id('text-area');
                                console.log(textArea.value);
                                if (textArea.value === '') {
                                    return 'You must fill out the text box to turn this HIT in.';
                                }
                                else {
                                    return null;
                                }
                            }
                            catch (error) {
                                console.log(error);
                                return 'There was an error fill out the form and try again.';
                            }
                        },
                        preSubmit: function () {
                            data_1.data.data.response = document_1.D.id('text-area').value;
                            return;
                        },
                    },
                    debugLevel: 1 /* DebugLevelEnum.NONE */,
                    setup: function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var sElem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        // configure router
                                        router_1.Router.defaultAllowancesOn();
                                        router_1.Router.configure([
                                            {
                                                mode: 2 /* RouterMode.STANDARD_ALLOWANCES */,
                                                module: "A" /* RouterModule.A */,
                                            },
                                            { mode: 0 /* RouterMode.OFF */, module: "FORM" /* RouterModule.FORM */ },
                                            {
                                                mode: 2 /* RouterMode.STANDARD_ALLOWANCES */,
                                                module: "IMG" /* RouterModule.IMG */,
                                            },
                                        ], 'files/');
                                        history_1.History.setup(window.location.href, { wrapper: true });
                                        // configure html loader post operation
                                        html_loader_1.HTMLLoader.finish();
                                        html_loader_1.HTMLLoader.registerPostLoadFunc(function () {
                                            id_generator_1.IDGenerator.reset();
                                            id_generator_1.IDGenerator.attachIdsToAllElements();
                                            router_1.Router.setup(elements_1.Elements.htmlLoc);
                                            scroll_1.Scroll.promise(0);
                                        });
                                        // configure listeners on html loc
                                        document_1.D.addEventListener(elements_1.Elements.htmlLoc, "click" /* ActionEnum.CLICK */, function (e) {
                                            var ev = e;
                                            var obj = {
                                                x: ev.clientX,
                                                y: ev.clientY,
                                                id: ev.target.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("click" /* ActionEnum.CLICK */)(obj);
                                        });
                                        document_1.D.addEventListener(elements_1.Elements.document, 'keypress', function (e) {
                                            var ev = e;
                                            var obj = {
                                                key: ev.key,
                                                id: ev.srcElement.id,
                                            };
                                            tracker_1.Tracker.getEventDispatchFunc("button" /* ActionEnum.BUTTON */)(obj);
                                        });
                                        sElem = document.scrollingElement;
                                        document.addEventListener('scroll', function (e) {
                                            var dx = sElem.scrollLeft;
                                            var dy = sElem.scrollTop;
                                            var dtime = new Date().getTime();
                                            if (Math.abs(tracker_1.Tracker.lastPos.x - dx) > 10 ||
                                                (Math.abs(tracker_1.Tracker.lastPos.y - dy) > 10 &&
                                                    dtime - tracker_1.Tracker.lastPos.time > 100)) {
                                                tracker_1.Tracker.lastPos.x = dx;
                                                tracker_1.Tracker.lastPos.y = dy;
                                                tracker_1.Tracker.lastPos.time = dtime;
                                                var obj = { x: dx, y: dy };
                                                tracker_1.Tracker.getEventDispatchFunc("scroll" /* ActionEnum.SCROLL */)(obj);
                                            }
                                        });
                                        // configure tracked events
                                        tracker_1.Tracker.registerEvent("history" /* ActionEnum.HISTORY */);
                                        tracker_1.Tracker.registerEvent("button" /* ActionEnum.BUTTON */);
                                        tracker_1.Tracker.registerEvent("click" /* ActionEnum.CLICK */);
                                        tracker_1.Tracker.registerEvent("scroll" /* ActionEnum.SCROLL */);
                                        // load first page
                                        return [4 /*yield*/, router_1.Router.load('files/index.html')];
                                    case 1:
                                        // load first page
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    },
                });
                return [2 /*return*/];
        }
    });
}); };
setup();

},{"../core/utils/q_params":20,"./../core/data-log/data":2,"./../core/dom/document":6,"./../core/dom/elements":7,"./../core/dom/scroll":10,"./../core/router/history":13,"./../core/router/router":14,"./../core/tracker/tracker":15,"./../core/utils/html_loader":18,"./../core/utils/id_generator":19,"./../core/utils/ready":21,"./../core/utils/scenarios":22}]},{},[25,30])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24iLCJzY3JpcHRzL3RzL2NvcmUvZGF0YS1sb2cvZGF0YS50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9ldmVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kYXRhLWxvZy9yZWNlaXZlci50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vYmFubmVyLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9kb2N1bWVudC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vZWxlbWVudHMudHMiLCJzY3JpcHRzL3RzL2NvcmUvZG9tL2h0bWxfbG9jLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9tb2RhbC50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vc2Nyb2xsLnRzIiwic2NyaXB0cy90cy9jb3JlL2RvbS9zdWJtaXRfZm9ybS50cyIsInNjcmlwdHMvdHMvY29yZS9kb20vdHJhY2tlcl9lbGVtcy50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvaGlzdG9yeS50cyIsInNjcmlwdHMvdHMvY29yZS9yb3V0ZXIvcm91dGVyLnRzIiwic2NyaXB0cy90cy9jb3JlL3RyYWNrZXIvdHJhY2tlci50cyIsInNjcmlwdHMvdHMvY29yZS91dGlscy9jb25zb2xlX3dyYXBwZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvZnVuY3MudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXIudHMiLCJzY3JpcHRzL3RzL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3FfcGFyYW1zLnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3JlYWR5LnRzIiwic2NyaXB0cy90cy9jb3JlL3V0aWxzL3NjZW5hcmlvcy50cyIsInNjcmlwdHMvdHMvZHluYW1pYy1kb20vYWNjb3JkaW9uLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9kby1zb21ldGhpbmcuanMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2R5bmFtaWMtZG9tLnRzIiwic2NyaXB0cy90cy9keW5hbWljLWRvbS9odG1sLWltcG9ydHMudHMiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvZm9vdGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL2h0bWwvaGVhZGVyLmh0bWwiLCJzY3JpcHRzL3RzL2R5bmFtaWMtZG9tL3NsaWRlc2hvdy50cyIsInNjcmlwdHMvdHMvdHJhY2tlci90cmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdkVBLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFTNUIsSUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7QUFFaEQsUUFBQSxPQUFPLEdBQWlCO0lBQ2pDLEdBQUcsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFO0lBQ3pCLFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUMzQyxLQUFLLEVBQUUsU0FB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QUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRTtnREFDckMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO29EQUNsQyxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUN6QyxDQUFDO2dEQUNDLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0RBQ3ZCLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0RBQ3ZCLGlCQUFPLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0RBQzdCLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0RBQzdCLGlCQUFPLENBQUMsb0JBQW9CLGtDQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDOzRDQUN6RCxDQUFDO3dDQUNMLENBQUMsQ0FBQyxDQUFDO3dDQUNILDJCQUEyQjt3Q0FDM0IsaUJBQU8sQ0FBQyxhQUFhLG9DQUFvQixDQUFDO3dDQUMxQyxpQkFBTyxDQUFDLGFBQWEsa0NBQW1CLENBQUM7d0NBQ3pDLGlCQUFPLENBQUMsYUFBYSxnQ0FBa0IsQ0FBQzt3Q0FDeEMsaUJBQU8sQ0FBQyxhQUFhLGtDQUFtQixDQUFDO3dDQUN6QyxrQkFBa0I7d0NBQ2xCLHFCQUFNLGVBQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBQTs7d0NBRHJDLGtCQUFrQjt3Q0FDbEIsU0FBcUMsQ0FBQzs7Ozs7cUJBQ3pDO2lCQUNKLENBQUMsQ0FBQzs7OztLQUNOLENBQUM7QUFFRixLQUFLLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPVtcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgYSBwYXJlbnQgY29uc2lkZXJpbmcgc2VuZGluZyB5b3VyIGNoaWxkIHRvIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gWW914oCZdmUgbGVhcm5lZCB0aGF0IHRoZSBjdXJyaWN1bHVtIGlzIHBsYXktYmFzZWQgYW5kIHlvdSB3YW50IHRvIGtub3cgaG93IGxlYXJuaW5nIGlzIGluY29ycG9yYXRlZCBpbnRvIGEgcGxheS1iYXNlZCBjb250ZXh0LiBZb3UgaGF2ZSBzb21lIGlkZWFzIGFib3V0IGhvdyBsYW5ndWFnZSBsZWFybmluZyBtaWdodCBoYXBwZW4sIGJ1dCBhcmUgbGVzcyBzdXJlIGFib3V0IG1hdGguXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJGaW5kIHNvbWUgZXhhbXBsZXMgb2YgaG93IG1hdGggbGVhcm5pbmcgaXMgaW5jb3Jwb3JhdGVkIGF0IFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC5cIixcbiAgICAgICAgXCJ0YWdcIjogXCJtYXRoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBpbnZlc3RpZ2F0aW5nIHByZS1zY2hvb2wgb3B0aW9ucyBmb3IgeW91ciA0IHllYXIgb2xkLiBCb3RoIHlvdSBhbmQgeW91ciBzcG91c2Ugd29yaywgc28geW91IG5lZWQgdG8gZnVsbHkgdW5kZXJzdGFuZCB3aGF0IHNjaGVkdWxpbmcgY29uc3RyYWludHMgZWFjaCBvcHRpb24gaW52b2x2ZXMuIE9uZSBvZiB5b3VyIHNjaG9vbHMgb2YgaW50ZXJlc3QgaXMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoZW4gZG9lcyBzY2hvb2wgc3RhcnQgYW5kIGVuZCBlYWNoIGRheT8gV2hhdCBpcyB0aGUgbG9uZ2VzdCBwZXJpb2Qgb2YgdGltZSB0aGF0IHlvdXIgY2hpbGQgY2FuIGJlIHRoZXJlP1wiLFxuICAgICAgICBcInRhZ1wiOiBcInNjaG9vbF9kYXlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGludmVzdGlnYXRpbmcgcHJlLXNjaG9vbCBvcHRpb25zIGZvciB5b3VyIDMuNSB5ZWFyIG9sZC4gWW914oCZdmUgYmVlbiB0b2xkIHRoYXQgb25lIG9mIHRoZSBoYWxsbWFya3Mgb2YgYSBnb29kIHByb2dyYW0gaXMgdGVhY2hlcnMgd2hvIGhhdmUgYmVlbiB0aGVyZSBmb3IgYSBsb25nIHRpbWUuIFlvdSB3YW50IHlvdXIgY2hpbGQgdG8gYXR0ZW5kIGluIHRoZSBtb3JuaW5ncyBvbmx5LlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hpY2ggdGVhY2hlcnMgd291bGQgeW91ciBjaGlsZCBoYXZlIGFuZCBob3cgbG9uZyBoYXZlIHRoZXkgYmVlbiBhdCB0aGUgc2Nob29sP1wiLFxuICAgICAgICBcInRhZ1wiOiBcInRlYWNoZXJfdGVudXJlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBzdGFydGluZyB0byBsb29rIGF0IHN1bW1lciBjYW1wIG9wdGlvbnMgYW5kIGhhdmUgaGVhcmQgZ29vZCB0aGluZ3MgYWJvdXQgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIGZvciB5b3VuZyBjaGlsZHJlbi5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIldoYXQgYXJlIHRoZSBkYWlseSBjYW1wIGhvdXJzPyBBcmUgdGhlcmUgYW55IGV4dGVuZGVkIGRheSBvcHBvcnR1bml0aWVzP1wiLFxuICAgICAgICBcInRhZ1wiOiBcInN1bW1lcl9jYW1wXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBpbnZlc3RpZ2F0aW5nIHByZS1zY2hvb2wgb3B0aW9ucyBmb3IgeW91ciBzcGlyaXRlZCAzIHllYXIgb2xkIGFuZCB3YW50IHRvIHVuZGVyc3RhbmQgdGhlaXIgYXBwcm9hY2ggdG8gZGlzY2lwbGluZS5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkbyB0ZWFjaGVycyBhdCBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgYXBwcm9hY2ggZGlzY2lwbGluZT9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJkaXNjaXBsaW5lXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91ciBkYXVnaHRlciBpcyBpbiB0aGUgVGVkZHkgQmVhciBjbGFzcyBhdCBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFNoZSBjYW1lIGhvbWUgdGhpcyB3ZWVrIHNpbmdpbmcgYSBzb25nIGluIFNwYW5pc2ggYWJvdXQgc2hhcGVzLCBidXQgeW91IGFyZSBwcmV0dHkgc3VyZSB0aGF0IHNoZSBoYXMgc29tZSBvZiB0aGUgd29yZHMgd3JvbmcuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJXaGF0IGFyZSB0aGUgY29ycmVjdCBseXJpY3M/XCIsXG4gICAgICAgIFwidGFnXCI6IFwic3BhbmlzaF9zb25nXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiSXQgaXMgbWlkLURlY2VtYmVyIGFuZCB5b3UgYXJlIHRoaW5raW5nIGFib3V0IHRoaW5ncyB0byBkbyBvdmVyIHlvdXIgZGF1Z2h0ZXIncyB1cGNvbWluZyBzY2hvb2wgYnJlYWsuIFNoZSBpcyAzIHllYXJzIG9sZCBhbmQgYXR0ZW5kcyB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sIGFuZCBpcyBpbiB0aGUgVGVkZHkgQmVhciBjbGFzc3Jvb20uIFlvdSBhcmUgcGxhbm5pbmcgYSB0cmlwIHRvIHRoZSBsaWJyYXJ5IGFuZCB3YW50IHRvIGNoZWNrIG91dCBzb21lIGJvb2tzIHRoYXQgY29ubmVjdCB3aXRoIHNvbWV0aGluZyBzaGUgaXMgZG9pbmcgaW4gc2Nob29sLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCBhcmUgc29tZSBwb3RlbnRpYWwgYm9vayB0b3BpY3MgdGhhdCByZWxhdGUgdG8gc29tZXRoaW5nIHRoYXQgaXMgZ29pbmcgb24gaW4gaGVyIGNsYXNzcm9vbSB0aGlzIHdlZWs/XCIsXG4gICAgICAgIFwidGFnXCI6IFwiYm9va3NcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJZb3UgYXJlIGEgcGFyZW50IHdpdGggYSBjaGlsZCB3aG8gaGFzIGp1c3QgYmVlbiBhY2NlcHRlZCB0byBhdHRlbmQgYXMgYSBmdWxsIHRpbWUgc3R1ZGVudCBhdCB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLiBZb3Ugd2FudCB0byBhY2NlcHQgdGhlIG9mZmVyIG9mIGFkbWlzc2lvbi5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkZpZ3VyZSBvdXQgd2hhdCB5b3UgbmVlZCB0byBkbyBhdCB0aGlzIHRpbWUgdG8gZmluYWxpemUgeW91ciBjaGlsZOKAmXMgcGxhY2UgYXQgdGhlIHNjaG9vbC5cIixcbiAgICAgICAgXCJ0YWdcIjogXCJhZG1pc3Npb25fMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBhcmUgYSBwYXJlbnQgd2l0aCBhIGNoaWxkIHdobyBoYXMganVzdCBiZWVuIGFjY2VwdGVkIHRvIGF0dGVuZCBhcyBhIGZ1bGwgdGltZSBzdHVkZW50IGF0IHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wuIFlvdSBuZWVkIHRvIHBheSBvbmUgbW9udGggb2YgdHVpdGlvbiBhcyBhIGRlcG9zaXQuXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJGaW5kIG91dCBob3cgbXVjaCBvbmUgbW9udGggb2YgdHVpdGlvbiBpcyBhbmQgd2hldGhlciBvciBub3QgaXQgaXMgcG9zc2libGUgdG8gcGF5IG9ubGluZS5cIixcbiAgICAgICAgXCJ0YWdcIjogXCJkZXBvc2l0XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBtb3ZpbmcgdG8gU3QuIExvdWlzIGZyb20gQmVpamluZyBhbmQgbG9va2luZyBmb3IgYSBQcmUtSyBwcm9ncmFtIGZvciB5b3VyIGRhdWdodGVyLCBhZ2UgNS4gU2hlIGlzIHZlcnkgY2xvc2UgdG8gaGVyIGZyaWVuZHMgYW5kIHlvdSBhcmUgd29ycmllZCB0aGF0IHRoZSBtb3ZlIG1pZ2h0IGJlIGhhcmQgb24gaGVyLiBTaGUgbWF5IG5lZWQgc29tZSBleHRyYSBzdXBwb3J0IGZyb20gaGVyIG5ldyB0ZWFjaGVycyBsZWFybmluZyBFbmdsaXNoLCBhZGFwdGluZyB0byBBbWVyaWNhbiBjdWx0dXJlLCBhbmQgbWFraW5nIG5ldyBmcmllbmRzLlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiSG93IGRvZXMgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbCBzdGFmZiBhcHByb2FjaCBwcm92aWRpbmcgZXh0cmEgaGVscCB0byBzdHVkZW50cyB3aG8gbmVlZCBpdD9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJoZWxwXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBsb29raW5nIGF0IE51cnNlcnkgU2Nob29scyBmb3IgeW91ciBzb29uIHRvIGJlIDMgeWVhciBvbGQuIEhlIGhhcyBuZXZlciBiZWVuIGluIHNjaG9vbCBvciBkYXljYXJlIGJlZm9yZSBhbmQgeW91IGFyZSBzb21ld2hhdCB3b3JyaWVkIGFib3V0IHRoZSB0cmFuc2l0aW9uLiBZb3UnZCBsaWtlIHRvIGVuc3VyZSB0aGF0IHlvdSdsbCBiZSBhYmxlIHRvIGhhdmUgc3Ryb25nIGNvbW11bmljYXRpb25hdCBoaXMgbmV3IHNjaG9vbC5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkb2VzIHRoZSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgTnVyc2VyeSBTY2hvb2wgaGFuZGxlIGNvbW11bmljYXRpbmcgd2l0aCBwYXJlbnRzP1wiLFxuICAgICAgICBcInRhZ1wiOiBcImNvbW11bmljYXRpb25cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNvbnRleHRcIjogXCJJdOKAmXMgbWlkLURlY2VtYmVyIGFuZCB5b3VyIHNvbiwgYWdlIDQsIGNhbWUgaG9tZSBhbGwgZXhjaXRlZCBhYm91dCBzY2llbmNlIGNsYXNzLiBUaGV5IGxlYXJuZWQgYSBuZXcgd29yZCwgYnV0IGhlIGNhbuKAmXQgYWN0dWFsbHkgcmVtZW1iZXIgdGhlIHdvcmQgdGhleSBsZWFybmVkIGFib3V0LlwiLFxuICAgICAgICBcInF1ZXN0aW9uXCI6IFwiV2hhdCB3YXMgdGhlIHRvcGljIG9mIGhpcyByZWNlbnQgc2NpZW5jZSBjbGFzcz9cIixcbiAgICAgICAgXCJ0YWdcIjogXCJzY2llbmNlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjb250ZXh0XCI6IFwiWW91IGFyZSBzZWxlY3RpbmcgYSBwcmUtc2Nob29sLCBidXQgd2FudCB0byBiZSBzdXJlIHRoYXQgeW91ciBkYXVnaHRlciB3aWxsIGJlIHJlYWR5IGZvciBraW5kZXJnYXJ0ZW4gd2hlbiBpdOKAmXMgdGltZS5cIixcbiAgICAgICAgXCJxdWVzdGlvblwiOiBcIkhvdyBkb2VzIHRoZSBudXJzZXJ5IHNjaG9vbCBhc3Nlc3MgY2hpbGRyZW7igJlzIGtub3dsZWRnZSwgc3VwcG9ydCB0aGVpciBncm93dGgsIGFuZCBzaGFyZSB0aGUgcmVzdWx0cyB3aXRoIHBhcmVudHM/XCIsXG4gICAgICAgIFwidGFnXCI6IFwicGFyZW50X3RlYWNoZXJfY29uZmVyZW5jZVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY29udGV4dFwiOiBcIllvdSBoYXZlIHJlY2VudGx5IGFjY2VwdGVkIGEgcG9zaXRpb24gZm9yIHlvdXIgY2hpbGQgZm9yIHRoZSBjb21pbmcgc2Nob29sIHllYXIgYXQgdGhlIFdhc2hpbmd0b24gVW5pdmVyc2l0eSBOdXJzZXJ5IFNjaG9vbC4gVXAgdG8gdGhpcyBwb2ludCwgeW91ciBjaGlsZCBoYXMgYmVlbiBhdCBob21lIGFuZCB5b3UgYXJlIHNvbWV3aGF0IHdvcnJpZWQgYWJvdXQgdGhlIHRyYW5zaXRpb24uXCIsXG4gICAgICAgIFwicXVlc3Rpb25cIjogXCJIb3cgZG9lcyB0aGUgbnVyc2VyeSBzY2hvb2wgc3VwcG9ydCBraWRz4oCZIHRyYW5zaXRpb25zIGludG8gc2Nob29sP1wiLFxuICAgICAgICBcInRhZ1wiOiBcIm9yaWVudGF0aW9uXCJcbiAgICB9XG5dXG4iLCJpbXBvcnQgeyBUcmFja2VyRXZlbnQgfSBmcm9tICcuL2V2ZW50JztcbmNvbnNvbGUubG9nKCdkYXRhIGxvYWRlZC4nKTtcbmV4cG9ydCBpbnRlcmZhY2UgTXR1cmtVUkxEYXRhIHtcbiAgICByYXc6IHN0cmluZztcbiAgICBhc3NpZ25tZW50SUQ6IHN0cmluZyB8IG51bGw7XG4gICAgaGl0SUQ6IHN0cmluZyB8IG51bGw7XG4gICAgd29ya2VySUQ6IHN0cmluZyB8IG51bGw7XG4gICAgc3VibWl0VG86IHN0cmluZyB8IG51bGw7XG59XG5cbmNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcblxuZXhwb3J0IGNvbnN0IHVybERhdGE6IE10dXJrVVJMRGF0YSA9IHtcbiAgICByYXc6IHVybFBhcmFtcy50b1N0cmluZygpLFxuICAgIGFzc2lnbm1lbnRJRDogdXJsUGFyYW1zLmdldCgnYXNzaWdubWVudElkJyksXG4gICAgaGl0SUQ6IHVybFBhcmFtcy5nZXQoJ2hpdElkJyksXG4gICAgd29ya2VySUQ6IHVybFBhcmFtcy5nZXQoJ3dvcmtlcklkJyksXG4gICAgc3VibWl0VG86IHVybFBhcmFtcy5nZXQoJ3R1cmtTdWJtaXRUbycpLFxufTtcblxuZXhwb3J0IGNsYXNzIERhdGEge1xuICAgIHB1YmxpYyBsb2dzOiB7IFtldmVudFR5cGU6IHN0cmluZ106IFRyYWNrZXJFdmVudFtdIH0gPSB7fTtcbiAgICBwdWJsaWMgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIHB1YmxpYyBlcnJvcnM6IGFueVtdID0gW107XG4gICAgcHVibGljIHVybERhdGE6IE10dXJrVVJMRGF0YTtcblxuICAgIGNvbnN0cnVjdG9yKHJhd010dXJrVVJMRGF0YTogTXR1cmtVUkxEYXRhKSB7XG4gICAgICAgIHRoaXMudXJsRGF0YSA9IHJhd010dXJrVVJMRGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBkYXRhID0gbmV3IERhdGEodXJsRGF0YSk7XG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7IGRhdGEgfSk7XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlclwiO1xuaW1wb3J0IHsgbm93IH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmNzXCI7XG5sb2coXCJldmVudCBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjb25zdCBlbnVtIEFjdGlvbkVudW0ge1xuICBDTElDSyA9IFwiY2xpY2tcIixcbiAgQlVUVE9OID0gXCJidXR0b25cIixcbiAgU0NST0xMID0gXCJzY3JvbGxcIixcbiAgSElTVE9SWSA9IFwiaGlzdG9yeVwiLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrZXJFdmVudCB7XG4gIGFjdGlvbjogc3RyaW5nO1xuICB0aW1lOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RUb1RyYWNrZXJFdmVudChvYmo6IGFueSwgYWN0aW9uOiBzdHJpbmcpIHtcbiAgb2JqLmFjdGlvbiA9IGFjdGlvbjtcbiAgb2JqLnRpbWUgPSBub3coKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJhY2tlckV2ZW50KG9iajogYW55KTogb2JqIGlzIFRyYWNrZXJFdmVudCB7XG4gIHJldHVybiBvYmouYWN0aW9uICE9PSB1bmRlZmluZWQgJiYgb2JqLnRpbWUgIT09IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIEJhc2VUcmFja2VyRXZlbnQ8VD4gaW1wbGVtZW50cyBUcmFja2VyRXZlbnQge1xuICBwdWJsaWMgY3VzdEV2OiBDdXN0b21FdmVudDtcbiAgcHVibGljIGFjdGlvbjogc3RyaW5nO1xuICBwdWJsaWMgdGltZTogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihhY3Rpb246IHN0cmluZywgZXZlbnRJbml0RGljdD86IEN1c3RvbUV2ZW50SW5pdDxUPiB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuY3VzdEV2ID0gbmV3IEN1c3RvbUV2ZW50KGFjdGlvbiwgZXZlbnRJbml0RGljdCk7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgdGhpcy50aW1lID0gbm93KCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRldGFpbCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0RXYuZGV0YWlsO1xuICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWNsYXNzZXMtcGVyLWZpbGVcbmV4cG9ydCBjbGFzcyBDbGlja0V2ZW50IGV4dGVuZHMgQmFzZVRyYWNrZXJFdmVudDx7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBpZDogc3RyaW5nO1xufT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgZXZlbnRJbml0RGljdD86XG4gICAgICB8IEN1c3RvbUV2ZW50SW5pdDx7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBpZDogc3RyaW5nIH0+XG4gICAgICB8IHVuZGVmaW5lZFxuICApIHtcbiAgICBzdXBlcihBY3Rpb25FbnVtLkNMSUNLLCBldmVudEluaXREaWN0KTtcbiAgICB0aGlzLmRldGFpbC54ID0geDtcbiAgICB0aGlzLmRldGFpbC55ID0geTtcbiAgICB0aGlzLmRldGFpbC5pZCA9IGlkO1xuICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWNsYXNzZXMtcGVyLWZpbGVcbmV4cG9ydCBjbGFzcyBCdXR0b25FdmVudCBleHRlbmRzIEJhc2VUcmFja2VyRXZlbnQ8eyBrZXk6IHN0cmluZzsgaWQ6IHN0cmluZyB9PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGtleTogc3RyaW5nLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgZXZlbnRJbml0RGljdD86IEN1c3RvbUV2ZW50SW5pdDx7IGtleTogc3RyaW5nOyBpZDogc3RyaW5nIH0+IHwgdW5kZWZpbmVkXG4gICkge1xuICAgIHN1cGVyKEFjdGlvbkVudW0uQ0xJQ0ssIGV2ZW50SW5pdERpY3QpO1xuICAgIHRoaXMuZGV0YWlsLmtleSA9IGtleTtcbiAgICB0aGlzLmRldGFpbC5pZCA9IGlkO1xuICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWNsYXNzZXMtcGVyLWZpbGVcbmV4cG9ydCBjbGFzcyBIaXN0b3J5RXZlbnQgZXh0ZW5kcyBCYXNlVHJhY2tlckV2ZW50PHtcbiAgdXJsOiBzdHJpbmc7XG4gIGV4dHJhPzogYW55O1xufT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBleHRyYT86IGFueSxcbiAgICBldmVudEluaXREaWN0PzogQ3VzdG9tRXZlbnRJbml0PHsgdXJsOiBzdHJpbmcgfT4gfCB1bmRlZmluZWRcbiAgKSB7XG4gICAgc3VwZXIoQWN0aW9uRW51bS5ISVNUT1JZLCBldmVudEluaXREaWN0KTtcbiAgICB0aGlzLmRldGFpbC51cmwgPSB1cmw7XG4gICAgdGhpcy5kZXRhaWwuZXh0cmEgPSBleHRyYTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IGlzVHJhY2tlckV2ZW50LCBUcmFja2VyRXZlbnQgfSBmcm9tIFwiLi9ldmVudFwiO1xubG9nKFwicmVjZWl2ZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgRXZlbnRSZWNlaXZlciB7XG4gIHByaXZhdGUgbWFwID0gbmV3IE1hcDxzdHJpbmcsIChldmVudDogVHJhY2tlckV2ZW50KSA9PiB2b2lkPigpO1xuICBwcml2YXRlIGVtaXR0ZXIgPSBuZXcgRXZlbnRUYXJnZXQoKTtcblxuICBwdWJsaWMgcmVnaXN0ZXIoZXZlbnRUeXBlOiBzdHJpbmcsIGNhbGxiYWNrPzogKGV2ZW50OiBUcmFja2VyRXZlbnQpID0+IHZvaWQpIHtcbiAgICB0aGlzLmVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRyYWNrRXYgPSAoKGV2ZW50IGFzIHVua25vd24pIGFzIEN1c3RvbUV2ZW50KVxuICAgICAgICAuZGV0YWlsIGFzIFRyYWNrZXJFdmVudDtcbiAgICAgIGlmIChpc1RyYWNrZXJFdmVudCh0cmFja0V2KSAmJiBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayh0cmFja0V2KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMubWFwLnNldChldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZG9FdmVudChldmVudDogVHJhY2tlckV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2sgPSB0aGlzLm1hcC5nZXQoXCJcIiArIGV2ZW50LmFjdGlvbik7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vcm91dGVyL3JvdXRlclwiO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuLi91dGlscy9jb25zb2xlX3dyYXBwZXJcIjtcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tIFwiLi8uLi9yb3V0ZXIvaGlzdG9yeVwiO1xuaW1wb3J0IHsgRCB9IGZyb20gXCIuL2RvY3VtZW50XCI7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCIuL2VsZW1lbnRzXCI7XG5sb2coXCJiYW5uZXIgbG9hZGVkLlwiLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY2xhc3MgVG9wQmFubmVyIHtcbiAgcHVibGljIHN0YXRpYyBzaG93KCkge1xuICAgIFRvcEJhbm5lci5zaG93aW5nID0gdHJ1ZTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRVcCwgdHJ1ZSk7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkRG93biwgZmFsc2UpO1xuICAgIEQuZGlzcGxheShFbGVtZW50cy5kZENvbnRlbnQsIHRydWUpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBoaWRlKCkge1xuICAgIFRvcEJhbm5lci5zaG93aW5nID0gZmFsc2U7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkRG93biwgdHJ1ZSk7XG4gICAgRC5kaXNwbGF5KEVsZW1lbnRzLmRkVXAsIGZhbHNlKTtcbiAgICBELmRpc3BsYXkoRWxlbWVudHMuZGRDb250ZW50LCBmYWxzZSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRvRGlzcGxheUNoYW5nZSgpIHtcbiAgICBUb3BCYW5uZXIuc2hvd2luZyA/IFRvcEJhbm5lci5oaWRlKCkgOiBUb3BCYW5uZXIuc2hvdygpO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXAoKSB7XG4gICAgRC5hZGRFdmVudExpc3RlbmVyKEVsZW1lbnRzLmRkQXJyb3csIFwiY2xpY2tcIiwgVG9wQmFubmVyLmRvRGlzcGxheUNoYW5nZSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzaG93aW5nID0gdHJ1ZTtcbn1cblxuRC5hZGRFdmVudExpc3RlbmVyKFwibXR1cmstdG9wLWJhbm5lci1iYWNrXCIsIFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKEhpc3RvcnkuY2FuQmFja3dhcmQoKSkge1xuICAgIFJvdXRlci5sb2FkV2l0aFBhdGhQcmVmaXgoSGlzdG9yeS5iYWNrd2FyZCgpKTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydChcIlRoZXJlIGlzIG5vIHBhZ2UgaGlzdG9yeSB0byBnbyBiYWNrIGZvciBhdCB0aGlzIHRpbWUhXCIpO1xuICB9XG59KTtcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBlcnJvciwgbG9nIH0gZnJvbSBcIi4vLi4vdXRpbHMvY29uc29sZV93cmFwcGVyXCI7XG5sb2coXCJkb2N1bWVudCBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBEIHtcbiAgcHVibGljIHN0YXRpYyBkb2M6IERvY3VtZW50ID0gZG9jdW1lbnQ7XG5cbiAgcHVibGljIHN0YXRpYyBlbGVtKGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpOiBFbGVtZW50IHtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBELmlkKGVsZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbSBhcyBFbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZGlzcGxheShlbGVtOiBFbGVtZW50IHwgc3RyaW5nLCBzaG93OiBib29sZWFuKTogdm9pZCB7XG4gICAgZWxlbSA9IEQuZWxlbShlbGVtKTtcbiAgICBpZiAoc2hvdykge1xuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlcIik7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaWQoaWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBlbGVtZW50ID0gRC5kb2MuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVsZW1lbnQgd2FzIG5vdCBmb3VuZCwgaWQ6IDwke2lkfT4uYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuICBwdWJsaWMgc3RhdGljIGNsYXooY2xhejogc3RyaW5nKTogSFRNTENvbGxlY3Rpb25PZjxFbGVtZW50PiB7XG4gICAgcmV0dXJuIEQuZG9jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xheik7XG4gIH1cbiAgcHVibGljIHN0YXRpYyB0YWcodGFnOiBzdHJpbmcpOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+IHtcbiAgICByZXR1cm4gRC5kb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIGltYWdlKGlkOiBzdHJpbmcsIHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgZXJyb3IoKCkgPT4gRC5pZChpZCkuc2V0QXR0cmlidXRlKFwic3JjXCIsIHVybCkpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhZGRFdmVudExpc3RlbmVyKFxuICAgIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIGxpc3RlbmVyOiAoZTogRXZlbnQpID0+IGFueVxuICApIHtcbiAgICBlbGVtID0gdGhpcy5lbGVtKGVsZW0pO1xuICAgIGNvbnN0IHdyYXBwZXJGdW5jID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsaXN0ZW5lcihlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfTtcbiAgICAoZWxlbSBhcyBFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIHdyYXBwZXJGdW5jKTtcbiAgICByZXR1cm4gd3JhcHBlckZ1bmM7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGVhY2goZWxlbTogRWxlbWVudCB8IHN0cmluZywgYXBwbHk6IChub2RlOiBFbGVtZW50KSA9PiBhbnkpIHtcbiAgICBlbGVtID0gdGhpcy5lbGVtKGVsZW0pO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxlbS5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcHBseShjaGlsZHJlbltpXSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBlYWNoUmVjdXIoXG4gICAgZWxlbTogRWxlbWVudCB8IHN0cmluZyxcbiAgICBhcHBseTogKG5vZGU6IEVsZW1lbnQpID0+IGFueVxuICApIHtcbiAgICBlbGVtID0gdGhpcy5lbGVtKGVsZW0pO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxlbS5jaGlsZHJlbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgYXBwbHkoY2hpbGQpO1xuICAgICAgRC5lYWNoUmVjdXIoY2hpbGQsIGFwcGx5KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZTxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgICB0YWdOYW1lOiBLLFxuICAgIG9wdGlvbnM/OiBFbGVtZW50Q3JlYXRpb25PcHRpb25zXG4gICk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgb3B0aW9ucyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgRCB9IGZyb20gJy4vZG9jdW1lbnQnO1xubG9nKCdlbGVtZW50IGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG4vKipcbiAqIFRoZXNlIGFyZSBlbGVtZW50cyB0aGF0IGFyZSBpbiBldmVyeSBzaW5nbGUgcHJvamVjdC4gRXZlbiBpZiB0aGV5IGFyZSBub3QgdXNlZCB0aGV5IHNob3VsZFxuICogYmUgcGxhY2UgaW4gdGhlIHByb2plY3QgYW5kIGRpc3BsYXkgc2hvdWxkIGJlIHNldCB0byBub25lLiBUaGlzIHNpbXBsaWZpZXMgY29uZmlndXJhdGlvblxuICogYW5kIHNvbWUgY29tbW9uIGZ1bmN0aW9ucyBhbmQgYWxsb3dzIGxlc3MgbnVsbCBjaGVja3MgdG8gYmUgcGVyZm9ybWVkIG92ZXJhbGwuIElmIHRoZVxuICogZWxlbWVudCBkb2VzIG5vdCBleGlzdCBhdCBydW4gdGltZSBhbiBlbXB0eSBkaXYgd2l0aCB0aGF0IGlkIGlzIGNyZWF0ZWQgYW5kIGl0cyBkaXNwbGF5XG4gKiBpcyBzZXQgdG8gbm9uZSB0aGVuIGFwcGVuZGVkIHRvIHRoZSBib2R5LlxuICovXG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gZ2V0IGFuIGVsZW1lbnQsIGlmIHVuc3VjY2Vzc2Z1bCwgY3JlYXRlcyBkaXYgd2l0aCBpZCBhbmQgYXBwZW5kcyB0byBib2R5LlxuICpcbiAqIEBwYXJhbSBpZCAtIHRoZSBpZCBvZiB0aGUgZWxlbWVudCB0byByZXRyaWV2ZS5cbiAqL1xuZnVuY3Rpb24gbWFrZUVsZW1JZk5vdEV4aXN0KGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgbGV0IGVsZW07XG4gICAgdHJ5IHtcbiAgICAgICAgZWxlbSA9IEQuaWQoaWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlbGVtID0gRC5jcmVhdGUoJ2RpdicpO1xuICAgICAgICBlbGVtLmlkID0gaWQ7XG4gICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtO1xufVxuXG4vKipcbiAqIENvbW1vbmx5IGFjY2Vzc2VkIGVsZW1lbnRzLCBhbGxvd3MgZm9yIGNsZWFyZXIgZG9tIG1hbmlwIG9uIHRoZXNlIGVsZW1lbnRzLlxuICovXG5leHBvcnQgY29uc3QgRWxlbWVudHMgPSB7XG4gICAgZG9jdW1lbnQ6IEQuZG9jLmRvY3VtZW50RWxlbWVudCxcbiAgICB3cmFwcGVyOiBtYWtlRWxlbUlmTm90RXhpc3QoJ3dyYXBwZXInKSxcbiAgICBodG1sTG9jOiBtYWtlRWxlbUlmTm90RXhpc3QoJ2h0bWwtbG9jJyksXG4gICAgaW5uZXJCb2R5OiBtYWtlRWxlbUlmTm90RXhpc3QoJ2lubmVyLWJvZHknKSxcbiAgICBkZERvd246IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci1kcm9wLWRvd24tYnV0dG9uJyksXG4gICAgZGRVcDogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWNvbGxhcHNlLWJ1dHRvbicpLFxuICAgIGRkQ29udGVudDogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWRyb3AtZG93bi1jb250ZW50JyksXG4gICAgYmFja0J1dHRvbjogbWFrZUVsZW1JZk5vdEV4aXN0KCdtdHVyay10b3AtYmFubmVyLWJhY2snKSxcbiAgICBkZEFycm93OiBtYWtlRWxlbUlmTm90RXhpc3QoJ210dXJrLXRvcC1iYW5uZXItYXJyb3cnKSxcbiAgICBtdFRvcEJhbm5lclRleHQ6IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstdG9wLWJhbm5lci10ZXh0JyksXG4gICAgbXRTY2VuYXJpb0NvbnRleHQ6IG1ha2VFbGVtSWZOb3RFeGlzdCgnc2NlbmFyaW9fY29udGV4dCcpLFxuICAgIG10U2NlbmFyaW9RdWVzdGlvbjogbWFrZUVsZW1JZk5vdEV4aXN0KCdzY2VuYXJpb19xdWVzdGlvbicpLFxuICAgIGxvZ0ZpbGVJbnB1dDogbWFrZUVsZW1JZk5vdEV4aXN0KFxuICAgICAgICAnbXR1cmstdG9wLWJhbm5lci1kcm9wLWRvd24tY29udGVudC1sb2ctZmlsZS1pbnB1dCdcbiAgICApLFxuICAgIHN1Ym1pdEZvcm06IG1ha2VFbGVtSWZOb3RFeGlzdCgnbXR1cmstc3VibWl0LWZvcm0nKSxcbiAgICBtb2RhbDogbWFrZUVsZW1JZk5vdEV4aXN0KCdtb2RhbCcpLFxufTtcbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuLy4uL2RvbS9lbGVtZW50cyc7XG5sb2coJ2h0bWwgbG9jIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgZW51bSBBcHBFbnVtIHtcbiAgICBJTkZPUk1BVElPTl9GT1JBR0lORyA9ICdpbmZvcm1hdGlvbi1mb3JhZ2luZycsXG4gICAgQ09HTklUSVZFX0xPQUQgPSAnY29nbml0aXZlLWxvYWQnLFxuICAgIEdFTkRFUl9NQUcgPSAnZ2VuZGVyLW1hZycsXG4gICAgRVJST1IgPSAnZXJyb3InLFxufVxuXG5leHBvcnQgZW51bSBNb2RlRW51bSB7XG4gICAgUkVBTCA9ICdyZWFsJyxcbiAgICBTQU5EQk9YID0gJ3NhbmRib3gnLFxuICAgIFRFU1QgPSAndGVzdCcsXG4gICAgRVJST1IgPSAnZXJyb3InLFxufVxuXG5leHBvcnQgY2xhc3MgSFRNTExvYyB7XG4gICAgcHVibGljIHN0YXRpYyBlbGVtID0gRWxlbWVudHMuaHRtbExvYztcbiAgICBwdWJsaWMgc3RhdGljIGFwcDogQXBwRW51bTtcbiAgICBwdWJsaWMgc3RhdGljIG1vZGU6IE1vZGVFbnVtO1xuICAgIHB1YmxpYyBzdGF0aWMgc2NlbmFyaW86IHN0cmluZztcblxuICAgIHB1YmxpYyBzdGF0aWMgc2V0dXAoKSB7XG4gICAgICAgIEhUTUxMb2MuYXBwID0gKEhUTUxMb2MuZWxlbS5kYXRhc2V0LmFwcCBhcyBBcHBFbnVtKSB8fCBBcHBFbnVtLkVSUk9SO1xuICAgICAgICBIVE1MTG9jLm1vZGUgPVxuICAgICAgICAgICAgKEhUTUxMb2MuZWxlbS5kYXRhc2V0Lm1vZGUgYXMgTW9kZUVudW0pIHx8IE1vZGVFbnVtLkVSUk9SO1xuICAgICAgICBIVE1MTG9jLnNjZW5hcmlvID0gSFRNTExvYy5lbGVtLmRhdGFzZXQuc2NlbmFyaW8gfHwgJ2Vycm9yJztcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSAnLi8uLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgRCB9IGZyb20gJy4vZG9jdW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuL2VsZW1lbnRzJztcbmxvZygnbW9kYWwgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBNb2RhbCB7XG4gICAgcHVibGljIHN0YXRpYyBlbGVtID0gRWxlbWVudHMubW9kYWw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGRpc3BsYXkoc3JjOiBzdHJpbmcpIHtcbiAgICAgICAgTW9kYWwuZWxlbS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAnc3R5bGUnLFxuICAgICAgICAgICAgYGxlZnQ6ICR7TWF0aC5yb3VuZCh3aW5kb3cucGFnZVhPZmZzZXQpfXB4OyB0b3A6ICR7TWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgICB3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICl9cHg7YFxuICAgICAgICApO1xuICAgICAgICBNb2RhbC5lbGVtLmNsYXNzTGlzdC5yZXBsYWNlKCdoaWRlLW1vZGFsJywgJ3Nob3ctbW9kYWwnKTtcbiAgICAgICAgRC5lYWNoKE1vZGFsLmVsZW0sIChub2RlKSA9PiB7XG4gICAgICAgICAgICAobm9kZSBhcyBIVE1MSUZyYW1lRWxlbWVudCkuc3JjID0gc3JjO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub3Njcm9sbCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaGlkZSgpIHtcbiAgICAgICAgTW9kYWwuZWxlbS5jbGFzc0xpc3QucmVwbGFjZSgnc2hvdy1tb2RhbCcsICdoaWRlLW1vZGFsJyk7XG4gICAgICAgIEQuZWFjaChNb2RhbC5lbGVtLCAobm9kZSkgPT4ge1xuICAgICAgICAgICAgKG5vZGUgYXMgSFRNTElGcmFtZUVsZW1lbnQpLnNyYyA9ICcnO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub3Njcm9sbCcpO1xuICAgIH1cbn1cblxuRC5hZGRFdmVudExpc3RlbmVyKE1vZGFsLmVsZW0sICdjbGljaycsIChlKSA9PiB7XG4gICAgTW9kYWwuaGlkZSgpO1xufSk7XG5ELmVhY2goTW9kYWwuZWxlbSwgKG5vZGUpID0+IHtcbiAgICBELmFkZEV2ZW50TGlzdGVuZXIobm9kZSwgJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgZXJyb3IsIGxvZyB9IGZyb20gJy4uL3V0aWxzL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBub29wLCBub3cgfSBmcm9tICcuLy4uL3V0aWxzL2Z1bmNzJztcbmxvZygnc2Nyb2xsIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG4vKipcbiAqIExpbmVhciBpbXBsZW1lbnRhdGlvbiBvZiBzY3JvbGxpbmcuXG4gKiBGb2xsb3dzIHRoZSBzaW5nbGV0b24gcGF0dGVybiwgY2FsbCBkbyB0byBzdGFydCBhIHNjcm9sbCBvcGVyYXRpb24uXG4gKlxuICogSWYgYSBzY3JvbGwgaXMgY2FsbGVkIHdoZW4gYW5vdGhlciBzY3JvbGwgaGFzIGFscmVhZHkgYmVndW4gYW5cbiAqIGVycm9yIHdpbGwgYmUgdGhyb3duLCBidXQgdGhlIGZpcnN0IHNjcm9sbCB3aWxsIGNvbnRpbnVlIHVudGlsIGNvbXBsZXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBTY3JvbGwge1xuICAgIHB1YmxpYyBzdGF0aWMgU1RFUF9JTl9NUyA9IDE3O1xuXG4gICAgcHVibGljIHN0YXRpYyBjYWxsYmFjayhcbiAgICAgICAgZW5kUG9zOiBudW1iZXIsXG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgPSAyMDAsXG4gICAgICAgIGNvbXBsZXRlOiAoLi4uYXJnczogYW55KSA9PiBhbnkgPSBub29wXG4gICAgKTogdm9pZCB7XG4gICAgICAgIGlmIChTY3JvbGwucnVubmluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdDYW5ub3QgbWFrZSBtdWx0aXBsZSBjYWxscyB0byBzY3JvbGwgYXQgdGhlIHNhbWUgdGltZS4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFNjcm9sbC5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgb2xkQ29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICBTY3JvbGwucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgZXJyb3Iob2xkQ29tcGxldGUpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmluc3RhbmNlLnVwZGF0ZShlbmRQb3MsIGR1cmF0aW9uLCBjb21wbGV0ZSkuYXR0ZW1wdFNjcm9sbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcHJvbWlzZShlbmRQb3M6IG51bWJlciwgZHVyYXRpb246IG51bWJlciA9IDIwMCkge1xuICAgICAgICBpZiAoU2Nyb2xsLnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnQ2Fubm90IG1ha2UgbXVsdGlwbGUgY2FsbHMgdG8gc2Nyb2xsIGF0IHRoZSBzYW1lIHRpbWUuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBTY3JvbGwucnVubmluZyA9IHRydWU7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShcbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICByZXNvbHZlOiAodmFsdWU/OiB1bmtub3duKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgIHJlamVjdDogKGFyZzA6IGFueSkgPT4gdm9pZFxuICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcnVuUmVzb2x2ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTY3JvbGwucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAudXBkYXRlKGVuZFBvcywgZHVyYXRpb24sIHJ1blJlc29sdmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dGVtcHRTY3JvbGwoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgU2Nyb2xsLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBTY3JvbGwoMCwgMCwgbm9vcCk7XG4gICAgcHJpdmF0ZSBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55O1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBlbmRQb3M6IG51bWJlcixcbiAgICAgICAgcHJpdmF0ZSBkdXJhdGlvbjogbnVtYmVyLFxuICAgICAgICBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4gICAgKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSAoLi4uYXJnczogYW55KSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2Nyb2xsJykpO1xuICAgICAgICAgICAgY29tcGxldGUoYXJncyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gU2Nyb2xsLnJ1bm5pbmc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUoXG4gICAgICAgIGVuZFBvczogbnVtYmVyLFxuICAgICAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgICAgICBjb21wbGV0ZTogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4gICAgKTogU2Nyb2xsIHtcbiAgICAgICAgdGhpcy5lbmRQb3MgPSBlbmRQb3M7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGNTY3JvbGxBbW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGN1clRpbWUgPSBub3coKTtcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBNYXRoLm1heChcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAodGhpcy5kdXJhdGlvbiAtIGN1clRpbWUpIC8gU2Nyb2xsLlNURVBfSU5fTVNcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY3VyUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKCh0aGlzLmVuZFBvcyAtIGN1clBvcykgLyBzdGVwcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzY3JvbGwoKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgdGhpcy5jYWxjU2Nyb2xsQW1vdW50KCkpO1xuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSB0aGlzLmVuZFBvcykge1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc2Nyb2xsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXR0ZW1wdFNjcm9sbCgpIHtcbiAgICAgICAgaWYgKCdyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnIGluIHdpbmRvdyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5zY3JvbGwoMCwgdGhpcy5lbmRQb3MpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4uL3V0aWxzL2Z1bmNzJztcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLy4uL2RhdGEtbG9nL2RhdGEnO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gJy4vLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IHBhcmFtcyB9IGZyb20gJy4vLi4vdXRpbHMvcV9wYXJhbXMnO1xuaW1wb3J0IHsgRCB9IGZyb20gJy4vZG9jdW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuL2VsZW1lbnRzJztcbmxvZygnc3VibWl0IGZvcm0gbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBpbnRlcmZhY2UgQWxsb3dTdWJtaXNzaW9uIHtcbiAgICBhbGxvdygpOiBzdHJpbmcgfCBudWxsO1xuICAgIHByZVN1Ym1pdCguLi5hcmdzOiBhbnkpOiBhbnk7XG59XG5cbmNvbnN0IGsgPSAnTmNGMldSa1ViZjV0emo0Ykl2STk4MUZxbVM2cE1sTzgzZzJqN3U1Uic7XG5jb25zdCBnYXRlID0gJ2h0dHBzOi8vMnlrb3BxMW9oYS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9QUk9EL2xvZ3MnO1xuXG5jb25zdCBBbGxvd1N1Ym1pc3Npb25EZWZhdWx0OiBBbGxvd1N1Ym1pc3Npb24gPSB7XG4gICAgYWxsb3c6ICgpID0+IG51bGwsXG4gICAgcHJlU3VibWl0OiBub29wLFxufTtcblxuZXhwb3J0IGNsYXNzIFN1Ym1pdEZvcm0ge1xuICAgIHB1YmxpYyBzdGF0aWMgZWxlbSA9IEVsZW1lbnRzLnN1Ym1pdEZvcm0gYXMgSFRNTEZvcm1FbGVtZW50O1xuICAgIHB1YmxpYyBzdGF0aWMgYWxsb3dTdWJtaXREZWZhdWx0ID0geyBhbGxvdzogKCkgPT4gdHJ1ZSwgcHJlU3VibWl0OiBub29wIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKFxuICAgICAgICBhbGxvd1N1Ym1pc3Npb246IEFsbG93U3VibWlzc2lvbiA9IEFsbG93U3VibWlzc2lvbkRlZmF1bHRcbiAgICApIHtcbiAgICAgICAgU3VibWl0Rm9ybS5zdWJtaXRGdW5jID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgYWxsb3dlZCA9IGFsbG93U3VibWlzc2lvbi5hbGxvdygpO1xuICAgICAgICAgICAgaWYgKGFsbG93ZWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBxcCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcztcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEucmF3ID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRCA9IHFwLmdldCgnYXNzaWdubWVudElkJyk7XG4gICAgICAgICAgICAgICAgZGF0YS51cmxEYXRhLmhpdElEID0gcXAuZ2V0KCdoaXRJZCcpO1xuICAgICAgICAgICAgICAgIGRhdGEudXJsRGF0YS53b3JrZXJJRCA9IHFwLmdldCgnd29ya2VySWQnKTtcbiAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuc3VibWl0VG8gPVxuICAgICAgICAgICAgICAgICAgICBxcC5nZXQoJ3R1cmtTdWJtaXRUbycpICsgJy9tdHVyay9leHRlcm5hbFN1Ym1pdCc7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudXJsRGF0YS5hc3NpZ25tZW50SUQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgKEQuaWQoJ2Fzc2lnbm1lbnQtaWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuYXNzaWdubWVudElEO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS51cmxEYXRhLmhpdElEICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIChELmlkKCdoaXQtaWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnVybERhdGEuaGl0SUQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlTdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpO1xuICAgICAgICAgICAgICAgIGRhdGEuZGF0YS50YXNrID0gdXJsUGFyYW1zLmdldChcInRhZ1wiKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtYXJlYVwiKTtcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGEucmVzcG9uc2UgPSB0ZXh0QXJlYSA/ICh0ZXh0QXJlYSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcXG5cXG5EQVRBIEZPUiBUQVNLOiBcIiArIGRhdGEuZGF0YS50YXNrICsgXCJcXG5cIilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICAgICAgICAgICAgICBhbGVydChcIk9wZW4gY29uc29sZSB0byBzZWUgdXNlciBkYXRhLiBQbGVhc2UgcmVjb3JkIGludG8gYSB0ZXh0IGRvY3VtZW50LlwiKVxuXG4gICAgICAgICAgICAgICAgLy8gKEVsZW1lbnRzLnN1Ym1pdEZvcm0gYXMgSFRNTEZvcm1FbGVtZW50KS5hY3Rpb24gPSBkYXRhLnVybERhdGFcbiAgICAgICAgICAgICAgICAvLyAgICAgLnN1Ym1pdFRvIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICAvLyBhbGxvd1N1Ym1pc3Npb24ucHJlU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGdhdGUsIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAneC1hcGkta2V5JzogayxcbiAgICAgICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2FuZGJveDogcGFyYW1zLnNhbmRib3gsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB3dXN0bF9rZXk6IHBhcmFtcy53dXN0bF9rZXksXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0OiBwYXJhbXMucHJvamVjdCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGl0ZXJhdGlvbjogcGFyYW1zLml0ZXJhdGlvbixcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRhZzogcGFyYW1zLnRhZyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFzc2lnbm1lbnRJRDogZGF0YS51cmxEYXRhLmFzc2lnbm1lbnRJRCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGhpdElEOiBkYXRhLnVybERhdGEuaGl0SUQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB3b3JrZXJJRDogZGF0YS51cmxEYXRhLndvcmtlcklELFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbG9nOiBkYXRhLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgICAgICAgICAvLyB9KTsgLy8gVE9ETzogdmVyaWZ5IHRoaXMgYWN0dWFsbHkgd29ya3NcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXdhaXQgcmVzcC5qc29uKCkpO1xuICAgICAgICAgICAgICAgIC8vIGlmIChyZXNwLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgJ1lvdSBtYWRlIGEgYmFkIHJlcXVlc3Qgd2l0aCB5b3VyIHN1Ym1pc3Npb24uIFRoZSBzZXJ2ZXIgdGhpbmtzIHRoYXQgeW91IG1hZGUgdGhpcyBlcnJvcjogJyArXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgKGF3YWl0IHJlc3AuanNvbigpKS5lcnJvclxuICAgICAgICAgICAgICAgIC8vICAgICApO1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIFN1Ym1pdEZvcm0uZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgICAgIC8vICAgICAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAvLyAgICAgU3VibWl0Rm9ybS5zdWJtaXRGdW5jXG4gICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgICAgICAvLyBTdWJtaXRGb3JtLmVsZW0uc3VibWl0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGFsbG93ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBTdWJtaXRGb3JtLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgU3VibWl0Rm9ybS5zdWJtaXRGdW5jKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzdWJtaXRGdW5jOiAoZXZlbnQ6IEV2ZW50KSA9PiBhbnk7XG59XG4iLCJpbXBvcnQgeyBUb3BCYW5uZXIgfSBmcm9tIFwiLi9iYW5uZXJcIjtcbmltcG9ydCB7IEhUTUxMb2MgfSBmcm9tIFwiLi9odG1sX2xvY1wiO1xuXG5leHBvcnQgY2xhc3MgVHJhY2tlckVsZW1lbnRzIHtcbiAgcHVibGljIHN0YXRpYyBzZXR1cFRyYWNrZXJFbGVtZW50cygpIHtcbiAgICAvLyBzZXR1cCBkb20gZWxlbWVudHNcbiAgICBUb3BCYW5uZXIuc2V0dXAoKTtcbiAgICBIVE1MTG9jLnNldHVwKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICcuLy4uL3RyYWNrZXIvdHJhY2tlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGlzdG9yeUVudHJ5IHtcbiAgICBoYXNQcmV2VVJMOiBib29sZWFuO1xuICAgIHByZXZFbnRyeT86IEhpc3RvcnlFbnRyeTtcbiAgICBjdXJyVVJMOiBzdHJpbmc7XG4gICAgZXh0cmE/OiBhbnk7XG4gICAgbmV4dEVudHJpZXM6IEhpc3RvcnlFbnRyeVtdO1xufVxuXG5mdW5jdGlvbiBuZXdIaXN0b3J5RW50cnkoXG4gICAgY3VyclVSTDogc3RyaW5nLFxuICAgIGhhc1ByZXZVUkw6IGJvb2xlYW4sXG4gICAgcHJldkVudHJ5PzogSGlzdG9yeUVudHJ5LFxuICAgIGV4dHJhPzogYW55XG4pOiBIaXN0b3J5RW50cnkge1xuICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoJ2hpc3RvcnknKSh7IHVybDogY3VyclVSTCwgZXh0cmEgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3VyclVSTCxcbiAgICAgICAgaGFzUHJldlVSTCxcbiAgICAgICAgcHJldkVudHJ5LFxuICAgICAgICBleHRyYSxcbiAgICAgICAgbmV4dEVudHJpZXM6IFtdLFxuICAgIH07XG59XG5cbmV4cG9ydCBjbGFzcyBIaXN0b3J5IHtcbiAgICBwdWJsaWMgc3RhdGljIGZvcndhcmQodXJsOiBzdHJpbmcsIGV4dHJhPzogYW55KTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaGlzdEVudCA9IG5ld0hpc3RvcnlFbnRyeSh1cmwsIHRydWUsIEhpc3RvcnkuY3Vycmhpc3RvcnksIGV4dHJhKTtcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeS5uZXh0RW50cmllcy5wdXNoKGhpc3RFbnQpO1xuICAgICAgICBIaXN0b3J5LmN1cnJoaXN0b3J5ID0gaGlzdEVudDtcbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNhbkJhY2t3YXJkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeS5oYXNQcmV2VVJMICYmXG4gICAgICAgICAgICAhSGlzdG9yeS5jdXJyaGlzdG9yeS5wcmV2RW50cnk/LmV4dHJhPy53cmFwcGVyXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBiYWNrd2FyZCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIUhpc3RvcnkuY2FuQmFja3dhcmQoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ28gYmFjayBhbnkgZnVydGhlci4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhIaXN0b3J5LmN1cnJoaXN0b3J5LnByZXZFbnRyeSk7XG4gICAgICAgIGNvbnN0IHByZXZFbnRyeSA9IEhpc3RvcnkuY3Vycmhpc3RvcnkucHJldkVudHJ5IGFzIEhpc3RvcnlFbnRyeTtcbiAgICAgICAgY29uc3QgbmV4dFVSTCA9IHByZXZFbnRyeS5jdXJyVVJMO1xuICAgICAgICBjb25zdCBoaXN0RW50ID0gbmV3SGlzdG9yeUVudHJ5KFxuICAgICAgICAgICAgbmV4dFVSTCxcbiAgICAgICAgICAgIHByZXZFbnRyeS5oYXNQcmV2VVJMLFxuICAgICAgICAgICAgcHJldkVudHJ5LnByZXZFbnRyeSxcbiAgICAgICAgICAgIHsgYmFjazogdHJ1ZSB9XG4gICAgICAgICk7XG4gICAgICAgIEhpc3RvcnkuY3Vycmhpc3RvcnkgPSBoaXN0RW50O1xuICAgICAgICByZXR1cm4gbmV4dFVSTDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKHVybDogc3RyaW5nLCBleHRyYT86IGFueSkge1xuICAgICAgICBIaXN0b3J5LmZpcnN0SGlzdG9yeSA9IG5ld0hpc3RvcnlFbnRyeSh1cmwsIGZhbHNlLCB1bmRlZmluZWQsIGV4dHJhKTtcbiAgICAgICAgSGlzdG9yeS5jdXJyaGlzdG9yeSA9IEhpc3RvcnkuZmlyc3RIaXN0b3J5O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGZpcnN0SGlzdG9yeTogSGlzdG9yeUVudHJ5O1xuICAgIHByaXZhdGUgc3RhdGljIGN1cnJoaXN0b3J5OiBIaXN0b3J5RW50cnk7XG59XG5cbih3aW5kb3cgYXMgYW55KS5oID0gSGlzdG9yeTtcbiIsImltcG9ydCB7IEQgfSBmcm9tICcuLi9kb20vZG9jdW1lbnQnO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tICcuLi9kb20vZWxlbWVudHMnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi9kb20vbW9kYWwnO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGVycm9yLCBsb2cgfSBmcm9tICcuLi91dGlscy9jb25zb2xlX3dyYXBwZXInO1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4uL3V0aWxzL2Z1bmNzJztcbmltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLi91dGlscy9odG1sX2xvYWRlcic7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnLi9oaXN0b3J5JztcbmxvZygncm91dGVyIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgY29uc3QgZW51bSBSb3V0ZXJNb2RlIHtcbiAgICBPRkYsXG4gICAgT04sXG4gICAgU1RBTkRBUkRfQUxMT1dBTkNFUyxcbn1cblxuLy8gVE9ETzogTmVlZCB0byBpbXByb3ZlIHRoaXMgdG8gdGFrZSBpbiBhIGZ1bmN0aW9uIGZvciB0aGUgYWxsb3dhbmNlIG9yIHJlZHVjZSBhYnN0cmFjdG5lc3Mgb3ZlcmFsbC5cblxuZXhwb3J0IGNvbnN0IGVudW0gUm91dGVyTW9kdWxlIHtcbiAgICBBID0gJ0EnLFxuICAgIElNRyA9ICdJTUcnLFxuICAgIEZPUk0gPSAnRk9STScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVyQ29uZmlnIHtcbiAgICBtb2R1bGU6IFJvdXRlck1vZHVsZTtcbiAgICBtb2RlOiBSb3V0ZXJNb2RlO1xufVxuXG5pbnRlcmZhY2UgRnVsbFJvdXRlckNvbmZpZyBleHRlbmRzIFJvdXRlckNvbmZpZyB7XG4gICAgc2V0dXAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KTogYW55O1xufVxuXG5mdW5jdGlvbiB0ZXN0T24oZWxlbTogRWxlbWVudCwgY29uZmlnOiBSb3V0ZXJDb25maWcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBlbGVtLnRhZ05hbWUgPT09IGNvbmZpZy5tb2R1bGUgJiZcbiAgICAgICAgKGNvbmZpZy5tb2RlID09PSBSb3V0ZXJNb2RlLk9OIHx8XG4gICAgICAgICAgICBjb25maWcubW9kZSA9PT0gUm91dGVyTW9kZS5TVEFOREFSRF9BTExPV0FOQ0VTKVxuICAgICk7XG59XG5mdW5jdGlvbiB0ZXN0QWxsb3dhbmNlKGNvbmZpZzogUm91dGVyQ29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5tb2RlID09PSBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVM7XG59XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgSEFTSF9UQUdTID0gbmV3IFJlZ0V4cCgnIycpO1xuICAgIHB1YmxpYyBzdGF0aWMgRU1QVFkgPSBuZXcgUmVnRXhwKCdeJCcpO1xuICAgIHB1YmxpYyBzdGF0aWMgQVRfU1lNQk9MID0gbmV3IFJlZ0V4cCgnQCcpO1xuXG4gICAgcHVibGljIHN0YXRpYyBIQVNIX1RBR19SRVNQT05ERVIgPSBub29wO1xuICAgIHB1YmxpYyBzdGF0aWMgRU1QVFlfUkVTUE9OREVSID0gKGV2ZW50OiBFdmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwdWJsaWMgc3RhdGljIEFUX1NZTUJPTF9SRVNQT05ERVIgPSAoZXZlbnQ6IEV2ZW50KSA9PlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgcHVibGljIHN0YXRpYyBwYXRoUHJlZml4ID0gJyc7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbmZpZ3VyZShjb25maWdzOiBSb3V0ZXJDb25maWdbXSwgcGF0aFByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgIGNvbmZpZ3MuZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgICAgICAgICBSb3V0ZXIuY29uZmlncy5zZXQoY29uZmlnLm1vZHVsZSwgUm91dGVyLnVwZ3JhZGVDb25maWcoY29uZmlnKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBSb3V0ZXIucGF0aFByZWZpeCA9IHBhdGhQcmVmaXg7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cChlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgICAgIEQuZWFjaFJlY3VyKGVsZW0sIChub2RlKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbmZpZyBvZiBSb3V0ZXIuY29uZmlncy52YWx1ZXMoKSkge1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0T24obm9kZSwgY29uZmlnKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuc2V0dXAoY29uZmlnLCBub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgU1RBTkRBUkRfTElOS19MSVNURU5FUihlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHJldHVybiBlcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHRhcmdldC5ocmVmO1xuICAgICAgICAgICAgSGlzdG9yeS5mb3J3YXJkKFJvdXRlci5nZXRQYXRoTmFtZSh1cmwpKTtcbiAgICAgICAgICAgIGNvbnN0IHJldCA9IEhUTUxMb2FkZXIubG9hZFVSTCh1cmwsIEVsZW1lbnRzLmh0bWxMb2MpO1xuICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduZXdQYWdlTG9hZCcpKTtcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgT05fQ09NUExFVEVfU0xMKHBvc3Q6IChlOiBNb3VzZUV2ZW50KSA9PiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlcnJvcihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSk7XG4gICAgICAgICAgICAgICAgcG9zdChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgSU1BR0VfTElOS19MSVNURU5FUihlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIHJldHVybiBlcnJvcigoKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgRk9STV9PRkZfTElTVEVORVIoZTogRXZlbnQpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgJ0FsbCBmb3JtcyBleGNlcHQgZm9yIHRoZSBvbmUgaW4gdGhlIHRvcCBoZWFkZXIgYXJlIGluYWN0aXZlLidcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRBbGxvd2FuY2VzT24oKSB7XG4gICAgICAgIFJvdXRlci5yZWdpc3RlckFsbG93YW5jZShcbiAgICAgICAgICAgIHsgcmVnZXg6IFJvdXRlci5FTVBUWSwgZnVuYzogUm91dGVyLkVNUFRZX1JFU1BPTkRFUiB9LFxuICAgICAgICAgICAgeyByZWdleDogUm91dGVyLkhBU0hfVEFHUywgZnVuYzogUm91dGVyLkhBU0hfVEFHX1JFU1BPTkRFUiB9LFxuICAgICAgICAgICAgeyByZWdleDogUm91dGVyLkFUX1NZTUJPTCwgZnVuYzogUm91dGVyLkFUX1NZTUJPTF9SRVNQT05ERVIgfVxuICAgICAgICApO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRBbGxvd2FuY2VzT2ZmKCkge1xuICAgICAgICBSb3V0ZXIudW5yZWdpc3RlckFsbG93YW5jZShcbiAgICAgICAgICAgIFJvdXRlci5FTVBUWSxcbiAgICAgICAgICAgIFJvdXRlci5IQVNIX1RBR1MsXG4gICAgICAgICAgICBSb3V0ZXIuQVRfU1lNQk9MXG4gICAgICAgICk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJBbGxvd2FuY2UoXG4gICAgICAgIC4uLnJlZ2V4czogQXJyYXk8eyByZWdleDogUmVnRXhwOyBmdW5jOiAoZXZlbnQ6IEV2ZW50KSA9PiBhbnkgfT5cbiAgICApIHtcbiAgICAgICAgcmVnZXhzLmZvckVhY2goKHJlZ2V4KSA9PlxuICAgICAgICAgICAgUm91dGVyLmxpbmtBbGxvd2FuY2VzLnNldChyZWdleC5yZWdleCwgcmVnZXguZnVuYylcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyB1bnJlZ2lzdGVyQWxsb3dhbmNlKC4uLnJlZ2V4czogUmVnRXhwW10pIHtcbiAgICAgICAgcmVnZXhzLmZvckVhY2goKHJlZ2V4KSA9PiBSb3V0ZXIubGlua0FsbG93YW5jZXMuZGVsZXRlKHJlZ2V4KSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgY2xlYXJBbGxvd2FuY2VzKCkge1xuICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWQodXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgSGlzdG9yeS5mb3J3YXJkKFJvdXRlci5nZXRQYXRoTmFtZSh1cmwpKTtcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgSFRNTExvYWRlci5sb2FkVVJMKHVybCwgRWxlbWVudHMuaHRtbExvYyk7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbmV3UGFnZUxvYWQnKSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkV2l0aFBhdGhQcmVmaXgocGFnZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IHJldCA9IEhUTUxMb2FkZXIubG9hZFVSTChcbiAgICAgICAgICAgIFJvdXRlci5wYXRoUHJlZml4ICsgcGFnZSxcbiAgICAgICAgICAgIEVsZW1lbnRzLmh0bWxMb2NcbiAgICAgICAgKTtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCduZXdQYWdlTG9hZCcpKTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBTZXR1cEZ1bmN0aW9ucyA9IHtcbiAgICAgICAgQTogKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYU5vZGUgPSBlbGVtIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHRlc3RBbGxvd2FuY2UoY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGxldCBwYXNzZXNSZWdleFRlc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBhTm9kZS5ocmVmO1xuICAgICAgICAgICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5mb3JFYWNoKChmdW5jLCByZWdleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gcmVnZXgudGVzdChocmVmKTtcbiAgICAgICAgICAgICAgICAgICAgcGFzc2VzUmVnZXhUZXN0ID0gcGFzc2VzUmVnZXhUZXN0ICYmICF0ZXN0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3Nlc1JlZ2V4VGVzdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHJlZi5zdWJzdHIoaHJlZi5sZW5ndGggLSAzKSA9PT0gJ3BkZicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2RhbC5kaXNwbGF5KGhyZWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgJ2NsaWNrJywgKGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLlNUQU5EQVJEX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuU1RBTkRBUkRfTElOS19MSVNURU5FUihlIGFzIE1vdXNlRXZlbnQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgSU1HOiAoY29uZmlnOiBGdWxsUm91dGVyQ29uZmlnLCBlbGVtOiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWdOb2RlID0gZWxlbSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHRlc3RBbGxvd2FuY2UoY29uZmlnKSkge1xuICAgICAgICAgICAgICAgIGxldCBwYXNzZXNSZWdleFRlc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFJvdXRlci5saW5rQWxsb3dhbmNlcy5mb3JFYWNoKChmdW5jLCByZWdleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gIXJlZ2V4LnRlc3QoaW1nTm9kZS5zcmMpO1xuICAgICAgICAgICAgICAgICAgICBwYXNzZXNSZWdleFRlc3QgPSBwYXNzZXNSZWdleFRlc3QgJiYgdGVzdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnY2xpY2snLCBmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXNzZXNSZWdleFRlc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLklNQUdFX0xJTktfTElTVEVORVIoZSBhcyBNb3VzZUV2ZW50KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIChlKSA9PlxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuSU1BR0VfTElOS19MSVNURU5FUihlIGFzIE1vdXNlRXZlbnQpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgRk9STTogKGNvbmZpZzogRnVsbFJvdXRlckNvbmZpZywgZWxlbTogRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybU5vZGUgPSBlbGVtIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgICAgICAgICAgIGlmICh0ZXN0QWxsb3dhbmNlKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFzc2VzUmVnZXhUZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIubGlua0FsbG93YW5jZXMuZm9yRWFjaCgoZnVuYywgcmVnZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9ICFyZWdleC50ZXN0KGZvcm1Ob2RlLnNyYyk7XG4gICAgICAgICAgICAgICAgICAgIHBhc3Nlc1JlZ2V4VGVzdCA9IHBhc3Nlc1JlZ2V4VGVzdCAmJiB0ZXN0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKGVsZW0sICdjbGljaycsIGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhc3Nlc1JlZ2V4VGVzdCkge1xuICAgICAgICAgICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N1Ym1pdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuRk9STV9PRkZfTElTVEVORVJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihlbGVtLCAnc3VibWl0JywgUm91dGVyLkZPUk1fT0ZGX0xJU1RFTkVSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY29uZmlncyA9IG5ldyBNYXA8Um91dGVyTW9kdWxlLCBGdWxsUm91dGVyQ29uZmlnPigpO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGlua0FsbG93YW5jZXM6IE1hcDxSZWdFeHAsIChldmVudDogRXZlbnQpID0+IGFueT4gPSBuZXcgTWFwPFxuICAgICAgICBSZWdFeHAsXG4gICAgICAgIChldmVudDogRXZlbnQpID0+IGFueVxuICAgID4oKTtcblxuICAgIHByaXZhdGUgc3RhdGljIHBhdGhSZWdleCA9IC9cXC8oW1xcd10rLmh0bWwpLztcblxuICAgIHByaXZhdGUgc3RhdGljIHVwZ3JhZGVDb25maWcoY29uZmlnOiBSb3V0ZXJDb25maWcpOiBGdWxsUm91dGVyQ29uZmlnIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vZHVsZTogY29uZmlnLm1vZHVsZSxcbiAgICAgICAgICAgIG1vZGU6IGNvbmZpZy5tb2RlLFxuICAgICAgICAgICAgc2V0dXA6IFJvdXRlci5TZXR1cEZ1bmN0aW9uc1tjb25maWcubW9kdWxlXSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UGF0aE5hbWUodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCByZXQgPSBSb3V0ZXIucGF0aFJlZ2V4LmV4ZWModXJsKTtcbiAgICAgICAgcmV0dXJuIHJldCA9PT0gbnVsbCA/IHVybCA6IHJldC5sZW5ndGggPiAxID8gcmV0WzFdIDogdXJsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGlzVHJhY2tlckV2ZW50LCBvYmplY3RUb1RyYWNrZXJFdmVudCB9IGZyb20gJy4uL2RhdGEtbG9nL2V2ZW50JztcbmltcG9ydCB7IEV2ZW50UmVjZWl2ZXIgfSBmcm9tICcuLi9kYXRhLWxvZy9yZWNlaXZlcic7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gJy4uL2RvbS9lbGVtZW50cyc7XG5pbXBvcnQgeyBUcmFja2VyRWxlbWVudHMgfSBmcm9tICcuLi9kb20vdHJhY2tlcl9lbGVtcyc7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nLCBzZXREZWJ1Z0xldmVsIH0gZnJvbSAnLi4vdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IFNjZW5hcmlvIH0gZnJvbSAnLi4vdXRpbHMvc2NlbmFyaW9zJztcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLy4uL2RhdGEtbG9nL2RhdGEnO1xuaW1wb3J0IHsgQWxsb3dTdWJtaXNzaW9uLCBTdWJtaXRGb3JtIH0gZnJvbSAnLi8uLi9kb20vc3VibWl0X2Zvcm0nO1xuXG5sb2coJ3RyYWNrZXIgbG9hZGVkLicsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFja2VyQ29uZmlndXJhdGlvbiB7XG4gICAgYWxsb3dTdWJtaXNzaW9uOiBBbGxvd1N1Ym1pc3Npb247XG4gICAgZGVidWdMZXZlbDogRGVidWdMZXZlbEVudW07XG4gICAgYnVja2V0TmFtZTogc3RyaW5nO1xuICAgIGtleVByZWZpeDogc3RyaW5nO1xuICAgIHNldHVwKCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFja2VyIHtcbiAgICBwdWJsaWMgc3RhdGljIGxhc3RQb3MgPSB7IHg6IDAsIHk6IDAsIHRpbWU6IDAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZFNjZW5hcmlvKHNjZW46IFNjZW5hcmlvKSB7XG4gICAgICAgIGxldCBzdWIgPSBzY2VuLmNvbnRleHQ7XG4gICAgICAgIGlmIChzdWIubGVuZ3RoID4gNTApIHtcbiAgICAgICAgICAgIHN1YiA9IHN1Yi5zdWJzdHJpbmcoMCwgNTApO1xuICAgICAgICAgICAgY29uc3QgaW5kcyA9IFtcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJyAnKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJy4nKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJywnKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJz8nKSxcbiAgICAgICAgICAgICAgICBzdWIubGFzdEluZGV4T2YoJyEnKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBjb25zdCBpbmQgPSBNYXRoLm1heCguLi5pbmRzKTtcbiAgICAgICAgICAgIHN1YiA9IHN1Yi5zdWJzdHJpbmcoMCwgaW5kKSArICcuLi4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHNjZW4pO1xuICAgICAgICBjb25zb2xlLmxvZygnbG9hZGVkIHNjZW4nKTtcbiAgICAgICAgRWxlbWVudHMubXRUb3BCYW5uZXJUZXh0LmlubmVyVGV4dCA9IHN1YjtcbiAgICAgICAgRWxlbWVudHMubXRTY2VuYXJpb0NvbnRleHQuaW5uZXJUZXh0ID0gc2Nlbi5jb250ZXh0O1xuICAgICAgICBFbGVtZW50cy5tdFNjZW5hcmlvUXVlc3Rpb24uaW5uZXJUZXh0ID0gc2Nlbi5xdWVzdGlvbjtcbiAgICAgICAgRWxlbWVudHMuaHRtbExvYy5kYXRhc2V0LnRhc2sgPSBzY2VuLnRhZztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0KGNvbmZpZzogVHJhY2tlckNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgc2V0RGVidWdMZXZlbChjb25maWcuZGVidWdMZXZlbCk7XG4gICAgICAgIC8vIGNvbmZpZ3VyZSB0cmFja2VyIHNwZWNpZmljIGVsZW1lbnRzXG4gICAgICAgIFRyYWNrZXJFbGVtZW50cy5zZXR1cFRyYWNrZXJFbGVtZW50cygpO1xuICAgICAgICBTdWJtaXRGb3JtLnNldHVwKGNvbmZpZy5hbGxvd1N1Ym1pc3Npb24pO1xuICAgICAgICBkYXRhLmRhdGEudGFzayA9IEVsZW1lbnRzLmh0bWxMb2MuZGF0YXNldC50YXNrO1xuICAgICAgICBjb25maWcuc2V0dXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyRXZlbnQoZXZlbnRUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgZGF0YS5sb2dzW2V2ZW50VHlwZV0gPSBbXTtcbiAgICAgICAgdGhpcy5yZWNlaXZlci5yZWdpc3RlcihldmVudFR5cGUsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZGF0YS5sb2dzW2V2ZW50VHlwZV0ucHVzaChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFdmVudERpc3BhdGNoRnVuYyhldmVudFR5cGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RXZlbnREaXNwYXRjaEZ1bmMoZXZlbnRUeXBlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIChldkRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBldkRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1RyYWNrZXJFdmVudChldkRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFRvVHJhY2tlckV2ZW50KGV2RGF0YSwgZXZlbnRUeXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlci5kb0V2ZW50KGV2RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhdHRhY2hEYXRhKGtleTogc3RyaW5nLCBhdHRyaWJ1dGU6IGFueSkge1xuICAgICAgICBkYXRhLmRhdGFba2V5XSA9IGF0dHJpYnV0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCBjb21wdXRlOiAodmFsOiBhbnkpID0+IGFueSkge1xuICAgICAgICBkYXRhLmRhdGFbbmFtZV0gPSBjb21wdXRlKGRhdGEuZGF0YVtuYW1lXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVjZWl2ZXIgPSBuZXcgRXZlbnRSZWNlaXZlcigpO1xufVxuIiwiaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLy4uL2RhdGEtbG9nL2RhdGFcIjtcbmxvZyhcImNvbnNvbGUgd3JhcHBlciBsb2FkZWQuXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlcnJvcjxUPihcbiAgZnVuYzogKC4uLmFyZ3M6IGFueSkgPT4gVFxuKTogUHJvbWlzZTxUIHwgdW5kZWZpbmVkPiB7XG4gIHJldHVybiBlcnJvckhPKGZ1bmMpKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvckhPPFQ+KFxuICBmdW5jOiAoLi4uYXJnczogYW55KSA9PiBUXG4pOiAoLi4uYXJnczogYW55KSA9PiBQcm9taXNlPFQgfCB1bmRlZmluZWQ+IHtcbiAgcmV0dXJuIGFzeW5jICguLi5hcmdzOiBhbnkpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmMoYXJncyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRhdGEuZXJyb3JzLnB1c2goZXJyb3IpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZW51bSBEZWJ1Z0xldmVsRW51bSB7XG4gIE5PTkUgPSAxLFxuICBCQVNJQyA9IDIsXG4gIERFVEFJTEVEID0gMyxcbn1cblxubGV0IGRlYnVnTGV2ZWw6IERlYnVnTGV2ZWxFbnVtID0gRGVidWdMZXZlbEVudW0uQkFTSUM7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWJ1Z0xldmVsKGxldmVsOiBEZWJ1Z0xldmVsRW51bSkge1xuICBkZWJ1Z0xldmVsID0gbGV2ZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cobWVzc2FnZTogc3RyaW5nLCBpbXBvcnRhbmNlOiBEZWJ1Z0xldmVsRW51bSkge1xuICBpZiAoZGVidWdMZXZlbCA+PSBpbXBvcnRhbmNlKSB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tIFwiLi9jb25zb2xlX3dyYXBwZXJcIjtcbmxvZyhcImZ1bmNzIGxvYWRlZC5cIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1lbXB0eVxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuZXhwb3J0IGZ1bmN0aW9uIG5vdygpOiBudW1iZXIge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59XG4iLCJpbXBvcnQgeyBEIH0gZnJvbSAnLi4vZG9tL2RvY3VtZW50JztcbmltcG9ydCB7IERlYnVnTGV2ZWxFbnVtLCBsb2cgfSBmcm9tICcuL2NvbnNvbGVfd3JhcHBlcic7XG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi9mdW5jcyc7XG5sb2coJ2h0bWwgbG9hZGVyIGxvYWRlZC4nLCBEZWJ1Z0xldmVsRW51bS5CQVNJQyk7XG5leHBvcnQgaW50ZXJmYWNlIENhY2hlIHtcbiAgICBbbmFtZTogc3RyaW5nXTogRWxlbWVudDtcbn1cbmV4cG9ydCBjbGFzcyBIVE1MTG9hZGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIENBQ0hFOiBDYWNoZSA9IHt9O1xuXG4gICAgcHVibGljIHN0YXRpYyBmaW5pc2goKSB7XG4gICAgICAgIEhUTUxMb2FkZXIuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICBIVE1MTG9hZGVyLmZsYXR0ZW5UU0xvYWRUYWdzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0ZpbmlzaGVkKCkge1xuICAgICAgICByZXR1cm4gSFRNTExvYWRlci5maW5pc2hlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNhY2hlSFRNTChuYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykge1xuICAgICAgICBpZiAoSFRNTExvYWRlci5maW5pc2hlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdDYW5ub3QgY2FjaGUgbmV3IEhUTUwgZW50aXRpZXMgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0c2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cy1sb2FkJyk7XG4gICAgICAgIHRzbC5kYXRhc2V0Lm5hbWUgPSBuYW1lO1xuICAgICAgICB0c2wuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgdGhpcy5DQUNIRVtuYW1lXSA9IHRzbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyUG9zdExvYWRGdW5jKGZ1bmM6ICgpID0+IGFueSkge1xuICAgICAgICBsb2coJ3JlZ3NpdGVyIHBvc3QgbG9hZCBmdW5jdGlvbicsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgSFRNTExvYWRlci5wb3N0TG9hZEZ1bmMgPSBmdW5jO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZChodG1sOiBzdHJpbmcsIGVsZW06IEVsZW1lbnQgfCBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbG9nKCdiZWdpbiBsb2FkJywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBELmVsZW0oZWxlbSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBmcmFnID0gcmFuZ2UuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGh0bWwpO1xuICAgICAgICAgICAgICAgIEhUTUxMb2FkZXIucmVtb3ZlVGFnc0Zyb21Eb2N1bWVudEZyYWdtZW50KGZyYWcsICdzY3JpcHQnKTtcbiAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLmxvYWRBbGxDYWNoZWRFbGVtZW50cyhmcmFnKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gICAgICAgICAgICAgICAgbG9nKCdlbmQgbG9hZCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICBIVE1MTG9hZGVyLnBvc3RMb2FkRnVuYygpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkVVJMKHVybDogc3RyaW5nLCBlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBIVE1MTG9hZGVyLmxvYWQoYXdhaXQgSFRNTExvYWRlci5nZXRIVE1MKHVybCksIGVsZW0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SFRNTCh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbG9nKCdiZWdpbiByZXF1ZXN0JywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZW5kKG51bGwpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2coJ3Jlc29sdmUgcmVxdWVzdCcsIERlYnVnTGV2ZWxFbnVtLkRFVEFJTEVEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmaW5pc2hlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcG9zdExvYWRGdW5jOiAoKSA9PiBhbnkgPSBub29wO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVGFnc0Zyb21Eb2N1bWVudEZyYWdtZW50KFxuICAgICAgICBmcmFnOiBEb2N1bWVudEZyYWdtZW50LFxuICAgICAgICB0YWdOYW1lOiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgZnJhZy5xdWVyeVNlbGVjdG9yQWxsKHRhZ05hbWUpLmZvckVhY2goKHRhZykgPT4gZnJhZy5yZW1vdmVDaGlsZCh0YWcpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBmbGF0dGVuVFNMb2FkVGFncygpIHtcbiAgICAgICAgbG9nKCdGbGF0dGVuaW5nJywgRGVidWdMZXZlbEVudW0uREVUQUlMRUQpO1xuICAgICAgICBjb25zdCBzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgIE9iamVjdC5rZXlzKEhUTUxMb2FkZXIuQ0FDSEUpLmZvckVhY2goXG4gICAgICAgICAgICAobmFtZSkgPT5cbiAgICAgICAgICAgICAgICAoSFRNTExvYWRlci5DQUNIRVtuYW1lXSA9IEhUTUxMb2FkZXIuZmxhdHRlblRTTG9hZFRhZyhcbiAgICAgICAgICAgICAgICAgICAgSFRNTExvYWRlci5nZXRDYWNoZWRDb250ZW50KG5hbWUpIGFzIEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHMsXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApIGFzIEVsZW1lbnQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbXVsdGlwbGVUYWJzKG46IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCByZXQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHJldCArPSAnXFx0JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGZsYXR0ZW5UU0xvYWRUYWcoXG4gICAgICAgIGVsZW06IEVsZW1lbnQsXG4gICAgICAgIGZsYXR0ZW5lZDogU2V0PHN0cmluZz4sXG4gICAgICAgIGNvdW50OiBudW1iZXJcbiAgICApOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IHRhYnMgPSBIVE1MTG9hZGVyLm11bHRpcGxlVGFicyhjb3VudCk7XG4gICAgICAgIGlmIChjb3VudCA+IDEwMCkge1xuICAgICAgICAgICAgYWxlcnQoJ0NoZWNrIHRoZSBjb25zb2xlLCBhbiBlcnJvciBoYXMgb2NjdXJyZWQuJyk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0l0IHNlZW1zIGxpa2UgeW91IG1pZ2h0IGhhdmUgaW5maW5pdGVseSByZWN1cnNpdmVseSBuZXN0ZWQgdGFncy4nICtcbiAgICAgICAgICAgICAgICAgICAgJ1xcbkhlcmUgYXJlIGFsbCBvZiB0aGUgdGFncyB0aGF0IGhhdmUgYmVlbiBmbGF0dGVuZWQgc28gZmFyOiAnICtcbiAgICAgICAgICAgICAgICAgICAgZmxhdHRlbmVkICtcbiAgICAgICAgICAgICAgICAgICAgJ1xcbkhlcmUgaXMgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgZWxlbWVudDogJyArXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xuICAgICAgICBpZiAobmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IEhUTUxMb2FkZXIuZ2V0Q2FjaGVkQ29udGVudChuYW1lKTtcbiAgICAgICAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmbGF0dGVuZWQuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpLmZvckVhY2goKGUpID0+IGUucmVtb3ZlKCkpO1xuICAgICAgICBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RzLWxvYWQnKS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IEhUTUxMb2FkZXIuZmxhdHRlblRTTG9hZFRhZyhlLCBmbGF0dGVuZWQsIGNvdW50ICsgMSk7XG4gICAgICAgICAgICBpZiAoY2hpbGQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlLnJlcGxhY2VXaXRoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZsYXR0ZW5lZC5hZGQobmFtZSk7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldENhY2hlZENvbnRlbnQoXG4gICAgICAgIG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWRcbiAgICApOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQgfHwgbmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IEhUTUxMb2FkZXIuQ0FDSEVbbmFtZV07XG4gICAgICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQgfHwgY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbG9hZEFsbENhY2hlZEVsZW1lbnRzKGZyYWc6IERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAgICAgZnJhZy5xdWVyeVNlbGVjdG9yQWxsKCd0cy1sb2FkJykuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBIVE1MTG9hZGVyLmdldENhY2hlZENvbnRlbnQobmFtZSk7XG4gICAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5yZXBsYWNlV2l0aChjb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiLi4vZG9tL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vZG9tL2RvY3VtZW50XCI7XG5pbXBvcnQgeyBEZWJ1Z0xldmVsRW51bSwgbG9nIH0gZnJvbSBcIi4vY29uc29sZV93cmFwcGVyXCI7XG5sb2coXCJpZCBnZW5lcmF0b3IgbG9hZGVkXCIsIERlYnVnTGV2ZWxFbnVtLkJBU0lDKTtcbmV4cG9ydCBjbGFzcyBJREdlbmVyYXRvciB7XG4gIHB1YmxpYyBzdGF0aWMgcmVzZXQoKSB7XG4gICAgSURHZW5lcmF0b3IuaWRDb3VudCA9IDA7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldCBuZXh0KCkge1xuICAgIElER2VuZXJhdG9yLmlkQ291bnQgKz0gMTtcbiAgICByZXR1cm4gSURHZW5lcmF0b3IucHJlZml4ICsgSURHZW5lcmF0b3IuaWRDb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXBwbHlJRChlbGVtOiBFbGVtZW50KSB7XG4gICAgZWxlbS5pZCA9IGVsZW0uaWQgPyBlbGVtLmlkIDogSURHZW5lcmF0b3IubmV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWN1cnNpdmVseSBhZGRzIGlkcyB0byBhbGwgZWxlbWVudHMgdGhhdCBhcmUgYmVsb3cgdGhlIGdpdmVuXG4gICAqIGVsZW1lbnQgaW4gdGhlIGhlaXJhcmNoeS5cbiAgICpcbiAgICogQHBhcmFtIGVsZW0gLSB0aGUgZWxlbWVudCB0byBzdGFydCBhcHBseWluZyBpZHMgdG8gaXRzIGNoaWxkcmVuLlxuICAgKiAgICAgICAgICAgICAgICAgIFdpbGwgbm90IGFwcGx5IGFuIGlkIHRvIHRoaXMgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXBwbHlSZWN1cihlbGVtOiBFbGVtZW50IHwgc3RyaW5nKSB7XG4gICAgRC5lYWNoUmVjdXIoZWxlbSwgdGhpcy5hcHBseUlEKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyBpZHMgdG8gYWxsIGh0bWwgZWxlbWVudHMgaW4gdGhlIHRhcmdldCBsb2NhdGlvbiBpbiB0aGUgRE9NIHRoYXQgZG8gbm90IGhhdmUgaWRzLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhdHRhY2hJZHNUb0FsbEVsZW1lbnRzKCkge1xuICAgIElER2VuZXJhdG9yLmFwcGx5UmVjdXIoRWxlbWVudHMuaHRtbExvYyk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBpZENvdW50ID0gMDtcbiAgcHJpdmF0ZSBzdGF0aWMgcHJlZml4ID0gXCJhdXRvX2dlbl9pZF91bnFfXCI7XG59XG4iLCJjb25zdCBxUGFyYW1zID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zO1xuZXhwb3J0IGNvbnN0IHBhcmFtcyA9IHtcbiAgICB3dXN0bF9rZXk6ICcnLFxuICAgIHNhbmRib3g6IGZhbHNlLFxuICAgIHByb2plY3Q6ICcnLFxuICAgIGl0ZXJhdGlvbjogMCxcbiAgICB0YWc6ICcnLFxufTtcbnRyeSB7XG4gICAgcVBhcmFtcy5mb3JFYWNoKGNvbnNvbGUubG9nKTtcbiAgICBpZiAoXG4gICAgICAgIFsnd3VzdGxfa2V5JywgJ3NhbmRib3gnLCAncHJvamVjdCcsICdpdGVyYXRpb24nLCAndGFnJ10uZXZlcnkoKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2tleTogJyArIHFQYXJhbXMuaGFzKGtleSkpO1xuICAgICAgICAgICAgcmV0dXJuIHFQYXJhbXMuaGFzKGtleSk7XG4gICAgICAgIH0pXG4gICAgKSB7XG4gICAgICAgIHBhcmFtcy53dXN0bF9rZXkgPSBxUGFyYW1zLmdldCgnd3VzdGxfa2V5JykgYXMgc3RyaW5nO1xuICAgICAgICBwYXJhbXMuc2FuZGJveCA9IHFQYXJhbXMuZ2V0KCdzYW5kYm94JykgPT09ICd0cnVlJztcbiAgICAgICAgcGFyYW1zLnByb2plY3QgPSBxUGFyYW1zLmdldCgncHJvamVjdCcpIGFzIHN0cmluZztcbiAgICAgICAgcGFyYW1zLml0ZXJhdGlvbiA9IHBhcnNlSW50KHFQYXJhbXMuZ2V0KCdpdGVyYXRpb24nKSBhcyBzdHJpbmcsIDEwKTtcbiAgICAgICAgcGFyYW1zLnRhZyA9IHFQYXJhbXMuZ2V0KCd0YWcnKSBhcyBzdHJpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ21pc3NpbmcgcXVlcnkgcGFyYW1zJyk7XG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgJ1RoaXMgSElUIGlzIG1pc3NpbmcgbmVjY2Vzc2FyeSBtZXRhZGF0YSwgc29ycnkgZm9yIHRoZSBpbmNvbnZlbmllbmNlLiBQbGVhc2UgY29udGFjdCB0aGUgUmVxdWVzdGVyIGFzIHRoaXMgaXMgbm90IGludGVuZGVkIHRvIGhhcHBlbi4nXG4gICAgICAgICk7XG4gICAgfVxufSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGFsZXJ0KGUpO1xuICAgIGFsZXJ0KFxuICAgICAgICAnVGhpcyBISVQgaXMgYnJva2VuLCBzb3JyeSBmb3IgdGhlIGluY29udmVuaWVuY2UuIFBsZWFzZSBjb250YWN0IHRoZSBSZXF1ZXN0ZXIgYXMgdGhpcyBpcyBub3QgaW50ZW5kZWQgdG8gaGFwcGVuLidcbiAgICApO1xufVxuIiwiaW1wb3J0IHsgRGVidWdMZXZlbEVudW0sIGxvZyB9IGZyb20gXCIuL2NvbnNvbGVfd3JhcHBlclwiO1xuXG5sb2coXCJyZWFkeSBsb2FkZWRcIiwgRGVidWdMZXZlbEVudW0uQkFTSUMpO1xuXG5sZXQgcmVhZHkgPSBmYWxzZTtcblxubGV0IHJlc29sdmVGdW5jOiAodmFsOiBib29sZWFuKSA9PiBhbnk7XG5sZXQgcmVqZWN0RnVuYztcbmNvbnN0IHJlYWR5UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsOiBib29sZWFuKSA9PiBhbnksIHJlamVjdCkgPT4ge1xuICByZXNvbHZlRnVuYyA9IHJlc29sdmU7XG4gIHJlamVjdEZ1bmMgPSByZWplY3Q7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsb2coXCJkb2N1bWVudCBpcyByZWFkeVwiLCBEZWJ1Z0xldmVsRW51bS5ERVRBSUxFRCk7XG4gIHJlYWR5ID0gdHJ1ZTtcbiAgcmVzb2x2ZUZ1bmModHJ1ZSk7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhZHkoKSB7XG4gIHJldHVybiByZWFkeTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YWl0VW50aWxSZWFkeSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIHJlYWR5ID8gUHJvbWlzZS5yZXNvbHZlKHRydWUpIDogcmVhZHlQcm9taXNlO1xufVxuIiwiZXhwb3J0IGludGVyZmFjZSBTY2VuYXJpbyB7XG4gICAgY29udGV4dDogc3RyaW5nO1xuICAgIHF1ZXN0aW9uOiBzdHJpbmc7XG4gICAgdGFnOiBzdHJpbmc7XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdmFyLXJlcXVpcmVzXG5leHBvcnQgY29uc3Qgc2NlbmFyaW9zOiBTY2VuYXJpb1tdID0gcmVxdWlyZSgnLi8uLi8uLi8uLi8uLi9zY2VuYXJpb3Mvc2NlbmFyaW9zLmpzb24nKTtcbih3aW5kb3cgYXMgYW55KS5zY2VuYXJpb3MgPSBzY2VuYXJpb3M7XG4iLCJpbXBvcnQgeyBEIH0gZnJvbSBcIi4vLi4vY29yZS9kb20vZG9jdW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbiB7XG4gIHB1YmxpYyBzdGF0aWMgc2V0dXBBbGwoKSB7XG4gICAgQWNjb3JkaW9uLmRpc2NhcmRBbGwoKTtcbiAgICBjb25zdCBhY2NvcmRpb25zID0gRC5jbGF6KFwiYWNjb3JkaW9uXCIpO1xuICAgIGZvciAobGV0IGFjY0luZGV4ID0gMDsgYWNjSW5kZXggPCBhY2NvcmRpb25zLmxlbmd0aDsgKythY2NJbmRleCkge1xuICAgICAgY29uc3QgZWxlbSA9IGFjY29yZGlvbnMuaXRlbShhY2NJbmRleCk7XG4gICAgICBpZiAoZWxlbSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgQWNjb3JkaW9uLmFjY29yZGlvbnMucHVzaChuZXcgQWNjb3JkaW9uKGVsZW0pKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc2NhcmRBbGwoKSB7XG4gICAgQWNjb3JkaW9uLmFjY29yZGlvbnMgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGFjY29yZGlvbnM6IEFjY29yZGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvdXRlcjogRWxlbWVudCkge1xuICAgIEQuYWRkRXZlbnRMaXN0ZW5lcihvdXRlciwgXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAvKiBUb2dnbGUgYmV0d2VlbiBhZGRpbmcgYW5kIHJlbW92aW5nIHRoZSBcImFjdGl2ZVwiIGNsYXNzLFxuICAgICAgICAgICAgICAgIHRvIGhpZ2hsaWdodCB0aGUgYnV0dG9uIHRoYXQgY29udHJvbHMgdGhlIHBhbmVsICovXG4gICAgICB0aGlzLm91dGVyLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG5cbiAgICAgIC8qIFRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgYWN0aXZlIHBhbmVsICovXG4gICAgICBjb25zdCBwYW5lbCA9IHRoaXMub3V0ZXIubmV4dEVsZW1lbnRTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHBhbmVsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZG9Tb21ldGhpbmcoKSB7XG4gIGNvbnNvbGUubG9nKFwiUHV0IHNvbWUgY29kZSBpbiBoZXJlIVwiKTtcbn1cbiIsImltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLi9jb3JlL3V0aWxzL2h0bWxfbG9hZGVyJztcbmltcG9ydCB7IEFjY29yZGlvbiB9IGZyb20gJy4vYWNjb3JkaW9uJztcbmltcG9ydCB7IGRvU29tZXRoaW5nIH0gZnJvbSAnLi9kby1zb21ldGhpbmcnO1xuaW1wb3J0IHsgSFRNTENvbnRlbnQsIGl0ZW1zVG9DYWNoZSB9IGZyb20gJy4vaHRtbC1pbXBvcnRzJztcbmltcG9ydCB7IFNsaWRlc2hvdyB9IGZyb20gJy4vc2xpZGVzaG93JztcblxuLy8gUHV0IGFsbCBmdW5jdGlvbiBjYWxscyB0aGF0IG5lZWQgdG8gYmUgbWFkZSBvbiBldmVyeSBwYWdlIGxvYWQgaW5zaWRlIHRoZSBzZXR1cEFsbCBmdW5jdGlvbiBib2R5LlxuZXhwb3J0IGZ1bmN0aW9uIFB1dFN0dWRlbnRQYWdlTG9hZE9wZXJhdGlvbnNJbnNpZGVUaGlzU3R1ZGVudEJvZHkoKSB7XG4gICAgLy8gVE9ETzogUHV0IGFsbCBvcGVyYXRpb25zIHRoYXQgeW91IHdhbnQgdG8gaGFwcGVuIG9uIGV2ZXIgcGFnZSBsb2FkIGluIHRoaXMgZnVuY3Rpb24uXG4gICAgLy8gRm9yIGV4YW1wbGUgeW91IGNvdWxkIHdyaXRlOiBTdGlja3kuc2V0dXAoKVxuICAgIGRvU29tZXRoaW5nKCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXR1cEFsbCgpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocjogYW55KSA9PiBzZXRUaW1lb3V0KHIsIDEwMCkpO1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWRpbmcnKTtcbiAgICBTbGlkZXNob3cuc2V0dXBBbGwoKTtcbiAgICBBY2NvcmRpb24uc2V0dXBBbGwoKTtcbiAgICBQdXRTdHVkZW50UGFnZUxvYWRPcGVyYXRpb25zSW5zaWRlVGhpc1N0dWRlbnRCb2R5KCk7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZGVkJyk7XG59XG5cbml0ZW1zVG9DYWNoZS5mb3JFYWNoKChpdGVtOiBIVE1MQ29udGVudCkgPT4ge1xuICAgIEhUTUxMb2FkZXIuY2FjaGVIVE1MKGl0ZW0ubmFtZSwgaXRlbS5jb250ZW50KTtcbn0pO1xuKHdpbmRvdyBhcyBhbnkpLkhUTUxMb2FkZXIgPSBIVE1MTG9hZGVyO1xuXG5jb25zb2xlLmxvZygnZHluYW1pYy1kb20gbG9hZGVkJyk7XG4vLyBEbyBub3QgdG91Y2ggdGhpcyBsaW5lLCBuZWVkZWQgdG8gcmVpbml0aWFsaXplIGNvZGUgaW4gdGhlIGR5bmFtaWMtZG9tLnRzIHNldHVwQWxsIGZ1bmN0aW9uXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbmV3UGFnZUxvYWQnLCAoKSA9PiBzZXR1cEFsbCgpKTtcbiIsImRlY2xhcmUgZnVuY3Rpb24gcmVxdWlyZShpZDogc3RyaW5nKTogc3RyaW5nO1xuXG4vLyBUaGlzIGRlZmluZXMgdGhlIGRhdGEgdGhhdCBuZWVkcyB0byBiZSBwYXNzZWQgdG8gdGhlIEhUTUxMb2FkZXIgdG8gY2FjaGUgeW91ciBodG1sIGNvbnRlbnQuXG5leHBvcnQgaW50ZXJmYWNlIEhUTUxDb250ZW50IHtcbiAgICBuYW1lOiBzdHJpbmc7IC8vIFRoZSBuYW1lIHRoYXQgeW91IHdpbGwgdXNlIHRvIHJlZmVyZW5jZSB0aGUgY29udGVudCBpbiB5b3VyIGh0bWwgcGFnZXMuXG4gICAgY29udGVudDogc3RyaW5nOyAvLyBUaGUgYWN0dWFsIGh0bWwgc3RyaW5nIHRoYXQgd2lsbCBiZSBwdWxsZWQgZnJvbSB0aGUgc291cmNlIGZpbGUgdGhhdCB5b3Ugc3BlY2lmeS5cbn1cblxuLy8gQW4gSFRNTENvbnRlbnQgb2JqZWN0IHNob3VsZCBsb29rIGxpa2UgdGhlIGZvbGxvd2luZzpcbi8vIHtcbi8vICAgICBuYW1lOiAnZm9vdGVyJyxcbi8vICAgICBjb250ZW50OiByZXF1aXJlKCcuL2h0bWwvZm9vdGVyLmh0bWwnKSxcbi8vIH1cblxuLy8gVGhlbiB5b3UgY2FuIHJlZmVyZW5jZSB0aGF0IGNvbnRlbnQgaW4geW91ciBodG1sIHVzaW5nIHRoZSBmb2xsb3dpbmcgdGFnIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgbmFtZSBhdHRyaWJ1dGUuXG4vLyA8dHMtbG9hZCBkYXRhLW5hbWU9XCJoZWFkZXJcIj48L3RzLWxvYWQ+XG5cbi8vIFlvdSBjYW4gc3BlY2lmeSBhcyBtYW55IGFzIHlvdSB3YW50IGluc2lkZSBvZiB0aGUgYXJyYXkgYW5kIHRoZXkgd2lsbCBhbGwgYmUgYnVuZGxlZCB1cCB3aXRoIHlvdXIgd2Vic2l0ZS5cbi8vIE1ha2Ugc3VyZSB0byBtYWtlIGEgY29ycmVzcG9uZGluZyBodG1sIGZpbGUgaW4gdGhlIGh0bWwgZmlsZSBmb2xkZXIgZm9yIGVhY2ggZWxlbWVudCB5b3Ugc3BlY2lmeS5cblxuZXhwb3J0IGNvbnN0IGl0ZW1zVG9DYWNoZSA9IFtcbiAgICAvLyBGZWVsIGZyZWUgdG8gY2hhbmdlIHRoZSBjb250ZW50IGluc2lkZSBhbnkgb2YgdGhlIGh0bWwgZmlsZXMgaW4gdGhlIGh0bWwgZmlsZSBmb2xkZXIgdG8gc3VpdCB5b3VyIG5lZWRzLlxuICAgIHtcbiAgICAgICAgbmFtZTogJ2hlYWRlcicsXG4gICAgICAgIGNvbnRlbnQ6IHJlcXVpcmUoJy4vaHRtbC9oZWFkZXIuaHRtbCcpLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnZm9vdGVyJyxcbiAgICAgICAgY29udGVudDogcmVxdWlyZSgnLi9odG1sL2Zvb3Rlci5odG1sJyksXG4gICAgfSxcbiAgICAvLyBQdXQgbW9yZSBpdGVtcyBpbiB0aGUgYXJyYXkgYmVsb3cgaGVyZS5cbl07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvb3RlciBpZD1cXFwiY29sb3Bob25cXFwiIGNsYXNzPVxcXCJmb290ZXJcXFwiIHJvbGU9XFxcImNvbnRlbnRpbmZvXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlci13aWRnZXRzXFxcIj5cXG4gICAgICA8YXNpZGUgY2xhc3M9XFxcIndpZGdldCBzaXRlLWNvbnRhY3RcXFwiPlxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5OdXJzZXJ5IFNjaG9vbDwvaDI+XFxuICAgICAgICA8cD42OTI2IEZvcmVzdCBQYXJrIFBhcmt3YXk8L3A+XFxuICAgICAgICA8cD5TdC4gTG91aXMsIE1PIDYzMTMwPC9wPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcInBob25lXFxcIj4zMTQtOTM1LTY2ODkgPHNwYW4+fDwvc3Bhbj4gRmF4OiAzMTQtOTM1LTcyNDk8L3A+XFxuICAgICAgICA8cD5cXG4gICAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvbWFpbHRvOm51cnNlcnlAd3VzdGwuZWR1XFxcIj5udXJzZXJ5QHd1c3RsLmVkdTwvYT5cXG4gICAgICAgIDwvcD5cXG4gICAgICA8L2FzaWRlPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIndpZGdldC13cmFwcGVyXFxcIj5cXG4gICAgICAgIDxhc2lkZSBpZD1cXFwidGV4dC00XFxcIiBjbGFzcz1cXFwid2lkZ2V0IHdpZGdldF90ZXh0IHdpZGdldC1jb3VudC0yXFxcIj5cXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5Ib3VycyBvZiBPcGVyYXRpb248L2gyPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0d2lkZ2V0XFxcIj5cXG4gICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgIENsYXNzZXMgbWVldCBNb24uIHRocm91Z2ggRnJpLjxicj5cXG4gICAgICAgICAgICAgIE1vcm5pbmc6IDktMTE6NDUgYS5tLjxicj5cXG4gICAgICAgICAgICAgIEFmdGVybm9vbjogMTI6MzAtMzoxNSBwLm0uPGJyPlxcbiAgICAgICAgICAgICAgRnVsbCBkYXk6IDkgYS5tLi0zOjE1IHAubS5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hc2lkZT5cXG4gICAgICAgIDxhc2lkZSBpZD1cXFwidGV4dC0zXFxcIiBjbGFzcz1cXFwid2lkZ2V0IHdpZGdldF90ZXh0IHdpZGdldC1jb3VudC0yXFxcIj5cXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXItd2lkZ2V0LXRpdGxlXFxcIj5BcHBseSBmb3IgdGhlIE51cnNlcnkgU2Nob29sPC9oMj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dHdpZGdldFxcXCI+XFxuICAgICAgICAgICAgPHA+XFxuICAgICAgICAgICAgICBFeHBlcmllbmNlIHRoZSBpbm5vdmF0aXZlIGFwcHJvYWNoIGFuZCBkeW5hbWljIHRlYWNoaW5nXFxuICAgICAgICAgICAgICBlbnZpcm9ubWVudCBvZiB0aGUgV2FzaGluZ3RvbiBVbml2ZXJzaXR5IE51cnNlcnkgU2Nob29sLlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJmaWxlcy9hcHBseS5odG1sXFxcIj5SZWdpc3RlciBOb3c8L2E+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hc2lkZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtaW5mb1xcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcImZvb3Rlci1jb3B5cmlnaHRcXFwiPsKpMjAxOSBXYXNoaW5ndG9uIFVuaXZlcnNpdHkgaW4gU3QuIExvdWlzPC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZm9vdGVyPlwiO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgaWQ9XFxcInd1c3RsLWJyYW5kaW5nXFxcIj5cXG4gIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB3aWR0aD1cXFwiMzIxXFxcIiBoZWlnaHQ9XFxcIjI4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMzIxIDI4XFxcIiBjbGFzcz1cXFwid2FzaHUtbG9nb1xcXCJcXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ0aXRsZVxcXCI+XFxuICAgIDx0aXRsZSBpZD1cXFwidGl0bGVcXFwiPldhc2hpbmd0b24gVW5pdmVyc2l0eSBpbiBTdC4gTG91aXM8L3RpdGxlPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRkZGXFxcIlxcbiAgICAgIGQ9XFxcIk0xMC40NiAxLjc2Yy0uMDkgMC00LjQxLjA0LTEwLjQ2LTEuMjFWMThjMCAuMjcuMDEuNDcuMDEuNDd2LjAyYy4wNC44MS4yOCAxLjQ1Ljc3IDIgLjMyLjM0Ljc2LjcgMS4zOCAxLjA1LjE3LjEuMzUuMTguNTUuMjguMTUuMDcuMzEuMTQuNDcuMi4xNC4wNi41NS4yNC42OS4yOWw2LjU5IDIuNSA2LjU5LTIuNWMuMTUtLjA1LjU2LS4yNC42OS0uMjkuMTYtLjA3LjMyLS4xNC40Ny0uMi4xOS0uMS4zOC0uMTguNTUtLjI4LjYyLS4zNSAxLjA2LS43IDEuMzgtMS4wNS40OC0uNTUuNzMtMS4xOS43Ny0ydi0uMDJzMC0uMTkuMDEtLjQ3Vi41NUMxNC44NiAxLjggMTAuNTUgMS43NiAxMC40NiAxLjc2elxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgMi44Yy0uMDkgMC00LjAzLjA0LTkuNTYtMS4xdjE1Ljk1YzAgLjI1LjAxLjQzLjAxLjQ0di4wMmMuMDQuNzQuMjUgMS4zMy43IDEuODMuMjkuMzEuNy42NCAxLjI2Ljk1LjE1LjA5LjMyLjE3LjUuMjYuMTQuMDcuMjguMTMuNDQuMTkuMTIuMDUuNS4yMi42My4yN2w2LjAzIDIuMjkgNi4wMy0yLjI5Yy4xMy0uMDUuNTEtLjIyLjYzLS4yNy4xNS0uMDYuMy0uMTMuNDQtLjE5LjE4LS4wOS4zNS0uMTcuNS0uMjYuNTYtLjMxLjk3LS42NCAxLjI2LS45NS40NC0uNS42Ni0xLjA5LjctMS44M3YtLjAyczAtLjE4LjAxLS40NFYxLjdjLTUuNTUgMS4xNC05LjUgMS4xLTkuNTggMS4xelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiI0UxQzRBQ1xcXCJcXG4gICAgICBkPVxcXCJNMTAuNDYgMy43NWMtLjA4IDAtMy42OC4wNC04Ljc0LTEuMDJ2NC4wOGM1LjA1IDEuMDUgOC42NyAxLjAyIDguNzQgMS4wMnMzLjY4LjA0IDguNzQtMS4wMlYyLjczYy01LjA2IDEuMDUtOC42NiAxLjAyLTguNzQgMS4wMnpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNBNTE0MTdcXFwiXFxuICAgICAgZD1cXFwiTTEwLjQ2IDcuODNjLS4wOCAwLTMuNjguMDQtOC43NC0xLjAydjkuMDVjNS4wNSAxLjA1IDguNjcgMS4wMiA4Ljc0IDEuMDJzMy42OC4wNCA4Ljc0LTEuMDJWNi44MmMtNS4wNiAxLjA0LTguNjYgMS4wMS04Ljc0IDEuMDF6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8cGF0aCBmaWxsPVxcXCIjRTFDNEFDXFxcIlxcbiAgICAgIGQ9XFxcIk0xLjcyIDE3LjcyYy4wMy42OS4yMyAxLjIzLjY0IDEuNjguMjYuMjguNjQuNTggMS4xNS44Ny4xNS4wOC4yOS4xNS40Ni4yMy4xMy4wNi4yNi4xMi40LjE3LjExLjA1LjQ2LjIuNTguMjRMMTAuNDYgMjNsNS41MS0yLjA5Yy4xMi0uMDQuNDYtLjIuNTgtLjI0LjE0LS4wNi4yNy0uMTIuNC0uMTcuMTYtLjA4LjMyLS4xNS40Ni0uMjMuNTEtLjI5Ljg4LS41OCAxLjE1LS44Ny40MS0uNDYuNi0xIC42NC0xLjY4di0uMDJzMC0uMTYuMDEtLjR2LTEuNDRjLTUuMDUgMS4wNS04LjY3IDEuMDItOC43NCAxLjAycy0zLjY4LjA0LTguNzQtMS4wMnYxLjQ1Yy0uMDIuMjUtLjAxLjQxLS4wMS40MXpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiMwMDczNjBcXFwiXFxuICAgICAgZD1cXFwiTTQuOCAzLjY5bC40MSAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDUtLjc2LTEuMDUuNzYuMzktMS4yNC0xLjA0LS43NyAxLjI5LS4wMS40MS0xLjIzem0xMS4zMSAwbC40MiAxLjIzIDEuMjkuMDEtMS4wNC43Ny4zOSAxLjI0LTEuMDYtLjc2LTEuMDUuNzYuMzktMS4yNC0xLjA0LS43NyAxLjI5LS4wMS40MS0xLjIzem0tNS42NS40OGwuNDIgMS4yMyAxLjI5LjAxLTEuMDQuNzcuMzkgMS4yNC0xLjA2LS43Ni0xLjA2Ljc1LjM5LTEuMjQtMS4wNC0uNzcgMS4zLS4wMS40MS0xLjIyek0xMC40NiAxNy4yMWwtLjQ2LjQ1djEuMjJsLjIzLjY1djEuMDloLjQ1di0xLjA5bC4yMy0uNjV2LTEuMjJsLS40NS0uNDV6bS4yMiA0LjQxdi0uNjVoLS40NXYuNjVsLS4yMy40Mi40Ni41Ni40Ni0uNTYtLjI0LS40MnptLjMzLS42NXYuNWwuMjkuMzEuNTEtLjQxdi0uNDFoLS44em0uNTQtMi4wNGwtLjU0LjZ2MS4wOWguNDR2LS42NWwuNDMtLjQ2LjU1LjM2LjM1LS4zNnYtLjU4aC0xLjIzem0tMS42NCAyLjA0di41bC0uMjkuMzEtLjUyLS40MXYtLjQxaC44MXptLS41NS0yLjA0bC41NC42djEuMDloLS40M3YtLjY1bC0uNDMtLjQ2LS41NS4zNi0uMzUtLjM2di0uNThoMS4yMnpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTE0LjYyIDkuMjd2NS4xOWgtMy40OWwtLjI1LjIxLS40My4zNy0uNDMtLjM3LS4yNS0uMjFINi4yOVY5LjI3bC0uNzQuNTR2NS4zOGg0LjEybC4zNy4zMS40My4zOC40My0uMzguMzctLjMxaDQuMTJWOS44MWwtLjc3LS41NHpcXFwiPlxcbiAgICA8L3BhdGg+XFxuICAgIDxwYXRoIGZpbGw9XFxcIiNFMUM0QUNcXFwiXFxuICAgICAgZD1cXFwiTTExLjAyIDguODNsLS4xNC4xMS0uNDMuMzgtLjQzLS4zOC0uMTItLjExSDcuMDN2NC44OWgyLjg4bC4yLjE3LjM1LjMxLjM2LS4zMS4xOS0uMTdoMi44OFY4LjgzaC0yLjg3ek0xNi4xMSAxMC4zNXYzLjMxYy45NS0uMTQgMS45OC0uMzEgMy4wOC0uNTRWOS44MWE1MC41IDUwLjUgMCAwIDEtMy4wOC41NHptLTExLjMxIDBjLS45NS0uMTQtMS45OC0uMzEtMy4wOC0uNTR2My4zMWMxLjEuMjMgMi4xNC40MSAzLjA4LjU0di0zLjMxelxcXCI+XFxuICAgIDwvcGF0aD5cXG4gICAgPHBhdGggZmlsbD1cXFwiIzAwNzM2MFxcXCJcXG4gICAgICBkPVxcXCJNMTYuMTEgMTYuNzZsLS4zMS4zMnYuODZsLjE1LjQ2di43N2guMzF2LS43N2wuMTYtLjQ2di0uODZsLS4zMS0uMzJ6bS4xNiAzLjA5di0uNDVoLS4zMXYuNDZsLS4xNS4zLjMxLjQuMzItLjQtLjE3LS4zMXptLjIzLS40NXYuMzVsLjIuMjIuMzYtLjI4di0uMjloLS41NnptLjM4LTEuNDNsLS4zOC40M3YuNzdoLjMxdi0uNDZsLjMtLjMzLjM4LjI1LjI0LS4yNXYtLjQxaC0uODV6bS0xLjE0IDEuNDN2LjM1bC0uMjEuMjItLjM1LS4yOHYtLjI5aC41NnptLS4zOS0xLjQzbC4zOS40M3YuNzdoLS4zMXYtLjQ2bC0uMy0uMzMtLjM5LjI1LS4yNC0uMjV2LS40MWguODV6TTQuOCAxNi43NmwtLjMyLjMydi44NmwuMTYuNDZ2Ljc3aC4zMXYtLjc3bC4xNS0uNDZ2LS44NmwtLjMtLjMyem0uMTYgMy4wOXYtLjQ1aC0uMzF2LjQ2bC0uMTYuMy4zMi40LjMxLS40LS4xNi0uMzF6bS4yMi0uNDV2LjM1bC4yMS4yMi4zNS0uMjh2LS4yOWgtLjU2em0uMzktMS40M2wtLjM5LjQzdi43N2guMzF2LS40NmwuMy0uMzMuMzkuMjUuMjQtLjI1di0uNDFoLS44NXpNNC40MiAxOS40di4zNWwtLjIuMjItLjM2LS4yOHYtLjI5aC41NnptLS4zOC0xLjQzbC4zOC40M3YuNzdoLS4zMXYtLjQ2bC0uMy0uMzMtLjM4LjI1LS4yNC0uMjV2LS40MWguODV6XFxcIj5cXG4gICAgPC9wYXRoPlxcbiAgICA8ZyBmaWxsPVxcXCIjRkZGXFxcIiBjbGFzcz1cXFwid2FzaHUtbG9nby10ZXh0XFxcIj5cXG4gICAgICA8cGF0aFxcbiAgICAgICAgZD1cXFwiTTIzMi40NyA4LjE2Yy4zMyAwIDEuMDctMS4yIDEuMDctMS41NyAwLS4zNi0uNzQtMS42LTEuMDctMS42LS4zIDAtMS4wNyAxLjI2LTEuMDcgMS42cy43NiAxLjU3IDEuMDcgMS41N3ptMTMuODIgMTIuMDN2LTUuMDhjMC0yLjM0LS43Ni01Ljc2LTQuMjItNS43Ni0yLjUxIDAtMy44MSAyLjM4LTMuNzYgMi4wMVY5LjU5YzAtLjMxLS4xNS0uNDktLjMxLS40OS0uNiAwLTEuMDQgMS4wMS0zLjA2IDEuNjItLjEzLjAzLS41LjA0LS41MS4yNyAwIC42NSAyLjAzLS44NCAxLjk5IDEuNjh2Ny42NGMwIDEuNDMtLjcgMS41NS0xLjIxIDEuNjgtLjAzIDAtLjA2LS4wMS0uMSAwLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNC0uODQtLjAxLS42My4xLS42My4zNi4wMy4zMS41My4zMyAxLjM3LjM0LjI5IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zMSAwIDEuMTUtLjEzIDIuNTMtLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZWMTMuMWMtLjAzLS40OS44OC0yLjQgMy4wNi0yLjQgMi4xIDAgMy4wMyAyLjMxIDMuMDMgMy44NXY1Ljc2Yy0uMDMgMi4yNy0uOCAxLjU1LTEuMTEgMi0uMTcuMjUuMTMuMzcuNDYuMzdzLjg4LS4xMyAxLjg3LS4xM2MxLjI3IDAgMS44Mi4xMiAyLjE2LjEyLjI2IDAgLjczLS4yLjQ1LS40NC0uNjgtLjUtMS45Ny4zLTEuOTUtMi4wNHpNNDguOTEgMi40Yy4zNy0uMDUuNTUtLjE5LjU1LS4xOSAwLS4yNC0uMDUtLjMtLjM5LS4zLS42NSAwLTEuMDUuMTEtMS42OS4xMS0uNzEgMC0xLjI1LS4wOC0xLjg1LS4wOC0uMzQgMC0uMzEuMTEtLjMxLjMgMCAuMjEuNjUuMDggMS4wMi44OS4yMS40NC4xMyAxLjM2LS4wOCAxLjlsLTUuMDEgMTMuNzQtMi4xNC02LjEtLjgzLTIuMjNzLS4xMy4wNi40Ni0xLjc5bDEuMTctMy41MmMuNTctMS43MyAxLjE0LTIuNjQgMS44OC0yLjY1LjkyLS4wMi45Mi0uNTcuMjEtLjU3cy0xLjEzLjA2LTEuNzUuMDZjLS42NSAwLS45OS0uMDYtMS42OS0uMDYtLjI2IDAtLjU1LjA4LS41Mi4zLjAzLjIxLjQyLjE0LjcxLjMuNDcuMjQuNzggMS4yNS40NSAyLjNsLTEuMzggNC40Mi0xLjU4LTQuMTNjLS4zMS0uNzgtLjczLTIuNTIuMDMtMi42Ny43My0uMTUuNjMtLjUyLjE4LS41Mi0uODYgMC0xLjMyLjExLTIuMTUuMTEtLjkxIDAtMS41OS0uMTEtMi40NS0uMTEtLjE4IDAtLjUyLjAzLS40Mi4zOC4wNS4yMS40OS4xNC43Ni4zIDEuMDUuNjggMS4yNSAxLjU1IDEuNjIgMi41MmwyLjMgNi40OGMuNDIgMS4xNi40NS43NC4xMSAxLjczbC0yIDUuNS00Ljk1LTE0LjExYy0uMzktMS4wNi0uNi0xLjc5LjI2LTIuMi4zNy0uMTkuNDctLjIyLjUyLS4zLjA1LS4wNy4xLS4zMi0uNDUtLjMtLjg5LjAzLTEuNDMuMTEtMi4zMi4xMS0uOTQgMC0xLjU5LS4xMS0yLjQ1LS4xMS0uMjkgMC0uMzQuMTQtLjM0LjM1IDAgLjMzLjcxLjExIDEuMzEuODEuMzQuMzguOTkgMS42NiAxLjE0IDIuMTJMMzIuOCAyMi4zYy4xMS4yNS4xNC43Ni40OC43Ni4yNyAwIC4zMy0uNTcuNDItLjc5bDMuMTMtOC41OSAzLjA1IDguMTZjLjEzLjMzLjMxIDEuMjIuNjMgMS4yMi4yNiAwIC4zNi0uNDMuNDktLjgzbDUuOS0xNi44N2MuNS0xLjM2IDEuMDctMi43OSAyLjAxLTIuOTZ6bTY1LjQ2IDYuNzFjLTMuMjYgMC01Ljc3IDMuMjgtNS43NyA3LjEzIDAgMS45Ni41MiAzLjUxIDEuNDIgNC42My0uMzEuMjEtLjkyLjctMi4xNS43LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJWMTEuMmwzLjM4LS4wMWMuMjIgMCAuNjUtMS40NC42Ny0xLjUyLjA0LS4xOC4xLS4zMy4xMi0uNDYuMDQtLjI4LS4xNy0uMy0uMzctLjAxLS4xNS4xNS0uMzIuNTUtLjk5LjU1aC0yLjgxYzAtMi40MS4wMy0zLjUxLS4zNS0zLjUxLS4zNiAwLS4zLjEtLjYzIDEuMTctLjQ0IDEuNDQtMS43OSAyLjIzLTIuNjMgMi42OC0uMzguMDktLjgxLjEyLTEuMjkuMDEtLjc0LS4xNi0xLjYtMS4wNi0zLjgzLTEuMDYtMi4zOCAwLTQuNDYgMS45NS00LjQ2IDQuNTUgMCAxLjQuNjIgMi43NiAxLjcxIDMuNDgtLjIuMTItMS41MyAxLjI0LTEuMzcgMi41NiAwIDAtLjAzIDEuMzcgMS4wNSAxLjgyLS4zMy4xNC0uNjcuMzYtLjk2LjYzLS43LS4yNi0xLjcyLS4wNi0xLjcyLTEuOTFWMTUuMWMwLTIuMzQtLjc2LTUuNzYtNC4yMi01Ljc2LTIuNTEgMC0zLjgxIDIuMzgtMy43NiAyLjAxVjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjczLjk5LTIuOTEgMS41NS0uMTMuMDMtLjQzLjEtLjQ0LjM0IDAgLjY1IDEuNzUtLjcxIDEuNzYgMS42OHY3LjY0YzAgMS42NS0xLjMxIDEuNjUtMS41NCAxLjY3LS4xIDAtLjE5IDAtLjMxLjAxLS41NS0uMDUtMS41MS0uMy0xLjUxLTEuMzRWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuNzgtLjg2IDIuMDEtMS40MyAyLjAzLS42OS0uMDktMS4yMi0uMzctMS4yMi0xLjQxdi01LjE0YzAtMi42NS0xLjAxLTYuMDctNC4zMy02LjA3LTEuNDcgMC0yLjc1LjgxLTMuNzMgMS45MlYyLjQxYzAtLjMxLS4xNS0uNDgtLjMxLS40OS0uNC0uMDMtMS4wNyAxLjE5LTIuOTYgMS42My0uMTMuMDMtLjYyLjA3LS42Mi4yNSAwIC42NSAxLjk3LS4zMSAxLjk5IDEuNjlWMjAuNmMwIDEuNTEtMS4zIDEuMzEtMS41MyAxLjc5LS4wNC4yMS4wOC4zMS4yNi4zMS40MiAwIDEuNTUtLjEyIDIuMzUtLjEyczIuMS4xMiAyLjY0LjEyYy4zMSAwIC40NC0uMDYuNDQtLjQ0LS4yNy0uNTItMi4yOC4yOC0yLjI4LTIuMzd2LTYuNWMwLTEuNTcgMS44Ny0yLjc4IDMuMDMtMi43OC45MSAwIDMuMTQuNzEgMy4xNCA0LjUzdjUuNjRjMCAxLjExLTEuMTggMS4yMy0xLjI3IDEuNTcgMCAuMjQuMTUuMzQuNDIuMzQuMjggMCAxLjExLS4xMiAyLjEyLS4xMi41NiAwIDEuMDcuMDMgMS41LjA2LjIzLjA1LjU3LjA1Ljk5LjA1LjI4IDAgMS0uMTEgMS44Mi0uMTFzMS40OC4wNyAxLjk5LjExYy4xLjAxLjIuMDEuMy4wMS4wNCAwIC4wOC4wMS4xMi4wMWguMDFjLjMyLjAxLjYxIDAgLjc0IDAgLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMwIDItLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjLjkzIDAgMS41My4wNyAxLjkxLjEtLjI5LjQyLS40OC45LS41MSAxLjQtLjE0IDIuNTEgMi45MyAzLjQxIDUuNTEgMy4zNyA1LjEyLS4wNyA2LjU3LTMuNjIgNS41MS01LjUxLTEuMDktMS45NS0zLjQ0LTEuODctNS42OC0xLjg2LTQuMi4wMi0zLjQxLTIuNTktMS42OS0yLjQ5LjQuMDIuMi4xNCAxLjU3LjE0IDIuNDMgMCA0Ljc2LTEuNjYgNC43LTQuMzgtLjAxLS4yMy4wNS0xLjAzLS41My0yLjE0IDEuMTQuMDEuNjkgMCAyLjQxIDBsLS4wMSA3LjYzYzAgMy40NSAxLjY0IDQuMDMgMi44NyA0LjAzIDEuNzQgMCAzLjAxLTEuMTUgMy4yNC0xLjY4IDEuMDMgMS4xIDIuNDYgMS42OCA0LjEyIDEuNjggMy4xOSAwIDUuNi0yLjkzIDUuNi02Ljc4IDAtNS44LTMuNjUtNi45Ni01LjYxLTYuOTZ6TTk1LjYyIDIxLjcyYy4yMS0uMDEuMjcuMDggMi42NC4xNyAyLjQ1LjA2IDMuMzMuNzcgMy40OSAxLjQuMjYgMS4xMi0uNTMgMy41Mi00LjA1IDMuMjktMi4yMi0uMTUtMi44Ny0xLjItMy4wMy0xLjQ0LS44NC0xLjE2LS4xNi0zLjM1Ljk1LTMuNDJ6bTIuMDEtNC41N2MtMi4wOCAwLTIuNzgtMi0yLjc4LTMuOTEgMC0xLjk2LjU5LTMuNTggMi42Ny0zLjU4IDIuMTEgMCAyLjk1IDIuMTYgMi45NSA0LjA3LjAxIDEuOTMtLjg3IDMuNDItMi44NCAzLjQyem0xNi45OSA0LjgxYy0zLjAzIDAtNC4yMi0zLjc2LTQuMjItNi44MiAwLTIuNjUgMS4wNC01LjEgMy41Ny01LjEgMy4wOCAwIDQuMTkgMy4yOSA0LjE5IDYuNTEuMDEgMy44Ny0xLjM2IDUuNDEtMy41NCA1LjQxelxcXCI+XFxuICAgICAgPC9wYXRoPlxcbiAgICAgIDxwYXRoXFxuICAgICAgICBkPVxcXCJNMTMxLjExIDIwLjE5di01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNyAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMiAxLjY4djcuNjRjMCAyLTEuMzUgMS41Mi0xLjY2IDIuMDQtLjE1LjI3LjI1LjMzLjU5LjMzLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4yNiAwIC43My0uMi40NC0uNDQtLjY1LS40OS0xLjk0LjMxLTEuOTItMi4wM3pNNzcuNDEgOC4xNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNi4wMi4zNS43NyAxLjU3IDEuMDcgMS41N3ptLTE3LjMgNi45NmMtLjUxLS4yNC0xLjI3LS42OC0xLjY1LS44OC0xLjYzLS44OS0yLjI3LTEuNDctMi4zMS0yLjMtLjA4LTEuNDQgMS4xNS0yLjE5IDIuMjEtMi4wOCAyLjU0LS4wNCAyLjg4IDIuOCAzLjE0IDIuOC4zOSAwIC4yOC0uMzcuMjgtMS4yMSAwLS4yMS4wMy0xLjI3LS4xMy0xLjUyLS4zMS0uNDYtMi4xLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMi0uMTMgMC0uMjguMDItLjI4LjAyLTEuODEtLjAzLTMuNSAxLjExLTMuNDUgMy41My4wNSAyLjIxIDIuNjQgMy40NyA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjEtMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTIgMCAuNTEtLjAxLjk4LS4wMSAxLjM4LS4wNy4zNi0uMi43LS41NC43Mi0xLjI0LjA4LS45NC0xLjktLjk0LTIuOTV2LTYuNDNjLS4wNi0xLjk3LTEuNTQtMy4yNS0zLjgtMy4yNS0zLjA5IDAtNS4zMSAzLjgxLTQuMjUgNSAuMjUuMjggMS4yNi0uOCAxLjMyLS44NnMuMDgtLjEzLjA4LS4xM2MtLjAxLTEuMy45Ny0yLjk1IDIuMzctMy4wOSAxLjYtLjE1IDIuNCAxLjA0IDIuNCAyLjY1djIuMDljLTYuMDYgMS4yMS02LjkzIDMuMjItNi45MyA0Ljg3IDAgMi4yMSAxLjU1IDMuMiAzLjIzIDMuMiAxLjQ1IDAgMi44OC0uNjkgMy45Ni0xLjguMzQgMS4wMyAxLjAxIDEuNjUgMi4wMiAxLjYyLjM1LS4wMS40MS4wOSAxLjQ2LS4zNy4zNy0uMS4zNS0uMDkuNzctLjAxLjU2LjE5IDEuMzIuNTcgMi42Ni41NyAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTcgMC0xLjUtLjQzLTIuNDEtMi4zOS0zLjYzem0tOC40MyA0LjMyYzAgMS42NS0xLjY4IDIuNTItMi42IDIuNTItMS4zOCAwLTIuMzMtLjg5LTIuMzMtMi42NiAwLTIuNzMgMy4yOC0zLjIzIDQuOTQtMy42Ny0uMDEtLjAxLS4wMSAzLjgxLS4wMSAzLjgxem0yMTkuOTkuMTljLS4zMSAwLTEuMDcgMS4yOS0xLjA3IDEuNjMgMCAuMzQuNzcgMS42IDEuMDcgMS42LjMzIDAgMS4wNy0xLjIzIDEuMDctMS42cy0uNzMtMS42My0xLjA3LTEuNjN6bTMzLjcxIDEuMTJWOS45MmMwLS42MS0uMzQtLjc3LS40NC0uNzctLjM5IDAtLjYxLjEtLjg4LjE2LS4yNy4xLS41OC4yMy0xLjI5LjIzLS4xMyAwLS43OS0uMTItLjc2LjI1LjA0LjM3IDEuNTcuMTUgMS41OCAxLjIzdjcuODNjLS4xMiAxLjM3LTEuMjcgMi44OC0yLjY2IDIuODgtLjMyIDAtMi4zOS0uMjItMi4zNy0zLjY1VjkuOTJjMC0uNjEtLjM0LS43Ny0uNDQtLjc3LS4zOSAwLS42MS4xLS44OC4xNi0uMjcuMS0uNjEuMjItMS4zMi4xOS0uMzgtLjAyLS43OS0uMDctLjczLjI5LjA2LjMyIDEuNTkgMCAxLjU5IDEuMjN2Ny41MWMwIDIuNzQgMS42MSA0LjMyIDMuNTYgNC4zMiAxLjMgMCAyLjQ5LS4yOCAzLjI0LTEuOGguMDV2MS4zMmMwIC4xMy4wMy40OC4yMi40OC4zNyAwIC41Ni0uMy44My0uNC4yOS0uMDcuMzctLjMzIDEuMjgtLjQyLjM5LS4wNC44Mi0uMjQuODItLjUtLjExLS41My0xLjQuMDYtMS40LS43OHpNMjkwLjA5IDkuMTFjLTMuMjYgMC01Ljc3IDMuMjgtNS43NyA3LjEzIDAgMS43My40MiAzLjE1IDEuMTMgNC4yMy0uNzkuNTctMi4yMyAxLjEtNC45NiAxLjEtMi4xMyAwLTEuOTMtLjc0LTEuOTMtMi41NVY0LjU3YzAtMi42NiAxLjk5LTEuODkgMi4wMy0yLjM3LjAzLS4zNC0uMjgtLjI2LS42MS0uMjYtLjM4IDAtMS4wNy4xNS0yLjUyLjE1LTEuMjUgMC0yLjM0LS4xMi0yLjg4LS4xMi0uMzMgMC0uNjMuMS0uNTIuMzUuMjUuNTcgMi4xNC4wNSAyLjE0IDEuNjV2MTUuMWMwIDEuNDQuMjEgMi4zNi0uNDUgMi43My0uODEuNDktMS43Ni41MS0xLjY4LjgzLjA1LjE5LjQ1LjIuNjguMiAxLjAyIDAgMi40Mi0uMTMgMy40NC0uMTUgMS45NC0uMDYgMy44Ni4xMyA1Ljc5LjEzIDEuMTIgMCAxLjQtLjIyIDIuMjItMS4zMy4wMS0uMDIuMDItLjAzLjA0LS4wNSAxLjAxLjk0IDIuMzQgMS40NCAzLjg3IDEuNDQgMy4xOSAwIDUuNi0yLjkzIDUuNi02Ljc4LjAxLTUuODItMy42NS02Ljk4LTUuNjItNi45OHptLjI2IDEyLjg1Yy0zLjAzIDAtNC4yMi0zLjc2LTQuMjItNi44MiAwLTIuNjUgMS4wNC01LjEgMy41Ny01LjEgMy4wOCAwIDQuMTkgMy4yOSA0LjE5IDYuNTEuMDEgMy44Ny0xLjM2IDUuNDEtMy41NCA1LjQxem0tMzIuMDMtMTAuNDljLS43NS0uMzctMS44NS0xLjA0LTIuMzktMS4zNi0yLjM3LTEuMzctMy4zLTIuMjYtMy4zNy0zLjUyLS4xMi0yLjIxIDIuMDQtMy41MiAzLjU4LTMuMzUgMS45NiAwIDMuNTcgMS4xOSA0LjI0IDMuNzMuMDcuMjcuMzEuODkuNTYuODkuMjIgMCAuMjYtLjIuMjQtLjQ1bC0uMzMtNC4wMmMtLjAyLS4zMy0uMTQtLjQyLS4yNy0uNDItLjIyIDAtLjM2LjMzLS41Ni4zMy0uMzEgMC0xLjEtMS4xMS0zLjgtMS4wOS0uMTgtLjAxLS40My4wMi0uNDMuMDItMi42My0uMDUtNS4xIDEuNy01LjAyIDUuNC4wNyAzLjM3IDMuODUgNS4zIDUuODkgNi41OSAxLjUxLjkgMy4wOSAyLjM0IDMuMDQgMy45NS0uMDggMi40Ny0xLjYzIDQuMDgtMy41OCAzLjk0LTQuNTktLjA4LTMuOTYtNi4xMy00Ljc4LTYuMTMtLjU2IDAtLjQ1IDEuNTItLjQ2IDIuMzIgMCAxLjkyLS4wOCAzLjQ5LjE0IDMuNzcuMDcuMDkuMjkuMDUuNzQuMDUuOSAwIDIgMS4wNSA0LjY1IDEuMDUgMi45NS4wNSA1LjM4LTIuNjkgNS4zOC02LjI1LS4wMS0yLjE5LS42Mi0zLjU4LTMuNDctNS40NXptNTEuNjktMy4zMWMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6TTMxMi42NCAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMzIDAgLjc2LS44LjA3LS42OXptNS45OC02Ljg4Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA1IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjExLS43NC0yLjU1LS43NC0uMTEgMC0uNTItLjAxLS42LS4wMS0uMTMgMC0uMjguMDEtLjI4LjAxLTEuODEtLjAzLTMuNSAxLjExLTMuNDQgMy41My4wNSAyLjIxIDIuNjQgMy40NiA0LjA0IDQuMyAxLjA0LjU5IDIuMjYgMS4xNSAyLjI0IDIuNTctLjAyIDEuNjEtMS4yNyAyLjY4LTIuNjEgMi42LTMuMTUtLjA1LTIuNzItNC0zLjI4LTQtLjM5IDAtLjMxIDEtLjMxIDEuNTItLjAxIDEuMjUtLjA2IDIuMjguMSAyLjQ2LjA1LjA2LjIuMDMuNS4wMy42MiAwIDEuMzguNjkgMy4xOS42OSAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTctLjAxLTEuNDgtLjQzLTIuMzktMi4zOS0zLjZ6bS00OC43MyA1LjY2Yy0uMjYuMTMtLjg1Ljc3LTIuMjguNzctMS4wNyAwLTEuNjgtLjY0LTEuNzQtMnYtOC44MmwzLjM4LS4wMWMuMjIgMCAuNjUtMS40NC42Ny0xLjUyLjA0LS4xOC4xLS4zMy4xMi0uNDYuMDQtLjI4LS4xNy0uMy0uMzctLjAxLS4xNS4xNS0uMzIuNTUtLjk5LjU1aC0yLjgxYzAtMi40MS4wMy0zLjA0LS4zNS0zLjA0LS4zNiAwLS4zLjEtLjYzIDEuMTctLjU0IDEuNzktMi41MiAyLjU4LTMuMTUgMi45Ny0uMTUuMDgtLjE1LjExLS4xNS4xOS0uMDEuMjMuNzUuMTQgMi4zMS4xN2wtLjAxIDguMDdjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS44NyAwIDMuMjEtMS4zNCAzLjI4LTEuOC4wMy0uMjUgMC0uMjgtLjE1LS4yNnptLTgxLjMyLTEuMDljLS41NyAwLTEuNDIgMS42Mi0zLjY2IDEuNjItMS41OCAwLTQuMTctMS41My00LjE3LTYuNjZoNi45Yy42IDAgLjg4LjAzLjg4LS41MiAwLTEuMjUtMS40LTQuOTUtNC41OS00Ljk1LTMuMjQgMC01LjA4IDMuMzMtNS4wOCA3LjMxIDAgMi4wNSAxLjM1IDYuMzggNS4yNCA2LjM4IDIuMzMgMCA0LjU5LTIuMjQgNC41OS0yLjk1LS4wMS0uMTEtLjAxLS4yMy0uMTEtLjIzem0tNS4wOC05LjgxYzEuNDIgMCAyLjg4IDEuNTYgMi44OCAzLjMgMCAuNDYtLjE1LjYyLS41Mi42MmgtNS4xMWMwLTEuNzEgMS4xMy0zLjkyIDIuNzUtMy45MnptLTMxLjctNy4zM2MuMS0uMTYtLjI1LS4yNC0uMzctLjI0LS40MiAwLTEuMzcuMTEtMS44LjExLS44OSAwLTEuNjQtLjA5LTIuNTMtLjA5LS4wNyAwLS40Ni4wNS0uNDYuMTgtLjAxLjYzIDIuMTMtLjExIDIuMTMgMi42djEwLjU3YzAgMy4xMy0uOTkgNi40MS01LjI5IDYuNDEtMy4wOSAwLTQuNzYtMS45NC00Ljc2LTYuMTdWNC40MWMwLTEuOTEgMS40OS0xLjQ5IDEuNTItMS45Mi4wMy0uNDEtMS4zMy0uMTYtMS40My0uMTYtLjcxIDAtMS4yMS4wOC0xLjk1LjA4LS42MiAwLTEuMzctLjEtMS45Ny0uMS0uMTIgMC0uNTMtLjAyLS42MS4xNS0uMjMuNTYgMS45MS4yNiAxLjkxIDEuODN2MTAuOTJjMCA0LjA4IDEuMTQgOC4wOCA3LjE3IDcuOTcgNy4xNC0uMTIgNy4wMS02LjU0IDcuMDEtNy44M1Y1LjEyYy4wMS0yLjQzIDEuMi0yLjIgMS40My0yLjU3em0yOC4xOSA3LjI0Yy4xNy0uMi4yMi0uNTMtLjU3LS40Ni0uNDUgMC0uNzcuMDgtMS4yMi4wOC0uNTcgMC0uNjgtLjAyLTEuMjItLjA0LS42OC0uMDItLjg2LjA1LS44Mi4yNS4xMi42IDEuNTUuMDEgMS4zNiAxLjgtLjE2IDEuNS0uNjUgMi43OS0xLjE0IDQuMDdsLTEuNzMgNC42Mi0yLjU0LTcuN2MtLjMxLS45Ni0uNDUtMS40Ny0uNDUtMS41NyAwLS45NiAxLjE2LS43NSAxLjQyLTEuMTQuMTYtLjI2LS4xNy0uNC0uNTQtLjQtLjMxIDAtLjY3LjExLTEuNjMuMTMtLjc5LjAyLTEuMzYuMDItMS43LS4wNS0uODktLjE2LS44Mi4zMy0uNTEuNDhzLjQ2LjAxLjkxIDEuMzZsMy45MSAxMS4wNmMuMDguMjIuMTguNzcuNTIuNzcuMzkgMCAuMzktLjM5Ljg4LTEuNjkgMCAwIDMuNzUtMTAuNDggNC0xMC44Ni41MS0uNzQuODktLjUgMS4wNy0uNzF6bTE0LjQ3LS41Yy0xLjA3IDAtMS44IDEuMjgtMi4zMyAyLjE2aC0uMDVWOS41M2MwLS4zLS4xNS0uNDgtLjMtLjQ4LS40MSAwLS43Mi44MS0yLjg3IDEuMzMtLjEzLjAzLS40OC4xLS40OC4yOCAwIC42NCAxLjgyLS4xOSAxLjgyIDEuOTN2OC4wN2MwIDEuMjUtMS4yOSAxLjEyLTEuMjkgMS43NyAwIC4xOC4wOC4yNy4yOC4yNy4xNyAwIC42My0uMTIgMi4zMi0uMTIgMS40MSAwIDIuMDIuMTIgMi4zNy4xMi4yOCAwIC40MS0uMDYuNDEtLjM0IDAtLjk4LTIuMjUuNDgtMi4yNS0yLjM0di02Ljg4YzAtLjQuNi0xLjggMS42NC0xLjguOTEgMCAxLjAyLjcgMS41LjcuMyAwIC45MS0uOTEuOTEtMS4zOC0uMDEtLjU4LTEuMTYtMS4zNy0xLjY4LTEuMzd6bTMyLjU1LjFjLS4yNyAwLS45Ni4wNC0xLjU5LjA0LS43NiAwLTEuMTMtLjA5LTEuNDUtLjA5LS40OCAwLS45NiAwLS44Ny4zMi4xLjM2IDEuNzMuMjMgMS43MyAyLjAxIDAgLjIzIDAgLjUyLS4zMyAxLjcxbC0yLjA4IDYuNjMtMi45LTguMTVzLS4xNC0uMjYtLjE0LS43OWMwLTEuMzIgMS41NC0xLjE3IDEuNi0xLjQxLjA1LS4xOS0uMjEtLjQtLjYyLS40aC0zLjYzYy0uMDIgMC0uMDMuMDEtLjA1LjAxaC0yLjgxYzAtMi40MS4wMy0zLjA0LS4zNS0zLjA0LS4zNiAwLS4zLjEtLjYzIDEuMTctLjU0IDEuNzktMi41MiAyLjU4LTMuMTUgMi45Ny0uMTUuMDgtLjE1LjExLS4xNS4xOS0uMDEuMjIuNzYuMTQgMi4zMS4xN2wtLjAxIDguMDdjMCAzLjQ1IDEuNjQgNC4wMyAyLjg3IDQuMDMgMS44NyAwIDMuMjEtMS4zMyAzLjI4LTEuOCAwLS4yNy0uMDQtLjI5LS4xOC0uMjctLjI2LjEzLS44NS43Ny0yLjI4Ljc3LTEuMDcgMC0xLjY4LS42NC0xLjc0LTJWMTAuN3MyLjUtLjAxIDMuMjEtLjAxYy4wNC4wNi4wOC4xMy4xLjE5bDIuOTkgOC40NWMuMjQuNjkuMzkuOTIuNjggMi4xNC4xOS43OS4xMiAxLjUxLjEyIDEuNTEtLjI5IDEuMjctMS4wNyAxLjk5LTIuMjYgNC4zNC0uMTIuMjIgMS43MS0uMDIgMS44MS0uMDUuMTUtLjA1LjEzLS4wOS4zMS0uNDJsMS4zMi0zLjkzIDMuNjktMTEuMzRjLjU0LTEuOTggMS4zOS0xLjYyIDEuNTMtMS44OS4xMi0uMTMgMC0uMy0uMzMtLjN6XFxcIj5cXG4gICAgICA8L3BhdGg+XFxuICAgICAgPHBhdGhcXG4gICAgICAgIGQ9XFxcIk0yMjIuMjIgMjIuNzZsLS4wNy4xOVYyM2wuMDctLjI0em0tMTQuNzQtMTQuNmMuMzMgMCAxLjA3LTEuMiAxLjA3LTEuNTcgMC0uMzYtLjc0LTEuNi0xLjA3LTEuNi0uMyAwLTEuMDcgMS4yNi0xLjA3IDEuNnMuNzYgMS41NyAxLjA3IDEuNTd6TTIxMC4xMSAyMmMtLjUyLS4wMy0xLjYzLS4yMy0xLjYzLTEuMzVWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0uOTggMS4wOC0yLjYzIDEuNjQtLjEzLjAzLS4zNy4wNi0uMzcuMjQgMCAuNjUgMS40OS0uNjEgMS40MiAxLjY5djcuMjdjLjA2IDEuODYtLjk2IDIuMDQtMS41MiAyLjA0LS44NC0uMDEtLjYzLjEtLjYzLjM2LjAzLjMxLjUzLjMzIDEuMzcuMzQuMjggMCAxLS4xMSAxLjgyLS4xMSAxLjA3IDAgMS44Ny4xMiAyLjQxLjEyLjMzIDAgLjc2LS44LjA3LS42OXpNMTY2LjUyIDguMTZjLjMzIDAgMS4wNy0xLjIgMS4wNy0xLjU3IDAtLjM2LS43NC0xLjYtMS4wNy0xLjYtLjMgMC0xLjA3IDEuMjYtMS4wNyAxLjZzLjc3IDEuNTcgMS4wNyAxLjU3ek0xNjkuMTcgMjJjLS41Mi0uMDMtMS42My0uMjMtMS42My0xLjM1VjkuNTljMC0uMzEtLjE1LS40OS0uMzEtLjQ5LS42IDAtLjk4IDEuMDgtMi42MyAxLjY0LS4xMy4wMy0uMzcuMDYtLjM3LjI0IDAgLjY1IDEuNDktLjYxIDEuNDIgMS42OXY3LjI3Yy4wNiAxLjg2LS45NiAyLjA0LTEuNTIgMi4wNGgtLjE3Yy0uNTQtLjEtMS4wNi0uMzItMS4wNS0xLjc5di01LjA4YzAtMi4zNC0uNzYtNS43Ni00LjIyLTUuNzYtMi41MSAwLTMuODEgMi4zOC0zLjc2IDIuMDFWOS41OWMwLS4zMS0uMTUtLjQ5LS4zMS0uNDktLjYgMC0xLjA0IDEuMDEtMy4wNyAxLjYyLS4xMy4wMy0uNS4wNC0uNTEuMjcgMCAuNjUgMi4wMy0uODQgMiAxLjY4djcuNjRjMCAyLTEuMzUgMS41Mi0xLjY2IDIuMDQtLjE1LjI3LjI1LjMzLjU5LjMzLjMxIDAgLjgzLS4xMyAyLjItLjEzIDEuNSAwIDIuMDIuMTMgMi40Ni4xMy4zOSAwIC44My0uMTcuNTctLjQ0LS40Mi0uNDEtMi4yOC4wNi0yLjI4LTIuMDZ2LTcuMDljLS4wMy0uNDkuODgtMi40IDMuMDYtMi40IDIuMSAwIDMuMDMgMi4zMSAzLjAzIDMuODV2NS43NmMtLjAzIDIuMjctLjggMS41NS0xLjExIDItLjE3LjI1LjEzLjM3LjQ2LjM3cy44OC0uMTMgMS44Ny0uMTNjMS4yNyAwIDEuODIuMTIgMi4xNi4xMi4wNCAwIC4wOS0uMDEuMTMtLjAxLjExIDAgLjIxLjAxLjM0LjAxLjI4IDAgMS0uMTEgMS44Mi0uMTEgMS4wNyAwIDEuODcuMTIgMi40MS4xMi4zNC4wMi43NS0uNzguMDgtLjY3em0zMi43Mi02Ljg5Yy0uNTEtLjI0LTEuMjctLjY4LTEuNjUtLjg4LTEuNjMtLjg5LTIuMjctMS40Ny0yLjMxLTIuMy0uMDgtMS40NCAxLjE1LTIuMTkgMi4yMS0yLjA4IDIuNTQtLjA1IDIuODggMi44IDMuMTQgMi44LjM5IDAgLjI4LS4zNy4yOC0xLjIxIDAtLjIxLjAzLTEuMjctLjEzLTEuNTItLjMxLS40Ni0yLjEtLjc0LTIuNTUtLjc0LS4xMSAwLS41Mi0uMDEtLjYtLjAyLS4xMyAwLS4yOC4wMi0uMjguMDItMS44MS0uMDMtMy41IDEuMTEtMy40NSAzLjUzLjA1IDIuMjEgMi42NCAzLjQ2IDQuMDQgNC4zIDEuMDQuNTkgMi4yNiAxLjE1IDIuMjQgMi41Ny0uMDIgMS42Mi0xLjI3IDIuNjgtMi42MSAyLjYtMy4xNS0uMDUtMi43Mi00LTMuMjgtNC0uMzkgMC0uMzEgMS0uMzEgMS41MiAwIDEuMjUtLjA2IDIuMjguMSAyLjQ2LjA1LjA2LjIuMDMuNS4wMy42MiAwIDEuMzguNjkgMy4xOS42OSAyLjAzLjAzIDMuODUtMS44NSAzLjg1LTQuMTcgMC0xLjQ3LS40Mi0yLjM4LTIuMzgtMy42elxcXCI+XFxuICAgICAgPC9wYXRoPlxcbiAgICA8L2c+XFxuICA8L3N2Zz5cXG48L2Rpdj5cXG48aGVhZGVyIHJvbGU9XFxcImJhbm5lclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICA8YSBjbGFzcz1cXFwic2l0ZS10aXRsZVxcXCIgaHJlZj1cXFwiZmlsZXMvaW5kZXguaHRtbFxcXCI+TnVyc2VyeSBTY2hvb2w8L2E+XFxuICA8L2Rpdj5cXG4gIDxkaXYgaWQ9XFxcIm1haW4tbWVudS1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhclxcXCI+XFxuICAgICAgICA8IS0tIDxhIGlkPVxcXCJob21lXFxcIiBocmVmPVxcXCJmaWxlcy9pbmRleC5odG1sXFxcIj5Ib21lcGFnZTwvYT4gLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3BidG5cXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJhYm91dFxcXCIgaHJlZj1cXFwiZmlsZXMvYWJvdXQuaHRtbFxcXCI+QWJvdXQgV1VOUzwvYT5cXG5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gPGEgaWQ9XFxcInR1aXRpb25cXFwiIGhyZWY9XFxcImZpbGVzL3R1aXRpb24uaHRtbFxcXCI+VHVpdGlvbjwvYT4gLS0+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInN0YWZmXFxcIiBocmVmPVxcXCJmaWxlcy9zdGFmZi5odG1sXFxcIj5TdGFmZjwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiY3VycmljdWx1bVxcXCIgaHJlZj1cXFwiZmlsZXMvY3VycmljdWx1bV9vdmVydmlldy5odG1sXFxcIj5DdXJyaWN1bHVtIE92ZXJ2aWV3PC9hPlxcbiAgICAgICAgICAgIDwhLS0gPGEgaWQ9XFxcInBhcmVudC1oYW5kYm9va1xcXCIgaHJlZj1cXFwiZmlsZXMvcGFyZW50X2hhbmRib29rLmh0bWxcXFwiPlBhcmVudCBIYW5kYm9vazwvYT4gLS0+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3BidG5cXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJjbGFzc3Jvb21zXFxcIiBocmVmPVxcXCJmaWxlcy9jbGFzc3Jvb21zLmh0bWxcXFwiPkNsYXNzcm9vbXNcXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8IS0tIDxhIGlkPVxcXCJjdXJyaWN1bHVtLW92ZXJ2aWV3XFxcIiBocmVmPVxcXCJmaWxlcy9jdXJyaWN1bHVtX292ZXJ2aWV3Lmh0bWxcXFwiPkN1cnJpY3VsdW0gT3ZlcnZpZXc8L2E+IC0tPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJjbGFzcy1zY2hlZHVsZVxcXCIgaHJlZj1cXFwiZmlsZXMvY2xhc3Nyb29tX3NjaGVkdWxlLmh0bWxcXFwiPkFsbCBDbGFzcyBTY2hlZHVsZXM8L2E+XFxuICAgICAgICAgICAgPGEgaWQ9XFxcInRlZGR5LWJlYXJzXFxcIiBocmVmPVxcXCJmaWxlcy90ZWRkeV9iZWFycy5odG1sXFxcIj5UZWRkeSBCZWFyczogMi41IHRvIHVuZGVyIDMgeWVhcnMgKEFNKTwvYT5cXG4gICAgICAgICAgICA8YSBpZD1cXFwicGFuZGEtYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL3BhbmRhX2JlYXJzLmh0bWxcXFwiPlBhbmRhIEJlYXJzOiAyLjUgdG8gdW5kZXIgMyB5ZWFycyAoUE0pPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJiZWFyLWN1YnNcXFwiIGhyZWY9XFxcImZpbGVzL2JlYXJfY3Vicy5odG1sXFxcIj5CZWFyIEN1YnM6IDMgdG8gdW5kZXIgNCB5ZWFycyAoQU0gT25seSkgPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJiaWctYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL2JpZ19iZWFycy5odG1sXFxcIj5CaWcgQmVhcnM6IDQgdG8gdW5kZXIgNSB5ZWFycyAoQU0pPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJzdW4tYmVhcnNcXFwiIGhyZWY9XFxcImZpbGVzL3N1bl9iZWFycy5odG1sXFxcIj5TdW4gQmVhcnM6IDQgdG8gdW5kZXIgNSB5ZWFycyAoUE0pPC9hPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJiZWFyLXRyYWNrc1xcXCIgaHJlZj1cXFwiZmlsZXMvYmVhcl90cmFja3MuaHRtbFxcXCI+QmVhciBUcmFja3M8L2E+XFxuICAgICAgICAgICAgPCEtLTxhIGlkPVxcXCJlbnJpY2htZW50LXByb2dyYW1cXFwiIGhyZWY9XFxcImZpbGVzL2VucmljaG1lbnRfcHJvZ3JhbXMuaHRtbFxcXCI+Q2xhc3Nyb29tIExlYXJuaW5nIE1hdGVyaWFsczwvYT4gLS0+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgIFxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJmaWxlcy9wYXJlbnRfZ3VpZGFuY2UuaHRtbFxcXCI+UGFyZW50IEd1aWRhbmNlPC9hPlxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvdHVpdGlvbl9hcHBseS5odG1sXFxcIj5UdWl0aW9uPC9hPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvcGFyZW50X2NvbW11bmljYXRpb24uaHRtbFxcXCI+UGFyZW50LVNjaG9vbCBDb21tdW5pY2F0aW9uPC9hPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvdHJhbnNpdGlvbi5odG1sXFxcIj5UcmFuc2l0aW9uIGFuZCBFeHRyYSBTdXBwb3J0PC9hPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvZGlzY2lwbGluZXMuaHRtbFxcXCI+RGlzY2lwbGluZXMgYW5kIFBvbGljaWVzPC9hPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvcGFyZW50X2d1aWRhbmNlLmh0bWxcXFwiPlBhcmVudCBIYW5kYm9vazwvYT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxhIGlkPVxcXCJzdW1tZXItY2FtcFxcXCIgaHJlZj1cXFwiZmlsZXMvc3VtbWVyX2NhbXAuaHRtbFxcXCI+U3VtbWVyIENhbXA8L2E+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3BidG5cXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJhcHBseVxcXCIgaHJlZj1cXFwiZmlsZXMvbmV3X3N0dWRlbnQuaHRtbFxcXCI+QWRtaXNzaW9ucyBhbmQgRm9ybXM8L2E+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJmaWxlcy9uZXdfc3R1ZGVudC5odG1sXFxcIj5OZXcgU3R1ZGVudCBBZG1pc3Npb248L2E+XFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiZmlsZXMvcmV0dXJuaW5nX3N0dWRlbnRzLmh0bWxcXFwiPlJldHVybmluZyBTdHVkZW50czwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd25cXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJkcm9wYnRuXFxcIj5cXG4gICAgICAgICAgICA8YSBpZD1cXFwiY2FsZW5kYXJcXFwiIGhyZWY9XFxcImZpbGVzL2NhbGVuZGFyLmh0bWxcXFwiPkV2ZW50czwvYT5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcImZpbGVzL3NwZWNpYWxfZXZlbnRzLmh0bWxcXFwiPlNwZWNpYWwgRXZlbnRzPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PiAgXFxuXFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCI+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImRyb3BidG5cXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJnZXQtaW52b2x2ZWRcXFwiIGhyZWY9XFxcImZpbGVzL2dldF9pbnZvbHZlZC5odG1sXFxcIj5NZXJjaDwvYT5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgIDxhIGlkPVxcXCJudXJzZXJ5LXNjaG9vbC1tZXJjaGFuZGlzZVxcXCIgaHJlZj1cXFwiZmlsZXMvbnVyc2VyeV9zY2hvb2xfbWVyY2hhbmRpc2UuaHRtbFxcXCI+TnVyc2VyeSBTY2hvb2xcXG4gICAgICAgICAgICAgIE1lcmNoYW5kaXNlPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvaGVhZGVyPlwiO1xuIiwiaW1wb3J0IHsgRCB9IGZyb20gXCIuLy4uL2NvcmUvZG9tL2RvY3VtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBTbGlkZXNob3cge1xuICBwdWJsaWMgc3RhdGljIHNldHVwQWxsKCkge1xuICAgIFNsaWRlc2hvdy5kaXNjYXJkQWxsKCk7XG4gICAgY29uc3Qgc2xpZGVzaG93cyA9IEQuY2xheihcInNsaWRlc2hvd1wiKTtcbiAgICBmb3IgKGxldCBzc0luZGV4ID0gMDsgc3NJbmRleCA8IHNsaWRlc2hvd3MubGVuZ3RoOyArK3NzSW5kZXgpIHtcbiAgICAgIGNvbnN0IGVsZW0gPSBzbGlkZXNob3dzLml0ZW0oc3NJbmRleCk7XG4gICAgICBpZiAoZWxlbSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgU2xpZGVzaG93LnNsaWRlc2hvd3MucHVzaChuZXcgU2xpZGVzaG93KGVsZW0pKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRpc2NhcmRBbGwoKSB7XG4gICAgU2xpZGVzaG93LnNsaWRlc2hvd3MgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHNsaWRlc2hvd3M6IFNsaWRlc2hvd1tdID0gW107XG5cbiAgcHJpdmF0ZSBzbGlkZUluZGV4ID0gMDtcbiAgcHJpdmF0ZSBzbGlkZUNvdW50ID0gMDtcbiAgcHJpdmF0ZSBzbGlkZXM6IEVsZW1lbnRbXSA9IFtdO1xuICBwcml2YXRlIGRvdHM6IEVsZW1lbnRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3V0ZXI6IEVsZW1lbnQpIHtcbiAgICBELmVhY2hSZWN1cih0aGlzLm91dGVyLCAoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgY0xpc3QgPSBlbGVtLmNsYXNzTGlzdDtcbiAgICAgIGlmIChjTGlzdC5jb250YWlucyhcInByZXYtc2xpZGVzaG93LWJ1dHRvblwiKSkge1xuICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLm1pbnVzU2xpZGUoMSkpO1xuICAgICAgfSBlbHNlIGlmIChjTGlzdC5jb250YWlucyhcIm5leHQtc2xpZGVzaG93LWJ1dHRvblwiKSkge1xuICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoZWxlbSwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLnBsdXNTbGlkZSgxKSk7XG4gICAgICB9IGVsc2UgaWYgKGNMaXN0LmNvbnRhaW5zKFwic2xpZGVzaG93LWVudHJ5XCIpKSB7XG4gICAgICAgIHRoaXMuc2xpZGVzLnB1c2goZWxlbSk7XG4gICAgICB9IGVsc2UgaWYgKGNMaXN0LmNvbnRhaW5zKFwic2xpZGVzaG93LWRvdFwiKSkge1xuICAgICAgICB0aGlzLmRvdHMucHVzaChlbGVtKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG90cy5sZW5ndGg7ICsraSkge1xuICAgICAgRC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZG90c1tpXSwgXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dTbGlkZShpKSk7XG4gICAgfVxuICAgIHRoaXMuc2xpZGVDb3VudCA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcbiAgICB0aGlzLnNob3dTbGlkZSh0aGlzLnNsaWRlSW5kZXgpO1xuICB9XG5cbiAgcHVibGljIHBsdXNTbGlkZShuOiBudW1iZXIpIHtcbiAgICB0aGlzLnNob3dTbGlkZSgodGhpcy5zbGlkZUluZGV4ICs9IG4pKTtcbiAgfVxuICBwdWJsaWMgbWludXNTbGlkZShuOiBudW1iZXIpIHtcbiAgICB0aGlzLnNob3dTbGlkZSgodGhpcy5zbGlkZUluZGV4IC09IG4pKTtcbiAgfVxuICBwdWJsaWMgc2hvd1NsaWRlKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnNsaWRlSW5kZXggPSBpbmRleCAlIHRoaXMuc2xpZGVDb3VudDtcbiAgICB0aGlzLnNsaWRlSW5kZXggPSBNYXRoLm1heCh0aGlzLnNsaWRlSW5kZXgsIC0xICogdGhpcy5zbGlkZUluZGV4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xpZGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAodGhpcy5zbGlkZXNbaV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZG90c1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgICAodGhpcy5zbGlkZXNbdGhpcy5zbGlkZUluZGV4XSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB0aGlzLmRvdHNbdGhpcy5zbGlkZUluZGV4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJhbXMgfSBmcm9tICcuLi9jb3JlL3V0aWxzL3FfcGFyYW1zJztcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLy4uL2NvcmUvZGF0YS1sb2cvZGF0YSc7XG5pbXBvcnQgeyBBY3Rpb25FbnVtIH0gZnJvbSAnLi8uLi9jb3JlL2RhdGEtbG9nL2V2ZW50JztcbmltcG9ydCB7IEQgfSBmcm9tICcuLy4uL2NvcmUvZG9tL2RvY3VtZW50JztcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSAnLi8uLi9jb3JlL2RvbS9lbGVtZW50cyc7XG5pbXBvcnQgeyBTY3JvbGwgfSBmcm9tICcuLy4uL2NvcmUvZG9tL3Njcm9sbCc7XG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSAnLi8uLi9jb3JlL3JvdXRlci9oaXN0b3J5JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTW9kZSwgUm91dGVyTW9kdWxlIH0gZnJvbSAnLi8uLi9jb3JlL3JvdXRlci9yb3V0ZXInO1xuaW1wb3J0IHsgVHJhY2tlciB9IGZyb20gJy4vLi4vY29yZS90cmFja2VyL3RyYWNrZXInO1xuaW1wb3J0IHsgRGVidWdMZXZlbEVudW0gfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvY29uc29sZV93cmFwcGVyJztcbmltcG9ydCB7IEhUTUxMb2FkZXIgfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvaHRtbF9sb2FkZXInO1xuaW1wb3J0IHsgSURHZW5lcmF0b3IgfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvaWRfZ2VuZXJhdG9yJztcbmltcG9ydCB7IHdhaXRVbnRpbFJlYWR5IH0gZnJvbSAnLi8uLi9jb3JlL3V0aWxzL3JlYWR5JztcbmltcG9ydCB7IHNjZW5hcmlvcywgU2NlbmFyaW8gfSBmcm9tICcuLy4uL2NvcmUvdXRpbHMvc2NlbmFyaW9zJztcblxuY29uc3Qgc2V0dXAgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgd2FpdFVudGlsUmVhZHkoKTtcbiAgICBjb25zdCBzY2VuYXJpbyA9IHNjZW5hcmlvcy5maW5kKChzY2VuKSA9PiBzY2VuLnRhZyA9PT0gcGFyYW1zLnRhZyk7XG4gICAgaWYgKCFwYXJhbXMuc2FuZGJveCkge1xuICAgICAgICBpZiAoc2NlbmFyaW8gPT09IG51bGwgfHwgc2NlbmFyaW8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWxlcnQoJ1RoaXMgSElUIGlzIGJyb2tlbiBhbmQgY2Fubm90IGJlIGNvbXBsZXRlZCBhdCB0aGlzIHRpbWUuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBUcmFja2VyLmxvYWRTY2VuYXJpbyhzY2VuYXJpbyBhcyBTY2VuYXJpbyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgVHJhY2tlci5zdGFydCh7XG4gICAgICAgIGtleVByZWZpeDogJ2luZm9ybWF0aW9uLWZvcmFnaW5nJyxcbiAgICAgICAgYnVja2V0TmFtZTogJ2NzZS0yNTYtbG9nJyxcbiAgICAgICAgYWxsb3dTdWJtaXNzaW9uOiB7XG4gICAgICAgICAgICBhbGxvdygpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QXJlYSA9IEQuaWQoJ3RleHQtYXJlYScpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHRBcmVhLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRBcmVhLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdZb3UgbXVzdCBmaWxsIG91dCB0aGUgdGV4dCBib3ggdG8gdHVybiB0aGlzIEhJVCBpbi4nO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnVGhlcmUgd2FzIGFuIGVycm9yIGZpbGwgb3V0IHRoZSBmb3JtIGFuZCB0cnkgYWdhaW4uJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlU3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5yZXNwb25zZSA9IChELmlkKFxuICAgICAgICAgICAgICAgICAgICAndGV4dC1hcmVhJ1xuICAgICAgICAgICAgICAgICkgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBkZWJ1Z0xldmVsOiBEZWJ1Z0xldmVsRW51bS5OT05FLFxuXG4gICAgICAgIGFzeW5jIHNldHVwKCkge1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIHJvdXRlclxuICAgICAgICAgICAgUm91dGVyLmRlZmF1bHRBbGxvd2FuY2VzT24oKTtcbiAgICAgICAgICAgIFJvdXRlci5jb25maWd1cmUoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBSb3V0ZXJNb2RlLlNUQU5EQVJEX0FMTE9XQU5DRVMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IFJvdXRlck1vZHVsZS5BLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7IG1vZGU6IFJvdXRlck1vZGUuT0ZGLCBtb2R1bGU6IFJvdXRlck1vZHVsZS5GT1JNIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFJvdXRlck1vZGUuU1RBTkRBUkRfQUxMT1dBTkNFUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogUm91dGVyTW9kdWxlLklNRyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICdmaWxlcy8nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgSGlzdG9yeS5zZXR1cCh3aW5kb3cubG9jYXRpb24uaHJlZiwgeyB3cmFwcGVyOiB0cnVlIH0pO1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIGh0bWwgbG9hZGVyIHBvc3Qgb3BlcmF0aW9uXG4gICAgICAgICAgICBIVE1MTG9hZGVyLmZpbmlzaCgpO1xuICAgICAgICAgICAgSFRNTExvYWRlci5yZWdpc3RlclBvc3RMb2FkRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgSURHZW5lcmF0b3IucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBJREdlbmVyYXRvci5hdHRhY2hJZHNUb0FsbEVsZW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgUm91dGVyLnNldHVwKEVsZW1lbnRzLmh0bWxMb2MpO1xuICAgICAgICAgICAgICAgIFNjcm9sbC5wcm9taXNlKDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25maWd1cmUgbGlzdGVuZXJzIG9uIGh0bWwgbG9jXG4gICAgICAgICAgICBELmFkZEV2ZW50TGlzdGVuZXIoRWxlbWVudHMuaHRtbExvYywgQWN0aW9uRW51bS5DTElDSywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldiA9IGUgYXMgTW91c2VFdmVudDtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGV2LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGV2LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICAgIGlkOiAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pZCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFRyYWNrZXIuZ2V0RXZlbnREaXNwYXRjaEZ1bmMoQWN0aW9uRW51bS5DTElDSykob2JqKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgRC5hZGRFdmVudExpc3RlbmVyKEVsZW1lbnRzLmRvY3VtZW50LCAna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ID0gZSBhcyBLZXlib2FyZEV2ZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBldi5rZXksXG4gICAgICAgICAgICAgICAgICAgIGlkOiAoZXYuc3JjRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuaWQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uQlVUVE9OKShvYmopO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTUEVDSUFMIENBU0U6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBkb2VzIG5vdCBiZWhhdmUgdGhlIHNhbWUgd2F5IGFzIGRvY3VtZW50IHNvIHRoZSBiZWxvdyBmdW5jdGlvbiBtdXN0IGJlaGF2ZSBkaWZmZXJlbnRseSB0aGFuIHRoZSBsaXN0ZW5lcnMgYWJvdmUuXG4gICAgICAgICAgICBjb25zdCBzRWxlbSA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgYXMgRWxlbWVudDtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZHggPSBzRWxlbS5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gc0VsZW0uc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmFicyhUcmFja2VyLmxhc3RQb3MueCAtIGR4KSA+IDEwIHx8XG4gICAgICAgICAgICAgICAgICAgIChNYXRoLmFicyhUcmFja2VyLmxhc3RQb3MueSAtIGR5KSA+IDEwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBkdGltZSAtIFRyYWNrZXIubGFzdFBvcy50aW1lID4gMTAwKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmxhc3RQb3MueCA9IGR4O1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmxhc3RQb3MueSA9IGR5O1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmxhc3RQb3MudGltZSA9IGR0aW1lO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7IHg6IGR4LCB5OiBkeSB9O1xuICAgICAgICAgICAgICAgICAgICBUcmFja2VyLmdldEV2ZW50RGlzcGF0Y2hGdW5jKEFjdGlvbkVudW0uU0NST0xMKShvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uZmlndXJlIHRyYWNrZWQgZXZlbnRzXG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5ISVNUT1JZKTtcbiAgICAgICAgICAgIFRyYWNrZXIucmVnaXN0ZXJFdmVudChBY3Rpb25FbnVtLkJVVFRPTik7XG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5DTElDSyk7XG4gICAgICAgICAgICBUcmFja2VyLnJlZ2lzdGVyRXZlbnQoQWN0aW9uRW51bS5TQ1JPTEwpO1xuICAgICAgICAgICAgLy8gbG9hZCBmaXJzdCBwYWdlXG4gICAgICAgICAgICBhd2FpdCBSb3V0ZXIubG9hZCgnZmlsZXMvaW5kZXguaHRtbCcpO1xuICAgICAgICB9LFxuICAgIH0pO1xufTtcblxuc2V0dXAoKTtcbiJdfQ==
