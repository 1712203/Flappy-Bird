<GameFile>
  <PropertyGroup Name="SuggestPlayPopup" Type="Node" ID="b9ad3b18-1998-4230-ba98-84bb2c998556" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="20" Speed="1.0000" ActivedAnimationName="suggestion">
        <Timeline ActionTag="920139230" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="True" />
          <BoolFrame FrameIndex="10" Tween="False" Value="False" />
          <BoolFrame FrameIndex="20" Tween="False" Value="False" />
        </Timeline>
        <Timeline ActionTag="-1012787346" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="False" />
          <BoolFrame FrameIndex="10" Tween="False" Value="True" />
          <BoolFrame FrameIndex="20" Tween="False" Value="False" />
        </Timeline>
        <Timeline ActionTag="-88929822" Property="VisibleForFrame">
          <BoolFrame FrameIndex="0" Tween="False" Value="False" />
          <BoolFrame FrameIndex="10" Tween="False" Value="False" />
          <BoolFrame FrameIndex="20" Tween="False" Value="True" />
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="suggestion" StartIndex="0" EndIndex="0">
          <RenderColor A="150" R="148" G="0" B="211" />
        </AnimationInfo>
        <AnimationInfo Name="waitingJoin" StartIndex="10" EndIndex="10">
          <RenderColor A="150" R="160" G="82" B="45" />
        </AnimationInfo>
        <AnimationInfo Name="joinFailed" StartIndex="20" EndIndex="20">
          <RenderColor A="150" R="186" G="85" B="211" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="28" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_layoutPopup" ActionTag="1617297498" Tag="29" IconVisible="False" LeftMargin="-165.0000" RightMargin="-165.0000" TopMargin="-95.0000" BottomMargin="-95.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="330.0000" Y="190.0000" />
            <Children>
              <AbstractNodeData Name="_imgBgr" ActionTag="-1080448181" Tag="30" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Enable="True" LeftEage="16" RightEage="16" TopEage="14" BottomEage="14" Scale9OriginX="16" Scale9OriginY="14" Scale9Width="1" Scale9Height="1" ctype="ImageViewObjectData">
                <Size X="330.0000" Y="190.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="165.0000" Y="95.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <FileData Type="PlistSubImage" Path="basics/other/Box_17.png" Plist="sprite-sheets/Basics.plist" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutTitle" ActionTag="692989934" Tag="94" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" BottomMargin="145.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="330.0000" Y="45.0000" />
                <Children>
                  <AbstractNodeData Name="_imgTitleDecor01" ActionTag="832201403" Tag="90" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="25.5000" RightMargin="289.5000" TopMargin="14.5000" BottomMargin="14.5000" LeftEage="19" RightEage="19" TopEage="20" BottomEage="20" Scale9OriginX="19" Scale9OriginY="20" Scale9Width="22" Scale9Height="22" ctype="ImageViewObjectData">
                    <Size X="15.0000" Y="16.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="33.0000" Y="22.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.1000" Y="0.5000" />
                    <PreSize X="0.0455" Y="0.3556" />
                    <FileData Type="PlistSubImage" Path="basics/other/NumberBoard.png" Plist="sprite-sheets/Basics.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_txtTitle" ActionTag="-1326986090" UserData="fitSingleLine, uppercase" Tag="91" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="49.5000" RightMargin="49.5000" TopMargin="2.0000" BottomMargin="2.0000" IsCustomSize="True" FontSize="35" LabelText="SUGGESTION MATCH" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="231.0000" Y="41.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="165.0000" Y="22.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="0.7000" Y="0.9111" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="0" G="0" B="0" />
                    <ShadowColor A="255" R="0" G="0" B="0" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgTitleDecor02" ActionTag="-1447125296" Tag="92" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="289.5000" RightMargin="25.5000" TopMargin="14.5000" BottomMargin="14.5000" LeftEage="19" RightEage="19" TopEage="20" BottomEage="20" Scale9OriginX="19" Scale9OriginY="20" Scale9Width="22" Scale9Height="22" ctype="ImageViewObjectData">
                    <Size X="15.0000" Y="16.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="297.0000" Y="22.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.9000" Y="0.5000" />
                    <PreSize X="0.0455" Y="0.3556" />
                    <FileData Type="PlistSubImage" Path="basics/other/NumberBoard.png" Plist="sprite-sheets/Basics.plist" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                <Position X="165.0000" Y="190.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="1.0000" />
                <PreSize X="1.0000" Y="0.2368" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutSuggestion" ActionTag="920139230" Tag="1172" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" ctype="PanelObjectData">
                <Size X="330.0000" Y="190.0000" />
                <Children>
                  <AbstractNodeData Name="_layoutBetAmount" ActionTag="531785917" Tag="95" IconVisible="False" PositionPercentXEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" TopMargin="40.0000" BottomMargin="105.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="330.0000" Y="45.0000" />
                    <Children>
                      <AbstractNodeData Name="_txtBetAmountHeader" ActionTag="979840275" UserData="fitSingleLine, uppercase" Tag="97" IconVisible="False" PositionPercentYEnabled="True" LeftMargin="15.0000" RightMargin="210.0000" TopMargin="5.0000" BottomMargin="5.0000" IsCustomSize="True" FontSize="25" LabelText="BET AMOUNT:" HorizontalAlignmentType="HT_Right" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="105.0000" Y="35.0000" />
                        <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                        <Position X="120.0000" Y="22.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.3636" Y="0.5000" />
                        <PreSize X="0.3182" Y="0.7778" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="0" G="0" B="0" />
                        <ShadowColor A="255" R="0" G="0" B="0" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_imgIconCoin" ActionTag="174422143" Tag="99" IconVisible="False" PositionPercentYEnabled="True" LeftMargin="125.0000" RightMargin="155.0000" TopMargin="-2.5000" BottomMargin="-2.5000" LeftEage="42" RightEage="42" TopEage="42" BottomEage="42" Scale9OriginX="42" Scale9OriginY="42" Scale9Width="44" Scale9Height="44" ctype="ImageViewObjectData">
                        <Size X="50.0000" Y="50.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="125.0000" Y="22.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.3788" Y="0.5000" />
                        <PreSize X="0.1515" Y="1.1111" />
                        <FileData Type="PlistSubImage" Path="icons/color/coins/Coin.png" Plist="sprite-sheets/Nocis.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_txtBetAmount" ActionTag="1959277234" UserData="fitSingleLine" Tag="100" IconVisible="False" PositionPercentYEnabled="True" LeftMargin="175.0000" RightMargin="20.0000" TopMargin="3.5000" BottomMargin="3.5000" IsCustomSize="True" FontSize="30" LabelText="100.000" VerticalAlignmentType="VT_Center" OutlineSize="2" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="135.0000" Y="38.0000" />
                        <AnchorPoint ScaleY="0.5000" />
                        <Position X="175.0000" Y="22.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="222" B="0" />
                        <PrePosition X="0.5303" Y="0.5000" />
                        <PreSize X="0.4091" Y="0.8444" />
                        <FontResource Type="Normal" Path="fonts/GroBold.ttf" Plist="" />
                        <OutlineColor A="255" R="92" G="25" B="17" />
                        <ShadowColor A="255" R="0" G="0" B="0" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                    <Position X="165.0000" Y="150.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.7895" />
                    <PreSize X="1.0000" Y="0.2368" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_btnAccept" ActionTag="1026419205" Tag="163" FrameEvent="AsyncButton" IconVisible="False" PositionPercentXEnabled="True" VerticalEdge="BottomEdge" LeftMargin="177.5000" RightMargin="12.5000" TopMargin="92.5000" BottomMargin="42.5000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="140.0000" Y="55.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgButtonAccept" ActionTag="952094233" Tag="164" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftEage="62" RightEage="62" TopEage="30" BottomEage="30" Scale9OriginX="62" Scale9OriginY="30" Scale9Width="82" Scale9Height="21" ctype="ImageViewObjectData">
                        <Size X="140.0000" Y="55.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="70.0000" Y="27.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="1.0000" Y="1.0000" />
                        <FileData Type="PlistSubImage" Path="buttons/rectangles/Green.png" Plist="sprite-sheets/Buttons.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_txtButtonAccept" ActionTag="-205146592" UserData="fitSingleLine, uppercase" Tag="165" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="7.0000" RightMargin="7.0000" TopMargin="4.3500" BottomMargin="7.6500" IsCustomSize="True" FontSize="30" LabelText="ACCEPT" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="126.0000" Y="43.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="70.0000" Y="29.1500" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5300" />
                        <PreSize X="0.9000" Y="0.7818" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="11" G="102" B="57" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_imgLoadingButtonAccept" ActionTag="25542555" VisibleForFrame="False" Tag="166" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="45.0000" RightMargin="45.0000" TopMargin="0.3000" BottomMargin="4.7000" LeftEage="23" RightEage="23" TopEage="23" BottomEage="23" Scale9OriginX="23" Scale9OriginY="23" Scale9Width="82" Scale9Height="82" ctype="ImageViewObjectData">
                        <Size X="50.0000" Y="50.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="70.0000" Y="29.7000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5400" />
                        <PreSize X="0.3571" Y="0.9091" />
                        <FileData Type="Normal" Path="sprites/icons/color/loading/LoadingSpinner.png" Plist="" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="247.5000" Y="70.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.7500" Y="0.3684" />
                    <PreSize X="0.4242" Y="0.2895" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_btnDecline" ActionTag="-1174755934" Tag="159" FrameEvent="AsyncButton" IconVisible="False" PositionPercentXEnabled="True" VerticalEdge="BottomEdge" LeftMargin="12.5000" RightMargin="177.5000" TopMargin="92.5000" BottomMargin="42.5000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="140.0000" Y="55.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgButtonDecline" ActionTag="-2122827471" Tag="160" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftEage="62" RightEage="62" TopEage="30" BottomEage="30" Scale9OriginX="62" Scale9OriginY="30" Scale9Width="82" Scale9Height="21" ctype="ImageViewObjectData">
                        <Size X="140.0000" Y="55.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="70.0000" Y="27.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="1.0000" Y="1.0000" />
                        <FileData Type="PlistSubImage" Path="buttons/rectangles/Red.png" Plist="sprite-sheets/Buttons.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_txtButtonDecline" ActionTag="-124460707" UserData="fitSingleLine, uppercase" Tag="161" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="7.0000" RightMargin="7.0000" TopMargin="4.3500" BottomMargin="7.6500" IsCustomSize="True" FontSize="30" LabelText="DECLINE" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="126.0000" Y="43.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="70.0000" Y="29.1500" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5300" />
                        <PreSize X="0.9000" Y="0.7818" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="164" G="49" B="41" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_imgLoadingButtonDecline" ActionTag="173227037" VisibleForFrame="False" Tag="162" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="45.0000" RightMargin="45.0000" TopMargin="0.3000" BottomMargin="4.7000" LeftEage="23" RightEage="23" TopEage="23" BottomEage="23" Scale9OriginX="23" Scale9OriginY="23" Scale9Width="82" Scale9Height="82" ctype="ImageViewObjectData">
                        <Size X="50.0000" Y="50.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="70.0000" Y="29.7000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5400" />
                        <PreSize X="0.3571" Y="0.9091" />
                        <FileData Type="Normal" Path="sprites/icons/color/loading/LoadingSpinner.png" Plist="" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="82.5000" Y="70.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.2500" Y="0.3684" />
                    <PreSize X="0.4242" Y="0.2895" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_txtNeverSuggestToday" ActionTag="2074434128" UserData="uppercase" Tag="168" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="103.0000" RightMargin="70.0000" TopMargin="155.6000" BottomMargin="7.4000" TouchEnable="True" FontSize="22" LabelText="NEVER SUGGEST TODAY" OutlineEnabled="True" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="157.0000" Y="27.0000" />
                    <Children>
                      <AbstractNodeData Name="_layoutNeverSuggestToday" ActionTag="1712806113" Tag="244" IconVisible="False" PositionPercentYEnabled="True" LeftMargin="-35.0000" RightMargin="162.0000" TopMargin="-1.5000" BottomMargin="-1.5000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                        <Size X="30.0000" Y="30.0000" />
                        <Children>
                          <AbstractNodeData Name="_imgToggleNeverSuggestTodayBackground" ActionTag="1376784142" Tag="245" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TopMargin="-0.2885" BottomMargin="-0.2885" LeftEage="17" RightEage="17" TopEage="17" BottomEage="17" Scale9OriginX="17" Scale9OriginY="17" Scale9Width="18" Scale9Height="19" ctype="ImageViewObjectData">
                            <Size X="30.0000" Y="30.5769" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="15.0000" Y="15.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="1.0000" Y="1.0192" />
                            <FileData Type="PlistSubImage" Path="basics/other/Box_09.png" Plist="sprite-sheets/Basics.plist" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="_imgCheckNeverSuggestToday" ActionTag="291864346" Tag="246" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-2.5000" RightMargin="-2.5000" TopMargin="-3.0000" BottomMargin="3.0000" LeftEage="20" RightEage="20" TopEage="18" BottomEage="18" Scale9OriginX="20" Scale9OriginY="18" Scale9Width="22" Scale9Height="20" ctype="ImageViewObjectData">
                            <Size X="35.0000" Y="30.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="15.0000" Y="18.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.6000" />
                            <PreSize X="1.1667" Y="1.0000" />
                            <FileData Type="PlistSubImage" Path="icons/color/other/Check.png" Plist="sprite-sheets/Nocis.plist" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                        <Position X="-5.0000" Y="13.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="-0.0318" Y="0.5000" />
                        <PreSize X="0.1911" Y="1.1111" />
                        <SingleColor A="255" R="150" G="200" B="255" />
                        <FirstColor A="255" R="150" G="200" B="255" />
                        <EndColor A="255" R="255" G="255" B="255" />
                        <ColorVector ScaleY="1.0000" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="181.5000" Y="20.9000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5500" Y="0.1100" />
                    <PreSize X="0.4758" Y="0.1421" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="0" G="0" B="0" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutWaitingJoin" ActionTag="-1012787346" VisibleForFrame="False" Tag="1173" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="330.0000" Y="190.0000" />
                <Children>
                  <AbstractNodeData Name="_txtWaiting" ActionTag="-168888654" UserData="uppercase" Tag="1175" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="16.5200" RightMargin="16.5200" TopMargin="47.2950" BottomMargin="13.0950" IsCustomSize="True" FontSize="30" LabelText="WAITING JOIN SUGGESTION ROOM" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="296.9600" Y="129.6100" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="165.0000" Y="77.9000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="169" G="255" B="219" />
                    <PrePosition X="0.5000" Y="0.4100" />
                    <PreSize X="0.8999" Y="0.6822" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="11" G="102" B="57" />
                    <ShadowColor A="255" R="0" G="0" B="0" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutJoinFailed" ActionTag="-88929822" VisibleForFrame="False" Tag="1190" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="330.0000" Y="190.0000" />
                <Children>
                  <AbstractNodeData Name="_txtJoinFailed" ActionTag="-318306712" UserData="uppercase" Tag="1191" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="16.5200" RightMargin="16.5200" TopMargin="47.2950" BottomMargin="13.0950" IsCustomSize="True" FontSize="30" LabelText="JOIN SUGGESTION ROOM FAILED" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                    <Size X="296.9600" Y="129.6100" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="165.0000" Y="77.9000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="175" B="169" />
                    <PrePosition X="0.5000" Y="0.4100" />
                    <PreSize X="0.8999" Y="0.6822" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="102" G="14" B="11" />
                    <ShadowColor A="255" R="0" G="0" B="0" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
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