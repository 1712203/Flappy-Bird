varying vec2 v_texCoord;
varying vec2 v_transformTexCoord;
varying vec4 v_fragmentColor;

void main()
{
    gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);

    float gray = (gl_FragColor.r + gl_FragColor.g + gl_FragColor.b)/3.0;
    gl_FragColor.rgb = vec3(gray);
}