attribute vec4 a_position;
attribute vec2 a_texCoord;
attribute vec4 a_color;

#ifdef GL_ES
varying lowp vec4 v_fragmentColor;
varying mediump vec2 v_texCoord;
varying mediump vec2 v_transformTexCoord;
#else
varying vec4 v_fragmentColor;
varying vec2 v_texCoord;
varying vec2 v_transformTexCoord;
#endif

uniform vec2 u_atlasSize;
uniform vec2 u_spriteSize;
uniform vec2 u_trimPoint;

void main()
{
    gl_Position = CC_PMatrix * a_position;
    v_fragmentColor = a_color;
    v_texCoord = a_texCoord;
    // transform texCoord for atlas sprite
    v_transformTexCoord = v_texCoord;
    v_transformTexCoord *= u_atlasSize;
    v_transformTexCoord -= u_trimPoint;
    v_transformTexCoord /= u_spriteSize;
}
