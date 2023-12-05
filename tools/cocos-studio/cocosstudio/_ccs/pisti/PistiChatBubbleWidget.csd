<GameFile>
  <PropertyGroup Name="PistiChatBubbleWidget" Type="Node" ID="a0f3bae9-14c3-478d-8535-23d3952f485f" Version="3.10.0.0" />
  <Content ctype="GameProjectContent">
    <Content>
      <Animation Duration="60" Speed="1.0000" ActivedAnimationName="open">
        <Timeline ActionTag="-1031762248" Property="Scale">
          <ScaleFrame FrameIndex="0" X="0.0001" Y="0.0001">
            <EasingData Type="26" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="30" X="1.0000" Y="1.0000">
            <EasingData Type="25" />
          </ScaleFrame>
          <ScaleFrame FrameIndex="60" X="0.0001" Y="0.0001">
            <EasingData Type="26" />
          </ScaleFrame>
        </Timeline>
      </Animation>
      <AnimationList>
        <AnimationInfo Name="open" StartIndex="0" EndIndex="30">
          <RenderColor A="255" R="255" G="228" B="225" />
        </AnimationInfo>
        <AnimationInfo Name="close" StartIndex="30" EndIndex="60">
          <RenderColor A="255" R="173" G="255" B="47" />
        </AnimationInfo>
      </AnimationList>
      <ObjectData Name="Node" Tag="392" ctype="GameNodeObjectData">
        <Size X="0.0000" Y="0.0000" />
        <Children>
          <AbstractNodeData Name="_layoutRoot" ActionTag="-668650018" Tag="1017" IconVisible="False" RightMargin="-50.0000" TopMargin="-50.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
            <Size X="50.0000" Y="50.0000" />
            <Children>
              <AbstractNodeData Name="_layoutBubble" ActionTag="-1031762248" Tag="393" IconVisible="False" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                <Size X="50.0000" Y="50.0000" />
                <Children>
                  <AbstractNodeData Name="_layoutContent" ActionTag="-1938786133" Tag="395" IconVisible="False" LeftMargin="-100.0000" RightMargin="-50.0000" TopMargin="-50.0000" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="200.0000" Y="100.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgBackgroundContent" ActionTag="-1165870172" Tag="984" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" Scale9Enable="True" LeftEage="99" RightEage="99" TopEage="21" BottomEage="21" Scale9OriginX="99" Scale9OriginY="21" Scale9Width="104" Scale9Height="22" ctype="ImageViewObjectData">
                        <Size X="200.0000" Y="100.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="100.0000" Y="50.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="1.0000" Y="1.0000" />
                        <FileData Type="PlistSubImage" Path="basics/other/ChatBubble_01.png" Plist="sprite-sheets/Basics.plist" />
                      </AbstractNodeData>
                      <AbstractNodeData Name="_txtContent" ActionTag="1464846876" UserData="EmptyString, fitMultipleLine" Tag="394" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" PercentWidthEnable="True" PercentHeightEnable="True" PercentWidthEnabled="True" PercentHeightEnabled="True" LeftMargin="10.0000" RightMargin="10.0000" TopMargin="7.0000" BottomMargin="13.0000" IsCustomSize="True" FontSize="35" LabelText="Text Label" HorizontalAlignmentType="HT_Center" VerticalAlignmentType="VT_Center" ShadowOffsetX="2.0000" ShadowOffsetY="-2.0000" ctype="TextObjectData">
                        <Size X="180.0000" Y="80.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="100.0000" Y="53.0000" />
                        <Scale ScaleX="1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="26" G="26" B="26" />
                        <PrePosition X="0.5000" Y="0.5300" />
                        <PreSize X="0.9000" Y="0.8000" />
                        <FontResource Type="Normal" Path="fonts/BebasNeueProBold.ttf" Plist="" />
                        <OutlineColor A="255" R="255" G="0" B="0" />
                        <ShadowColor A="255" R="110" G="110" B="110" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.5000" />
                    <Position />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="4.0000" Y="2.0000" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                  <AbstractNodeData Name="_layoutArrow" ActionTag="-2041941994" VisibleForFrame="False" Tag="985" IconVisible="False" LeftMargin="-4.7600" RightMargin="26.7600" TopMargin="28.5400" BottomMargin="-7.5400" TouchEnable="True" ClipAble="False" BackColorAlpha="102" ColorAngle="90.0000" Scale9Width="1" Scale9Height="1" ctype="PanelObjectData">
                    <Size X="28.0000" Y="29.0000" />
                    <Children>
                      <AbstractNodeData Name="_imgArrow" ActionTag="901081404" Tag="982" IconVisible="False" PositionPercentXEnabled="True" PositionPercentYEnabled="True" LeftEage="9" RightEage="9" TopEage="9" BottomEage="9" Scale9OriginX="9" Scale9OriginY="9" Scale9Width="10" Scale9Height="11" ctype="ImageViewObjectData">
                        <Size X="28.0000" Y="29.0000" />
                        <AnchorPoint ScaleX="0.5000" ScaleY="0.5000" />
                        <Position X="14.0000" Y="14.5000" />
                        <Scale ScaleX="-1.0000" ScaleY="1.0000" />
                        <CColor A="255" R="255" G="255" B="255" />
                        <PrePosition X="0.5000" Y="0.5000" />
                        <PreSize X="1.0000" Y="1.0000" />
                        <FileData Type="PlistSubImage" Path="basics/other/ChatBubbleArrow_01.png" Plist="sprite-sheets/Basics.plist" />
                      </AbstractNodeData>
                    </Children>
                    <AnchorPoint ScaleX="0.1700" ScaleY="0.2600" />
                    <Position />
                    <Scale ScaleX="1.0000" ScaleY="1.0000" />
                    <CColor A="255" R="255" G="255" B="255" />
                    <PrePosition />
                    <PreSize X="0.5600" Y="0.5800" />
                    <SingleColor A="255" R="150" G="200" B="255" />
                    <FirstColor A="255" R="150" G="200" B="255" />
                    <EndColor A="255" R="255" G="255" B="255" />
                    <ColorVector ScaleY="1.0000" />
                  </AbstractNodeData>
                </Children>
                <AnchorPoint />
                <Position />
                <Scale ScaleX="0.0001" ScaleY="0.0001" />
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