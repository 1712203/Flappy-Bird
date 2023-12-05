<GameFile>
  <PropertyGroup Name="Event15MilestonePopup" Type="Layer" ID="4d4634bc-49b4-41b7-9245-d23b08ac5974" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="0" Speed="1.0000" ActivedAnimationName="show" />
      <AnimationList>
        <AnimationInfo Name="show" StartIndex="0" EndIndex="30">
          <RenderColor A="255" R="238" G="232" B="170" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Layer" Tag="216" ctype="GameLayerObjectData">
        <Size X="640.0000" Y="1136.0000" />
        <Children>
          <AbstractNodeData Name="_imgPopup" ActionTag="998183463" Tag="217" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" TopMargin="364.3800" BottomMargin="182.6200" TouchEnable="True" LeftEage="211" RightEage="211" TopEage="194" BottomEage="194" Scale9OriginX="211" Scale9OriginY="194" Scale9Width="218" Scale9Height="201" ctype="ImageViewObjectData">
            <Size X="640.0000" Y="589.0000" />
            <Children>
              <AbstractNodeData Name="_imgProgressBg" ActionTag="1661821799" Tag="233" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="53.8000" RightMargin="92.2000" TopMargin="446.9200" BottomMargin="117.0800" Scale9Enable="True" LeftEage="252" RightEage="232" Scale9OriginX="252" Scale9Width="9" Scale9Height="35" ctype="ImageViewObjectData">
                <Size X="494.0000" Y="25.0000" />
                <Children>
                  <AbstractNodeData Name="_imgProgress" ActionTag="-1276824097" Tag="234" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="5.4340" RightMargin="459.5660" TopMargin="4.0000" BottomMargin="8.0000" Scale9Enable="True" LeftEage="15" RightEage="14" Scale9OriginX="15" Scale9Width="100" Scale9Height="18" ctype="ImageViewObjectData">
                    <Size X="29.0000" Y="13.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgFrameBubble" ActionTag="182861029" Tag="235" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="26.6800" RightMargin="-62.6800" TopMargin="36.0001" BottomMargin="-73.0001" LeftEage="9" RightEage="9" TopEage="4" BottomEage="4" Scale9OriginX="9" Scale9OriginY="4" Scale9Width="47" Scale9Height="42" ctype="ImageViewObjectData">
                        <Size X="65.0000" Y="50.0000" />
                        <Children>
                          <AbstractNodeData Name="_txtAccum" ActionTag="-1569450400" Tag="3177" IconVisible="False" LeftMargin="7.9522" RightMargin="37.0478" TopMargin="15.6468" BottomMargin="3.3532" FontSize="25" LabelText="0" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                            <Size X="20.0000" Y="31.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="17.9522" Y="18.8532" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.2762" Y="0.3771" />
                            <PreSize X="0.3077" Y="0.6200" />
                            <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                            <OutlineColor A="255" R="26" G="26" B="26" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="_imgIcon" ActionTag="-830309715" Tag="3163" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="19.5700" RightMargin="-3.5700" TopMargin="3.5650" BottomMargin="-8.5650" LeftEage="13" RightEage="13" TopEage="10" BottomEage="10" Scale9OriginX="13" Scale9OriginY="10" Scale9Width="23" Scale9Height="35" ctype="ImageViewObjectData">
                            <Size X="49.0000" Y="55.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="44.0700" Y="18.9350" />
                            <Scale ScaleX="0.6000" ScaleY="0.6000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.6780" Y="0.3787" />
                            <PreSize X="0.7538" Y="1.1000" />
                            <FileData Type="PlistSubImage" Path="event15_cat_head.png" Plist="sprite-sheets/van-cat.plist" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleY="1.0000" />
                        <Position X="26.6800" Y="-23.0001" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.9200" Y="-1.7692" />
                        <PreSize X="2.2414" Y="3.8462" />
                        <FileData Type="PlistSubImage" Path="event15_frame_kittybank.png" Plist="sprite-sheets/van-cat.plist" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleY="0.5000" />
                    <Position X="5.4340" Y="14.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.0110" Y="0.5800" />
                    <PreSize X="0.0587" Y="0.5200" />
                    <FileData Type="PlistSubImage" Path="event15_progress_milestone_green.png" Plist="sprite-sheets/van-cat.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="300.8000" Y="129.5800" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.4700" Y="0.2200" />
                <PreSize X="0.7719" Y="0.0424" />
                <FileData Type="PlistSubImage" Path="event15_progress_milestone.png" Plist="sprite-sheets/van-cat.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_btnClaim" ActionTag="226792581" Tag="474" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="200.0000" RightMargin="200.0000" TopMargin="603.1932" BottomMargin="-102.1932" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="210" Scale9Height="66" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="240.0000" Y="88.0000" />
                <Children>
                  <AbstractNodeData Name="_txtClaim" ActionTag="1041512637" Tag="219" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="70.0000" RightMargin="70.0000" TopMargin="16.3600" BottomMargin="21.6400" FontSize="40" LabelText="Claim" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineSize="2" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="100.0000" Y="50.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="120.0000" Y="46.6400" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5300" />
                    <PreSize X="0.4167" Y="0.5682" />
                    <FontResource Type="Normal" Path="fonts/LilitaOneRegular.ttf" Plist="" />
                    <OutlineColor A="255" R="0" G="128" B="0" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="-58.1932" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="-0.0988" />
                <PreSize X="0.3750" Y="0.1494" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="PlistSubImage" Path="buttons/rectangles/02_Green.png" Plist="sprite-sheets/Buttons.plist" />
                <PressedFileData Type="PlistSubImage" Path="buttons/rectangles/02_Green.png" Plist="sprite-sheets/Buttons.plist" />
                <NormalFileData Type="PlistSubImage" Path="buttons/rectangles/02_Green.png" Plist="sprite-sheets/Buttons.plist" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="_btnClose" ActionTag="-739055792" Tag="1980" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="546.7360" RightMargin="25.2640" TopMargin="-291.2111" BottomMargin="804.2111" TouchEnable="True" FontSize="14" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="38" Scale9Height="54" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                <Size X="68.0000" Y="76.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="580.7360" Y="842.2111" />
                <Scale ScaleX="0.7000" ScaleY="0.7000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.9074" Y="1.4299" />
                <PreSize X="0.1063" Y="0.1290" />
                <TextColor A="255" R="65" G="65" B="70" />
                <DisabledFileData Type="PlistSubImage" Path="buttons/circles/Close.png" Plist="sprite-sheets/Buttons.plist" />
                <PressedFileData Type="PlistSubImage" Path="buttons/circles/Close.png" Plist="sprite-sheets/Buttons.plist" />
                <NormalFileData Type="PlistSubImage" Path="buttons/circles/Close.png" Plist="sprite-sheets/Buttons.plist" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="_imgRibbon" CanEdit="False" ActionTag="-1320985977" Tag="221" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" TopMargin="-402.1700" BottomMargin="222.1700" LeftEage="138" RightEage="138" TopEage="33" BottomEage="33" Scale9OriginX="138" Scale9OriginY="33" Scale9Width="364" Scale9Height="703" ctype="ImageViewObjectData">
                <Size X="640.0000" Y="769.0000" />
                <Children>
                  <AbstractNodeData Name="_imgGift" ActionTag="-738916068" Tag="223" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="268.5000" RightMargin="268.5000" TopMargin="187.9100" BottomMargin="469.0900" LeftEage="21" RightEage="21" TopEage="24" BottomEage="24" Scale9OriginX="21" Scale9OriginY="24" Scale9Width="61" Scale9Height="64" ctype="ImageViewObjectData">
                    <Size X="103.0000" Y="112.0000" />
                    <AnchorPoint ScaleX="0.5000" />
                    <Position X="320.0000" Y="469.0900" />
                    <Scale ScaleX="1.4000" ScaleY="1.4000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.6100" />
                    <PreSize X="0.1609" Y="0.1456" />
                    <FileData Type="PlistSubImage" Path="event15_icon_gift.png" Plist="sprite-sheets/van-cat.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="606.6700" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="1.0300" />
                <PreSize X="1.0000" Y="1.3056" />
                <FileData Type="PlistSubImage" Path="event15_ribbon.png" Plist="sprite-sheets/van-cat.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_txtNote" ActionTag="-1995527556" Tag="226" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="74.0000" RightMargin="74.0000" TopMargin="32.4634" BottomMargin="444.6456" IsCustomSize="True" FontSize="25" LabelText="EVENT15_MILESTONE" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                <Size X="492.0000" Y="111.8909" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="500.5911" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.8499" />
                <PreSize X="0.7688" Y="0.1900" />
                <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                <OutlineColor A="255" R="255" G="0" B="0" />
                <ShadowColor A="255" R="110" G="110" B="110" />
              </AbstractNodeData>
              <AbstractNodeData Name="_itemInfoBubbleWidget" ActionTag="1770648717" VisibleForFrame="False" Tag="332" FrameEvent="ItemInfoBubbleWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="294.4000" RightMargin="345.6000" TopMargin="378.1969" BottomMargin="210.8031" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="294.4000" Y="210.8031" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.4600" Y="0.3579" />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="_ccs/ui/ItemInfoBubbleWidget.csd" Plist="" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="320.0000" Y="477.1200" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.4200" />
            <PreSize X="1.0000" Y="0.5185" />
            <FileData Type="PlistSubImage" Path="event15_board_milestone.png" Plist="sprite-sheets/van-cat.plist" />
          </AbstractNodeData>
        </Children>
      </ObjectData>
    </Content>
  </Content>
</GameFile>