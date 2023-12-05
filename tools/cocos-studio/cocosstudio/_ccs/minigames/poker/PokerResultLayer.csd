<GameFile>
  <PropertyGroup Name="PokerResultLayer" Type="Layer" ID="2384bbeb-1f8e-4c82-b6be-cabd5fbaf49d" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="100" Speed="0.5000" ActivedAnimationName="AnimLose">
        <Timeline ActionTag="-1025000537" Property="Position">
          <PointFrame FrameIndex="0" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="20" X="0.0000" Y="12.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="40" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-900904923" Property="Position">
          <PointFrame FrameIndex="40" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="70" X="0.0000" Y="8.0000">
            <EasingData Type="0" />
          </PointFrame>
          <PointFrame FrameIndex="100" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </PointFrame>
        </Timeline>
        <Timeline ActionTag="-561573326" Property="Alpha">
          <IntFrame FrameIndex="40" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="55" Value="127">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="70" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="85" Value="127">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="100" Value="255">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="AnimWin" StartIndex="0" EndIndex="40">
          <RenderColor A="255" R="165" G="42" B="42" />
        </AnimationInfo>
        <AnimationInfo Name="AnimLose" StartIndex="40" EndIndex="100">
          <RenderColor A="255" R="0" G="128" B="0" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Layer" UserData="FullScreenPopup" Tag="548" ctype="GameLayerObjectData">
        <Size X="640.0000" Y="1136.0000" />
        <Children>
          <AbstractNodeData Name="_layoutContainer" ActionTag="1250263865" Tag="221" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="1136.0000" />
            <Children>
              <AbstractNodeData Name="_layoutTouch" ActionTag="1996120123" UserData="FullScreenBackground" Tag="218" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="153" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="568.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="0" G="0" B="0" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutWin" Visible="False" ActionTag="-1623567104" Tag="210" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <Children>
                  <AbstractNodeData Name="_imgLight1" ActionTag="84309450" Tag="184" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="105.0000" RightMargin="105.0000" TopMargin="298.2000" BottomMargin="411.8000" LeftEage="84" RightEage="84" TopEage="118" BottomEage="118" Scale9OriginX="84" Scale9OriginY="118" Scale9Width="262" Scale9Height="190" ctype="ImageViewObjectData">
                    <Size X="430.0000" Y="426.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="320.0000" Y="624.8000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5500" />
                    <PreSize X="0.6719" Y="0.3750" />
                    <FileData Type="PlistSubImage" Path="basics/effects/RadialYellow.png" Plist="sprite-sheets/Basics.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgLight2" ActionTag="-407567791" Tag="219" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="105.0000" RightMargin="105.0000" TopMargin="298.2000" BottomMargin="411.8000" LeftEage="84" RightEage="84" TopEage="118" BottomEage="118" Scale9OriginX="84" Scale9OriginY="118" Scale9Width="262" Scale9Height="190" ctype="ImageViewObjectData">
                    <Size X="430.0000" Y="426.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="320.0000" Y="624.8000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5500" />
                    <PreSize X="0.6719" Y="0.3750" />
                    <FileData Type="PlistSubImage" Path="basics/effects/RadialYellow.png" Plist="sprite-sheets/Basics.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_imgFrameWin" ActionTag="1099207306" Tag="183" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" TopMargin="180.2000" BottomMargin="293.8000" LeftEage="210" RightEage="210" TopEage="218" BottomEage="218" Scale9OriginX="210" Scale9OriginY="218" Scale9Width="219" Scale9Height="226" ctype="ImageViewObjectData">
                    <Size X="640.0000" Y="662.0000" />
                    <Children>
                      <AbstractNodeData Name="_txtPrize" ActionTag="1975920133" UserData="EmptyString" Tag="185" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="203.5000" RightMargin="203.5000" TopMargin="179.2200" BottomMargin="430.7800" IsCustomSize="True" FontSize="45" LabelText="TXT_FULL_HOUSE" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-3.0000" ShadowEnabled="True" ctype="TextObjectData">
                        <Size X="233.0000" Y="52.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="320.0000" Y="456.7800" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.6900" />
                        <PreSize X="0.3641" Y="0.0785" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="0" G="111" B="91" />
                        <ShadowColor A="255" R="0" G="111" B="91" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="320.0000" Y="624.8000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5500" />
                    <PreSize X="1.0000" Y="0.5827" />
                    <FileData Type="PlistSubImage" Path="game/popups/result/Background.png" Plist="sprite-sheets/Game.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_nodeWinEmo" ActionTag="-1057591169" Tag="2997" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="320.0000" RightMargin="320.0000" TopMargin="533.9200" BottomMargin="602.0800" ctype="SingleNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <Children>
                      <AbstractNodeData Name="_layoutWinEmo" ActionTag="-1025000537" Tag="209" IconVisible="False" PositionPercentXEnabled="True" LeftMargin="-320.0000" RightMargin="-320.0000" TopMargin="-101.8000" BottomMargin="-98.2000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                        <Size X="640.0000" Y="200.0000" />
                        <Children>
                          <AbstractNodeData Name="_imgWinEmo1" ActionTag="-1277611681" Tag="210" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="7.0000" RightMargin="455.0000" TopMargin="-83.0000" LeftEage="58" RightEage="58" TopEage="93" BottomEage="93" Scale9OriginX="58" Scale9OriginY="93" Scale9Width="62" Scale9Height="97" ctype="ImageViewObjectData">
                            <Size X="178.0000" Y="283.0000" />
                            <AnchorPoint ScaleX="0.5000" />
                            <Position X="96.0000" />
                            <Scale ScaleX="0.9000" ScaleY="0.9000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.1500" />
                            <PreSize X="0.2781" Y="1.4150" />
                            <FileData Type="PlistSubImage" Path="ui/PokerWinEmo.png" Plist="sprite-sheets/Poker.plist" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="_imgWinEmo2" ActionTag="-68637941" Tag="211" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="455.0000" RightMargin="7.0000" TopMargin="-83.0000" FlipX="True" LeftEage="58" RightEage="58" TopEage="93" BottomEage="93" Scale9OriginX="58" Scale9OriginY="93" Scale9Width="62" Scale9Height="97" ctype="ImageViewObjectData">
                            <Size X="178.0000" Y="283.0000" />
                            <AnchorPoint ScaleX="0.5000" />
                            <Position X="544.0000" />
                            <Scale ScaleX="0.9000" ScaleY="0.9000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.8500" />
                            <PreSize X="0.2781" Y="1.4150" />
                            <FileData Type="PlistSubImage" Path="ui/PokerWinEmo.png" Plist="sprite-sheets/Poker.plist" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position Y="1.8000" />
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
                    <AnchorPoint />
                    <Position X="320.0000" Y="602.0800" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5300" />
                    <PreSize X="0.0000" Y="0.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_btnCollect" ActionTag="1551816643" Tag="186" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="210.9840" RightMargin="223.0160" TopMargin="689.6072" BottomMargin="365.3928" TouchEnable="True" FontSize="14" Scale9Enable="True" LeftEage="15" RightEage="15" TopEage="11" BottomEage="11" Scale9OriginX="15" Scale9OriginY="11" Scale9Width="176" Scale9Height="59" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="ButtonObjectData">
                    <Size X="206.0000" Y="81.0000" />
                    <Children>
                      <AbstractNodeData Name="_txtCollect" ActionTag="-2075068128" Tag="187" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="47.5000" RightMargin="47.5000" TopMargin="6.4500" BottomMargin="14.5500" FontSize="50" LabelText="Collect" OutlineSize="2" OutlineEnabled="True" ShadowOffsetX="1.0000" ShadowOffsetY="-1.0000" ShadowEnabled="True" ctype="TextObjectData">
                        <Size X="111.0000" Y="60.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="103.0000" Y="44.5500" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5500" />
                        <PreSize X="0.5388" Y="0.7407" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="0" G="128" B="0" />
                        <ShadowColor A="255" R="0" G="128" B="0" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="313.9840" Y="405.8928" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.4906" Y="0.3573" />
                    <PreSize X="0.3219" Y="0.0713" />
                    <TextColor A="255" R="65" G="65" B="70" />
                    <DisabledFileData Type="PlistSubImage" Path="buttons/rectangles/Green.png" Plist="sprite-sheets/Buttons.plist" />
                    <PressedFileData Type="PlistSubImage" Path="buttons/rectangles/Green.png" Plist="sprite-sheets/Buttons.plist" />
                    <NormalFileData Type="PlistSubImage" Path="buttons/rectangles/Green.png" Plist="sprite-sheets/Buttons.plist" />
                    <OutlineColor A="255" R="255" G="0" B="0" />
                    <ShadowColor A="255" R="110" G="110" B="110" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="568.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutLose" ActionTag="-1796470198" Tag="211" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <Children>
                  <AbstractNodeData Name="_imgFrameLose" ActionTag="730755863" Tag="209" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" TopMargin="409.9200" BottomMargin="478.0800" LeftEage="68" RightEage="68" TopEage="22" BottomEage="22" Scale9OriginX="68" Scale9OriginY="22" Scale9Width="500" Scale9Height="204" ctype="ImageViewObjectData">
                    <Size X="640.0000" Y="248.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="320.0000" Y="602.0800" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5300" />
                    <PreSize X="1.0000" Y="0.2183" />
                    <FileData Type="PlistSubImage" Path="game/popups/result/Background2.png" Plist="sprite-sheets/Game.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_nodeLoseEmo" ActionTag="-691841514" Tag="2998" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="320.0000" RightMargin="320.0000" TopMargin="533.9200" BottomMargin="602.0800" ctype="SingleNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <Children>
                      <AbstractNodeData Name="_layoutLoseEmo" ActionTag="-900904923" Tag="212" IconVisible="False" LeftMargin="-320.0000" RightMargin="-320.0000" TopMargin="-100.0000" BottomMargin="-100.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                        <Size X="640.0000" Y="200.0000" />
                        <Children>
                          <AbstractNodeData Name="_imgLoseEmo1" ActionTag="-1172476002" Tag="213" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-5.0000" RightMargin="443.0000" TopMargin="-99.0000" FlipX="True" LeftEage="58" RightEage="58" TopEage="93" BottomEage="93" Scale9OriginX="58" Scale9OriginY="93" Scale9Width="86" Scale9Height="113" ctype="ImageViewObjectData">
                            <Size X="202.0000" Y="299.0000" />
                            <AnchorPoint ScaleX="0.5000" />
                            <Position X="96.0000" />
                            <Scale ScaleX="0.9000" ScaleY="0.9000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.1500" />
                            <PreSize X="0.3156" Y="1.4950" />
                            <FileData Type="PlistSubImage" Path="ui/PokerLoseEmo.png" Plist="sprite-sheets/Poker.plist" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="_imgLoseEmo2" ActionTag="1041092847" Tag="214" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="443.0000" RightMargin="-5.0000" TopMargin="-99.0000" LeftEage="58" RightEage="58" TopEage="93" BottomEage="93" Scale9OriginX="58" Scale9OriginY="93" Scale9Width="86" Scale9Height="113" ctype="ImageViewObjectData">
                            <Size X="202.0000" Y="299.0000" />
                            <AnchorPoint ScaleX="0.5000" />
                            <Position X="544.0000" />
                            <Scale ScaleX="0.9000" ScaleY="0.9000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.8500" />
                            <PreSize X="0.3156" Y="1.4950" />
                            <FileData Type="PlistSubImage" Path="ui/PokerLoseEmo.png" Plist="sprite-sheets/Poker.plist" />
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
                    <AnchorPoint />
                    <Position X="320.0000" Y="602.0800" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5300" />
                    <PreSize X="0.0000" Y="0.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_txtFailed" ActionTag="-1832214774" Tag="217" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="274.5000" RightMargin="274.5000" TopMargin="363.1000" BottomMargin="703.9000" FontSize="60" LabelText="LOSE" OutlineEnabled="True" ShadowOffsetX="0.0000" ShadowOffsetY="-3.0000" ShadowEnabled="True" ctype="TextObjectData">
                    <Size X="91.0000" Y="69.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="320.0000" Y="738.4000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.6500" />
                    <PreSize X="0.1422" Y="0.0607" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="86" G="86" B="86" />
                    <ShadowColor A="255" R="47" G="47" B="47" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_txtTapToClose" ActionTag="-561573326" Tag="76" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="262.5000" RightMargin="262.5000" TopMargin="1062.7000" BottomMargin="40.3000" FontSize="30" LabelText="Tap to close" ShadowOffsetX="0.0000" ShadowOffsetY="-3.0000" ShadowEnabled="True" ctype="TextObjectData">
                    <Size X="115.0000" Y="33.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="320.0000" Y="56.8000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.0500" />
                    <PreSize X="0.1797" Y="0.0290" />
                    <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                    <OutlineColor A="255" R="86" G="86" B="86" />
                    <ShadowColor A="255" R="47" G="47" B="47" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="568.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
            </Children>
            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
            <Position X="320.0000" Y="568.0000" />
            <Scale ScaleX="1.0000" ScaleY="1.0000" />
            <CColor A="255" R="255" G="255" B="255" />
            <PrePosition X="0.5000" Y="0.5000" />
            <PreSize X="1.0000" Y="1.0000" />
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