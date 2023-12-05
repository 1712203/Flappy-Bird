<GameFile>
  <PropertyGroup Name="EffectXPX2" Type="Node" ID="9988670a-8849-4be9-81d5-0dec75359317" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="45" Speed="0.5000" ActivedAnimationName="Hide">
        <Timeline ActionTag="1370547673" Property="RotationSkew">
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
        <Timeline ActionTag="86824065" Property="Scale">
          <ScaleFrame FrameIndex="0" X="2.5000" Y="2.5000">
            <EasingData Type="26" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="15" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000">
            <EasingData Type="25" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="45" X="2.5000" Y="2.5000">
            <EasingData Type="25" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="86824065" Property="Alpha">
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
          <RenderColor A="255" R="112" G="128" B="144" />
        </AnimationInfo>
        <AnimationInfo Name="Hide" StartIndex="30" EndIndex="45">
          <RenderColor A="255" R="119" G="136" B="153" />
        </AnimationInfo>
        <AnimationInfo Name="Idle" StartIndex="15" EndIndex="30">
          <RenderColor A="255" R="255" G="250" B="205" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="63" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_icon" ActionTag="86824065" Tag="10558" IconVisible="False" LeftMargin="-64.0000" RightMargin="-64.0000" TopMargin="-64.0000" BottomMargin="-64.0000" LeftEage="42" RightEage="42" TopEage="42" BottomEage="42" Scale9OriginX="42" Scale9OriginY="42" Scale9Width="44" Scale9Height="44" ctype="ImageViewObjectData">
            <Size X="128.0000" Y="128.0000" />
            <Children>
              <AbstractNodeData Name="_highlight" ActionTag="1370547673" Tag="11418" RotationSkewY="-0.0098" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-0.9984" RightMargin="0.9984" TopMargin="-1.9968" BottomMargin="1.9968" ctype="SpriteObjectData">
                <Size X="128.0000" Y="128.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="63.0016" Y="65.9968" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.4922" Y="0.5156" />
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
            <FileData Type="PlistSubImage" Path="icons/color/items/XPx2.png" Plist="sprite-sheets/Nocis.plist" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>