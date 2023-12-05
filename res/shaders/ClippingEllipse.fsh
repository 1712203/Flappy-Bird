varying vec2 v_texCoord;
varying vec2 v_transformTexCoord;
varying vec4 v_fragmentColor;

void main()
{
    float x = v_transformTexCoord.x - 0.5;
    float y = v_transformTexCoord.y - 0.5;
    float radius = x * x + y * y;
    radius = sqrt (radius);
    if (radius > 0.5) discard;

    gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);
}