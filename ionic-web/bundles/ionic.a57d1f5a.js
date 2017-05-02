Ionic.loadComponents("a57d1f5a",function(t,e,o){var i=function(){function t(){}return t.prototype.changed=function(t){o.emit(this,"ionChange",{detail:{checked:t}})},t.prototype.canStart=function(){return!this.disabled},t.prototype.onDragStart=function(t){this.startX=t.startX,this.fireFocus()},t.prototype.onDragMove=function(t){this.checked?t.currentX+15<this.startX&&(this.checked=!1,this.activated=!0,this.startX=t.currentX):t.currentX-15>this.startX&&(this.checked=!0,this.activated=t.currentX<this.startX+5,this.startX=t.currentX)},t.prototype.onDragEnd=function(t){this.checked?t.startX+4>t.currentX&&(this.checked=!1):t.startX-4<t.currentX&&(this.checked=!0),this.activated=!1,this.fireBlur(),this.startX=null},t.prototype.onSpace=function(t){this.toggle(),t.stopPropagation(),t.preventDefault()},t.prototype.toggle=function(){this.disabled||(this.checked=!this.checked,this.fireFocus())},t.prototype.fireFocus=function(){this.hasFocus||(this.hasFocus=!0,o.emit(this,"ionFocus"))},t.prototype.fireBlur=function(){this.hasFocus&&(this.hasFocus=!1,o.emit(this,"ionBlur"))},t.prototype.render=function(){return e(this,e("ion-gesture",o.theme(this,"toggle",{class:{"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled},props:{canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),onPress:this.toggle.bind(this),gestureName:"toggle",gesturePriority:30,type:"pan,press",direction:"x",threshold:20,listenOn:"parent"}}),[e("div.toggle-icon",e("div.toggle-inner")),e("div.toggle-cover",{attrs:{id:this.id,"aria-checked":!!this.checked&&"true","aria-disabled":!!this.disabled&&"true","aria-labelledby":this.labelId,role:"checkbox",tabindex:0}})]))},t}();t.Toggle=i},["ion-toggle","Toggle",[["onSpace","keydown.space",0,0,1]],[["checked","changed"]],1,1,':host,ion-toggle{display:inline-block;visibility:inherit!important;contain:content}ion-gesture{display:block;visibility:inherit!important}.toggle-cover{position:absolute;top:0;left:0;width:100%;height:100%;border:0;background:0 0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;cursor:pointer;outline:0}.toggle-ios{position:relative;width:51px;height:32px;box-sizing:content-box;contain:strict}.toggle-ios .toggle-icon{position:relative;display:block;width:100%;height:100%;border-radius:16px;background-color:#e6e6e6;transition:background-color .3s;pointer-events:none}.toggle-ios .toggle-icon::before{position:absolute;top:2px;right:2px;bottom:2px;left:2px;border-radius:16px;background-color:#fff;content:"";transform:scale3d(1,1,1);transition:transform .3s}.toggle-ios .toggle-inner{position:absolute;top:2px;left:2px;width:28px;height:28px;border-radius:14px;background-color:#fff;box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);transition:transform .3s,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms;will-change:transform;contain:strict}.toggle-ios.toggle-checked .toggle-icon{background-color:#327eff}.toggle-ios.toggle-activated .toggle-icon::before,.toggle-ios.toggle-checked .toggle-icon::before{transform:scale3d(0,0,0)}.toggle-ios.toggle-checked .toggle-inner{transform:translate3d(19px,0,0)}.toggle-ios.toggle-activated.toggle-checked .toggle-inner::before{transform:scale3d(0,0,0)}.toggle-ios.toggle-activated .toggle-inner{width:34px}.toggle-ios.toggle-activated.toggle-checked .toggle-inner{left:-4px}.item-ios.item-toggle-disabled ion-label,.toggle-ios.toggle-disabled{opacity:.3;pointer-events:none}.item-ios .toggle-ios{margin:0;padding:6px 8px 5px 16px}.item-ios .toggle-ios[item-left]{padding:6px 16px 5px 0}.toggle-ios-primary.toggle-checked .toggle-icon{background-color:#327eff}.toggle-ios-secondary.toggle-checked .toggle-icon{background-color:#32db64}.toggle-ios-danger.toggle-checked .toggle-icon{background-color:#f53d3d}.toggle-ios-light.toggle-checked .toggle-icon{background-color:#f4f4f4}.toggle-ios-dark.toggle-checked .toggle-icon{background-color:#222}']);