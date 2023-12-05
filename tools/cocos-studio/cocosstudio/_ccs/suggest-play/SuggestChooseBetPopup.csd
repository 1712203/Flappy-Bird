<GameFile>
  <PropertyGroup Name="SuggestChooseBetPopup" Type="Node" ID="ca74bf58-96a3-43db-9096-dc277bef2060" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" />
      <AnimationList>
        <AnimationInfo Name="suggestion" StartIndex="0" EndIndex="0">
          <RenderColor A="255" R="148" G="0" B="211" />
        </AnimationInfo>
        <AnimationInfo Name="waitingJoin" StartIndex="10" EndIndex="10">
          <RenderColor A="255" R="160" G="82" B="45" />
        </AnimationInfo>
        <AnimationInfo Name="joinFailed" StartIndex="20" EndIndex="20">
          <RenderColor A="255" R="186" G="85" B="211" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="28" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_layoutPopup" ActionTag="1617297498" Tag="29" IconVisible="False" LeftMargin="-200.0000" RightMargin="-200.0000" TopMargin="-125.0000" BottomMargin="-125.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="400.0000" Y="250.0000" />
            <Children>
              <AbstractNodeData Name="_imgBgr" ActionTag="-1080448181" Tag="30" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="0.0000" RightMargin="0.0000" TopMargin="-0.7690" BottomMargin="0.7690" Scale9Enable="True" LeftEage="16" RightEage="16" TopEage="14" BottomEage="14" Scale9OriginX="16" Scale9OriginY="14" Scale9Width="1" Scale9Height="1" ctype="ImageViewObjectData">
                <Size X="400.0000" Y="250.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="200.0000" Y="125.7690" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="26" G="26" B="26" />
                <PrePosition X="0.5000" Y="0.5031" />
                <PreSize X="1.0000" Y="1.0000" />
                <FileData Type="PlistSubImage" Path="basics/other/Box_17.png" Plist="sprite-sheets/Basics.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgBgrDup" ActionTag="-1935532288" Tag="1258" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Enable="True" LeftEage="16" RightEage="16" TopEage="14" BottomEage="14" Scale9OriginX="16" Scale9OriginY="14" Scale9Width="1" Scale9Height="1" ctype="ImageViewObjectData">
                <Size X="400.0000" Y="250.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="200.0000" Y="125.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="26" G="26" B="26" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <FileData Type="PlistSubImage" Path="basics/other/Box_17.png" Plist="sprite-sheets/Basics.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_btnAccept" ActionTag="1026419205" Tag="163" FrameEvent="AsyncButton" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="212.0000" RightMargin="28.0000" TopMargin="170.4000" BottomMargin="24.6000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="160.0000" Y="55.0000" />
                <Children>
                  <AbstractNodeData Name="_imgButtonAccept" ActionTag="952094233" Tag="164" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftEage="62" RightEage="62" TopEage="30" BottomEage="30" Scale9OriginX="62" Scale9OriginY="30" Scale9Width="82" Scale9Height="21" ctype="ImageViewObjectData">
                    <Size X="160.0000" Y="55.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="80.0000" Y="27.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="PlistSubImage" Path="buttons/rectangles/Green.png" Plist="sprite-sheets/Buttons.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_txtButtonAccept" ActionTag="-205146592" UserData="fitSingleLine, uppercase" Tag="165" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="8.0000" RightMargin="8.0000" TopMargin="4.3500" BottomMargin="7.6500" IsCustomSize="True" FontSize="30" LabelText="ACCEPT" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="144.0000" Y="43.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="80.0000" Y="29.1500" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5300" />
                    <PreSize X="0.9000" Y="0.7818" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="11" G="102" B="57" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgLoadingButtonAccept" ActionTag="25542555" VisibleForFrame="False" Tag="166" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="55.0000" RightMargin="55.0000" TopMargin="0.3000" BottomMargin="4.7000" LeftEage="23" RightEage="23" TopEage="23" BottomEage="23" Scale9OriginX="23" Scale9OriginY="23" Scale9Width="82" Scale9Height="82" ctype="ImageViewObjectData">
                    <Size X="50.0000" Y="50.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="80.0000" Y="29.7000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5400" />
                    <PreSize X="0.3125" Y="0.9091" />
                    <FileData Type="Normal" Path="sprites/icons/color/loading/LoadingSpinner.png" Plist="" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="292.0000" Y="52.1000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.7300" Y="0.2084" />
                <PreSize X="0.4000" Y="0.2200" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_btnDecline" ActionTag="-1174755934" Tag="159" FrameEvent="AsyncButton" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="28.0000" RightMargin="212.0000" TopMargin="170.4000" BottomMargin="24.6000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="160.0000" Y="55.0000" />
                <Children>
                  <AbstractNodeData Name="_imgButtonDecline" ActionTag="-2122827471" Tag="160" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftEage="62" RightEage="62" TopEage="30" BottomEage="30" Scale9OriginX="62" Scale9OriginY="30" Scale9Width="82" Scale9Height="21" ctype="ImageViewObjectData">
                    <Size X="160.0000" Y="55.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="80.0000" Y="27.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="PlistSubImage" Path="buttons/rectangles/Red.png" Plist="sprite-sheets/Buttons.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_txtButtonDecline" ActionTag="-124460707" UserData="fitSingleLine, uppercase" Tag="161" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="8.0000" RightMargin="8.0000" TopMargin="4.3500" BottomMargin="7.6500" IsCustomSize="True" FontSize="30" LabelText="DECLINE" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="144.0000" Y="43.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="80.0000" Y="29.1500" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5300" />
                    <PreSize X="0.9000" Y="0.7818" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="164" G="49" B="41" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgLoadingButtonDecline" ActionTag="173227037" VisibleForFrame="False" Tag="162" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="55.0000" RightMargin="55.0000" TopMargin="0.3000" BottomMargin="4.7000" LeftEage="23" RightEage="23" TopEage="23" BottomEage="23" Scale9OriginX="23" Scale9OriginY="23" Scale9Width="82" Scale9Height="82" ctype="ImageViewObjectData">
                    <Size X="50.0000" Y="50.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="80.0000" Y="29.7000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5400" />
                    <PreSize X="0.3125" Y="0.9091" />
                    <FileData Type="Normal" Path="sprites/icons/color/loading/LoadingSpinner.png" Plist="" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="108.0000" Y="52.1000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.2700" Y="0.2084" />
                <PreSize X="0.4000" Y="0.2200" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtWaiting" ActionTag="-168888654" UserData="uppercase" Tag="1175" FrameEvent="RichText" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="17.4550" RightMargin="17.4550" TopMargin="3.0856" BottomMargin="88.6884" IsCustomSize="True" FontSize="33" LabelText="WAITING JOIN SUGGESTION ROOM" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="365.0901" Y="158.2260" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="200.0000" Y="167.8014" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="169" G="255" B="219" />
                <PrePosition X="0.5000" Y="0.6712" />
                <PreSize X="0.9127" Y="0.6329" />
                <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                <OutlineColor A="255" R="11" G="102" B="57" />
                <ShadowColor A="255" R="0" G="0" B="0" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position />
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