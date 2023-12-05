<GameFile>
  <PropertyGroup Name="GourdCrabLayer" Type="Layer" ID="af252352-db54-4b5f-be2e-595248e4f7e1" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="180" Speed="1.0000">
        <Timeline ActionTag="-821912869" Property="Scale">
          <ScaleFrame FrameIndex="0" X="0.0010" Y="0.0010">
            <EasingData Type="26" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="150" X="1.0000" Y="1.0000">
            <EasingData Type="25" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="180" X="0.0010" Y="0.0010">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-821912869" Property="RotationSkew">
          <ScaleFrame FrameIndex="0" X="-135.0000" Y="-135.0000">
            <EasingData Type="26" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="0.0000" Y="0.0000">
            <EasingData Type="0" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="150" X="0.0000" Y="0.0000">
            <EasingData Type="25" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="180" X="-135.0000" Y="-135.0000">
            <EasingData Type="0" />
          </ScaleFrame>
        </Timeline>
        <Timeline ActionTag="-821912869" Property="Alpha">
          <IntFrame FrameIndex="0" Value="0">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="30" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="150" Value="255">
            <EasingData Type="0" />
          </IntFrame>
          <IntFrame FrameIndex="180" Value="0">
            <EasingData Type="0" />
          </IntFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="npcHint" StartIndex="0" EndIndex="180">
          <RenderColor A="255" R="46" G="139" B="87" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Layer" UserData="MainLayer" Tag="12087" ctype="GameLayerObjectData">
        <Size X="640.0000" Y="1136.0000" />
        <Children>
          <AbstractNodeData Name="_layoutRoot" ActionTag="-102539440" Tag="12834" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="640.0000" Y="1136.0000" />
            <Children>
              <AbstractNodeData Name="_layoutBackground" ActionTag="741177899" Tag="12835" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <Children>
                  <AbstractNodeData Name="_imgBackground" ActionTag="74460083" UserData="FullScreenBackground" Tag="13579" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TopMargin="-2.0448" BottomMargin="2.0448" LeftEage="211" RightEage="211" TopEage="276" BottomEage="276" Scale9OriginX="211" Scale9OriginY="276" Scale9Width="218" Scale9Height="584" ctype="ImageViewObjectData">
                    <Size X="640.0000" Y="1136.0000" />
                    <AnchorPoint ScaleX="0.5000" />
                    <Position X="320.0000" Y="2.0448" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.0018" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="Normal" Path="sprites/backgrounds/GourdCrab.png" Plist="" />
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
              <AbstractNodeData Name="_layoutUI" ActionTag="172833053" Tag="12845" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <Children>
                  <AbstractNodeData Name="_layoutHelp" ActionTag="1363330253" Tag="12846" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="13.7000" RightMargin="551.3000" TopMargin="12.4840" BottomMargin="1048.5160" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="75.0000" Y="75.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgHelpBgr" ActionTag="1076247231" Tag="12847" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftEage="27" RightEage="27" TopEage="27" BottomEage="27" Scale9OriginX="27" Scale9OriginY="27" Scale9Width="26" Scale9Height="28" ctype="ImageViewObjectData">
                        <Size X="75.0000" Y="75.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="37.5000" Y="37.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="1.0000" Y="1.0000" />
                        <FileData Type="PlistSubImage" Path="buttons/circles/Gray.png" Plist="sprite-sheets/Buttons.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_imgHelpIcon" ActionTag="1361530757" Tag="12848" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="22.5000" RightMargin="22.5000" TopMargin="14.0000" BottomMargin="14.0000" LeftEage="14" RightEage="14" TopEage="12" BottomEage="12" Scale9OriginX="14" Scale9OriginY="12" Scale9Width="2" Scale9Height="23" ctype="ImageViewObjectData">
                        <Size X="30.0000" Y="47.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="37.5000" Y="37.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.4000" Y="0.6267" />
                        <FileData Type="PlistSubImage" Path="icons/flat/Question.png" Plist="sprite-sheets/Nocis.plist" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="51.2000" Y="1086.0160" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.0800" Y="0.9560" />
                    <PreSize X="0.1172" Y="0.0660" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_layoutChat" ActionTag="-375836484" Tag="12849" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="566.5320" RightMargin="-1.5320" TopMargin="1059.7625" BottomMargin="1.2376" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="75.0000" Y="75.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgChatBgr" ActionTag="-1421995773" Tag="12850" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftEage="27" RightEage="27" TopEage="27" BottomEage="27" Scale9OriginX="27" Scale9OriginY="27" Scale9Width="26" Scale9Height="28" ctype="ImageViewObjectData">
                        <Size X="75.0000" Y="75.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="37.5000" Y="37.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="1.0000" Y="1.0000" />
                        <FileData Type="PlistSubImage" Path="buttons/circles/Gray.png" Plist="sprite-sheets/Buttons.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_imgChatIcon" ActionTag="-1388255341" Tag="12851" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="13.0000" RightMargin="13.0000" TopMargin="17.5000" BottomMargin="17.5000" LeftEage="14" RightEage="14" TopEage="12" BottomEage="12" Scale9OriginX="14" Scale9OriginY="12" Scale9Width="19" Scale9Height="13" ctype="ImageViewObjectData">
                        <Size X="49.0000" Y="40.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="37.5000" Y="37.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.6533" Y="0.5333" />
                        <FileData Type="PlistSubImage" Path="icons/flat/Chat.png" Plist="sprite-sheets/Nocis.plist" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="604.0320" Y="38.7376" />
                    <Scale ScaleX="0.8500" ScaleY="0.8500" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.9438" Y="0.0341" />
                    <PreSize X="0.1172" Y="0.0660" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_layoutExit" ActionTag="-497620651" Tag="12852" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-0.1240" RightMargin="565.1240" TopMargin="1059.7625" BottomMargin="1.2376" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="75.0000" Y="75.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgExitBgr" ActionTag="1342017642" Tag="12853" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftEage="27" RightEage="27" TopEage="27" BottomEage="27" Scale9OriginX="27" Scale9OriginY="27" Scale9Width="26" Scale9Height="28" ctype="ImageViewObjectData">
                        <Size X="75.0000" Y="75.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="37.5000" Y="37.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="1.0000" Y="1.0000" />
                        <FileData Type="PlistSubImage" Path="buttons/circles/Gray.png" Plist="sprite-sheets/Buttons.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_imgExitIcon" ActionTag="-976048741" Tag="12854" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="12.5600" RightMargin="19.4400" TopMargin="20.8500" BottomMargin="17.1500" LeftEage="14" RightEage="14" TopEage="12" BottomEage="12" Scale9OriginX="14" Scale9OriginY="12" Scale9Width="15" Scale9Height="13" ctype="ImageViewObjectData">
                        <Size X="43.0000" Y="37.0000" />
                        <AnchorPoint ScaleX="0.5800" ScaleY="0.5500" />
                        <Position X="37.5000" Y="37.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.5733" Y="0.4933" />
                        <FileData Type="PlistSubImage" Path="icons/flat/Exit.png" Plist="sprite-sheets/Nocis.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_imgExitIconDark" ActionTag="-863731202" VisibleForFrame="False" Tag="12855" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="12.5600" RightMargin="19.4400" TopMargin="20.8500" BottomMargin="17.1500" LeftEage="14" RightEage="14" TopEage="12" BottomEage="12" Scale9OriginX="14" Scale9OriginY="12" Scale9Width="15" Scale9Height="13" ctype="ImageViewObjectData">
                        <Size X="43.0000" Y="37.0000" />
                        <AnchorPoint ScaleX="0.5800" ScaleY="0.5500" />
                        <Position X="37.5000" Y="37.5000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.5733" Y="0.4933" />
                        <FileData Type="PlistSubImage" Path="icons/flat/ExitGreen.png" Plist="sprite-sheets/Nocis.plist" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="37.3760" Y="38.7376" />
                    <Scale ScaleX="0.8000" ScaleY="0.8000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.0584" Y="0.0341" />
                    <PreSize X="0.1172" Y="0.0660" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_gridOfferIcons" ActionTag="-1024703870" Tag="7256" FrameEvent="ck.OfferIconGrid" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="535.6000" RightMargin="4.4000" TopMargin="5.6801" BottomMargin="870.3199" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="100.0000" Y="260.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                    <Position X="585.6000" Y="1130.3199" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.9150" Y="0.9950" />
                    <PreSize X="0.1563" Y="0.2289" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
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
              <AbstractNodeData Name="_layoutHighlight" CanEdit="False" ActionTag="1104022248" Tag="12856" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ComboBoxIndex="1" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="0" G="0" B="0" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutDealer" ActionTag="243146997" Tag="13681" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" TopMargin="72.2928" BottomMargin="701.7072" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="362.0000" />
                <Children>
                  <AbstractNodeData Name="_layoutNPC" ActionTag="1645214565" Tag="13685" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="640.0000" Y="362.0000" />
                    <Children>
                      <AbstractNodeData Name="_npcWidget" ActionTag="1509951025" Tag="18744" FrameEvent="GourdCrabNPCWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="320.0000" RightMargin="320.0000" TopMargin="141.1800" BottomMargin="220.8200" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="320.0000" Y="220.8200" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.6100" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabNPCWidget.csd" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_layoutHintLetsBet" ActionTag="-821912869" Alpha="0" Tag="29215" RotationSkewX="-135.0000" RotationSkewY="-135.0000" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="362.3110" RightMargin="103.6890" TopMargin="24.6304" BottomMargin="237.3696" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                        <Size X="174.0000" Y="100.0000" />
                        <Children>
                          <AbstractNodeData Name="_imgBubbleBackgroundHintLetsBet" ActionTag="-238763449" Tag="29216" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" BottomMargin="-26.0000" Scale9Enable="True" LeftEage="57" RightEage="57" TopEage="33" BottomEage="65" Scale9OriginX="57" Scale9OriginY="33" Scale9Width="60" Scale9Height="30" ctype="ImageViewObjectData">
                            <Size X="174.0000" Y="126.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                            <Position X="87.0000" Y="100.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="1.0000" />
                            <PreSize X="1.0000" Y="1.2600" />
                            <FileData Type="PlistSubImage" Path="basics/other/ChatBubble_02.png" Plist="sprite-sheets/Basics.plist" />
                          </AbstractNodeData>
                          <AbstractNodeData Name="_txtBubbleHintLetsBet" ActionTag="-1294599260" Tag="29217" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="8.7000" RightMargin="8.7000" TopMargin="5.0000" BottomMargin="5.0000" IsCustomSize="True" FontSize="30" LabelText="Lets play" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                            <Size X="156.6000" Y="90.0000" />
                            <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                            <Position X="87.0000" Y="50.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.5000" />
                            <PreSize X="0.9000" Y="0.9000" />
                            <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                            <OutlineColor A="255" R="255" G="0" B="0" />
                            <ShadowColor A="255" R="110" G="110" B="110" />
                          </AbstractNodeData>
                        </Children>
                        <AnchorPoint ScaleX="0.1515" ScaleY="-0.2531" />
                        <Position X="388.6720" Y="212.0596" />
                        <Scale ScaleX="0.0010" ScaleY="0.0010" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.6073" Y="0.5858" />
                        <PreSize X="0.2719" Y="0.2762" />
                        <SingleColor A="255" R="150" G="200" B="255" />
                        <FirstColor A="255" R="150" G="200" B="255" />
                        <EndColor A="255" R="255" G="255" B="255" />
                        <ColorVector ScaleY="1.0000" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="320.0000" Y="181.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <SingleColor A="255" R="150" G="151" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" />
                <Position X="320.0000" Y="701.7072" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.6177" />
                <PreSize X="1.0000" Y="0.3187" />
                <SingleColor A="255" R="255" G="160" B="150" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_chatHistoryWidget" ActionTag="-136929743" Tag="4657" FrameEvent="ChatHistoryWidget" IconVisible="False" PositionPercentYEnabled="True" LeftMargin="8.5806" RightMargin="431.4194" TopMargin="94.4832" BottomMargin="841.5168" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="200.0000" Y="200.0000" />
                <Children>
                  <AbstractNodeData Name="_layoutBackgroundChatHistoryWidget" ActionTag="1198793882" Tag="4658" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="200.0000" Y="200.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgBackground01ChatHistoryWidget" ActionTag="-428577082" Alpha="102" Tag="4659" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Enable="True" LeftEage="21" RightEage="21" TopEage="21" BottomEage="21" Scale9OriginX="21" Scale9OriginY="21" Scale9Width="22" Scale9Height="22" ctype="ImageViewObjectData">
                        <Size X="200.0000" Y="200.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="100.0000" Y="100.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="0" G="0" B="0" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="1.0000" Y="1.0000" />
                        <FileData Type="PlistSubImage" Path="basics/shapes/RoundedRectangle_64px_5px.png" Plist="sprite-sheets/Basics.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_imgBackground02ChatHistoryWidget" ActionTag="-1458850401" Tag="4660" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="-1.0000" RightMargin="-1.0000" TopMargin="-1.0000" BottomMargin="-1.0000" Scale9Enable="True" LeftEage="21" RightEage="21" TopEage="21" BottomEage="21" Scale9OriginX="21" Scale9OriginY="21" Scale9Width="24" Scale9Height="24" ctype="ImageViewObjectData">
                        <Size X="202.0000" Y="202.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="100.0000" Y="100.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="170" G="169" B="53" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="1.0100" Y="1.0100" />
                        <FileData Type="PlistSubImage" Path="basics/shapes/StrokeRoundedRectangle_64px_5px.png" Plist="sprite-sheets/Basics.plist" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="100.0000" Y="100.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_scrollViewChatMessages" ActionTag="-1989109893" Tag="4661" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ScrollDirectionType="Vertical" ctype="ScrollViewObjectData">
                    <Size X="200.0000" Y="200.0000" />
                    <Children>
                      <AbstractNodeData Name="_layoutChatMessages" ActionTag="1249610409" Tag="4662" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                        <Size X="200.0000" Y="200.0000" />
                        <Children>
                          <AbstractNodeData Name="_txtChatMessages" ActionTag="-1536119386" ZOrder="1" UserData="EmptyString" Tag="4663" FrameEvent="RichText" IconVisible="False" PositionPercentXEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" LeftMargin="10.0000" RightMargin="10.0000" TopMargin="10.0000" BottomMargin="10.0000" IsCustomSize="True" FontSize="22" LabelText="Enter here" VerticalAlignmentType="VT_Bottom" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                            <Size X="180.0000" Y="180.0000" />
                            <AnchorPoint ScaleX="0.5000" />
                            <Position X="100.0000" Y="10.0000" />
                            <Scale ScaleX="1.0000" ScaleY="1.0000" />
                            <CColor A="255" R="255" G="255" B="255" />
                            <PrePosition X="0.5000" Y="0.0500" />
                            <PreSize X="0.9000" Y="0.9000" />
                            <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                            <OutlineColor A="255" R="255" G="0" B="0" />
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
                    </Children>
                    <AnchorPoint />
                    <Position />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="1.0000" Y="1.0000" />
                    <SingleColor A="255" R="255" G="150" B="100" />
                    <FirstColor A="255" R="255" G="150" B="100" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                    <InnerNodeSize Width="200" Height="200" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="108.5806" Y="941.5168" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.1697" Y="0.8288" />
                <PreSize X="0.3125" Y="0.1761" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutTableDoor" ActionTag="720595633" Tag="13582" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="104.0000" RightMargin="104.0000" TopMargin="398.2200" BottomMargin="352.7800" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="432.0000" Y="385.0000" />
                <Children>
                  <AbstractNodeData Name="_imgTable" ActionTag="1037799275" Tag="13581" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftEage="149" RightEage="149" TopEage="142" BottomEage="142" Scale9OriginX="149" Scale9OriginY="142" Scale9Width="134" Scale9Height="101" ctype="ImageViewObjectData">
                    <Size X="432.0000" Y="385.0000" />
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="216.0000" Y="192.5000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.5000" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <FileData Type="PlistSubImage" Path="gourd-crab/Table.png" Plist="sprite-sheets/GourdCrab.plist" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_layoutButtonDoor" ActionTag="870861032" Tag="13417" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="6.4800" RightMargin="-6.4800" TopMargin="-19.2500" BottomMargin="19.2500" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="432.0000" Y="385.0000" />
                    <Children>
                      <AbstractNodeData Name="_doorWidget00" ActionTag="-1106165702" Tag="13585" FrameEvent="GourdCrabDoorWidget" IconVisible="True" LeftMargin="80.0000" RightMargin="352.0000" TopMargin="103.0000" BottomMargin="282.0000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="80.0000" Y="282.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.1852" Y="0.7325" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabDoorWidget.csd" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_doorWidget01" ActionTag="942484722" Tag="13601" FrameEvent="GourdCrabDoorWidget" IconVisible="True" LeftMargin="210.0000" RightMargin="222.0000" TopMargin="103.0000" BottomMargin="282.0000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="210.0000" Y="282.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.4861" Y="0.7325" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabDoorWidget.csd" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_doorWidget02" ActionTag="1804474771" Tag="13617" FrameEvent="GourdCrabDoorWidget" IconVisible="True" LeftMargin="341.0000" RightMargin="91.0000" TopMargin="103.0000" BottomMargin="282.0000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="341.0000" Y="282.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.7894" Y="0.7325" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabDoorWidget.csd" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_doorWidget03" ActionTag="1219540845" Tag="13633" FrameEvent="GourdCrabDoorWidget" IconVisible="True" LeftMargin="79.9999" RightMargin="352.0001" TopMargin="267.0000" BottomMargin="118.0000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="79.9999" Y="118.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.1852" Y="0.3065" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabDoorWidget.csd" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_doorWidget04" ActionTag="1051646068" Tag="13649" FrameEvent="GourdCrabDoorWidget" IconVisible="True" LeftMargin="210.0000" RightMargin="222.0000" TopMargin="267.0000" BottomMargin="118.0000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="210.0000" Y="118.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.4861" Y="0.3065" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabDoorWidget.csd" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_doorWidget05" ActionTag="-217877388" Tag="13665" FrameEvent="GourdCrabDoorWidget" IconVisible="True" LeftMargin="340.9999" RightMargin="91.0001" TopMargin="267.0000" BottomMargin="118.0000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="340.9999" Y="118.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.7894" Y="0.3065" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabDoorWidget.csd" Plist="" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                    <Position X="222.4800" Y="211.7500" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5150" Y="0.5500" />
                    <PreSize X="1.0000" Y="1.0000" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                <Position X="320.0000" Y="545.2800" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.4800" />
                <PreSize X="0.6750" Y="0.3389" />
                <SingleColor A="255" R="150" G="200" B="255" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutPlayer" CanEdit="False" ActionTag="1061353403" Tag="12857" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <Children>
                  <AbstractNodeData Name="_layoutPlayerLeft" ActionTag="-1095409619" Tag="12858" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentHeightEnable="True" PercentHeightEnabled="True" RightMargin="532.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="108.0000" Y="1136.0000" />
                    <Children>
                      <AbstractNodeData Name="_playerWidget00" ActionTag="-1089430161" Tag="12859" FrameEvent="GourdCrabPlayerWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="54.0000" RightMargin="54.0000" TopMargin="772.4800" BottomMargin="363.5200" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="54.0000" Y="363.5200" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.3200" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabPlayerWidget.csd" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_playerWidget02" ActionTag="-1989158472" Tag="12918" FrameEvent="GourdCrabPlayerWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="54.0000" RightMargin="54.0000" TopMargin="636.1600" BottomMargin="499.8400" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="54.0000" Y="499.8400" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.4400" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabPlayerWidget.csd" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_playerWidget04" ActionTag="1368407729" Tag="12977" FrameEvent="GourdCrabPlayerWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="54.0000" RightMargin="54.0000" TopMargin="499.8400" BottomMargin="636.1600" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="54.0000" Y="636.1600" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5600" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabPlayerWidget.csd" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_playerWidget06" ActionTag="1624987653" Tag="13036" FrameEvent="GourdCrabPlayerWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="54.0000" RightMargin="54.0000" TopMargin="363.5200" BottomMargin="772.4800" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="54.0000" Y="772.4800" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.6800" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabPlayerWidget.csd" Plist="" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleY="0.5000" />
                    <Position Y="568.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition Y="0.5000" />
                    <PreSize X="0.1688" Y="1.0000" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_layoutPlayerRight" CanEdit="False" ActionTag="566102344" Tag="13095" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentHeightEnable="True" PercentHeightEnabled="True" LeftMargin="532.0000" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="108.0000" Y="1136.0000" />
                    <Children>
                      <AbstractNodeData Name="_playerWidget01" ActionTag="425257107" Tag="13096" FrameEvent="GourdCrabPlayerWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="54.0000" RightMargin="54.0000" TopMargin="772.4800" BottomMargin="363.5200" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="54.0000" Y="363.5200" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.3200" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabPlayerWidget.csd" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_playerWidget03" ActionTag="-1502877330" Tag="13155" FrameEvent="GourdCrabPlayerWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="54.0000" RightMargin="54.0000" TopMargin="636.1600" BottomMargin="499.8400" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="54.0000" Y="499.8400" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.4400" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabPlayerWidget.csd" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_playerWidget05" ActionTag="-224571890" Tag="13214" FrameEvent="GourdCrabPlayerWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="54.0000" RightMargin="54.0000" TopMargin="499.8400" BottomMargin="636.1600" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="54.0000" Y="636.1600" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5600" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabPlayerWidget.csd" Plist="" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_playerWidget07" ActionTag="-1964815705" Tag="13273" FrameEvent="GourdCrabPlayerWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="54.0000" RightMargin="54.0000" TopMargin="363.5200" BottomMargin="772.4800" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                        <Size X="0.0000" Y="0.0000" />
                        <AnchorPoint />
                        <Position X="54.0000" Y="772.4800" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.6800" />
                        <PreSize X="0.0000" Y="0.0000" />
                        <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabPlayerWidget.csd" Plist="" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="1.0000" ScaleY="0.5000" />
                    <Position X="640.0000" Y="568.0000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="1.0000" Y="0.5000" />
                    <PreSize X="0.1688" Y="1.0000" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
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
              <AbstractNodeData Name="_layoutUser" ActionTag="-1768292887" Tag="13332" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <Children>
                  <AbstractNodeData Name="_userWidget" ActionTag="166629674" Tag="13333" FrameEvent="GourdCrabUserWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="320.0000" RightMargin="320.0000" TopMargin="1022.4000" BottomMargin="113.6000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <AnchorPoint />
                    <Position X="320.0000" Y="113.6000" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.1000" />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabUserWidget.csd" Plist="" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_expBar" ActionTag="-2120463165" Tag="8889" FrameEvent="progressExp" IconVisible="True" PositionPercentXEnabled="True" LeftMargin="320.0000" RightMargin="320.0000" TopMargin="918.9900" BottomMargin="217.0100" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <AnchorPoint />
                    <Position X="320.0000" Y="217.0100" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.1910" />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="Normal" Path="_ccs/pisti/progressExp.csd" Plist="" />
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
              <AbstractNodeData Name="_layoutBet" ActionTag="-1396124487" Tag="13411" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <Children>
                  <AbstractNodeData Name="_layoutListBetIcon" CanEdit="False" ActionTag="1646161371" Tag="13413" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="640.0000" Y="1136.0000" />
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
                  <AbstractNodeData Name="_timerWidget" ActionTag="-938652598" Tag="13418" FrameEvent="GourdCrabTimerWidget" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="320.0000" RightMargin="320.0000" TopMargin="312.4000" BottomMargin="823.6000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <AnchorPoint />
                    <Position X="320.0000" Y="823.6000" />
                    <Scale ScaleX="0.8000" ScaleY="0.8000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.7250" />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabTimerWidget.csd" Plist="" />
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
              <AbstractNodeData Name="_layoutElementEffect" Visible="False" ActionTag="410392122" Tag="13425" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <Children>
                  <AbstractNodeData Name="_layoutStateText" ActionTag="-116457522" Tag="13426" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="640.0000" Y="1136.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgTextWaiting" ActionTag="1498133241" VisibleForFrame="False" Tag="13427" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="178.5000" RightMargin="178.5000" TopMargin="541.0000" BottomMargin="541.0000" LeftEage="133" RightEage="133" TopEage="17" BottomEage="17" Scale9OriginX="133" Scale9OriginY="17" Scale9Width="17" Scale9Height="20" ctype="ImageViewObjectData">
                        <Size X="283.0000" Y="54.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="320.0000" Y="568.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.4422" Y="0.0475" />
                        <FileData Type="PlistSubImage" Path="texts/gourd-crab/Waiting.png" Plist="sprite-sheets/Text_EN.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_imgTextStart" ActionTag="-162507681" VisibleForFrame="False" Tag="13428" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="154.5000" RightMargin="154.5000" TopMargin="541.0000" BottomMargin="541.0000" LeftEage="133" RightEage="133" TopEage="17" BottomEage="17" Scale9OriginX="133" Scale9OriginY="17" Scale9Width="65" Scale9Height="20" ctype="ImageViewObjectData">
                        <Size X="331.0000" Y="54.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="320.0000" Y="568.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.5172" Y="0.0475" />
                        <FileData Type="PlistSubImage" Path="texts/minigames/LetsPlay_01.png" Plist="sprite-sheets/Text_EN.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_imgTextResult" ActionTag="-1031656442" VisibleForFrame="False" Tag="13429" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="141.0000" RightMargin="141.0000" TopMargin="541.0000" BottomMargin="541.0000" LeftEage="133" RightEage="133" TopEage="17" BottomEage="17" Scale9OriginX="133" Scale9OriginY="17" Scale9Width="92" Scale9Height="20" ctype="ImageViewObjectData">
                        <Size X="358.0000" Y="54.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="320.0000" Y="568.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.5594" Y="0.0475" />
                        <FileData Type="PlistSubImage" Path="texts/gourd-crab/ShowTime.png" Plist="sprite-sheets/Text_EN.plist" />
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
              <AbstractNodeData Name="_layoutInteract" Visible="False" ActionTag="-297168865" Tag="13430" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="127" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="0" G="0" B="0" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutResult" Visible="False" ActionTag="-1164684618" Tag="13431" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" ClipAble="False" BackColorAlpha="127" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <Children>
                  <AbstractNodeData Name="_resultWidget" ActionTag="569065132" Tag="23021" FrameEvent="GourdCrabResultWidget" IconVisible="True" PositionPercentXEnabled="True" LeftMargin="320.0000" RightMargin="320.0000" TopMargin="211.0000" BottomMargin="925.0000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                    <Size X="0.0000" Y="0.0000" />
                    <AnchorPoint />
                    <Position X="320.0000" Y="925.0000" />
                    <Scale ScaleX="0.9000" ScaleY="0.9000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.5000" Y="0.8143" />
                    <PreSize X="0.0000" Y="0.0000" />
                    <FileData Type="Normal" Path="_ccs/gourd-crab/GourdCrabResultWidget.csd" Plist="" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="0" G="0" B="0" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_layoutTutorial" Visible="False" ActionTag="-1077591295" Tag="13446" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="127" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="640.0000" Y="1136.0000" />
                <Children>
                  <AbstractNodeData Name="_layoutTutorialBackground" ActionTag="-342234723" UserData="FullScreenBackground" Tag="25283" IconVisible="False" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="640.0000" Y="1136.0000" />
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
                  <AbstractNodeData Name="_layoutTutorialDoor" ActionTag="1543730095" Tag="13447" IconVisible="False" LeftMargin="166.2761" RightMargin="299.7239" TopMargin="476.7239" BottomMargin="559.2761" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="174.0000" Y="100.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgBubbleBackgroundTutorialDoor" ActionTag="287129702" Tag="13448" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" BottomMargin="-26.0000" FlipX="True" Scale9Enable="True" LeftEage="57" RightEage="57" TopEage="33" BottomEage="65" Scale9OriginX="57" Scale9OriginY="33" Scale9Width="60" Scale9Height="30" ctype="ImageViewObjectData">
                        <Size X="174.0000" Y="126.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                        <Position X="87.0000" Y="100.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="1.0000" />
                        <PreSize X="1.0000" Y="1.2600" />
                        <FileData Type="PlistSubImage" Path="basics/other/ChatBubble_02.png" Plist="sprite-sheets/Basics.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_txtBubbleTutorialDoor" ActionTag="-1927046645" Tag="13449" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="8.7000" RightMargin="8.7000" TopMargin="5.0000" BottomMargin="5.0000" IsCustomSize="True" FontSize="30" LabelText="Click to bet" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="156.6000" Y="90.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="87.0000" Y="50.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.9000" Y="0.9000" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                    <Position X="253.2761" Y="659.2761" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.3957" Y="0.5803" />
                    <PreSize X="0.2719" Y="0.0880" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_layoutTutorialBet" ActionTag="-1012094143" Tag="13522" IconVisible="False" LeftMargin="95.6308" RightMargin="370.3692" TopMargin="859.1584" BottomMargin="176.8416" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="174.0000" Y="100.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgBubbleBackgroundTutorialBet" ActionTag="-1171327787" Tag="13523" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" BottomMargin="-26.0000" FlipX="True" Scale9Enable="True" LeftEage="57" RightEage="57" TopEage="33" BottomEage="65" Scale9OriginX="57" Scale9OriginY="33" Scale9Width="60" Scale9Height="30" ctype="ImageViewObjectData">
                        <Size X="174.0000" Y="126.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                        <Position X="87.0000" Y="100.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="1.0000" />
                        <PreSize X="1.0000" Y="1.2600" />
                        <FileData Type="PlistSubImage" Path="basics/other/ChatBubble_02.png" Plist="sprite-sheets/Basics.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_txtBubbleTutorialBet" ActionTag="1720026541" Tag="13524" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="8.7000" RightMargin="8.7000" TopMargin="5.0000" BottomMargin="5.0000" IsCustomSize="True" FontSize="30" LabelText="Change the bet here" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="156.6000" Y="90.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="87.0000" Y="50.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.9000" Y="0.9000" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                    <Position X="182.6308" Y="276.8416" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.2854" Y="0.2437" />
                    <PreSize X="0.2719" Y="0.0880" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_layoutTutorialRetract" ActionTag="2135539646" Tag="24799" IconVisible="False" LeftMargin="359.7344" RightMargin="106.2656" TopMargin="826.4366" BottomMargin="209.5634" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="174.0000" Y="100.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgBubbleBackgroundTutorialRetract" ActionTag="-1175702609" Tag="24800" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" BottomMargin="-26.0000" FlipX="True" Scale9Enable="True" LeftEage="57" RightEage="57" TopEage="33" BottomEage="65" Scale9OriginX="57" Scale9OriginY="33" Scale9Width="60" Scale9Height="30" ctype="ImageViewObjectData">
                        <Size X="174.0000" Y="126.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                        <Position X="87.0000" Y="100.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="1.0000" />
                        <PreSize X="1.0000" Y="1.2600" />
                        <FileData Type="PlistSubImage" Path="basics/other/ChatBubble_02.png" Plist="sprite-sheets/Basics.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_txtBubbleTutorialRetract" ActionTag="-1290543591" Tag="24801" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="8.7000" RightMargin="8.7000" TopMargin="5.0000" BottomMargin="5.0000" IsCustomSize="True" FontSize="30" LabelText="Withdraw coin gem" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="156.6000" Y="90.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="87.0000" Y="50.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.9000" Y="0.9000" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                    <Position X="446.7344" Y="309.5634" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.6980" Y="0.2725" />
                    <PreSize X="0.2719" Y="0.0880" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_layoutTutorialResult" ActionTag="1924023595" Tag="24802" IconVisible="False" LeftMargin="117.0138" RightMargin="348.9862" TopMargin="325.9553" BottomMargin="710.0447" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="174.0000" Y="100.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgBubbleBackgroundTutorialResult" ActionTag="-1523601139" Tag="24803" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentWidthEnabled="True" TopMargin="100.0000" BottomMargin="-126.0000" FlipX="True" FlipY="True" Scale9Enable="True" LeftEage="57" RightEage="57" TopEage="33" BottomEage="65" Scale9OriginX="57" Scale9OriginY="33" Scale9Width="60" Scale9Height="30" ctype="ImageViewObjectData">
                        <Size X="174.0000" Y="126.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                        <Position X="87.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" />
                        <PreSize X="1.0000" Y="1.2600" />
                        <FileData Type="PlistSubImage" Path="basics/other/ChatBubble_02.png" Plist="sprite-sheets/Basics.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_txtBubbleTutorialResult" ActionTag="-1959873455" Tag="24804" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="8.7000" RightMargin="8.7000" TopMargin="5.0000" BottomMargin="5.0000" IsCustomSize="True" FontSize="28" LabelText="Result and time remaining" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="156.6000" Y="90.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="87.0000" Y="50.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="0.9000" Y="0.9000" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" ScaleY="1.0000" />
                    <Position X="204.0138" Y="810.0447" />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition X="0.3188" Y="0.7131" />
                    <PreSize X="0.2719" Y="0.0880" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition />
                <PreSize X="1.0000" Y="1.0000" />
                <SingleColor A="255" R="0" G="0" B="0" />
                <FirstColor A="255" R="150" G="200" B="255" />
                <EndColor A="255" R="255" G="255" B="255" />
                <ColorVector ScaleY="1.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_chatPopup" Visible="False" ActionTag="-1860660158" Tag="13525" FrameEvent="ChatPopup" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="320.0000" RightMargin="320.0000" TopMargin="568.0000" BottomMargin="568.0000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="320.0000" Y="568.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="_ccs/interact/chat/ChatPopup.csd" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="_interactPopup" Visible="False" ActionTag="1922369160" Tag="13545" FrameEvent="InteractPopup" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="320.0000" RightMargin="320.0000" TopMargin="568.0000" BottomMargin="568.0000" StretchWidthEnable="False" StretchHeightEnable="False" InnerActionSpeed="1.0000" CustomSizeEnabled="False" ctype="ProjectNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="320.0000" Y="568.0000" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.5000" />
                <PreSize X="0.0000" Y="0.0000" />
                <FileData Type="Normal" Path="_ccs/interact/interact/InteractPopup.csd" Plist="" />
              </AbstractNodeData>
              <AbstractNodeData Name="_nodeX2Icon" ActionTag="-1243494478" Tag="1577" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="33.2800" RightMargin="606.7200" TopMargin="948.9008" BottomMargin="187.0992" ctype="SingleNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="33.2800" Y="187.0992" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.0520" Y="0.1647" />
                <PreSize X="0.0000" Y="0.0000" />
              </AbstractNodeData>
              <AbstractNodeData Name="_nodeTrophyProgress" ActionTag="1357915953" Tag="3391" IconVisible="True" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftMargin="320.0000" RightMargin="320.0000" TopMargin="840.6400" BottomMargin="295.3600" ctype="SingleNodeObjectData">
                <Size X="0.0000" Y="0.0000" />
                <AnchorPoint />
                <Position X="320.0000" Y="295.3600" />
                <Scale ScaleX="1.0000" ScaleY="1.0000" />
                <CColor A="255" R="255" G="255" B="255" />
                <PrePosition X="0.5000" Y="0.2600" />
                <PreSize X="0.0000" Y="0.0000" />
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