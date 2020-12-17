/// <reference path="./node_modules/canvaskit-wasm/types/index.d.ts" />

// import { Canvas, CanvasKit, CanvasKitInit } from "canvaskit-wasm";

var CanvasKitInit = window.CanvasKitInit || require("canvaskit-wasm").CanvasKitInit;
const ckLoaded = CanvasKitInit({
    locateFile: (file) => '/node_modules/canvaskit-wasm/bin/' + file
});
ckLoaded.then((CanvasKit) => {
    const surface = CanvasKit.MakeCanvasSurface('foo');
    const paint = new CanvasKit.Paint();
    paint.setColor(CanvasKit.Color4f(0.0, 0.9, 0.9, 1.0));
    paint.setStyle(CanvasKit.PaintStyle.Stroke);
    paint.setAntiAlias(true);
    const rr = CanvasKit.RRectXY(CanvasKit.LTRBRect(10, 60, 210, 260), 25, 15);
    function draw(canvas) {
        canvas.clear(CanvasKit.WHITE);
        // canvas.drawRRect(rr, paint);
        // canvas.drawC
        canvas.drawCircle(50, 50, 25, paint);
    }
    surface.drawOnce(draw);
});