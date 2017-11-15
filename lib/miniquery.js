'use strict'
/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
let SweetSelector = {
	select : function(params){
		return document.querySelectorAll(params)
	}
}
/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

let DOM = {
	hide : function(params){
		SweetSelector.select(params).forEach(element => {
			element.setAttribute("style", "display:none")
		})
	},
	show : function(params){
		SweetSelector.select(params).forEach(element => {
			element.removeAttribute("style")
		})
	},
	removeClass : function(params, style){
		return document.querySelector(params).classList.remove(style);
	},
	addClass : function(params, style){
		return document.querySelector(params).classList.add(style);
	}
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
let EventDispatcher = {
	on : function(params, event, call){
			addEventListener(params, event)
			call()
		}
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
let AjaxWrapper = {
	request : function(obj){
		let xhr = new XMLHttpRequest();
		
		xhr.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200	){
				if(obj.hasOwnProperty('success')) {
          	obj.success(this.responseText);
        	}
			}
			else{
        	if(obj.hasOwnProperty('fail')) {
          	obj.fail();
        	}
      }
		}
		xhr.open(obj.type, obj.url, true);
		xhr.send();
	}
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
class Miniquery{
		constructor(param){
			this.params = SweetSelector.select(param)
		}

		hide(){
			this.params.forEach(element => {
				element.setAttribute("style", "display:none")
			})
		}

		show(){
			this.params.forEach(element => {
				element.removeAttribute("style")
			})
		}

		addClass(style){
			this.params.forEach(element => {
				element.classList.add(style)
			})
		}

		removeClass(style){
			this.params.forEach(element => {
				element.classList.remove(style)
			})
		}

		on(style, cb){
			this.params.forEach(element => {
				element.addEventListener(element, style)
				cb()
			})
		}

		static ajax(obj){
			let xhr = new XMLHttpRequest();
			
			xhr.onreadystatechange = function(){
					if(this.readyState == 4 && this.status == 200	){
						if(obj.hasOwnProperty('success')) {
		          	obj.success(this.responseText);
		        	}
					}
					else{
		        	if(obj.hasOwnProperty('fail')) {
		          	obj.fail();
		        	}
		      }
				}
				xhr.open(obj.type, obj.url, true);
				xhr.send();
			}
}

const miniquery = function(param){
	return new Miniquery(param)
}