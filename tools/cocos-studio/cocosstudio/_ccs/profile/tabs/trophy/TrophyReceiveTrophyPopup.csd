<GameFile>
  <PropertyGroup Name="TrophyReceiveTrophyPopup" Type="Node" ID="4c330bad-a93b-4444-85c9-a95acc1c236e" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Node" Tag="747" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_root" ActionTag="-176770705" Tag="1100" IconVisible="False" LeftMargin="-269.0000" RightMargin="-269.0000" TopMargin="-360.9999" BottomMargin="-361.0001" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="538.0000" Y="722.0000" />
            <Children>
              <AbstractNodeData Name="_imgBackground" ActionTag="1705084976" Tag="1101" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" Scale9Enable="True" LeftEage="69" RightEage="69" TopEage="57" BottomEage="57" Scale9OriginX="69" Scale9OriginY="57" Scale9Width="400" Scale9Height="608" ctype="ImageViewObjectData">
                <Size X="538.0000" Y="722.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="269.0000" Y="361.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <FileData Type="PlistSubImage" Path="basics2/popup/PopupReward_01.png" Plist="sprite-sheets/Basics2.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgHeader" ActionTag="-669006444" Tag="1104" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="64.5000" RightMargin="64.5000" TopMargin="-42.2800" BottomMargin="665.2800" LeftEage="114" RightEage="114" TopEage="27" BottomEage="27" Scale9OriginX="114" Scale9OriginY="27" Scale9Width="181" Scale9Height="45" ctype="ImageViewObjectData">
                <Size X="409.0000" Y="99.0000" />
                <Children>
                  <AbstractNodeData Name="_imgTextHeader" ActionTag="1523555215" Tag="249" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="37.5000" RightMargin="37.5000" TopMargin="22.5000" BottomMargin="22.5000" LeftEage="114" RightEage="114" TopEage="27" BottomEage="27" Scale9OriginX="114" Scale9OriginY="27" Scale9Width="106" Scale9Height="1" ctype="ImageViewObjectData">
                    <Size X="334.0000" Y="54.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="204.5000" Y="49.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="0.8166" Y="0.5455" />
                    <FileData Type="PlistSubImage" Path="texts/other/Congraz_02.png" Plist="sprite-sheets/Text_EN.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="269.0000" Y="714.7800" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.9900" />
                <PreSize X="0.7602" Y="0.1371" />
                <FileData Type="PlistSubImage" Path="basics2/popup/Header_01.png" Plist="sprite-sheets/Basics2.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtDescription" ActionTag="391917190" UserData="fitMultipleLine, uppercase" Tag="74" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="56.5000" RightMargin="56.5000" TopMargin="56.7480" BottomMargin="585.2520" IsCustomSize="True" FontSize="30" LabelText="TROPHY_RECEIVE_TROPHY_DESCRIPTION" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="425.0000" Y="80.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="269.0000" Y="625.2520" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="236" B="186" />
                <PrePosition X="0.5000" Y="0.8660" />
                <PreSize X="0.7900" Y="0.1108" />
                <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="_glow" ActionTag="568220882" Alpha="178" Tag="1192" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="269.0000" RightMargin="269.0000" TopMargin="386.2700" BottomMargin="335.7300" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="269.0000" Y="335.7300" />
                <Scale ScaleX="0.8000" ScaleY="0.8000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.4650" />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="_ccs/vfx/Glow.csd" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="_spot" ActionTag="-955782982" Alpha="153" Tag="985" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="269.0000" RightMargin="269.0000" TopMargin="693.1200" BottomMargin="28.8800" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="269.0000" Y="28.8800" />
                <Scale ScaleX="0.8000" ScaleY="0.8000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.0400" />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="_ccs/vfx/SpotLight.csd" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutWidgets" ActionTag="-1624222723" Tag="326" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="40.3500" RightMargin="40.3500" TopMargin="151.6200" BottomMargin="101.0800" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="457.3000" Y="469.3000" />
                <Children>
                  <AbstractNodeData Name="_tableViewWidgets" ActionTag="-84828688" Tag="327" FrameEvent="ck.TableView" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" RightMargin="0.0000" ClipAble="True" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" IsBounceEnabled="True" ScrollDirectionType="0" ItemMargin="10" VerticalType="Align_VerticalCenter" ctype="ListViewObjectData">
                    <Size X="457.3000" Y="469.3000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="228.6500" Y="234.6500" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <SingleColor A="255" R="150" G="150" B="255" />
                    <FirstColor A="255" R="150" G="150" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_gridViewWidgets" ActionTag="-881300911" Tag="644" FrameEvent="ck.GridViewVertical" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" RightMargin="0.0000" ClipAble="True" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" IsBounceEnabled="True" ScrollDirectionType="0" ItemMargin="10" VerticalType="Align_VerticalCenter" ctype="ListViewObjectData">
                    <Size X="457.3000" Y="469.3000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="228.6500" Y="234.6500" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <SingleColor A="255" R="150" G="150" B="255" />
                    <FirstColor A="255" R="150" G="150" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="269.0000" Y="335.7300" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.4650" />
                <PreSize X="0.8500" Y="0.6500" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgClose" ActionTag="1739710898" Tag="1111" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="486.7400" RightMargin="-29.7400" TopMargin="-27.0600" BottomMargin="666.0600" LeftEage="26" RightEage="26" TopEage="33" BottomEage="33" Scale9OriginX="26" Scale9OriginY="33" Scale9Width="25" Scale9Height="14" ctype="ImageViewObjectData">
                <Size X="81.0000" Y="83.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="527.2400" Y="707.5600" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.9800" Y="0.9800" />
                <PreSize X="0.1506" Y="0.1150" />
                <FileData Type="PlistSubImage" Path="buttons/rectangles/Close.png" Plist="sprite-sheets/Buttons.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_nodeShareReward" ActionTag="1387500356" Tag="2063" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="269.0000" RightMargin="269.0000" TopMargin="722.0000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="269.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="_ccs/share-image/ShareImageRewardWidget.csd" Plist="" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position Y="-0.0001" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition />
            <PreSize X="0.0000" Y="0.0000" />
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