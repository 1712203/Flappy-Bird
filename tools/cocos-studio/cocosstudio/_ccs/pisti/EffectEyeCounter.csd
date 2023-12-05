<GameFile>
  <PropertyGroup Name="EffectEyeCounter" Type="Node" ID="5c2ae5bd-b5c7-45d4-88df-c95c74f2b167" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="45" Speed="0.5000" ActivedAnimationName="Idle">
        <Timeline ActionTag="891805621" Property="RotationSkew">
          <ScaleFrame FrameIndex="15" X="0.0000" Y="-0.0098">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="20" X="120.0000" Y="119.9902">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="25" X="240.0000" Y="239.9902">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="360.0000" Y="359.9902">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="1303320608" Property="Scale">
          <ScaleFrame FrameIndex="0" X="2.5000" Y="2.5000">
            <EasingData Type="26" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="15" X="1.0000" Y="1.0000">
            <EasingData Type="25" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="45" X="2.5000" Y="2.5000">
            <EasingData Type="25" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="1303320608" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="15" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="30" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="45" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="Show" StartIndex="0" EndIndex="15">
          <RenderColor A="255" R="139" G="0" B="139" />
        </AnimationInfo>
        <AnimationInfo Name="Hide" StartIndex="30" EndIndex="45">
          <RenderColor A="255" R="205" G="92" B="92" />
        </AnimationInfo>
        <AnimationInfo Name="Idle" StartIndex="15" EndIndex="30">
          <RenderColor A="255" R="124" G="252" B="0" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="43" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_icon" ActionTag="1303320608" Tag="9846" IconVisible="False" LeftMargin="-64.0000" RightMargin="-64.0000" TopMargin="-64.0000" BottomMargin="-64.0000" LeftEage="42" RightEage="42" TopEage="42" BottomEage="42" Scale9OriginX="42" Scale9OriginY="42" Scale9Width="44" Scale9Height="44" ctype="ImageViewObjectData">
            <Size X="128.0000" Y="128.0000" />
            <Children>
              <AbstractNodeData Name="_highlight" ActionTag="891805621" Tag="11939" RotationSkewY="-0.0098" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" ctype="SpriteObjectData">
                <Size X="128.0000" Y="128.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="64.0000" Y="64.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <FileData Type="PlistSubImage" Path="avatars/Countdown.png" Plist="sprite-sheets/Avatars.plist" />
                <BlendFunc Src="1" Dst="771" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="icons/color/items/EyeCounter.png" Plist="sprite-sheets/Nocis.plist" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>