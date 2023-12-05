varying vec2 v_texCoord;
varying vec2 v_transformTexCoord;
varying vec4 v_fragmentColor;

uniform sampler2D u_mask;

void main()
{
    vec4 maskColor = texture2D(u_mask, v_transformTexCoord);
    if (maskColor.a <= 0.0) discard;
    vec4 texColor = texture2D(CC_Texture0, v_texCoord);
    vec4 finalColor = vec4(texColor.r, texColor.g, texColor.b, maskColor.a * texColor.a);
    gl_FragColor = v_fragmentColor * finalColor;
}