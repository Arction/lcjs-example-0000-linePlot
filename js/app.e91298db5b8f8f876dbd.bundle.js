(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const i=a(89),{lightningChart:n,AxisTickStrategies:T,Themes:g}=i,m=n().ChartXY({theme:g[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0});m.getDefaultAxisX().setTickStrategy(T.DateTime).setInterval({start:new Date(2022,0,1).getTime(),end:new Date(2022,0,31).getTime()}),m.setPadding({right:50}).setTitle("Diesel and Gasoline Price Comparison");const x=[{x:new Date(2022,0,1).getTime(),y:1.52},{x:new Date(2022,0,2).getTime(),y:1.52},{x:new Date(2022,0,3).getTime(),y:1.58},{x:new Date(2022,0,4).getTime(),y:1.52},{x:new Date(2022,0,5).getTime(),y:2},{x:new Date(2022,0,6).getTime(),y:2},{x:new Date(2022,0,7).getTime(),y:2},{x:new Date(2022,0,8).getTime(),y:2},{x:new Date(2022,0,9).getTime(),y:2.26},{x:new Date(2022,0,10).getTime(),y:1.9},{x:new Date(2022,0,11).getTime(),y:1.9},{x:new Date(2022,0,12).getTime(),y:1.9},{x:new Date(2022,0,13).getTime(),y:1.9},{x:new Date(2022,0,14).getTime(),y:1.6},{x:new Date(2022,0,15).getTime(),y:1.6},{x:new Date(2022,0,16).getTime(),y:1.6},{x:new Date(2022,0,17).getTime(),y:1},{x:new Date(2022,0,18).getTime(),y:1},{x:new Date(2022,0,19).getTime(),y:1},{x:new Date(2022,0,20).getTime(),y:1.74},{x:new Date(2022,0,21).getTime(),y:1.47},{x:new Date(2022,0,22).getTime(),y:1.47},{x:new Date(2022,0,23).getTime(),y:1.47},{x:new Date(2022,0,24).getTime(),y:1.74},{x:new Date(2022,0,25).getTime(),y:1.74},{x:new Date(2022,0,26).getTime(),y:1.74},{x:new Date(2022,0,27).getTime(),y:1.5},{x:new Date(2022,0,28).getTime(),y:1.5},{x:new Date(2022,0,29).getTime(),y:1.5}],w=[{x:new Date(2022,0,1).getTime(),y:1.35},{x:new Date(2022,0,2).getTime(),y:1.35},{x:new Date(2022,0,3).getTime(),y:1.35},{x:new Date(2022,0,4).getTime(),y:1.35},{x:new Date(2022,0,5).getTime(),y:1.9},{x:new Date(2022,0,6).getTime(),y:1.9},{x:new Date(2022,0,7).getTime(),y:1.9},{x:new Date(2022,0,8).getTime(),y:1.92},{x:new Date(2022,0,9).getTime(),y:1.5},{x:new Date(2022,0,10).getTime(),y:1.5},{x:new Date(2022,0,11).getTime(),y:1.3},{x:new Date(2022,0,12).getTime(),y:1.3},{x:new Date(2022,0,13).getTime(),y:1.3},{x:new Date(2022,0,14).getTime(),y:1.3},{x:new Date(2022,0,15).getTime(),y:1.3},{x:new Date(2022,0,16).getTime(),y:1.32},{x:new Date(2022,0,17).getTime(),y:1.4},{x:new Date(2022,0,18).getTime(),y:1.44},{x:new Date(2022,0,19).getTime(),y:1.02},{x:new Date(2022,0,20).getTime(),y:1.02},{x:new Date(2022,0,21).getTime(),y:1.02},{x:new Date(2022,0,22).getTime(),y:1.02},{x:new Date(2022,0,23).getTime(),y:1.02},{x:new Date(2022,0,24).getTime(),y:1.02},{x:new Date(2022,0,25).getTime(),y:1.02},{x:new Date(2022,0,26).getTime(),y:1.02},{x:new Date(2022,0,27).getTime(),y:1.3},{x:new Date(2022,0,28).getTime(),y:1.3},{x:new Date(2022,0,29).getTime(),y:1.3}],D=m.addLineSeries().setName("Diesel");m.addLineSeries().setName("Gasoline").add(x),D.add(w),m.getDefaultAxisY().setTitle("$/litre").setInterval({start:0,end:3,stopAxisAfter:!0}),m.setAutoCursor((e=>e.setResultTableAutoTextStyle(!0).setTickMarkerXVisible(!1).setTickMarkerYAutoTextStyle(!0))),m.addLegendBox().setAutoDispose({type:"max-width",maxWidth:.3}).add(m)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);