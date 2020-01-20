var LCMS=LCMS||{};(function(n){LCMS.Modal={primaryButtonClass:n("html").hasClass("lcms-admin")?"btn-primary":"primary",defaultButtonClass:n("html").hasClass("lcms-admin")?"lcms-btn":"lcms-button",show:function(t,i){function l(t,i){var u=n("<div class='lcms-modal-overlay'></div>"),r=u[0];return r.$content=n(t),r.$contentParent=r.$content.parent(),r.settings=n.extend({buttons:{OK:null},onAfterEndModal:null,onBeforeEndModal:null,onClose:null,defaultButton:"OK",modalClass:"",overwriteModalClass:!1,parent:"body",title:""},i),r.settings.parent=n.isFunction(r.settings.parent)?r.settings.parent.apply(r.$content):n(r.settings.parent),r.contentCss=r.$content.hasClass("hidden")?"hidden":"",r.contentCss=(r.contentCss+(r.$content.hasClass("hide")?" hide":"")).trim(),r.$content.removeClass("hidden hide"),r.contentHiddenByStyle=r.$content.is(":hidden"),r.contentHiddenByStyle&&r.$content.show(),u}function a(){var t=n("<div class='lcms-modal' role='dialog'><div class='lcms-modal-title'><button class='close'>X</button><h3 /></div><div class='lcms-modal-content' /></div>"),f,o,i,u;r.settings.overwriteModalClass&&t.removeClass(),t.addClass(r.settings.modalClass),f=n(".lcms-modal-title h3",t),f.html(r.settings.title||r.$content.attr("title")),o=t.find(".lcms-modal-title .close");o.on("click",function(){LCMS.Modal._endModal(e,r.settings.onClose)});return i=t.find(".lcms-modal-content"),r.$content.appendTo(i),u=v(),u.appendTo(t),t.appendTo(e)}function v(){var t=n('<div class="lcms-modal-button-bar"></div>');return n.each(r.settings.buttons,function(i,u){var f=n('<button class="'+LCMS.Modal.defaultButtonClass+'">'+i+"</button>"),o,s;i===r.settings.defaultButton&&f.addClass(LCMS.Modal.primaryButtonClass),o=u&&u.className?u.className:null,s=u&&u.callback?u.callback:u,o&&f.addClass(o),f.click(function(){LCMS.Modal._endModal(e,s)}),t.append(f)}),t}function h(){var t=n("a,button,input,select,textarea",u).not(":hidden").not(function(){return this.tabIndex&&this.tabIndex>-1});return{all:t,first:t.first(),last:t.last()}}function s(t){setTimeout(function(){n(t).trigger("focus.lcms_modal")},0)}function o(){f||(f=n(".lcms-autofocus,[autofocus]",u).get(0)),f||(f=n(".lcms-modal-default-button",u).get(0)),f||(f=h().first.get(0)),s(f)}function c(){n("html").addClass("suppress-default-esc-action"),e.addClass("visible"),e.appendTo(r.settings.parent),o()}var e=l(t,i),r=e[0],u=a(),f=null;e.on("mousedown.lcms_modal",function(n){u.has(n.target).length===0&&(o(),n.preventDefault())});u.on("keydown.lcms_modal",function(t){if(t.isDefaultPrevented())return;if(t.keyCode&&t.keyCode!==27){if(t.keyCode===13)n(t.target).is(":button")||(t.preventDefault(),n("."+LCMS.Modal.defaultButtonClass+"."+LCMS.Modal.primaryButtonClass,u).click());else if(t.keyCode===9){var i=h();t.shiftKey||t.target!==u[0]&&t.target!==i.last[0]?t.shiftKey&&(t.target===i.first[0]||t.target===u[0])&&(s(i.last),t.preventDefault()):(s(i.first),t.preventDefault())}}else t.preventDefault(),LCMS.Modal._endModal(e,r.settings.onClose)});n(document).off(".lcms_modal");n(document).on("focusin.lcms_modal",function(n){u.has(n.target).length?f=n.target:(o(),n.preventDefault())});c()},hide:function(t){var i=n(t).parents(".lcms-modal-overlay").first();LCMS.Modal._endModal(i)},_endModal:function(t,i){var f=n(t),r=f[0],u;if((!n.isFunction(i)||i(r.$content[0])!==!1)&&(!n.isFunction(r.settings.onBeforeEndModal)||r.settings.onBeforeEndModal(r.$content[0])!==!1)){LCMS.Modal._hideModal(f),r.$contentParent&&r.$contentParent.length>0&&(r.$content.appendTo(r.$contentParent),r.$content.addClass(r.contentCss),r.contentHiddenByStyle&&r.$content.hide());if(n.isFunction(r.settings.onAfterEndModal))r.settings.onAfterEndModal(r.$content[0]);u=f.parents(".lcms-modal-overlay"),u.length===0&&(u=n(".lcms-modal-overlay")),u.trigger("mousedown.lcms_modal"),f.remove()}},_hideModal:function(t){t.removeClass("visible"),n(document).off(".lcms_modal"),setTimeout(function(){n("html").removeClass("suppress-default-esc-action")},250)}}})(LCMS.jq)