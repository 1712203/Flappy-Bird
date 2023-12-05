<GameFile>
  <PropertyGroup Name="ClaimArrow" Type="Node" ID="ccd92d34-52f3-4ee0-8cda-ab39f21ee445" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="30" Speed="1.0000">
        <Timeline ActionTag="-233939136" Property="Position">
          <PointFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="7" />
          </PointFrame>
          <PointFrame FrameIndex="15" X="20.0000" Y="0.0000">
            <EasingData Type="8" />
          </PointFrame>
          <PointFrame FrameIndex="30" X="0.0000" Y="0.0000">
            <EasingData Type="8" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-233939136" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="7" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="15" X="1.1500" Y="0.8500">
            <EasingData Type="8" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="Idle" StartIndex="0" EndIndex="30">
          <RenderColor A="150" R="0" G="128" B="128" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="606" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_imgCLaim" ActionTag="-233939136" Tag="604" IconVisible="False" RightMargin="-82.0000" TopMargin="-34.5000" BottomMargin="-34.5000" LeftEage="26" RightEage="26" TopEage="27" BottomEage="27" Scale9OriginX="26" Scale9OriginY="27" Scale9Width="30" Scale9Height="15" ctype="ImageViewObjectData">
            <Size X="82.0000" Y="69.0000" />
            <Children>
              <AbstractNodeData Name="_txtPlay" CanEdit="False" ActionTag="957197156" Tag="605" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="10.6320" RightMargin="6.3680" TopMargin="16.1708" BottomMargin="13.8292" FontSize="25" LabelText="Claim" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ShadowEnabled="True" ctype="TextObjectData">
                <Size X="65.0000" Y="39.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="43.1320" Y="33.3292" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="28" G="119" B="7" />
                <PrePosition X="0.5260" Y="0.4830" />
                <PreSize X="0.7927" Y="0.5652" />
                <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="192" G="241" B="92" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleY="0.5000" />
            <Position />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="basics/other/ArrowBoardGreen.png" Plist="sprite-sheets/Basics.plist" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>