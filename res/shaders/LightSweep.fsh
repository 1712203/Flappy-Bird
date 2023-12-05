varying vec2 v_texCoord;
varying vec2 v_transformTexCoord;
varying vec4 v_fragmentColor;

void main()
{
    float a = v_transformTexCoord.y + v_transformTexCoord.x * 2.0;

    int mulTime = 6;
    float sinTime = CC_SinTime[3];
    float cosTime = CC_CosTime[3];
    float mulSinTime = sinTime;
    float mulCosTime = cosTime;
    for(int x = 0; x < mulTime; x += 1)
    {
        float tempSin = mulSinTime;
        float tempCos = mulCosTime;
        mulSinTime = tempSin * cosTime + tempCos * sinTime;
        mulCosTime = tempCos * cosTime - tempSin * sinTime;
    }

    float col = sin(a) * mulCosTime - cos(a) * mulSinTime;
    col *= col * col * 0.9;
    col = clamp(col, 0., 0.7);
    vec4 tex = texture2D(CC_Texture0, v_texCoord);
    gl_FragColor = (tex + vec4(col) * tex.a) * v_fragmentColor;
}