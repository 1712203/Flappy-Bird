<GameFile>
  <PropertyGroup Name="EffectJUp" Type="Node" ID="fce2ba3b-d869-46eb-9f92-8dc40a2e7b63" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="30" Speed="0.5000">
        <Timeline ActionTag="-655399843" Property="Position">
          <PointFrame FrameIndex="0" X="48.7185" Y="-36.2273">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="10" X="48.7185" Y="-36.2273">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="15" X="48.7187" Y="-11.2273">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="18" X="48.7185" Y="-36.2273">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="21" X="48.7186" Y="-31.2273">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="24" X="48.7185" Y="-36.2273">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="30" X="48.7185" Y="-36.2273">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-655399843" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="10" X="1.3000" Y="0.8000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="15" X="0.9500" Y="1.0500">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="18" X="1.3000" Y="0.8000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="21" X="0.9000" Y="1.0500">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-2128855300" Property="Position">
          <PointFrame FrameIndex="0" X="-2.9937" Y="2.9936">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="15" X="-2.9936" Y="12.9936">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="30" X="-2.9937" Y="2.9936">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-2128855300" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="15" X="1.1000" Y="1.1000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="Idle" StartIndex="0" EndIndex="30">
          <RenderColor A="255" R="112" G="128" B="144" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="63" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_arrow" ActionTag="-655399843" Tag="65" IconVisible="False" LeftMargin="11.2185" RightMargin="-86.2185" TopMargin="-76.7727" BottomMargin="-36.2273" ctype="SpriteObjectData">
            <Size X="75.0000" Y="113.0000" />
            <AnchorPoint ScaleX="0.5000" />
            <Position X="48.7185" Y="-36.2273" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="game/effects/Up.png" Plist="sprite-sheets/Game.plist" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
          <AbstractNodeData Name="_jack" ActionTag="-2128855300" Tag="64" IconVisible="False" LeftMargin="-45.9937" RightMargin="-40.0063" TopMargin="-39.9936" BottomMargin="-34.0064" ctype="SpriteObjectData">
            <Size X="86.0000" Y="74.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="-2.9937" Y="2.9936" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="game/effects/JUp.png" Plist="sprite-sheets/Game.plist" />
            <BlendFunc Src="1" Dst="771" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>