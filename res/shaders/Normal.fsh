precision lowp float;
varying vec2 v_texCoord;
varying vec4 v_fragmentColor;
void main()
{
    gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);
}