<GameFile>
  <PropertyGroup Name="Blink" Type="Node" ID="294e4b6f-c57b-4f2b-b3e0-d37cc0016c84" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="243" Speed="1.0000" ActivedAnimationName="Show">
        <Timeline ActionTag="-1708966753" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="27" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="110" X="180.0000" Y="180.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="160" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="243" X="180.0000" Y="180.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-1708966753" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="27" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="39" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="110" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="160" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="172" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="243" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="Show" StartIndex="0" EndIndex="243">
          <RenderColor A="255" R="143" G="188" B="139" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="227" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_blink01" ActionTag="-1708966753" Alpha="0" Tag="244" IconVisible="False" LeftMargin="-62.5000" RightMargin="-62.5000" TopMargin="-63.0000" BottomMargin="-63.0000" ctype="SpriteObjectData">
            <Size X="125.0000" Y="126.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position />
            <Scale ScaleX="0.8000" ScaleY="0.8000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="vfx/light/Blink.png" Plist="sprite-sheets/Vfx.plist" />
            <BlendFunc Src="770" Dst="1" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>