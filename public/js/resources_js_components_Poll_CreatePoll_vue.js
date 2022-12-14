(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Poll_CreatePoll_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Poll/CreatePoll.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Poll/CreatePoll.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_cal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-cal */ "./node_modules/vue-cal/dist/vuecal.common.js");
/* harmony import */ var vue_cal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_cal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_cal_dist_vuecal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-cal/dist/vuecal.css */ "./node_modules/vue-cal/dist/vuecal.css");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "create-poll",
  components: {
    VueCal: (vue_cal__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      currentStep: 1,
      notifmsg: '',
      poll_data: {
        title: 'New Poll',
        description: 'First Poll',
        location: 'London',
        main_stakeholders: 'email@email.com',
        other_stakeholders: 'email2@email.com',
        meeting_start_range: '25-07-2022',
        meeting_end_range: '30-07-2022',
        duration: '30mins',
        no_of_entries: '3',
        deadline_date_for_response: '30-07-2022',
        deadline_time_for_response: '13:00',
        speakers: 'me',
        other_attendees: 'Bruno',
        event_start_date_range: '25-07-2022',
        event_end_date_range: '30-07-2022'
      },
      processing: false
    };
  },
  created: function created() {},
  methods: {
    goToStep: function goToStep(step) {
      this.currentStep = step;
    },
    createPoll: function createPoll() {
      var _this = this;

      // document.querySelector('#sendPollBtn').innerHTML = 'Processing...';
      document.querySelector('#sendPollBtn').setAttribute('disabled', 'true');
      var all_errors = [];
      var url = BASE_URL + '/api/poll/create';
      axios.post(url, this.poll_data).then(function (_ref) {
        var data = _ref.data;

        _this.$router.push({
          name: 'poll.view',
          params: {
            poll_id: data.data.id
          }
        }); // console.log(data.data.id);
        // console.log(data);

      })["catch"](function (_ref2) {
        var data = _ref2.response.data;

        if (data.errors) {
          _this.notifmsg = data.errors;

          _this.$toastr.e('An error has occured');
        }
      })["finally"](function () {
        _this.processing = false; // document.querySelector('#sendPollBtn').innerHTML = 'Send Poll';

        document.querySelector('#sendPollBtn').removeAttribute('disabled');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-cal/dist/vuecal.css":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-cal/dist/vuecal.css ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vuecal__weekdays-headings{border-bottom:1px solid #ddd;margin-bottom:-1px}.vuecal--view-with-time .vuecal__weekdays-headings,.vuecal--week-numbers .vuecal__weekdays-headings{padding-left:3em}.vuecal--view-with-time.vuecal--twelve-hour .vuecal__weekdays-headings{font-size:.9em;padding-left:4em}.vuecal--overflow-x.vuecal--view-with-time .vuecal__weekdays-headings{padding-left:0}.vuecal__heading{width:100%;height:2.8em;font-weight:400;justify-content:center;text-align:center;align-items:center;position:relative;overflow:hidden}.vuecal__heading>.vuecal__flex{width:100%;height:100%;align-items:normal!important}.vuecal--sticky-split-labels .vuecal__heading{height:3.4em}.vuecal--day-view .vuecal__heading,.vuecal--month-view .vuecal__heading,.vuecal--week-view .vuecal__heading{width:14.2857%}.vuecal--hide-weekends.vuecal--day-view .vuecal__heading,.vuecal--hide-weekends.vuecal--month-view .vuecal__heading,.vuecal--hide-weekends.vuecal--week-view .vuecal__heading,.vuecal--years-view .vuecal__heading{width:20%}.vuecal--year-view .vuecal__heading{width:33.33%}.vuecal__heading .weekday-label{flex-shrink:0;display:flex;justify-content:center;align-items:center}.vuecal--small .vuecal__heading .small,.vuecal--xsmall .vuecal__heading .xsmall{display:block}.vuecal--small .vuecal__heading .full,.vuecal--small .vuecal__heading .xsmall,.vuecal--xsmall .vuecal__heading .full,.vuecal--xsmall .vuecal__heading .small,.vuecal__heading .small,.vuecal__heading .xsmall{display:none}.vuecal .vuecal__split-days-headers{align-items:center}@media screen and (max-width:550px){.vuecal__heading{line-height:1.2}.vuecal--small .vuecal__heading .small,.vuecal--xsmall .vuecal__heading .xsmall,.vuecal__heading .small{display:block}.vuecal--small .vuecal__heading .full,.vuecal--small .vuecal__heading .xsmall,.vuecal--xsmall .vuecal__heading .full,.vuecal--xsmall .vuecal__heading .small,.vuecal__heading .full,.vuecal__heading .xsmall{display:none}.vuecal--overflow-x .vuecal__heading .full,.vuecal--small.vuecal--overflow-x .vuecal__heading .small,.vuecal--xsmall.vuecal--overflow-x .vuecal__heading .xsmall{display:block}.vuecal--overflow-x .vuecal__heading .small,.vuecal--overflow-x .vuecal__heading .xsmall,.vuecal--small.vuecal--overflow-x .vuecal__heading .full,.vuecal--small.vuecal--overflow-x .vuecal__heading .xsmall,.vuecal--xsmall.vuecal--overflow-x .vuecal__heading .full,.vuecal--xsmall.vuecal--overflow-x .vuecal__heading .small{display:none}}@media screen and (max-width:450px){.vuecal--small .vuecal__heading .xsmall,.vuecal--xsmall .vuecal__heading .xsmall,.vuecal__heading .xsmall{display:block}.vuecal--small .vuecal__heading .full,.vuecal--small .vuecal__heading .small,.vuecal--xsmall .vuecal__heading .full,.vuecal--xsmall .vuecal__heading .small,.vuecal__heading .full,.vuecal__heading .small{display:none}.vuecal--small.vuecal--overflow-x .vuecal__heading .small,.vuecal--xsmall.vuecal--overflow-x .vuecal__heading .xsmall{display:block}.vuecal--small.vuecal--overflow-x .vuecal__heading .full,.vuecal--small.vuecal--overflow-x .vuecal__heading .xsmall,.vuecal--xsmall.vuecal--overflow-x .vuecal__heading .full,.vuecal--xsmall.vuecal--overflow-x .vuecal__heading .small{display:none}}.vuecal__header button{outline:none;font-family:inherit}.vuecal__menu{padding:0;margin:0;list-style-type:none;justify-content:center;background-color:rgba(0,0,0,.02)}.vuecal__view-btn{background:none;border:none;padding:.3em 1em;height:2.2em;font-size:1.3em;border-bottom:0 solid currentColor;cursor:pointer;color:inherit;box-sizing:border-box;transition:.2s}.vuecal__view-btn--active{border-bottom-width:2px;background:hsla(0,0%,100%,.15)}.vuecal__title-bar{background-color:rgba(0,0,0,.1);display:flex;align-items:center;text-align:center;justify-content:space-between;font-size:1.4em;line-height:1.3;min-height:2em}.vuecal--xsmall .vuecal__title-bar{font-size:1.3em}.vuecal__title{position:relative;justify-content:center}.vuecal__title button{cursor:pointer;background:none;border:none}.vuecal__title button.slide-fade--left-leave-active,.vuecal__title button.slide-fade--right-leave-active{width:100%}.vuecal__today-btn{position:relative;align-items:center;display:flex;font-size:.8em;background:none;border:none}.vuecal__today-btn span.default{font-size:.8em;padding:3px 6px;text-transform:uppercase;cursor:pointer}.vuecal__arrow{cursor:pointer;position:relative;z-index:1;background:none;border:none;white-space:nowrap}.vuecal__arrow--prev{margin-left:.6em}.vuecal__arrow--next{margin-right:.6em}.vuecal__arrow i.angle{display:inline-block;border:solid currentColor;border-width:0 2px 2px 0;padding:.25em;transform:rotate(-45deg)}.vuecal__arrow--prev i.angle{border-width:2px 0 0 2px}.vuecal__arrow--highlighted,.vuecal__today-btn--highlighted,.vuecal__view-btn--highlighted{position:relative;background-color:rgba(0,0,0,.04)}.vuecal__arrow--highlighted *,.vuecal__today-btn--highlighted *,.vuecal__view-btn--highlighted *{pointer-events:none}.vuecal__arrow--highlighted:after,.vuecal__arrow--highlighted:before,.vuecal__today-btn--highlighted:after,.vuecal__today-btn--highlighted:before,.vuecal__view-btn--highlighted:after,.vuecal__view-btn--highlighted:before{content:\"\";background-color:inherit;-webkit-animation:sonar .8s ease-out infinite;animation:sonar .8s ease-out infinite;position:absolute;top:50%;left:50%;pointer-events:none}.vuecal__arrow--highlighted:before,.vuecal__today-btn--highlighted:before,.vuecal__view-btn--highlighted:before{width:3em;height:3em;border-radius:3em;margin-top:-1.5em;margin-left:-1.5em}.vuecal__arrow--highlighted:after,.vuecal__today-btn--highlighted:after,.vuecal__view-btn--highlighted:after{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:.1s;animation-delay:.1s;width:2.6em;height:2.6em;border-radius:2.6em;margin-top:-1.3em;margin-left:-1.3em}@-webkit-keyframes sonar{0%,20%{opacity:1}to{transform:scale(2.5);opacity:0}}@keyframes sonar{0%,20%{opacity:1}to{transform:scale(2.5);opacity:0}}@media screen and (max-width:450px){.vuecal__title{font-size:.9em}.vuecal__view-btn{padding-left:.6em;padding-right:.6em}}@media screen and (max-width:350px){.vuecal__view-btn{font-size:1.1em}}.vuecal__event{color:#666;background-color:hsla(0,0%,97.3%,.8);position:relative;box-sizing:border-box;left:0;width:100%;z-index:1;transition:box-shadow .3s,left .3s,width .3s;overflow:hidden}.vuecal--no-time .vuecal__event{min-height:8px}.vuecal:not(.vuecal--dragging-event) .vuecal__event:hover{z-index:2}.vuecal__cell .vuecal__event *{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.vuecal--view-with-time .vuecal__event:not(.vuecal__event--all-day){position:absolute}.vuecal--view-with-time .vuecal__bg .vuecal__event--all-day{position:absolute;top:0;bottom:0;z-index:0;opacity:.6;width:auto;right:0}.vuecal--view-with-time .vuecal__all-day .vuecal__event--all-day{position:relative;left:0}.vuecal__event--background{z-index:0}.vuecal__event--focus,.vuecal__event:focus{box-shadow:1px 1px 6px rgba(0,0,0,.2);z-index:3;outline:none}.vuecal__event.vuecal__event--dragging{opacity:.7}.vuecal__event.vuecal__event--static{opacity:0;transition:opacity .1s}@-moz-document url-prefix(){.vuecal__event.vuecal__event--dragging{opacity:1}}.vuecal__event-resize-handle{position:absolute;bottom:0;left:0;right:0;height:1em;background-color:hsla(0,0%,100%,.3);opacity:0;transform:translateY(110%);transition:.3s;cursor:ns-resize}.vuecal__event--focus .vuecal__event-resize-handle,.vuecal__event--resizing .vuecal__event-resize-handle,.vuecal__event:focus .vuecal__event-resize-handle,.vuecal__event:hover .vuecal__event-resize-handle{opacity:1;transform:translateY(0)}.vuecal__event--dragging .vuecal__event-resize-handle{display:none}.vuecal__event-delete{position:absolute;top:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center;height:1.4em;line-height:1.4em;background-color:rgba(221,51,51,.85);color:#fff;z-index:0;cursor:pointer;transform:translateY(-110%);transition:.3s}.vuecal__event .vuecal__event-delete{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vuecal--full-height-delete .vuecal__event-delete{height:auto;bottom:0}.vuecal--full-height-delete .vuecal__event-delete:before{content:\"\";width:1.7em;height:1.8em;display:block;background-image:url('data:image/svg+xml;utf8,<svg width=\"512\" height=\"512\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zm5 14.1c.2 0 .2.2.2.2l-.1.3-1 1-.3.1h-.2L12 13.5l-3.5 3.6h-.3-.3l-1-1v-.4-.2l3.6-3.6-3.6-3.5A.4.4 0 017 8l1-1 .3-.2c.1 0 .2 0 .2.2l3.6 3.5L15.6 7l.2-.2c.1 0 .2 0 .3.2l1 1v.5L13.5 12z\" fill=\"%23fff\" opacity=\".9\"/></svg>')}.vuecal__event--deletable .vuecal__event-delete{transform:translateY(0);z-index:1}.vuecal__event--deletable.vuecal__event--dragging .vuecal__event-delete{opacity:0;transition:none}.vuecal--month-view .vuecal__event-title{font-size:.85em}.vuecal--short-events .vuecal__event-title{text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0 3px}.vuecal__event-content,.vuecal__event-title{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.vuecal__event-title--edit{border-bottom:1px solid transparent;text-align:center;transition:.3s;color:inherit;background-image:url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M442 150l-39 39-80-80 39-39q6-6 15-6t15 6l50 50q6 6 6 15t-6 15zM64 368l236-236 80 80-236 236H64v-80z\" fill=\"%23000\" opacity=\".4\"/></svg>');background-repeat:no-repeat;background-position:120% .15em;background-size:.4em;outline:none;width:100%}.vuecal__event-title--edit:focus,.vuecal__event-title--edit:hover{border-color:rgba(0,0,0,.4);background-position:99% .15em;background-size:1.2em}.vuecal__cell{position:relative;width:100%;display:flex;justify-content:center;align-items:center;text-align:center;transition:background-color .15s ease-in-out}.vuecal__cells.month-view .vuecal__cell,.vuecal__cells.week-view .vuecal__cell{width:14.2857%}.vuecal--hide-weekends .vuecal__cells.month-view .vuecal__cell,.vuecal--hide-weekends .vuecal__cells.week-view .vuecal__cell,.vuecal__cells.years-view .vuecal__cell{width:20%}.vuecal__cells.year-view .vuecal__cell{width:33.33%}.vuecal__cells.day-view .vuecal__cell{flex:1}.vuecal--overflow-x.vuecal--day-view .vuecal__cell{width:auto}.vuecal--click-to-navigate .vuecal__cell:not(.vuecal__cell--disabled){cursor:pointer}.vuecal--day-view.vuecal--no-time .vuecal__cell:not(.vuecal__cell--has-splits),.vuecal--view-with-time .vuecal__cell,.vuecal--week-view.vuecal--no-time .vuecal__cell:not(.vuecal__cell--has-splits){display:block}.vuecal__cell.vuecal__cell--has-splits{flex-direction:row;display:flex}.vuecal__cell:before{content:\"\";position:absolute;z-index:0;top:0;left:0;right:-1px;bottom:-1px;border:1px solid hsla(0,0%,76.9%,.25)}.vuecal--overflow-x.vuecal--day-view .vuecal__cell:before{bottom:0}.vuecal__cell--current,.vuecal__cell--today{background-color:rgba(240,240,255,.4);z-index:1}.vuecal__cell--selected{background-color:rgba(235,255,245,.4);z-index:2}.vuecal--day-view .vuecal__cell--selected{background:none}.vuecal__cell--out-of-scope{color:rgba(0,0,0,.25)}.vuecal__cell--disabled{color:rgba(0,0,0,.25);cursor:not-allowed}.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),.vuecal__cell-split.vuecal__cell-split--highlighted{background-color:rgba(0,0,0,.04);transition-duration:5ms}.vuecal__cell-content{position:relative;width:100%;height:100%;outline:none}.vuecal--month-view .vuecal__cell-content,.vuecal--year-view .vuecal__cell-content,.vuecal--years-view .vuecal__cell-content{justify-content:center}.vuecal__cell-split{display:flex;flex-grow:1;flex-direction:column;height:100%;position:relative;transition:background-color .15s ease-in-out}.vuecal__cell-events{width:100%}.vuecal__cell-events-count{left:50%;top:65%;transform:translateX(-50%);min-width:12px;height:12px;line-height:12px;padding:0 3px;background:#999;color:#fff;border-radius:12px;font-size:10px}.vuecal__cell-events-count,.vuecal__cell .vuecal__special-hours{position:absolute;box-sizing:border-box}.vuecal__cell .vuecal__special-hours{left:0;right:0}.vuecal--overflow-x.vuecal--week-view .vuecal__cell,.vuecal__cell-split{overflow:hidden}.vuecal__no-event{padding-top:1em;color:#aaa;justify-self:flex-start;margin-bottom:auto}.vuecal__all-day .vuecal__no-event{display:none}.vuecal__now-line{position:absolute;left:0;width:100%;height:0;color:red;border-top:1px solid currentColor;opacity:.6;z-index:1}.vuecal__now-line:before{content:\"\";position:absolute;top:-6px;left:0;border:5px solid transparent;border-left-color:currentColor}.vuecal{height:100%;box-shadow:inset 0 0 0 1px rgba(0,0,0,.08)}.vuecal *,.vuecal--has-touch :not(.vuecal__event-title--edit){-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vuecal--has-touch :not(.vuecal__event-title--edit){-webkit-touch-callout:none}.vuecal .clickable{cursor:pointer}.vuecal--drag-creating-event,.vuecal--resizing-event{cursor:ns-resize}.vuecal--dragging-event{cursor:move;cursor:-webkit-grabbing;cursor:grabbing}.vuecal .dragging-helper{position:absolute;width:60px;height:40px;background:rgba(138,190,230,.8);border:1px solid #61a9e0;z-index:10}.vuecal--xsmall{font-size:.9em}.vuecal__flex{display:flex;flex-direction:row}.vuecal__flex[column]{flex-direction:column}.vuecal__flex[column],.vuecal__flex[grow]{flex:1 1 auto}.vuecal__flex[grow]{width:100%}.vuecal__flex[wrap]{flex-wrap:wrap}.vuecal__split-days-headers.slide-fade--right-leave-active{display:none}.vuecal--week-numbers.vuecal--month-view .vuecal__split-days-headers{margin-left:3em}.vuecal--day-view:not(.vuecal--overflow-x) .vuecal__split-days-headers{margin-left:3em;height:2.2em}.vuecal--day-view.vuecal--twelve-hour:not(.vuecal--overflow-x) .vuecal__split-days-headers{margin-left:4em}.vuecal__split-days-headers .day-split-header{display:flex;flex-grow:1;flex-basis:0;justify-content:center;align-items:center;height:100%}.vuecal__split-days-headers .vuecal--day-view.vuecal--overflow-x.vuecal--sticky-split-labels .day-split-header{height:1.5em}.vuecal__body{position:relative;overflow:hidden}.vuecal__all-day{min-height:1.7em;margin-bottom:-1px;flex-shrink:0}.vuecal__all-day-text{width:3em;box-sizing:border-box;color:#999;padding-right:2px;display:flex;flex-shrink:0;align-items:center;justify-content:flex-end;border-bottom:1px solid #ddd;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.vuecal__all-day-text span{font-size:.85em;text-align:right;line-height:1.1}.vuecal--twelve-hour .vuecal__all-day>span{width:4em}.vuecal__bg{overflow:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;min-height:60px;position:relative;width:100%;margin-bottom:1px}.vuecal--no-time .vuecal__bg{display:flex;flex:1 1 auto;overflow:auto}.vuecal__week-numbers{width:3em;flex-shrink:0!important}.vuecal__week-numbers .vuecal__week-number-cell{opacity:.4;font-size:.9em;align-items:center;justify-items:center;justify-content:center}.vuecal__scrollbar-check{position:absolute;top:0;left:0;right:0;bottom:0;overflow:scroll;visibility:hidden;z-index:-1}.vuecal__scrollbar-check div{height:120%}.vuecal__time-column{width:3em;height:100%;flex-shrink:0}.vuecal--twelve-hour .vuecal__time-column{width:4em;font-size:.9em}.vuecal--overflow-x.vuecal--week-view .vuecal__time-column{margin-top:2.8em;box-shadow:0 1px 1px rgba(0,0,0,.3)}.vuecal--overflow-x.vuecal--week-view.vuecal--sticky-split-labels .vuecal__time-column{margin-top:3.4em}.vuecal--overflow-x.vuecal--day-view.vuecal--sticky-split-labels .vuecal__time-column{margin-top:1.5em}.vuecal__time-column .vuecal__time-cell{color:#999;text-align:right;padding-right:2px;font-size:.9em}.vuecal__time-column .vuecal__time-cell-line:before{content:\"\";position:absolute;left:0;right:0;border-top:1px solid hsla(0,0%,76.9%,.3)}.vuecal__cells{margin:0 1px 1px 0}.vuecal--overflow-x.vuecal--day-view .vuecal__cells{margin:0}.vuecal--events-on-month-view.vuecal--short-events .vuecal__cells{width:99.9%}.vuecal--overflow-x.vuecal--day-view .vuecal__cells,.vuecal--overflow-x.vuecal--week-view .vuecal__cells{flex-wrap:nowrap;overflow:auto}.slide-fade--left-enter-active,.slide-fade--left-leave-active,.slide-fade--right-enter-active,.slide-fade--right-leave-active{transition:.25s ease-out}.slide-fade--left-enter,.slide-fade--right-leave-to{transform:translateX(-15px);opacity:0}.slide-fade--left-leave-to,.slide-fade--right-enter{transform:translateX(15px);opacity:0}.slide-fade--left-leave-active,.slide-fade--right-leave-active{position:absolute!important;height:100%}.vuecal__title-bar .slide-fade--left-leave-active,.vuecal__title-bar .slide-fade--right-leave-active{left:0;right:0;height:auto}.vuecal__heading .slide-fade--left-leave-active,.vuecal__heading .slide-fade--right-leave-active{display:flex;align-items:center}.vuecal--green-theme .vuecal__cell-events-count,.vuecal--green-theme .vuecal__menu{background-color:#42b983;color:#fff}.vuecal--green-theme .vuecal__title-bar{background-color:#e4f5ef}.vuecal--green-theme .vuecal__cell--current,.vuecal--green-theme .vuecal__cell--today{background-color:rgba(240,240,255,.4)}.vuecal--green-theme:not(.vuecal--day-view) .vuecal__cell--selected{background-color:rgba(235,255,245,.4)}.vuecal--green-theme .vuecal__cell--selected:before{border-color:rgba(66,185,131,.5)}.vuecal--green-theme .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),.vuecal--green-theme .vuecal__cell-split--highlighted{background-color:rgba(195,255,225,.5)}.vuecal--green-theme .vuecal__arrow--highlighted,.vuecal--green-theme .vuecal__today-btn--highlighted,.vuecal--green-theme .vuecal__view-btn--highlighted{background-color:rgba(136,236,191,.25)}.vuecal--blue-theme .vuecal__cell-events-count,.vuecal--blue-theme .vuecal__menu{background-color:rgba(66,163,185,.8);color:#fff}.vuecal--blue-theme .vuecal__title-bar{background-color:rgba(0,165,188,.3)}.vuecal--blue-theme .vuecal__cell--current,.vuecal--blue-theme .vuecal__cell--today{background-color:rgba(240,240,255,.4)}.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--selected{background-color:rgba(235,253,255,.4)}.vuecal--blue-theme .vuecal__cell--selected:before{border-color:rgba(115,191,204,.5)}.vuecal--blue-theme .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),.vuecal--blue-theme .vuecal__cell-split--highlighted{background-color:rgba(0,165,188,.06)}.vuecal--blue-theme .vuecal__arrow--highlighted,.vuecal--blue-theme .vuecal__today-btn--highlighted,.vuecal--blue-theme .vuecal__view-btn--highlighted{background-color:rgba(66,163,185,.2)}.vuecal--rounded-theme .vuecal__weekdays-headings{border:none}.vuecal--rounded-theme .vuecal__cell,.vuecal--rounded-theme .vuecal__cell:before{background:none;border:none}.vuecal--rounded-theme .vuecal__cell--out-of-scope{opacity:.4}.vuecal--rounded-theme .vuecal__cell-content{width:30px;height:30px;flex-grow:0;border:1px solid transparent;border-radius:30px;color:#333}.vuecal--rounded-theme.vuecal--day-view .vuecal__cell-content{width:auto;background:none}.vuecal--rounded-theme.vuecal--year-view .vuecal__cell{width:33.33%}.vuecal--rounded-theme.vuecal--year-view .vuecal__cell-content{width:85px}.vuecal--rounded-theme.vuecal--years-view .vuecal__cell-content{width:52px}.vuecal--rounded-theme .vuecal__cell{background-color:transparent!important}.vuecal--rounded-theme.vuecal--green-theme:not(.vuecal--day-view) .vuecal__cell-content{background-color:#f1faf7}.vuecal--rounded-theme.vuecal--green-theme:not(.vuecal--day-view) .vuecal__cell--today .vuecal__cell-content{background-color:#42b983;color:#fff}.vuecal--rounded-theme.vuecal--green-theme .vuecal--day-view .vuecal__cell--today:before{background-color:rgba(66,185,131,.05)}.vuecal--rounded-theme.vuecal--green-theme:not(.vuecal--day-view) .vuecal__cell--selected .vuecal__cell-content{border-color:#42b983}.vuecal--rounded-theme.vuecal--green-theme .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),.vuecal--rounded-theme.vuecal--green-theme .vuecal__cell-split--highlighted{background-color:rgba(195,255,225,.5)}.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell-content{background-color:rgba(100,182,255,.2)}.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--today .vuecal__cell-content{background-color:#8fb7e4;color:#fff}.vuecal--rounded-theme.vuecal--blue-theme .vuecal--day-view .vuecal__cell--today:before{background-color:rgba(143,183,228,.1)}.vuecal--rounded-theme.vuecal--blue-theme:not(.vuecal--day-view) .vuecal__cell--selected .vuecal__cell-content{border-color:#61a9e0}.vuecal--rounded-theme.vuecal--blue-theme .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),.vuecal--rounded-theme.vuecal--blue-theme .vuecal__cell-split--highlighted{background-color:rgba(0,165,188,.06)}.vuecal--date-picker .vuecal__title-bar{font-size:1.2em}.vuecal--date-picker .vuecal__heading{height:2.2em;font-weight:500;opacity:.4}.vuecal--date-picker .vuecal__weekdays-headings{border:none}.vuecal--date-picker .vuecal__body{margin-left:1px}.vuecal--date-picker .vuecal__cell,.vuecal--date-picker .vuecal__cell:before{background:none;border:none}.vuecal--date-picker .vuecal__cell-content{height:26px;flex-grow:0;border:1px solid transparent;border-radius:25px;transition:background-color .2s cubic-bezier(.39,.58,.57,1)}.vuecal--date-picker.vuecal--years-view .vuecal__cell-content{flex:0;padding:0 4px;height:24px}.vuecal--date-picker.vuecal--year-view .vuecal__cell-content{flex:0;padding:0 15px}.vuecal--date-picker.vuecal--month-view .vuecal__cell-content{width:26px}.vuecal--date-picker:not(.vuecal--day-view) .vuecal__cell-content:hover{background-color:rgba(0,0,0,.1)}.vuecal--date-picker:not(.vuecal--day-view) .vuecal__cell--selected .vuecal__cell-content{background-color:#42b982;color:#fff}.vuecal--date-picker:not(.vuecal--day-view) .vuecal__cell--current .vuecal__cell-content,.vuecal--date-picker:not(.vuecal--day-view) .vuecal__cell--today .vuecal__cell-content{border-color:#42b982}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/vue-cal/dist/vuecal.css":
/*!**********************************************!*\
  !*** ./node_modules/vue-cal/dist/vuecal.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vuecal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vuecal.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-cal/dist/vuecal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vuecal_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vuecal_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-cal/dist/vuecal.common.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-cal/dist/vuecal.common.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		40: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __nested_webpack_require_2343__.p + "vuecal.common." + ({"0":"i18n/ar","1":"i18n/bg","2":"i18n/bn","3":"i18n/bs","4":"i18n/ca","5":"i18n/cs","6":"i18n/da","7":"i18n/de","8":"i18n/el","9":"i18n/es","10":"i18n/fa","11":"i18n/fr","12":"i18n/he","13":"i18n/hr","14":"i18n/hu","15":"i18n/id","16":"i18n/is","17":"i18n/it","18":"i18n/ja","19":"i18n/ka","20":"i18n/ko","21":"i18n/lt","22":"i18n/mn","23":"i18n/nl","24":"i18n/no","25":"i18n/pl","26":"i18n/pt-br","27":"i18n/ro","28":"i18n/ru","29":"i18n/sk","30":"i18n/sl","31":"i18n/sq","32":"i18n/sr","33":"i18n/sv","34":"i18n/tr","35":"i18n/uk","36":"i18n/vi","37":"i18n/zh-cn","38":"i18n/zh-hk","39":"drag-and-drop"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_2343__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_2343__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__nested_webpack_require_2343__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__nested_webpack_require_2343__.nc) {
/******/ 					script.setAttribute("nonce", __nested_webpack_require_2343__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_2343__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_2343__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_2343__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_2343__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_2343__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_2343__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_2343__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_2343__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_2343__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_2343__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_2343__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_2343__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_2343__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__nested_webpack_require_2343__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpvuecal"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpvuecal"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_2343__(__nested_webpack_require_2343__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00b4":
/***/ (function(module, exports, __nested_webpack_require_9005__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__nested_webpack_require_9005__("ac1f");
var $ = __nested_webpack_require_9005__("23e7");
var global = __nested_webpack_require_9005__("da84");
var call = __nested_webpack_require_9005__("c65b");
var uncurryThis = __nested_webpack_require_9005__("e330");
var isCallable = __nested_webpack_require_9005__("1626");
var isObject = __nested_webpack_require_9005__("861d");

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var Error = global.Error;
var un$Test = uncurryThis(/./.test);

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (str) {
    var exec = this.exec;
    if (!isCallable(exec)) return un$Test(this, str);
    var result = call(exec, this, str);
    if (result !== null && !isObject(result)) {
      throw new Error('RegExp exec method returned something other than an Object or null');
    }
    return !!result;
  }
});


/***/ }),

/***/ "00ee":
/***/ (function(module, exports, __nested_webpack_require_10231__) {

var wellKnownSymbol = __nested_webpack_require_10231__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __nested_webpack_require_10511__) {

var uncurryThis = __nested_webpack_require_10511__("e330");
var aCallable = __nested_webpack_require_10511__("59ed");
var NATIVE_BIND = __nested_webpack_require_10511__("40d5");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "04d1":
/***/ (function(module, exports, __nested_webpack_require_11010__) {

var userAgent = __nested_webpack_require_11010__("342f");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __nested_webpack_require_11234__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __nested_webpack_require_11234__("c6b6");
var toIndexedObject = __nested_webpack_require_11234__("fc6a");
var $getOwnPropertyNames = __nested_webpack_require_11234__("241c").f;
var arraySlice = __nested_webpack_require_11234__("4dae");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __nested_webpack_require_12111__) {

var DESCRIPTORS = __nested_webpack_require_12111__("83ab");
var call = __nested_webpack_require_12111__("c65b");
var propertyIsEnumerableModule = __nested_webpack_require_12111__("d1e7");
var createPropertyDescriptor = __nested_webpack_require_12111__("5c6c");
var toIndexedObject = __nested_webpack_require_12111__("fc6a");
var toPropertyKey = __nested_webpack_require_12111__("a04b");
var hasOwn = __nested_webpack_require_12111__("1a2d");
var IE8_DOM_DEFINE = __nested_webpack_require_12111__("0cfb");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __nested_webpack_require_13202__) {

var toLength = __nested_webpack_require_13202__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "0a96":
/***/ (function(module) {

module.exports = JSON.parse("{\"weekDays\":[\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\"],\"months\":[\"January\",\"February\",\"March\",\"April\",\"May\",\"June\",\"July\",\"August\",\"September\",\"October\",\"November\",\"December\"],\"years\":\"Years\",\"year\":\"Year\",\"month\":\"Month\",\"week\":\"Week\",\"day\":\"Day\",\"today\":\"Today\",\"noEvent\":\"No Event\",\"allDay\":\"All day\",\"deleteEvent\":\"Delete\",\"createEvent\":\"Create an event\",\"dateFormat\":\"dddd MMMM D{S}, YYYY\"}");

/***/ }),

/***/ "0b42":
/***/ (function(module, exports, __nested_webpack_require_14088__) {

var global = __nested_webpack_require_14088__("da84");
var isArray = __nested_webpack_require_14088__("e8b5");
var isConstructor = __nested_webpack_require_14088__("68ee");
var isObject = __nested_webpack_require_14088__("861d");
var wellKnownSymbol = __nested_webpack_require_14088__("b622");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __nested_webpack_require_14941__) {

var uncurryThis = __nested_webpack_require_14941__("e330");
var toObject = __nested_webpack_require_14941__("7b0b");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __nested_webpack_require_16568__) {

var DESCRIPTORS = __nested_webpack_require_16568__("83ab");
var fails = __nested_webpack_require_16568__("d039");
var createElement = __nested_webpack_require_16568__("cc12");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d51":
/***/ (function(module, exports, __nested_webpack_require_17084__) {

var global = __nested_webpack_require_17084__("da84");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "107c":
/***/ (function(module, exports, __nested_webpack_require_17364__) {

var fails = __nested_webpack_require_17364__("d039");
var global = __nested_webpack_require_17364__("da84");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __nested_webpack_require_17831__) {

"use strict";

var global = __nested_webpack_require_17831__("da84");
var toIntegerOrInfinity = __nested_webpack_require_17831__("5926");
var toString = __nested_webpack_require_17831__("577e");
var requireObjectCoercible = __nested_webpack_require_17831__("1d80");

var RangeError = global.RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __nested_webpack_require_18593__) {

"use strict";

var apply = __nested_webpack_require_18593__("2ba4");
var call = __nested_webpack_require_18593__("c65b");
var uncurryThis = __nested_webpack_require_18593__("e330");
var fixRegExpWellKnownSymbolLogic = __nested_webpack_require_18593__("d784");
var isRegExp = __nested_webpack_require_18593__("44e7");
var anObject = __nested_webpack_require_18593__("825a");
var requireObjectCoercible = __nested_webpack_require_18593__("1d80");
var speciesConstructor = __nested_webpack_require_18593__("4840");
var advanceStringIndex = __nested_webpack_require_18593__("8aa5");
var toLength = __nested_webpack_require_18593__("50c4");
var toString = __nested_webpack_require_18593__("577e");
var getMethod = __nested_webpack_require_18593__("dc4a");
var arraySlice = __nested_webpack_require_18593__("4dae");
var callRegExpExec = __nested_webpack_require_18593__("14c3");
var regexpExec = __nested_webpack_require_18593__("9263");
var stickyHelpers = __nested_webpack_require_18593__("9f7f");
var fails = __nested_webpack_require_18593__("d039");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "12cd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1332":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __nested_webpack_require_25361__) {

var global = __nested_webpack_require_25361__("da84");
var call = __nested_webpack_require_25361__("c65b");
var anObject = __nested_webpack_require_25361__("825a");
var isCallable = __nested_webpack_require_25361__("1626");
var classof = __nested_webpack_require_25361__("c6b6");
var regexpExec = __nested_webpack_require_25361__("9263");

var TypeError = global.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "159b":
/***/ (function(module, exports, __nested_webpack_require_26134__) {

var global = __nested_webpack_require_26134__("da84");
var DOMIterables = __nested_webpack_require_26134__("fdbc");
var DOMTokenListPrototype = __nested_webpack_require_26134__("785a");
var forEach = __nested_webpack_require_26134__("17c2");
var createNonEnumerableProperty = __nested_webpack_require_26134__("9112");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "1626":
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __nested_webpack_require_27256__) {

"use strict";

var $forEach = __nested_webpack_require_27256__("b727").forEach;
var arrayMethodIsStrict = __nested_webpack_require_27256__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports, __nested_webpack_require_27872__) {

var global = __nested_webpack_require_27872__("da84");
var isPrototypeOf = __nested_webpack_require_27872__("3a9b");

var TypeError = global.TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw TypeError('Incorrect invocation');
};


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __nested_webpack_require_28220__) {

var uncurryThis = __nested_webpack_require_28220__("e330");
var toObject = __nested_webpack_require_28220__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __nested_webpack_require_28644__) {

var getBuiltIn = __nested_webpack_require_28644__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __nested_webpack_require_28835__) {

var wellKnownSymbol = __nested_webpack_require_28835__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports, __nested_webpack_require_29883__) {

var global = __nested_webpack_require_29883__("da84");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __nested_webpack_require_30266__) {

var fails = __nested_webpack_require_30266__("d039");
var wellKnownSymbol = __nested_webpack_require_30266__("b622");
var V8_VERSION = __nested_webpack_require_30266__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "2170":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2266":
/***/ (function(module, exports, __nested_webpack_require_31116__) {

var global = __nested_webpack_require_31116__("da84");
var bind = __nested_webpack_require_31116__("0366");
var call = __nested_webpack_require_31116__("c65b");
var anObject = __nested_webpack_require_31116__("825a");
var tryToString = __nested_webpack_require_31116__("0d51");
var isArrayIteratorMethod = __nested_webpack_require_31116__("e95a");
var lengthOfArrayLike = __nested_webpack_require_31116__("07fa");
var isPrototypeOf = __nested_webpack_require_31116__("3a9b");
var getIterator = __nested_webpack_require_31116__("9a1f");
var getIteratorMethod = __nested_webpack_require_31116__("35a1");
var iteratorClose = __nested_webpack_require_31116__("2a62");

var TypeError = global.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __nested_webpack_require_33514__) {

var toIntegerOrInfinity = __nested_webpack_require_33514__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __nested_webpack_require_34050__) {

var global = __nested_webpack_require_34050__("da84");
var getOwnPropertyDescriptor = __nested_webpack_require_34050__("06cf").f;
var createNonEnumerableProperty = __nested_webpack_require_34050__("9112");
var redefine = __nested_webpack_require_34050__("6eeb");
var setGlobal = __nested_webpack_require_34050__("ce4e");
var copyConstructorProperties = __nested_webpack_require_34050__("e893");
var isForced = __nested_webpack_require_34050__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __nested_webpack_require_36628__) {

var internalObjectKeys = __nested_webpack_require_36628__("ca84");
var enumBugKeys = __nested_webpack_require_36628__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2532":
/***/ (function(module, exports, __nested_webpack_require_37165__) {

"use strict";

var $ = __nested_webpack_require_37165__("23e7");
var uncurryThis = __nested_webpack_require_37165__("e330");
var notARegExp = __nested_webpack_require_37165__("5a34");
var requireObjectCoercible = __nested_webpack_require_37165__("1d80");
var toString = __nested_webpack_require_37165__("577e");
var correctIsRegExpLogic = __nested_webpack_require_37165__("ab13");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __nested_webpack_require_38030__) {

"use strict";

var uncurryThis = __nested_webpack_require_38030__("e330");
var PROPER_FUNCTION_NAME = __nested_webpack_require_38030__("5e77").PROPER;
var redefine = __nested_webpack_require_38030__("6eeb");
var anObject = __nested_webpack_require_38030__("825a");
var isPrototypeOf = __nested_webpack_require_38030__("3a9b");
var $toString = __nested_webpack_require_38030__("577e");
var fails = __nested_webpack_require_38030__("d039");
var regExpFlags = __nested_webpack_require_38030__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];
var getFlags = uncurryThis(regExpFlags);

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __nested_webpack_require_39352__) {

"use strict";

var getBuiltIn = __nested_webpack_require_39352__("d066");
var definePropertyModule = __nested_webpack_require_39352__("9bf2");
var wellKnownSymbol = __nested_webpack_require_39352__("b622");
var DESCRIPTORS = __nested_webpack_require_39352__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __nested_webpack_require_40025__) {

var call = __nested_webpack_require_40025__("c65b");
var anObject = __nested_webpack_require_40025__("825a");
var getMethod = __nested_webpack_require_40025__("dc4a");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "2ba4":
/***/ (function(module, exports, __nested_webpack_require_40729__) {

var NATIVE_BIND = __nested_webpack_require_40729__("40d5");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __nested_webpack_require_41183__) {

var global = __nested_webpack_require_41183__("da84");
var userAgent = __nested_webpack_require_41183__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __nested_webpack_require_42100__) {

var getBuiltIn = __nested_webpack_require_42100__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __nested_webpack_require_42292__) {

var classof = __nested_webpack_require_42292__("f5df");
var getMethod = __nested_webpack_require_42292__("dc4a");
var Iterators = __nested_webpack_require_42292__("3f8c");
var wellKnownSymbol = __nested_webpack_require_42292__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __nested_webpack_require_42762__) {

var DESCRIPTORS = __nested_webpack_require_42762__("83ab");
var V8_PROTOTYPE_DEFINE_BUG = __nested_webpack_require_42762__("aed9");
var definePropertyModule = __nested_webpack_require_42762__("9bf2");
var anObject = __nested_webpack_require_42762__("825a");
var toIndexedObject = __nested_webpack_require_42762__("fc6a");
var objectKeys = __nested_webpack_require_42762__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "38cf":
/***/ (function(module, exports, __nested_webpack_require_43682__) {

var $ = __nested_webpack_require_43682__("23e7");
var repeat = __nested_webpack_require_43682__("1148");

// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __nested_webpack_require_43998__) {

var uncurryThis = __nested_webpack_require_43998__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __nested_webpack_require_44178__) {

var global = __nested_webpack_require_44178__("da84");
var isCallable = __nested_webpack_require_44178__("1626");

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __nested_webpack_require_44604__) {

"use strict";

var charAt = __nested_webpack_require_44604__("6547").charAt;
var toString = __nested_webpack_require_44604__("577e");
var InternalStateModule = __nested_webpack_require_44604__("69f3");
var defineIterator = __nested_webpack_require_44604__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "408a":
/***/ (function(module, exports, __nested_webpack_require_45821__) {

var uncurryThis = __nested_webpack_require_45821__("e330");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),

/***/ "40d5":
/***/ (function(module, exports, __nested_webpack_require_46084__) {

var fails = __nested_webpack_require_46084__("d039");

module.exports = !fails(function () {
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __nested_webpack_require_46435__) {

var global = __nested_webpack_require_46435__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __nested_webpack_require_46587__) {

var global = __nested_webpack_require_46587__("da84");
var uncurryThis = __nested_webpack_require_46587__("e330");
var fails = __nested_webpack_require_46587__("d039");
var classof = __nested_webpack_require_46587__("c6b6");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __nested_webpack_require_47297__) {

var wellKnownSymbol = __nested_webpack_require_47297__("b622");
var create = __nested_webpack_require_47297__("7c73");
var definePropertyModule = __nested_webpack_require_47297__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __nested_webpack_require_48004__) {

var isObject = __nested_webpack_require_48004__("861d");
var classof = __nested_webpack_require_48004__("c6b6");
var wellKnownSymbol = __nested_webpack_require_48004__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __nested_webpack_require_48496__) {

var anObject = __nested_webpack_require_48496__("825a");
var aConstructor = __nested_webpack_require_48496__("5087");
var wellKnownSymbol = __nested_webpack_require_48496__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __nested_webpack_require_49068__) {

var global = __nested_webpack_require_49068__("da84");
var call = __nested_webpack_require_49068__("c65b");
var isCallable = __nested_webpack_require_49068__("1626");
var isObject = __nested_webpack_require_49068__("861d");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __nested_webpack_require_49880__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __nested_webpack_require_49880__("2d00");
var fails = __nested_webpack_require_49880__("d039");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "4a53":
/***/ (function(module, exports, __nested_webpack_require_50657__) {

var map = {
	"./ar": [
		"cfcc",
		0
	],
	"./ar.json": [
		"cfcc",
		0
	],
	"./bg": [
		"1f0e",
		1
	],
	"./bg.json": [
		"1f0e",
		1
	],
	"./bn": [
		"d2d5",
		2
	],
	"./bn.json": [
		"d2d5",
		2
	],
	"./bs": [
		"e06f",
		3
	],
	"./bs.json": [
		"e06f",
		3
	],
	"./ca": [
		"aeaf",
		4
	],
	"./ca.json": [
		"aeaf",
		4
	],
	"./cs": [
		"442f",
		5
	],
	"./cs.json": [
		"442f",
		5
	],
	"./da": [
		"93f6",
		6
	],
	"./da.json": [
		"93f6",
		6
	],
	"./de": [
		"44ff",
		7
	],
	"./de.json": [
		"44ff",
		7
	],
	"./el": [
		"bac9",
		8
	],
	"./el.json": [
		"bac9",
		8
	],
	"./en": [
		"0a96"
	],
	"./en.json": [
		"0a96"
	],
	"./es": [
		"3541",
		9
	],
	"./es.json": [
		"3541",
		9
	],
	"./fa": [
		"e4ca",
		10
	],
	"./fa.json": [
		"e4ca",
		10
	],
	"./fr": [
		"d791",
		11
	],
	"./fr.json": [
		"d791",
		11
	],
	"./he": [
		"5f2c",
		12
	],
	"./he.json": [
		"5f2c",
		12
	],
	"./hr": [
		"2364",
		13
	],
	"./hr.json": [
		"2364",
		13
	],
	"./hu": [
		"0ade",
		14
	],
	"./hu.json": [
		"0ade",
		14
	],
	"./id": [
		"ad69",
		15
	],
	"./id.json": [
		"ad69",
		15
	],
	"./is": [
		"3ada",
		16
	],
	"./is.json": [
		"3ada",
		16
	],
	"./it": [
		"1412",
		17
	],
	"./it.json": [
		"1412",
		17
	],
	"./ja": [
		"e135",
		18
	],
	"./ja.json": [
		"e135",
		18
	],
	"./ka": [
		"2969",
		19
	],
	"./ka.json": [
		"2969",
		19
	],
	"./ko": [
		"03b7",
		20
	],
	"./ko.json": [
		"03b7",
		20
	],
	"./lt": [
		"a2f0",
		21
	],
	"./lt.json": [
		"a2f0",
		21
	],
	"./mn": [
		"956e",
		22
	],
	"./mn.json": [
		"956e",
		22
	],
	"./nl": [
		"9f37",
		23
	],
	"./nl.json": [
		"9f37",
		23
	],
	"./no": [
		"9efb",
		24
	],
	"./no.json": [
		"9efb",
		24
	],
	"./pl": [
		"e44c",
		25
	],
	"./pl.json": [
		"e44c",
		25
	],
	"./pt-br": [
		"dac8",
		26
	],
	"./pt-br.json": [
		"dac8",
		26
	],
	"./ro": [
		"0946",
		27
	],
	"./ro.json": [
		"0946",
		27
	],
	"./ru": [
		"d82c",
		28
	],
	"./ru.json": [
		"d82c",
		28
	],
	"./sk": [
		"1037",
		29
	],
	"./sk.json": [
		"1037",
		29
	],
	"./sl": [
		"c17e",
		30
	],
	"./sl.json": [
		"c17e",
		30
	],
	"./sq": [
		"09b8",
		31
	],
	"./sq.json": [
		"09b8",
		31
	],
	"./sr": [
		"65a6",
		32
	],
	"./sr.json": [
		"65a6",
		32
	],
	"./sv": [
		"1fd1",
		33
	],
	"./sv.json": [
		"1fd1",
		33
	],
	"./tr": [
		"20e4",
		34
	],
	"./tr.json": [
		"20e4",
		34
	],
	"./uk": [
		"7dc6",
		35
	],
	"./uk.json": [
		"7dc6",
		35
	],
	"./vi": [
		"5465",
		36
	],
	"./vi.json": [
		"5465",
		36
	],
	"./zh-cn": [
		"8035",
		37
	],
	"./zh-cn.json": [
		"8035",
		37
	],
	"./zh-hk": [
		"a5dc",
		38
	],
	"./zh-hk.json": [
		"a5dc",
		38
	]
};
function webpackAsyncContext(req) {
	if(!__nested_webpack_require_50657__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__nested_webpack_require_50657__.e)).then(function() {
		return __nested_webpack_require_50657__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "4a53";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __nested_webpack_require_53896__) {

var toIndexedObject = __nested_webpack_require_53896__("fc6a");
var toAbsoluteIndex = __nested_webpack_require_53896__("23cb");
var lengthOfArrayLike = __nested_webpack_require_53896__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4dae":
/***/ (function(module, exports, __nested_webpack_require_55252__) {

var global = __nested_webpack_require_55252__("da84");
var toAbsoluteIndex = __nested_webpack_require_55252__("23cb");
var lengthOfArrayLike = __nested_webpack_require_55252__("07fa");
var createProperty = __nested_webpack_require_55252__("8418");

var Array = global.Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __nested_webpack_require_55924__) {

"use strict";

var $ = __nested_webpack_require_55924__("23e7");
var $filter = __nested_webpack_require_55924__("b727").filter;
var arrayMethodHasSpeciesSupport = __nested_webpack_require_55924__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __nested_webpack_require_56587__) {

"use strict";

var global = __nested_webpack_require_56587__("da84");
var bind = __nested_webpack_require_56587__("0366");
var call = __nested_webpack_require_56587__("c65b");
var toObject = __nested_webpack_require_56587__("7b0b");
var callWithSafeIterationClosing = __nested_webpack_require_56587__("9bdd");
var isArrayIteratorMethod = __nested_webpack_require_56587__("e95a");
var isConstructor = __nested_webpack_require_56587__("68ee");
var lengthOfArrayLike = __nested_webpack_require_56587__("07fa");
var createProperty = __nested_webpack_require_56587__("8418");
var getIterator = __nested_webpack_require_56587__("9a1f");
var getIteratorMethod = __nested_webpack_require_56587__("35a1");

var Array = global.Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "4e82":
/***/ (function(module, exports, __nested_webpack_require_58665__) {

"use strict";

var $ = __nested_webpack_require_58665__("23e7");
var uncurryThis = __nested_webpack_require_58665__("e330");
var aCallable = __nested_webpack_require_58665__("59ed");
var toObject = __nested_webpack_require_58665__("7b0b");
var lengthOfArrayLike = __nested_webpack_require_58665__("07fa");
var toString = __nested_webpack_require_58665__("577e");
var fails = __nested_webpack_require_58665__("d039");
var internalSort = __nested_webpack_require_58665__("addb");
var arrayMethodIsStrict = __nested_webpack_require_58665__("a640");
var FF = __nested_webpack_require_58665__("04d1");
var IE_OR_EDGE = __nested_webpack_require_58665__("d998");
var V8 = __nested_webpack_require_58665__("2d00");
var WEBKIT = __nested_webpack_require_58665__("512c");

var test = [];
var un$Sort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) delete array[index++];

    return array;
  }
});


/***/ }),

/***/ "4fad":
/***/ (function(module, exports, __nested_webpack_require_61763__) {

var fails = __nested_webpack_require_61763__("d039");
var isObject = __nested_webpack_require_61763__("861d");
var classof = __nested_webpack_require_61763__("c6b6");
var ARRAY_BUFFER_NON_EXTENSIBLE = __nested_webpack_require_61763__("d86b");

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ "5087":
/***/ (function(module, exports, __nested_webpack_require_62581__) {

var global = __nested_webpack_require_62581__("da84");
var isConstructor = __nested_webpack_require_62581__("68ee");
var tryToString = __nested_webpack_require_62581__("0d51");

var TypeError = global.TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __nested_webpack_require_63042__) {

var toIntegerOrInfinity = __nested_webpack_require_63042__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "512c":
/***/ (function(module, exports, __nested_webpack_require_63436__) {

var userAgent = __nested_webpack_require_63436__("342f");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __nested_webpack_require_63662__) {

"use strict";

var apply = __nested_webpack_require_63662__("2ba4");
var call = __nested_webpack_require_63662__("c65b");
var uncurryThis = __nested_webpack_require_63662__("e330");
var fixRegExpWellKnownSymbolLogic = __nested_webpack_require_63662__("d784");
var fails = __nested_webpack_require_63662__("d039");
var anObject = __nested_webpack_require_63662__("825a");
var isCallable = __nested_webpack_require_63662__("1626");
var toIntegerOrInfinity = __nested_webpack_require_63662__("5926");
var toLength = __nested_webpack_require_63662__("50c4");
var toString = __nested_webpack_require_63662__("577e");
var requireObjectCoercible = __nested_webpack_require_63662__("1d80");
var advanceStringIndex = __nested_webpack_require_63662__("8aa5");
var getMethod = __nested_webpack_require_63662__("dc4a");
var getSubstitution = __nested_webpack_require_63662__("0cb2");
var regExpExec = __nested_webpack_require_63662__("14c3");
var wellKnownSymbol = __nested_webpack_require_63662__("b622");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "5530":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_69088__) {

"use strict";
/* harmony export (binding) */ __nested_webpack_require_69088__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_69088__("b64b");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_69088__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_69088__("a4d3");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_69088__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_69088__("4de4");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_69088__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_69088__("d3b7");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_69088__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_69088__("e439");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_69088__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_69088__("159b");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_69088__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_69088__("dbb4");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__nested_webpack_require_69088__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __nested_webpack_require_69088__("ade3");









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __nested_webpack_require_72795__) {

var IS_PURE = __nested_webpack_require_72795__("c430");
var store = __nested_webpack_require_72795__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '?? 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __nested_webpack_require_73343__) {

var getBuiltIn = __nested_webpack_require_73343__("d066");
var uncurryThis = __nested_webpack_require_73343__("e330");
var getOwnPropertyNamesModule = __nested_webpack_require_73343__("241c");
var getOwnPropertySymbolsModule = __nested_webpack_require_73343__("7418");
var anObject = __nested_webpack_require_73343__("825a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "577e":
/***/ (function(module, exports, __nested_webpack_require_74060__) {

var global = __nested_webpack_require_74060__("da84");
var classof = __nested_webpack_require_74060__("f5df");

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __nested_webpack_require_74714__) {

var uncurryThis = __nested_webpack_require_74714__("e330");
var requireObjectCoercible = __nested_webpack_require_74714__("1d80");
var toString = __nested_webpack_require_74714__("577e");
var whitespaces = __nested_webpack_require_74714__("5899");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __nested_webpack_require_76375__) {

var global = __nested_webpack_require_76375__("da84");
var isCallable = __nested_webpack_require_76375__("1626");
var tryToString = __nested_webpack_require_76375__("0d51");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __nested_webpack_require_76824__) {

var global = __nested_webpack_require_76824__("da84");
var isRegExp = __nested_webpack_require_76824__("44e7");

var TypeError = global.TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __nested_webpack_require_77409__) {

var DESCRIPTORS = __nested_webpack_require_77409__("83ab");
var hasOwn = __nested_webpack_require_77409__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "6062":
/***/ (function(module, exports, __nested_webpack_require_78183__) {

"use strict";

var collection = __nested_webpack_require_78183__("6d61");
var collectionStrong = __nested_webpack_require_78183__("6566");

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "61f2":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_78609__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_78609__("12cd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_78609__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __nested_webpack_require_80250__) {

var uncurryThis = __nested_webpack_require_80250__("e330");
var toIntegerOrInfinity = __nested_webpack_require_80250__("5926");
var toString = __nested_webpack_require_80250__("577e");
var requireObjectCoercible = __nested_webpack_require_80250__("1d80");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "6566":
/***/ (function(module, exports, __nested_webpack_require_81671__) {

"use strict";

var defineProperty = __nested_webpack_require_81671__("9bf2").f;
var create = __nested_webpack_require_81671__("7c73");
var redefineAll = __nested_webpack_require_81671__("e2cc");
var bind = __nested_webpack_require_81671__("0366");
var anInstance = __nested_webpack_require_81671__("19aa");
var iterate = __nested_webpack_require_81671__("2266");
var defineIterator = __nested_webpack_require_81671__("7dd0");
var setSpecies = __nested_webpack_require_81671__("2626");
var DESCRIPTORS = __nested_webpack_require_81671__("83ab");
var fastKey = __nested_webpack_require_81671__("f183").fastKey;
var InternalStateModule = __nested_webpack_require_81671__("69f3");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(Prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __nested_webpack_require_89441__) {

var arraySpeciesConstructor = __nested_webpack_require_89441__("0b42");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "68ee":
/***/ (function(module, exports, __nested_webpack_require_89816__) {

var uncurryThis = __nested_webpack_require_89816__("e330");
var fails = __nested_webpack_require_89816__("d039");
var isCallable = __nested_webpack_require_89816__("1626");
var classof = __nested_webpack_require_89816__("f5df");
var getBuiltIn = __nested_webpack_require_89816__("d066");
var inspectSource = __nested_webpack_require_89816__("8925");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __nested_webpack_require_91649__) {

var NATIVE_WEAK_MAP = __nested_webpack_require_91649__("7f9a");
var global = __nested_webpack_require_91649__("da84");
var uncurryThis = __nested_webpack_require_91649__("e330");
var isObject = __nested_webpack_require_91649__("861d");
var createNonEnumerableProperty = __nested_webpack_require_91649__("9112");
var hasOwn = __nested_webpack_require_91649__("1a2d");
var shared = __nested_webpack_require_91649__("c6cd");
var sharedKey = __nested_webpack_require_91649__("f772");
var hiddenKeys = __nested_webpack_require_91649__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6d61":
/***/ (function(module, exports, __nested_webpack_require_93669__) {

"use strict";

var $ = __nested_webpack_require_93669__("23e7");
var global = __nested_webpack_require_93669__("da84");
var uncurryThis = __nested_webpack_require_93669__("e330");
var isForced = __nested_webpack_require_93669__("94ca");
var redefine = __nested_webpack_require_93669__("6eeb");
var InternalMetadataModule = __nested_webpack_require_93669__("f183");
var iterate = __nested_webpack_require_93669__("2266");
var anInstance = __nested_webpack_require_93669__("19aa");
var isCallable = __nested_webpack_require_93669__("1626");
var isObject = __nested_webpack_require_93669__("861d");
var fails = __nested_webpack_require_93669__("d039");
var checkCorrectnessOfIteration = __nested_webpack_require_93669__("1c7e");
var setToStringTag = __nested_webpack_require_93669__("d44e");
var inheritIfRequired = __nested_webpack_require_93669__("7156");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __nested_webpack_require_98087__) {

var global = __nested_webpack_require_98087__("da84");
var isCallable = __nested_webpack_require_98087__("1626");
var hasOwn = __nested_webpack_require_98087__("1a2d");
var createNonEnumerableProperty = __nested_webpack_require_98087__("9112");
var setGlobal = __nested_webpack_require_98087__("ce4e");
var inspectSource = __nested_webpack_require_98087__("8925");
var InternalStateModule = __nested_webpack_require_98087__("69f3");
var CONFIGURABLE_FUNCTION_NAME = __nested_webpack_require_98087__("5e77").CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __nested_webpack_require_100046__) {

var isCallable = __nested_webpack_require_100046__("1626");
var isObject = __nested_webpack_require_100046__("861d");
var setPrototypeOf = __nested_webpack_require_100046__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7371":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __nested_webpack_require_101131__) {

var path = __nested_webpack_require_101131__("428f");
var hasOwn = __nested_webpack_require_101131__("1a2d");
var wrappedWellKnownSymbolModule = __nested_webpack_require_101131__("e538");
var defineProperty = __nested_webpack_require_101131__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "785a":
/***/ (function(module, exports, __nested_webpack_require_101857__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __nested_webpack_require_101857__("cc12");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __nested_webpack_require_102344__) {

var global = __nested_webpack_require_102344__("da84");
var requireObjectCoercible = __nested_webpack_require_102344__("1d80");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __nested_webpack_require_102725__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __nested_webpack_require_102725__("825a");
var definePropertiesModule = __nested_webpack_require_102725__("37e8");
var enumBugKeys = __nested_webpack_require_102725__("7839");
var hiddenKeys = __nested_webpack_require_102725__("d012");
var html = __nested_webpack_require_102725__("1be4");
var documentCreateElement = __nested_webpack_require_102725__("cc12");
var sharedKey = __nested_webpack_require_102725__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __nested_webpack_require_105751__) {

"use strict";

var $ = __nested_webpack_require_105751__("23e7");
var $find = __nested_webpack_require_105751__("b727").find;
var addToUnscopables = __nested_webpack_require_105751__("44d2");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __nested_webpack_require_106511__) {

"use strict";

var $ = __nested_webpack_require_106511__("23e7");
var call = __nested_webpack_require_106511__("c65b");
var IS_PURE = __nested_webpack_require_106511__("c430");
var FunctionName = __nested_webpack_require_106511__("5e77");
var isCallable = __nested_webpack_require_106511__("1626");
var createIteratorConstructor = __nested_webpack_require_106511__("9ed3");
var getPrototypeOf = __nested_webpack_require_106511__("e163");
var setPrototypeOf = __nested_webpack_require_106511__("d2bb");
var setToStringTag = __nested_webpack_require_106511__("d44e");
var createNonEnumerableProperty = __nested_webpack_require_106511__("9112");
var redefine = __nested_webpack_require_106511__("6eeb");
var wellKnownSymbol = __nested_webpack_require_106511__("b622");
var Iterators = __nested_webpack_require_106511__("3f8c");
var IteratorsCore = __nested_webpack_require_106511__("ae93");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __nested_webpack_require_110892__) {

var global = __nested_webpack_require_110892__("da84");
var isCallable = __nested_webpack_require_110892__("1626");
var inspectSource = __nested_webpack_require_110892__("8925");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "81d5":
/***/ (function(module, exports, __nested_webpack_require_111229__) {

"use strict";

var toObject = __nested_webpack_require_111229__("7b0b");
var toAbsoluteIndex = __nested_webpack_require_111229__("23cb");
var lengthOfArrayLike = __nested_webpack_require_111229__("07fa");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __nested_webpack_require_112037__) {

var global = __nested_webpack_require_112037__("da84");
var isObject = __nested_webpack_require_112037__("861d");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __nested_webpack_require_112453__) {

var fails = __nested_webpack_require_112453__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __nested_webpack_require_112843__) {

"use strict";

var toPropertyKey = __nested_webpack_require_112843__("a04b");
var definePropertyModule = __nested_webpack_require_112843__("9bf2");
var createPropertyDescriptor = __nested_webpack_require_112843__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "857a":
/***/ (function(module, exports, __nested_webpack_require_113346__) {

var uncurryThis = __nested_webpack_require_113346__("e330");
var requireObjectCoercible = __nested_webpack_require_113346__("1d80");
var toString = __nested_webpack_require_113346__("577e");

var quot = /"/g;
var replace = uncurryThis(''.replace);

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + replace(toString(value), quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports, __nested_webpack_require_113997__) {

var isCallable = __nested_webpack_require_113997__("1626");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __nested_webpack_require_117477__) {

var uncurryThis = __nested_webpack_require_117477__("e330");
var isCallable = __nested_webpack_require_117477__("1626");
var store = __nested_webpack_require_117477__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __nested_webpack_require_117991__) {

"use strict";

var charAt = __nested_webpack_require_117991__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __nested_webpack_require_118438__) {

var uncurryThis = __nested_webpack_require_118438__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __nested_webpack_require_118782__) {

var DESCRIPTORS = __nested_webpack_require_118782__("83ab");
var definePropertyModule = __nested_webpack_require_118782__("9bf2");
var createPropertyDescriptor = __nested_webpack_require_118782__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __nested_webpack_require_119254__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __nested_webpack_require_119254__("c65b");
var uncurryThis = __nested_webpack_require_119254__("e330");
var toString = __nested_webpack_require_119254__("577e");
var regexpFlags = __nested_webpack_require_119254__("ad6d");
var stickyHelpers = __nested_webpack_require_119254__("9f7f");
var shared = __nested_webpack_require_119254__("5692");
var create = __nested_webpack_require_119254__("7c73");
var getInternalState = __nested_webpack_require_119254__("69f3").get;
var UNSUPPORTED_DOT_ALL = __nested_webpack_require_119254__("fce3");
var UNSUPPORTED_NCG = __nested_webpack_require_119254__("107c");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __nested_webpack_require_123246__) {

var fails = __nested_webpack_require_123246__("d039");
var isCallable = __nested_webpack_require_123246__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "95dd":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_123950__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_123950__("7371");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_123950__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cell_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9735":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_125600__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_125600__("2170");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_125600__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekdays_headings_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __nested_webpack_require_127277__) {

"use strict";

var $ = __nested_webpack_require_127277__("23e7");
var global = __nested_webpack_require_127277__("da84");
var fails = __nested_webpack_require_127277__("d039");
var isArray = __nested_webpack_require_127277__("e8b5");
var isObject = __nested_webpack_require_127277__("861d");
var toObject = __nested_webpack_require_127277__("7b0b");
var lengthOfArrayLike = __nested_webpack_require_127277__("07fa");
var createProperty = __nested_webpack_require_127277__("8418");
var arraySpeciesCreate = __nested_webpack_require_127277__("65f0");
var arrayMethodHasSpeciesSupport = __nested_webpack_require_127277__("1dde");
var wellKnownSymbol = __nested_webpack_require_127277__("b622");
var V8_VERSION = __nested_webpack_require_127277__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError = global.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9a1f":
/***/ (function(module, exports, __nested_webpack_require_129762__) {

var global = __nested_webpack_require_129762__("da84");
var call = __nested_webpack_require_129762__("c65b");
var aCallable = __nested_webpack_require_129762__("59ed");
var anObject = __nested_webpack_require_129762__("825a");
var tryToString = __nested_webpack_require_129762__("0d51");
var getIteratorMethod = __nested_webpack_require_129762__("35a1");

var TypeError = global.TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __nested_webpack_require_130446__) {

var anObject = __nested_webpack_require_130446__("825a");
var iteratorClose = __nested_webpack_require_130446__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __nested_webpack_require_130892__) {

var global = __nested_webpack_require_130892__("da84");
var DESCRIPTORS = __nested_webpack_require_130892__("83ab");
var IE8_DOM_DEFINE = __nested_webpack_require_130892__("0cfb");
var V8_PROTOTYPE_DEFINE_BUG = __nested_webpack_require_130892__("aed9");
var anObject = __nested_webpack_require_130892__("825a");
var toPropertyKey = __nested_webpack_require_130892__("a04b");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __nested_webpack_require_132843__) {

"use strict";

var IteratorPrototype = __nested_webpack_require_132843__("ae93").IteratorPrototype;
var create = __nested_webpack_require_132843__("7c73");
var createPropertyDescriptor = __nested_webpack_require_132843__("5c6c");
var setToStringTag = __nested_webpack_require_132843__("d44e");
var Iterators = __nested_webpack_require_132843__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __nested_webpack_require_133643__) {

var fails = __nested_webpack_require_133643__("d039");
var global = __nested_webpack_require_133643__("da84");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __nested_webpack_require_134554__) {

var toPrimitive = __nested_webpack_require_134554__("c04e");
var isSymbol = __nested_webpack_require_134554__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "a15b":
/***/ (function(module, exports, __nested_webpack_require_134942__) {

"use strict";

var $ = __nested_webpack_require_134942__("23e7");
var uncurryThis = __nested_webpack_require_134942__("e330");
var IndexedObject = __nested_webpack_require_134942__("44ad");
var toIndexedObject = __nested_webpack_require_134942__("fc6a");
var arrayMethodIsStrict = __nested_webpack_require_134942__("a640");

var un$Join = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __nested_webpack_require_135708__) {

"use strict";

var $ = __nested_webpack_require_135708__("23e7");
var global = __nested_webpack_require_135708__("da84");
var toAbsoluteIndex = __nested_webpack_require_135708__("23cb");
var toIntegerOrInfinity = __nested_webpack_require_135708__("5926");
var lengthOfArrayLike = __nested_webpack_require_135708__("07fa");
var toObject = __nested_webpack_require_135708__("7b0b");
var arraySpeciesCreate = __nested_webpack_require_135708__("65f0");
var createProperty = __nested_webpack_require_135708__("8418");
var arrayMethodHasSpeciesSupport = __nested_webpack_require_135708__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var TypeError = global.TypeError;
var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __nested_webpack_require_138445__) {

"use strict";

var $ = __nested_webpack_require_138445__("23e7");
var global = __nested_webpack_require_138445__("da84");
var getBuiltIn = __nested_webpack_require_138445__("d066");
var apply = __nested_webpack_require_138445__("2ba4");
var call = __nested_webpack_require_138445__("c65b");
var uncurryThis = __nested_webpack_require_138445__("e330");
var IS_PURE = __nested_webpack_require_138445__("c430");
var DESCRIPTORS = __nested_webpack_require_138445__("83ab");
var NATIVE_SYMBOL = __nested_webpack_require_138445__("4930");
var fails = __nested_webpack_require_138445__("d039");
var hasOwn = __nested_webpack_require_138445__("1a2d");
var isArray = __nested_webpack_require_138445__("e8b5");
var isCallable = __nested_webpack_require_138445__("1626");
var isObject = __nested_webpack_require_138445__("861d");
var isPrototypeOf = __nested_webpack_require_138445__("3a9b");
var isSymbol = __nested_webpack_require_138445__("d9b5");
var anObject = __nested_webpack_require_138445__("825a");
var toObject = __nested_webpack_require_138445__("7b0b");
var toIndexedObject = __nested_webpack_require_138445__("fc6a");
var toPropertyKey = __nested_webpack_require_138445__("a04b");
var $toString = __nested_webpack_require_138445__("577e");
var createPropertyDescriptor = __nested_webpack_require_138445__("5c6c");
var nativeObjectCreate = __nested_webpack_require_138445__("7c73");
var objectKeys = __nested_webpack_require_138445__("df75");
var getOwnPropertyNamesModule = __nested_webpack_require_138445__("241c");
var getOwnPropertyNamesExternal = __nested_webpack_require_138445__("057f");
var getOwnPropertySymbolsModule = __nested_webpack_require_138445__("7418");
var getOwnPropertyDescriptorModule = __nested_webpack_require_138445__("06cf");
var definePropertyModule = __nested_webpack_require_138445__("9bf2");
var definePropertiesModule = __nested_webpack_require_138445__("37e8");
var propertyIsEnumerableModule = __nested_webpack_require_138445__("d1e7");
var arraySlice = __nested_webpack_require_138445__("f36a");
var redefine = __nested_webpack_require_138445__("6eeb");
var shared = __nested_webpack_require_138445__("5692");
var sharedKey = __nested_webpack_require_138445__("f772");
var hiddenKeys = __nested_webpack_require_138445__("d012");
var uid = __nested_webpack_require_138445__("90e3");
var wellKnownSymbol = __nested_webpack_require_138445__("b622");
var wrappedWellKnownSymbolModule = __nested_webpack_require_138445__("e538");
var defineWellKnownSymbol = __nested_webpack_require_138445__("746f");
var setToStringTag = __nested_webpack_require_138445__("d44e");
var InternalStateModule = __nested_webpack_require_138445__("69f3");
var $forEach = __nested_webpack_require_138445__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  redefine(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = $toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (isCallable($replacer)) value = call($replacer, this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return apply($stringify, null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!SymbolPrototype[TO_PRIMITIVE]) {
  var valueOf = SymbolPrototype.valueOf;
  // eslint-disable-next-line no-unused-vars -- required for .length
  redefine(SymbolPrototype, TO_PRIMITIVE, function (hint) {
    // TODO: improve hint logic
    return call(valueOf, this);
  });
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __nested_webpack_require_151623__) {

var $ = __nested_webpack_require_151623__("23e7");
var from = __nested_webpack_require_151623__("4df4");
var checkCorrectnessOfIteration = __nested_webpack_require_151623__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __nested_webpack_require_152174__) {

"use strict";

var fails = __nested_webpack_require_152174__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __nested_webpack_require_152586__) {

"use strict";

var DESCRIPTORS = __nested_webpack_require_152586__("83ab");
var global = __nested_webpack_require_152586__("da84");
var uncurryThis = __nested_webpack_require_152586__("e330");
var isForced = __nested_webpack_require_152586__("94ca");
var redefine = __nested_webpack_require_152586__("6eeb");
var hasOwn = __nested_webpack_require_152586__("1a2d");
var inheritIfRequired = __nested_webpack_require_152586__("7156");
var isPrototypeOf = __nested_webpack_require_152586__("3a9b");
var isSymbol = __nested_webpack_require_152586__("d9b5");
var toPrimitive = __nested_webpack_require_152586__("c04e");
var fails = __nested_webpack_require_152586__("d039");
var getOwnPropertyNames = __nested_webpack_require_152586__("241c").f;
var getOwnPropertyDescriptor = __nested_webpack_require_152586__("06cf").f;
var defineProperty = __nested_webpack_require_152586__("9bf2").f;
var thisNumberValue = __nested_webpack_require_152586__("408a");
var trim = __nested_webpack_require_152586__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;
var TypeError = global.TypeError;
var arraySlice = uncurryThis(''.slice);
var charCodeAt = uncurryThis(''.charCodeAt);

// `ToNumeric` abstract operation
// https://tc39.es/ecma262/#sec-tonumeric
var toNumeric = function (value) {
  var primValue = toPrimitive(value, 'number');
  return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
};

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (isSymbol(it)) throw TypeError('Cannot convert a Symbol value to a number');
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = charCodeAt(it, 0);
    if (first === 43 || first === 45) {
      third = charCodeAt(it, 2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (charCodeAt(it, 1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = arraySlice(it, 2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = charCodeAt(digits, index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
    var dummy = this;
    // check on 1..constructor(foo) case
    return isPrototypeOf(NumberPrototype, dummy) && fails(function () { thisNumberValue(dummy); })
      ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (hasOwn(NativeNumber, key = keys[j]) && !hasOwn(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __nested_webpack_require_156448__) {

var wellKnownSymbol = __nested_webpack_require_156448__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ab36":
/***/ (function(module, exports, __nested_webpack_require_156884__) {

var isObject = __nested_webpack_require_156884__("861d");
var createNonEnumerableProperty = __nested_webpack_require_156884__("9112");

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __nested_webpack_require_157353__) {

"use strict";

var $ = __nested_webpack_require_157353__("23e7");
var exec = __nested_webpack_require_157353__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __nested_webpack_require_157701__) {

"use strict";

var anObject = __nested_webpack_require_157701__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "addb":
/***/ (function(module, exports, __nested_webpack_require_158265__) {

var arraySlice = __nested_webpack_require_158265__("4dae");

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

module.exports = mergeSort;


/***/ }),

/***/ "ade3":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_159535__) {

"use strict";
/* harmony export (binding) */ __nested_webpack_require_159535__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __nested_webpack_require_160007__) {

"use strict";

var fails = __nested_webpack_require_160007__("d039");
var isCallable = __nested_webpack_require_160007__("1626");
var create = __nested_webpack_require_160007__("7c73");
var getPrototypeOf = __nested_webpack_require_160007__("e163");
var redefine = __nested_webpack_require_160007__("6eeb");
var wellKnownSymbol = __nested_webpack_require_160007__("b622");
var IS_PURE = __nested_webpack_require_160007__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "aed9":
/***/ (function(module, exports, __nested_webpack_require_161764__) {

var DESCRIPTORS = __nested_webpack_require_161764__("83ab");
var fails = __nested_webpack_require_161764__("d039");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "af03":
/***/ (function(module, exports, __nested_webpack_require_162282__) {

var fails = __nested_webpack_require_162282__("d039");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __nested_webpack_require_162686__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_162686__("00ee");
var classof = __nested_webpack_require_162686__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __nested_webpack_require_163120__) {

var DESCRIPTORS = __nested_webpack_require_163120__("83ab");
var FUNCTION_NAME_EXISTS = __nested_webpack_require_163120__("5e77").EXISTS;
var uncurryThis = __nested_webpack_require_163120__("e330");
var defineProperty = __nested_webpack_require_163120__("9bf2").f;

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b2b6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b622":
/***/ (function(module, exports, __nested_webpack_require_164158__) {

var global = __nested_webpack_require_164158__("da84");
var shared = __nested_webpack_require_164158__("5692");
var hasOwn = __nested_webpack_require_164158__("1a2d");
var uid = __nested_webpack_require_164158__("90e3");
var NATIVE_SYMBOL = __nested_webpack_require_164158__("4930");
var USE_SYMBOL_AS_UID = __nested_webpack_require_164158__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __nested_webpack_require_165252__) {

var $ = __nested_webpack_require_165252__("23e7");
var toObject = __nested_webpack_require_165252__("7b0b");
var nativeKeys = __nested_webpack_require_165252__("df75");
var fails = __nested_webpack_require_165252__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __nested_webpack_require_165779__) {

var bind = __nested_webpack_require_165779__("0366");
var uncurryThis = __nested_webpack_require_165779__("e330");
var IndexedObject = __nested_webpack_require_165779__("44ad");
var toObject = __nested_webpack_require_165779__("7b0b");
var lengthOfArrayLike = __nested_webpack_require_165779__("07fa");
var arraySpeciesCreate = __nested_webpack_require_165779__("65f0");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "b980":
/***/ (function(module, exports, __nested_webpack_require_168685__) {

var fails = __nested_webpack_require_168685__("d039");
var createPropertyDescriptor = __nested_webpack_require_168685__("5c6c");

module.exports = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __nested_webpack_require_169146__) {

var fails = __nested_webpack_require_169146__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "bee2":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_169498__) {

"use strict";
/* harmony export (binding) */ __nested_webpack_require_169498__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __nested_webpack_require_170355__) {

var global = __nested_webpack_require_170355__("da84");
var call = __nested_webpack_require_170355__("c65b");
var isObject = __nested_webpack_require_170355__("861d");
var isSymbol = __nested_webpack_require_170355__("d9b5");
var getMethod = __nested_webpack_require_170355__("dc4a");
var ordinaryToPrimitive = __nested_webpack_require_170355__("485a");
var wellKnownSymbol = __nested_webpack_require_170355__("b622");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __nested_webpack_require_171513__) {

var NATIVE_BIND = __nested_webpack_require_171513__("40d5");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __nested_webpack_require_171786__) {

var uncurryThis = __nested_webpack_require_171786__("e330");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __nested_webpack_require_172080__) {

var global = __nested_webpack_require_172080__("da84");
var setGlobal = __nested_webpack_require_172080__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __nested_webpack_require_172365__) {

"use strict";

var $ = __nested_webpack_require_172365__("23e7");
var $findIndex = __nested_webpack_require_172365__("b727").findIndex;
var addToUnscopables = __nested_webpack_require_172365__("44d2");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c770":
/***/ (function(module, exports, __nested_webpack_require_173189__) {

var uncurryThis = __nested_webpack_require_173189__("e330");

var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String(Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string') {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c96a":
/***/ (function(module, exports, __nested_webpack_require_174302__) {

"use strict";

var $ = __nested_webpack_require_174302__("23e7");
var createHTML = __nested_webpack_require_174302__("857a");
var forcedStringHTMLMethod = __nested_webpack_require_174302__("af03");

// `String.prototype.small` method
// https://tc39.es/ecma262/#sec-string.prototype.small
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('small') }, {
  small: function small() {
    return createHTML(this, 'small', '', '');
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __nested_webpack_require_174795__) {

var uncurryThis = __nested_webpack_require_174795__("e330");
var hasOwn = __nested_webpack_require_174795__("1a2d");
var toIndexedObject = __nested_webpack_require_174795__("fc6a");
var indexOf = __nested_webpack_require_174795__("4d64").indexOf;
var hiddenKeys = __nested_webpack_require_174795__("d012");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __nested_webpack_require_175523__) {

"use strict";

var $ = __nested_webpack_require_175523__("23e7");
var $includes = __nested_webpack_require_175523__("4d64").includes;
var addToUnscopables = __nested_webpack_require_175523__("44d2");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cb29":
/***/ (function(module, exports, __nested_webpack_require_176138__) {

var $ = __nested_webpack_require_176138__("23e7");
var fill = __nested_webpack_require_176138__("81d5");
var addToUnscopables = __nested_webpack_require_176138__("44d2");

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __nested_webpack_require_176582__) {

var global = __nested_webpack_require_176582__("da84");
var isObject = __nested_webpack_require_176582__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __nested_webpack_require_176997__) {

var global = __nested_webpack_require_176997__("da84");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __nested_webpack_require_177690__) {

var global = __nested_webpack_require_177690__("da84");
var isCallable = __nested_webpack_require_177690__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __nested_webpack_require_178848__) {

var defineWellKnownSymbol = __nested_webpack_require_178848__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __nested_webpack_require_179112__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __nested_webpack_require_179112__("e330");
var anObject = __nested_webpack_require_179112__("825a");
var aPossiblePrototype = __nested_webpack_require_179112__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __nested_webpack_require_180225__) {

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_180225__("00ee");
var redefine = __nested_webpack_require_180225__("6eeb");
var toString = __nested_webpack_require_180225__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __nested_webpack_require_180653__) {

var defineProperty = __nested_webpack_require_180653__("9bf2").f;
var hasOwn = __nested_webpack_require_180653__("1a2d");
var wellKnownSymbol = __nested_webpack_require_180653__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d4ec":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_181186__) {

"use strict";
/* harmony export (binding) */ __nested_webpack_require_181186__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_181186__("d9e2");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_181186__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "d784":
/***/ (function(module, exports, __nested_webpack_require_181883__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__nested_webpack_require_181883__("ac1f");
var uncurryThis = __nested_webpack_require_181883__("e330");
var redefine = __nested_webpack_require_181883__("6eeb");
var regexpExec = __nested_webpack_require_181883__("9263");
var fails = __nested_webpack_require_181883__("d039");
var wellKnownSymbol = __nested_webpack_require_181883__("b622");
var createNonEnumerableProperty = __nested_webpack_require_181883__("9112");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __nested_webpack_require_184638__) {

"use strict";

var $ = __nested_webpack_require_184638__("23e7");
var $map = __nested_webpack_require_184638__("b727").map;
var arrayMethodHasSpeciesSupport = __nested_webpack_require_184638__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d86b":
/***/ (function(module, exports, __nested_webpack_require_185277__) {

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __nested_webpack_require_185277__("d039");

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ "d998":
/***/ (function(module, exports, __nested_webpack_require_185799__) {

var UA = __nested_webpack_require_185799__("342f");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __nested_webpack_require_185964__) {

var global = __nested_webpack_require_185964__("da84");
var getBuiltIn = __nested_webpack_require_185964__("d066");
var isCallable = __nested_webpack_require_185964__("1626");
var isPrototypeOf = __nested_webpack_require_185964__("3a9b");
var USE_SYMBOL_AS_UID = __nested_webpack_require_185964__("fdbf");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "d9e2":
/***/ (function(module, exports, __nested_webpack_require_186538__) {

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __nested_webpack_require_186538__("23e7");
var global = __nested_webpack_require_186538__("da84");
var apply = __nested_webpack_require_186538__("2ba4");
var wrapErrorConstructorWithCause = __nested_webpack_require_186538__("e5cb");

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = global[WEB_ASSEMBLY];

var FORCED = Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, forced: FORCED }, O);
  }
};

// https://github.com/tc39/proposal-error-cause
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __nested_webpack_require_189046__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_189046__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __nested_webpack_require_189836__) {

var $ = __nested_webpack_require_189836__("23e7");
var DESCRIPTORS = __nested_webpack_require_189836__("83ab");
var ownKeys = __nested_webpack_require_189836__("56ef");
var toIndexedObject = __nested_webpack_require_189836__("fc6a");
var getOwnPropertyDescriptorModule = __nested_webpack_require_189836__("06cf");
var createProperty = __nested_webpack_require_189836__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "dc34":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_190880__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_190880__("b2b6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_190880__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __nested_webpack_require_192524__) {

var aCallable = __nested_webpack_require_192524__("59ed");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __nested_webpack_require_192840__) {

var global = __nested_webpack_require_192840__("da84");
var DOMIterables = __nested_webpack_require_192840__("fdbc");
var DOMTokenListPrototype = __nested_webpack_require_192840__("785a");
var ArrayIteratorMethods = __nested_webpack_require_192840__("e260");
var createNonEnumerableProperty = __nested_webpack_require_192840__("9112");
var wellKnownSymbol = __nested_webpack_require_192840__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __nested_webpack_require_194603__) {

var internalObjectKeys = __nested_webpack_require_194603__("ca84");
var enumBugKeys = __nested_webpack_require_194603__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __nested_webpack_require_195010__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __nested_webpack_require_195010__("23e7");
var DESCRIPTORS = __nested_webpack_require_195010__("83ab");
var global = __nested_webpack_require_195010__("da84");
var uncurryThis = __nested_webpack_require_195010__("e330");
var hasOwn = __nested_webpack_require_195010__("1a2d");
var isCallable = __nested_webpack_require_195010__("1626");
var isPrototypeOf = __nested_webpack_require_195010__("3a9b");
var toString = __nested_webpack_require_195010__("577e");
var defineProperty = __nested_webpack_require_195010__("9bf2").f;
var copyConstructorProperties = __nested_webpack_require_195010__("e893");

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var symbolToString = uncurryThis(SymbolPrototype.toString);
  var symbolValueOf = uncurryThis(SymbolPrototype.valueOf);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineProperty(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = symbolValueOf(this);
      var string = symbolToString(symbol);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __nested_webpack_require_197485__) {

var global = __nested_webpack_require_197485__("da84");
var hasOwn = __nested_webpack_require_197485__("1a2d");
var isCallable = __nested_webpack_require_197485__("1626");
var toObject = __nested_webpack_require_197485__("7b0b");
var sharedKey = __nested_webpack_require_197485__("f772");
var CORRECT_PROTOTYPE_GETTER = __nested_webpack_require_197485__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __nested_webpack_require_198417__) {

var fails = __nested_webpack_require_198417__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __nested_webpack_require_198789__) {

"use strict";

var toIndexedObject = __nested_webpack_require_198789__("fc6a");
var addToUnscopables = __nested_webpack_require_198789__("44d2");
var Iterators = __nested_webpack_require_198789__("3f8c");
var InternalStateModule = __nested_webpack_require_198789__("69f3");
var defineProperty = __nested_webpack_require_198789__("9bf2").f;
var defineIterator = __nested_webpack_require_198789__("7dd0");
var IS_PURE = __nested_webpack_require_198789__("c430");
var DESCRIPTORS = __nested_webpack_require_198789__("83ab");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __nested_webpack_require_201298__) {

var redefine = __nested_webpack_require_201298__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e330":
/***/ (function(module, exports, __nested_webpack_require_201563__) {

var NATIVE_BIND = __nested_webpack_require_201563__("40d5");

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "e391":
/***/ (function(module, exports, __nested_webpack_require_202040__) {

var toString = __nested_webpack_require_202040__("577e");

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __nested_webpack_require_202314__) {

var $ = __nested_webpack_require_202314__("23e7");
var fails = __nested_webpack_require_202314__("d039");
var toIndexedObject = __nested_webpack_require_202314__("fc6a");
var nativeGetOwnPropertyDescriptor = __nested_webpack_require_202314__("06cf").f;
var DESCRIPTORS = __nested_webpack_require_202314__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __nested_webpack_require_203111__) {

var wellKnownSymbol = __nested_webpack_require_203111__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e5cb":
/***/ (function(module, exports, __nested_webpack_require_203276__) {

"use strict";

var getBuiltIn = __nested_webpack_require_203276__("d066");
var hasOwn = __nested_webpack_require_203276__("1a2d");
var createNonEnumerableProperty = __nested_webpack_require_203276__("9112");
var isPrototypeOf = __nested_webpack_require_203276__("3a9b");
var setPrototypeOf = __nested_webpack_require_203276__("d2bb");
var copyConstructorProperties = __nested_webpack_require_203276__("e893");
var inheritIfRequired = __nested_webpack_require_203276__("7156");
var normalizeStringArgument = __nested_webpack_require_203276__("e391");
var installErrorCause = __nested_webpack_require_203276__("ab36");
var clearErrorStack = __nested_webpack_require_203276__("c770");
var ERROR_STACK_INSTALLABLE = __nested_webpack_require_203276__("b980");
var IS_PURE = __nested_webpack_require_203276__("c430");

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(result, 'stack', clearErrorStack(result.stack, 2));
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __nested_webpack_require_205886__) {

var hasOwn = __nested_webpack_require_205886__("1a2d");
var ownKeys = __nested_webpack_require_205886__("56ef");
var getOwnPropertyDescriptorModule = __nested_webpack_require_205886__("06cf");
var definePropertyModule = __nested_webpack_require_205886__("9bf2");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __nested_webpack_require_206607__) {

var classof = __nested_webpack_require_206607__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __nested_webpack_require_206968__) {

var wellKnownSymbol = __nested_webpack_require_206968__("b622");
var Iterators = __nested_webpack_require_206968__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __nested_webpack_require_207393__) {

var $ = __nested_webpack_require_207393__("23e7");
var uncurryThis = __nested_webpack_require_207393__("e330");
var hiddenKeys = __nested_webpack_require_207393__("d012");
var isObject = __nested_webpack_require_207393__("861d");
var hasOwn = __nested_webpack_require_207393__("1a2d");
var defineProperty = __nested_webpack_require_207393__("9bf2").f;
var getOwnPropertyNamesModule = __nested_webpack_require_207393__("241c");
var getOwnPropertyNamesExternalModule = __nested_webpack_require_207393__("057f");
var isExtensible = __nested_webpack_require_207393__("4fad");
var uid = __nested_webpack_require_207393__("90e3");
var FREEZING = __nested_webpack_require_207393__("bb2f");

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f36a":
/***/ (function(module, exports, __nested_webpack_require_210149__) {

var uncurryThis = __nested_webpack_require_210149__("e330");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __nested_webpack_require_210321__) {

var global = __nested_webpack_require_210321__("da84");
var TO_STRING_TAG_SUPPORT = __nested_webpack_require_210321__("00ee");
var isCallable = __nested_webpack_require_210321__("1626");
var classofRaw = __nested_webpack_require_210321__("c6b6");
var wellKnownSymbol = __nested_webpack_require_210321__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __nested_webpack_require_211482__) {

var shared = __nested_webpack_require_211482__("5692");
var uid = __nested_webpack_require_211482__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_211771__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_211771__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __nested_webpack_require_211771__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __nested_webpack_require_211771__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0136e9a6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-cal/index.vue?vue&type=template&id=418b1a10&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"vuecal",staticClass:"vuecal__flex vuecal",class:_vm.cssClasses,attrs:{"column":"","lang":_vm.locale}},[_c('vuecal-header',{attrs:{"options":_vm.$props,"edit-events":_vm.editEvents,"view-props":{ views: _vm.views, weekDaysInHeader: _vm.weekDaysInHeader },"week-days":_vm.weekDays,"has-splits":_vm.hasSplits,"day-splits":_vm.daySplits,"switch-to-narrower-view":_vm.switchToNarrowerView},scopedSlots:_vm._u([{key:"arrow-prev",fn:function(){return [_vm._t("arrow-prev",function(){return [_vm._v("??"),_c('i',{staticClass:"angle"}),_vm._v("??")]})]},proxy:true},{key:"arrow-next",fn:function(){return [_vm._t("arrow-next",function(){return [_vm._v("??"),_c('i',{staticClass:"angle"}),_vm._v("??")]})]},proxy:true},{key:"today-button",fn:function(){return [_vm._t("today-button",function(){return [_c('span',{staticClass:"default"},[_vm._v(_vm._s(_vm.texts.today))])]})]},proxy:true},{key:"title",fn:function(){return [_vm._t("title",function(){return [_vm._v(_vm._s(_vm.viewTitle))]},{"title":_vm.viewTitle,"view":_vm.view})]},proxy:true},{key:"weekday-heading",fn:function(ref){
var heading = ref.heading;
var view = ref.view;
return [_vm._t("weekday-heading",null,{"heading":heading,"view":view})]}},{key:"split-label",fn:function(ref){
var split = ref.split;
return [_vm._t("split-label",null,{"split":split,"view":_vm.view.id})]}}],null,true)}),(!_vm.hideBody)?_c('div',{staticClass:"vuecal__flex vuecal__body",attrs:{"grow":""}},[_c('transition',{attrs:{"name":("slide-fade--" + _vm.transitionDirection),"appear":_vm.transitions}},[_c('div',{key:_vm.transitions ? _vm.view.id : false,staticClass:"vuecal__flex",staticStyle:{"min-width":"100%"},attrs:{"column":""}},[(_vm.showAllDayEvents && _vm.hasTimeColumn && (!_vm.cellOrSplitMinWidth || (_vm.isDayView && !_vm.minSplitWidth)))?_c('all-day-bar',_vm._b({scopedSlots:_vm._u([{key:"event",fn:function(ref){
var event = ref.event;
var view = ref.view;
return [_vm._t("event",function(){return [(_vm.editEvents.title && event.titleEditable)?_c('div',{staticClass:"vuecal__event-title vuecal__event-title--edit",attrs:{"contenteditable":""},domProps:{"innerHTML":_vm._s(event.title)},on:{"blur":function($event){return _vm.onEventTitleBlur($event, event)}}}):(event.title)?_c('div',{staticClass:"vuecal__event-title",domProps:{"innerHTML":_vm._s(event.title)}}):_vm._e(),(event.content && !_vm.hasShortEvents && !_vm.isShortMonthView)?_c('div',{staticClass:"vuecal__event-content",domProps:{"innerHTML":_vm._s(event.content)}}):_vm._e()]},{"view":view,"event":event})]}}],null,true)},'all-day-bar',_vm.allDayBar,false)):_vm._e(),_c('div',{staticClass:"vuecal__bg",class:{ vuecal__flex: !_vm.hasTimeColumn },attrs:{"column":""}},[_c('div',{staticClass:"vuecal__flex",attrs:{"row":"","grow":""}},[(_vm.hasTimeColumn)?_c('div',{staticClass:"vuecal__time-column"},[(_vm.showAllDayEvents && _vm.cellOrSplitMinWidth && !(_vm.isDayView && !_vm.minSplitWidth))?_c('div',{staticClass:"vuecal__all-day-text",style:({ height: _vm.allDayBar.height })},[_c('span',[_vm._v(_vm._s(_vm.texts.allDay))])]):_vm._e(),_vm._l((_vm.timeCells),function(cell,i){return _c('div',{key:i,staticClass:"vuecal__time-cell",style:(("height: " + _vm.timeCellHeight + "px"))},[_vm._t("time-cell",function(){return [_c('span',{staticClass:"vuecal__time-cell-line"}),_c('span',{staticClass:"vuecal__time-cell-label"},[_vm._v(_vm._s(cell.label))])]},{"hours":cell.hours,"minutes":cell.minutes})],2)})],2):_vm._e(),(_vm.showWeekNumbers && _vm.isMonthView)?_c('div',{staticClass:"vuecal__flex vuecal__week-numbers",attrs:{"column":""}},_vm._l((6),function(i){return _c('div',{key:i,staticClass:"vuecal__flex vuecal__week-number-cell",attrs:{"grow":""}},[_vm._t("week-number-cell",function(){return [_vm._v(_vm._s(_vm.getWeekNumber(i - 1)))]},{"week":_vm.getWeekNumber(i - 1)})],2)}),0):_vm._e(),_c('div',{staticClass:"vuecal__flex vuecal__cells",class:((_vm.view.id) + "-view"),attrs:{"grow":"","wrap":!_vm.cellOrSplitMinWidth || !_vm.isWeekView,"column":!!_vm.cellOrSplitMinWidth}},[(_vm.cellOrSplitMinWidth && _vm.isWeekView)?_c('weekdays-headings',{style:(_vm.cellOrSplitMinWidth ? ("min-width: " + _vm.cellOrSplitMinWidth + "px") : ''),attrs:{"transition-direction":_vm.transitionDirection,"week-days":_vm.weekDays,"switch-to-narrower-view":_vm.switchToNarrowerView},scopedSlots:_vm._u([{key:"weekday-heading",fn:function(ref){
var heading = ref.heading;
var view = ref.view;
return [_vm._t("weekday-heading",null,{"heading":heading,"view":view})]}},{key:"split-label",fn:function(ref){
var split = ref.split;
return [_vm._t("split-label",null,{"split":split,"view":_vm.view.id})]}}],null,true)}):(_vm.hasSplits && _vm.stickySplitLabels && _vm.minSplitWidth)?_c('div',{staticClass:"vuecal__flex vuecal__split-days-headers",style:(_vm.cellOrSplitMinWidth ? ("min-width: " + _vm.cellOrSplitMinWidth + "px") : '')},_vm._l((_vm.daySplits),function(split,i){return _c('div',{key:i,staticClass:"day-split-header",class:split.class || false},[_vm._t("split-label",function(){return [_vm._v(_vm._s(split.label))]},{"split":split,"view":_vm.view.id})],2)}),0):_vm._e(),(_vm.showAllDayEvents && _vm.hasTimeColumn && ((_vm.isWeekView && _vm.cellOrSplitMinWidth) || (_vm.isDayView && _vm.hasSplits && _vm.minSplitWidth)))?_c('all-day-bar',_vm._b({scopedSlots:_vm._u([{key:"event",fn:function(ref){
var event = ref.event;
var view = ref.view;
return [_vm._t("event",function(){return [(_vm.editEvents.title && event.titleEditable)?_c('div',{staticClass:"vuecal__event-title vuecal__event-title--edit",attrs:{"contenteditable":""},domProps:{"innerHTML":_vm._s(event.title)},on:{"blur":function($event){return _vm.onEventTitleBlur($event, event)}}}):(event.title)?_c('div',{staticClass:"vuecal__event-title",domProps:{"innerHTML":_vm._s(event.title)}}):_vm._e(),(event.content && !_vm.hasShortEvents && !_vm.isShortMonthView)?_c('div',{staticClass:"vuecal__event-content",domProps:{"innerHTML":_vm._s(event.content)}}):_vm._e()]},{"view":view,"event":event})]}}],null,true)},'all-day-bar',_vm.allDayBar,false)):_vm._e(),_c('div',{ref:"cells",staticClass:"vuecal__flex",style:(_vm.cellOrSplitMinWidth ? ("min-width: " + _vm.cellOrSplitMinWidth + "px") : ''),attrs:{"grow":"","wrap":!_vm.cellOrSplitMinWidth || !_vm.isWeekView}},_vm._l((_vm.viewCells),function(cell,i){return _c('vuecal-cell',{key:i,attrs:{"options":_vm.$props,"edit-events":_vm.editEvents,"data":cell,"cell-width":_vm.hideWeekdays.length && (_vm.isWeekView || _vm.isMonthView) && _vm.cellWidth,"min-timestamp":_vm.minTimestamp,"max-timestamp":_vm.maxTimestamp,"cell-splits":_vm.hasSplits && _vm.daySplits || []},scopedSlots:_vm._u([{key:"cell-content",fn:function(ref){
var events = ref.events;
var split = ref.split;
var selectCell = ref.selectCell;
return [_vm._t("cell-content",function(){return [(split && !_vm.stickySplitLabels)?_c('div',{staticClass:"split-label",domProps:{"innerHTML":_vm._s(split.label)}}):_vm._e(),(cell.content)?_c('div',{staticClass:"vuecal__cell-date",domProps:{"innerHTML":_vm._s(cell.content)}}):_vm._e(),(((_vm.isMonthView && !_vm.eventsOnMonthView) || (_vm.isYearsOrYearView && _vm.eventsCountOnYearView)) && events.length)?_c('div',{staticClass:"vuecal__cell-events-count"},[_vm._t("events-count",function(){return [_vm._v(_vm._s(events.length))]},{"view":_vm.view,"events":events})],2):_vm._e(),(!_vm.cellOrSplitHasEvents(events, split) && _vm.isWeekOrDayView)?_c('div',{staticClass:"vuecal__no-event"},[_vm._t("no-event",function(){return [_vm._v(_vm._s(_vm.texts.noEvent))]})],2):_vm._e()]},{"cell":cell,"view":_vm.view,"goNarrower":selectCell,"events":events})]}},{key:"event",fn:function(ref){
var event = ref.event;
var view = ref.view;
return [_vm._t("event",function(){return [(_vm.editEvents.title && event.titleEditable)?_c('div',{staticClass:"vuecal__event-title vuecal__event-title--edit",attrs:{"contenteditable":""},domProps:{"innerHTML":_vm._s(event.title)},on:{"blur":function($event){return _vm.onEventTitleBlur($event, event)}}}):(event.title)?_c('div',{staticClass:"vuecal__event-title",domProps:{"innerHTML":_vm._s(event.title)}}):_vm._e(),(_vm.time && !event.allDay && !(_vm.isMonthView && (event.allDay || _vm.showAllDayEvents === 'short')) && !_vm.isShortMonthView)?_c('div',{staticClass:"vuecal__event-time"},[_vm._v(_vm._s(_vm.utils.date.formatTime(event.start, _vm.TimeFormat))),(event.endTimeMinutes)?_c('span',[_vm._v("??- "+_vm._s(_vm.utils.date.formatTime(event.end, _vm.TimeFormat, null, true)))]):_vm._e(),(event.daysCount > 1 && (event.segments[cell.formattedDate] || {}).isFirstDay)?_c('small',{staticClass:"days-to-end"},[_vm._v("??+"+_vm._s(event.daysCount - 1)+_vm._s((_vm.texts.day[0] || '').toLowerCase()))]):_vm._e()]):_vm._e(),(event.content && !(_vm.isMonthView && event.allDay && _vm.showAllDayEvents === 'short') && !_vm.isShortMonthView)?_c('div',{staticClass:"vuecal__event-content",domProps:{"innerHTML":_vm._s(event.content)}}):_vm._e()]},{"view":view,"event":event})]}}],null,true)},[_vm._t("default")],2)}),1)],1)])])],1)]),(!_vm.ready)?_c('div',{staticClass:"vuecal__scrollbar-check"},[_c('div')]):_vm._e()],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-cal/index.vue?vue&type=template&id=418b1a10&lang=pug&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __nested_webpack_require_211771__("ade3");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __nested_webpack_require_211771__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __nested_webpack_require_211771__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __nested_webpack_require_211771__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __nested_webpack_require_211771__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __nested_webpack_require_211771__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __nested_webpack_require_211771__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __nested_webpack_require_211771__("a630");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js







function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __nested_webpack_require_211771__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __nested_webpack_require_211771__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __nested_webpack_require_211771__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.test.js
var es_regexp_test = __nested_webpack_require_211771__("00b4");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js








function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __nested_webpack_require_211771__("d9e2");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js






function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __nested_webpack_require_211771__("5530");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __nested_webpack_require_211771__("cb29");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __nested_webpack_require_211771__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __nested_webpack_require_211771__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __nested_webpack_require_211771__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __nested_webpack_require_211771__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __nested_webpack_require_211771__("2532");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __nested_webpack_require_211771__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __nested_webpack_require_211771__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __nested_webpack_require_211771__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __nested_webpack_require_211771__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __nested_webpack_require_211771__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __nested_webpack_require_211771__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.repeat.js
var es_string_repeat = __nested_webpack_require_211771__("38cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __nested_webpack_require_211771__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.small.js
var es_string_small = __nested_webpack_require_211771__("c96a");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __nested_webpack_require_211771__("d4ec");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __nested_webpack_require_211771__("bee2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __nested_webpack_require_211771__("25f0");

// CONCATENATED MODULE: ./src/vue-cal/utils/date.js









/**
 * Date Utils & prototypes.
 *
 * Waiting for VS Code to support JavaScript private fields.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
 * Meantime keep `_` for private.
 */
var now, todayDate, todayF, date_self;
var _dateObject = {};
var _timeObject = {};

var date_DateUtils = /*#__PURE__*/function () {
  function DateUtils(texts) {
    var noPrototypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    Object(classCallCheck["a" /* default */])(this, DateUtils);

    Object(defineProperty["a" /* default */])(this, "texts", {});

    Object(defineProperty["a" /* default */])(this, "dateToMinutes", function (date) {
      return date.getHours() * 60 + date.getMinutes();
    });

    date_self = this; // For use in Date prototypes.

    this._texts = texts; // Add prototypes ASAP - only once.

    if (!noPrototypes && Date && !Date.prototype.addDays) this._initDatePrototypes(); // @todo: This would be nicer, but how to set Date.noPrototypes ASAP only if user wants?
    // if (Date.noPrototypes) delete Date.noPrototypes
    // else this._initDatePrototypes()
  }

  Object(createClass["a" /* default */])(DateUtils, [{
    key: "_initDatePrototypes",
    value: function _initDatePrototypes() {
      /* eslint-disable no-extend-native */
      Date.prototype.addDays = function (days) {
        return date_self.addDays(this, days);
      };

      Date.prototype.subtractDays = function (days) {
        return date_self.subtractDays(this, days);
      };

      Date.prototype.addHours = function (hours) {
        return date_self.addHours(this, hours);
      };

      Date.prototype.subtractHours = function (hours) {
        return date_self.subtractHours(this, hours);
      };

      Date.prototype.addMinutes = function (minutes) {
        return date_self.addMinutes(this, minutes);
      };

      Date.prototype.subtractMinutes = function (minutes) {
        return date_self.subtractMinutes(this, minutes);
      };

      Date.prototype.getWeek = function () {
        return date_self.getWeek(this);
      };

      Date.prototype.isToday = function () {
        return date_self.isToday(this);
      };

      Date.prototype.isLeapYear = function () {
        return date_self.isLeapYear(this);
      };

      Date.prototype.format = function () {
        var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'YYYY-MM-DD';
        return date_self.formatDate(this, format);
      };

      Date.prototype.formatTime = function () {
        var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'HH:mm';
        return date_self.formatTime(this, format);
      };
      /* eslint-enable no-extend-native */

    }
  }, {
    key: "removePrototypes",
    value: function removePrototypes() {
      delete Date.prototype.addDays;
      delete Date.prototype.subtractDays;
      delete Date.prototype.addHours;
      delete Date.prototype.subtractHours;
      delete Date.prototype.addMinutes;
      delete Date.prototype.subtractMinutes;
      delete Date.prototype.getWeek;
      delete Date.prototype.isToday;
      delete Date.prototype.isLeapYear;
      delete Date.prototype.format;
      delete Date.prototype.formatTime;
    }
  }, {
    key: "updateTexts",
    value: function updateTexts(texts) {
      this._texts = texts;
    } // Cache Today's date (to a maximum) for better isToday() performances. Formatted without leading 0.
    // We still need to update Today's date when Today changes without page refresh.

  }, {
    key: "_todayFormatted",
    value: function _todayFormatted() {
      if (todayDate !== new Date().getDate()) {
        now = new Date();
        todayDate = now.getDate();
        todayF = "".concat(now.getFullYear(), "-").concat(now.getMonth(), "-").concat(now.getDate());
      }

      return todayF;
    } // UTILITIES.
    // ====================================================================

  }, {
    key: "addDays",
    value: function addDays(date, days) {
      var d = new Date(date.valueOf());
      d.setDate(d.getDate() + days);
      return d;
    }
  }, {
    key: "subtractDays",
    value: function subtractDays(date, days) {
      var d = new Date(date.valueOf());
      d.setDate(d.getDate() - days);
      return d;
    }
  }, {
    key: "addHours",
    value: function addHours(date, hours) {
      var d = new Date(date.valueOf());
      d.setHours(d.getHours() + hours);
      return d;
    }
  }, {
    key: "subtractHours",
    value: function subtractHours(date, hours) {
      var d = new Date(date.valueOf());
      d.setHours(d.getHours() - hours);
      return d;
    }
  }, {
    key: "addMinutes",
    value: function addMinutes(date, minutes) {
      var d = new Date(date.valueOf());
      d.setMinutes(d.getMinutes() + minutes);
      return d;
    }
  }, {
    key: "subtractMinutes",
    value: function subtractMinutes(date, minutes) {
      var d = new Date(date.valueOf());
      d.setMinutes(d.getMinutes() - minutes);
      return d;
    }
  }, {
    key: "getWeek",
    value: function getWeek(date) {
      var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
      var dayNum = d.getUTCDay() || 7;
      d.setUTCDate(d.getUTCDate() + 4 - dayNum);
      var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
      return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    }
  }, {
    key: "isToday",
    value: function isToday(date) {
      return "".concat(date.getFullYear(), "-").concat(date.getMonth(), "-").concat(date.getDate()) === this._todayFormatted();
    }
  }, {
    key: "isLeapYear",
    value: function isLeapYear(date) {
      var year = date.getFullYear();
      return !(year % 400) || year % 100 && !(year % 4);
    } // Returns today if it's FirstDayOfWeek (Monday or Sunday) or previous FirstDayOfWeek otherwise.

  }, {
    key: "getPreviousFirstDayOfWeek",
    value: function getPreviousFirstDayOfWeek() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var weekStartsOnSunday = arguments.length > 1 ? arguments[1] : undefined;
      var prevFirstDayOfWeek = date && new Date(date.valueOf()) || new Date();
      var dayModifier = weekStartsOnSunday ? 7 : 6;
      prevFirstDayOfWeek.setDate(prevFirstDayOfWeek.getDate() - (prevFirstDayOfWeek.getDay() + dayModifier) % 7);
      return prevFirstDayOfWeek;
    }
    /**
     * Converts a string to a Javascript Date object. If a Date object is passed, return it as is.
     *
     * @param {String | Date} date the string to convert to Date.
     * @return {Date} the equivalent Javascript Date object.
     */

  }, {
    key: "stringToDate",
    value: function stringToDate(date) {
      if (date instanceof Date) return date; // Regexp way is less performant: https://jsperf.com/string-to-date-regexp-vs-new-date
      // const [, y, m, d, h = 0, min = 0] = date.match(/(\d{4})-(\d{2})-(\d{2})(?: (\d{2}):(\d{2}))?/)
      // return new Date(y, parseInt(m) - 1, d, h, min)

      if (date.length === 10) date += ' 00:00';
      return new Date(date.replace(/-/g, '/')); // replace '-' with '/' for Safari.
    }
    /**
     * Simply takes a Date and returns the associated time in minutes (sum of hours + minutes).
     *
     * @param {Date} date the JavaScript Date to extract minutes from.
     * @return {Number} the number of minutes (total of hours plus minutes).
     */

  }, {
    key: "countDays",
    value:
    /**
     * Count the number of days this date range spans onto.
     * E.g. countDays(2019-11-02 18:00, 2019-11-03 02:00) = 2
     *
     * @param {String | Date} start the start date
     * @param {String | Date} end the end date
     * @return {Integer} The number of days this date range involves
     */
    function countDays(start, end) {
      // replace '-' with '/' for Safari.
      if (typeof start === 'string') start = start.replace(/-/g, '/');
      if (typeof end === 'string') end = end.replace(/-/g, '/'); // Set start & end at midnight then compare the delta. Don't modify the original dates.

      start = new Date(start).setHours(0, 0, 0, 0); // Set end at midnight plus 1 sec, so Math.ceil will round it up to a full day.

      end = new Date(end).setHours(0, 0, 1, 0); // Remove the potential daylight saving delta.

      var timezoneDiffMs = (new Date(end).getTimezoneOffset() - new Date(start).getTimezoneOffset()) * 60 * 1000;
      return Math.ceil((end - start - timezoneDiffMs) / (24 * 3600 * 1000));
    }
    /**
     * Take 2 dates and check if within the same time step (useful in overlapping events).
     *
     * @return {Boolean} `true` if their time is included in the same time step,
     *                   this means these 2 dates are very close.
     */

  }, {
    key: "datesInSameTimeStep",
    value: function datesInSameTimeStep(date1, date2, timeStep) {
      return Math.abs(date1.getTime() - date2.getTime()) <= timeStep * 60 * 1000;
    } // ====================================================================
    // FORMATTERS.
    // ====================================================================

    /**
     * Formats a date/time to the given format and returns the formatted string.
     *
     * @param {Date} date a JavaScript Date object to format.
     * @param {String} format the wanted format.
     * @param {Object} texts Optional: the localized texts object to override the vue-cal one in this._texts.
     *                       This becomes useful when showing multiple instances with different languages,
     *                       like in the documentation page.
     * @return {String} the formatted date.
     */

  }, {
    key: "formatDate",
    value: function formatDate(date) {
      var _this = this;

      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
      var texts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (!texts) texts = this._texts;
      if (!format) format = 'YYYY-MM-DD'; // Allows passing null for default format.

      if (format === 'YYYY-MM-DD') return this.formatDateLite(date); // Reinit the date and time object on each function call.

      _dateObject = {};
      _timeObject = {}; // Each keyword is a function to load the dateObject or timeObject on demand: no wasted resource.

      var dateObj = {
        YYYY: function YYYY() {
          return _this._hydrateDateObject(date, texts).YYYY;
        },
        YY: function YY() {
          return _this._hydrateDateObject(date, texts).YY();
        },
        M: function M() {
          return _this._hydrateDateObject(date, texts).M;
        },
        MM: function MM() {
          return _this._hydrateDateObject(date, texts).MM();
        },
        MMM: function MMM() {
          return _this._hydrateDateObject(date, texts).MMM();
        },
        MMMM: function MMMM() {
          return _this._hydrateDateObject(date, texts).MMMM();
        },
        MMMMG: function MMMMG() {
          return _this._hydrateDateObject(date, texts).MMMMG();
        },
        D: function D() {
          return _this._hydrateDateObject(date, texts).D;
        },
        DD: function DD() {
          return _this._hydrateDateObject(date, texts).DD();
        },
        S: function S() {
          return _this._hydrateDateObject(date, texts).S();
        },
        d: function d() {
          return _this._hydrateDateObject(date, texts).d;
        },
        dd: function dd() {
          return _this._hydrateDateObject(date, texts).dd();
        },
        ddd: function ddd() {
          return _this._hydrateDateObject(date, texts).ddd();
        },
        dddd: function dddd() {
          return _this._hydrateDateObject(date, texts).dddd();
        },
        HH: function HH() {
          return _this._hydrateTimeObject(date, texts).HH;
        },
        H: function H() {
          return _this._hydrateTimeObject(date, texts).H;
        },
        hh: function hh() {
          return _this._hydrateTimeObject(date, texts).hh;
        },
        h: function h() {
          return _this._hydrateTimeObject(date, texts).h;
        },
        am: function am() {
          return _this._hydrateTimeObject(date, texts).am;
        },
        AM: function AM() {
          return _this._hydrateTimeObject(date, texts).AM;
        },
        mm: function mm() {
          return _this._hydrateTimeObject(date, texts).mm;
        },
        m: function m() {
          return _this._hydrateTimeObject(date, texts).m;
        }
      };
      return format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function (m, contents) {
        var result = dateObj[contents.replace(/\{|\}/g, '')];
        return result !== undefined ? result() : contents;
      });
    } // More performant function to convert a Date to `YYYY-MM-DD` formatted string only.

  }, {
    key: "formatDateLite",
    value: function formatDateLite(date) {
      var m = date.getMonth() + 1;
      var d = date.getDate();
      return "".concat(date.getFullYear(), "-").concat(m < 10 ? '0' : '').concat(m, "-").concat(d < 10 ? '0' : '').concat(d);
    }
    /**
     * Formats a time (from Date or number of mins) to the given format and returns the formatted string.
     *
     * @param {Date | Number} date a JavaScript Date object or a time in minutes.
     * @param {String} format the wanted format.
     * @param {Object} texts Optional: the localized texts object to override the vue-cal one in this._texts.
     *                       This becomes useful when showing multiple instances with different languages,
     *                       like in the documentation page.
     * @param {Boolean} round if time is 23:59:59, rounds up to 24:00 for formatting only.
     * @return {String} the formatted time.
     */

  }, {
    key: "formatTime",
    value: function formatTime(date) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HH:mm';
      var texts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var round = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var shouldRound = false;

      if (round) {
        var _ref = [date.getHours(), date.getMinutes(), date.getSeconds()],
            h = _ref[0],
            m = _ref[1],
            s = _ref[2];
        if (h + m + s === 23 + 59 + 59) shouldRound = true;
      }

      if (date instanceof Date && format === 'HH:mm') return shouldRound ? '24:00' : this.formatTimeLite(date);
      _timeObject = {}; // Reinit the time object on each function call.

      if (!texts) texts = this._texts;

      var timeObj = this._hydrateTimeObject(date, texts);

      var formatted = format.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g, function (m, contents) {
        var result = timeObj[contents.replace(/\{|\}/g, '')];
        return result !== undefined ? result : contents;
      }); // Round 23:59:59 to 24:00. For 12-hour format there is nothing to replace: as both are 12am.
      // Also don't return `24:00` straight away as the user format may be different.

      return shouldRound ? formatted.replace('23:59', '24:00') : formatted;
    }
    /**
     * Formats a time to 'HH:mm' from a Date and returns the formatted string.
     *
     * @param {Date} date a JavaScript Date object to format.
     * @return {String} the formatted time.
     */

  }, {
    key: "formatTimeLite",
    value: function formatTimeLite(date) {
      var h = date.getHours();
      var m = date.getMinutes();
      return "".concat((h < 10 ? '0' : '') + h, ":").concat((m < 10 ? '0' : '') + m);
    }
  }, {
    key: "_nth",
    value: function _nth(d) {
      if (d > 3 && d < 21) return 'th';

      switch (d % 10) {
        case 1:
          return 'st';

        case 2:
          return 'nd';

        case 3:
          return 'rd';

        default:
          return 'th';
      }
    }
  }, {
    key: "_hydrateDateObject",
    value: function _hydrateDateObject(date, texts) {
      var _this2 = this;

      if (_dateObject.D) return _dateObject;
      var YYYY = date.getFullYear();
      var M = date.getMonth() + 1;
      var D = date.getDate();
      var day = date.getDay(); // Day of the week.

      var dayNumber = (day - 1 + 7) % 7; // Day of the week. 0 to 6 with 6 = Sunday.
      // Some of this props are functions, to only calculate on demand.

      _dateObject = {
        // Year.
        YYYY: YYYY,
        // 2019.
        YY: function YY() {
          return YYYY.toString().substring(2);
        },
        // 19.
        // Month.
        M: M,
        // 1 to 12.
        MM: function MM() {
          return (M < 10 ? '0' : '') + M;
        },
        // 01 to 12.
        MMM: function MMM() {
          return texts.months[M - 1].substring(0, 3);
        },
        // Jan to Dec.
        MMMM: function MMMM() {
          return texts.months[M - 1];
        },
        // January to December.
        MMMMG: function MMMMG() {
          return (texts.monthsGenitive || texts.months)[M - 1];
        },
        // January to December in genitive form (Greek...)
        // Day.
        D: D,
        // 1 to 31.
        DD: function DD() {
          return (D < 10 ? '0' : '') + D;
        },
        // 01 to 31.
        S: function S() {
          return _this2._nth(D);
        },
        // st, nd, rd, th.
        // Day of the week.
        d: dayNumber + 1,
        // 1 to 7 with 7 = Sunday.
        dd: function dd() {
          return texts.weekDays[dayNumber][0];
        },
        // M to S.
        ddd: function ddd() {
          return texts.weekDays[dayNumber].substr(0, 3);
        },
        // Mon to Sun.
        dddd: function dddd() {
          return texts.weekDays[dayNumber];
        } // Monday to Sunday.

      };
      return _dateObject;
    }
  }, {
    key: "_hydrateTimeObject",
    value: function _hydrateTimeObject(date, texts) {
      if (_timeObject.am) return _timeObject;
      var H, m;

      if (date instanceof Date) {
        H = date.getHours();
        m = date.getMinutes();
      } else {
        H = Math.floor(date / 60);
        m = Math.floor(date % 60);
      }

      var h = H % 12 ? H % 12 : 12;
      var am = (texts || {
        am: 'am',
        pm: 'pm'
      })[H === 24 || H < 12 ? 'am' : 'pm'];
      _timeObject = {
        H: H,
        h: h,
        HH: (H < 10 ? '0' : '') + H,
        hh: (h < 10 ? '0' : '') + h,
        am: am,
        AM: am.toUpperCase(),
        m: m,
        mm: (m < 10 ? '0' : '') + m
      };
      return _timeObject;
    } // ====================================================================

  }]);

  return DateUtils;
}();


// CONCATENATED MODULE: ./src/vue-cal/utils/cell.js





/**
 * Cell Utils.
 *
 * Waiting for VS Code to support JavaScript private fields.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
 * Meantime keep `_` for private.
 */
var minutesInADay = 24 * 60;

var cell_CellUtils = /*#__PURE__*/Object(createClass["a" /* default */])(function CellUtils(vuecal) {
  var _this = this;

  Object(classCallCheck["a" /* default */])(this, CellUtils);

  Object(defineProperty["a" /* default */])(this, "_vuecal", null);

  Object(defineProperty["a" /* default */])(this, "selectCell", function () {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var date = arguments.length > 1 ? arguments[1] : undefined;
    var split = arguments.length > 2 ? arguments[2] : undefined;

    // Cell-click event returns a date and time at cursor position.
    _this._vuecal.$emit('cell-click', split ? {
      date: date,
      split: split
    } : date); // Switch to narrower view.


    if (_this._vuecal.clickToNavigate || force) _this._vuecal.switchToNarrowerView(); // Handle double click manually for touch devices.
    else if (_this._vuecal.dblclickToNavigate && 'ontouchstart' in window) {
      _this._vuecal.domEvents.dblTapACell.taps++;
      setTimeout(function () {
        return _this._vuecal.domEvents.dblTapACell.taps = 0;
      }, _this._vuecal.domEvents.dblTapACell.timeout);

      if (_this._vuecal.domEvents.dblTapACell.taps >= 2) {
        _this._vuecal.domEvents.dblTapACell.taps = 0;

        _this._vuecal.switchToNarrowerView();

        _this._vuecal.$emit('cell-dblclick', split ? {
          date: date,
          split: split
        } : date);
      }
    }
  });

  Object(defineProperty["a" /* default */])(this, "keyPressEnterCell", function (date, split) {
    // Cell-key-press-enter event returns a date and time at cursor position.
    _this._vuecal.$emit('cell-keypress-enter', split ? {
      date: date,
      split: split
    } : date); // Switch to narrower view.


    _this._vuecal.switchToNarrowerView();
  });

  Object(defineProperty["a" /* default */])(this, "getPosition", function (e) {
    var _this$_vuecal$$refs$c = _this._vuecal.$refs.cells.getBoundingClientRect(),
        left = _this$_vuecal$$refs$c.left,
        top = _this$_vuecal$$refs$c.top;

    var _ref = 'ontouchstart' in window && e.touches ? e.touches[0] : e,
        clientX = _ref.clientX,
        clientY = _ref.clientY;

    return {
      x: clientX - left,
      y: clientY - top
    };
  });

  Object(defineProperty["a" /* default */])(this, "minutesAtCursor", function (e) {
    var minutes = 0;
    var cursorCoords = {
      x: 0,
      y: 0
    };
    var _this$_vuecal$$props = _this._vuecal.$props,
        timeStep = _this$_vuecal$$props.timeStep,
        timeCellHeight = _this$_vuecal$$props.timeCellHeight,
        timeFrom = _this$_vuecal$$props.timeFrom;
    if (typeof e === 'number') minutes = e;else if (_typeof(e) === 'object') {
      cursorCoords = _this.getPosition(e);
      minutes = Math.round(cursorCoords.y * timeStep / parseInt(timeCellHeight) + timeFrom);
    }
    return {
      minutes: Math.max(Math.min(minutes, minutesInADay), 0),
      cursorCoords: cursorCoords
    };
  });

  this._vuecal = vuecal;
}
/**
 * Select a cell and go to narrower view on double click or single click according to vuecalProps option.
 *
 * @param {Boolean} force Force switching to narrower view.
 * @param {Date} date The selected cell date at the exact time where it was clicked (through cursor coords).
 * @param {Integer} split The selected cell split if any.
 */
);


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __nested_webpack_require_211771__("6062");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __nested_webpack_require_211771__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __nested_webpack_require_211771__("4e82");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __nested_webpack_require_211771__("c740");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __nested_webpack_require_211771__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__nested_webpack_require_211771__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./src/vue-cal/utils/event.js






















/**
 * Events Utils.
 *
 * Waiting for VS Code to support JavaScript private fields.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
 * Meantime keep `_` for private.
 */

var defaultEventDuration = 2; // In hours.

var event_minutesInADay = 24 * 60; // Don't do the maths every time.

var event_ud; // Event overlaps: only for the current view, recreated on view change.

var _cellOverlaps, _comparisonArray; // This is an approximation, it will not work with DLS time.
// const approxDayMilliseconds = minutesInADay * 60 * 1000
// This is an approximate minimum we can get in a year. Purposely stay bellow 365 but close.
// const minYearMilliseconds = 364 * approxDayMilliseconds // Don't do the maths every time.


var event_EventUtils = /*#__PURE__*/function () {
  function EventUtils(vuecal, dateUtils) {
    Object(classCallCheck["a" /* default */])(this, EventUtils);

    Object(defineProperty["a" /* default */])(this, "_vuecal", null);

    Object(defineProperty["a" /* default */])(this, "eventDefaults", {
      _eid: null,
      start: '',
      // Externally given formatted date & time or Date object.
      startTimeMinutes: 0,
      end: '',
      // Externally given formatted date & time or Date object.
      endTimeMinutes: 0,
      title: '',
      content: '',
      background: false,
      allDay: false,
      segments: null,
      repeat: null,
      daysCount: 1,
      deletable: true,
      deleting: false,
      titleEditable: true,
      resizable: true,
      resizing: false,
      draggable: true,
      dragging: false,
      draggingStatic: false,
      // Controls the CSS class of the static clone while dragging.
      focused: false,
      class: ''
    });

    this._vuecal = vuecal;
    event_ud = dateUtils;
  }
  /**
   * Create an event at the given date and time, and allow overriding
   * event attributes through the eventOptions object.
   *
   * @param {Date | String} dateTime The date and time of the new event start.
   * @param {Number} duration the event duration in minutes.
   * @param {Object} eventOptions some options to override the `eventDefaults` - optional.
   */


  Object(createClass["a" /* default */])(EventUtils, [{
    key: "createAnEvent",
    value: function createAnEvent(dateTime, duration, eventOptions) {
      var _this = this;

      if (typeof dateTime === 'string') dateTime = event_ud.stringToDate(dateTime);
      if (!(dateTime instanceof Date)) return false;
      var startTimeMinutes = event_ud.dateToMinutes(dateTime);
      duration = duration * 1 || defaultEventDuration * 60;
      var endTimeMinutes = startTimeMinutes + duration;
      var end = event_ud.addMinutes(new Date(dateTime), duration); // Automatically add the required endTimeMinutes when passing an end.

      if (eventOptions.end) {
        if (typeof eventOptions.end === 'string') eventOptions.end = event_ud.stringToDate(eventOptions.end);
        eventOptions.endTimeMinutes = event_ud.dateToMinutes(eventOptions.end);
      }

      var event = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, this.eventDefaults), {}, {
        _eid: "".concat(this._vuecal._uid, "_").concat(this._vuecal.eventIdIncrement++),
        start: dateTime,
        startTimeMinutes: startTimeMinutes,
        end: end,
        endTimeMinutes: endTimeMinutes,
        segments: null
      }, eventOptions); // If the onEventCreate() function is given as a parameter to vue-cal:
      // 1. give it access to the created event & the deleteAnEvent() function.
      // 2. Prevent creation of the event if this function returns false.


      if (typeof this._vuecal.onEventCreate === 'function') {
        if (!this._vuecal.onEventCreate(event, function () {
          return _this.deleteAnEvent(event);
        })) return;
      } // Check if event is a multiple day event and update days count.


      if (event.startDateF !== event.endDateF) {
        event.daysCount = event_ud.countDays(event.start, event.end);
      } // Add event to the mutableEvents array.


      this._vuecal.mutableEvents.push(event); // Add the new event to the current view.
      // The event may have been edited on the fly to become a multiple-day event,
      // the method addEventsToView makes sure the segments are created.


      this._vuecal.addEventsToView([event]);

      this._vuecal.emitWithEvent('event-create', event);

      this._vuecal.$emit('event-change', {
        event: this._vuecal.cleanupEvent(event),
        originalEvent: null
      });

      return event;
    }
    /**
     * Add an event segment (= day) to a multiple-day event.
     *
     * @param {Object} e the multiple-day event to add segment in.
     */

  }, {
    key: "addEventSegment",
    value: function addEventSegment(e) {
      // If event was previously single-day, event.segments = null,
      // so first create the first segment (first day).
      if (!e.segments) {
        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(e, 'segments', {});
        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(e.segments, event_ud.formatDateLite(e.start), {
          start: e.start,
          startTimeMinutes: e.startTimeMinutes,
          endTimeMinutes: event_minutesInADay,
          isFirstDay: true,
          isLastDay: false
        });
      } // Modify the last segment - which will not stay the last one after this function.


      var previousSegment = e.segments[event_ud.formatDateLite(e.end)]; // previousSegment might not exist when dragging too fast, prevent errors.

      if (previousSegment) {
        previousSegment.isLastDay = false;
        previousSegment.endTimeMinutes = event_minutesInADay;
      } else {// @todo: when moving fast might lose the previousSegment.
        // Trying to update it would then result in an error, but do nothing would create a visual bug.
      } // Create the new last segment.


      var start = event_ud.addDays(e.end, 1);
      var formattedDate = event_ud.formatDateLite(start);
      start.setHours(0, 0, 0, 0);
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(e.segments, formattedDate, {
        start: start,
        startTimeMinutes: 0,
        endTimeMinutes: e.endTimeMinutes,
        isFirstDay: false,
        isLastDay: true
      });
      e.end = event_ud.addMinutes(start, e.endTimeMinutes);
      e.daysCount = Object.keys(e.segments).length;
      return formattedDate;
    }
    /**
     * Remove an event segment (= day) from a multiple-day event.
     *
     * @param {Object} e the multiple-day event to remove segments from.
     */

  }, {
    key: "removeEventSegment",
    value: function removeEventSegment(e) {
      var segmentsCount = Object.keys(e.segments).length;
      if (segmentsCount <= 1) return event_ud.formatDateLite(e.end); // Remove the last segment.

      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.delete(e.segments, event_ud.formatDateLite(e.end));
      segmentsCount--;
      var end = event_ud.subtractDays(e.end, 1);
      var formattedDate = event_ud.formatDateLite(end);
      var previousSegment = e.segments[formattedDate]; // If no more segments, reset the segments attribute to null.

      if (!segmentsCount) e.segments = null; // previousSegment might not exist when dragging too fast, prevent errors.
      else if (previousSegment) {
        // Modify the new last segment.
        previousSegment.isLastDay = true;
        previousSegment.endTimeMinutes = e.endTimeMinutes;
      } else {// @todo: when moving fast might lose the previousSegment.
        // Trying to update it would then result in an error, but do nothing would create a visual bug.
      }
      e.daysCount = segmentsCount || 1;
      e.end = end;
      return formattedDate;
    }
    /**
     * Create 1 segment per day of the given event, but only within the current view.
     * (It won't create segments for all the days in view that are not in the event!)
     *
     * An event segment is a piece of event per day that contains more day-specific data.
     *
     * @param {Object} e the multiple-day event to create segments for.
     * @param {Date} viewStartDate the starting date of the view.
     * @param {Date} viewEndDate the ending date of the view.
     */

  }, {
    key: "createEventSegments",
    value: function createEventSegments(e, viewStartDate, viewEndDate) {
      var viewStartTimestamp = viewStartDate.getTime();
      var viewEndTimestamp = viewEndDate.getTime();
      var eventStart = e.start.getTime();
      var eventEnd = e.end.getTime();
      var repeatedEventStartFound = false;
      var timestamp, end, eventStartAtMidnight; // @todo: I don't think we still need that:
      // Removing 1 sec when ending at 00:00, so that we don't create a segment for nothing on last day.

      if (!e.end.getHours() && !e.end.getMinutes()) eventEnd -= 1000;
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(e, 'segments', {}); // The goal is to create 1 segment per day in the event, but only within the current view.

      if (!e.repeat) {
        // Simple case first.
        timestamp = Math.max(viewStartTimestamp, eventStart);
        end = Math.min(viewEndTimestamp, eventEnd);
      } else {
        // Start at the beginning of the range, and end at soonest between `repeat.until` if any or range end.
        // This range will most likely be too large (e.g. whole week) and we need to narrow it
        // down in the while loop bellow.
        // We must not create unused segments, it would break the render or result in weird behaviors.
        timestamp = viewStartTimestamp;
        end = Math.min(viewEndTimestamp, e.repeat.until ? event_ud.stringToDate(e.repeat.until).getTime() : viewEndTimestamp);
      }

      while (timestamp <= end) {
        var createSegment = false; // Be careful not to simply add 24 hours!
        // In case of DLS, that would cause the event to never end and browser to hang.
        // So use `addDays(1)` instead.

        var nextMidnight = event_ud.addDays(new Date(timestamp), 1).setHours(0, 0, 0, 0);
        var isFirstDay = void 0,
            isLastDay = void 0,
            start = void 0,
            formattedDate = void 0;

        if (e.repeat) {
          var tmpDate = new Date(timestamp);
          var tmpDateFormatted = event_ud.formatDateLite(tmpDate); // If the current day in loop is a known date of the repeated event (in `e.occurrences`),
          // then we found the first day of the event repetition, now update the `eventStart` and
          // the end of the loop at current day + event days count.

          if (repeatedEventStartFound || e.occurrences && e.occurrences[tmpDateFormatted]) {
            if (!repeatedEventStartFound) {
              eventStart = e.occurrences[tmpDateFormatted].start;
              eventStartAtMidnight = new Date(eventStart).setHours(0, 0, 0, 0);
              eventEnd = e.occurrences[tmpDateFormatted].end;
            }

            repeatedEventStartFound = true;
            createSegment = true;
          }

          isFirstDay = timestamp === eventStartAtMidnight;
          isLastDay = tmpDateFormatted === event_ud.formatDateLite(new Date(eventEnd));
          start = new Date(isFirstDay ? eventStart : timestamp);
          formattedDate = event_ud.formatDateLite(start); // We want to find any potential other repetition of event in same range.

          if (isLastDay) repeatedEventStartFound = false;
        } else {
          createSegment = true;
          isFirstDay = timestamp === eventStart;
          isLastDay = end === eventEnd && nextMidnight > end;
          start = isFirstDay ? e.start : new Date(timestamp);
          formattedDate = event_ud.formatDateLite(isFirstDay ? e.start : start);
        }

        if (createSegment) {
          external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(e.segments, formattedDate, {
            start: start,
            startTimeMinutes: isFirstDay ? e.startTimeMinutes : 0,
            endTimeMinutes: isLastDay ? e.endTimeMinutes : event_minutesInADay,
            isFirstDay: isFirstDay,
            isLastDay: isLastDay
          });
        }

        timestamp = nextMidnight;
      }

      return e;
    }
    /**
     * Delete an event.
     *
     * @param {Object} event the calendar event to delete.
     */

  }, {
    key: "deleteAnEvent",
    value: function deleteAnEvent(event) {
      this._vuecal.emitWithEvent('event-delete', event); // Delete the event globally.


      this._vuecal.mutableEvents = this._vuecal.mutableEvents.filter(function (e) {
        return e._eid !== event._eid;
      }); // Delete the event from the current view.
      // checkCellOverlappingEvents() will be re-run automatically from the cell computed events.

      this._vuecal.view.events = this._vuecal.view.events.filter(function (e) {
        return e._eid !== event._eid;
      });
    } // EVENT OVERLAPS.
    // ===================================================================
    // Will recalculate all the overlaps of the current cell OR split.
    // cellEvents will contain only the current split events if in a split.

  }, {
    key: "checkCellOverlappingEvents",
    value: function checkCellOverlappingEvents(cellEvents, options) {
      var _this2 = this;

      _comparisonArray = cellEvents.slice(0);
      _cellOverlaps = {}; // Can't filter background events before calling this function otherwise
      // when an event is changed to background it would not update its previous overlaps.

      cellEvents.forEach(function (e) {
        // For performance, never compare the current event in the next loops.
        // The array is smaller and smaller as we loop.
        _comparisonArray.shift();

        if (!_cellOverlaps[e._eid]) external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(_cellOverlaps, e._eid, {
          overlaps: [],
          start: e.start,
          position: 0
        });
        _cellOverlaps[e._eid].position = 0;

        _comparisonArray.forEach(function (e2) {
          if (!_cellOverlaps[e2._eid]) external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(_cellOverlaps, e2._eid, {
            overlaps: [],
            start: e2.start,
            position: 0
          });

          var eventIsInRange = _this2.eventInRange(e2, e.start, e.end);

          var eventsInSameTimeStep = options.overlapsPerTimeStep ? event_ud.datesInSameTimeStep(e.start, e2.start, options.timeStep) : 1; // Add to the overlaps array if overlapping.

          if (!e.background && !e.allDay && !e2.background && !e2.allDay && eventIsInRange && eventsInSameTimeStep) {
            _cellOverlaps[e._eid].overlaps.push(e2._eid);

            _cellOverlaps[e._eid].overlaps = _toConsumableArray(new Set(_cellOverlaps[e._eid].overlaps)); // Dedupe, most performant way.

            _cellOverlaps[e2._eid].overlaps.push(e._eid);

            _cellOverlaps[e2._eid].overlaps = _toConsumableArray(new Set(_cellOverlaps[e2._eid].overlaps)); // Dedupe, most performant way.

            _cellOverlaps[e2._eid].position++;
          } // Remove from the overlaps array if not overlapping or if 1 of the 2 events is background or all-day long.
          else {
            var pos1, pos2;
            if ((pos1 = (_cellOverlaps[e._eid] || {
              overlaps: []
            }).overlaps.indexOf(e2._eid)) > -1) _cellOverlaps[e._eid].overlaps.splice(pos1, 1);
            if ((pos2 = (_cellOverlaps[e2._eid] || {
              overlaps: []
            }).overlaps.indexOf(e._eid)) > -1) _cellOverlaps[e2._eid].overlaps.splice(pos2, 1);
            _cellOverlaps[e2._eid].position--;
          }
        });
      }); // Overlaps streak is the longest horizontal set of simultaneous events.
      // This is determining the width of events in a streak.
      // e.g. 3 overlapping events in a cell:
      //  ___   ___
      // | 1 | |_2_|  1 overlaps 2 & 3; 2 & 3 don't overlap;
      // |   |  ___   => streak = 2; each width = 50% not 33%.
      // |___| |_3_|

      var longestStreak = 0;

      var _loop = function _loop(id) {
        var item = _cellOverlaps[id]; // Calculate the position of each event in current streak (determines the CSS left property).

        var overlapsRow = item.overlaps.map(function (id2) {
          return {
            id: id2,
            start: _cellOverlaps[id2].start
          };
        });
        overlapsRow.push({
          id: id,
          start: item.start
        });
        overlapsRow.sort(function (a, b) {
          return a.start < b.start ? -1 : a.start > b.start ? 1 : a.id > b.id ? -1 : 1;
        });
        item.position = overlapsRow.findIndex(function (e) {
          return e.id === id;
        });
        longestStreak = Math.max(_this2.getOverlapsStreak(item, _cellOverlaps), longestStreak);
      };

      for (var id in _cellOverlaps) {
        _loop(id);
      }

      return [_cellOverlaps, longestStreak];
    }
    /**
     * Overlaps streak is the longest horizontal set of simultaneous events.
     * This is determining the width of each events in this streak.
     * E.g. 3 overlapping events [1, 2, 3]; 1 overlaps 2 & 3; 2 & 3 don't overlap;
     *      => streak = 2; each width = 50% not 33%.
     *
     * @param {Object} event The current event we are checking among all the events of the current cell.
     * @param {Object} cellOverlaps An indexed array of all the events overlaps for the current cell.
     * @return {Number} The number of simultaneous event for this event.
     */

  }, {
    key: "getOverlapsStreak",
    value: function getOverlapsStreak(event) {
      var cellOverlaps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var streak = event.overlaps.length + 1;
      var removeFromStreak = [];
      event.overlaps.forEach(function (id) {
        if (!removeFromStreak.includes(id)) {
          var overlapsWithoutSelf = event.overlaps.filter(function (id2) {
            return id2 !== id;
          });
          overlapsWithoutSelf.forEach(function (id3) {
            if (!cellOverlaps[id3].overlaps.includes(id)) removeFromStreak.push(id3);
          });
        }
      });
      removeFromStreak = _toConsumableArray(new Set(removeFromStreak)); // Dedupe, most performant way.

      streak -= removeFromStreak.length;
      return streak;
    }
    /**
     * Tells whether an event is in a given date range, even partially.
     *
     * @param {Object} event The event to test.
     * @param {Date} start The start of range date object.
     * @param {Date} end The end of range date object.
     * @return {Boolean} true if in range, even partially.
     */

  }, {
    key: "eventInRange",
    value: function eventInRange(event, start, end) {
      // Check if all-day or timeless event (if date but no time there won't be a `:` in event.start).
      if (event.allDay || !this._vuecal.time) {
        // Get the date and discard the time if any, then check it's within the date range.
        var _startTimestamp = new Date(event.start).setHours(0, 0, 0, 0);

        var _endTimestamp = new Date(event.end).setHours(23, 59, 0, 0);

        return _endTimestamp >= new Date(start).setHours(0, 0, 0, 0) && _startTimestamp <= new Date(end).setHours(0, 0, 0, 0);
      }

      var startTimestamp = event.start.getTime();
      var endTimestamp = event.end.getTime();
      return startTimestamp < end.getTime() && endTimestamp > start.getTime();
    }
  }]);

  return EventUtils;
}();


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0136e9a6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-cal/header.vue?vue&type=template&id=760d6e75&lang=pug&
var headervue_type_template_id_760d6e75_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__header"},[(!_vm.options.hideViewSelector)?_c('div',{staticClass:"vuecal__flex vuecal__menu",attrs:{"role":"tablist","aria-label":"Calendar views navigation"}},_vm._l((_vm.viewProps.views),function(v,id){return (v.enabled)?_c('button',{staticClass:"vuecal__view-btn",class:{ 'vuecal__view-btn--active': _vm.view.id === id, 'vuecal__view-btn--highlighted': _vm.highlightedControl === id },attrs:{"type":"button","aria-label":((v.label) + " view")},on:{"dragenter":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragEnter($event, id, _vm.$data)},"dragleave":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragLeave($event, id, _vm.$data)},"click":function($event){return _vm.switchView(id, null, true)}}},[_vm._v(_vm._s(v.label))]):_vm._e()}),0):_vm._e(),(!_vm.options.hideTitleBar)?_c('div',{staticClass:"vuecal__title-bar"},[_c('button',{staticClass:"vuecal__arrow vuecal__arrow--prev",class:{ 'vuecal__arrow--highlighted': _vm.highlightedControl === 'previous' },attrs:{"type":"button","aria-label":("Previous " + (_vm.view.id))},on:{"click":_vm.previous,"dragenter":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragEnter($event, 'previous', _vm.$data)},"dragleave":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragLeave($event, 'previous', _vm.$data)}}},[_vm._t("arrow-prev")],2),_c('div',{staticClass:"vuecal__flex vuecal__title",attrs:{"grow":""}},[_c(_vm.options.transitions ? 'transition' : 'div',{tag:"component",attrs:{"name":("slide-fade--" + _vm.transitionDirection)}},[_c(_vm.broaderView ? 'button' : 'span',{key:("" + (_vm.view.id) + (_vm.view.startDate.toString())),tag:"component",attrs:{"type":!!_vm.broaderView && 'button',"aria-label":!!_vm.broaderView && ("Go to " + _vm.broaderView + " view")},on:{"click":function($event){!!_vm.broaderView && _vm.switchToBroaderView()}}},[_vm._t("title")],2)],1)],1),(_vm.options.todayButton)?_c('button',{staticClass:"vuecal__today-btn",class:{ 'vuecal__today-btn--highlighted': _vm.highlightedControl === 'today' },attrs:{"type":"button","aria-label":"Today"},on:{"click":_vm.goToToday,"dragenter":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragEnter($event, 'today', _vm.$data)},"dragleave":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragLeave($event, 'today', _vm.$data)}}},[_vm._t("today-button")],2):_vm._e(),_c('button',{staticClass:"vuecal__arrow vuecal__arrow--next",class:{ 'vuecal__arrow--highlighted': _vm.highlightedControl === 'next' },attrs:{"type":"button","aria-label":("Next " + (_vm.view.id))},on:{"click":_vm.next,"dragenter":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragEnter($event, 'next', _vm.$data)},"dragleave":function($event){_vm.editEvents.drag && _vm.dnd && _vm.dnd.viewSelectorDragLeave($event, 'next', _vm.$data)}}},[_vm._t("arrow-next")],2)]):_vm._e(),(_vm.viewProps.weekDaysInHeader)?_c('weekdays-headings',{attrs:{"week-days":_vm.weekDays,"transition-direction":_vm.transitionDirection,"switch-to-narrower-view":_vm.switchToNarrowerView},scopedSlots:_vm._u([{key:"weekday-heading",fn:function(ref){
var heading = ref.heading;
var view = ref.view;
return [_vm._t("weekday-heading",null,{"heading":heading,"view":view})]}},{key:"split-label",fn:function(ref){
var split = ref.split;
return [_vm._t("split-label",null,{"split":split,"view":_vm.view})]}}],null,true)}):_vm._e(),_c('transition',{attrs:{"name":("slide-fade--" + _vm.transitionDirection)}},[(_vm.showDaySplits)?_c('div',{staticClass:"vuecal__flex vuecal__split-days-headers"},_vm._l((_vm.daySplits),function(split,i){return _c('div',{key:i,staticClass:"day-split-header",class:split.class || false},[_vm._t("split-label",function(){return [_vm._v(_vm._s(split.label))]},{"split":split,"view":_vm.view.id})],2)}),0):_vm._e()])],1)}
var headervue_type_template_id_760d6e75_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-cal/header.vue?vue&type=template&id=760d6e75&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0136e9a6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-cal/weekdays-headings.vue?vue&type=template&id=6662afd4&lang=pug&
var weekdays_headingsvue_type_template_id_6662afd4_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__flex vuecal__weekdays-headings"},_vm._l((_vm.headings),function(heading,i){return (!heading.hide)?_c('div',{key:i,staticClass:"vuecal__flex vuecal__heading",class:{ today: heading.today, clickable: _vm.cellHeadingsClickable },style:(_vm.weekdayCellStyles),on:{"click":function($event){_vm.view.id === 'week' && _vm.selectCell(heading.date, $event)},"dblclick":function($event){_vm.view.id === 'week' && _vm.vuecal.dblclickToNavigate && _vm.switchToNarrowerView()}}},[_c('transition',{attrs:{"name":("slide-fade--" + _vm.transitionDirection),"appear":_vm.vuecal.transitions}},[_c('div',{key:_vm.vuecal.transitions ? (i + "-" + (heading.dayOfMonth)) : false,staticClass:"vuecal__flex",attrs:{"column":""}},[_c('div',{staticClass:"vuecal__flex weekday-label",attrs:{"grow":""}},[_vm._t("weekday-heading",function(){return [_c('span',{staticClass:"full"},[_vm._v(_vm._s(heading.full))]),_c('span',{staticClass:"small"},[_vm._v(_vm._s(heading.small))]),_c('span',{staticClass:"xsmall"},[_vm._v(_vm._s(heading.xsmall))]),(heading.dayOfMonth)?_c('span',[_vm._v("??"+_vm._s(heading.dayOfMonth))]):_vm._e()]},{"heading":_vm.cleanupHeading(heading),"view":_vm.view})],2),(_vm.vuecal.hasSplits && _vm.vuecal.stickySplitLabels)?_c('div',{staticClass:"vuecal__flex vuecal__split-days-headers",attrs:{"grow":""}},_vm._l((_vm.vuecal.daySplits),function(split,i){return _c('div',{key:i,staticClass:"day-split-header",class:split.class || false},[_vm._t("split-label",function(){return [_vm._v(_vm._s(split.label))]},{"split":split,"view":_vm.view})],2)}),0):_vm._e()])])],1):_vm._e()}),0)}
var weekdays_headingsvue_type_template_id_6662afd4_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-cal/weekdays-headings.vue?vue&type=template&id=6662afd4&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-cal/weekdays-headings.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var weekdays_headingsvue_type_script_lang_js_ = ({
  inject: ['vuecal', 'utils', 'view'],
  props: {
    transitionDirection: {
      type: String,
      default: 'right'
    },
    weekDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    switchToNarrowerView: {
      type: Function,
      default: function _default() {}
    }
  },
  methods: {
    selectCell: function selectCell(date, DOMEvent) {
      if (date.getTime() !== this.view.selectedDate.getTime()) {
        this.view.selectedDate = date;
      }

      this.utils.cell.selectCell(false, date, DOMEvent);
    },
    cleanupHeading: function cleanupHeading(heading) {
      return Object(objectSpread2["a" /* default */])({
        label: heading.full,
        date: heading.date
      }, heading.today ? {
        today: heading.today
      } : {});
    }
  },
  computed: {
    headings: function headings() {
      var _this = this;

      if (!['month', 'week'].includes(this.view.id)) return [];
      var todayFound = false;
      var headings = this.weekDays.map(function (cell, i) {
        var date = _this.utils.date.addDays(_this.view.startDate, i);

        return Object(objectSpread2["a" /* default */])({
          hide: cell.hide,
          full: cell.label,
          // If defined in i18n file, weekDaysShort overrides default truncation of
          // week days when does not fit on screen or with small/xsmall options.
          small: cell.short || cell.label.substr(0, 3),
          xsmall: cell.short || cell.label.substr(0, 1)
        }, _this.view.id === 'week' ? {
          dayOfMonth: date.getDate(),
          date: date,
          today: !todayFound && _this.utils.date.isToday(date) && !todayFound++
        } : {});
      });
      return headings;
    },
    cellWidth: function cellWidth() {
      return 100 / (7 - this.weekDays.reduce(function (total, day) {
        return total + day.hide;
      }, 0));
    },
    weekdayCellStyles: function weekdayCellStyles() {
      return Object(objectSpread2["a" /* default */])({}, this.vuecal.hideWeekdays.length ? {
        width: "".concat(this.cellWidth, "%")
      } : {});
    },
    cellHeadingsClickable: function cellHeadingsClickable() {
      return this.view.id === 'week' && (this.vuecal.clickToNavigate || this.vuecal.dblclickToNavigate);
    }
  }
});
// CONCATENATED MODULE: ./src/vue-cal/weekdays-headings.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_weekdays_headingsvue_type_script_lang_js_ = (weekdays_headingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-cal/weekdays-headings.vue?vue&type=style&index=0&lang=scss&
var weekdays_headingsvue_type_style_index_0_lang_scss_ = __nested_webpack_require_211771__("9735");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/vue-cal/weekdays-headings.vue






/* normalize component */

var component = normalizeComponent(
  vue_cal_weekdays_headingsvue_type_script_lang_js_,
  weekdays_headingsvue_type_template_id_6662afd4_lang_pug_render,
  weekdays_headingsvue_type_template_id_6662afd4_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var weekdays_headings = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-cal/header.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var headervue_type_script_lang_js_ = ({
  inject: ['vuecal', 'previous', 'next', 'switchView', 'updateSelectedDate', 'modules', 'view'],
  components: {
    WeekdaysHeadings: weekdays_headings
  },
  props: {
    // Vuecal main component options (props).
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    editEvents: {
      type: Object,
      required: true
    },
    hasSplits: {
      type: [Boolean, Number],
      default: false
    },
    daySplits: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    viewProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    weekDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    switchToNarrowerView: {
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      highlightedControl: null
    };
  },
  methods: {
    goToToday: function goToToday() {
      // Last midnight.
      this.updateSelectedDate(new Date(new Date().setHours(0, 0, 0, 0)));
    },
    switchToBroaderView: function switchToBroaderView() {
      this.transitionDirection = 'left';
      if (this.broaderView) this.switchView(this.broaderView);
    }
  },
  computed: {
    transitionDirection: {
      get: function get() {
        return this.vuecal.transitionDirection;
      },
      set: function set(direction) {
        this.vuecal.transitionDirection = direction;
      }
    },
    broaderView: function broaderView() {
      var enabledViews = this.vuecal.enabledViews;
      return enabledViews[enabledViews.indexOf(this.view.id) - 1];
    },
    showDaySplits: function showDaySplits() {
      return this.view.id === 'day' && this.hasSplits && this.options.stickySplitLabels && !this.options.minSplitWidth;
    },
    // Drag & drop module.
    dnd: function dnd() {
      return this.modules.dnd;
    }
  }
});
// CONCATENATED MODULE: ./src/vue-cal/header.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_headervue_type_script_lang_js_ = (headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-cal/header.vue?vue&type=style&index=0&lang=scss&
var headervue_type_style_index_0_lang_scss_ = __nested_webpack_require_211771__("dc34");

// CONCATENATED MODULE: ./src/vue-cal/header.vue






/* normalize component */

var header_component = normalizeComponent(
  vue_cal_headervue_type_script_lang_js_,
  headervue_type_template_id_760d6e75_lang_pug_render,
  headervue_type_template_id_760d6e75_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var header = (header_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0136e9a6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-cal/all-day-bar.vue?vue&type=template&id=20856694&lang=pug&
var all_day_barvue_type_template_id_20856694_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__flex vuecal__all-day",style:(_vm.cellOrSplitMinWidth && { height: _vm.height })},[(!_vm.cellOrSplitMinWidth)?_c('div',{staticClass:"vuecal__all-day-text",staticStyle:{"width":"3em"}},[_c('span',[_vm._v(_vm._s(_vm.label))])]):_vm._e(),_c('div',{staticClass:"vuecal__flex vuecal__cells",class:((_vm.view.id) + "-view"),style:(_vm.cellOrSplitMinWidth ? ("min-width: " + _vm.cellOrSplitMinWidth + "px") : ''),attrs:{"grow":""}},_vm._l((_vm.cells),function(cell,i){return _c('vuecal-cell',{key:i,attrs:{"options":_vm.options,"edit-events":_vm.editEvents,"data":cell,"all-day":true,"cell-width":_vm.options.hideWeekdays.length && (_vm.vuecal.isWeekView || _vm.vuecal.isMonthView) && _vm.vuecal.cellWidth,"min-timestamp":_vm.options.minTimestamp,"max-timestamp":_vm.options.maxTimestamp,"cell-splits":_vm.daySplits},scopedSlots:_vm._u([{key:"event",fn:function(ref){
var event = ref.event;
var view = ref.view;
return [_vm._t("event",null,{"view":view,"event":event})]}}],null,true)})}),1)])}
var all_day_barvue_type_template_id_20856694_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-cal/all-day-bar.vue?vue&type=template&id=20856694&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0136e9a6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-cal/cell.vue?vue&type=template&id=12d3ecf8&lang=pug&
var cellvue_type_template_id_12d3ecf8_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{staticClass:"vuecal__cell",class:_vm.cellClasses,style:(_vm.cellStyles),attrs:{"name":("slide-fade--" + _vm.transitionDirection),"tag":"div","appear":_vm.options.transitions}},[_vm._l(((_vm.splitsCount ? _vm.splits : 1)),function(split,i){return _c('div',{key:_vm.options.transitions ? ((_vm.view.id) + "-" + (_vm.data.content) + "-" + i) : i,staticClass:"vuecal__flex vuecal__cell-content",class:_vm.splitsCount && _vm.splitClasses(split),attrs:{"data-split":_vm.splitsCount ? split.id : false,"column":"","tabindex":"0","aria-label":_vm.data.content},on:{"focus":function($event){return _vm.onCellFocus($event)},"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onCellkeyPressEnter($event)},"touchstart":function($event){!_vm.isDisabled && _vm.onCellTouchStart($event, _vm.splitsCount ? split.id : null)},"mousedown":function($event){!_vm.isDisabled && _vm.onCellMouseDown($event, _vm.splitsCount ? split.id : null)},"click":function($event){!_vm.isDisabled && _vm.onCellClick($event)},"dblclick":function($event){!_vm.isDisabled && _vm.onCellDblClick($event)},"contextmenu":function($event){!_vm.isDisabled && _vm.options.cellContextmenu && _vm.onCellContextMenu($event)},"dragenter":function($event){!_vm.isDisabled && _vm.editEvents.drag && _vm.dnd && _vm.dnd.cellDragEnter($event, _vm.$data, _vm.data.startDate)},"dragover":function($event){!_vm.isDisabled && _vm.editEvents.drag && _vm.dnd && _vm.dnd.cellDragOver($event, _vm.$data, _vm.data.startDate, _vm.splitsCount ? split.id : null)},"dragleave":function($event){!_vm.isDisabled && _vm.editEvents.drag && _vm.dnd && _vm.dnd.cellDragLeave($event, _vm.$data, _vm.data.startDate)},"drop":function($event){!_vm.isDisabled && _vm.editEvents.drag && _vm.dnd && _vm.dnd.cellDragDrop($event, _vm.$data, _vm.data.startDate, _vm.splitsCount ? split.id : null)}}},[(_vm.isWeekOrDayView && !_vm.allDay && _vm.specialHours.length)?_vm._l((_vm.specialHours),function(block,i){return _c('div',{staticClass:"vuecal__special-hours",class:("vuecal__special-hours--day" + (block.day) + " " + (block.class)),style:(("height: " + (block.height) + "px;top: " + (block.top) + "px"))})}):_vm._e(),_vm._t("cell-content",null,{"events":_vm.events,"selectCell":function ($event) { return _vm.selectCell($event, true); },"split":_vm.splitsCount ? split : false}),(_vm.eventsCount && (_vm.isWeekOrDayView || (_vm.view.id === 'month' && _vm.options.eventsOnMonthView)))?_c('div',{staticClass:"vuecal__cell-events"},_vm._l(((_vm.splitsCount ? split.events : _vm.events)),function(event,j){return _c('event',{key:j,attrs:{"cell-formatted-date":_vm.data.formattedDate,"event":event,"all-day":_vm.allDay,"cell-events":_vm.splitsCount ? split.events : _vm.events,"overlaps":((_vm.splitsCount ? split.overlaps[event._eid] : _vm.cellOverlaps[event._eid]) || []).overlaps,"event-position":((_vm.splitsCount ? split.overlaps[event._eid] : _vm.cellOverlaps[event._eid]) || []).position,"overlaps-streak":_vm.splitsCount ? split.overlapsStreak : _vm.cellOverlapsStreak},scopedSlots:_vm._u([{key:"event",fn:function(ref){
var event = ref.event;
var view = ref.view;
return [_vm._t("event",null,{"view":view,"event":event})]}}],null,true)})}),1):_vm._e()],2)}),(_vm.timelineVisible)?_c('div',{key:_vm.options.transitions ? ((_vm.view.id) + "-now-line") : 'now-line',staticClass:"vuecal__now-line",style:(("top: " + _vm.todaysTimePosition + "px")),attrs:{"title":_vm.utils.date.formatTime(_vm.vuecal.now)}}):_vm._e()],2)}
var cellvue_type_template_id_12d3ecf8_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-cal/cell.vue?vue&type=template&id=12d3ecf8&lang=pug&

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js






function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0136e9a6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-cal/event.vue?vue&type=template&id=cdf79fc4&lang=pug&
var eventvue_type_template_id_cdf79fc4_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vuecal__event",class:_vm.eventClasses,style:(_vm.eventStyles),attrs:{"tabindex":"0","draggable":_vm.draggable},on:{"focus":_vm.focusEvent,"keypress":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.stopPropagation();return _vm.onEnterKeypress.apply(null, arguments)},"mouseenter":_vm.onMouseEnter,"mouseleave":_vm.onMouseLeave,"touchstart":function($event){$event.stopPropagation();return _vm.onTouchStart.apply(null, arguments)},"mousedown":function($event){_vm.onMouseDown($event) /* Don't stop mousedown propagation. See in onMouseDown(). */},"mouseup":_vm.onMouseUp,"touchend":_vm.onMouseUp,"touchmove":_vm.onTouchMove,"dblclick":_vm.onDblClick,"dragstart":function($event){_vm.draggable && _vm.onDragStart($event)},"dragend":function($event){_vm.draggable && _vm.onDragEnd()}}},[(_vm.vuecal.editEvents.delete && _vm.event.deletable)?_c('div',{staticClass:"vuecal__event-delete",on:{"click":function($event){$event.stopPropagation();return _vm.deleteEvent.apply(null, arguments)},"touchstart":function($event){$event.stopPropagation();return _vm.touchDeleteEvent.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.vuecal.texts.deleteEvent))]):_vm._e(),_vm._t("event",null,{"event":_vm.event,"view":_vm.view.id}),(_vm.resizable)?_c('div',{staticClass:"vuecal__event-resize-handle",attrs:{"contenteditable":"false"},on:{"mousedown":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onResizeHandleMouseDown.apply(null, arguments)},"touchstart":function($event){$event.stopPropagation();$event.preventDefault();return _vm.onResizeHandleMouseDown.apply(null, arguments)}}}):_vm._e()],2)}
var eventvue_type_template_id_cdf79fc4_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/vue-cal/event.vue?vue&type=template&id=cdf79fc4&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-cal/event.vue?vue&type=script&lang=js&






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var eventvue_type_script_lang_js_ = ({
  inject: ['vuecal', 'utils', 'modules', 'view', 'domEvents', 'editEvents'],
  props: {
    cellFormattedDate: {
      type: String,
      default: ''
    },
    event: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    cellEvents: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    overlaps: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // If multiple simultaneous events, the events are placed from left to right from the
    // one starting first to the last. (See utils/event.js > checkCellOverlappingEvents)
    eventPosition: {
      type: Number,
      default: 0
    },
    overlapsStreak: {
      type: Number,
      default: 0
    },
    allDay: {
      type: Boolean,
      default: false
    } // Is the event displayed in the all-day bar.

  },
  data: function data() {
    return {
      // Event touch detection with 30px threshold.
      touch: {
        dragThreshold: 30,
        // px.
        startX: 0,
        startY: 0,
        // Detect if the event touch start + touch end was a drag or a tap.
        // If it was a drag, don't call the event-click handler.
        dragged: false
      }
    };
  },
  methods: {
    /**
     * On event mousedown.
     * Do not prevent propagation to trigger cell mousedown which highlights the cell if not highlighted.
     */
    onMouseDown: function onMouseDown(e) {
      var _this = this;

      var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      var _this$domEvents = this.domEvents,
          clickHoldAnEvent = _this$domEvents.clickHoldAnEvent,
          focusAnEvent = _this$domEvents.focusAnEvent,
          resizeAnEvent = _this$domEvents.resizeAnEvent,
          dragAnEvent = _this$domEvents.dragAnEvent; // If the delete button is already out and event is on focus then delete event.
      // Return true so the event-click function (if any) is not called.

      if (focusAnEvent._eid === this.event._eid && clickHoldAnEvent._eid === this.event._eid) {
        return true;
      } // Focus the clicked event.


      this.focusEvent();
      clickHoldAnEvent._eid = null; // Reinit click hold on each click.
      // Show event delete button.

      if (this.vuecal.editEvents.delete && this.event.deletable) {
        clickHoldAnEvent.timeoutId = setTimeout(function () {
          if (!resizeAnEvent._eid && !dragAnEvent._eid) {
            clickHoldAnEvent._eid = _this.event._eid;
            _this.event.deleting = true;
          }
        }, clickHoldAnEvent.timeout);
      }
    },

    /**
     * The mouseup handler is global (whole document) and initialized in index.vue on mounted.
     * It handles the mouseup on cell, events, and everything.
     * All mouseup on event, should be put there to avoid conflicts with other cases.
     * This function is also called on touchend on the event.
     */
    onMouseUp: function onMouseUp(e) {
      // Don't allow mouseup to be fired on different event than mousedown for the onEventClick function.
      if (this.domEvents.focusAnEvent._eid === this.event._eid && !this.touch.dragged) {
        // This is used in the global mouseup handler.
        this.domEvents.focusAnEvent.mousedUp = true;
      }

      this.touch.dragged = false; // After the touchend happens, reset the dragged flag.
    },
    onMouseEnter: function onMouseEnter(e) {
      e.preventDefault();
      this.vuecal.emitWithEvent('event-mouse-enter', this.event);
    },
    onMouseLeave: function onMouseLeave(e) {
      e.preventDefault();
      this.vuecal.emitWithEvent('event-mouse-leave', this.event);
    },
    // Detect if user taps on an event or drags it. If dragging, don't fire the event-click handler (if any).
    onTouchMove: function onTouchMove(e) {
      // Skip the maths if there is no event click handler.
      if (typeof this.vuecal.onEventClick !== 'function') return;
      var _e$touches$ = e.touches[0],
          clientX = _e$touches$.clientX,
          clientY = _e$touches$.clientY;
      var _this$touch = this.touch,
          startX = _this$touch.startX,
          startY = _this$touch.startY,
          dragThreshold = _this$touch.dragThreshold;

      if (Math.abs(clientX - startX) > dragThreshold || Math.abs(clientY - startY) > dragThreshold) {
        this.touch.dragged = true;
      }
    },
    onTouchStart: function onTouchStart(e) {
      this.touch.startX = e.touches[0].clientX;
      this.touch.startY = e.touches[0].clientY;
      this.onMouseDown(e, true);
    },
    onEnterKeypress: function onEnterKeypress(e) {
      if (typeof this.vuecal.onEventClick === 'function') return this.vuecal.onEventClick(this.event, e);
    },
    onDblClick: function onDblClick(e) {
      if (typeof this.vuecal.onEventDblclick === 'function') return this.vuecal.onEventDblclick(this.event, e);
    },
    onDragStart: function onDragStart(e) {
      this.dnd && this.dnd.eventDragStart(e, this.event);
    },
    onDragEnd: function onDragEnd() {
      this.dnd && this.dnd.eventDragEnd(this.event);
    },
    onResizeHandleMouseDown: function onResizeHandleMouseDown() {
      this.focusEvent();
      this.domEvents.dragAnEvent._eid = null;
      this.domEvents.resizeAnEvent = Object.assign(this.domEvents.resizeAnEvent, {
        _eid: this.event._eid,
        start: (this.segment || this.event).start,
        split: this.event.split || null,
        segment: !!this.segment && this.utils.date.formatDateLite(this.segment.start),
        originalEnd: new Date((this.segment || this.event).end),
        originalEndTimeMinutes: this.event.endTimeMinutes
      });
      this.event.resizing = true;
    },
    deleteEvent: function deleteEvent() {
      var touch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      this.utils.event.deleteAnEvent(this.event);
    },
    touchDeleteEvent: function touchDeleteEvent(event) {
      this.deleteEvent(true);
    },
    cancelDeleteEvent: function cancelDeleteEvent() {
      this.event.deleting = false;
    },
    focusEvent: function focusEvent() {
      var focusAnEvent = this.domEvents.focusAnEvent;
      var focusedEvent = focusAnEvent._eid; // If event is already focus cancel refocusing.

      if (focusedEvent === this.event._eid) return; // Unfocus previous event if any.
      else if (focusedEvent) {
        var event = this.view.events.find(function (e) {
          return e._eid === focusedEvent;
        });
        if (event) event.focused = false;
      } // Cancel delete on previous event if any.

      this.vuecal.cancelDelete();
      this.vuecal.emitWithEvent('event-focus', this.event);
      focusAnEvent._eid = this.event._eid;
      this.event.focused = true;
    }
  },
  computed: {
    eventDimensions: function eventDimensions() {
      var _ref = this.segment || this.event,
          startTimeMinutes = _ref.startTimeMinutes,
          endTimeMinutes = _ref.endTimeMinutes; // Top of event.


      var minutesFromTop = startTimeMinutes - this.vuecal.timeFrom;
      var top = Math.max(Math.round(minutesFromTop * this.vuecal.timeCellHeight / this.vuecal.timeStep), 0); // Bottom of event.

      minutesFromTop = Math.min(endTimeMinutes, this.vuecal.timeTo) - this.vuecal.timeFrom;
      var bottom = Math.round(minutesFromTop * this.vuecal.timeCellHeight / this.vuecal.timeStep);
      var height = Math.max(bottom - top, 5); // Min height is 5px.

      return {
        top: top,
        height: height
      };
    },
    eventStyles: function eventStyles() {
      if (this.event.allDay || !this.vuecal.time || !this.event.endTimeMinutes || this.view.id === 'month' || this.allDay) return {};
      var width = 100 / Math.min(this.overlaps.length + 1, this.overlapsStreak);
      var left = 100 / (this.overlaps.length + 1) * this.eventPosition;

      if (this.vuecal.minEventWidth && width < this.vuecal.minEventWidth) {
        width = this.vuecal.minEventWidth;
        left = (100 - this.vuecal.minEventWidth) / this.overlaps.length * this.eventPosition;
      }

      var _this$eventDimensions = this.eventDimensions,
          top = _this$eventDimensions.top,
          height = _this$eventDimensions.height;
      return {
        top: "".concat(top, "px"),
        height: "".concat(height, "px"),
        width: "".concat(width, "%"),
        left: this.event.left && "".concat(this.event.left, "px") || "".concat(left, "%")
      };
    },
    // Don't rely on global variables otherwise whenever it would change all the events would be redrawn.
    eventClasses: function eventClasses() {
      var _ref3;

      var _ref2 = this.segment || {},
          isFirstDay = _ref2.isFirstDay,
          isLastDay = _ref2.isLastDay;

      return _ref3 = {}, Object(defineProperty["a" /* default */])(_ref3, this.event.class, !!this.event.class), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__event--focus', this.event.focused), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__event--resizing', this.event.resizing), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__event--background', this.event.background), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__event--deletable', this.event.deleting), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__event--all-day', this.event.allDay), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__event--dragging', !this.event.draggingStatic && this.event.dragging), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__event--static', this.event.dragging && this.event.draggingStatic), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__event--multiple-days', !!this.segment), Object(defineProperty["a" /* default */])(_ref3, 'event-start', this.segment && isFirstDay && !isLastDay), Object(defineProperty["a" /* default */])(_ref3, 'event-middle', this.segment && !isFirstDay && !isLastDay), Object(defineProperty["a" /* default */])(_ref3, 'event-end', this.segment && isLastDay && !isFirstDay), _ref3;
    },
    // When multiple-day events, a segment is a portion of event spanning on 1 day.
    segment: function segment() {
      return this.event.segments && this.event.segments[this.cellFormattedDate] || null;
    },
    draggable: function draggable() {
      var _this$event = this.event,
          draggable = _this$event.draggable,
          background = _this$event.background,
          daysCount = _this$event.daysCount;
      return this.vuecal.editEvents.drag && draggable && !background && daysCount === 1;
    },
    resizable: function resizable() {
      var _this$vuecal = this.vuecal,
          editEvents = _this$vuecal.editEvents,
          time = _this$vuecal.time;
      return editEvents.resize && this.event.resizable && time && !this.allDay && (!this.segment || this.segment && this.segment.isLastDay) && this.view.id !== 'month';
    },
    // Drag & drop module.
    dnd: function dnd() {
      return this.modules.dnd;
    }
  }
});
// CONCATENATED MODULE: ./src/vue-cal/event.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_eventvue_type_script_lang_js_ = (eventvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-cal/event.vue?vue&type=style&index=0&lang=scss&
var eventvue_type_style_index_0_lang_scss_ = __nested_webpack_require_211771__("61f2");

// CONCATENATED MODULE: ./src/vue-cal/event.vue






/* normalize component */

var event_component = normalizeComponent(
  vue_cal_eventvue_type_script_lang_js_,
  eventvue_type_template_id_cdf79fc4_lang_pug_render,
  eventvue_type_template_id_cdf79fc4_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_cal_event = (event_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-cal/cell.vue?vue&type=script&lang=js&

















//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var cellvue_type_script_lang_js_ = ({
  inject: ['vuecal', 'utils', 'modules', 'view', 'domEvents'],
  components: {
    Event: vue_cal_event
  },
  props: {
    // Vue-cal main component options (props).
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    editEvents: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    cellSplits: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    minTimestamp: {
      type: [Number, null],
      default: null
    },
    maxTimestamp: {
      type: [Number, null],
      default: null
    },
    cellWidth: {
      type: [Number, Boolean],
      default: false
    },
    allDay: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      cellOverlaps: {},
      cellOverlapsStreak: 1,
      // Largest amount of simultaneous events in cell.
      // On mouse down, save the time at cursor so it can be reused on cell focus event
      // where there is no cursor coords.
      timeAtCursor: null,
      highlighted: false,
      // On event drag over.
      highlightedSplit: null
    };
  },
  methods: {
    getSplitAtCursor: function getSplitAtCursor(_ref) {
      var target = _ref.target;
      var targetIsSplit = target.classList.contains('vuecal__cell-split');
      var split = targetIsSplit ? target : this.vuecal.findAncestor(target, 'vuecal__cell-split');

      if (split) {
        split = split.attributes['data-split'].value; // Convert to a numeric value if split id is a number.

        if (parseInt(split).toString() === split.toString()) split = parseInt(split);
      }

      return split || null;
    },
    splitClasses: function splitClasses(split) {
      return Object(defineProperty["a" /* default */])({
        'vuecal__cell-split': true,
        'vuecal__cell-split--highlighted': this.highlightedSplit === split.id
      }, split.class, !!split.class);
    },
    checkCellOverlappingEvents: function checkCellOverlappingEvents() {
      // If splits, checkCellOverlappingEvents() is called from within computed splits.
      if (this.options.time && this.eventsCount && !this.splitsCount) {
        if (this.eventsCount === 1) {
          this.cellOverlaps = [];
          this.cellOverlapsStreak = 1;
        } // If only 1 event remains re-init the overlaps.
        else {
          var _this$utils$event$che = this.utils.event.checkCellOverlappingEvents(this.events, this.options);

          var _this$utils$event$che2 = _slicedToArray(_this$utils$event$che, 2);

          this.cellOverlaps = _this$utils$event$che2[0];
          this.cellOverlapsStreak = _this$utils$event$che2[1];
        }
      }
    },
    isDOMElementAnEvent: function isDOMElementAnEvent(el) {
      return this.vuecal.isDOMElementAnEvent(el);
    },

    /**
     * Select a cell and go to narrower view on double click or single click according to vuecalProps option.
     */
    selectCell: function selectCell(DOMEvent) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // If splitting days, also return the clicked split on cell click when emitting event.
      var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
      this.utils.cell.selectCell(force, this.timeAtCursor, split);
      this.timeAtCursor = null;
    },
    onCellkeyPressEnter: function onCellkeyPressEnter(DOMEvent) {
      if (!this.isSelected) this.onCellFocus(DOMEvent); // If splitting days, also return the clicked split on cell keypress when emitting event.

      var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
      this.utils.cell.keyPressEnterCell(this.timeAtCursor, split);
      this.timeAtCursor = null;
    },

    /**
     * On cell focus, from tab key or from mousedown, highlight the cell and emit
     * the cell-focus event with the date of the cell start when focusing from tab or
     * the date & time at cursor if click/touch.
     */
    onCellFocus: function onCellFocus(DOMEvent) {
      if (!this.isSelected && !this.isDisabled) {
        this.isSelected = this.data.startDate; // Highlight the cell.
        // If splitting days, also return the clicked split on cell focus when emitting event.

        var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null; // Cell-focus event returns the cell start date (at midnight) if triggered from tab key,
        // or cursor coords time if clicked.

        var date = this.timeAtCursor || this.data.startDate;
        this.vuecal.$emit('cell-focus', split ? {
          date: date,
          split: split
        } : date);
      }
    },
    onCellMouseDown: function onCellMouseDown(DOMEvent) {
      var split = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var touch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // Prevent a double mouse down on touch devices.
      if ('ontouchstart' in window && !touch) return false;
      if (!this.isSelected) this.onCellFocus(DOMEvent);
      var _this$domEvents = this.domEvents,
          clickHoldACell = _this$domEvents.clickHoldACell,
          focusAnEvent = _this$domEvents.focusAnEvent; // Reinit the click trigger on each mousedown.
      // In some cases we explicitly set this flag to prevent the click event to trigger,
      // and cancel event creation.

      this.domEvents.cancelClickEventCreation = false; // Also reinit this var on each mousedown.

      clickHoldACell.eventCreated = false;
      this.timeAtCursor = new Date(this.data.startDate);

      var _this$vuecal$minutesA = this.vuecal.minutesAtCursor(DOMEvent),
          minutes = _this$vuecal$minutesA.minutes,
          y = _this$vuecal$minutesA.cursorCoords.y;

      this.timeAtCursor.setMinutes(minutes);
      var mouseDownOnEvent = this.isDOMElementAnEvent(DOMEvent.target); // Unfocus an event if any is focused and clicking on cell outside of an event.

      if (!mouseDownOnEvent && focusAnEvent._eid) {
        (this.view.events.find(function (e) {
          return e._eid === focusAnEvent._eid;
        }) || {}).focused = false;
      } // Only if event creation is allowed and mousedown is on a cell (not on event).


      if (this.editEvents.create && !mouseDownOnEvent) this.setUpEventCreation(DOMEvent, y);
    },
    setUpEventCreation: function setUpEventCreation(DOMEvent, startCursorY) {
      // If dragToCreateEvent is true, start the event creation from dragging
      // only on week and day views (doesn't make sense on month view).
      if (this.options.dragToCreateEvent && ['week', 'day'].includes(this.view.id)) {
        var dragCreateAnEvent = this.domEvents.dragCreateAnEvent;
        dragCreateAnEvent.startCursorY = startCursorY; // If splitting days, store the clicked split to create an event in it from the global
        // mousemove handler in index.vue.

        dragCreateAnEvent.split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null; // Save the time at cursor on initial mousedown.

        dragCreateAnEvent.start = this.timeAtCursor; // If snapToTime, set the start to the closest intervaled number.

        if (this.options.snapToTime) {
          var timeMinutes = this.timeAtCursor.getHours() * 60 + this.timeAtCursor.getMinutes();
          var plusHalfSnapTime = timeMinutes + this.options.snapToTime / 2;
          timeMinutes = plusHalfSnapTime - plusHalfSnapTime % this.options.snapToTime;
          dragCreateAnEvent.start.setHours(0, timeMinutes, 0, 0);
        }
      } // If the cellClickHold option is true and not mousedown on an event, click & hold to create an event.
      else if (this.options.cellClickHold && ['month', 'week', 'day'].includes(this.view.id)) {
        this.setUpCellHoldTimer(DOMEvent);
      }
    },
    // When click & holding a cell, and if allowed, set a timeout to create an event (can be cancelled).
    setUpCellHoldTimer: function setUpCellHoldTimer(DOMEvent) {
      var _this = this;

      var clickHoldACell = this.domEvents.clickHoldACell;
      clickHoldACell.cellId = "".concat(this.vuecal._uid, "_").concat(this.data.formattedDate); // If splitting days, store the clicked split to create an event in it from the global
      // mousemove handler in index.vue.

      clickHoldACell.split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
      clickHoldACell.timeoutId = setTimeout(function () {
        if (clickHoldACell.cellId && !_this.domEvents.cancelClickEventCreation) {
          var _this$utils$event$cre = _this.utils.event.createAnEvent(_this.timeAtCursor, null, clickHoldACell.split ? {
            split: clickHoldACell.split
          } : {}),
              _eid = _this$utils$event$cre._eid;

          clickHoldACell.eventCreated = _eid;
        }
      }, clickHoldACell.timeout);
    },
    onCellTouchStart: function onCellTouchStart(DOMEvent) {
      var split = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // If not mousedown on an event.
      this.onCellMouseDown(DOMEvent, split, true);
    },
    onCellClick: function onCellClick(DOMEvent) {
      if (!this.isDOMElementAnEvent(DOMEvent.target)) this.selectCell(DOMEvent);
    },
    onCellDblClick: function onCellDblClick(DOMEvent) {
      var date = new Date(this.data.startDate);
      date.setMinutes(this.vuecal.minutesAtCursor(DOMEvent).minutes); // If splitting days, also return the clicked split on cell dblclick when emitting event.

      var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
      this.vuecal.$emit('cell-dblclick', split ? {
        date: date,
        split: split
      } : date);
      if (this.options.dblclickToNavigate) this.vuecal.switchToNarrowerView();
    },
    onCellContextMenu: function onCellContextMenu(DOMEvent) {
      DOMEvent.stopPropagation();
      DOMEvent.preventDefault();
      var date = new Date(this.data.startDate);

      var _this$vuecal$minutesA2 = this.vuecal.minutesAtCursor(DOMEvent),
          cursorCoords = _this$vuecal$minutesA2.cursorCoords,
          minutes = _this$vuecal$minutesA2.minutes;

      date.setMinutes(minutes); // If splitting days, also return the clicked split on cell contextmenu when emitting event.

      var split = this.splitsCount ? this.getSplitAtCursor(DOMEvent) : null;
      this.vuecal.$emit('cell-contextmenu', Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
        date: date
      }, cursorCoords), split || {}), {}, {
        e: DOMEvent
      }));
    }
  },
  computed: {
    // Drag & drop module.
    dnd: function dnd() {
      return this.modules.dnd;
    },
    nowInMinutes: function nowInMinutes() {
      return this.utils.date.dateToMinutes(this.vuecal.now);
    },
    isBeforeMinDate: function isBeforeMinDate() {
      return this.minTimestamp !== null && this.minTimestamp > this.data.endDate.getTime();
    },
    isAfterMaxDate: function isAfterMaxDate() {
      return this.maxTimestamp && this.maxTimestamp < this.data.startDate.getTime();
    },
    // Is the current cell disabled or not.
    isDisabled: function isDisabled() {
      var disableDays = this.options.disableDays;
      var isYearsOrYearView = this.vuecal.isYearsOrYearView;
      if (disableDays.length && disableDays.includes(this.data.formattedDate) && !isYearsOrYearView) return true;
      return this.isBeforeMinDate || this.isAfterMaxDate;
    },
    // Is the current cell selected or not.
    isSelected: {
      get: function get() {
        var selected = false;
        var selectedDate = this.view.selectedDate;

        if (this.view.id === 'years') {
          selected = selectedDate.getFullYear() === this.data.startDate.getFullYear();
        } else if (this.view.id === 'year') {
          selected = selectedDate.getFullYear() === this.data.startDate.getFullYear() && selectedDate.getMonth() === this.data.startDate.getMonth();
        } else selected = selectedDate.getTime() === this.data.startDate.getTime();

        return selected;
      },
      set: function set(date) {
        this.view.selectedDate = date;
      }
    },
    // Cache result for performance.
    isWeekOrDayView: function isWeekOrDayView() {
      return ['week', 'day'].includes(this.view.id);
    },
    transitionDirection: function transitionDirection() {
      return this.vuecal.transitionDirection;
    },
    specialHours: function specialHours() {
      var _this2 = this;

      // this.data.specialHours is always an array, but may be empty.
      return this.data.specialHours.map(function (block) {
        var from = block.from,
            to = block.to;
        from = Math.max(from, _this2.options.timeFrom);
        to = Math.min(to, _this2.options.timeTo);
        return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, block), {}, {
          height: (to - from) * _this2.timeScale,
          top: (from - _this2.options.timeFrom) * _this2.timeScale
        });
      });
    },
    events: function events() {
      var _this3 = this;

      var _this$data = this.data,
          cellStart = _this$data.startDate,
          cellEnd = _this$data.endDate;
      var events = []; // Calculate events on month/week/day views or years/year if eventsCountOnYearView.

      if (!(['years', 'year'].includes(this.view.id) && !this.options.eventsCountOnYearView)) {
        // Means that when vuecal.view.events changes all the cells will be looking up new value. :/
        // Also clone array to prevent modifying original.
        events = this.view.events.slice(0);

        if (this.view.id === 'month') {
          var _events;

          (_events = events).push.apply(_events, _toConsumableArray(this.view.outOfScopeEvents));
        } // Only keep events in cell time range.


        events = events.filter(function (e) {
          return _this3.utils.event.eventInRange(e, cellStart, cellEnd);
        });
        if (this.options.showAllDayEvents && this.view.id !== 'month') events = events.filter(function (e) {
          return !!e.allDay === _this3.allDay;
        }); // From events in view, filter the ones that are out of `time-from`-`time-to` range in this cell.

        if (this.options.time && this.isWeekOrDayView && !this.allDay) {
          var _this$options = this.options,
              timeFrom = _this$options.timeFrom,
              timeTo = _this$options.timeTo;
          events = events.filter(function (e) {
            var segment = e.daysCount > 1 && e.segments[_this3.data.formattedDate] || {};
            var singleDayInRange = e.daysCount === 1 && e.startTimeMinutes < timeTo && e.endTimeMinutes > timeFrom;
            var multipleDayInRange = e.daysCount > 1 && segment.startTimeMinutes < timeTo && segment.endTimeMinutes > timeFrom;
            var recurrMultDayInRange = false; // e.daysCount > 1 && e.repeat && recurringEventInRange(e, cellStart, cellEnd)

            return e.allDay || singleDayInRange || multipleDayInRange || recurrMultDayInRange;
          });
        } // Position events with time in the timeline when there is a timeline and not in allDay slot.


        if (this.options.time && this.isWeekOrDayView && !(this.options.showAllDayEvents && this.allDay)) {
          // Sort events in chronological order.
          events.sort(function (a, b) {
            return a.start < b.start ? -1 : 1;
          });
        } // If splits, checkCellOverlappingEvents() is called from within computed splits.


        if (!this.cellSplits.length) this.$nextTick(this.checkCellOverlappingEvents);
      }

      return events;
    },
    eventsCount: function eventsCount() {
      return this.events.length;
    },
    splits: function splits() {
      var _this4 = this;

      return this.cellSplits.map(function (item, i) {
        var events = _this4.events.filter(function (e) {
          return e.split === item.id;
        });

        var _this4$utils$event$ch = _this4.utils.event.checkCellOverlappingEvents(events.filter(function (e) {
          return !e.background && !e.allDay;
        }), _this4.options),
            _this4$utils$event$ch2 = _slicedToArray(_this4$utils$event$ch, 2),
            overlaps = _this4$utils$event$ch2[0],
            streak = _this4$utils$event$ch2[1];

        return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, item), {}, {
          overlaps: overlaps,
          overlapsStreak: streak,
          events: events
        });
      });
    },
    splitsCount: function splitsCount() {
      return this.splits.length;
    },
    cellClasses: function cellClasses() {
      var _ref3;

      return _ref3 = {}, Object(defineProperty["a" /* default */])(_ref3, this.data.class, !!this.data.class), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__cell--current', this.data.current), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__cell--today', this.data.today), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__cell--out-of-scope', this.data.outOfScope), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__cell--before-min', this.isDisabled && this.isBeforeMinDate), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__cell--after-max', this.isDisabled && this.isAfterMaxDate), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__cell--disabled', this.isDisabled), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__cell--selected', this.isSelected), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__cell--highlighted', this.highlighted), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__cell--has-splits', this.splitsCount), Object(defineProperty["a" /* default */])(_ref3, 'vuecal__cell--has-events', this.eventsCount), _ref3;
    },
    cellStyles: function cellStyles() {
      return Object(objectSpread2["a" /* default */])({}, this.cellWidth ? {
        width: "".concat(this.cellWidth, "%")
      } : {});
    },
    timelineVisible: function timelineVisible() {
      var _this$options2 = this.options,
          time = _this$options2.time,
          timeTo = _this$options2.timeTo;
      return this.data.today && this.isWeekOrDayView && time && !this.allDay && this.nowInMinutes <= timeTo;
    },
    todaysTimePosition: function todaysTimePosition() {
      // Skip the Maths if not relevant.
      if (!this.data.today || !this.options.time) return;
      var minutesFromTop = this.nowInMinutes - this.options.timeFrom;
      return Math.round(minutesFromTop * this.timeScale);
    },
    timeScale: function timeScale() {
      return this.options.timeCellHeight / this.options.timeStep;
    }
  }
});
// CONCATENATED MODULE: ./src/vue-cal/cell.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_cellvue_type_script_lang_js_ = (cellvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/vue-cal/cell.vue?vue&type=style&index=0&lang=scss&
var cellvue_type_style_index_0_lang_scss_ = __nested_webpack_require_211771__("95dd");

// CONCATENATED MODULE: ./src/vue-cal/cell.vue






/* normalize component */

var cell_component = normalizeComponent(
  vue_cal_cellvue_type_script_lang_js_,
  cellvue_type_template_id_12d3ecf8_lang_pug_render,
  cellvue_type_template_id_12d3ecf8_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_cal_cell = (cell_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-cal/all-day-bar.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var all_day_barvue_type_script_lang_js_ = ({
  inject: ['vuecal', 'view', 'editEvents'],
  components: {
    'vuecal-cell': vue_cal_cell
  },
  props: {
    // Vue-cal main component options (props).
    options: {
      type: Object,
      required: true
    },
    cells: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    daySplits: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    shortEvents: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: ''
    },
    cellOrSplitMinWidth: {
      type: Number,
      default: null
    }
  },
  computed: {
    hasCellOrSplitWidth: function hasCellOrSplitWidth() {
      return !!(this.options.minCellWidth || this.daySplits.length && this.options.minSplitWidth);
    }
  }
});
// CONCATENATED MODULE: ./src/vue-cal/all-day-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var vue_cal_all_day_barvue_type_script_lang_js_ = (all_day_barvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/vue-cal/all-day-bar.vue





/* normalize component */

var all_day_bar_component = normalizeComponent(
  vue_cal_all_day_barvue_type_script_lang_js_,
  all_day_barvue_type_template_id_20856694_lang_pug_render,
  all_day_barvue_type_template_id_20856694_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var all_day_bar = (all_day_bar_component.exports);
// EXTERNAL MODULE: ./src/vue-cal/styles.scss
var styles = __nested_webpack_require_211771__("1332");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/vue-cal/index.vue?vue&type=script&lang=js&
























//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var vue_calvue_type_script_lang_js_minutesInADay = 24 * 60; // Don't do the maths every time.

var textsDefaults = {
  weekDays: Array(7).fill(''),
  weekDaysShort: [],
  months: Array(12).fill(''),
  years: '',
  year: '',
  month: '',
  week: '',
  day: '',
  today: '',
  noEvent: '',
  allDay: '',
  deleteEvent: '',
  createEvent: '',
  dateFormat: 'dddd MMMM D, YYYY',
  am: 'am',
  pm: 'pm'
};
var validViews = ['years', 'year', 'month', 'week', 'day']; // Only 1 instance of DateUtils for all the instances of Vue Cal, created when first importing the Vue Cal lib.
// The dateUtils does not need to be dependent of Vue Cal instance, it only needs localized texts when ready.
// This becomes a problem when showing multiple instances of Vue Cal with different locales like in the
// documentation page. So the texts are overridable through a the `updateDateTexts` function.

var vue_calvue_type_script_lang_js_dateUtils = new date_DateUtils(textsDefaults); // Do this ASAP for date prototypes.

/* harmony default export */ var vue_calvue_type_script_lang_js_ = ({
  name: 'vue-cal',
  components: {
    'vuecal-cell': vue_cal_cell,
    'vuecal-header': header,
    WeekdaysHeadings: weekdays_headings,
    AllDayBar: all_day_bar
  },
  // By Vue design, passing props loses the reactivity unless it's a method or reactive OBJECT.
  provide: function provide() {
    return {
      vuecal: this,
      utils: this.utils,
      modules: this.modules,
      // Methods.
      previous: this.previous,
      next: this.next,
      switchView: this.switchView,
      updateSelectedDate: this.updateSelectedDate,
      editEvents: this.editEvents,
      // Objects.
      view: this.view,
      domEvents: this.domEvents
    };
  },
  props: {
    activeView: {
      type: String,
      default: 'week'
    },
    // Only used if there are daySplits with minSplitWidth, to add the same height top spacer on time column.
    allDayBarHeight: {
      type: [String, Number],
      default: '25px'
    },
    cellClickHold: {
      type: Boolean,
      default: true
    },
    cellContextmenu: {
      type: Boolean,
      default: false
    },
    clickToNavigate: {
      type: Boolean,
      default: false
    },
    dblclickToNavigate: {
      type: Boolean,
      default: true
    },
    disableDatePrototypes: {
      type: Boolean,
      default: false
    },
    disableDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disableViews: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    dragToCreateEvent: {
      type: Boolean,
      default: true
    },
    // Start a drag creation after dragging a certain amount of pixels.
    // This prevents drag creation by mistake when you want to navigate.
    dragToCreateThreshold: {
      type: Number,
      default: 15
    },
    editableEvents: {
      type: [Boolean, Object],
      default: false
    },
    events: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    eventsCountOnYearView: {
      type: Boolean,
      default: false
    },
    eventsOnMonthView: {
      type: [Boolean, String],
      default: false
    },
    hideBody: {
      type: Boolean,
      default: false
    },
    hideTitleBar: {
      type: Boolean,
      default: false
    },
    hideViewSelector: {
      type: Boolean,
      default: false
    },
    hideWeekdays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    hideWeekends: {
      type: Boolean,
      default: false
    },
    locale: {
      type: [String, Object],
      default: 'en'
    },
    maxDate: {
      type: [String, Date],
      default: ''
    },
    minCellWidth: {
      type: Number,
      default: 0
    },
    minDate: {
      type: [String, Date],
      default: ''
    },
    minEventWidth: {
      type: Number,
      default: 0
    },
    minSplitWidth: {
      type: Number,
      default: 0
    },
    onEventClick: {
      type: [Function, null],
      default: null
    },
    onEventCreate: {
      type: [Function, null],
      default: null
    },
    onEventDblclick: {
      type: [Function, null],
      default: null
    },
    overlapsPerTimeStep: {
      type: Boolean,
      default: false
    },
    resizeX: {
      type: Boolean,
      default: false
    },
    selectedDate: {
      type: [String, Date],
      default: ''
    },
    showAllDayEvents: {
      type: [Boolean, String],
      default: false
    },
    showWeekNumbers: {
      type: [Boolean, String],
      default: false
    },
    snapToTime: {
      type: Number,
      default: 0
    },
    small: {
      type: Boolean,
      default: false
    },
    specialHours: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    splitDays: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    startWeekOnSunday: {
      type: Boolean,
      default: false
    },
    stickySplitLabels: {
      type: Boolean,
      default: false
    },
    time: {
      type: Boolean,
      default: true
    },
    timeCellHeight: {
      type: Number,
      default: 40
    },
    // In pixels.
    timeFormat: {
      type: String,
      default: ''
    },
    timeFrom: {
      type: Number,
      default: 0
    },
    // In minutes.
    timeStep: {
      type: Number,
      default: 60
    },
    // In minutes.
    timeTo: {
      type: Number,
      default: vue_calvue_type_script_lang_js_minutesInADay
    },
    // In minutes.
    todayButton: {
      type: Boolean,
      default: false
    },
    transitions: {
      type: Boolean,
      default: true
    },
    twelveHour: {
      type: Boolean,
      default: false
    },
    watchRealTime: {
      type: Boolean,
      default: false
    },
    // Expensive, so only trigger on demand.
    xsmall: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      ready: false,
      // Is vue-cal ready.
      // Make texts reactive before a locale is loaded.
      texts: Object(objectSpread2["a" /* default */])({}, textsDefaults),
      utils: {
        // Remove prototypes ASAP if the user wants so.
        date: (this.disableDatePrototypes ? vue_calvue_type_script_lang_js_dateUtils.removePrototypes() : false) || vue_calvue_type_script_lang_js_dateUtils,
        cell: null,
        // Note: Destructuring class method loses the `this` context and Vue Cal becomes inaccessible
        // from the event utils function. Don't do:
        // const { eventInRange, createEventSegments } = this.utils.event
        event: null
      },
      modules: {
        dnd: null
      },
      // At any time this object will be filled with current view, visible events and selected date.
      view: {
        id: '',
        title: '',
        startDate: null,
        endDate: null,
        firstCellDate: null,
        lastCellDate: null,
        selectedDate: null,
        // All the events are stored in the mutableEvents array, but subset of visible ones are passed
        // Into the current view for fast lookup and manipulation.
        events: []
      },
      eventIdIncrement: 1,
      // Internal unique id.
      // Preset at now date on load, but updated every minute if watchRealTime,
      // or updated at least on each cells rerender, in order to keep Today's date accurate.
      now: new Date(),
      // Useful when watchRealTime = true, 2 timeouts: 1 to snap to round minutes, then 1 every minute.
      timeTickerIds: [null, null],
      // All the possible events/cells interractions:
      // e.g. focus, click, click & hold, resize, drag & drop (coming).
      domEvents: {
        resizeAnEvent: {
          _eid: null,
          // Only one at a time.
          start: null,
          split: null,
          segment: null,
          originalEndTimeMinutes: 0,
          originalEnd: null,
          end: null,
          startCell: null,
          endCell: null
        },
        dragAnEvent: {
          // Only one at a time, only needed for vuecal dragging-event class.
          _eid: null
        },
        dragCreateAnEvent: {
          startCursorY: null,
          start: null,
          // The cell date where we start the drag.
          split: null,
          event: null
        },
        focusAnEvent: {
          _eid: null,
          // Only one at a time.
          // Useful to detect a full click (mousedown + mouseup on same event).
          // E.g. Only call onEventClick function (if any) on full click.
          mousedUp: false
        },
        clickHoldAnEvent: {
          _eid: null,
          // Only one at a time.
          timeout: 1200,
          // Hold for 1.2s to delete an event.
          timeoutId: null
        },
        dblTapACell: {
          taps: 0,
          timeout: 500 // Allowed latency between first and second click.

        },
        clickHoldACell: {
          cellId: null,
          split: null,
          timeout: 1200,
          // Hold for 1.2s to create an event.
          timeoutId: null,
          eventCreated: false
        },
        // A single click can trigger event creation if the user decides so.
        // But prevent this to happen on click & hold, on event click and on resize event.
        cancelClickEventCreation: false
      },
      // The events source of truth.
      // An array of mutable events updated each time given external events array changes.
      mutableEvents: [],
      // Transition when switching view. left when going toward the past, right when going toward future.
      transitionDirection: 'right'
    };
  },
  methods: {
    /**
     * Only import locale on demand to keep a small library weight.
     *
     * @param {String|Object} locale the language user whishes to have on vue-cal.
     */
    loadLocale: function loadLocale(locale) {
      var _this = this;

      if (_typeof(this.locale) === 'object') {
        this.texts = Object.assign({}, textsDefaults, locale);
        this.utils.date.updateTexts(this.texts);
        return;
      }

      if (this.locale === 'en') this.texts = Object.assign({}, textsDefaults, __nested_webpack_require_211771__("0a96"));else {
        // Template litteral `./i18n/${locale}` still crashes eslint...
        // https://github.com/babel/babel-eslint/issues/681#issuecomment-595591823
        __nested_webpack_require_211771__("4a53")("./" + locale).then(function (response) {
          _this.texts = Object.assign({}, textsDefaults, response.default);

          _this.utils.date.updateTexts(_this.texts);
        });
      }
    },

    /**
     * Only import drag and drop module on demand to keep a small library weight.
     */
    loadDragAndDrop: function loadDragAndDrop() {
      var _this2 = this;

      __nested_webpack_require_211771__.e(/* import() | drag-and-drop */ 39).then(__nested_webpack_require_211771__.bind(null, "a691")).then(function (response) {
        var DragAndDrop = response.DragAndDrop;
        _this2.modules.dnd = new DragAndDrop(_this2);
      }) // eslint-disable-next-line no-console
      .catch(function () {
        return console.warn('Vue Cal: Missing drag & drop module.');
      });
    },

    /**
     * Checks that the given view is in the array of valid views or use 'week' otherwise.
     * Then check the view is enabled or use the first enabled view instead.
     * Raises error and warning if needed.
     *
     * @param {String} view The view to validate.
     * @return {String} a valid view.
     */
    validateView: function validateView(view) {
      if (!validViews.includes(view)) {
        // eslint-disable-next-line no-console
        console.error("Vue Cal: invalid active-view parameter provided: \"".concat(view, "\".\nA valid view must be one of: ").concat(validViews.join(', '), "."));
        view = 'week';
      }

      if (!this.enabledViews.includes(view)) {
        // eslint-disable-next-line no-console
        console.warn("Vue Cal: the provided active-view \"".concat(view, "\" is disabled. Using the \"").concat(this.enabledViews[0], "\" view instead."));
        view = this.enabledViews[0];
      }

      return view;
    },

    /**
     * On click/dblclick of a cell go to a narrower view if available.
     * E.g. Click on month cell takes you to week view if not hidden, otherwise on day view if not hidden.
     *
     * @param {String | Date} date A starting date for the view, if none, fallbacks to the selected date,
     *                             If also empty fallbacks to the current view start date.
     */
    switchToNarrowerView: function switchToNarrowerView() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.transitionDirection = 'right';
      var view = this.enabledViews[this.enabledViews.indexOf(this.view.id) + 1];
      if (view) this.switchView(view, date);
    },

    /**
     * Switches to the specified view on view selector click, or programmatically form external call (via $refs).
     * If a date is given, it will be selected and if the view does not contain it, it will go to that date.
     *
     * @param {String} view the view to go to. Among `years`, `year`, `month`, `week`, `day`.
     * @param {String | Date} date A starting date for the view, if none, fallbacks to the selected date,
     *                             If also empty fallbacks to the current view start date.
     * @param {Boolean} fromViewSelector to know if the caller is the built-in view selector.
     */
    switchView: function switchView(view) {
      var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var fromViewSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      view = this.validateView(view);
      var ud = this.utils.date; // This is user to prevent firing the custom event twice when syncing activeView.

      var viewDateBeforeChange = this.view.startDate && this.view.startDate.getTime();

      if (this.transitions && fromViewSelector) {
        if (this.view.id === view) return;
        var views = this.enabledViews;
        this.transitionDirection = views.indexOf(this.view.id) > views.indexOf(view) ? 'left' : 'right';
      }

      var oldView = this.view.id;
      this.view.events = [];
      this.view.id = view;
      this.view.firstCellDate = null; // For month view, if filling cells before 1st of month.

      this.view.lastCellDate = null; // For month view, if filling cells after current month.

      if (!date) date = this.view.selectedDate || this.view.startDate;

      switch (view) {
        case 'years':
          {
            // Always fill first cell with a multiple of 25 years, E.g. year 2000, or 2025.
            this.view.startDate = new Date(Math.floor(date.getFullYear() / 25) * 25 || 2000, 0, 1);
            this.view.endDate = new Date(this.view.startDate.getFullYear() + 25, 0, 1);
            this.view.endDate.setSeconds(-1); // End at 23:59:59.

            break;
          }

        case 'year':
          {
            this.view.startDate = new Date(date.getFullYear(), 0, 1);
            this.view.endDate = new Date(date.getFullYear() + 1, 0, 1);
            this.view.endDate.setSeconds(-1); // End at 23:59:59.

            break;
          }

        case 'month':
          {
            this.view.startDate = new Date(date.getFullYear(), date.getMonth(), 1);
            this.view.endDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
            this.view.endDate.setSeconds(-1); // End at 23:59:59.
            // If the first day of the month is not a FirstDayOfWeek (Monday or Sunday), prepend missing days to the days array.

            var startDate = new Date(this.view.startDate);

            if (startDate.getDay() !== (this.startWeekOnSunday ? 0 : 1)) {
              startDate = ud.getPreviousFirstDayOfWeek(startDate, this.startWeekOnSunday);
            } // Used in viewCells computed array & returned in emitted events.


            this.view.firstCellDate = startDate;
            this.view.lastCellDate = ud.addDays(startDate, 41);
            this.view.lastCellDate.setHours(23, 59, 59, 0);

            if (this.hideWeekends) {
              // Remove first weekend from firstCellDate if hide-weekends.
              if ([0, 6].includes(this.view.firstCellDate.getDay())) {
                var daysToAdd = this.view.firstCellDate.getDay() === 6 && !this.startWeekOnSunday ? 2 : 1;
                this.view.firstCellDate = ud.addDays(this.view.firstCellDate, daysToAdd);
              } // Remove first weekend from startDate if hide-weekends.


              if ([0, 6].includes(this.view.startDate.getDay())) {
                var _daysToAdd = this.view.startDate.getDay() === 6 ? 2 : 1;

                this.view.startDate = ud.addDays(this.view.startDate, _daysToAdd);
              } // Remove last weekend from lastCellDate if hide-weekends.


              if ([0, 6].includes(this.view.lastCellDate.getDay())) {
                var daysToSubtract = this.view.lastCellDate.getDay() === 0 && !this.startWeekOnSunday ? 2 : 1;
                this.view.lastCellDate = ud.subtractDays(this.view.lastCellDate, daysToSubtract);
              } // Remove last weekend from endDate if hide-weekends.


              if ([0, 6].includes(this.view.endDate.getDay())) {
                var _daysToSubtract = this.view.endDate.getDay() === 0 ? 2 : 1;

                this.view.endDate = ud.subtractDays(this.view.endDate, _daysToSubtract);
              }
            }

            break;
          }

        case 'week':
          {
            date = ud.getPreviousFirstDayOfWeek(date, this.startWeekOnSunday);
            var weekDaysCount = this.hideWeekends ? 5 : 7;
            this.view.startDate = this.hideWeekends && this.startWeekOnSunday ? ud.addDays(date, 1) : date;
            this.view.startDate.setHours(0, 0, 0, 0);
            this.view.endDate = ud.addDays(date, weekDaysCount);
            this.view.endDate.setSeconds(-1); // End at 23:59:59.

            break;
          }

        case 'day':
          {
            this.view.startDate = date;
            this.view.startDate.setHours(0, 0, 0, 0);
            this.view.endDate = new Date(date);
            this.view.endDate.setHours(23, 59, 59, 0); // End at 23:59:59.

            break;
          }
      }

      this.addEventsToView(); // Prevent firing the `view-change` event twice (if using .sync).

      var viewDate = this.view.startDate && this.view.startDate.getTime();
      if (oldView === view && viewDate === viewDateBeforeChange) return; // Emit events to outside of Vue Cal and update the activeView (if using .sync).

      this.$emit('update:activeView', view);

      if (this.ready) {
        var _startDate = this.view.startDate;

        var params = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
          view: view,
          startDate: _startDate,
          endDate: this.view.endDate
        }, this.isMonthView ? {
          firstCellDate: this.view.firstCellDate,
          lastCellDate: this.view.lastCellDate,
          outOfScopeEvents: this.view.outOfScopeEvents.map(this.cleanupEvent)
        } : {}), {}, {
          events: this.view.events.map(this.cleanupEvent)
        }, this.isWeekView ? {
          week: ud.getWeek(this.startWeekOnSunday ? ud.addDays(_startDate, 1) : _startDate)
        } : {});

        this.$emit('view-change', params);
      }
    },

    /**
     * Shorthand function for external call (via $refs).
     */
    previous: function previous() {
      this.previousNext(false);
    },

    /**
     * Shorthand function for external call (via $refs).
     */
    next: function next() {
      this.previousNext();
    },

    /**
     * On click on previous or next arrow, update the calendar visible date range.
     *
     * @param {Boolean} next
     */
    previousNext: function previousNext() {
      var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var ud = this.utils.date;
      this.transitionDirection = next ? 'right' : 'left';
      var modifier = next ? 1 : -1;
      var firstCellDate = null;
      var _this$view = this.view,
          startDate = _this$view.startDate,
          viewId = _this$view.id;

      switch (viewId) {
        case 'years':
          firstCellDate = new Date(startDate.getFullYear() + 25 * modifier, 0, 1);
          break;

        case 'year':
          firstCellDate = new Date(startDate.getFullYear() + 1 * modifier, 1, 1);
          break;

        case 'month':
          firstCellDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1 * modifier, 1);
          break;

        case 'week':
          firstCellDate = ud[next ? 'addDays' : 'subtractDays'](ud.getPreviousFirstDayOfWeek(startDate, this.startWeekOnSunday), 7);
          break;

        case 'day':
          firstCellDate = ud[next ? 'addDays' : 'subtractDays'](startDate, 1);
          break;
      }

      if (firstCellDate) this.switchView(viewId, firstCellDate);
    },

    /**
     * Add events (subset from mutableEvents) to the current view (in `this.view.events`).
     * This is done for performance, so that all the cells have a quick lookup of only what's needed.
     *
     * @param {Array} events
     */
    addEventsToView: function addEventsToView() {
      var _this$view$events,
          _this3 = this;

      var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var ue = this.utils.event;
      var _this$view2 = this.view,
          startDate = _this$view2.startDate,
          endDate = _this$view2.endDate,
          firstCellDate = _this$view2.firstCellDate,
          lastCellDate = _this$view2.lastCellDate; // Clear the current view if not explicitely giving an array of events to add.

      if (!events.length) this.view.events = []; // @todo: remove the code that explicitely updates this.mutableEvents (e.g on event resize).
      // as we are already mutating the event from mutableEvents.

      events = events.length ? events : _toConsumableArray(this.mutableEvents); // In no event or if on years/year view and eventsCountOnYearView is false
      // then don't add events to view.

      if (!events || this.isYearsOrYearView && !this.eventsCountOnYearView) return; // First remove the events that are not in view.
      // Keep the unfiltered array of events for outOfScopeEvents bellow.

      var filteredEvents = events.filter(function (e) {
        return ue.eventInRange(e, startDate, endDate);
      }); // For each multiple-day event and only if needed, create its segments (= days) for rendering in the view.
      // If we don't display the event on month view (eventsOnMonthView = false) then don't create segments.

      if (!this.isYearsOrYearView && !(this.isMonthView && !this.eventsOnMonthView)) {
        filteredEvents = filteredEvents.map(function (e) {
          return e.daysCount > 1 ? ue.createEventSegments(e, firstCellDate || startDate, lastCellDate || endDate) : e;
        });
      }

      (_this$view$events = this.view.events).push.apply(_this$view$events, _toConsumableArray(filteredEvents));

      if (this.isMonthView) {
        // Save out of scope events into the view object separated from the array of in-scope events.
        this.view.outOfScopeEvents = [];
        events.forEach(function (e) {
          if (ue.eventInRange(e, firstCellDate, startDate) || ue.eventInRange(e, endDate, lastCellDate)) {
            // Only add events to the view.outOfScopeEvents array if not already in view.events
            // (multiple-day events case).
            if (!_this3.view.events.some(function (e2) {
              return e2._eid === e._eid;
            })) _this3.view.outOfScopeEvents.push(e);
          }
        });
      }
    },

    /**
     * find a DOM ancestor of a given DOM node `el` matching given class name.
     *
     * @param {Object} el a DOM node to find ancestor from.
     * @param {String} Class the CSS class name of the ancestor.
     * @return {Object} The matched DOM node or null if no match.
     */
    findAncestor: function findAncestor(el, Class) {
      while ((el = el.parentElement) && !el.classList.contains(Class)) {}

      return el;
    },

    /**
     * Tells whether a clicked DOM node is or is within a calendar event.
     *
     * @param {Object} el a DOM node to check if event.
     * @return {Boolean} true if the given DOM node is - or is in - an event.
     */
    isDOMElementAnEvent: function isDOMElementAnEvent(el) {
      return el.classList.contains('vuecal__event') || this.findAncestor(el, 'vuecal__event');
    },

    /**
     * Capture mousemove anywhere in the page.
     * If resizing an event was started earlier, this will update event end.
     * If resizing was not started, this method is calculation is avoided with a premature return.
     * Notes: Event resizing is started in cell component (onMouseDown) but place onMouseMove & onMouseUp
     *        handlers in the single-instance parent for performance.
     *
     * @param {Object} e the native DOM event object.
     */
    onMouseMove: function onMouseMove(e) {
      var _this$domEvents = this.domEvents,
          resizeAnEvent = _this$domEvents.resizeAnEvent,
          dragAnEvent = _this$domEvents.dragAnEvent,
          dragCreateAnEvent = _this$domEvents.dragCreateAnEvent;
      if (resizeAnEvent._eid === null && dragAnEvent._eid === null && !dragCreateAnEvent.start) return;
      e.preventDefault();
      if (resizeAnEvent._eid) this.eventResizing(e);else if (this.dragToCreateEvent && dragCreateAnEvent.start) this.eventDragCreation(e);
    },

    /**
     * Capture mouseup anywhere in the page, not only on a cell or event.
     * Then end up any resize, drag & drop, click & hold or event or cell.
     * Notes: Mouseup can never cancel a click with preventDefault or stopPropagation,
     *        But it always happens before the click event.
     *
     * @param {Object} e the native DOM event object.
     */
    onMouseUp: function onMouseUp(e) {
      var _this$domEvents2 = this.domEvents,
          focusAnEvent = _this$domEvents2.focusAnEvent,
          resizeAnEvent = _this$domEvents2.resizeAnEvent,
          clickHoldAnEvent = _this$domEvents2.clickHoldAnEvent,
          clickHoldACell = _this$domEvents2.clickHoldACell,
          dragCreateAnEvent = _this$domEvents2.dragCreateAnEvent;
      var isClickHoldingEvent = clickHoldAnEvent._eid;
      var wasResizing = resizeAnEvent._eid;
      var hasResized = false;
      var dragCreatedEvent = dragCreateAnEvent.event,
          dragCreateStarted = dragCreateAnEvent.start;
      var mouseUpOnEvent = this.isDOMElementAnEvent(e.target);
      var eventClicked = focusAnEvent.mousedUp; // If has mousedown & mouseup on the same event.

      focusAnEvent.mousedUp = false; // Reinit the variable for next mouseup.

      if (mouseUpOnEvent) this.domEvents.cancelClickEventCreation = true; // Skip the rest if an event was created successfully.

      if (clickHoldACell.eventCreated) return; // On event resize end, emit event if duration has changed.

      if (wasResizing) {
        var originalEnd = resizeAnEvent.originalEnd,
            originalEndTimeMinutes = resizeAnEvent.originalEndTimeMinutes,
            endTimeMinutes = resizeAnEvent.endTimeMinutes;
        var event = this.view.events.find(function (e) {
          return e._eid === resizeAnEvent._eid;
        }); // If end time is different than original, consider as resized.

        hasResized = endTimeMinutes && endTimeMinutes !== originalEndTimeMinutes; // When resizing the endTime changes but the day may change too when resizing horizontally.
        // So compare timestamps instead of only endTimeMinutes.

        if (event && event.end.getTime() !== originalEnd.getTime()) {
          // Update the modified event in the mutable events array.
          var mutableEvent = this.mutableEvents.find(function (e) {
            return e._eid === resizeAnEvent._eid;
          });
          mutableEvent.endTimeMinutes = event.endTimeMinutes;
          mutableEvent.end = event.end;
          var cleanEvent = this.cleanupEvent(event);

          var originalEvent = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, this.cleanupEvent(event)), {}, {
            end: originalEnd,
            endTimeMinutes: event.originalEndTimeMinutes
          });

          this.$emit('event-duration-change', {
            event: cleanEvent,
            oldDate: resizeAnEvent.originalEnd,
            originalEvent: originalEvent
          });
          this.$emit('event-change', {
            event: cleanEvent,
            originalEvent: originalEvent
          });
        }

        if (event) event.resizing = false;
        resizeAnEvent._eid = null;
        resizeAnEvent.start = null;
        resizeAnEvent.split = null;
        resizeAnEvent.segment = null;
        resizeAnEvent.originalEndTimeMinutes = null;
        resizeAnEvent.originalEnd = null;
        resizeAnEvent.endTimeMinutes = null;
        resizeAnEvent.startCell = null;
        resizeAnEvent.endCell = null;
      } else if (dragCreateStarted) {
        // The drag create might be started but not completed due to threshold never reached.
        if (dragCreatedEvent) {
          this.emitWithEvent('event-drag-create', dragCreatedEvent);
          dragCreateAnEvent.event.resizing = false; // Remove the CSS resizing class.
        } // End the drag creation process.


        dragCreateAnEvent.start = null;
        dragCreateAnEvent.split = null;
        dragCreateAnEvent.event = null;
      } // If not mouse up on an event, unfocus any event except if just dragged.


      if (!mouseUpOnEvent && !wasResizing) this.unfocusEvent(); // Prevent showing delete button if click and hold was not long enough.
      // Click & hold timeout is initiated in onMouseDown() in event component.

      if (clickHoldAnEvent.timeoutId && !isClickHoldingEvent) {
        clearTimeout(clickHoldAnEvent.timeoutId);
        clickHoldAnEvent.timeoutId = null;
      } // Prevent creating an event if click and hold was not long enough.


      if (clickHoldACell.timeoutId) {
        clearTimeout(clickHoldACell.timeoutId);
        clickHoldACell.timeoutId = null;
      } // On event click (mousedown + mouseup on the same event), call the onEventClick function if exists
      // and if not dragging handle or deleting event.


      var eventClickHandler = typeof this.onEventClick === 'function';

      if (eventClicked && !hasResized && !isClickHoldingEvent && !dragCreatedEvent && eventClickHandler) {
        var _event = this.view.events.find(function (e) {
          return e._eid === focusAnEvent._eid;
        }); // If not found, the event may be in the outOfScope array.


        if (!_event && this.isMonthView) _event = this.view.outOfScopeEvents.find(function (e) {
          return e._eid === focusAnEvent._eid;
        });
        return _event && this.onEventClick(_event, e);
      }
    },

    /**
     * Capture `escape` keypress when delete button is visible, and cancel deletion.
     *
     * @param {Object} e the native DOM event object.
     */
    onKeyUp: function onKeyUp(e) {
      if (e.keyCode === 27) this.cancelDelete(); // Escape key.
    },

    /**
     * On mousemove while resising an event.
     *
     * @param {Object} e the native DOM event object.
     */
    eventResizing: function eventResizing(e) {
      var resizeAnEvent = this.domEvents.resizeAnEvent;
      var event = this.view.events.find(function (e) {
        return e._eid === resizeAnEvent._eid;
      }) || {
        segments: {}
      };

      var _this$minutesAtCursor = this.minutesAtCursor(e),
          minutes = _this$minutesAtCursor.minutes,
          cursorCoords = _this$minutesAtCursor.cursorCoords;

      var segment = event.segments && event.segments[resizeAnEvent.segment]; // Destructuring class method loses the `this` context.
      // const { formatDateLite, countDays } = this.utils.date

      var _this$utils = this.utils,
          ud = _this$utils.date,
          ue = _this$utils.event; // Prevent reducing event duration to less than 1 min so it does not disappear.

      var newEndTimeMins = Math.max(minutes, this.timeFrom + 1, (segment || event).startTimeMinutes + 1);
      event.endTimeMinutes = resizeAnEvent.endTimeMinutes = newEndTimeMins; // On resize, snap to time (e.g. 0, 15, 30, 45) if the option is on.

      if (this.snapToTime) {
        var plusHalfSnapTime = event.endTimeMinutes + this.snapToTime / 2;
        event.endTimeMinutes = plusHalfSnapTime - plusHalfSnapTime % this.snapToTime;
      }

      if (segment) segment.endTimeMinutes = event.endTimeMinutes; // Remove 1 second if time is 24:00.

      event.end.setHours(0, event.endTimeMinutes, event.endTimeMinutes === vue_calvue_type_script_lang_js_minutesInADay ? -1 : 0, 0); // Resize events horizontally if resize-x is enabled (add/remove segments).

      if (this.resizeX && this.isWeekView) {
        event.daysCount = ud.countDays(event.start, event.end);
        var cells = this.$refs.cells;
        var cellWidth = cells.offsetWidth / cells.childElementCount;
        var endCell = Math.floor(cursorCoords.x / cellWidth);
        if (resizeAnEvent.startCell === null) resizeAnEvent.startCell = endCell - (event.daysCount - 1);

        if (resizeAnEvent.endCell !== endCell) {
          resizeAnEvent.endCell = endCell;
          var newEnd = ud.addDays(event.start, endCell - resizeAnEvent.startCell); // Don't accept 0 and negative values.

          var newDaysCount = Math.max(ud.countDays(event.start, newEnd), 1);

          if (newDaysCount !== event.daysCount) {
            // Check that all segments are up to date.
            var lastSegmentFormattedDate = null;
            if (newDaysCount > event.daysCount) lastSegmentFormattedDate = ue.addEventSegment(event);else lastSegmentFormattedDate = ue.removeEventSegment(event);
            resizeAnEvent.segment = lastSegmentFormattedDate;
            event.endTimeMinutes += 0.001; // Force updating the current event.
          }
        }
      } // Emit event while resizing, so it has to be fast.


      this.$emit('event-resizing', {
        _eid: event._eid,
        end: event.end,
        endTimeMinutes: event.endTimeMinutes
      });
    },

    /**
     * On mousemove while dragging to create an event.
     *
     * @param {Object} e the native DOM event object.
     */
    eventDragCreation: function eventDragCreation(e) {
      var dragCreateAnEvent = this.domEvents.dragCreateAnEvent;
      var start = dragCreateAnEvent.start,
          startCursorY = dragCreateAnEvent.startCursorY,
          split = dragCreateAnEvent.split;
      var timeAtCursor = new Date(start);

      var _this$minutesAtCursor2 = this.minutesAtCursor(e),
          minutes = _this$minutesAtCursor2.minutes,
          y = _this$minutesAtCursor2.cursorCoords.y; // Don't show anything until the threshold is reached.


      if (!dragCreateAnEvent.event && Math.abs(startCursorY - y) < this.dragToCreateThreshold) return; // Create an event once, on the first pixel move after threshold is reached.

      if (!dragCreateAnEvent.event) {
        // Start the event with a 1 min duration, this will change as we are dragging.
        dragCreateAnEvent.event = this.utils.event.createAnEvent(start, 1, {
          split: split
        }); // The event creation can be cancelled if user has a onEventCreate function
        // (called from createAnEvent()). If cancelled, cancel the dragCreation.

        if (!dragCreateAnEvent.event) {
          dragCreateAnEvent.start = null;
          dragCreateAnEvent.split = null;
          dragCreateAnEvent.event = null;
          return;
        }

        dragCreateAnEvent.event.resizing = true; // Trigger the CSS class.
      } // If the event already exists change its start and end.
      else {
        // Remove 1 second if time is 24:00.
        timeAtCursor.setHours(0, minutes, minutes === vue_calvue_type_script_lang_js_minutesInADay ? -1 : 0, 0); // If snapToTime, set the `timeAtCursor` to the closest intervaled number.

        if (this.snapToTime) {
          var timeMinutes = timeAtCursor.getHours() * 60 + timeAtCursor.getMinutes();
          var plusHalfSnapTime = timeMinutes + this.snapToTime / 2;
          timeMinutes = plusHalfSnapTime - plusHalfSnapTime % this.snapToTime;
          timeAtCursor.setHours(0, timeMinutes, 0, 0);
        } // If dragging the bottom of the event.


        var dragFromBottom = start < timeAtCursor;
        var event = dragCreateAnEvent.event;
        event.start = dragFromBottom ? start : timeAtCursor;
        event.end = dragFromBottom ? timeAtCursor : start;
        event.startTimeMinutes = event.start.getHours() * 60 + event.start.getMinutes();
        event.endTimeMinutes = event.end.getHours() * 60 + event.end.getMinutes();
      }
    },

    /**
     * Unfocus an event (e.g. when clicking outside of focused event).
     */
    unfocusEvent: function unfocusEvent() {
      var _this$domEvents3 = this.domEvents,
          focusAnEvent = _this$domEvents3.focusAnEvent,
          clickHoldAnEvent = _this$domEvents3.clickHoldAnEvent;
      var event = this.view.events.find(function (e) {
        return e._eid === (focusAnEvent._eid || clickHoldAnEvent._eid);
      });
      focusAnEvent._eid = null; // Cancel event focus.

      clickHoldAnEvent._eid = null; // Hide delete button.

      if (event) {
        event.focused = false;
        event.deleting = false;
      }
    },

    /**
     * Cancel an event deletion (e.g. when clicking outside of visible delete button).
     */
    cancelDelete: function cancelDelete() {
      var clickHoldAnEvent = this.domEvents.clickHoldAnEvent;

      if (clickHoldAnEvent._eid) {
        var event = this.view.events.find(function (e) {
          return e._eid === clickHoldAnEvent._eid;
        });
        if (event) event.deleting = false;
        clickHoldAnEvent._eid = null;
        clickHoldAnEvent.timeoutId = null;
      }
    },

    /**
     * After editing an event title (if `this.editable`), save the new string into the event object
     * and emit event to the outside world.
     *
     * @param {Object} e the native DOM event object.
     * @param {Object} event the vue-cal event object.
     */
    onEventTitleBlur: function onEventTitleBlur(e, event) {
      // If no change cancel action.
      if (event.title === e.target.innerHTML) return;
      var oldTitle = event.title;
      event.title = e.target.innerHTML;
      var cleanEvent = this.cleanupEvent(event);
      this.$emit('event-title-change', {
        event: cleanEvent,
        oldTitle: oldTitle
      });
      this.$emit('event-change', {
        event: cleanEvent,
        originalEvent: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, cleanEvent), {}, {
          title: oldTitle
        })
      });
    },

    /**
     * The `mutableEvents` array of events is the source of truth.
     * It is first populated from the `events` prop and every time the `events` prop changes.
     * When the user updates an event through interractions, the event gets updated here.
     * Notes: mutableEvents couldn't be a computed variable based on this.events, because we add
     *        items to the array. (Cannot mutate props)
     */
    updateMutableEvents: function updateMutableEvents() {
      var _this4 = this;

      // Destructuring class method loses the `this` context.
      // const { formatDateLite, stringToDate, dateToMinutes, countDays } = this.utils.date
      var ud = this.utils.date;
      this.mutableEvents = []; // For each event of the `events` prop, prepare the event for vue-cal:
      // Populate missing keys: start, startDate, startTimeMinutes, end, endTimeMinutes, daysCount.
      // Lots of these variables may look redundant but are here for performance as a cached result of calculation. :)

      this.events.forEach(function (event) {
        // `event.start` accepts a Date object, or a formatted string, but always convert to Date.
        var start = typeof event.start === 'string' ? ud.stringToDate(event.start) : event.start;
        var startDateF = ud.formatDateLite(start);
        var startTimeMinutes = ud.dateToMinutes(start); // `event.end` accepts a Date object or a formatted string, but always convert to Date.

        var end = null; // Safari does not convert new Date(YYYY-MM-DD 24:00) to a valid date. #340.

        if (typeof event.end === 'string' && event.end.includes('24:00')) {
          end = new Date(event.end.replace(' 24:00', ''));
          end.setHours(23, 59, 59, 0); // Sets to the same day at 23.59.59.
        } else end = typeof event.end === 'string' ? ud.stringToDate(event.end) : event.end;

        var endDateF = ud.formatDateLite(end);
        var endTimeMinutes = ud.dateToMinutes(end); // Correct the common practice to end at 00:00 or 24:00 to count a full day.

        if (!endTimeMinutes || endTimeMinutes === vue_calvue_type_script_lang_js_minutesInADay) {
          // This also applies on timeless events, all-day events & multiple-day events.
          if (!_this4.time || typeof event.end === 'string' && event.end.length === 10) {
            end.setHours(23, 59, 59, 0); // Sets to the same day at 23.59.59.
          } else end.setSeconds(end.getSeconds() - 1); // Sets to the previous day at 23.59.59.


          endDateF = ud.formatDateLite(end);
          endTimeMinutes = vue_calvue_type_script_lang_js_minutesInADay;
        }

        var multipleDays = startDateF !== endDateF;
        event = Object.assign(Object(objectSpread2["a" /* default */])({}, _this4.utils.event.eventDefaults), event, {
          // Keep the event ids scoped to this calendar instance.
          _eid: "".concat(_this4._uid, "_").concat(_this4.eventIdIncrement++),
          segments: multipleDays ? {} : null,
          start: start,
          startTimeMinutes: startTimeMinutes,
          end: end,
          endTimeMinutes: endTimeMinutes,
          daysCount: multipleDays ? ud.countDays(start, end) : 1,
          class: event.class
        });

        _this4.mutableEvents.push(event);
      });
    },

    /**
     * Get the number of minutes from the top to the mouse cursor.
     *
     * @param {Object} e the native DOM event object.
     * @return {Object} containing { minutes: {Number}, cursorCoords: { x: {Number}, y: {Number} } }
     */
    minutesAtCursor: function minutesAtCursor(e) {
      return this.utils.cell.minutesAtCursor(e);
    },

    /**
     * Creates a new event in vue-cal memory (in the mutableEvents array) starting at the given date & time.
     * Proxy method to allow call from cell click & hold or external call (via $refs).
     * Notes: Event duration is by default 2 hours. You can override the event end through eventOptions.
     *
     * @param {String | Date} dateTime date & time at which the event will start.
     * @param {Number} duration the event duration in minutes.
     * @param {Object} eventOptions an object of options to override the event creation defaults.
     *                              (can be any key allowed in an event object)
     * @return {Object} the created event.
     */
    createEvent: function createEvent(dateTime, duration) {
      var eventOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.utils.event.createAnEvent(dateTime, duration, eventOptions);
    },

    /**
     * Remove all the vue-cal private vars from the event (before returning it through $emit()).
     *
     * @param {Object} event the event object to cleanup.
     */
    cleanupEvent: function cleanupEvent(event) {
      event = Object(objectSpread2["a" /* default */])({}, event); // Delete vue-cal specific props instead of returning a set of props so user
      // can place whatever they want inside an event and see it returned.

      var discardProps = ['segments', 'deletable', 'deleting', 'titleEditable', 'resizable', 'resizing', 'draggable', 'dragging', 'draggingStatic', 'focused'];
      discardProps.forEach(function (prop) {
        if (prop in event) delete event[prop];
      });
      if (!event.repeat) delete event.repeat; // If empty we don't need it.

      return event;
    },

    /**
     * Emits an event (custom DOM event) to the outside world.
     * This event has an event name and a clean calendar event as a parameter.
     *
     * @param {String} eventName the name of the custom emitted event (e.g. `event-focus`).
     * @param {Object} event the event to return to the outside world.
     */
    emitWithEvent: function emitWithEvent(eventName, event) {
      this.$emit(eventName, this.cleanupEvent(event));
    },

    /**
     * Update the selected date:
     * - on created, from given selectedDate prop
     * - on click/dblClick of another cell
     * - from external call (via $refs)
     * - when the given selectedDate prop changes.
     * If date is not in the view, the view will change to show it.
     *
     * @param {String | Date} date The date to select.
     */
    updateSelectedDate: function updateSelectedDate(date) {
      if (date && typeof date === 'string') date = this.utils.date.stringToDate(date);else date = new Date(date); // Clone to keep original untouched.

      if (date && date instanceof Date) {
        var selectedDate = this.view.selectedDate;
        if (selectedDate) this.transitionDirection = selectedDate.getTime() > date.getTime() ? 'left' : 'right'; // Select the day at midnight in order to allow fetching events on whole day.
        // Setting milliseconds to 0 is critical as well for timestamp comparison.

        date.setHours(0, 0, 0, 0);
        if (!selectedDate || selectedDate.getTime() !== date.getTime()) this.view.selectedDate = date;
        this.switchView(this.view.id);
      }
    },

    /**
     * Double checks the week number is correct. Read bellow to understand!
     * this is a wrapper around the `getWeek()` function for performance:
     * As this is called multiple times from the template and cannot be in computed since there is
     * a parameter, this wrapper function avoids the `getWeek()` function call 5 times out of 6
     * using the computed `firstCellDateWeekNumber`.
     *
     * Reason why:
     * Getting the week number is not that straightforward as there might be a 53rd week in the year.
     * Whenever the year starts on a Thursday or any leap year starting on a Wednesday, this week will be 53.
     *
     * @param {Number} weekFromFirstCell Number from 0 to 6.
     */
    getWeekNumber: function getWeekNumber(weekFromFirstCell) {
      var ud = this.utils.date;
      var firstCellWeekNumber = this.firstCellDateWeekNumber;
      var currentWeekNumber = firstCellWeekNumber + weekFromFirstCell;
      var modifier = this.startWeekOnSunday ? 1 : 0;

      if (currentWeekNumber > 52) {
        return ud.getWeek(ud.addDays(this.view.firstCellDate, 7 * weekFromFirstCell + modifier));
      } else return currentWeekNumber;
    },

    /**
     * Only if watchRealTime is true.
     * Pull the current time from user machine every minute to keep vue-cal accurate even when idle.
     * This will redraw the now line every minute and ensure that Today's date is always accurate.
     */
    timeTick: function timeTick() {
      // Updating `now` will re-trigger the computed `todaysTimePosition` in cell.vue.
      this.now = new Date();
      this.timeTickerIds[1] = setTimeout(this.timeTick, 60 * 1000); // Every minute.
    },

    /**
     * Updates the localized texts in use in the Date prototypes. (E.g. new Date().format())
     * Callable from outside of Vue Cal.
     */
    updateDateTexts: function updateDateTexts() {
      this.utils.date.updateTexts(this.texts);
    },

    /**
     * On Windows devices, the .vuecal__bg's vertical scrollbar takes space and pushes the content.
     * This function will also push the weekdays-headings and all-day bar to have them properly aligned.
     * The calculated style will be placed in the docment head in a style tag so it's only done once
     * (the scrollbar width never changes).
     * Ref. https://github.com/antoniandre/vue-cal/issues/221
     */
    alignWithScrollbar: function alignWithScrollbar() {
      // If already done from another instance, exit.
      if (document.getElementById('vuecal-align-with-scrollbar')) return;
      var bg = this.$refs.vuecal.getElementsByClassName('vuecal__scrollbar-check')[0];
      var scrollbarWidth = bg.offsetWidth - bg.children[0].offsetWidth; // Only add a style tag once and if a scrollbar width is detected.

      if (scrollbarWidth) {
        var style = document.createElement('style');
        style.id = 'vuecal-align-with-scrollbar';
        style.type = 'text/css';
        style.innerHTML = ".vuecal__weekdays-headings,.vuecal__all-day {padding-right: ".concat(scrollbarWidth, "px}");
        document.head.appendChild(style);
      }
    },

    /**
     * Tells wether there are events in the given cell or split and returns a Boolean.
     * This function simplifies the template.
     *
     * @param {Array} events The cell events.
     * @param {Object|Boolean} split The current split object if any or false.
     * @return {Boolean} true if there are events, false otherwise.
     */
    cellOrSplitHasEvents: function cellOrSplitHasEvents(events) {
      var split = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return events.length && (!split && events.length || split && events.some(function (e) {
        return e.split === split.id;
      }));
    }
  },
  created: function created() {
    this.utils.cell = new cell_CellUtils(this);
    this.utils.event = new event_EventUtils(this, this.utils.date);
    this.loadLocale(this.locale);
    if (this.editEvents.drag) this.loadDragAndDrop(); // Init the array of events, then keep listening for changes in watcher.

    this.updateMutableEvents(this.events);
    this.view.id = this.currentView;
    if (this.selectedDate) this.updateSelectedDate(this.selectedDate);else {
      this.view.selectedDate = new Date();
      this.switchView(this.currentView);
    } // Timers are expensive, this should only trigger on demand.

    if (this.time && this.watchRealTime) {
      // Snap the time ticker on sharp minutes (when seconds = 0), so that we can set
      // the time ticker interval to 60 seconds and spare some function calls.
      this.timeTickerIds[0] = setTimeout(this.timeTick, (60 - this.now.getSeconds()) * 1000);
    }
  },
  mounted: function mounted() {
    var ud = this.utils.date;
    var hasTouch = ('ontouchstart' in window);
    var _this$editEvents = this.editEvents,
        resize = _this$editEvents.resize,
        drag = _this$editEvents.drag,
        create = _this$editEvents.create,
        deletable = _this$editEvents.delete,
        title = _this$editEvents.title;
    var hasEventClickHandler = this.onEventClick && typeof this.onEventClick === 'function'; // If event is editable in any way add a mouseup event handler.

    if (resize || drag || create || deletable || title || hasEventClickHandler) {
      window.addEventListener(hasTouch ? 'touchend' : 'mouseup', this.onMouseUp);
    }

    if (resize || drag || create && this.dragToCreateEvent) {
      window.addEventListener(hasTouch ? 'touchmove' : 'mousemove', this.onMouseMove, {
        passive: false
      });
    }

    if (title) window.addEventListener('keyup', this.onKeyUp); // Disable context menu on touch devices on the whole vue-cal instance.

    if (hasTouch) {
      this.$refs.vuecal.oncontextmenu = function (e) {
        e.preventDefault();
        e.stopPropagation();
      };
    } // https://github.com/antoniandre/vue-cal/issues/221


    if (!this.hideBody) this.alignWithScrollbar(); // Emit the `ready` event with useful parameters.

    var startDate = this.view.startDate;

    var params = Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
      view: this.view.id,
      startDate: startDate,
      endDate: this.view.endDate
    }, this.isMonthView ? {
      firstCellDate: this.view.firstCellDate,
      lastCellDate: this.view.lastCellDate
    } : {}), {}, {
      events: this.view.events.map(this.cleanupEvent)
    }, this.isWeekView ? {
      week: ud.getWeek(this.startWeekOnSunday ? ud.addDays(startDate, 1) : startDate)
    } : {});

    this.$emit('ready', params);
    this.ready = true;
  },
  beforeDestroy: function beforeDestroy() {
    var hasTouch = ('ontouchstart' in window);
    window.removeEventListener(hasTouch ? 'touchmove' : 'mousemove', this.onMouseMove, {
      passive: false
    });
    window.removeEventListener(hasTouch ? 'touchend' : 'mouseup', this.onMouseUp);
    window.removeEventListener('keyup', this.onKeyUp); // Don't keep the ticking running if unused.

    if (this.timeTickerIds[0]) clearTimeout(this.timeTickerIds[0]);
    if (this.timeTickerIds[1]) clearTimeout(this.timeTickerIds[1]);
    this.timeTickerIds = [null, null];
  },
  computed: {
    editEvents: function editEvents() {
      if (this.editableEvents && _typeof(this.editableEvents) === 'object') {
        return {
          title: !!this.editableEvents.title,
          drag: !!this.editableEvents.drag,
          resize: !!this.editableEvents.resize,
          create: !!this.editableEvents.create,
          delete: !!this.editableEvents.delete
        };
      }

      return {
        title: !!this.editableEvents,
        drag: !!this.editableEvents,
        resize: !!this.editableEvents,
        create: !!this.editableEvents,
        delete: !!this.editableEvents
      };
    },
    views: function views() {
      return {
        years: {
          label: this.texts.years,
          enabled: !this.disableViews.includes('years')
        },
        year: {
          label: this.texts.year,
          enabled: !this.disableViews.includes('year')
        },
        month: {
          label: this.texts.month,
          enabled: !this.disableViews.includes('month')
        },
        week: {
          label: this.texts.week,
          enabled: !this.disableViews.includes('week')
        },
        day: {
          label: this.texts.day,
          enabled: !this.disableViews.includes('day')
        }
      };
    },
    currentView: function currentView() {
      return this.validateView(this.activeView);
    },
    enabledViews: function enabledViews() {
      var _this5 = this;

      return Object.keys(this.views).filter(function (view) {
        return _this5.views[view].enabled;
      });
    },
    hasTimeColumn: function hasTimeColumn() {
      return this.time && this.isWeekOrDayView;
    },
    isShortMonthView: function isShortMonthView() {
      return this.isMonthView && this.eventsOnMonthView === 'short';
    },
    firstCellDateWeekNumber: function firstCellDateWeekNumber() {
      var ud = this.utils.date;
      var date = this.view.firstCellDate;
      return ud.getWeek(this.startWeekOnSunday ? ud.addDays(date, 1) : date);
    },
    // For week & day views.
    timeCells: function timeCells() {
      var timeCells = [];

      for (var i = this.timeFrom, max = this.timeTo; i < max; i += this.timeStep) {
        timeCells.push({
          hours: Math.floor(i / 60),
          minutes: i % 60,
          label: this.utils.date.formatTime(i, this.TimeFormat),
          // The texts (3rd param) are given on Vue Cal init.
          value: i
        });
      }

      return timeCells;
    },
    TimeFormat: function TimeFormat() {
      return this.timeFormat || (this.twelveHour ? 'h:mm{am}' : 'HH:mm');
    },
    // Filter out the day splits that are hidden.
    daySplits: function daySplits() {
      return (this.splitDays.filter(function (item) {
        return !item.hide;
      }) || []).map(function (item, i) {
        return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, item), {}, {
          id: item.id || i + 1
        });
      }) // Make sure there's always an id.
      ;
    },
    // Whether the current view has days splits.
    hasSplits: function hasSplits() {
      return this.daySplits.length && this.isWeekOrDayView;
    },
    hasShortEvents: function hasShortEvents() {
      return this.showAllDayEvents === 'short';
    },
    // Returns the min cell width or the min split width if any.
    cellOrSplitMinWidth: function cellOrSplitMinWidth() {
      var minWidth = null;
      if (this.hasSplits && this.minSplitWidth) minWidth = this.visibleDaysCount * this.minSplitWidth * this.daySplits.length;else if (this.minCellWidth && this.isWeekView) minWidth = this.visibleDaysCount * this.minCellWidth;
      return minWidth;
    },
    allDayBar: function allDayBar() {
      var height = this.allDayBarHeight || null;
      if (height && !isNaN(height)) height += 'px';
      return {
        cells: this.viewCells,
        options: this.$props,
        label: this.texts.allDay,
        shortEvents: this.hasShortEvents,
        daySplits: this.hasSplits && this.daySplits || [],
        cellOrSplitMinWidth: this.cellOrSplitMinWidth,
        height: height
      };
    },
    minTimestamp: function minTimestamp() {
      var date = null;
      if (this.minDate && typeof this.minDate === 'string') date = this.utils.date.stringToDate(this.minDate);else if (this.minDate && this.minDate instanceof Date) date = this.minDate;
      return date ? date.getTime() : null;
    },
    maxTimestamp: function maxTimestamp() {
      var date = null;
      if (this.maxDate && typeof this.maxDate === 'string') date = this.utils.date.stringToDate(this.maxDate);else if (this.maxDate && this.minDate instanceof Date) date = this.maxDate;
      return date ? date.getTime() : null;
    },
    weekDays: function weekDays() {
      var _this6 = this;

      var _this$texts = this.texts,
          weekDays = _this$texts.weekDays,
          _this$texts$weekDaysS = _this$texts.weekDaysShort,
          weekDaysShort = _this$texts$weekDaysS === void 0 ? [] : _this$texts$weekDaysS; // Do not modify original for next instances.

      weekDays = weekDays.slice(0).map(function (day, i) {
        return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({
          label: day
        }, weekDaysShort.length ? {
          short: weekDaysShort[i]
        } : {}), {}, {
          hide: _this6.hideWeekends && i >= 5 || _this6.hideWeekdays.length && _this6.hideWeekdays.includes(i + 1)
        });
      });
      if (this.startWeekOnSunday) weekDays.unshift(weekDays.pop());
      return weekDays;
    },
    weekDaysInHeader: function weekDaysInHeader() {
      return this.isMonthView || // hasSplits check is important here in case the user toggles the splits but keep minSplitWidth.
      this.isWeekView && !this.minCellWidth && !(this.hasSplits && this.minSplitWidth);
    },
    months: function months() {
      return this.texts.months.map(function (month) {
        return {
          label: month
        };
      });
    },
    // Validate and fill up the special hours object once for all at root level and not in cell.
    specialDayHours: function specialDayHours() {
      var _this7 = this;

      if (!this.specialHours || !Object.keys(this.specialHours).length) return {};
      return Array(7).fill('').map(function (cell, i) {
        var day = _this7.specialHours[i + 1] || [];
        if (!Array.isArray(day)) day = [day];
        cell = [];
        day.forEach(function (_ref, j) {
          var from = _ref.from,
              to = _ref.to,
              Class = _ref.class;
          cell[j] = {
            day: i + 1,
            from: ![null, undefined].includes(from) ? from * 1 : null,
            to: ![null, undefined].includes(to) ? to * 1 : null,
            class: Class || ''
          };
        });
        return cell;
      });
    },
    viewTitle: function viewTitle() {
      var ud = this.utils.date;
      var title = '';
      var date = this.view.startDate;
      var year = date.getFullYear();
      var month = date.getMonth();

      switch (this.view.id) {
        case 'years':
          {
            title = this.texts.years;
            break;
          }

        case 'year':
          {
            title = year;
            break;
          }

        case 'month':
          {
            title = "".concat(this.months[month].label, " ").concat(year);
            break;
          }

        case 'week':
          {
            var lastDayOfWeek = this.view.endDate; // Might be another day than Sunday, if hiding days.

            var y1 = date.getFullYear();
            var m1 = this.texts.months[date.getMonth()];
            if (this.xsmall) m1 = m1.substring(0, 3);
            var formattedMonthYear = "".concat(m1, " ").concat(y1); // If week is not ending in the same month it started in.

            if (lastDayOfWeek.getMonth() !== date.getMonth()) {
              var y2 = lastDayOfWeek.getFullYear();
              var m2 = this.texts.months[lastDayOfWeek.getMonth()];
              if (this.xsmall) m2 = m2.substring(0, 3);
              if (y1 === y2) formattedMonthYear = "".concat(m1, " - ").concat(m2, " ").concat(y1);else {
                if (this.small) formattedMonthYear = "".concat(m1.substring(0, 3), " ").concat(y1, " - ").concat(m2.substring(0, 3), " ").concat(y2);else formattedMonthYear = "".concat(m1, " ").concat(y1, " - ").concat(m2, " ").concat(y2);
              }
            }

            title = "".concat(this.texts.week, " ").concat(ud.getWeek(this.startWeekOnSunday ? ud.addDays(date, 1) : date), " (").concat(formattedMonthYear, ")");
            break;
          }

        case 'day':
          {
            title = this.utils.date.formatDate(date, this.texts.dateFormat, this.texts);
            break;
          }
      }

      return title;
    },
    viewCells: function viewCells() {
      var _this8 = this;

      var ud = this.utils.date;
      var cells = [];
      var fromYear = null;
      var todayFound = false; // If watchRealTime = true, a time ticker will keep updating this.now every minute.
      // If watchRealTime = false - and by default - update this.now value each time we rerender the cells
      // so we keep Today's date always accurate at a minimum cost and maximum performance.
      // eslint-disable-next-line

      if (!this.watchRealTime) this.now = new Date();
      var now = this.now;

      switch (this.view.id) {
        case 'years':
          {
            fromYear = this.view.startDate.getFullYear();
            cells = Array.apply(null, Array(25)).map(function (cell, i) {
              var startDate = new Date(fromYear + i, 0, 1);
              var endDate = new Date(fromYear + i + 1, 0, 1);
              endDate.setSeconds(-1); // End at 23:59:59.

              return {
                startDate: startDate,
                formattedDate: ud.formatDateLite(startDate),
                endDate: endDate,
                content: fromYear + i,
                current: fromYear + i === now.getFullYear()
              };
            });
            break;
          }

        case 'year':
          {
            fromYear = this.view.startDate.getFullYear();
            cells = Array.apply(null, Array(12)).map(function (cell, i) {
              var startDate = new Date(fromYear, i, 1);
              var endDate = new Date(fromYear, i + 1, 1);
              endDate.setSeconds(-1); // End at 23:59:59.

              return {
                startDate: startDate,
                formattedDate: ud.formatDateLite(startDate),
                endDate: endDate,
                content: _this8.xsmall ? _this8.months[i].label.substr(0, 3) : _this8.months[i].label,
                current: i === now.getMonth() && fromYear === now.getFullYear()
              };
            });
            break;
          }

        case 'month':
          {
            var month = this.view.startDate.getMonth();
            var firstCellDate = new Date(this.view.firstCellDate);
            todayFound = false; // Create 42 cells (6 rows x 7 days) and populate them with days.

            cells = Array.apply(null, Array(42)).map(function (cell, i) {
              var startDate = ud.addDays(firstCellDate, i);
              var endDate = new Date(startDate);
              endDate.setHours(23, 59, 59, 0); // End at 23:59:59.
              // To increase performance skip checking isToday if today already found.

              var isToday = !todayFound && ud.isToday(startDate) && !todayFound++;
              return {
                startDate: startDate,
                formattedDate: ud.formatDateLite(startDate),
                endDate: endDate,
                content: startDate.getDate(),
                today: isToday,
                outOfScope: startDate.getMonth() !== month,
                class: "vuecal__cell--day".concat(startDate.getDay() || 7)
              };
            });

            if (this.hideWeekends || this.hideWeekdays.length) {
              cells = cells.filter(function (cell) {
                var day = cell.startDate.getDay() || 7; // Put Sunday at position 7 instead of 0.

                return !(_this8.hideWeekends && day >= 6 || _this8.hideWeekdays.length && _this8.hideWeekdays.includes(day));
              });
            }

            break;
          }

        case 'week':
          {
            todayFound = false;
            var firstDayOfWeek = this.view.startDate;
            var weekDays = this.weekDays;
            cells = weekDays.map(function (cell, i) {
              var startDate = ud.addDays(firstDayOfWeek, i);
              var endDate = new Date(startDate);
              endDate.setHours(23, 59, 59, 0); // End at 23:59:59.

              var dayOfWeek = (startDate.getDay() || 7) - 1; // Day of the week from 0 to 6 with 6 = Sunday.

              return {
                startDate: startDate,
                formattedDate: ud.formatDateLite(startDate),
                endDate: endDate,
                // To increase performance skip checking isToday if today already found.
                today: !todayFound && ud.isToday(startDate) && !todayFound++,
                specialHours: _this8.specialDayHours[dayOfWeek] || []
              };
            }).filter(function (cell, i) {
              return !weekDays[i].hide;
            });
            break;
          }

        case 'day':
          {
            var startDate = this.view.startDate;
            var endDate = new Date(this.view.startDate);
            endDate.setHours(23, 59, 59, 0); // End at 23:59:59.

            var dayOfWeek = (startDate.getDay() || 7) - 1; // Day of the week from 0 to 6 with 6 = Sunday.

            cells = [{
              startDate: startDate,
              formattedDate: ud.formatDateLite(startDate),
              endDate: endDate,
              today: ud.isToday(startDate),
              specialHours: this.specialDayHours[dayOfWeek] || []
            }];
            break;
          }
      }

      return cells;
    },
    // Only when hiding weekdays on month and week views.
    visibleDaysCount: function visibleDaysCount() {
      if (this.isDayView) return 1;
      return 7 - this.weekDays.reduce(function (total, day) {
        return total + day.hide;
      }, 0);
    },
    cellWidth: function cellWidth() {
      return 100 / this.visibleDaysCount;
    },
    cssClasses: function cssClasses() {
      var _ref2;

      var _this$domEvents4 = this.domEvents,
          resizeAnEvent = _this$domEvents4.resizeAnEvent,
          dragAnEvent = _this$domEvents4.dragAnEvent,
          dragCreateAnEvent = _this$domEvents4.dragCreateAnEvent;
      return _ref2 = {}, Object(defineProperty["a" /* default */])(_ref2, "vuecal--".concat(this.view.id, "-view"), true), Object(defineProperty["a" /* default */])(_ref2, "vuecal--".concat(this.locale), this.locale), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--no-time', !this.time), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--view-with-time', this.hasTimeColumn), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--week-numbers', this.showWeekNumbers && this.isMonthView), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--twelve-hour', this.twelveHour), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--click-to-navigate', this.clickToNavigate), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--hide-weekends', this.hideWeekends), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--split-days', this.hasSplits), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--sticky-split-labels', this.hasSplits && this.stickySplitLabels), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--overflow-x', this.minCellWidth && this.isWeekView || this.hasSplits && this.minSplitWidth), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--small', this.small), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--xsmall', this.xsmall), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--resizing-event', resizeAnEvent._eid), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--drag-creating-event', dragCreateAnEvent.event), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--dragging-event', dragAnEvent._eid), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--events-on-month-view', this.eventsOnMonthView), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--short-events', this.isMonthView && this.eventsOnMonthView === 'short'), Object(defineProperty["a" /* default */])(_ref2, 'vuecal--has-touch', typeof window !== 'undefined' && 'ontouchstart' in window), _ref2;
    },
    isYearsOrYearView: function isYearsOrYearView() {
      return ['years', 'year'].includes(this.view.id);
    },
    isYearsView: function isYearsView() {
      return this.view.id === 'years';
    },
    isYearView: function isYearView() {
      return this.view.id === 'year';
    },
    isMonthView: function isMonthView() {
      return this.view.id === 'month';
    },
    isWeekOrDayView: function isWeekOrDayView() {
      return ['week', 'day'].includes(this.view.id);
    },
    isWeekView: function isWeekView() {
      return this.view.id === 'week';
    },
    isDayView: function isDayView() {
      return this.view.id === 'day';
    }
  },
  watch: {
    events: {
      // To be able to detect an event attribute change, it has to be first initialized with a value.
      handler: function handler(events, oldEvents) {
        this.updateMutableEvents(events);
        this.addEventsToView();
      },
      deep: true
    },
    locale: function locale(_locale) {
      this.loadLocale(_locale);
    },
    selectedDate: function selectedDate(date) {
      this.updateSelectedDate(date);
    },
    activeView: function activeView(newVal) {
      this.switchView(newVal);
    }
  }
});
// CONCATENATED MODULE: ./src/vue-cal/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_calvue_type_script_lang_js_ = (vue_calvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/vue-cal/index.vue





/* normalize component */

var vue_cal_component = normalizeComponent(
  src_vue_calvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_cal = (vue_cal_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vue_cal);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __nested_webpack_require_405471__) {

"use strict";

var $ = __nested_webpack_require_405471__("23e7");
var global = __nested_webpack_require_405471__("da84");
var isArray = __nested_webpack_require_405471__("e8b5");
var isConstructor = __nested_webpack_require_405471__("68ee");
var isObject = __nested_webpack_require_405471__("861d");
var toAbsoluteIndex = __nested_webpack_require_405471__("23cb");
var lengthOfArrayLike = __nested_webpack_require_405471__("07fa");
var toIndexedObject = __nested_webpack_require_405471__("fc6a");
var createProperty = __nested_webpack_require_405471__("8418");
var wellKnownSymbol = __nested_webpack_require_405471__("b622");
var arrayMethodHasSpeciesSupport = __nested_webpack_require_405471__("1dde");
var un$Slice = __nested_webpack_require_405471__("f36a");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __nested_webpack_require_407570__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __nested_webpack_require_407570__("44ad");
var requireObjectCoercible = __nested_webpack_require_407570__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fce3":
/***/ (function(module, exports, __nested_webpack_require_407907__) {

var fails = __nested_webpack_require_407907__("d039");
var global = __nested_webpack_require_407907__("da84");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __nested_webpack_require_409151__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __nested_webpack_require_409151__("4930");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ })["default"];

/***/ }),

/***/ "./resources/js/components/Poll/CreatePoll.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Poll/CreatePoll.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreatePoll_vue_vue_type_template_id_9c8753a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatePoll.vue?vue&type=template&id=9c8753a0& */ "./resources/js/components/Poll/CreatePoll.vue?vue&type=template&id=9c8753a0&");
/* harmony import */ var _CreatePoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreatePoll.vue?vue&type=script&lang=js& */ "./resources/js/components/Poll/CreatePoll.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreatePoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreatePoll_vue_vue_type_template_id_9c8753a0___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreatePoll_vue_vue_type_template_id_9c8753a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Poll/CreatePoll.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Poll/CreatePoll.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Poll/CreatePoll.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreatePoll.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Poll/CreatePoll.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePoll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Poll/CreatePoll.vue?vue&type=template&id=9c8753a0&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Poll/CreatePoll.vue?vue&type=template&id=9c8753a0& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePoll_vue_vue_type_template_id_9c8753a0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePoll_vue_vue_type_template_id_9c8753a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreatePoll_vue_vue_type_template_id_9c8753a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreatePoll.vue?vue&type=template&id=9c8753a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Poll/CreatePoll.vue?vue&type=template&id=9c8753a0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Poll/CreatePoll.vue?vue&type=template&id=9c8753a0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Poll/CreatePoll.vue?vue&type=template&id=9c8753a0& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._l(_vm.notifmsg, function (errorArray, idx) {
        return _c(
          "div",
          { key: idx },
          _vm._l(errorArray, function (allErrors, idx) {
            return _c("div", { key: idx }, [
              _c("span", { staticClass: "text-danger" }, [
                _vm._v(_vm._s(allErrors) + " "),
              ]),
            ])
          }),
          0
        )
      }),
      _vm._v(" "),
      _vm.currentStep == 1
        ? _c("div", { staticClass: "container py-5" }, [
            _c("h2", { staticClass: "text-center" }, [
              _vm._v("Create Group Poll"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row border p-5 mt-5" }, [
              _c("div", { staticClass: "col-12 mb-4" }, [
                _c("label", [_vm._v("Title")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.poll_data.title,
                      expression: "poll_data.title",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: "What is the occassion about?",
                  },
                  domProps: { value: _vm.poll_data.title },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.poll_data, "title", $event.target.value)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 mb-4" }, [
                _c("label", [_vm._v("Description")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.poll_data.description,
                      expression: "poll_data.description ",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "",
                    placeholder: "Here you can provide details of meeting",
                  },
                  domProps: { value: _vm.poll_data.description },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.poll_data,
                        "description",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 mb-4" }, [
                _c("label", [_vm._v("Location")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.poll_data.location,
                      expression: "poll_data.location",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    placeholder: "Where will this meeting happen?",
                  },
                  domProps: { value: _vm.poll_data.location },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.poll_data, "location", $event.target.value)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 mb-4 mt-5 text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.goToStep(2)
                      },
                    },
                  },
                  [_vm._v("Choose Meeting Time(s)")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { id: "sendPollBtn" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.createPoll.apply(null, arguments)
                      },
                    },
                  },
                  [_vm._v("Send Poll")]
                ),
              ]),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.currentStep == 2
        ? _c("div", { staticClass: "container py-5" }, [
            _c("h2", { staticClass: "text-center" }, [
              _vm._v("Set Up Meeting Time(s)"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row border p-5 mt-5" }, [
              _c("div", { staticClass: "col-12 mb-4" }, [
                _c("label", [_vm._v("Main Stakeholders")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.poll_data.main_stakeholders,
                      expression: "poll_data.main_stakeholders",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "",
                    placeholder:
                      "Copy and Paste Email address  of the main stakeholder or enter manually  seperated by (;)",
                  },
                  domProps: { value: _vm.poll_data.main_stakeholders },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.poll_data,
                        "main_stakeholders",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 mb-4" }, [
                _c("label", [_vm._v("Other Stakeholders")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.poll_data.other_stakeholders,
                      expression: "poll_data.other_stakeholders",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "",
                    placeholder:
                      "Copy and Paste Email address  of the main stakeholder or enter manually  seperated by (;)",
                  },
                  domProps: { value: _vm.poll_data.other_stakeholders },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.poll_data,
                        "other_stakeholders",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mb-4" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-lg-4 mb-3" }, [
                  _c("label", [_vm._v("Start")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.poll_data.meeting_start_range,
                        expression: "poll_data.meeting_start_range",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "" },
                    domProps: { value: _vm.poll_data.meeting_start_range },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.poll_data,
                          "meeting_start_range",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-lg-4 mb-3" }, [
                  _c("label", [_vm._v("End")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.poll_data.meeting_end_range,
                        expression: "poll_data.meeting_end_range",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "" },
                    domProps: { value: _vm.poll_data.meeting_end_range },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.poll_data,
                          "meeting_end_range",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 mb-4" }, [
                _c("label", [_vm._v("Duration of Meeting")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.poll_data.duration,
                        expression: "poll_data.duration",
                      },
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.poll_data,
                          "duration",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [_c("option", [_vm._v("Select")])]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 mb-4" }, [
                _c("label", [_vm._v("Choose  number  of  entries: ")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.poll_data.no_of_entries,
                        expression: "poll_data.no_of_entries",
                      },
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.poll_data,
                          "no_of_entries",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [_c("option", [_vm._v("Select")])]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mb-4" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-lg-4 mb-3" }, [
                  _c("label", [_vm._v("Date")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.poll_data.deadline_date_for_response,
                        expression: "poll_data.deadline_date_for_response",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "" },
                    domProps: {
                      value: _vm.poll_data.deadline_date_for_response,
                    },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.poll_data,
                          "deadline_date_for_response",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-lg-4 mb-3" }, [
                  _c("label", [_vm._v("Time")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.poll_data.deadline_time_for_response,
                        expression: "poll_data.deadline_time_for_response",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "" },
                    domProps: {
                      value: _vm.poll_data.deadline_time_for_response,
                    },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.poll_data,
                          "deadline_time_for_response",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _vm._m(6),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 mb-4 mt-5 text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary me-4",
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.goToStep(1)
                      },
                    },
                  },
                  [_vm._v("Back")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.goToStep(3)
                      },
                    },
                  },
                  [_vm._v("Choose Poll Time(s)")]
                ),
              ]),
            ]),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.currentStep == 3
        ? _c(
            "div",
            { staticClass: "container py-5" },
            [
              _c("vue-cal", {
                attrs: {
                  "time-from": 8 * 60,
                  "time-to": 19 * 60,
                  "time-step": 30,
                  "disable-views": ["years", "year", "month"],
                },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 mb-4 mt-5 text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary me-4",
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.goToStep(2)
                      },
                    },
                  },
                  [_vm._v("Back")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { id: "sendPollBtn" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.createPoll.apply(null, arguments)
                      },
                    },
                  },
                  [_vm._v("Send Poll")]
                ),
              ]),
            ],
            1
          )
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-4" }, [
      _c("label", [_vm._v("Attach Agenda")]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "file", id: "formFile" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-5" }, [
      _c("div", { staticClass: "form-check" }, [
        _c("input", {
          staticClass: "form-check-input",
          attrs: { type: "checkbox", value: "", id: "flexCheckDefault" },
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "form-check-label",
            attrs: { for: "flexCheckDefault" },
          },
          [
            _vm._v(
              "\n                        Video Conferencing\n                    "
            ),
          ]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-4" }, [
      _c("button", { staticClass: "btn btn-primary float-end" }, [
        _vm._v("Verify Email Address"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-4 mb-3" }, [
      _c("label", { staticClass: "mt-1", attrs: { for: "" } }, [
        _vm._v("Meeting date range"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-4 mb-3" }, [
      _c("label", { staticClass: "mt-1", attrs: { for: "" } }, [
        _vm._v("Deadline For Response"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-5" }, [
      _c("div", { staticClass: "form-check" }, [
        _c("input", {
          staticClass: "form-check-input",
          attrs: { type: "checkbox", value: "", id: "flexCheckDefault" },
        }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "form-check-label",
            attrs: { for: "flexCheckDefault" },
          },
          [
            _vm._v(
              "\n                        Video Conferencing\n                    "
            ),
          ]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-4 mt-5" }, [
      _c("label", { attrs: { for: "" } }, [_vm._v("Add Calender(s)")]),
      _vm._v(" "),
      _c("button", { staticClass: "btn btn-primary" }, [
        _vm._v("Connect to calender"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);