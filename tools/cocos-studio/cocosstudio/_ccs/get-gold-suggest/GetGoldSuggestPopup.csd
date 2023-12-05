<GameFile>
  <PropertyGroup Name="GetGoldSuggestPopup" Type="Node" ID="57f52792-5cb1-4706-9544-4fa1f6553411" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <ObjectData Name="Node" Tag="2265" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_layoutPopup" ActionTag="208719228" Tag="2300" IconVisible="False" LeftMargin="-270.0002" RightMargin="-269.9998" TopMargin="-324.2954" BottomMargin="-324.2946" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="540.0000" Y="648.5900" />
            <Children>
              <AbstractNodeData Name="_imgBack" ActionTag="-877170256" Tag="2301" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Enable="True" LeftEage="69" RightEage="69" TopEage="57" BottomEage="57" Scale9OriginX="69" Scale9OriginY="57" Scale9Width="72" Scale9Height="61" ctype="ImageViewObjectData">
                <Size X="540.0000" Y="648.5900" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="270.0000" Y="324.2950" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <FileData Type="PlistSubImage" Path="basics/popup/Back.png" Plist="sprite-sheets/Basics.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgFont" ActionTag="-105588696" Alpha="130" Tag="2302" IconVisible="False" PositionPercentXEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="13.5000" RightMargin="13.5000" TopMargin="92.2603" BottomMargin="18.0000" Scale9Enable="True" LeftEage="69" RightEage="69" TopEage="57" BottomEage="57" Scale9OriginX="69" Scale9OriginY="57" Scale9Width="15" Scale9Height="31" ctype="ImageViewObjectData">
                <Size X="513.0000" Y="538.3297" />
                <AnchorPoint ScaleX="0.5000" />
                <Position X="270.0000" Y="18.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.0278" />
                <PreSize X="0.9500" Y="0.8300" />
                <FileData Type="PlistSubImage" Path="basics/popup/Font.png" Plist="sprite-sheets/Basics.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutHeader" ActionTag="1408520440" Tag="2303" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="77.2466" RightMargin="77.2466" TopMargin="-69.9755" BottomMargin="578.6145" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="385.5069" Y="139.9510" />
                <Children>
                  <AbstractNodeData Name="_txtHeader" ActionTag="-719808448" UserData="fitSingleLine" Tag="2305" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-57.6849" RightMargin="-57.6849" TopMargin="88.2013" BottomMargin="-4.2503" IsCustomSize="True" FontSize="50" LabelText="GOLD OUT SUGGEST" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineSize="2" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="500.8767" Y="56.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="192.7534" Y="23.7497" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="235" G="245" B="189" />
                    <PrePosition X="0.5000" Y="0.1697" />
                    <PreSize X="1.2993" Y="0.4001" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="155" G="68" B="38" />
                    <ShadowColor A="255" R="155" G="68" B="38" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="270.0000" Y="648.5900" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="1.0000" />
                <PreSize X="0.7139" Y="0.2158" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_gridViewSuggestion" ActionTag="-773745294" Tag="2419" FrameEvent="ck.GridViewVertical" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="13.5000" RightMargin="13.5000" TopMargin="127.3182" BottomMargin="53.5087" ClipAble="True" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="513.0000" Y="467.7631" />
                <Children>
                  <AbstractNodeData Name="FileNode_1" ActionTag="552374696" Tag="2430" FrameEvent="Fake" IconVisible="True" PositionPercentXEnabled="True" LeftMargin="256.5000" RightMargin="256.5000" TopMargin="69.7633" BottomMargin="397.9998" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <AnchorPoint />
                    <Position X="256.5000" Y="397.9998" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.8509" />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="Normal" Path="_ccs/get-gold-suggest/GetGoldSuggestItem.csd" Plist="" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="270.0000" Y="287.3903" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.4431" />
                <PreSize X="0.9500" Y="0.7212" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutClose" ActionTag="1821350596" Tag="2313" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="491.5050" RightMargin="-26.5050" TopMargin="-22.7582" BottomMargin="596.3482" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="75.0000" Y="75.0000" />
                <Children>
                  <AbstractNodeData Name="_imgClose" ActionTag="160126025" Tag="2314" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="-1.0013" RightMargin="-1.0013" TopMargin="-16.7213" BottomMargin="11.7188" LeftEage="26" RightEage="26" TopEage="33" BottomEage="33" Scale9OriginX="26" Scale9OriginY="33" Scale9Width="25" Scale9Height="14" ctype="ImageViewObjectData">
                    <Size X="77.0025" Y="80.0025" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="37.5000" Y="51.7200" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.6896" />
                    <PreSize X="1.0267" Y="1.0667" />
                    <FileData Type="PlistSubImage" Path="buttons/rectangles/Close.png" Plist="sprite-sheets/Buttons.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5026" ScaleY="0.5236" />
                <Position X="529.2000" Y="635.6182" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.9800" Y="0.9800" />
                <PreSize X="0.1389" Y="0.1156" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="-0.0002" Y="0.0004" />
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