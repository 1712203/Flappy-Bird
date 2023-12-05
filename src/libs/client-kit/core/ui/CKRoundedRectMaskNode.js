/**
 * @class
 * @static
 */
ck.RoundedRectMaskNode = {};

/**
 * @class
 * @static
 */
let RoundedRectMaskNode = ck.RoundedRectMaskNode;

RoundedRectMaskNode.appendCubicBezier = function (startPoint, verts, from, control1, control2, to, segments)
{
    var t = 0;
    for(var i = 0; i < segments; i++)
    {
        var x = Math.pow(1 - t, 3) * from.x + 3.0 * Math.pow(1 - t, 2) * t * control1.x + 3.0 * (1 - t) * t * t * control2.x + t * t * t * to.x;
        var y = Math.pow(1 - t, 3) * from.y + 3.0 * Math.pow(1 - t, 2) * t * control1.y + 3.0 * (1 - t) * t * t * control2.y + t * t * t * to.y;
        verts[startPoint + i] = cc.p(x, y);
        t += 1 / segments;
    }
};

RoundedRectMaskNode.createShapeMask = function (size, radiusBotLeft, radiusBotRight, radiusTopLeft, radiusTopRight, borderWidth, cornerSegments) {
    var kappa = 0.552228474;
    var oneMinusKappa = (1.0 - kappa);

    // define corner control points
    var verts = [];

    verts[0] = cc.p(0, radiusBotLeft);
    verts[1] = cc.p(0, radiusBotLeft * oneMinusKappa);
    verts[2] = cc.p(radiusBotLeft * oneMinusKappa, 0);
    verts[3] = cc.p(radiusBotLeft, 0);

    verts[4] = cc.p(size.width - radiusBotRight, 0);
    verts[5] = cc.p(size.width - radiusBotRight * oneMinusKappa, 0);
    verts[6] = cc.p(size.width, radiusBotRight * oneMinusKappa);
    verts[7] = cc.p(size.width, radiusBotRight);

    verts[8] = cc.p(size.width, size.height - radiusTopRight);
    verts[9] = cc.p(size.width, size.height - radiusTopRight * oneMinusKappa);
    verts[10] = cc.p(size.width - radiusTopRight * oneMinusKappa, size.height);
    verts[11] = cc.p(size.width - radiusTopRight, size.height);

    verts[12] = cc.p(radiusTopLeft, size.height);
    verts[13] = cc.p(radiusTopLeft * oneMinusKappa, size.height);
    verts[14] = cc.p(0, size.height - radiusTopLeft * oneMinusKappa);
    verts[15] = cc.p(0, size.height - radiusTopLeft);

    // result
    var polyVerts = [];

    // add corner arc segments
    this.appendCubicBezier(0 * cornerSegments, polyVerts, verts[0], verts[1], verts[2], verts[3], cornerSegments);
    this.appendCubicBezier(1 * cornerSegments, polyVerts, verts[4], verts[5], verts[6], verts[7], cornerSegments);
    this.appendCubicBezier(2 * cornerSegments, polyVerts, verts[8], verts[9], verts[10], verts[11], cornerSegments);
    this.appendCubicBezier(3 * cornerSegments, polyVerts, verts[12], verts[13], verts[14], verts[15], cornerSegments);
    // close path
    polyVerts[4 * cornerSegments] = verts[0];

    // draw final poly into mask
    var shapeMask = new cc.DrawNode();
    shapeMask.drawPoly(polyVerts, cc.color.WHITE, 0, cc.color.WHITE);

    // create clip node with draw node as stencil (mask)
    return shapeMask;
};

/**
 * Create a rounded rect mask node
 * @param size Content size of mask
 * @param radiusBotLeft
 * @param radiusBotRight
 * @param radiusTopLeft
 * @param radiusTopRight
 * @param borderWidth Border width
 * @param cornerSegments Number of corner segments, more segments more smooth
 * @return {cc.ClippingNode}
 */
RoundedRectMaskNode.createMask = function (size, radiusBotLeft, radiusBotRight, radiusTopLeft, radiusTopRight, borderWidth, cornerSegments) {
    var shapeMask = RoundedRectMaskNode.createShapeMask(size, radiusBotLeft, radiusBotRight, radiusTopLeft, radiusTopRight, borderWidth, cornerSegments);
    return new cc.ClippingNode(shapeMask);
};