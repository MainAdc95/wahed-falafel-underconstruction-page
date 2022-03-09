(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3668)}])},3668:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var n=r(5893),o=r(2212),a=r(7294),i=r(2515),c=r(4563),u=r(5769),s=r(6402),l=r(4633);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(0,i.l7)(l);var m=function(){return Math.max(.2,Math.random())};function v(e){var t=e.curve,r=e.width,o=e.color,c=(0,a.useRef)();return(0,i.xQ)((function(e,t){return c.current.uniforms.dashOffset.value-=t/100})),(0,n.jsxs)("mesh",{children:[(0,n.jsx)("meshLine",{attach:"geometry",vertices:t}),(0,n.jsx)("meshLineMaterial",{ref:c,transparent:!0,lineWidth:r,color:o,dashArray:.1,dashRatio:.99})]})}function h(e){var t=e.count,r=e.colors,i=e.radius,c=void 0===i?10:i,u=(0,a.useMemo)((function(){return new Array(t).fill().map((function(e,t){var n=new o.Vector3(Math.sin(0)*c*m(),Math.cos(0)*c*m(),0),a=new Array(30).fill().map((function(e,t){var r=t/20*Math.PI*2;return n.add(new o.Vector3(Math.sin(r)*c*m(),Math.cos(r)*c*m(),0)).clone()})),i=new o.CatmullRomCurve3(a).getPoints(100);return{color:r[parseInt(r.length*Math.random())],width:Math.max(1.6,2*t/10),curve:i}}))}),[t,c,r]);return(0,n.jsx)("group",{position:[2*-c,-c,0],children:u.map((function(e,t){return(0,n.jsx)(v,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){f(e,t,r[t])}))}return e}({},e),t)}))})}var d=r(3277),g=(0,r(9137).g)({textr:null,movement:[0,0,0],scale:1,factor:0,wiggle:0,time:0}," uniform float time;\n    uniform vec2 resolution;\n    uniform float wiggle;\n    varying vec2 vUv;\n    varying vec3 vNormal;\n    void main()\t{\n      vUv = uv;\n      vec3 transformed = vec3(position);\n      if (wiggle > 0.) {\n        float theta = sin(time + position.y) / 2.0 * wiggle;\n        float c = cos(theta);\n        float s = sin(theta);\n        mat3 m = mat3(c, 0, s, 0, 1, 0, -s, 0, c);\n        transformed = transformed * m;\n        vNormal = vNormal * m;\n      }      \n      gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.);\n    }"," uniform float time;\n    uniform vec2 resolution;\n    uniform float factor;\n    uniform float scale;\n    uniform vec3 movement;\n    uniform sampler2D textr;\n    varying vec2 vUv;\n    void main()\t{\n      vec2 uv = vUv / scale + movement.xy * factor;\n      vec4 color = texture2D(textr, uv);\n      if (color.a < 0.1) discard;\n      gl_FragColor = vec4(color.rgb, .1);\n    }");(0,i.l7)({LayerMaterial:g});var p="https://d1agtdz10mk5tb.cloudfront.net/wahed-falafel/public/underconstruction-files/";function x(e){var t=e.dof,r=(0,c.j)(1600,1e3,1.05),l=(0,c.j)(2200,1e3,1.05),f=(0,u.m)([p+"Asset 3.png",p+"ggg@4x.png",p+"BBB.png",p+"Asset 10@4xddd copy.png",p+"Asset 4.png",p+"Asset 12@4x-8.png"]),m=(0,a.useRef)(),v=(0,a.useRef)(),d=(0,a.useRef)([]),g=(0,a.useState)((function(){return new o.Vector3}))[0],x=(0,a.useState)((function(){return new o.Vector3}))[0],w=(0,a.useState)((function(){return new o.Vector3}))[0],y=[{texture:f[0],z:0,factor:.005,scale:l},{texture:f[1],z:10,factor:.005,scale:l},{texture:f[2],z:20,scale:l},{texture:f[3],z:30,ref:m,scaleFactor:.83,scale:r},{texture:f[4],factor:.03,scaleFactor:1,z:40,scale:l},{texture:f[5],factor:.04,scaleFactor:1.1,z:49,wiggle:1,scale:l}];return(0,i.xQ)((function(e,r){t.current.target=w.lerp(m.current.position,.05),g.lerp(x.set(e.mouse.x,.2*e.mouse.y,0),.2),v.current.position.x=o.MathUtils.lerp(v.current.position.x,20*e.mouse.x,.2),v.current.rotation.x=o.MathUtils.lerp(v.current.rotation.x,e.mouse.y/10,.2),v.current.rotation.y=o.MathUtils.lerp(v.current.rotation.y,-e.mouse.x/2,.2),d.current[4].uniforms.time.value=d.current[5].uniforms.time.value+=r}),1),(0,n.jsxs)("group",{ref:v,children:[(0,n.jsx)(h,{count:30,radius:80,colors:["orange"]}),y.map((function(e,t){var r=e.scale,o=e.texture,a=e.ref,i=e.factor,c=void 0===i?0:i,u=e.scaleFactor,l=void 0===u?1:u,f=e.wiggle,m=void 0===f?0:f,v=e.z;return(0,n.jsx)(s.JO,{scale:r,args:[1,1,m?10:1,m?10:1],"position-z":v,ref:a,children:(0,n.jsx)("layerMaterial",{movement:g,textr:o,factor:c,ref:function(e){return d.current[t]=e},wiggle:m,scale:l})},t)}))]})}var w=a.forwardRef((function(e,t){var r=(0,i.Ky)().viewport,o=r.width,a=r.height;return(0,n.jsxs)(d.xC,{multisampling:0,children:[(0,n.jsx)(d.y8,{ref:t,bokehScale:4,focalLength:.1,width:5*o/2,height:5*a/2}),(0,n.jsx)(d.sY,{})]})}));function y(){var e=(0,a.useRef)();return(0,n.jsx)("div",{style:{height:"100vh"},children:(0,n.jsxs)(i.Xz,{linear:!0,orthographic:!0,gl:{antialias:!1,stencil:!1,alpha:!1,depth:!1},camera:{zoom:5,position:[0,0,200],far:300,near:0},children:[(0,n.jsx)(a.Suspense,{fallback:null,children:(0,n.jsx)(x,{dof:e})}),(0,n.jsx)(w,{ref:e})]})})}}},function(e){e.O(0,[737,444,974,597,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);