<GameFile>
  <PropertyGroup Name="EmoSurprise" Type="Node" ID="7464666a-6486-4ee3-9cb3-74e1624e1681" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="60" Speed="0.5000">
        <Timeline ActionTag="1299379548" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="15" X="1.0000" Y="1.0500">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="idle" StartIndex="0" EndIndex="60">
          <RenderColor A="255" R="128" G="0" B="0" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="121" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="Char_1" ActionTag="1299379548" Tag="126" IconVisible="False" LeftMargin="-44.0000" RightMargin="-44.0000" TopMargin="-136.3000" BottomMargin="0.3000" ctype="SpriteObjectData">
            <Size X="88.0000" Y="136.0000" />
            <AnchorPoint ScaleX="0.5000" />
            <Position Y="0.3000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="emoticons/Emo_Girl_05.png" Plist="sprite-sheets/Emoticons.plist" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>