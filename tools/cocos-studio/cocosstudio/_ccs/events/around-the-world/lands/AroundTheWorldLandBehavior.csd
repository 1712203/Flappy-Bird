<GameFile>
  <PropertyGroup Name="AroundTheWorldLandBehavior" Type="Node" ID="f295498d-8c68-4149-98a7-e12670a777ea" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="130" Speed="1.0000" ActivedAnimationName="PlaneOver">
        <Timeline ActionTag="-880470840" Property="Scale">
          <ScaleFrame FrameIndex="0" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="1.0300" Y="0.9700">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="100" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="115" X="1.1500" Y="0.8500">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="130" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="Idle" StartIndex="0" EndIndex="60">
          <RenderColor A="255" R="244" G="164" B="96" />
        </AnimationInfo>
        <AnimationInfo Name="PlaneOver" StartIndex="100" EndIndex="130">
          <RenderColor A="255" R="102" G="205" B="170" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" UserData="Abstract" Tag="138" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_imgBuilding" ActionTag="-880470840" Tag="409" IconVisible="False" LeftMargin="-83.5001" RightMargin="-83.4999" TopMargin="-183.8994" BottomMargin="-58.1006" LeftEage="24" RightEage="24" TopEage="47" BottomEage="47" Scale9OriginX="24" Scale9OriginY="47" Scale9Width="119" Scale9Height="148" ctype="ImageViewObjectData">
            <Size X="167.0000" Y="242.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.0500" />
            <Position X="-0.0001" Y="-46.0006" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="around-the-world/BuildingParis.png" Plist="sprite-sheets/AroundTheWorld.plist" />
          </AbstractNodeData>
          <AbstractNodeData Name="_imgBuildingName" ActionTag="1138202581" Tag="410" IconVisible="False" LeftMargin="-55.2634" RightMargin="-59.7366" TopMargin="1.2446" BottomMargin="-39.2446" LeftEage="14" RightEage="14" TopEage="10" BottomEage="10" Scale9OriginX="14" Scale9OriginY="10" Scale9Width="87" Scale9Height="18" ctype="ImageViewObjectData">
            <Size X="115.0000" Y="38.0000" />
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="2.2366" Y="-20.2446" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="around-the-world/TextParis.png" Plist="sprite-sheets/AroundTheWorld.plist" />
          </AbstractNodeData>
          <AbstractNodeData Name="_imgCheck" ActionTag="-966946294" Tag="411" IconVisible="False" LeftMargin="-42.0001" RightMargin="-41.9999" TopMargin="-69.9986" BottomMargin="37.9986" LeftEage="25" RightEage="25" TopEage="18" BottomEage="18" Scale9OriginX="25" Scale9OriginY="14" Scale9Width="34" Scale9Height="4" ctype="ImageViewObjectData">
            <Size X="84.0000" Y="32.0000" />
            <Children>
              <AbstractNodeData Name="_txtCheck" ActionTag="373325692" Tag="412" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="17.0000" RightMargin="17.0000" TopMargin="5.0000" BottomMargin="5.0000" FontSize="18" LabelText="Claimed" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="50.0000" Y="22.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="42.0000" Y="16.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="233" G="62" B="67" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.5952" Y="0.6875" />
                <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                <OutlineColor A="255" R="255" G="255" B="255" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="-0.0001" Y="53.9986" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
            <FileData Type="PlistSubImage" Path="basics/other/RedBox.png" Plist="sprite-sheets/Basics.plist" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>