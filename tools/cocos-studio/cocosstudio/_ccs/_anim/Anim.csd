<GameFile>
  <PropertyGroup Name="Anim" Type="Layer" ID="a67a5cb2-a7f9-4c72-b4d2-590754b0e0ad" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="60" Speed="1.0000" ActivedAnimationName="buttonPress">
        <Timeline ActionTag="1167993827" Property="Scale">
          <ScaleFrame FrameIndex="0" X="0.8000" Y="0.8000">
            <EasingData Type="8" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="20" X="1.0500" Y="1.0500">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="25" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-89733869" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="8" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="15" X="0.8000" Y="0.8000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="20" X="0.8200" Y="0.8200">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="25" X="0.8000" Y="0.8000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="2081335494" Property="Position">
          <PointFrame FrameIndex="0" X="-249.6000" Y="568.0000">
            <EasingData Type="26" />
          </PointFrame>
          <PointFrame FrameIndex="15" X="320.0000" Y="568.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="45" X="320.0000" Y="568.0000">
            <EasingData Type="25" />
          </PointFrame>
          <PointFrame FrameIndex="60" X="889.6000" Y="568.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="2081335494" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.2000" Y="0.8000">
            <EasingData Type="26" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="15" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="45" X="1.0000" Y="1.0000">
            <EasingData Type="25" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="1.2000" Y="0.8000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="2081335494" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="26" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="15" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="45" X="0.0000" Y="0.0000">
            <EasingData Type="25" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="buttonPress" StartIndex="0" EndIndex="25">
          <RenderColor A="150" R="100" G="149" B="237" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Layer" Tag="1728" ctype="GameLayerObjectData">
        <Size X="640.0000" Y="1136.0000" />
        <Children>
          <AbstractNodeData Name="ButtonRelease" ActionTag="1167993827" Tag="292" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="217.0000" RightMargin="217.0000" TopMargin="527.5000" BottomMargin="527.5000" LeftEage="67" RightEage="67" TopEage="26" BottomEage="26" Scale9OriginX="67" Scale9OriginY="26" Scale9Width="72" Scale9Height="29" ctype="ImageViewObjectData">
            <Size X="206.0000" Y="81.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="320.0000" Y="568.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="0.3219" Y="0.0713" />
            <FileData Type="PlistSubImage" Path="buttons/rectangles/Yellow.png" Plist="sprite-sheets/Buttons.plist" />
          </AbstractNodeData>
          <AbstractNodeData Name="ButtonPress" Visible="False" ActionTag="-89733869" Tag="291" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="217.0000" RightMargin="217.0000" TopMargin="527.5000" BottomMargin="527.5000" LeftEage="67" RightEage="67" TopEage="26" BottomEage="26" Scale9OriginX="67" Scale9OriginY="26" Scale9Width="72" Scale9Height="29" ctype="ImageViewObjectData">
            <Size X="206.0000" Y="81.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="320.0000" Y="568.0000" />
            <Scale ScaleX="0.8000" ScaleY="0.8000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="0.3219" Y="0.0713" />
            <FileData Type="PlistSubImage" Path="buttons/rectangles/Yellow.png" Plist="sprite-sheets/Buttons.plist" />
          </AbstractNodeData>
          <AbstractNodeData Name="_layoutBingo" Visible="False" ActionTag="-45804148" Tag="1777" IconVisible="False" RightMargin="440.0000" TopMargin="936.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="200.0000" Y="200.0000" />
            <Children>
              <AbstractNodeData Name="GoToMiddleAndOut" ActionTag="2081335494" Tag="1775" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="118.0000" RightMargin="-322.0000" TopMargin="-421.5000" BottomMargin="514.5000" LeftEage="133" RightEage="133" TopEage="35" BottomEage="35" Scale9OriginX="133" Scale9OriginY="35" Scale9Width="363" Scale9Height="29" ctype="ImageViewObjectData">
                <Size X="404.0000" Y="107.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="568.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="1.6000" Y="2.8400" />
                <PreSize X="2.0200" Y="0.5350" />
                <FileData Type="PlistSubImage" Path="texts/minigames/LetsBet_01.png" Plist="sprite-sheets/Text_EN.plist" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint />
            <Position />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.3125" Y="0.1761" />
            <SingleColor A="255" R="150" G="200" B="255" />
            <FirstColor A="255" R="150" G="200" B="255" />
            <EndColor A="255" R="255" G="255" B="255" />
            <ColorVector ScaleY="1.0000" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>