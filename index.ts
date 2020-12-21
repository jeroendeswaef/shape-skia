

const ckLoaded = CanvasKitInit({
    locateFile: (file) => '/node_modules/canvaskit-wasm/bin/' + file
});
ckLoaded.then((CanvasKit) => {
    const surface = CanvasKit.MakeCanvasSurface('foo');
    const paint = new CanvasKit.Paint();
    paint.setColor(CanvasKit.Color4f(0, 0.9, 0, 1.0));
    paint.setStyle(CanvasKit.PaintStyle.Stroke);
    paint.setAntiAlias(true);
    const rr = CanvasKit.RRectXY(CanvasKit.LTRBRect(10, 60, 210, 260), 25, 15);
    const canvas = surface?.getCanvas();
    if (canvas) {
        canvas.clear(CanvasKit.TRANSPARENT);
        canvas.drawRRect(rr, paint);
    }
    if (surface) {
        surface.flush();
    }
});